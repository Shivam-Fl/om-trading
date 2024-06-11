"use client";
import React, { useState } from "react";
import "./faq.css";

export default function FAQ() {
  const [faqs, setFaqs] = useState([
    {
      question: "What services does Om Trading Corporation provide?",
      answer:
        "Om Trading Corporation offers comprehensive trading and international supply chain management services. Our services include procurement, logistics, quality assurance, and risk management to ensure efficient and reliable global trade operations.",
    },
    {
      question: "In which countries does Om Trading Corporation operate?",
      answer:
        "Om Trading Corporation operates in over 50 countries, with a strong presence in key markets across North America, Europe, Asia, and Africa. Our extensive network ensures seamless trading and supply chain solutions worldwide.",
    },
    {
      question: "How long has Om Trading Corporation been in business?",
      answer:
        "Om Trading Corporation has been providing innovative trading and supply chain solutions for over 25 years, continually evolving to meet the changing needs of the global market.",
    },
    {
      question: "What industries does Om Trading Corporation serve?",
      answer:
        "We serve a wide range of industries, including manufacturing, retail, automotive, electronics, pharmaceuticals, and more. Our tailored solutions address the specific needs and challenges of each sector.",
    },
    {
      question:
        "How does Om Trading Corporation ensure product quality and compliance?",
      answer:
        "We implement rigorous quality assurance and compliance protocols, including thorough inspections, testing, and certifications. Our team of experts ensures that all products meet international standards and regulatory requirements.",
    },
    {
      question:
        "Can Om Trading Corporation handle large-scale logistics operations?",
      answer:
        "Yes, Om Trading Corporation specializes in managing large-scale logistics operations. Our advanced logistics solutions include freight forwarding, warehousing, distribution, and real-time tracking to ensure timely and efficient delivery.",
    },
  ]);

  const toggleFAQ = (index) => {
    setFaqs(
      faqs.map((faq, i) => {
        if (i === index) {
          faq.open = !faq.open;
        } else {
          faq.open = false;
        }

        return faq;
      })
    );
  };

  return (
    <div className="App  font-[NeoSansPro-Regular]">
      {/* <header className="bg-blue-600 h-52 text-white ">
        <div className="container  sm:h-80 mx-10 ">
            <h1 className="font-extralight mb-4  text-4xl xl:text-7xl pt-14 sm:pt-24 font-[NeoSansPro-Medium] text-center ">Frequently Asked Questions</h1>

        </div>
    </header> */}
      <h2 className="text-bold max-md:text-3xl max-sm:text-center md:text-5xl text-black font-[NeoSansPro-Medium]">
        Frequently Asked Questions
      </h2>
      <div className="faqs py-4 ">
        {faqs.map((faq, index) => (
          <div
            className={
              "faq  bg-blue-50 " + (faq.open ? "open" : "") + ""
            }
            key={index}
            onClick={() => toggleFAQ(index)}
          >
            <div className="faq-question font-semibold ">{faq.question}</div>
            <div className="faq-answer">{faq.answer}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
