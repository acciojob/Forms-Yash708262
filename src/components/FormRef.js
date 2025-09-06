import React from "react";
import { useRef } from "react";
import Card from "./Card";

export default function FormRef() {
  const fullNameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const confirmPasswordRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted via useRef:", {
      fullName: fullNameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
      confirmPassword: confirmPasswordRef.current.value,
    });
  };

  return (
    <Card>
      <form id="info-form" className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="full_name" className="block font-medium">Full Name</label>
          <input id="full_name" type="text" ref={fullNameRef} className="border p-2 w-full rounded" />
        </div>
        <div>
          <label htmlFor="email" className="block font-medium">Email</label>
          <input id="email" type="email" ref={emailRef} className="border p-2 w-full rounded" />
        </div>
        <div>
          <label htmlFor="password" className="block font-medium">Password</label>
          <input id="password" type="password" ref={passwordRef} className="border p-2 w-full rounded" />
        </div>
        <div>
          <label htmlFor="password_confirmation" className="block font-medium">Confirm Password</label>
          <input id="password_confirmation" type="password" ref={confirmPasswordRef} className="border p-2 w-full rounded" />
        </div>
        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded">
          Submit
        </button>
      </form>
    </Card>
  );
}

