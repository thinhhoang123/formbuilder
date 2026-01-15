import z from 'zod/v3';

export const createFormSchema = z.object({
  name: z
    .string()
    .nonempty({
      message: 'Name is required.',
    })
    .min(2, {
      message: 'Name must be at least 2 characters.',
    }),
  description: z.string().max(50, {
    message: 'Description must be at most 50 characters.',
  }),
});

export type CreateFormSchema = z.infer<typeof createFormSchema>;
