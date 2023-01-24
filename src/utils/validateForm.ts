import * as z from 'zod';

export const RegisterSchema = z
  .object({
    fullName: z.string().min(5, { message: 'Full Name is required and more than 5' }),
    userName: z.string().min(3, { message: 'UserName is required and more than 3' }),
    email: z.string().email({ message: 'Invalid email address' }),
    password: z.string().min(6, { message: 'Password is required and more than 6' }),
    confirm_password: z.string().min(6, { message: 'Confirm Password' }),
  })
  .refine(({ confirm_password, password }) => password === confirm_password, {
    message: "Passwords don't match",
    path: ['confirm'], // path of error
  });

export type RegisterSchemaType = z.infer<typeof RegisterSchema>;
