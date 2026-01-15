'use server';
import prisma from '@/lib/prisma';
import { currentUser } from '@clerk/nextjs/server';

export async function createForm() {
  const user = await currentUser();
  if (!user) {
    throw new Error('User not authenticated');
  }
  const form = await prisma.form.create({
    data: {
      name: 'Untitled Form',
      description: '',
      userId: user.id,
    },
  });
  if (!form) {
    throw new Error('Failed to create form');
  }
  return form.id;
}

export async function getFormsByUserId() {
  const user = await currentUser();
  if (!user) {
    throw new Error('User not authenticated');
  }
  const forms = await prisma.form.findMany({
    where: {
      userId: user.id,
    },
    orderBy: {
      createdAt: 'desc',
    },
  });
  return forms;
}
