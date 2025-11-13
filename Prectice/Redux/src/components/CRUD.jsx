import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addData, deleteData, updateData } from '../feature/TodoSlice'

export default function CRUD() {

    const dispatch = useDispatch()

    const [formdata, setFormdata] = useState({})
    const [editIndex, setEditIndex] = useState(null)

    const data = useSelector((state) => {
        return state.TodoKey.record
    })

    const handleChange = (e) => {
        setFormdata({
            ...formdata,
            id: Date.now(),
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (editIndex == null) {
            dispatch(addData(formdata))
        } else {
            dispatch(updateData({ id: editIndex, data: formdata }))
        }
        setFormdata({
            name: '',
            age: ''
        })
        setEditIndex(null)
    }

    const handleDelete = (id) => {
        dispatch(deleteData(id))
    }

    const handleEdit = (id) => {
        let singleData = data.find((item) => item.id == id);
        setFormdata({
            name: singleData.name,
            age: singleData.age
        });
        setEditIndex(id)
    }

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">CRUD</h1>
            <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6 w-full max-w-md mb-8">
                <div className="flex flex-wrap justify-between">
                    <input type="text" value={formdata.name} name='name' placeholder='Enter your name' onChange={handleChange} className="w-[48%] mb-3 border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none" />
                    <input type="text" value={formdata.age} name='age' placeholder='Enter your age' onChange={handleChange} className="w-[48%] mb-3 border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none" />
                </div>
                <button type='submit' className="w-full bg-blue-600 cursor-pointer text-white py-2 rounded-md hover:bg-blue-700 transition">{editIndex == null ? "Add Data" : "Update Data"}</button>
            </form>
            <div className="flex flex-wrap justify-center gap-4 w-full max-w-5xl">
                {data.map((e, i) => (
                    <div key={i} className="bg-white shadow-md rounded-lg p-4 w-[18%] hover:shadow-lg transition">
                        <p className="text-xs text-gray-500 mb-1">ID: {e.id}</p>
                        <p className="text-lg font-semibold text-gray-800">Name: {e.name}</p>
                        <p className="text-gray-700 mb-3">Age: {e.age}</p>
                        <div className="flex justify-between">
                            <button onClick={() => handleEdit(e.id)} className="bg-yellow-400 cursor-pointer text-white px-3 py-1 rounded-md hover:bg-yellow-500 transition">Edit</button>
                            <button onClick={() => handleDelete(e.id)} className="bg-red-500 cursor-pointer text-white px-3 py-1 rounded-md hover:bg-red-600 transition">Delete</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
