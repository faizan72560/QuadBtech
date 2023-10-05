import React from 'react';
import { useState, useEffect } from 'react';

const Profile = () => {
    const [jobApplications, setJobApplications] = useState([]);
    const [userData, setUserData] = useState({
        name: '',
        email: '',
    });

    useEffect(() => {
        setJobApplications(JSON.parse(localStorage.getItem('jobApplication')));
        setUserData(JSON.parse(localStorage.getItem('register-user')));
    }, []);

    return (
        <div className="bg-gray-100 min-h-screen py-10">
            <div className="container mx-auto px-4 bg-white rounded-lg shadow-md p-6">
                <h2 className="text-3xl font-semibold mb-4">
                    Profile
                </h2>
                <div className="mb-6">
                    <h3 className="text-2xl font-semibold mb-2">User Information</h3>
                    <p className="text-lg">
                        <strong>Name:</strong> {userData[0]?.name}
                    </p>
                    <p className="text-lg">
                        <strong>Email:</strong> {userData[0]?.email}
                    </p>
                </div>
                <div>
                    <h3 className="text-2xl font-semibold mb-2">Job Applications</h3>
                    <ul>
                        {jobApplications ?
                            jobApplications.map((application, index) => (
                                <li
                                    key={index}
                                    className="bg-white shadow-md rounded-md p-4 mb-4"
                                >
                                    <p className="text-lg">
                                        <strong>Job Title:</strong> {application.title}
                                    </p>
                                    <p className="text-lg">
                                        <strong>Company:</strong> {application.company}
                                    </p>
                                    <p className="text-lg">
                                        <strong>Programming Language:</strong>{' '}
                                        {application.programmingLanguage}
                                    </p>
                                    {/* Add more application details here */}
                                </li>
                            )) : "No Data To Show"}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Profile;
