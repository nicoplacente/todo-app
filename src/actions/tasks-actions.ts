"use server";

import prisma from "@/utils/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createTask(formData: FormData) {
  const name = formData.get("name")?.toString();
  const priority = formData.get("priority")?.toString();

  if (!name || !priority) {
    return;
  }

  await prisma.task.create({
    data: {
      name,
      priority,
    },
  });

  redirect("/");
}

export async function updateTask(formData: FormData) {
  const id = formData.get("id")?.toString();
  const name = formData.get("name")?.toString();
  const priority = formData.get("priority")?.toString();
  const isCompleted = formData.get("isCompleted")?.toString() == "on";

  if (!id || !name || !priority) {
    return;
  }

  await prisma.task.update({
    where: { id },
    data: {
      name,
      priority,
      isCompleted,
    },
  });
  redirect("/");
}

export async function deleteTask(formData: FormData) {
  const id = formData.get("id")?.toString();
  if (!id) {
    return;
  }
  await prisma.task.delete({ where: { id } });

  revalidatePath("/");
}
