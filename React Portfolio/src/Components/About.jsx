import React from "react";

export default function About() {
  return (
    <div className="h-auto text-white px-6 md:px-16">
      <div className="py-12 md:py-16" id="about">
        
        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl font-semibold text-center md:text-left">
          About
        </h1>

        {/* Paragraphs */}
        <div className="mt-8 space-y-6 text-[16px] sm:text-[18px] text-[#d4d4d4] leading-relaxed text-center md:text-justify">
          <p>
            I am a passionate full-stack software developer with a deep-rooted
            love for crafting digital solutions that empower and inspire. My journey
            into the world of software development began with a solid foundation
            in computer science, which I acquired during my years of dedicated
            study at Ramrao Adik Institute of Technology, where I earned my
            Bachelor's in Computer Science degree.
          </p>
          <p>
            My educational journey provided me with a strong theoretical
            understanding, but it's my insatiable curiosity and relentless drive
            that have fueled my practical expertise. I thrive in the dynamic and
            ever-evolving tech landscape, constantly updating my skills to stay
            at the forefront of innovation. As a full-stack developer, I find joy
            in bringing ideas to life, from conceptualization to deployment. I
            revel in the challenge of seamlessly connecting the front-end user
            experience with the robust functionality of the back end.
          </p>
          <p>
            When I'm not immersed in lines of code, you can find me exploring the
            latest tech trends, attending hackathons, or contributing to open-source
            projects. I believe that the tech world is a community, and I'm dedicated
            to giving back and sharing knowledge whenever I can.
          </p>
        </div>

        {/* Skills Section */}
        <div className="mt-10 flex justify-center md:justify-start">
          <ul className="flex flex-wrap gap-4 sm:gap-5">
            {["HTML", "CSS", "Media Query", "Bootstrap", "Tailwind CSS"].map(
              (skill, index) => (
                <li
                  key={index}
                  className="px-5 py-2 border border-white rounded-full hover:bg-purple-600 hover:text-white transition-all duration-300 cursor-pointer text-sm sm:text-base"
                >
                  {skill}
                </li>
              )
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}
