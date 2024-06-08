'use client'
import Image from "next/image";
import Link from "next/link";
import { Inter } from "next/font/google";
import React, {useState, useEffect} from 'react';

export default function Home() {

const action = () => {
    let reason1 = document.getElementById("reason")
    const reason = reason1 as HTMLSelectElement;
    if (reason.value === "OD") {
        onduty();
    } else if (reason.value === "Hostel Stay") {
        hostel();
    } else if (reason.value === "Outpass") {
        outpass();
    }
    else if (reason.value === "Assignment") {
        assignment();
    }
    else if (reason.value === "Leave") {
        leave();
    }
    else if (reason.value === "Others") {
        others();
    }
    else {
        console.log("Select a reason");
    }
}
const onduty = () => {
    console.log("OD");
    window.open("/gen/od", "_self");
}
const hostel = () => {
    console.log("Hostel");
    window.open("/gen/hostel", "_self");
}
const assignment = () => {
    console.log("Assignment");
    window.open("/gen/assignment", "_self");
}
const outpass = () => {
    console.log("Outpass");
    window.open("/gen/outpass", "_self");
}
const leave = () => {
    console.log("Leave");
    window.open("/gen/leave", "_self");
}
const others = () => {
    console.log("Others");
    window.open("/gen/others", "_self");
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
           
            <div className="font-mono text-xl p-3">
                Select your reason here
            </div>        
            <div className="mt-4 font-mono text-xl px-5">
                {/* <label htmlFor="reason" className="text-slate-800 font-medium">Select your reason</label> */}
                <select id="reason" className="block p-2 mt-1 rounded-md bg-white border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                    <option value="" defaultChecked>Select reason</option>
                    <option value="OD">OD</option>
                    <option value="Hostel Stay">Hostel temporary stay</option>
                    <option disabled value="Outpass">Outpass</option>
                    <option disabled value="Assignment">Assignment Submission</option>
                    <option disabled value="Leave">Leave Application</option>
                    <option disabled value="Others">Others</option>
                </select>
            </div>
                <button className="bg-slate-800 ml-10 mt-5 text-white p-2 rounded-md" onClick={action}>Generate</button>
            </div>
    </main>
  );
}
