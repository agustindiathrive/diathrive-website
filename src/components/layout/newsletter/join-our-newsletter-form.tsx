export default function JoinOurNewsletterForm() {
  // Render
  return (
    <form className="flex flex-col gap-4 pb-8">
      <input
        className="border-none h-12 leading-[19px] outline-none px-3.5 text-[19px] text-black w-[247px]"
        placeholder="First Name"
        required
      />
      <input
        className="border-none h-12 leading-[19px] outline-none px-3.5 text-[19px] text-black w-[247px]"
        placeholder="Last Name"
        required
      />
      <input
        className="border-none h-12 leading-[19px] outline-none px-3.5 text-[19px] text-black w-[247px]"
        placeholder="Company"
        required
      />
      <div className="flex flex-row">
        <input
          className="border-none h-12 leading-[19px] outline-none px-3.5 text-[19px] text-black w-[247px]"
          placeholder="Email"
          required
          type="email"
        />
        <button
          className="bg-dark-blue font-oswald h-12 items-center justify-center text-lg w-[120px]"
          style={{ color: 'white' }}
          type="submit">
          SIGN UP
        </button>
      </div>
    </form>
  );
}