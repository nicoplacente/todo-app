import prisma from "@/utils/prisma";
import DeleteButton from "./delete-button-task";
import Link from "next/link";
import { Task } from "@prisma/client";

export default async function TasksCard({ task }: { task: Task }) {
  return (
    <article
      key={task.id}
      className="bg-slate-50/20 p-6 rounded-md shadow-xl border-2 sm:min-w-[300px] sm:max-w-[400px] relative w-full flex-grow border-white/55 flex flex-col justify-between gap-2"
    >
      <h3 className="font-semibold text-lg text-balance">{task.name}</h3>
      <p
        className={`${
          task.priority === "medium"
            ? "text-yellow-200"
            : task.priority === "high"
            ? "text-green-300"
            : "text-red-300"
        }`}
      >
        {task.priority}
      </p>
      <div className="flex justify-between p-2 mt-4 items-center gap-4">
        <DeleteButton id={task.id} />
        <Link
          href={`/task/${task.id}/edit`}
          className="border border-slate-50/50 rounded-md py-2 px-6 hover:bg-slate-50/55 hover:scale-105 transition duration-300"
        >
          Edit
        </Link>
      </div>
      <span
        className={`absolute top-2 right-2 p-2 rounded-full text-xs font-semibold ${
          task.isCompleted ? "bg-green-500" : "bg-yellow-500"
        }`}
      >
        {task.isCompleted == true ? "Completed!" : "Not Completed"}
      </span>
    </article>
  );
}
