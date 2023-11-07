// import React from 'react';
import ScrollTrigger from "react-scroll-trigger";
import CountUp from "react-countup";
import { useState } from "react";

const ReactCounter = () => {
    const [counterOn, setCounterOn] = useState(false);
    return (
        <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
            <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2  m-7 bg-transparent w-full mx-auto">
                <div className="bg-[#dbc13d] text-white p-8 space-y-3 transform transition hover:scale-105">
                    <h1 className="text-5xl font-bold text-center">
                        {counterOn && <CountUp start={0} end={175}
                        duration={2} delay={0}></CountUp>}+
                    </h1>
                    <h4 className="text-xl text-center">Running Students</h4>
                </div>
                <div className="bg-[#dbc13d] text-white p-8 space-y-3 transform transition hover:scale-105 border border-x-white">
                    <h1 className="text-5xl font-bold text-center">
                        {counterOn && <CountUp start={0} end={98} duration={2} delay={0}></CountUp>}%
                    </h1>
                    <h4 className="text-xl text-center">Satisfaction Rate</h4>
                </div>
                <div className="bg-[#dbc13d] text-white p-8 space-y-3 transform transition hover:scale-105 border border-r-1">
                    <h1 className="text-5xl font-bold text-center">
                        {counterOn && <CountUp start={0} end={92} duration={2} delay={0}></CountUp>}%
                    </h1>
                    <h4 className="text-xl text-center">Increase in Grades</h4>
                </div>
                <div className="bg-[#dbc13d] text-white p-8 space-y-3 transform transition hover:scale-105">
                    <h1 className="text-5xl font-bold text-center">
                        {counterOn && <CountUp start={0} end={4.9} duration={2} delay={0}></CountUp>}
                    </h1>
                    <h4 className="text-xl text-center">Avarage Tutor’s Ratings</h4>
                </div>


            </div>
        </ScrollTrigger>
    );
};

export default ReactCounter;