import { z } from 'zod';

export const SendMessageSchema = z.object({
  company: z.string().trim().min(1, { message: 'Company is required' }),
  email: z.string().trim().min(1, { message: 'Email is required' }).email({ message: 'Email is invalid' }),
  firstName: z.string().trim().min(1, { message: 'First Name is required' }),
  interestedIn: z.string(),
  lastName: z.string().trim().min(1, { message: 'Last Name is required' }),
  message: z.string().trim().min(1, { message: 'Message is required' }),
  phone: z.string().trim(),
});
