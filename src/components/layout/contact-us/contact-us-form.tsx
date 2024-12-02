'use client';

import * as React from 'react';

import { ContactInfoSchema } from '@/schemas/contact-info-schema';
import { sendContactInfo } from '@/actions/contact';

type Errors = {
  email?: string[];
  name?: string[];
  subject?: string[];
};

const initialState: { errors: Errors, message: string; } = {
  errors: {},
  message: '',
};

export default function ContactUsForm(): JSX.Element {
  // State
  const [errors, setErrors] = React.useState<Errors>({});

  // Utils
  const [isPending, startTransition] = React.useTransition();
  const [state, formAction, actionPending] = React.useActionState(sendContactInfo, initialState);

  // Handlers
  const onSubmit = React.useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrors({});
    const formData = Object.fromEntries(new FormData(e.currentTarget));
    const validatedFields = ContactInfoSchema.safeParse(formData);

    if (!validatedFields.success) {
      setErrors(validatedFields.error.flatten().fieldErrors);
    } else {
      startTransition(async () => {
        formAction(new FormData(e.currentTarget));
      });
    }
  }, [formAction, setErrors]);

  // Render
  return (
    <form
      action={formAction}
      className="p-4"
      noValidate
      onSubmit={onSubmit}
      style={{ backgroundColor: 'white' }}
    >
      <label><span style={{ color: 'red' }}>*</span>Email</label><br />
      <input className="border h-[44px] leading-[30px] my-2 rounded w-full" name="email" type="email" /><br />
      <p style={{ color: 'red' }}>{errors?.['email']?.[0] || state.errors?.['email']?.[0]}</p><br />
      <label><span style={{ color: 'red' }}>*</span>Name</label><br />
      <input className="border h-[44px] leading-[30px] my-2 rounded w-full" name="name" /><br />
      <p style={{ color: 'red' }}>{errors?.['name']?.[0] || state.errors?.['name']?.[0]}</p><br />
      <label><span style={{ color: 'red' }}>*</span>Subject</label><br />
      <input className="border h-[44px] leading-[30px] my-2 rounded w-full" name="subject" /><br />
      <p style={{ color: 'red' }}>{errors?.['subject']?.[0] || state.errors?.['subject']?.[0]}</p><br />
      <button className="bg-light-blue mt-24 rounded p-2 w-full" disabled={isPending || actionPending} style={{ color: 'white' }} type="submit">Submit</button>
    </form>
  );
}