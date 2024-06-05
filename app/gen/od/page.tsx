'use client'
import Image from "next/image";
import { Inter } from "next/font/google";
import React, {useState, useEffect} from 'react';

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
    ans.innerHTML = `
Subject: Request for On Duty (OD) Approval
Dear ${advisor.value},
I trust this email finds you well.
I am writing to formally request approval for On Duty (OD) for the following period:
Date(s) of On Duty: ${start.value} to ${end.value}
As a student of ${clas.value}, I am seeking permission to be excused from regular classes to fulfill my responsibilities during the specified OD period. The purpose of my OD is ${reason.value}.
I assure you that I will make up for any missed coursework or assignments during my absence and will ensure minimal disruption to my academic obligations.
Attached to this email are any necessary documents or supporting materials related to my OD request. I kindly request your approval for this OD at your earliest convenience.
Thank you for considering my request. I am available to provide any further information or clarification if needed.
Looking forward to your positive response.
Best regards,
${name.value}
${roll.value}
    `
}
return (
    <main className="flex min-h-screen flex-col bg-slate-400">
        <div>
            <div>
                <h1 className="text-3xl p-3 text-slate-800 w-fit rounded-2xl font-mono">Lazy Letter</h1>
            </div>
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
                    <code  id="ans">Output</code>
                </pre>
            </div>
    </main>
  );
}
