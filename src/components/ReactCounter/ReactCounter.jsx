// import React from 'react';
import ScrollTrigger from "react-scroll-trigger";
import CountUp from "react-countup";
import { useState } from "react";

const ReactCounter = () => {
    const [counterOn, setCounterOn] = useState(false);
    return (
        <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
            <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 m-7 bg-transparent w-full mx-auto">
                <div className="bg-[#47a475] text-white p-8 space-y-3 transform transition ">
                    <h1 className="text-5xl font-bold text-center">
                        {counterOn && <CountUp start={0} end={858}
                            duration={2} delay={0}></CountUp>}+
                    </h1>
                    <h4 className="text-xl text-center">SUCCESSFUL PROJECTS

                    </h4>
                </div>
                <div className="bg-[#47a475] text-white p-8 space-y-3 transform transition">
                    <h1 className="text-5xl font-bold text-center">
                        {counterOn && <CountUp start={0} end={650} duration={2} delay={0}></CountUp>}
                    </h1>
                    <h4 className="text-xl text-center">MEDIA ACTIVIES</h4>
                </div>
                <div className="bg-[#47a475] text-white p-8 space-y-3 transform transition">
                    <h1 className="text-5xl font-bold text-center">
                        {counterOn && <CountUp start={0} end={567} duration={2} delay={0}></CountUp>}
                    </h1>
                    <h4 className="text-xl text-center">SKILLED EXPERTS</h4>
                </div>
                <div className="bg-[#47a475] text-white p-8 space-y-3 transform transition">
                    <h1 className="text-5xl font-bold text-center">
                        {counterOn && <CountUp start={0} end={28} duration={2} delay={0}></CountUp>}k
                    </h1>
                    <h4 className="text-xl text-center">HAPPY CLIENTS</h4>
                </div>


            </div>
        </ScrollTrigger>
    );
};

export default ReactCounter;