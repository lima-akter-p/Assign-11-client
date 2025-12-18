import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { BsThreeDotsVertical } from "react-icons/bs";
// import { FaUserShield } from "react-icons/fa";
// import { FiShieldOff } from "react-icons/fi";
import Swal from "sweetalert2";

const UserManagement = () => {
  const axiosSecure = useAxiosSecure();
  const { refetch, data: users = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users`);
      
      return res.data;
    },
  });
  console.log("users",users)

  const handleUpdateUserRole = (user,role)=>{
    Swal.fire({
      title: "Are you sure?",
      text: `Do you want to make ${user.displayName || user.email} as a ${role}?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: `Yes, make ${role}`,
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.patch(`/users/${user._id}/role`, {role})
          .then((res) => {
            if (res.data.modifiedCount > 0) {
              refetch();
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: `${user.displayName || user.email} is ${role}`,
                showConfirmButton: false,
                timer: 2000,
              });
            }
          });
      }
    });
  };
 

  return (
    <div>
      <h2 className="text-4xl">Manage Users:{users.length}</h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>User</th>
              <th>Email</th>
              <th>Role</th>
              <th>Admin Action</th>

              <th></th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={user.photoURL}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{user.displayName}</div>
                    </div>
                  </div>
                </td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td>
                  <div className="dropdown dropdown-left dropdown-center">
                        <div tabIndex={0} role="button" className="btn m-1">
                          <BsThreeDotsVertical className="text-xl" />
                        </div>
                        <ul
                          tabIndex="-1"
                          className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm gap-1"
                        >
                   
                          {user.role !== "admin" && (
                            <button
                            onClick={() => handleUpdateUserRole(user,"admin")}
                              
                              className="btn btn-sm btn-info text-white"
                            >
                              Make Admin
                            </button>
                          )}
                          {user.role !== "creator" && (
                            <button
                              onClick={() => handleUpdateUserRole(user,"creator")}
                              className="btn btn-sm btn-info text-white"
                            >
                              Make Creator
                            </button>
                          )}
                          {user.role !== "user" && (
                            <button
                               onClick={() => handleUpdateUserRole(user,"user")}
                              className="btn btn-sm btn-info text-white"
                            >
                              Make User
                            </button>
                          )}
                        </ul>
                      </div>

                  {/* {user.role === "admin" ? (
                    <button
                      onClick={() => handleRemoveAdmin(user)}
                      className="btn bg-red-500"
                    >
                      {" "}
                      <FiShieldOff />
                    </button>
                  ) : (
                    <button
                      onClick={() => handleMakeAdmin(user)}
                      className="btn bg-green-600"
                    >
                      <FaUserShield />
                    </button>
                  )} */}
                </td>
                <th></th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserManagement;
