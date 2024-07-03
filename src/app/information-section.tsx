"use client";

import Education from "@/components/templates/info/Education";
import Experience from "@/components/templates/info/Experience";
import Skills from "@/components/templates/info/Skills";

export function InformationSection() {
  return (
    <section className="pb-18 px-8">
      <article className=" grid xl:grid-cols-2 md:grid-cols-1 container gap-10 mx-auto items-start">
        <Experience />
        <Education />
      </article>

      <article className="w-full flex flex-row mx-auto items-start">
        <Skills />
      </article>
    </section>
  );
}

export default InformationSection;
