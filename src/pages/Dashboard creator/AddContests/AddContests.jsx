import React from "react";
import { useForm, Controller } from "react-hook-form";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

export default function AddContests() {
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm();
  const axiosSecure = useAxiosSecure();

  const onSubmit = async (data) => {
    console.log("Form Data:", data);
    try {
      const res = await axiosSecure.post("/contests", data);
      console.log("Saved to DB:", res.data);

      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Your contest has been added",
        showConfirmButton: false,
        timer: 1500,
      });

      reset();

      reset();
    } catch (error) {
      console.error("Error saving contest:", error);
      alert("Failed to add contest!");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-10">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Add Contest
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Input Group */}
          <div className="space-y-1">
            <label className="font-semibold text-gray-700">Contest Name</label>
            <input
              {...register("contestName", { required: "Name is required" })}
              className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition"
              placeholder="Enter Contest Name"
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name.message}</p>
            )}
          </div>
          {/* Image URL */}
          <div className="space-y-1">
            <label className="font-semibold text-gray-700">Image URL</label>
            <input
              {...register("image", { required: "Image URL is required" })}
              className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition"
              placeholder="https://example.com/image.jpg"
            />
            {errors.image && (
              <p className="text-red-500 text-sm">{errors.image.message}</p>
            )}
          </div>
          {/* Description */}
          <div className="space-y-1">
            <label className="font-semibold text-gray-700">Description</label>
            <textarea
              {...register("description", {
                required: "Description is required",
              })}
              className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition"
              placeholder="Contest Description"
              rows="3"
            />
            {errors.description && (
              <p className="text-red-500 text-sm">
                {errors.description.message}
              </p>
            )}
          </div>
          {/* Price Money */}
          <div className="space-y-1">
            <label className="font-semibold text-gray-700">Price Money</label>
            <input
              type="number"
              {...register("priceMoney", {
                required: "Price Money is required",
              })}
              className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition"
              placeholder="1000"
            />
            {errors.priceMoney && (
              <p className="text-red-500 text-sm">
                {errors.priceMoney.message}
              </p>
            )}
          </div>
          {/* Participant */}
          <div className="space-y-1">
            <label className="font-semibold text-gray-700">Participant</label> 

             <input
              type="number"
              {...register("participent", {
                required: "Participant number is required",
              })}
              className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition"
              placeholder="1000"
            />

            {errors.participent && (
              <p className="text-red-500 text-sm">
                {errors.participent.message}
              </p>
            )}
          </div> 
        
       
          {/* Task Instruction */}
          <div className="space-y-1">
            <label className="font-semibold text-gray-700">
              Task Instruction
            </label>
            <textarea
              {...register("taskDetails", {
                required: "Task Instruction is required",
              })}
              className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition"
              placeholder="Instructions for participants"
              rows="3"
            />
            {errors.taskInstruction && (
              <p className="text-red-500 text-sm">
                {errors.taskInstruction.message}
              </p>
            )}
          </div>
          {/* Contest Type */}
          <div className="space-y-1">
            <label className="font-semibold text-gray-700">Contest Type</label>
            <select
              {...register("contestType", {
                required: "Contest Type is required",
              })}
              className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition"
            >
              <option value="Graphic Design">Graphic Design</option>
              <option value="Logo Design">Logo Design</option>
              <option value="UI/UX Design">UI/UX Design</option>
              <option value="Poster Design">Poster Design</option>
              <option value="Banner Design">Banner Design</option>
              <option value="Packaging Design">Packaging Design</option>
              <option value="Illustration">Illustration</option>
              <option value="Digital Art">Digital Art</option>
              <option value="Animation">Animation</option>
              <option value="Photography">Photography</option>
              <option value="Video Editing">Video Editing</option>
              <option value="Short Film">Short Film</option>
              <option value="programming">programming</option>
            </select>
            {errors.contestType && (
              <p className="text-red-500 text-sm">
                {errors.contestType.message}
              </p>
            )}
          </div>
          {/* Deadline */}
          <div className="space-y-1">
            <label className="font-semibold text-gray-700">Deadline</label>
            <Controller
              control={control}
              name="deadline"
              rules={{ required: "Deadline is required" }}
              render={({ field }) => (
                <DatePicker
                  placeholderText="Select deadline"
                  selected={field.value}
                  onChange={(date) => field.onChange(date)}
                  className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition cursor-pointer"
                  showTimeSelect
                  dateFormat="Pp"
                />
              )}
            />
            {errors.deadline && (
              <p className="text-red-500 text-sm">{errors.deadline.message}</p>
            )}
          </div>
          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-3 rounded-lg font-semibold text-lg hover:bg-blue-700 transition shadow-md hover:shadow-lg"
          >
            Add Contest
          </button>
        </form>
      </div>
    </div>
  );
}
