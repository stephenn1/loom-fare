import Image from "next/image";
import React from "react";

interface CardProps {
  name: string;
  img: string;
  subject: string;
  testimony: string;
}

export default function Card({ name, img, subject, testimony }: CardProps) {
  return (
    <div className="grid gap-1 bg-secondary p-8 sm:p-4 rounded-2xl">
      <h3 className="font-medium sm:font-semibold">{subject}</h3>
      <p className="text-xs sm:text-sm leading-6 opacity-80">{testimony}</p>
      <div className="grid grid-flow-col w-max items-center gap-3">
        <span className="block relative w-12 rounded-full overflow-hidden bg-neutral-300">
          <Image src={img} width={100} height={100} alt="Testifer Image" />
        </span>
        <p>{name}</p>
      </div>
    </div>
  );
}
