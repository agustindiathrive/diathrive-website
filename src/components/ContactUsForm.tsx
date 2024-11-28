'use client';

import { faCommentDots, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as React from 'react';

export default function ContactUsForm(): JSX.Element {
  // State
  const [isVisible, setIsVisible] = React.useState<boolean>(false);

  // Handlers
  const toggleFormVisibility = React.useCallback(() => setIsVisible((value: boolean) => !value), [setIsVisible]);

  // Render
  return (
    <section>
      {
        isVisible
          ? (
            <div className="bg-transparent bottom-0 fixed right-5 z-10">
              <div
                className="flex flex-row h-[46px] items-center justify-between px-4 rounded-t-md w-[320px]"
                style={{ backgroundColor: 'black', color: 'white' }}
              >
                <span>Contact Us</span><button onClick={toggleFormVisibility}><FontAwesomeIcon icon={faXmark} /></button>
              </div>
              <form className="p-4" style={{ backgroundColor: 'white' }}>
                <label><span style={{ color: 'red' }}>*</span>Email</label><br />
                <input className="border h-[44px] leading-[30px] my-2 rounded w-full" name="email" type="email" /><br />
                <label><span style={{ color: 'red' }}>*</span>Name</label><br />
                <input className="border h-[44px] leading-[30px] my-2 rounded w-full" name="name" /><br />
                <label><span style={{ color: 'red' }}>*</span>Subject</label><br />
                <input className="border h-[44px] leading-[30px] my-2 rounded w-full" name="subject" /><br />
                <button className="bg-light-blue mt-24 rounded p-2 w-full" style={{ color: 'white' }} type="submit">Submit</button>
              </form>
            </div>
          )
          : (
            <div className="bg-transparent bottom-0 fixed right-5 z-10">
              <button
                className="flex flex-row gap-4 h-[46px] items-center justify-center rounded-t-md w-[168px]"
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