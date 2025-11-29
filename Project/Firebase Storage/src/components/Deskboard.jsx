import { onAuthStateChanged, signOut } from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import { auth, db } from '../../firebaseConfig'
import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, updateDoc } from 'firebase/firestore'
import { useNavigate } from 'react-router-dom'

export default function Dashboard() {
  const [userId, setUserId] = useState(null)
  const [userData, setUserData] = useState(null)
  const navigate = useNavigate()
  const [Task, setTask] = useState("")
  const [priourity, setPriourity] = useState("")
  const [record, setRecord] = useState([])
  const [editIndex, setEditIndex] = useState(null)

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUserId(user.uid)
    })
  }, [])

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
    let allData = await getDocs(collection(db, "Todos"))
    let newData = allData.docs.map((data) => ({
      docId: data.id,
      ...data.data()
    }))
    setRecord(newData)
  }

  const handleTask = async () => {
    const obj = { uid: userId, Task, priourity };
    if (editIndex == null) {
      await addDoc(collection(db, "Todos"), obj).then((data) => {
        setRecord([...record, obj])
      });
    }
    else {
      await updateDoc(doc(db, "Todos", editIndex), {
        Task,
        priourity,
      });
    }
    setTask("");
    setPriourity("");
    setEditIndex(null);
    fetchData();
  }

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "Todos", id));
    fetchData();
  }

  const handleEdit = (id) => {
    let singleData = record.find((item) => item.docId == id);
    setTask(singleData.Task)
    setPriourity(singleData.priourity)
    setEditIndex(id);
  }

  const handleLogout = async () => {
    await signOut(auth)
    navigate("/")
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#e7efff] via-[#f5f7ff] to-white flex flex-col items-center justify-center px-4 py-12 space-y-6">
      <div className="text-center space-y-2">
        <p className="text-4xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#0866ff] to-[#42b72a]">TaskBook</p>
        <p className="text-base md:text-lg text-gray-700 max-w-3xl">Stay on top of every task in the same welcoming layout as your register and login screens.</p>
        <p className="text-sm text-gray-500">Signed in as {userData?.name || "friend"}</p>
      </div>

      <div className="w-full max-w-4xl">
        <div className="bg-gradient-to-r from-[#d6e3ff] via-white to-[#d7f8e1] p-[2px] rounded-2xl shadow-xl">
          <div className="bg-white rounded-[18px] p-8 space-y-8">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div className="space-y-1">
                <p className="text-xs uppercase tracking-[0.3em] text-[#1877f2]">Dashboard</p>
                <h1 className="text-3xl font-semibold text-gray-900">Manage your tasks</h1>
                <p className="text-sm text-gray-500">Create, edit, and complete tasks from a single card.</p>
              </div>
              <button onClick={handleLogout} className="px-5 py-2 rounded-xl font-semibold text-white bg-gradient-to-r from-[#1877f2] to-[#166fe5] hover:opacity-95 transition-opacity cursor-pointer">Log Out</button>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-900">{editIndex ? "Update task" : "Add a new task"}</h2>
              <input type="text" value={Task} onChange={(e) => setTask(e.target.value)} placeholder='Give your task a title' name='task' className="w-full px-4 py-3 bg-[#f6f8fc] border border-transparent rounded-xl text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#1877f2]" />
              <input type="text" value={priourity} onChange={(e) => setPriourity(e.target.value)} placeholder='Priority (High / Medium / Low)' name='priority' className="w-full px-4 py-3 bg-[#f6f8fc] border border-transparent rounded-xl text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#1877f2]" />
              <button onClick={handleTask} className="w-full py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-[#1877f2] to-[#166fe5] hover:opacity-95 transition-opacity cursor-pointer">{editIndex == null ? "Add Task" : "Save Changes"}</button>
            </div>

            <div className="border-t border-gray-100" />

            <div className="space-y-4">
              <div className="space-y-1">
                <h2 className="text-xl font-semibold text-gray-900">Your Tasks</h2>
                <p className="text-sm text-gray-500">Stay organized with clearly labeled priorities.</p>
              </div>

              {record.length === 0 ? (
                <div className="text-center py-8 rounded-xl bg-[#f6f8fc]">
                  <p className="text-gray-500 text-base">No tasks yet. Start by adding one above.</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {
                    record.map((e, i) => {
                      const priorityColor = e.priourity?.toLowerCase() === 'high' ? 'bg-[#ffe3e3] text-[#b42318] border-[#ffb3b3]' :
                        e.priourity?.toLowerCase() === 'medium' ? 'bg-[#fff4d6] text-[#b45309] border-[#ffd59b]' :
                          e.priourity?.toLowerCase() === 'low' ? 'bg-[#e5fbef] text-[#15803d] border-[#b5f0cf]' :
                            'bg-[#eef2ff] text-[#312e81] border-[#cdd5ff]'

                      return (
                        <div key={i} className="bg-[#fdfefe] border border-gray-100 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow flex flex-col gap-4">
                          <div>
                            <h3 className="text-lg font-semibold text-gray-900">{e.Task}</h3>
                            <span className={`inline-block mt-3 px-3 py-1 rounded-full text-xs font-semibold border ${priorityColor}`}>{e.priourity || 'Low'}</span>
                          </div>
                          <div className="flex gap-3">
                            <button onClick={() => handleEdit(e.docId)} className="flex-1 px-4 py-2 rounded-xl font-medium text-gray-700 bg-[#f4f6fb] hover:bg-[#e8ecf7] transition-colors cursor-pointer">Edit</button>
                            <button onClick={() => handleDelete(e.docId)} className="flex-1 px-4 py-2 rounded-xl font-medium text-white bg-gradient-to-r from-[#ff5f6d] to-[#c81e1e] hover:opacity-95 transition-opacity cursor-pointer">Delete</button>
                          </div>
                        </div>
                      );
                    })
                  }
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}