import React from "react";

const HeroSection = () => {
  return (
    <section className="mx-auto flex flex-col items-center gap-2 py-8 md:py-12 md:pb-6 lg:py-24 lg:pb-10 max-w-3xl">
      <h1 className="text-center text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:leading-[1.1] text-balance">
        Upskill in Minutes. Master in No Time.
      </h1>
      <p className="max-w-[750px] text-center text-lg font-light text-foreground">
        Microlearning for busy professionals who want to get ahead.
      </p>
    </section>
  );
};

export default HeroSection;
