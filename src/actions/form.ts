'use server';
import prisma from '@/lib/prisma';
import { currentUser } from '@clerk/nextjs/server';
import { Form } from '@prisma/client';

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

export async function getFormById(id: number) {
  const user = await currentUser();
  if (!user) {
    throw new Error('User not authenticated');
  }
  const form = await prisma.form.findUnique({
    where: {
      id: id,
      userId: user.id,
    },
  });

  if (!form) {
    throw new Error('Form not found');
  }

  return form;
}
