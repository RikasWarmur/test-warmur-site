import React from "react";
import { graph, woman, digit } from "@/constants/data";
import Image from "next/image";

export default function Statistics() {
  return (
    <section className="body-font h-screen bg-gray-300 pt-20">
      <div className="container mx-auto flex flex-wrap justify-center items-center h-full">
        <div className="w-full md:w-1/2">
          <div className="grid grid-cols-2 grid-rows-2 gap-4 md:h-auto">
            <div className="col-span-1 row-span-1 relative">
              <Image src={graph} alt="graph" className="object-cover" />
            </div>
            <div className="col-span-1 row-span-1 relative">
              <p className="text-lg">How it works.</p>
              <h1 className="mb-5 sm:text-5xl text-4xl items-center">
                Simple plans, backed by numbers
              </h1>
              <p className="text-lg">
                We start by building a 3D model of your home and a weather
                profile for your location. We then run hundreds of simulations
                to determine the optimal renewable configurations for you and
                let you identify appropriate time-of-use energy tariffs. Warmur
                takes the hassle out of researching the combined benefits of
                multiple technologies and provides a simple plan that maximizes
                your investment.
              </p>
            </div>
            <div className="col-span-1 row-span-1 relative mb-16">
              <Image src={woman} alt="digit" className="object-cover" />
            </div>
            <div className="col-span-1 row-span-1 relative">
              <Image src={digit} alt="woman" className="object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
