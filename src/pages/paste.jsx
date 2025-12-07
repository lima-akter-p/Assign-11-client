import { useForm } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";

export default function AddContest() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const [deadline, setDeadline] = useState(null);

  const onSubmit = (data) => {
    data.deadline = deadline;

    console.log("Contest Data:", data);

    // 👉 এখানে তোমার API বা Firebase এ পাঠানোর কোড লিখবে
    reset();
    setDeadline(null);
  };

  return (
    <div className="max-w-xl mx-auto bg-white p-6 rounded-xl shadow-lg mt-6">
      <h2 className="text-2xl font-bold mb-4">Add New Contest</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

        {/* Name */}
        <div>
          <label className="font-semibold">Contest Name</label>
          <input
            type="text"
            {...register("name", { required: true })}
            className="input input-bordered w-full"
            placeholder="Enter contest name"
          />
          {errors.name && <p className="text-red-500 text-sm">Name is required</p>}
        </div>

        {/* Image */}
        <div>
          <label className="font-semibold">Contest Image</label>
          <input
            type="file"
            {...register("image", { required: true })}
            className="file-input file-input-bordered w-full"
          />
          {errors.image && <p className="text-red-500 text-sm">Image is required</p>}
        </div>

        {/* Description */}
        <div>
          <label className="font-semibold">Description</label>
          <textarea
            {...register("description", { required: true })}
            className="textarea textarea-bordered w-full"
            placeholder="Write contest description..."
            rows={4}
          ></textarea>
          {errors.description && <p className="text-red-500 text-sm">Description required</p>}
        </div>

        {/* Price */}
        <div>
          <label className="font-semibold">Entry Price</label>
          <input
            type="number"
            {...register("price", { required: true })}
            className="input input-bordered w-full"
            placeholder="Entry price"
          />
          {errors.price && <p className="text-red-500 text-sm">Price required</p>}
        </div>

        {/* Prize money */}
        <div>
          <label className="font-semibold">Prize Money</label>
          <input
            type="number"
            {...register("prize", { required: true })}
            className="input input-bordered w-full"
            placeholder="Prize amount"
          />
          {errors.prize && <p className="text-red-500 text-sm">Prize required</p>}
        </div>

        {/* Task Instruction */}
        <div>
          <label className="font-semibold">Task Instruction</label>
          <textarea
            {...register("instructions", { required: true })}
            className="textarea textarea-bordered w-full"
            placeholder="Explain contest task..."
            rows={4}
          ></textarea>
          {errors.instructions && <p className="text-red-500 text-sm">Instructions required</p>}
        </div>

        {/* Contest Type */}
        <div>
          <label className="font-semibold">Contest Type</label>
          <select
            {...register("type", { required: true })}
            className="select select-bordered w-full"
          >
            <option value="">Select type</option>
            <option value="design">Design</option>
            <option value="writing">Writing</option>
            <option value="coding">Coding</option>
            <option value="music">Music</option>
            <option value="photo">Photography</option>
          </select>
          {errors.type && <p className="text-red-500 text-sm">Type required</p>}
        </div>

        {/* Deadline */}
        <div>
          <label className="font-semibold">Deadline</label>
          <DatePicker
            selected={deadline}
            onChange={(date) => setDeadline(date)}
            showTimeSelect
            dateFormat="Pp"
            placeholderText="Select deadline"
            className="input input-bordered w-full"
          />
          {!deadline && <p className="text-red-500 text-sm">Deadline required</p>}
        </div>

        <button className="btn btn-primary w-full mt-2">Add Contest</button>
      </form>
    </div>
  );
}
