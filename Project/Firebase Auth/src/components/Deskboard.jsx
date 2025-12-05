import { onAuthStateChanged, signOut } from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import { auth, db } from '../../firebaseConfig'
import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, updateDoc, } from "firebase/firestore";
import { Link, useNavigate } from 'react-router-dom'

export default function Dashboard() {
  const [userId, setUserId] = useState(null)
  const [userData, setUserData] = useState(null)
  const [authUser, setAuthUser] = useState(null)
  const navigate = useNavigate()
  const [record, setRecord] = useState([])
  const [Task, setTask] = useState("");
  const [priourity, setPriourity] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserId(user.uid);
        setAuthUser(user);
      } else {
        navigate("/");
      }
    });
  }, []);

  useEffect(() => {
    if (userId) {
      fetchUser()
      fetchData()
    }
  }, [userId, record])

  const fetchUser = async () => {
    await getDoc(doc(db, "Users", userId)).then((res) => {
      setUserData(res.data());
    });
  };

  const fetchData = async () => {
    const allData = await getDocs(collection(db, "Todos"));
    const newData = allData.docs
      .map((data) => ({
        docId: data.id,
        ...data.data(),
      }))
      .filter((t) => t.uid === userId);
    setRecord(newData);
  };

  const handleTask = async () => {
    const obj = { uid: userId, Task, priourity };

    if (editIndex == null) {
      await addDoc(collection(db, "Todos"), obj);
    } else {
      await updateDoc(doc(db, "Todos", editIndex), {
        Task,
        priourity,
      });
    }

    setTask("");
    setPriourity("");
    setEditIndex(null);
    fetchData();
  };

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "Todos", id));
    fetchData();
  };

  const handleEdit = (id) => {
    const singleData = record.find((item) => item.docId === id);
    setTask(singleData.Task);
    setPriourity(singleData.priourity);
    setEditIndex(id);
  };

  const handleLogout = async () => {
    await signOut(auth)
    navigate("/")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>

      {/* Facebook-style Header */}
      <div className="bg-white/90 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50 shadow-lg relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between py-3">
            <div className="flex items-center gap-3 flex-1">
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                facebook
              </div>
            </div>

            {/* Search Bar */}
            <div className="flex-1 max-w-md mx-4 hidden md:block">
              <div className="bg-gray-100 rounded-full px-4 py-2.5 flex items-center gap-2 hover:bg-gray-200 transition-all duration-300 focus-within:bg-white focus-within:ring-2 focus-within:ring-blue-200 focus-within:shadow-md">
                <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input
                  type="text"
                  placeholder="Search tasks..."
                  className="bg-transparent outline-none flex-1 text-sm placeholder-gray-500"
                />
              </div>
            </div>

            {/* Right Side - User Info */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full hover:bg-gray-100 transition-all duration-200 cursor-pointer group">
                <img
                  src={userData?.photo ? userData.photo : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfgJ0SYGF5qAueA_nbIYvUB58DCZ2KG-DkYA&s"}
                  alt="User Avatar"
                  className="w-9 h-9 rounded-full object-cover ring-2 ring-gray-200 group-hover:ring-blue-300 transition-all"
                />
                <div className="hidden md:block">
                  <div className="font-semibold text-sm text-gray-700">{userData?.name || authUser?.displayName || 'User'}</div>
                  <div className="text-xs text-gray-500">{userData?.email || authUser?.email || ''}</div>
                </div>
              </div>
              <button
                onClick={handleLogout}
                className="px-5 py-2 rounded-lg font-semibold text-sm text-white hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 cursor-pointer relative overflow-hidden group"
                style={{
                  backgroundColor: '#1877F2',
                  backgroundImage: 'linear-gradient(135deg, #1877F2 0%, #4267B2 100%)'
                }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                  </svg>
                  Log Out
                </span>
                <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex gap-4">
          {/* Left Sidebar */}
          <div className="hidden lg:block w-64 flex-shrink-0">
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-5 sticky top-24 transform transition-all duration-300 hover:shadow-xl">
              <div className="flex items-center gap-3 mb-4 pb-4 border-b border-gray-200">
                <img
                  src={userData?.photo ? userData.photo : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfgJ0SYGF5qAueA_nbIYvUB58DCZ2KG-DkYA&s"}
                  alt="User Avatar"
                  className="w-12 h-12 rounded-full object-cover ring-2 ring-blue-200"
                />
                <div className="flex-1 min-w-0">
                  <div className="font-semibold text-gray-800 truncate">{userData?.name || authUser?.displayName || 'User'}</div>
                  <div className="text-xs text-gray-500 truncate mt-0.5">
                    {userData?.email || authUser?.email || ''}
                  </div>
                </div>
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 cursor-pointer transition-all duration-200 group">
                  <svg className="w-6 h-6 transition-all duration-200 group-hover:scale-110" style={{ color: '#1877F2' }} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                  </svg>
                  <span className="text-sm font-medium text-gray-700 group-hover:text-blue-600">Tasks</span>
                </div>
              </div>
            </div>
          </div>

          {/* Main Feed */}
          <div className="flex-1 max-w-2xl mx-auto">
            {/* Add Task Card */}
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200/50 p-6 mb-6 transform transition-all duration-300 hover:shadow-2xl hover:scale-[1.01]">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg shadow-md">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">Create New Task</h3>
                    <p className="text-xs text-gray-500">Add a task to your list</p>
                  </div>
                </div>
                {editIndex && (
                  <button
                    onClick={() => {
                      setTask("");
                      setPriourity("");
                      setEditIndex(null);
                    }}
                    className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition-all"
                  >
                    Cancel
                  </button>
                )}
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Task Title
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                      </svg>
                    </div>
                    <input
                      type="text"
                      value={Task}
                      onChange={(e) => setTask(e.target.value)}
                      placeholder="Enter your task here..."
                      className="w-full pl-12 pr-4 py-3.5 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 bg-white placeholder-gray-400 transition-all duration-300 hover:border-blue-300"
                    />
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Priority
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <select
                        value={priourity}
                        onChange={(e) => setPriourity(e.target.value)}
                        className="w-full pl-12 pr-4 py-3.5 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 bg-white text-gray-700 transition-all duration-300 hover:border-blue-300 appearance-none cursor-pointer"
                      >
                        <option value="" hidden>Select Priority</option>
                        <option value="High">High Priority</option>
                        <option value="Medium">Medium Priority</option>
                        <option value="Low">Low Priority</option>
                      </select>
                      <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
                        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-end">
                    <button
                      onClick={handleTask}
                      className="px-8 py-3.5 cursor-pointer rounded-lg text-white font-semibold text-base hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group whitespace-nowrap"
                      style={{
                        backgroundColor: '#1877F2',
                        backgroundImage: 'linear-gradient(135deg, #1877F2 0%, #4267B2 100%)'
                      }}
                    >
                      <span className="relative z-10 flex items-center gap-2">
                        {editIndex ? (
                          <>
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            Update Task
                          </>
                        ) : (
                          <>
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                            </svg>
                            Add Task
                          </>
                        )}
                      </span>
                      <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Tasks Feed */}
            <div className="mb-4">
              <div className="flex items-center gap-3 mb-6 px-2">
                <div className="p-2 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg shadow-md">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Your Tasks
                  <span className="ml-2 text-base font-normal text-gray-500 bg-white px-2 py-1 rounded-full border border-gray-200">
                    {record.length}
                  </span>
                </h2>
              </div>

              {record.length === 0 ? (
                <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200/50 p-16 text-center transform transition-all duration-300 hover:shadow-2xl">
                  <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 mb-5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                  <p className="text-xl font-semibold text-gray-700 mb-2">No tasks yet</p>
                  <p className="text-sm text-gray-500">Add your first task to get started!</p>
                </div>
              ) : (
                <div className="space-y-5">
                  {record.map((e, i) => {
                    const priorityColor =
                      e.priourity?.toLowerCase() === "high" ? "#dc2626" :
                        e.priourity?.toLowerCase() === "medium" ? "#d97706" :
                          e.priourity?.toLowerCase() === "low" ? "#16a34a" :
                            "#6b7280";

                    return (
                      <div key={i} className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200/50 p-5 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-[1.01]">
                        <div className="flex items-start gap-4 mb-4">
                          <div className="relative">
                            <img
                              src={userData?.photo ? userData.photo : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfgJ0SYGF5qAueA_nbIYvUB58DCZ2KG-DkYA&s"}
                              alt="User Avatar"
                              className="w-12 h-12 rounded-full object-cover flex-shrink-0 ring-2 ring-gray-200"
                            />
                            <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
                              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            </div>
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <h3 className="font-semibold text-gray-800">{userData?.name || authUser?.displayName || 'User'}</h3>
                              <span className="text-xs text-gray-400">•</span>
                              <span className="text-xs text-gray-500">now</span>
                            </div>
                            <p className="text-xs text-gray-500 mb-2">
                              {userData?.email || authUser?.email || ''}
                            </p>
                            <p className="text-sm text-gray-700 mb-3 leading-relaxed">{e.Task}</p>
                            <span
                              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-semibold text-white shadow-md"
                              style={{ backgroundColor: priorityColor }}
                            >
                              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                              </svg>
                              {e.priourity || 'Normal'}
                            </span>
                          </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex gap-3 pt-4 border-t border-gray-200">
                          <button
                            onClick={() => handleEdit(e.docId)}
                            className="flex-1 px-4 py-2.5 cursor-pointer rounded-lg text-sm font-semibold hover:bg-blue-50 transition-all duration-200 flex items-center justify-center gap-2 transform hover:scale-105 group"
                            style={{ color: '#1877F2' }}
                          >
                            <svg className="w-5 h-5 group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                            </svg>
                            Edit
                          </button>
                          <button
                            onClick={() => handleDelete(e.docId)}
                            className="flex-1 px-4 py-2.5 cursor-pointer rounded-lg text-sm font-semibold hover:bg-red-50 transition-all duration-200 flex items-center justify-center gap-2 transform hover:scale-105 text-red-600 group"
                          >
                            <svg className="w-5 h-5 group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                            Delete
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>

          {/* Right Sidebar (Empty for now, but maintains layout) */}
          <div className="hidden xl:block w-64 flex-shrink-0">
          </div>
        </div>
      </div>
    </div>
  )
}