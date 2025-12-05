import { onAuthStateChanged, signOut } from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import { auth, db } from '../../firebaseConfig'
import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, updateDoc } from 'firebase/firestore'
import { useNavigate } from 'react-router-dom'

export default function Deskboard() {

  const [userId, setUserId] = useState(null)
  const [userData, setUserData] = useState(null)

  const [task, setTask] = useState("")
  const [priority, setPriority] = useState("")
  const [records, setRecords] = useState([])
  const [editIndex, setEditIndex] = useState(null)

  const navigate = useNavigate()

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserId(user.uid)
      } else {
        navigate("/")
      }
    })
  }, [navigate])

  useEffect(() => {
    if (userId) {
      fetchuser()
      fetchData()
    }
  }, [userId])


  const fetchuser = async () => {
    await getDoc(doc(db, 'users', userId)).then((res) => {
      setUserData(res.data())
    })
  }


  const handlelogout = async () => {
    await signOut(auth)
    navigate("/")
  }


  const fetchData = async () => {
    let allData = await getDocs(collection(db, "tasks"))
    let newData = allData.docs.map((data) => ({
      docId: data.id,
      ...data.data()
    }));
    // Filter tasks by current user
    let filteredData = newData.filter((item) => item.uid === userId)
    console.log(filteredData);
    setRecords(filteredData)
  }

  const handleTaskChange = async () => {
    const obj = { uid: userId, task, priority };
    if (editIndex == null) {
      await addDoc(collection(db, "tasks"), obj).then((data) => {
        setRecords([...records, { docId: data.id, ...obj }])
      });
    }
    else {
      await updateDoc(doc(db, "tasks", editIndex), {
        task,
        priority,
      });
    }
    setTask("");
    setPriority("");
    setEditIndex(null);
    fetchData();
  }


  const hanleEdit = async (docId) => {
    let singleData = records.find((item) => item.docId == docId);
    if (singleData) {
      setTask(singleData.task)
      setPriority(singleData.priority)
      setEditIndex(docId);
    }
  }


  const hanleDelete = async (docId) => {
    await deleteDoc(doc(db, "tasks", docId))
    fetchData()

  }


  return (
    <div>
      <h1>Deskboard</h1>
      <button onClick={handlelogout}>Log Out</button>

      <input type="text" name="task" value={task} onChange={(e) => setTask(e.target.value)} placeholder='Enter your task' />
      <input type="text" name="priority" value={priority} onChange={(e) => setPriority(e.target.value)} placeholder='Enter priority' />
      <button onClick={handleTaskChange}>{editIndex ? "Update Task" : "Add to task"}</button>


      {
        records.map((e, i) => (
          <ul key={e.docId}>
            <li>{e.task}</li>
            <li>{e.priority}</li>
            <li><button onClick={() => hanleEdit(e.docId)}>Edit</button></li>
            <li><button onClick={() => hanleDelete(e.docId)}>Delete</button></li>
          </ul>
        ))
      }
    </div>

  )
}
