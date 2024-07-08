import React from 'react';
import Header from "../components/header";

const faqs = [
    {
        question: "What is the date of the event?",
        answer: "The event will be held on March 29, 2025, 3PM."
    },
    {
        question: "Where is the venue located?",
        answer: "The venue is located at Lovingston Winery, Lonvingston, VA."
    },
    {
        question: "How can I RSVP?",
        answer: "You can RSVP by clicking the 'RSVP Here' button on the home page."
    },
    {
        question: "Can I bring my kids?",
        answer: "As much as we would want to celebrate it with the little ones, this will be an adult-only function due to limited space."
    },
    {
        question: "What if I miss the deadline to RSVP?",
        answer: "Due to the limited space, if you miss the deadline to RSVP...bring a chair."
    },
    {
        question: "Can I bring a plus one even if their name is not on the invitation?",
        answer: "Due to the limited space, only inviduals with their names on the invitation are invited. While we would love to be able to celebrate with everyone, we will have to celebrate with them at another time."
    },
    {
        question: "What kind of alcohol will be there?",
        answer: "There will be beer and wine for our guests, and also non-alcoholic beer and wine for those who do not drink like ourselves."
    },
    {
        question: "What should I wear to the wedding?",
        answer: "This will be a cocktail attire event, and the ceremony will be outside, so we ask you to dress accordingly. We also ask you to obtain from wearing red since the bride will be in red at some point during the reception. Since we want to have a good time with you, we recommend that you wear something comfortable."
    },
    
];

export default function FAQPage() {
    return (
        <main>
            <Header/>
            <div className="min-h-screen bg-cover bg-fixed bg-yellow-bg">             
                <div className= "max-w-6xl w-full mx-auto py-6 sm:px-6 sm:py-12 md:px-12 md:py-20 space-y-12" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
                <h1 className="text-5xl md:text-4xl sm:text-3xl m-20 flex justify-center font-serif">Frequently Asked Questions</h1>
                <ol className="max-w-4xl mx-auto mt-20 divide-y  border border-white rounded-xl">
                    {faqs.map((faq, index) => (
                        <li key={index}>
                            <details className="group rounded" style={{ backgroundColor: '#996666' }}>
                            <summary className="flex items-center gap-3 px-4 py-3 font-medium marker:content-none hover:cursor-pointer">
                            <svg className="w-6 h-12 text-white transition group-open:rotate-90" xmlns="http://www.w3.org/2000/svg"
                                width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                <path fill-rule="evenodd"
                                    d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z">
                                </path>
                            </svg>
                            <span className="text-xl font-semibold">{faq.question}</span>
                            </summary>
                            <p className="text-md px-14 pb-4">{faq.answer}</p>
                            </details>
                        </li>
                    ))}
                </ol>   
                </div>
            </div>
        </main>
    );
}