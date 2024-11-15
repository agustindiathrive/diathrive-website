export default function Footer() {
  // Render
  return (
    <footer className="flex flex-row justify-around">
      <nav>
        <ul className="flex flex-row gap-8">
          <li>
            <a href="https://diathrive.com/terms-conditions" target="_blank">Terms & Conditions</a>
          </li>
          <li>
            <a href="https://diathrive.com/privacy-policy" target="_blank">Privacy Policy</a>
          </li>
        </ul>
      </nav>
    </footer>
  );
}