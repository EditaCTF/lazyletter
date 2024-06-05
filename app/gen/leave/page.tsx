'use client'
import Image from "next/image";
import { Inter } from "next/font/google";
import React, {useState, useEffect} from 'react';

export default function Home() {
const action = () => {
    let name = document.getElementById("name")
    let roll = document.getElementById("roll")
    let ans = document.getElementById("ans")
    // let clas = document.getElementById("class")
    // let start = document.getElementById("start")
    // let end = document.getElementById("end")

    ans.innerHTML = `Subject: Request for Issuance of Original Degree Certificate

    Dear [Recipient's Name/Title],
    
    I hope this email finds you well.
    
    I am writing to formally request the issuance of my Original Degree certificate for the completion of my [Degree Program] from [Institution's Name]. Below are my personal details for your reference:
    
    Name: ${name.value}
    Roll Number: ${roll.value}
    Department: ${clas.value}
    Dates of Attendance: ${start.value} to ${end.value}
    I have successfully completed all the academic requirements, including the necessary coursework and examinations, as per the regulations of the institution. Enclosed with this email are the required documents, along with any applicable fees or forms as per the institution's guidelines.
    
    I kindly request that the Original Degree certificate be processed and issued at the earliest convenience. This certificate holds significant importance for my future academic and professional endeavors.
    
    Your prompt attention to this matter would be greatly appreciated. Please feel free to reach out to me if any further information or documentation is required from my end.
    
    Thank you for your assistance in advance. Looking forward to a positive response.
    
    Warm regards,
    
    ${name.value}
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
            <div className="mt-4">
                <label htmlFor="name" className="text-slate-800 font-medium">Name</label>
                <input type="text" id="name" className="block p-2 mt-1 rounded-md bg-white border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                <label htmlFor="roll" className="text-slate-800 font-medium">Roll Number</label>
                <input type="text" id="roll" className="block p-2 mt-1 rounded-md bg-white border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                <label htmlFor="class" className="text-slate-800 font-medium">Class</label>
                <input type="text" id="email" className="block p-2 mt-1 rounded-md bg-white border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                <label htmlFor="start" className="text-slate-800 font-medium">Start Date</label>
                <input type="date" id="start" className="block p-2 mt-1 rounded-md bg-white border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                <label htmlFor="end" className="text-slate-800 font-medium">End Date</label>
                <input type="date" id="end" className="block p-2 mt-1 rounded-md bg-white border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                <label htmlFor="reason" className="text-slate-800 font-medium">Reason</label>
                <input type="text" id="reason" className="block p-2 mt-1 rounded-md bg-white border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
            </div>
                <button className="bg-slate-800 text-white p-2 rounded-md" onClick={action}>Generate</button>
                <div id="ans"></div>
            </div>
    </main>
  );
}
