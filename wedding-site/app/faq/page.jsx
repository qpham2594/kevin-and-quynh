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
        answer: "Due to the limited space, only inviduals with their names on the invitation are invited. We won't have enough food or chairs to accomodate extra guests."
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
        
        <div className="faq-container mx-auto max-w-screen-md p-4">
            <Header/>
            <h1 className="text-2xl font-bold mb-4">Frequently Asked Questions</h1>
            <ol className="list-disc list-inside space-y-4">
                {faqs.map((faq, index) => (
                    <li key={index} className="flex flex-col">
                        <span className="text-xl font-semibold">{faq.question}</span>
                        <p className="text-white ml-4">{faq.answer}</p>
                    </li>
                ))}
            </ol>
        </div>
    );
}