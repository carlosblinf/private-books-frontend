import * as z from 'zod';

const schema = z.object({
  fullName: z.string().min(5, { message: 'Full Name is required and more than 5' }),
  userName: z.string().min(3, { message: 'UserName is required and more than 3' }),
  email: z.string().email({ message: 'Invalid email address' }),
  password: z.string().min(6, { message: 'Password is required and more than 6' }),
  confirm_password: z.string().min(6, { message: 'Confirm Password' }),
});

export const RegisterSchema = schema.refine(({ confirm_password, password }) => password === confirm_password, {
  message: "Passwords don't match",
  path: ['confirm'], // path of error
});

export const LoginSchema = schema.pick({
  userName: true,
  password: true,
});

export type RegisterSchemaType = z.infer<typeof RegisterSchema>;
export type LoginSchemaType = z.infer<typeof LoginSchema>;

// export const LoginSchema = RegisterSchema.required();
