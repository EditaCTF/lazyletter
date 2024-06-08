'use client'
import Image from "next/image";
import { Inter } from "next/font/google";
import React, {useState, useEffect} from 'react';
import Link from "next/link";

export default function Home() {
const action = () => {
    let name = document.getElementById("name");
    let roll = document.getElementById("roll");
    let clas = document.getElementById("email");
    let ans = document.getElementById("ans");
    let start = document.getElementById("start");
    let end = document.getElementById("end");
    let reason = document.getElementById("reason");
    let advisor = document.getElementById("adv");
    if (ans && name && roll && clas && start && end && reason && advisor){
    const advisorInput = advisor as HTMLInputElement;
    const nameInput = name as HTMLInputElement;
    const rollInput = roll as HTMLInputElement;
    const clasInput = clas as HTMLInputElement;
    const startInput = start as HTMLInputElement;
    const endInput = end as HTMLInputElement;
    const reasonInput = reason as HTMLInputElement;

        ans.innerHTML = `
    Subject: Request for Temporary Hostel Accommodation

Dear ${advisorInput.value},
I hope this email finds you well. I am writing to request temporary accommodation at hostel from ${startInput.value} to ${endInput.value} due to ${reasonInput.value}.
I understand that securing temporary accommodation may pose some challenges, but I assure you that I will abide by all hostel rules and regulations during my stay. I am willing to provide any necessary documentation or pay any associated fees for this temporary arrangement.
I am confident that my presence will not disrupt the harmony of the hostel community, and I will do my utmost to contribute positively during my stay. I am also open to discussing any conditions or terms you may have regarding my temporary accommodation.
I kindly request your consideration of my request and would be grateful for any assistance you can provide in facilitating this temporary stay at hostel.
Thank you for your attention to this matter. I look forward to your favorable response.
Warm regards,
${nameInput.value}
${rollInput.value}
${clasInput.value}
`}
}
return (
    <main className="flex min-h-screen flex-col bg-slate-400">
        <div>
            <Link className="" href="/">
                <h1 className="text-3xl p-3 text-slate-800 w-fit rounded-2xl font-mono">Lazy Letter</h1>
            </Link>
            <div>
                <h2 className="text-2xl p-3 text-slate-800 w-fit rounded-2xl font-mono">Generate your day to day college letters in seconds.</h2>
            </div>
            <div className="mt-4 gap-2 flex-col flex md:flex-row justify-center">
                <label htmlFor="name" className="text-slate-800 font-medium">Name</label>
                <input type="text" id="name" className="block p-1 mt-1 rounded-md bg-white border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                <label htmlFor="roll" className="text-slate-800 font-medium">Roll Number</label>
                <input type="text" id="roll" className="block p-1 mt-1 rounded-md bg-white border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                <label htmlFor="email" className="text-slate-800 font-medium">Class</label>
                <input type="text" id="email" className="block p-1 mt-1 rounded-md bg-white border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                <label htmlFor="start" className="text-slate-800 font-medium">Start Date</label>
                <input type="date" id="start" className="block p-1 mt-1 rounded-md bg-white border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                <label htmlFor="end" className="text-slate-800 font-medium">End Date</label>
                <input type="date" id="end" className="block p-1 mt-1 rounded-md bg-white border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                <label htmlFor="adv" className="text-slate-800 font-medium">Class Advisor</label>
                <input type="text" id="adv" className="block p-1 mt-1 rounded-md bg-white border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                <label htmlFor="reason" className="text-slate-800 font-medium">Reason</label>
                <input type="text" id="reason" className="block p-1 mt-1 rounded-md bg-white border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
            </div>
          
                <button className="bg-slate-800 text-white p-2 rounded-md ml-20 mt-5" onClick={action}>Generate</button>
                <pre className="pl-10 text-wrap">
                    <code  id="ans"></code>
                </pre>
            </div>
    </main>
  );
}
