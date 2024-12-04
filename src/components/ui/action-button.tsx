type ActionButtonProps = {
  bgColor?: string;
  text: string;
  textColor?: string;
  type?: 'button' | 'submit';
};

export default function ActionButton({ bgColor = 'light-blue', text, textColor = 'white', type = 'submit' }: ActionButtonProps): JSX.Element {
  // Render
  return (
    <button
      className={`bg-${bgColor} h-[42px] leading-[41px] px-[20px] rounded-[60px] text-center text-[18px] hover:opacity-50`}
      style={{ color: textColor }}
      type={type}
    >
      {text}
    </button>
  );
}