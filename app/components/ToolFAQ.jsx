"use client";

import { useState } from "react";

export default function ToolFAQ({ faqs = [] }) {
  const [openIndex, setOpenIndex] = useState(null);

  if (!faqs.length) return null;

  const toggleFAQ = (index) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <section className="mt-12">
      <h2 className="mb-5 text-2xl font-bold text-gray-900">
        Frequently Asked Questions
      </h2>

      <div className="divide-y divide-gray-200 rounded-2xl border border-gray-200 bg-white">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <div key={index} className="px-5">
              <button
                type="button"
                onClick={() => toggleFAQ(index)}
                className="flex w-full items-center justify-between gap-4 py-5 text-left"
                aria-expanded={isOpen}
              >
                <span className="font-semibold text-gray-900">
                  {faq.question}
                </span>

                <span className="shrink-0 text-xl text-gray-500">
                  {isOpen ? "−" : "+"}
                </span>
              </button>

              {isOpen && (
                <div className="pb-5 pr-8 text-sm leading-6 text-gray-600">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}