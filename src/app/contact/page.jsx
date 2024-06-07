"use client";
import React, { useState } from "react";
// import { db } from "../../../firebaseConfig"
// import { collection , addDoc} from 'firebase/firestore'
// import toast from "react-hot-toast";

// async function addData(formData){
//   try{
//     const docRef = await addDoc(collection(db, "Contact"), {
//       formData : formData
//     });
//     console.log("Document written with ID: ", docRef.id);
//     return true;
//   } catch (e) {
//     console.error("Error adding document: ", e);
//     return false;
//   }
// }

const Page = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  console.log(formData);
  const [loading, setLoading] = useState(false);

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const isFormIncomplete = Object.values(formData).some(
  //     (value) => value === ""
  //   );
  //   if (isFormIncomplete) {
  //     return toast.error("Please fill all details");
  //   }

  //   setLoading(true);

  //   try {
  //     const submitted = addData(formData)
  //     if (submitted) {
  //       toast.success("Message sent successfully!");
  //       setFormData({
  //         username: "",
  //         email: "",
  //         subject: "",
  //         message: "",
  //       });
  //     } else {
  //       throw new Error("Failed to save form data");
  //     }
  //   } catch (error) {
  //     console.error("Error saving form data:", error);
  //     toast.error("Failed to send messagae. Please try again later.");
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  return (
    <div className="font-[NeoSansPro-Regular]">
            <header className="bg-blue-600 h-44 text-white ">
        <div className="container  sm:h-80 mx-10 ">
            <h1 className="font-extralight mb-4  text-4xl xl:text-7xl pt-14 sm:pt-20 font-[NeoSansPro-Medium] text-center ">Get in touch</h1>

        </div>
    </header>
      <section className="dark:bg-slate-800 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-8">
        
          <div className="flex items-stretch justify-center">
            <div className="grid md:grid-cols-2">
              <div className="h-full pr-6">
                <p className="mt-3 mb-12 sm:text-lg text-gray-600 dark:text-slate-400 text-justify">
                At Om Trading Corporation, we offer comprehensive trading and international supply services, ensuring you receive the best products and solutions to excel in the global market.
                </p>
                <ul className="mb-6 md:mb-0">
                  <li className="flex">
                    <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-6 w-6"
                      >
                        <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
                        <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z"></path>
                      </svg>
                    </div>
                    <div className="ml-4 mb-4">
                      <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">
                        Our Address
                      </h3>
                      {/* <p className="text-gray-600 dark:text-slate-400">Dadar</p> */}
                      <p className="text-gray-600 dark:text-slate-400">
                        Mumbai,Maharashta 400101
                      </p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-6 w-6"
                      >
                        <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"></path>
                        <path d="M15 7a2 2 0 0 1 2 2"></path>
                        <path d="M15 3a6 6 0 0 1 6 6"></path>
                      </svg>
                    </div>
                    <div className="ml-4 mb-4">
                      <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">
                        Contact
                      </h3>
                     
                      <p className="text-gray-600 dark:text-slate-400">
                        Mail: admin@omtrading.in
                      </p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-6 w-6"
                      >
                        <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"></path>
                        <path d="M15 7a2 2 0 0 1 2 2"></path>
                        <path d="M15 3a6 6 0 0 1 6 6"></path>
                      </svg>
                    </div>
                    <div className="ml-4 mb-4">
                      <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">
                         REGISTRATION NUMBER
                      </h3>
                      <p className="text-gray-600 dark:text-slate-400">
                        XYZZYXSYDGRY
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="card h-fit max-w-6xl sm:px-5 md:px-12" id="form">
                {/* <h2 className="mb-4 text-2xl font-bold text-blue-700 ">
                  Ready to Get Started?
                </h2> */}
                <form id="contactForm" >
                  <div className="mb-6">
                    <div className="mx-0 mb-1 sm:mb-4">
                      <div className="mx-0 mb-1 sm:mb-4">
                        <label
                          htmlFor="username"
                          className="pb-1 text-xs uppercase tracking-wider"
                        >
                         
                        </label>
                        <input
                          type="text"
                          id="username"
                          autoComplete="given-name"
                          placeholder="Your name"
                          className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-600 sm:mb-0"
                          name="username"
                          value={formData.username}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="mx-0 mb-1 sm:mb-4">
                        <label
                          htmlFor="email"
                          className="pb-1 text-xs uppercase tracking-wider"
                        >
                          
                        </label>
                        <input
                          type="email"
                          id="email"
                          autoComplete="email"
                          placeholder="Your email address"
                          className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-600 sm:mb-0"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                        />
                      </div>
                      {/* <div className="mx-0 mb-1 sm:mb-4">
                        <label
                          htmlFor="subject"
                          className="pb-1 text-xs uppercase tracking-wider dark:text-gray-200"
                        >
                          Subject
                        </label>
                        <select
                          value={formData.subject}
                          onChange={handleChange}
                          name="subject"
                          className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-600 sm:mb-0"
                        >
                          <option value="Other">Other</option>
                          <option value="Cousce">Course Related Query</option>
                          <option value="Campus Ambassador">
                            Campus Ambassador
                          </option>
                          <option value="Partner Company">
                            Partner Company
                          </option>
                        </select>
                      </div> */}
                    </div>
                    <div className="mx-0 mb-1 sm:mb-4">
                      <label
                        htmlFor="message"
                        className="pb-1 text-xs uppercase tracking-wider"
                      >
                      
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        cols="30"
                        rows="5"
                        placeholder="Write your message..."
                        className="mb-2 w-full rounded-md border border-gray-400  py-2 pl-2 pr-4 shadow-md dark:text-gray-600 sm:mb-0"
                        value={formData.message}
                        onChange={handleChange}
                      ></textarea>
                    </div>
                  </div>
                  <div className="text-center">
                    <button
                      type="submit"
                      className={`w-full  z-50 dark:text-gray-900 dark:bg-white border dark:border-0  dark:focus:outline-none focus:ring-4 dark:focus:ring-gray-800 font-medium rounded-3xl text-sm px-5 py-2.5 me-2 mb-2 bg-blue-700  border-blue-500 hover:bg-blue-900 hover:border-blue-700 hover:scale-105 dark:hover:scale-100 focus:ring-blue-500 dark:hover:text-white text-white ${
                        loading ? "opacity-50 cursor-not-allowed" : ""
                      }`}
                    >
                      <span className={` text-center  pr-[1vh]`}>
                        {loading ? "Sending.." : "Send Message"}
                      </span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};


export default Page;
