import SectionContainer from "@/components/section-container";
import TasksCard from "@/components/tasks-card";
import prisma from "@/utils/prisma";

export const dynamic = "force-dynamic";

export default async function Home() {
  const allTasks = await prisma.task.findMany();

  if (allTasks.length !== 0) {
    return (
      <main>
        <SectionContainer>
          <section className="flex flex-wrap max-w-[90%] w-full justify-center gap-12">
            {allTasks.map((task) => (
              <TasksCard task={task} key={task.id} />
            ))}
          </section>
        </SectionContainer>
      </main>
    );
  }
  return (
    <SectionContainer>
      <p className="text-sm font-semibold">There are no pending tasks</p>
    </SectionContainer>
  );
}
