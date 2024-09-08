import CreateTask from "@/components/create-task";
import SectionContainer from "@/components/section-container";
import prisma from "@/utils/prisma";
import { redirect } from "next/navigation";
export default async function TaskEdit({ params }: { params: { id: string } }) {
  const taskFound = await prisma.task.findUnique({
    where: { id: params.id },
  });

  if (!taskFound) {
    redirect("/");
  }

  return (
    <SectionContainer>
      <CreateTask task={taskFound} />
    </SectionContainer>
  );
}
