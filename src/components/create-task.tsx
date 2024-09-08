import { createTask, updateTask } from "@/actions/tasks-actions";
import { Task } from "@prisma/client";
import Link from "next/link";
import ToggleButton from "./toggle-button";

export default function CreateTask({ task }: { task: Task }) {
  const functionAction = task?.id ? updateTask : createTask;

  return (
    <form
      action={functionAction}
      className="border border-slate-300 p-6 w-full max-w-96 rounded-md flex flex-col gap-12 shadow-slate-900 shadow-lg"
    >
      <input type="hidden" name="id" value={task?.id} />
      <h2 className="font-bold text-xl">
        {" "}
        {task?.id ? "Update Task" : "Create Task"}
      </h2>
      <div className="flex flex-col gap-1">
        <label className="font-semibold text-lg">Task</label>
        <input
          type="text"
          placeholder="Play a F5 with Messi"
          name="name"
          className="bg-transparent border-b-2 p-2 border-slate-300 outline-none"
          defaultValue={task?.name}
        />
      </div>

      <div className="flex flex-col gap-1">
        <label className="font-semibold text-lg">Priority</label>
        <select
          name="priority"
          className="bg-transparent border-b-2 p-2 border-slate-300 outline-none text-white"
          defaultValue={task?.priority}
        >
          <option value="low" className="bg-slate-950">
            Low
          </option>
          <option value="medium" className="bg-slate-950">
            Medium
          </option>
          <option value="high" className="bg-slate-950">
            High
          </option>
        </select>
      </div>

      {task?.id && <ToggleButton isCompleted={task?.isCompleted} />}

      <div className="flex items-center justify-between">
        <Link
          href="/"
          className="border border-slate-50/50 rounded-md py-2 px-6 hover:bg-slate-900 transition duration-300"
        >
          Cancel
        </Link>
        <button
          type="submit"
          className="bg-slate-50 rounded-md text-slate-950 py-2 px-6 hover:bg-slate-300 transition duration-300"
        >
          {task?.id ? "Update Task" : "Create Task"}
        </button>
      </div>
    </form>
  );
}
