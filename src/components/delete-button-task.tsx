"use client";
import { deleteTask } from "@/actions/tasks-actions";

export default function DeleteButton({ id }: { id: string }) {
  return (
    <form action={deleteTask}>
      <input type="hidden" name="id" value={id} />
      <button className="py-2 px-6 rounded-md bg-red-500 hover:bg-red-700 hover:scale-105 transition duration-300">
        Delete
      </button>
    </form>
  );
}
