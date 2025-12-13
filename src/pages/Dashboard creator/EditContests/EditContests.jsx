import { useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";

import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

export default function EditContest() {
  const { id } = useParams();
  const { register, handleSubmit, reset } = useForm();
  const axiosSecure = useAxiosSecure();w

  // Fetch contest data
  useQuery({
    queryKey: ["contestEdit", id],
    queryFn: async () => {
      const res = await axiosSecure.get(`http://localhost:3000/contests/${id}`);
      reset(res.data); // pre-filled form
      return res.data;
    },
  });

  const onSubmit = async (data) => {
    await axiosSecure.put(`http://localhost:3000/contests/${id}`, data);
    alert("Contest updated!");
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Edit Contest</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
        <input {...register("contestName")} className="input input-bordered w-full" />

        <textarea {...register("description")} className="textarea textarea-bordered w-full" />

        <input {...register("participants")} type="number" className="input input-bordered w-full" />

        <input {...register("prizeMoney")} type="number" className="input input-bordered w-full" />

        <input {...register("deadline")} type="date" className="input input-bordered w-full" />

        <button className="btn btn-primary w-full">Update</button>
      </form>
    </div>
  );
}
