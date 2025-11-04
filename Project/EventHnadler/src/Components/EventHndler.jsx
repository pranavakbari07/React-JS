import React, { useState } from "react";

export default function EventHandler() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [conformpassword, setConformpassword] = useState("");
  const [city, setCity] = useState("");

  const [submittedData, setSubmittedData] = useState(null);

  const handleSubmit = () => {
    if (!name || !age || !email || !password || !conformpassword || !city) return alert("⚠️ Please fill all fields!");
    if (password !== conformpassword) return alert("Passwords do not match!");
    if (!email.includes("@")) return alert("Invalid Email!"); 

    setSubmittedData({
      name,
      age,
      email,
      password,
      conformpassword,
      city,
    });

    setName("");
    setAge("");
    setEmail("");
    setPassword("");
    setConformpassword("");
    setCity("");
  };

  return (
    <div className="flex items-center gap-10 justify-center min-h-screen bg-gradient-to-r from-green-100 to-blue-100 p-6">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md space-y-4">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">
          Form Using EventHandler
        </h1>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Name
          </label>
          <input
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Age
          </label>
          <input
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
            type="text"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            placeholder="Enter your age"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Password
          </label>
          <input
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Confirm Password
          </label>
          <input
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
            type="password"
            value={conformpassword}
            onChange={(e) => setConformpassword(e.target.value)}
            placeholder="Enter your confirm password"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            City
          </label>
          <input
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Enter your city"
          />
        </div>

        <button
          type="button"
          onClick={handleSubmit}
          className="w-full bg-green-500 text-white font-semibold py-2 rounded-md hover:bg-green-600 transition duration-300"
        >
          Submit
        </button>
      </div>

      {/* Submitted Data - tabhi dikhe jab submit kare */}
      {submittedData && (
        <div className="mt-6 bg-white shadow-md rounded-lg p-4 w-full max-w-md text-left space-y-2">
          <p>
            <b>Name :</b> {submittedData.name}
          </p>
          <p>
            <b>Age :</b> {submittedData.age}
          </p>
          <p>
            <b>Email :</b> {submittedData.email}
          </p>
          <p>
            <b>Password :</b> {submittedData.password}
          </p>
          <p>
            <b>Confirm Password :</b> {submittedData.conformpassword}
          </p>
          <p>
            <b>City :</b> {submittedData.city}
          </p>
        </div>
      )}
    </div>
  );
}
