import ActionButton from '@/components/ui/action-button';

export default function SendMessageForm() {
  // Render
  return (
    <section className="max-w-[1320px] mx-auto pb-[80px] pt-[120px]">
      <h2 className="font-normal text-dark-blue text-[32px]">Send a mesage</h2>
      <form className="flex flex-col gap-4">
        <div className="flex flex-row gap-6">
          <div className="flex flex-col w-1/2">
            <label className="font-semibold p-2.5 text-base text-light-blue" htmlFor="firstName">First Name*</label>
            <input
              className="border-2 border-light-blue h-[49px] leading-[49px] px-3.5 rounded-[10px]"
              id="firstName"
              name="firstName"
              placeholder="Enter your first name"
            />
          </div>
          <div className="flex flex-col w-1/2">
            <label className="font-semibold p-2.5 text-base text-light-blue" htmlFor="lastName">Last Name*</label>
            <input
              className="border-2 border-light-blue h-[49px] leading-[49px] px-3.5 rounded-[10px]"
              id="lastName"
              name="lastName"
              placeholder="Enter your last name"
            />
          </div>
        </div>
        <div className="flex flex-row gap-6">
          <div className="flex flex-col w-1/2">
            <label className="font-semibold p-2.5 text-base text-light-blue" htmlFor="email">Email*</label>
            <input
              className="border-2 border-light-blue h-[49px] leading-[49px] px-3.5 rounded-[10px]"
              id="email"
              name="email"
              placeholder="Enter your email"
              type="email"
            />
          </div>
          <div className="flex flex-col w-1/2">
            <label className="font-semibold p-2.5 text-base text-light-blue" htmlFor="company">Company*</label>
            <input
              className="border-2 border-light-blue h-[49px] leading-[49px] px-3.5 rounded-[10px]"
              id="company"
              name="company"
              placeholder="Enter company name"
            />
          </div>
        </div>
        <div className="flex flex-row gap-6">
          <div className="flex flex-col w-1/2">
            <label className="font-semibold p-2.5 text-base text-light-blue" htmlFor="phone">Phone</label>
            <input
              className="border-2 border-light-blue h-[49px] leading-[49px] px-3.5 rounded-[10px]"
              id="phone"
              name="phone"
              placeholder="Enter your phone"
              type="tel"
            />
          </div>
          <div className="flex flex-col w-1/2">
            <label className="font-semibold p-2.5 text-base text-light-blue" htmlFor="interestedIn">I&apos;m Interested In</label>
            <select className="border-2 border-light-blue h-[49px] leading-[49px] px-3.5 rounded-[10px]" name="interestedIn">
              <option>Select an option</option>
              <option value="Request a demo">Request a demo</option>
              <option value="Speak to a sales rep">Speak to a sales rep</option>
            </select>
          </div>
        </div>
        <div className="flex flex-col w-full">
          <label className="font-semibold p-2.5 text-base text-light-blue" htmlFor="message">Message*</label>
          <textarea className="border-2 border-light-blue h-[150px] leading-[36px] p-3.5 rounded-[10px]" name="message" placeholder="Enter message" />
        </div>
        <div>
          <ActionButton text="Submit" />
        </div>
      </form>
    </section>
  );
}