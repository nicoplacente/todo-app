import Link from "next/link";

export default function Nav() {
  return (
    <nav className="py-4 px-4 sm:px-9 flex items-center justify-between bg-slate-950 text-white">
      <Link
        href="/"
        className="bg-slate-50 rounded-md text-slate-950 py-4 px-6 hover:bg-slate-300 transition duration-300"
      >
        Home
      </Link>
      <Link
        href="/new-task"
        className="border border-slate-50/50 rounded-md py-4 px-6 hover:bg-slate-900 transition duration-300"
      >
        Create Task
      </Link>
    </nav>
  );
}
