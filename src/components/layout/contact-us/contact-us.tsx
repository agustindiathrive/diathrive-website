'use client';

import { faCommentDots, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as React from 'react';

import ContactUsForm from '@/components/layout/contact-us/contact-us-form';

export default function ContactUs() {
  // State
  const [showContactForm, setShowContactForm] = React.useState<boolean>(false);

  // Handlers
  const toggleFormVisibility = React.useCallback(() => setShowContactForm((value: boolean) => !value), [setShowContactForm]);

  // Render
  return (
    <section>
      {
        showContactForm
          ? (
            <div className="bg-transparent bottom-0 fixed right-5 z-10">
              <div
                className="flex flex-row h-[46px] items-center justify-between px-4 rounded-t-md w-[320px]"
                style={{ backgroundColor: 'black', color: 'white' }}
              >
                <span>Contact Us</span><button onClick={toggleFormVisibility}><FontAwesomeIcon icon={faXmark} /></button>
              </div>
              <ContactUsForm />
            </div>
          )
          : (
            <div className="bg-transparent bottom-0 fixed right-5 z-10">
              <button
                className="cursor-pointer flex flex-row gap-4 h-[46px] items-center justify-center rounded-t-md w-[168px]"
                onClick={toggleFormVisibility}
                style={{ backgroundColor: 'black', color: 'white' }}
              >
                <FontAwesomeIcon icon={faCommentDots} /><span>Contact Us</span>
              </button>
            </div>
          )
      }
    </section >
  );
}