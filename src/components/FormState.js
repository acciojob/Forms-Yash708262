import React from "react";
import { useState } from "react";
import Card from "./Card";

export default function FormState() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    password_confirmation: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted via useState:", formData);
  };

  return (
    <Card>
      <form id="info-form" className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="full_name" className="block font-medium">Full Name</label>
          <input
            id="full_name"
            type="text"
            value={formData.full_name}
            onChange={handleChange}
            className="border p-2 w-full rounded"
          />
        </div>
        <div>
          <label htmlFor="email" className="block font-medium">Email</label>
          <input
            id="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            className="border p-2 w-full rounded"
          />
        </div>
        <div>
          <label htmlFor="password" className="block font-medium">Password</label>
          <input
            id="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            className="border p-2 w-full rounded"
          />
        </div>
        <div>
          <label htmlFor="password_confirmation" className="block font-medium">Confirm Password</label>
          <input
            id="password_confirmation"
            type="password"
            value={formData.password_confirmation}
            onChange={handleChange}
            className="border p-2 w-full rounded"
          />
        </div>
        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded">
          Submit
        </button>
      </form>
    </Card>
  );
}
