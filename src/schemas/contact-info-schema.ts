import { z } from "zod";

export const ContactInfoSchema = z.object({
  email: z.string().trim().min(1, { message: 'Email is required' }).email({ message: 'Email is invalid' }),
  name: z.string().trim().min(1, { message: 'Name is required' }),
  subject: z.string().trim().min(1, { message: 'Subject is required' }),
});