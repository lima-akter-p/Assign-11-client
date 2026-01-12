import { useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import "react-datepicker/dist/react-datepicker.css";

import { Controller, useForm } from "react-hook-form";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { toast } from "react-toastify";
import DatePicker from "react-datepicker";

export default function EditContest() {
  const { id } = useParams();
  const { register, handleSubmit, reset,control } = useForm();
  const axiosSecure = useAxiosSecure();

  // Fetch contest data
  useQuery({
    queryKey: ["contests", id],
    queryFn: async () => {
      const res = await axiosSecure.get(`/contests/${id}`);
      reset(res.data); // pre-filled form
      return res.data;
    },
  });

  const onSubmit = async (data) => {
   const res =  await axiosSecure.put(`/update-contests/${id}`, data);
   console.log(res)
   if(res.data.modifiedCount > 0){
    toast.success('Edit successful')
   }
    
    
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Edit Contest</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
        <input {...register("contestName")} className="input input-bordered w-full" />

        <textarea {...register("description")} className="textarea textarea-bordered w-full" />

        <input {...register("participants")} type="number" className="input input-bordered w-full" />

        <input {...register("priceMoney")} type="number" className="input input-bordered w-full" />
         <input {...register("image")}  type="photo" className="input input-bordered w-full" />
          

        {/* <input {...register("deadline")} type="date" className="input input-bordered w-full" /> */}
           <Controller
              control={control}
              name="deadline"
              rules={{ required: "Deadline is required" }}
              render={({ field }) => (
                <DatePicker
                  placeholderText="Select deadline"
                  selected={field.value ? new Date(field.value) : null}
                  onChange={(date) => field.onChange(date)}
                  className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition cursor-pointer"
                  showTimeSelect
                  dateFormat="Pp"
                />
              )}
            />

        <button className="btn btn-primary w-full">Update</button>
      </form>
    </div>
  );
}
