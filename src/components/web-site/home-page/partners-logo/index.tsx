import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";

export default function Partners() {
  return (
    <section className="overflow-hidden grid pt-20 sm:pt-40">
      <Marquee>
        <div className="flex gap-12">
          <Image
            src="/partner-logo/cake-logo.svg"
            alt="cake logo"
            height={48}
            width={118}
          />
          <Image
            src="/partner-logo/bitcoin-logo.svg"
            alt="bitcoin logo"
            height={48}
            width={224}
          />
          <Image
            src="/partner-logo/coinrabbit-logo.svg"
            alt="coinrabbit logo"
            height={48}
            width={180}
          />
          <Image
            src="/partner-logo/exodus-logo.svg"
            alt="exodus logo"
            height={48}
            width={188}
          />
          <Image
            src="/partner-logo/guardarian-logo.svg"
            alt="guardarian logo"
            height={48}
            width={154}
          />
          <Image
            src="/partner-logo/houdini-logo.svg"
            alt="houdini logo"
            height={48}
            width={131}
          />
          <Image
            src="/partner-logo/local-logo.svg"
            alt="local logo"
            height={48}
            width={181}
          />
          <Image
            src="/partner-logo/now-logo.svg"
            alt="now logo"
            height={48}
            width={248}
          />
          <Image
            src="/partner-logo/rubic-logo.svg"
            alt="rubic logo"
            height={48}
            width={138}
          />
          <Image
            src="/partner-logo/swap-logo.svg"
            alt="swap logo"
            height={48}
            width={133}
          />
          <Image
            src="/partner-logo/tan-logo.svg"
            alt="tan logo"
            height={48}
            width={150}
          />
          <Image
            src="/partner-logo/trezor-logo.svg"
            alt="trezor logo"
            height={48}
            width={144}
          />
          <Image
            src="/partner-logo/trustee-logo.svg"
            alt="trustee logo"
            height={48}
            width={167}
          />
          <Image
            src="/partner-logo/guarda-logo.svg"
            width={154}
            height={48}
            alt="guarda logo"
            className="mr-7"
          />
        </div>
      </Marquee>
    </section>
  );
}
