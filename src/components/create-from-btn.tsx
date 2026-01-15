'use client';
import { createForm } from '@/actions/form';
import { useRouter } from 'next/navigation';
import { Card, CardContent } from './ui/card';
import { Typography } from './typography';
import { PlusIcon } from 'lucide-react';

export default function CreateFormBtn({ className }: { className?: string }) {
  const router = useRouter();
  const onCreateNewForm = async () => {
    try {
      const response = await createForm();
      router.push(`/builder/${response}`);
    } catch (error) {
      console.error('Failed to create form:', error);
    }
  };

  return (
    <Card
      className={`border-dashed hover:border-primary hover:bg-primary/5 hover:cursor-pointer ${className}`}
      onClick={onCreateNewForm}
    >
      <CardContent className="flex flex-col items-center justify-center">
        <PlusIcon size={32} />
        <Typography variant="p">Create new form</Typography>
      </CardContent>
    </Card>
  );
}
