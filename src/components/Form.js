import React from "react";
import Card from "./Card";
export default function Form() {
  return (
    <Card>
      <form id="info-form" className="space-y-4">
        <div>
          <label htmlFor="full_name" className="block font-medium">Full Name</label>
          <input id="full_name" type="text" className="border p-2 w-full rounded" />
        </div>
        <div>
          <label htmlFor="email" className="block font-medium">Email</label>
          <input id="email" type="email" className="border p-2 w-full rounded" />
        </div>
        <div>
          <label htmlFor="password" className="block font-medium">Password</label>
          <input id="password" type="password" className="border p-2 w-full rounded" />
        </div>
        <div>
          <label htmlFor="password_confirmation" className="block font-medium">Confirm Password</label>
          <input id="password_confirmation" type="password" className="border p-2 w-full rounded" />
        </div>
        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded">
          Submit
        </button>
      </form>
    </Card>
  );
}
