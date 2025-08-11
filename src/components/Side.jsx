import React from 'react';

export default function Side() {
  return (
    <aside className="bg-white shadow p-6 w-72 rounded-xl mt-16 h-[600px]">
      <img src="https://via.placeholder.com/200" alt="Profile" className="rounded-t-xl" />
      <h2 className="mt-4 text-lg font-bold">DR. ROBERT GIBBONS</h2>
      <p className="text-gray-500 text-sm">Dermatologist</p>

      <ul className="mt-6 space-y-3 text-sm">
        <li><strong>Name:</strong> Rovert Gibson</li>
        <li><strong>Birthday:</strong> 06 December 1987</li>
        <li><strong>Job:</strong> Dermatologist</li>
        <li><strong>Email:</strong> henry@domain.com</li>
        <li><strong>Skype:</strong> henryrooney85</li>
      </ul>

      <button className="mt-6 w-full bg-blue-500 text-white py-2 rounded-full">Download CV</button>
    </aside>
  );
}
