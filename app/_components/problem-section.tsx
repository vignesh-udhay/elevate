import React from "react";
import urgent from "../../public/assets/urgent.svg";
import webinar from "../../public/assets/webinar.svg";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const ProblemSection = () => {
  return (
    <section className="py-12">
      <div className="lg:flex lg:h-[450px]">
        <div className="bg-muted container py-8 grid md:max-lg:grid-cols-2 md:items-center md:gap-8 lg:grid-rows-[60%_40%] lg:items-start">
          <Image
            className="sm:order-1 lg:-order-1 lg:h-64"
            alt=""
            src={urgent}
          />
          <h2 className="text-lg font-semibold md:text-xl">
            Do you feel there aren&apos;t enough hours to learn the skills to
            advance your career?
          </h2>
        </div>

        <div className="bg-primary container py-8 grid md:max-lg:grid-cols-2 md:items-center md:gap-8 lg:grid-rows-[60%_40%] lg:items-start">
          <Image className="h-56 sm:h-64" alt="" src={webinar} />
          <h2 className="text-white text-lg font-semibold md:text-xl">
            Are you tired of lengthy online courses that take forever to
            complete?
          </h2>
        </div>

        <div className="container bg-muted grid justify-items-center content-center py-8">
          <p className="text-xl font-semibold mb-6 text-center lg:text-left">
            We get it. That&apos;s why we created{" "}
            <span className="text-primary font-semibold">Elevate</span>, a
            microlearning platform designed for busy professionals like you.
          </p>
          <Button size="lg">Learn More</Button>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
