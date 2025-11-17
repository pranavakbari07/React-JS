import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchData, addData, deleteData, updateData } from '../features/ApiSlice.jsx'

export default function ApiData() {

  const dispatch = useDispatch()

  const [formdata, setFormdata] = useState({})
  const [editIndex, setEditIndex] = useState(null)

  const data = useSelector((state) => {
    return state.ApiKey.record
  })

  useEffect(() => {
    dispatch(fetchData());
  }, [])

  const handleChange = (e) => {
    setFormdata({
      ...formdata,
      [e.target.name]: e.target.value
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editIndex == null) {
      dispatch(addData({ ...formdata })),
      alert("Data added successfully")
      
    } else {
      dispatch(updateData({ editIndex, formdata }))
    }
    setFormdata({
      name: "",
      age: "",
      city: "",
      subject: "",
      gender: ""
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
      age: singleData.age,
      city: singleData.city,
      subject: singleData.subject,
      gender: singleData.gender
    });
    setEditIndex(id)
  }

  return (
    <div className="min-h-screen bg-[#f0f2f5] py-12 px-4">
      <div className="w-full max-w-[432px] mx-auto">
        <div className="flex flex-col gap-6">
          {/* Form Section */}
          <div className="bg-white rounded-lg shadow-[0_2px_4px_rgba(0,0,0,.1),0_8px_16px_rgba(0,0,0,.1)] p-6">
            <div className="mb-6">
              <h2 className="text-[32px] font-bold text-[#1c1e21] leading-[38px] mb-2">
                {editIndex === null ? "Add New Data" : "Edit Record"}
              </h2>
              <p className="text-[15px] text-[#606770] leading-[19px]">
                {editIndex === null ? "Fill in your details below" : "Update your information"}
              </p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <input
                    type="text"
                    id="name"
                    placeholder='First name'
                    name='name'
                    value={formdata.name || ''}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-[#ccd0d5] rounded-[5px] bg-white text-[#1c1e21] placeholder:text-[#8a8d91] focus:outline-none focus:border-[#1877f2] text-[15px] leading-[19px]"
                    required
                  />
                </div>
                <div>
                  <input
                    type="number"
                    id="age"
                    placeholder='Age'
                    name='age'
                    value={formdata.age || ''}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-[#ccd0d5] rounded-[5px] bg-white text-[#1c1e21] placeholder:text-[#8a8d91] focus:outline-none focus:border-[#1877f2] text-[15px] leading-[19px]"
                    required
                    min="1"
                  />
                </div>
              </div>
              
              <div>
                <input
                  type="text"
                  id="city"
                  placeholder='City'
                  name='city'
                  value={formdata.city || ''}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-[#ccd0d5] rounded-[5px] bg-white text-[#1c1e21] placeholder:text-[#8a8d91] focus:outline-none focus:border-[#1877f2] text-[15px] leading-[19px]"
                  required
                />
              </div>
              
              <div>
                <input
                  type="text"
                  id="subject"
                  placeholder='Subject'
                  name='subject'
                  value={formdata.subject || ''}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-[#ccd0d5] rounded-[5px] bg-white text-[#1c1e21] placeholder:text-[#8a8d91] focus:outline-none focus:border-[#1877f2] text-[15px] leading-[19px]"
                  required
                />
              </div>
              
              <div className="relative">
                <select
                  id="gender"
                  name="gender"
                  value={formdata.gender || ''}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-[#ccd0d5] rounded-[5px] bg-white text-[#1c1e21] focus:outline-none focus:border-[#1877f2] text-[15px] leading-[19px] appearance-none pr-10"
                  required
                >
                  <option value="">Select gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#606770" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </div>
              </div>
              
              <div className="pt-2">
                <button
                  type='submit'
                  className="w-full bg-[#42b72a] hover:bg-[#36a420] text-white font-bold py-3 px-4 rounded-[6px] transition-colors duration-200 text-[18px] leading-[22px] shadow-[0_2px_4px_rgba(0,0,0,.1)]"
                  style={{fontWeight: '700'}}
                >
                  {editIndex === null ? "Add Data" : "Save Changes"}
                </button>
              </div>
            </form>
          </div>

          {/* Data Display Section */}
          <div className="bg-white rounded-lg shadow-[0_2px_4px_rgba(0,0,0,.1),0_8px_16px_rgba(0,0,0,.1)] p-6">
            <div className="mb-6">
              <h2 className="text-[32px] font-bold text-[#1c1e21] leading-[38px] mb-2">
                Data Display
              </h2>
              <p className="text-[15px] text-[#606770] leading-[19px]">
                All your records
              </p>
            </div>

            <div className="space-y-4 max-h-[600px] overflow-y-auto">
              {data && data.length > 0 ? (
                data.map((item) => (
                  <div
                    key={item.id}
                    className="border border-[#ccd0d5] rounded-[5px] p-4 hover:shadow-md transition-shadow"
                  >
                    <div className="grid grid-cols-2 gap-2 mb-3">
                      <div>
                        <p className="text-[12px] text-[#606770] mb-1">Name</p>
                        <p className="text-[15px] font-semibold text-[#1c1e21]">{item.name}</p>
                      </div>
                      <div>
                        <p className="text-[12px] text-[#606770] mb-1">Age</p>
                        <p className="text-[15px] font-semibold text-[#1c1e21]">{item.age}</p>
                      </div>
                      <div>
                        <p className="text-[12px] text-[#606770] mb-1">City</p>
                        <p className="text-[15px] font-semibold text-[#1c1e21]">{item.city}</p>
                      </div>
                      <div>
                        <p className="text-[12px] text-[#606770] mb-1">Subject</p>
                        <p className="text-[15px] font-semibold text-[#1c1e21]">{item.subject}</p>
                      </div>
                      <div className="col-span-2">
                        <p className="text-[12px] text-[#606770] mb-1">Gender</p>
                        <p className="text-[15px] font-semibold text-[#1c1e21]">{item.gender}</p>
                      </div>
                    </div>
                    <div className="flex gap-2 pt-2 border-t border-[#ccd0d5]">
                      <button
                        onClick={() => handleEdit(item.id)}
                        className="flex-1 bg-[#1877f2] hover:bg-[#166fe5] text-white font-semibold py-2 px-4 rounded-[5px] transition-colors duration-200 text-[14px]"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(item.id)}
                        className="flex-1 bg-[#e41e3f] hover:bg-[#d01932] text-white font-semibold py-2 px-4 rounded-[5px] transition-colors duration-200 text-[14px]"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-8">
                  <p className="text-[15px] text-[#606770]">No data available. Add data using the form.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
