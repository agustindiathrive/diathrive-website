'use server';

import { ContactInfoSchema } from '@/schemas/contact-info-schema';

export async function sendContactInfo(prevState: unknown, formData: FormData) {
  await new Promise(resolve => setTimeout(resolve, 2000));
  const data = Object.fromEntries(formData);

  const validatedFields = ContactInfoSchema.safeParse(data);

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: '',
    }
  }

  return {
    errors: null,
    message: 'Success',
  }
}