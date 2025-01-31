import React from "react";
import Marquee from "react-fast-marquee";

export default function Statistics() {
  return (
    <section className="overflow-hidden grid pt-20 sm:pt-40">
      <Marquee direction="right">
        <div className="flex w-full justify-around">
          <div className="text-center space-x-10">
            <h3 className="text-primary text-2xl sm:text-3xl font-bold">14M</h3>
            <p className="sm:text-xl text-lg">Happy Users</p>
          </div>
          <div className="text-center space-x-10 ">
            <h3 className="text-primary text-2xl sm:text-3xl font-bold">24+</h3>
            <p className="sm:text-xl text-lg">Supported Countries</p>
          </div>
          <div className="text-center space-x-10">
            <h3 className="text-primary text-2xl sm:text-3xl font-bold">
              200+
            </h3>
            <p className="sm:text-xl text-lg">Successful Transactions</p>
          </div>
          <div className="text-center space-x-10">
            <h3 className="text-primary text-2xl sm:text-3xl font-bold">98%</h3>
            <p className="sm:text-xl text-lg">Client Satisfaction</p>
          </div>
          <div className="text-center space-x-10">
            <h3 className="text-primary text-2xl sm:text-3xl font-bold">2K+</h3>
            <p className="sm:text-xl text-lg">New User Per Month</p>
          </div>
          <div className="text-center space-x-10">
            <h3 className="text-primary text-2xl sm:text-3xl font-bold">4.7</h3>
            <p className="sm:text-xl text-lg">AVG Rating</p>
          </div>
        </div>
      </Marquee>
    </section>
  );
}
