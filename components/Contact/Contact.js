import Image from "next/image";
import Link from "next/link";
import React, { useState, useRef } from "react";

import { FiGithub, FiTwitter } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import validation from "../../utils/validation";
import FormInput from "@/components/Contact/FormInput";

const Contact = () => {
  const IconsTest = [
    {
      Icon: FaLinkedinIn,
      link: "https://www.linkedin.com/in/olaf-kudrewicz-187783261/",
    },
    {
      Icon: FiGithub,
      link: "https://github.com/Razzi-bit",
    },
    {
      Icon: FiTwitter,
      link: "https://twitter.com/RaZzI83837574",
    },
  ];
  const form = useRef();

  const [values, setValues] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [send, setSend] = useState(true);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_YOUR_SERVICE_ID,
        process.env.NEXT_PUBLIC_YOUR_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_YOUR_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  const handelChanges = (e) => {
    e.preventDefault();
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handelSubmit = (e) => {
    e.preventDefault();

    if (Object.keys(validation(values)).length !== 0) {
      setErrors(validation(values));
      return;
    }

    sendEmail(e);
    e.target.reset();
    setValues({ name: "", email: "", phoneNumber: "", subject: "", message: "" });
    setSend(false);
    setTimeout(() => {
      setSend(true);
    }, 3000);
  };

  const clearError = (e) => {
    const { name } = e.target;
    setErrors({ ...errors, [name]: "" });
  };

  return (
    <section id="contact" className="bg-second h-full pb-20 pt-[100px] px-4 md:px-10">
      <div className="DefaultText flex flex-col justify-center items-center LayoutContainer ">
        <div className="text-start py-12 w-full max-w-[1400px]">
          <p className="text-secondL">Contact</p>
          <h1 className="MainTitle">Neem contact op</h1>
        </div>
        {!send && (
          <div className="bg-main flex flex-col justify-start items-center h-auto shadow-xl shadow-gray-300 rounded-xl p-4 my-5 mx-auto md:mx-0 max-w-[1132px] w-full">
            <h2 className="text-details text-2xl">Succes</h2>
            <p className="text-base pt-4">Bericht is verzonden</p>
          </div>
        )}
        <div className="flex flex-col md:flex-row w-full justify-center gap-8">
          <div className="bg-main flex flex-col h-auto shadow-xl shadow-gray-300 rounded-xl gap-2 p-6 mx-auto md:mx-0 max-w-[700px] md:max-w-[400px] w-full">
            <div className="mx-auto my-0 hidden md:flex">
              <Image
                src={"/contact.jpg"}
                alt="Image"
                width={640}
                height={427}
                className="rounded-xl"
                priority
              />
            </div>
            <h1 className="text-2xl pt-3">Olaf Kudrewicz</h1>
            <p className="text-base text-secondL pb-3">Front-End Web Developer</p>
            <p className="text-base text-secondL">Je kan mijn ook berichten op mijn soical media</p>
            <ul className="flex justify-between w-full max-w-[300px] my-4">
              {IconsTest.map((Icon, index) => {
                return (
                  <Link href={Icon.link} key={index} target="_blank">
                    <li className="flex items-center gap-4 bg-secondL  rounded-full p-3 ease-in duration-300 hover:scale-105 group/item1">
                      <Icon.Icon
                        size={20}
                        className="group-hover/item1:text-details ease-in duration-300"
                      />
                    </li>
                  </Link>
                );
              })}
            </ul>
          </div>

          <form
            ref={form}
            className="bg-main flex flex-col h-auto shadow-xl shadow-gray-300 rounded-xl gap-2 p-4 mx-auto md:mx-0 w-full text-base"
            onSubmit={handelSubmit}
          >
            <div className="flex flex-col sm:flex-row">
              <FormInput
                text="Naam"
                type="text"
                placeholder="Naam"
                name="name"
                id="name"
                errors={errors.name}
                handelChanges={handelChanges}
                clearError={clearError}
              />
              <FormInput
                text="Telefoon"
                type="text"
                placeholder="Telefoon"
                name="phoneNumber"
                id="phoneNumber"
                errors={errors.phoneNumber}
                handelChanges={handelChanges}
                clearError={clearError}
              />
            </div>
            <FormInput
              text="Email"
              type="text"
              placeholder="Email"
              name="email"
              id="email"
              errors={errors.email}
              handelChanges={handelChanges}
              clearError={clearError}
            />
            <FormInput
              text="Onderwerp"
              type="text"
              placeholder="Onderwerp"
              name="subject"
              id="subject"
              errors={errors.subject}
              handelChanges={handelChanges}
              clearError={clearError}
            />

            <div className="flex flex-col p-2 flex-1">
              <label htmlFor="message" className="p-1 text-[#fff]">
                Bericht
              </label>

              <textarea
                rows={4}
                placeholder="Bericht ..."
                name="message"
                id="message"
                className={`p-2 rounded-xl w-full focus:outline-none focus:ring focus:ring-details text-second ${
                  errors.message && "outline outline-2 outline-[#ff4141]"
                }`}
                onChange={handelChanges}
                onFocus={clearError}
              ></textarea>
              {errors && <span className="p-1 text-base text-[#ff4141]">{errors.message}</span>}
            </div>

            <button
              type="submit"
              className="text-xl uppercase  w-full p-3 text-main mt-4 rounded-xl text-center border border-main bg-details hover:bg-main hover:text-details hover:border-details duration-300"
            >
              Stuur bericht
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
