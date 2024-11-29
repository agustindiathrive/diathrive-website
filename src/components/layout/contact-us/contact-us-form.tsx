'use client';

export default function ContactUsForm(): JSX.Element {
  // Render
  return (
    <form className="p-4" style={{ backgroundColor: 'white' }}>
      <label><span style={{ color: 'red' }}>*</span>Email</label><br />
      <input className="border h-[44px] leading-[30px] my-2 rounded w-full" name="email" type="email" /><br />
      <label><span style={{ color: 'red' }}>*</span>Name</label><br />
      <input className="border h-[44px] leading-[30px] my-2 rounded w-full" name="name" /><br />
      <label><span style={{ color: 'red' }}>*</span>Subject</label><br />
      <input className="border h-[44px] leading-[30px] my-2 rounded w-full" name="subject" /><br />
      <button className="bg-light-blue mt-24 rounded p-2 w-full" style={{ color: 'white' }} type="submit">Submit</button>
    </form>
  );
}