import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addData, deleteData, updateData } from '../feature/Todoslice' 

export default function Crud() {
    const dispatch = useDispatch();

    const [formData, setFormData] = React.useState({
        name: "",
        age: "",
        city: ""
    });
    const [editIndex, setEditIndex] = React.useState(null);

    const data = useSelector((state) => state.TodoKey.record);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (editIndex == null) {
            dispatch(addData({ ...formData, id: Date.now() }));
        } else {
            dispatch(updateData({ id: editIndex, data: formData }));
        }

        setFormData({ name: "", age: "", city: "" });
        setEditIndex(null);
    };

    const handleDelete = (id) => {
        dispatch(deleteData(id));
    };

    const handleEdit = (id) => {
        const singleData = data.find((item) => item.id === id);
        if (!singleData) return;
        setFormData({
            name: singleData.name,
            age: singleData.age,
            city: singleData.city
        });
        setEditIndex(id);
    };

    return (
        <div>
            <h1 className='text-4xl font-semibold text-center mt-5'>Crud</h1>

            <form
                onSubmit={handleSubmit}
                className="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg flex flex-col gap-4 border border-gray-100">
                <h2 className="text-2xl font-semibold text-gray-700 text-center mb-2">Add Your Info ✍️</h2>

                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                />

                <input
                    type="text"
                    name="age"
                    value={formData.age}
                    onChange={handleChange}
                    placeholder="Enter your age"
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
                />

                <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    placeholder="Enter your city"
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent"
                />

                <button
                    type="submit"
                    className="mt-2 w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 rounded-md transition duration-300 ease-in-out shadow-md hover:shadow-lg"
                >
                    {editIndex == null ? "Add Data" : "Update Data"}
                </button>
            </form>

            <div className="max-w-lg mx-auto mt-10 space-y-4">
                {data?.length ? (
                    data.map((item) => (
                        <ul
                            key={item.id}
                            className="bg-white shadow-md rounded-lg p-4 border border-gray-100 hover:shadow-lg transition"
                        >
                            <li className="flex justify-between items-center gap-3">
                                <div>
                                    <h3 className="font-semibold text-gray-800">Name: {item.name}</h3>
                                    <p className="text-sm text-gray-500">Age: {item.age}</p>
                                    <p className="text-sm text-gray-500">City: {item.city}</p>
                                </div>

                                <div className="flex gap-2">
                                    <button
                                        onClick={() => handleEdit(item.id)}
                                        className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded-md font-medium shadow-md"
                                    >
                                        Edit
                                    </button>
                                    <button
                                        onClick={() => handleDelete(item.id)}
                                        className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-md font-medium shadow-md"
                                    >
                                        Delete
                                    </button>
                                </div>
                            </li>
                        </ul>
                    ))
                ) : (
                    <p className="text-center text-gray-500">No records yet. Add something! 🌱</p>
                )}
            </div>
        </div>
    );
}
