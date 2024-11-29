import { faInstagram, faPinterestP, faSquareFacebook, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import ContactUs from "@/components/layout/contact-us/contact-us";
import TextLink from "@/components/TextLink";

export default function Footer() {
  // Render
  return (
    <>
      <ContactUs />
      <footer className="bg-dark-blue flex font-medium justify-around py-10 text-base" style={{ color: 'white' }}>
        <span>Copyright 2022 Diathrive</span>
        <nav>
          <ul className="flex flex-row gap-8">
            <li><TextLink href="https://diathrive.com/terms-conditions">Terms & Conditions</TextLink></li>
            <li><TextLink href="https://diathrive.com/privacy-policy">Privacy Policy</TextLink></li>
          </ul>
        </nav>
        <nav>
          <ul className="flex flex-row gap-8">
            <li><TextLink href="https://www.facebook.com/Diathrive"><FontAwesomeIcon icon={faSquareFacebook} height={30} width={30} /></TextLink></li>
            <li><TextLink href="https://twitter.com/getdiathrive"><FontAwesomeIcon icon={faTwitter} height={30} width={30} /></TextLink></li>
            <li><TextLink href="https://www.instagram.com/getdiathrive"><FontAwesomeIcon icon={faInstagram} height={30} width={30} /></TextLink></li>
            <li><TextLink href="https://www.pinterest.com/getdiathrive"><FontAwesomeIcon icon={faPinterestP} height={30} width={30} /></TextLink></li>
          </ul>
        </nav>
      </footer>
    </>
  );
}