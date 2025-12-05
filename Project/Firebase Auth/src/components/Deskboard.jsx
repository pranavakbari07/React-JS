import { onAuthStateChanged, signOut } from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import { auth, db } from '../../firebaseConfig'
import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, updateDoc, } from "firebase/firestore";
import { Link, useNavigate } from 'react-router-dom'

export default function Dashboard() {
  const [userId, setUserId] = useState(null)
  const [userData, setUserData] = useState(null)
  const navigate = useNavigate()
  const [record, setRecord] = useState([])
  const [Task, setTask] = useState("");
  const [priourity, setPriourity] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) setUserId(user.uid);
      else navigate("/");
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
    <div className="min-h-screen bg-gray-100">
      {/* Facebook-style Header */}
      <div className="bg-white border-b border-gray-300 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between py-2">
            <div className="flex items-center gap-3 flex-1">
              <div className="text-3xl font-bold" style={{ color: '#1877F2' }}>facebook</div>
            </div>
            
            {/* Search Bar */}
            <div className="flex-1 max-w-md mx-4 hidden md:block">
              <div className="bg-gray-100 rounded-full px-4 py-2 flex items-center gap-2">
                <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input 
                  type="text" 
                  placeholder="Search" 
                  className="bg-transparent outline-none flex-1 text-sm placeholder-gray-500"
                />
              </div>
            </div>

            {/* Right Side - User Info */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2">
                <img 
                  src={userData?.photo ? userData.photo : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfgJ0SYGF5qAueA_nbIYvUB58DCZ2KG-DkYA&s"} 
                  alt="User Avatar" 
                  className="w-9 h-9 rounded-full object-cover" 
                />
                <span className="hidden md:block font-semibold text-sm">{userData?.name || 'User'}</span>
              </div>
              <button 
                onClick={handleLogout} 
                className="px-4 py-1.5 rounded-md font-semibold text-sm text-white hover:opacity-90 transition cursor-pointer"
                style={{ backgroundColor: '#1877F2' }}
              >
                Log Out
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
            <div className="bg-white rounded-lg shadow-sm border border-gray-300 p-4 sticky top-20">
              <div className="flex items-center gap-3 mb-4 pb-4 border-b border-gray-200">
                <img 
                  src={userData?.photo ? userData.photo : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfgJ0SYGF5qAueA_nbIYvUB58DCZ2KG-DkYA&s"} 
                  alt="User Avatar" 
                  className="w-10 h-10 rounded-full object-cover" 
                />
                <span className="font-semibold">{userData?.name || 'User'}</span>
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-100 cursor-pointer">
                  <svg className="w-6 h-6" style={{ color: '#1877F2' }} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                  <span className="text-sm font-medium">Tasks</span>
                </div>
              </div>
            </div>
          </div>

          {/* Main Feed */}
          <div className="flex-1 max-w-2xl mx-auto">
            {/* Add Task Card */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-300 p-4 mb-4">
              <div className="flex items-center gap-3 mb-4">
                <img 
                  src={userData?.photo ? userData.photo : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfgJ0SYGF5qAueA_nbIYvUB58DCZ2KG-DkYA&s"} 
                  alt="User Avatar" 
                  className="w-10 h-10 rounded-full object-cover" 
                />
                <div className="flex-1">
                  <h3 className="font-semibold text-sm">{userData?.name || 'User'}</h3>
                </div>
              </div>
              
              <div className="space-y-3">
                <input 
                  type="text" 
                  value={Task} 
                  onChange={(e) => setTask(e.target.value)} 
                  placeholder="What's on your mind?" 
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-400 bg-gray-50 placeholder-gray-500" 
                />
                
                <div className="flex gap-2">
                  <input 
                    type="text" 
                    value={priourity} 
                    onChange={(e) => setPriourity(e.target.value)} 
                    placeholder="Priority (e.g., High, Medium, Low)"
                    className="flex-1 px-4 py-2.5 border border-gray-300 rounded-lg bg-white focus:outline-none focus:border-gray-400 text-sm placeholder-gray-500"
                  />
                  
                  <button 
                    onClick={handleTask} 
                    className="px-6 py-2.5 cursor-pointer rounded-lg text-white font-semibold text-sm hover:opacity-95 transition"
                    style={{ backgroundColor: '#1877F2' }}
                  >
                    {editIndex ? "Update" : "Post"}
                  </button>
                </div>
              </div>
            </div>

            {/* Tasks Feed */}
            <div className="mb-4">
              <h2 className="text-xl font-bold mb-4 px-2">Your Tasks ({record.length})</h2>
              
              {record.length === 0 ? (
                <div className="bg-white rounded-lg shadow-sm border border-gray-300 p-12 text-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-gray-300 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                  <p className="text-lg font-semibold text-gray-600 mb-1">No tasks yet</p>
                  <p className="text-sm text-gray-500">Add your first task to get started!</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {record.map((e, i) => {
                    const priorityColor =
                      e.priourity?.toLowerCase() === "high" ? "#dc2626" :
                        e.priourity?.toLowerCase() === "medium" ? "#d97706" :
                          e.priourity?.toLowerCase() === "low" ? "#16a34a" :
                            "#6b7280";

                    return (
                      <div key={i} className="bg-white rounded-lg shadow-sm border border-gray-300 p-4 hover:shadow-md transition">
                        <div className="flex items-start gap-3 mb-3">
                          <img 
                            src={userData?.photo ? userData.photo : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfgJ0SYGF5qAueA_nbIYvUB58DCZ2KG-DkYA&s"} 
                            alt="User Avatar" 
                            className="w-10 h-10 rounded-full object-cover flex-shrink-0" 
                          />
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <h3 className="font-semibold text-sm">{userData?.name || 'User'}</h3>
                              <span className="text-xs text-gray-500">•</span>
                              <span className="text-xs text-gray-500">now</span>
                            </div>
                            <p className="text-sm text-gray-700 mb-2">{e.Task}</p>
                            <span 
                              className="inline-block px-2.5 py-1 rounded-full text-xs font-semibold text-white"
                              style={{ backgroundColor: priorityColor }}
                            >
                              {e.priourity || 'Normal'}
                            </span>
                          </div>
                        </div>
                        
                        {/* Action Buttons */}
                        <div className="flex gap-2 pt-3 border-t border-gray-200">
                          <button 
                            onClick={() => handleEdit(e.docId)} 
                            className="flex-1 px-4 py-2 cursor-pointer rounded-md text-sm font-semibold hover:bg-gray-100 transition flex items-center justify-center gap-2"
                            style={{ color: '#1877F2' }}
                          >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                            </svg>
                            Edit
                          </button>
                          <button 
                            onClick={() => handleDelete(e.docId)} 
                            className="flex-1 px-4 py-2 cursor-pointer rounded-md text-sm font-semibold hover:bg-gray-100 transition flex items-center justify-center gap-2 text-red-600"
                          >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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