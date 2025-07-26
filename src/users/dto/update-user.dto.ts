import z from 'zod';

export const UpdateUserSchema = z.object({
  name: z.string(),
  age: z.number().int().min(0),
});

export type UpdateUserType = z.infer<typeof UpdateUserSchema>;
