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

export const UpdateSchema = z
  .object({
    fullName: z.string().min(5, { message: 'Full Name is required and more than 5' }),
    userName: z.string().min(3, { message: 'UserName is required and more than 3' }),
    email: z.string().email({ message: 'Invalid email address' }),
    password: z.string(),
    confirm_password: z.string(),
  })
  .superRefine(({ confirm_password, password }, ctx) => {
    if (confirm_password !== password) {
      ctx.addIssue({
        code: 'custom',
        message: "Passwords don't match",
        path: ['confirm'],
      });
    }
    if ((password.length > 1 && password.length < 5) || (confirm_password.length > 1 && confirm_password.length < 5)) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: `Password must be more than 5 characters.`,
        path: ['confirm'],
      });
    }
  });

export type RegisterSchemaType = z.infer<typeof RegisterSchema>;
export type LoginSchemaType = z.infer<typeof LoginSchema>;
export type UpdateSchemaType = z.infer<typeof UpdateSchema>;
