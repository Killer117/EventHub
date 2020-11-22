import React, { useEffect } from "react";
import Navbar from "../../Home/Navbar/Navbar";
import bgimage from "../../../pictures/PagesBG.jpg";
import "./FAQs.css";

function FAQs() {
  useEffect(() => {
    document.title = "FAQs";
  }, []);
  const faqContents = [
    {
      key: 1,
      keyword: "One",
      question: "What is Event Hub ?",
      answer:
        "EventHub is a platform dedicated to provide customers with a wide assortment of different event management service plans of different companies for all sorts of corporate and personal events. Be it live shows, star nights, product launches, theme parties, wedding events, birthday parties, fashion shows, ghazal nights or any other event.",
    },
    {
      key: 2,
      keyword: "Two",
      question: "What is Event Hub ?",
      answer:
        "EventHub is a platform dedicated to provide customers with a wide assortment of different event management service plans of different companies for all sorts of corporate and personal events. Be it live shows, star nights, product launches, theme parties, wedding events, birthday parties, fashion shows, ghazal nights or any other event.",
    },
    {
      key: 3,
      keyword: "Three",
      question: "What is Event Hub ?",
      answer:
        "EventHub is a platform dedicated to provide customers with a wide assortment of different event management service plans of different companies for all sorts of corporate and personal events. Be it live shows, star nights, product launches, theme parties, wedding events, birthday parties, fashion shows, ghazal nights or any other event.",
    },
    {
      key: 4,
      keyword: "Four",
      question: "What is Event Hub ?",
      answer:
        "EventHub is a platform dedicated to provide customers with a wide assortment of different event management service plans of different companies for all sorts of corporate and personal events. Be it live shows, star nights, product launches, theme parties, wedding events, birthday parties, fashion shows, ghazal nights or any other event.",
    },
    {
      key: 5,
      keyword: "Five",
      question: "What is Event Hub ?",
      answer:
        "EventHub is a platform dedicated to provide customers with a wide assortment of different event management service plans of different companies for all sorts of corporate and personal events. Be it live shows, star nights, product launches, theme parties, wedding events, birthday parties, fashion shows, ghazal nights or any other event.",
    },
  ];
  return (
    <div className="faqs d-flex flex-column">
      <Navbar activeTab={"FAQs"} />
      <div className="faqs-first">
        <img src={bgimage} className="faqs-image" alt="..." />
        <div className="faqs-image-content">
          <p className="faqs-text">FAQs</p>
        </div>
      </div>
      <div
        className="accordion d-flex flex-column align-items-center nowrap justify-content-center faq-accordian mb-3"
        id="accordionExample"
      >
        {faqContents.map((item) => {
          return (
            <div key={item.key} className="card faqs-card m-2">
              <div
                className="card-header faqs-card-header"
                id={`heading${item.keyword}`}
              >
                <h2 className="mb-0">
                  <button
                    className={`btn btn-block text-left ${
                      item.key !== 1 ? "collapsed" : ""
                    } faqs-accordian-button `}
                    type=""
                    data-toggle="collapse"
                    data-target={`#collapse${item.keyword}`}
                    aria-expanded="false"
                    aria-controls={`collapse${item.keyword}`}
                  >
                    {item.question}
                  </button>
                </h2>
              </div>
              <div
                id={`collapse${item.keyword}`}
                className="collapse"
                aria-labelledby={`headingOne${item.keyword}`}
                data-parent="#accordionExample"
              >
                <div className="card-body">{item.answer}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default FAQs;
