
import React, { useState } from 'react';

function AppointmentForm() {
    const [name, setName] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [appointmentDate, setAppointmentDate] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch('/api/book-appointment', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, mobileNumber, appointmentDate }),
        });

        const result = await response.json();
        if (response.ok) {
            alert(result.message);
        } else {
            alert('Error booking appointment');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="bg-gradient-to-br from-green-500 to-teal-600 p-8 rounded-lg shadow-lg max-w-md mx-auto space-y-6">
            <h2 className="text-white text-2xl font-bold text-center mb-4">Book Your Appointment</h2>
            <div>
                <label className="block text-white font-semibold">Name:</label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="mt-2 p-3 w-full rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
                    placeholder="Enter your full name"
                    required
                />
            </div>
            <div>
                <label className="block text-white font-semibold">Mobile Number:</label>
                <input
                    type="text"
                    value={mobileNumber}
                    onChange={(e) => setMobileNumber(e.target.value)}
                    className="mt-2 p-3 w-full rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
                    placeholder="Enter your mobile number"
                    required
                />
            </div>
            <div>
                <label className="block text-white font-semibold">Appointment Date:</label>
                <input
                    type="datetime-local"
                    value={appointmentDate}
                    onChange={(e) => setAppointmentDate(e.target.value)}
                    className="mt-2 p-3 w-full rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
                    required
                />
            </div>
            <button type="submit" className="w-full py-3 mt-6 bg-green-700 hover:bg-green-800 text-white font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75">
                Book Appointment
            </button>
        </form>
    );
}

export default AppointmentForm;
