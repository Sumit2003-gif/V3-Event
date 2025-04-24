import React, { useEffect, useState } from "react";

const Work = () => {
    const [count, setCount] = useState(0);
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);
    const [count3, setCount3] = useState(0);

    const countmax = 40;
    const countmax1 = 350;
    const countmax2 = 450;
    const countmax3 = 250;
    const totalDuration = 5000;
    const intervalDelays = 40;
    const totalSteps = totalDuration / intervalDelays;

    const step = countmax / totalSteps;
    const step1 = countmax1 / totalSteps;
    const step2 = countmax2 / totalSteps;
    const step3 = countmax3 / totalSteps;

    useEffect(() => {
        let currentStep = 0;

        const interval = setInterval(() => {
            currentStep++;

            setCount((p) => (p + step >= countmax ? countmax : p + step));
            setCount1((p) => (p + step1 >= countmax1 ? countmax1 : p + step1));
            setCount2((p) => (p + step2 >= countmax2 ? countmax2 : p + step2));
            setCount3((p) => (p + step3 >= countmax3 ? countmax3 : p + step3));

            if (currentStep >= totalSteps) {
                clearInterval(interval);
            }
        }, intervalDelays);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 py-8 w-full text-white">
            <div className= " border-2 border-black  bg-[#072320] flex flex-col items-center  rounded-xl shadow-md py-6">
                <h1 className="text-lg font-semibold">Experiences</h1>
                <p className="text-2xl font-bold mt-2">{Math.round(count)}+</p>
            </div>
            <div className="border-2 border-black bg-[#072320] flex flex-col items-center  rounded-xl shadow-md py-6">
                <h1 className="text-lg font-semibold">Corporate Events</h1>
                <p className="text-2xl font-bold mt-2">{Math.round(count1)}+</p>
            </div>
            <div className="border-2 border-black bg-[#072320] flex flex-col items-center  rounded-xl shadow-md py-6">
                <h1 className="text-lg font-semibold">Weddings</h1>
                <p className="text-2xl font-bold mt-2">{Math.round(count2)}+</p>
            </div>
            <div className="border-2 border-black bg-[#072320] flex flex-col items-center rounded-xl shadow-md py-6">
                <h1 className="text-lg font-semibold">Musical Concerts</h1>
                <p className="text-2xl font-bold mt-2">{Math.round(count3)}+</p>
            </div>
        </div>
    );
};

export default Work;
