import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useQuery } from "@tanstack/react-query";

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  CartesianGrid,
  XAxis,
  YAxis,
  Bar,
  ResponsiveContainer,
  LabelList,
  BarChart,
} from "recharts";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const MyProfile = () => {
  const { user, updateUser } = useAuth();
  const axiosSecure = useAxiosSecure();

  /* ================= Fetch User Data ================= */
  const {
    data: userData = {},
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["my-profile"],
    enabled: !!user?.email,

    queryFn: async () => {
      const res = await axiosSecure.get(`/user?email=${user.email}`);
      return res.data;
    },
  });

  /* ================= React Hook Form ================= */
  const { register, handleSubmit, reset } = useForm();

  // Fill form when data comes from server
  useEffect(() => {
    if (userData?._id) {
      reset({
        displayName: userData?.displayName,
        photoURL: userData?.photoURL,
        address: userData?.address,
      });
    }
  }, [userData, reset]);

  /* ================= Form Submit ================= */
  const onSubmit = async (data) => {
    await updateUser({
      displayName: data.displayName,
      photoURL: data.photoURL,
    });
    axiosSecure.patch(`/update-profile/${userData._id}`, data).then((res) => {
      if (res.data.modifiedCount > 0) {
        refetch();
        Swal.fire({
          title: "Update profile successfull",
          icon: "success",
          draggable: true,
        });
      }
    });
  };

  /* ================= Chart Data ================= */
  const { data: participated = 0,  } = useQuery({
    queryKey: ["myParticipatedContests", user?.email],
    enabled: !!user?.email,
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/payments/participated?email=${user.email}`
      );
      return res.data?.length;
    },
  });

  const { data: won = 0 } = useQuery({
    queryKey: ["myWinningContests", user?.email],
    enabled: !!user?.email,
    queryFn: async () => {
      const res = await axiosSecure.get(`/wins?email=${user.email}`);
      return res.data?.length;
    },
  });
 

  const COLORS = ["#22c55e", "#ef4444"];

  if (isLoading) {
    return <p className="text-center mt-10">Loading...</p>;
  }

  const chartData = [
    {
      name: "Contests",
      Won: won || 0,
      Participated: participated || 0,
    },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-10">
      {/* ========== Update Profile Section ========== */}
      <div className=" shadow rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">Update Profile</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="font-medium">Name</label>
            <input
              {...register("displayName")}
              className="w-full border p-3 rounded"
            />
          </div>

          <div>
            <label className="font-medium">Photo URL</label>
            <input
              {...register("photoURL")}
              className="w-full border p-3 rounded"
            />
          </div>

          <div>
            <label className="font-medium">Address</label>
            <textarea
              {...register("address")}
              rows="3"
              className="w-full border p-3 rounded"
              placeholder="Enter your address"
            ></textarea>
          </div>

          <button className="bg-blue-600 text-white px-6 py-2 rounded">
            Update Profile
          </button>
        </form>
      </div>

      {/* ===== Modern Bar Chart Section ===== */}
      <div className=" shadow-lg rounded-xl p-6 text-center h-96 ">
        <h2 className="text-2xl font-semibold mb-2">Win Statistics</h2>
        <p className="text-gray-500 mb-4">Won vs Participated contests</p>

        <ResponsiveContainer height={300} width={"100%"}>
          <BarChart
            data={chartData}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="name" />
            <YAxis allowDecimals={false} />
            <Tooltip />
            <Legend verticalAlign="top" height={36} />

            <Bar dataKey="Participated" fill="#60a5fa" radius={[10, 10, 0, 0]}>
              <LabelList dataKey="Participated" position="top" />
            </Bar>

            <Bar dataKey="Won" fill="#16a34a" radius={[10, 10, 0, 0]}>
              <LabelList dataKey="Won" position="top" />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default MyProfile;
