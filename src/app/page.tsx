import SectionContainer from "@/components/section-container";
import TasksCard from "@/components/tasks-card";

export const dynamic = "force-dynamic";

export default async function Home() {
  return (
    <main>
      <SectionContainer>
        <TasksCard />
      </SectionContainer>
    </main>
  );
}
