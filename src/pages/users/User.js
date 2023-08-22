import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert';
import { Link } from 'react-router-dom';

const User = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        getAllUsers();
    }, []);

    const getAllUsers = () => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setUsers(data);
            });
    };

    const deleteUser = (userID) => {
        Swal.fire({
            title: `Are you Sure To Delete ID : ${userID}`,
            showCancelButton: true,
        }).then((data) => {
            if (data.isConfirmed) {
                fetch(`https://jsonplaceholder.typicode.com/users/${userID}`, {
                    method: 'DELETE',
                })
                    .then((res) => res.json())
                    .then((data) => {
                        console.log(data);
                        getAllUsers(); // Update the list after deletion
                    });
            }
        });
    };

    return (
        <div className="container">
            <table className="table table-responsive table-hover table-dark table-striped">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">User Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Address</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Website</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user.id}>
                            <th scope="row">{user.id}</th>
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <td>{user.address.street}</td>
                            <td>{user.phone}</td>
                            <td>{user.website}</td>

                            <td>
                                <button
                                    className="btn btn-danger"
                                    onClick={() => deleteUser(user.id)}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default User;
