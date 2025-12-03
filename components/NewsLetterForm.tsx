import { SetStateAction, useState } from "react";
import errorIcon from "../public/icon-error.svg";
import Image from 'next/image';


const NewsLetterForm = () => {

  const [email, setEmail] = useState("");
  const [isError, setIsError] = useState(false);

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    const isEmailInvalid =
      email.trim() === "" || !emailRegex.test(email.trim());
    setIsError(isEmailInvalid);
    if (!isEmailInvalid) {
      alert("Thank you for subscribing!");
      setEmail("");
    }
  };
  const handleEmailChange = (e: { target: { value: SetStateAction<string>; }; }) => {
    setEmail(e.target.value);
    if (isError) {
      setIsError(false);
    }
  };
  return (
    <form onSubmit={handleSubmit} className="form-container flex flex-col items-center justify-center w-full h-40" noValidate>


      <div className={`input-button-container flex lg:flex-row flex-col lg:gap-3  w-full ${isError ? "gap-4" : ""}`}>
        <div className={`input-container relative z-0 lg:w-86 w-full h-18 ${isError ? "border-b-26 border-red-400 rounded-md border-x-2 border-t-2" : ""}`}>
          <input
            placeholder="example@email/com"
            id="email-input"
            className="input-email h-12 w-full z-0 bg-gray-50  text-gray-400 rounded-[.2rem] p-5 "
            type="email"
            value={email}
            onChange={handleEmailChange}
          ></input>
          {isError && (
            <Image
              id="error-icon"
              className="error-icon w-5 h-5 absolute right-4 top-4"
              src={errorIcon}
              alt="Error-icon" />
          )}
          {isError
            && <div className="error-container absolute z-30 pl-4 text-[.6rem] italic w-80 top-13 font-medium"><p id="error-msg" className="error-msg">
              Whoops, make sure it's an email!
            </p></div>
          }
        </div>

        <button id="submit-button" type="submit"
          className="button lg:w-30 w-full h-12 bg-red-400 rounded-md text-white tracking-widest text-[.8rem] shadow-md hover:bg-gray-50 hover:text-red-400 hover:border-2 hover:border-red-400 hover:font-medium cursor-pointer">
          Contact Us
        </button>
      </div>

    </form>
  );
};

export default NewsLetterForm;