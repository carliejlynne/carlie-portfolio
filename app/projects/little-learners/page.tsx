
import Link from "next/link";

export default function LittleLearnersProject() {
  return (
    <main className="min-h-screen bg-[#EDE5D8] text-[#242424]">
      <div className="mx-auto max-w-5xl px-6 py-12 md:px-12">
        <Link
          href="/#projects"
          className="text-sm hover:underline"
        >
          ← Back to Portfolio
        </Link>

        <div className="mt-16">
          <p className="text-xs uppercase tracking-[0.3em]">
            Software Development / Web Application
          </p>

          <h1 className="mt-5 font-serif text-5xl md:text-7xl">
            Little Learners
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#625A52]">
            An interactive educational website designed to
            make learning fun and engaging for children
            through playful activities, games, and lessons.
          </p>
        </div>

        <div className="mt-12 overflow-hidden rounded-xl">
          <img
            src="/little-learner.jpg"
            alt="Little Learners educational website homepage"
            className="w-full object-cover"
          />
        </div>

<div className="mt-8">
  <a
    href="https://little-learners-pi.vercel.app/"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center justify-center rounded-md bg-[#242424] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#48413B]"
  >
    Visit Live Website ↗
  </a>
</div>

        <section className="mt-20">
          <h2 className="font-serif text-4xl">
            Project Overview
          </h2>

          
<div className="mt-6 max-w-3xl space-y-6 leading-8 text-[#625A52]">
  <p>
    For this project, I designed and developed Little Learners,
    an interactive educational website for children ages 3–10.
    My goal was to create a fun and engaging learning environment
    where children could explore different subjects through
    interactive lessons, activities, games, and quizzes.
  </p>

  <p>
    I built the website using Next.js, React, TypeScript, and CSS,
    focusing on creating a colorful, child-friendly interface
    that is easy to navigate. I incorporated different animal
    characters to guide children through subjects such as reading,
    writing, math, science, music, and geography. I also added
    age-based learning activities so children could practice
    skills appropriate for their level.
  </p>

  <p>
    One of the main features I developed was a personalized
    learning experience where children can select their own
    learning buddy and track their progress. I also implemented
    interactive quizzes with randomized questions, answer
    feedback, and progress tracking. Throughout the project,
    I worked on improving the website&apos;s responsiveness,
    managing application state, and troubleshooting issues
    with question repetition and saved progress.
  </p>

  <p>
    I used Git and GitHub for version control and Vercel to
    deploy the website. This project helped me strengthen my
    frontend development skills, gain more experience working
    with React components and TypeScript, and better understand
    how to design interactive applications for younger users.
  </p>
</div>

        </section>

        
<section className="mt-20">
  <h2 className="font-serif text-4xl">
    Features & Development
  </h2>

  <h3 className="mt-10 font-serif text-2xl">
    Key Features
  </h3>

  <ul className="mt-6 max-w-3xl list-disc space-y-4 pl-6 leading-8 text-[#625A52]">
    <li>
      <strong className="text-[#242424]">Interactive Learning:</strong>{" "}
      Developed lessons, games, and quizzes covering reading,
      writing, math, science, music, and geography.
    </li>

    <li>
      <strong className="text-[#242424]">Age-Based Activities:</strong>{" "}
      Created learning activities for children ages 3–10,
      with questions and difficulty levels adjusted based on age.
    </li>

    <li>
      <strong className="text-[#242424]">Personalized Learning:</strong>{" "}
      Implemented a learning buddy selection feature where
      children can choose their own animal character.
    </li>

    <li>
      <strong className="text-[#242424]">Progress Tracking:</strong>{" "}
      Used localStorage to save completed activities and track
      each child&apos;s learning progress.
    </li>

    <li>
      <strong className="text-[#242424]">Interactive Quizzes:</strong>{" "}
      Built quizzes with randomized questions, multiple-choice
      answers, instant feedback, and question tracking to
      prevent repetition.
    </li>

    <li>
      <strong className="text-[#242424]">Responsive Design:</strong>{" "}
      Designed a colorful, child-friendly interface that works
      across desktop and mobile devices.
    </li>
  </ul>

  <h3 className="mt-14 font-serif text-2xl">
    Development Process
  </h3>

  <div className="mt-6 max-w-3xl space-y-6 leading-8 text-[#625A52]">
    <p>
      I developed Little Learners using Next.js, React,
      TypeScript, and CSS. I organized the website into
      different subject pages and created reusable components
      to keep the design consistent throughout the application.
    </p>

    <p>
      I used React hooks such as useState, useEffect, and useRef
      to manage user interactions, quiz questions, and saved
      progress. One challenge I worked through was preventing
      repeated questions during practice activities while
      making sure the questions stayed appropriate for each
      child&apos;s age and selected subject.
    </p>

    <p>
      Throughout development, I tested and debugged different
      features, improved the layout and navigation, and made
      adjustments based on how the activities worked. I used
      Git and GitHub to manage my code and Vercel to deploy
      the website.
    </p>
  </div>
</section>

      </div>
    </main>
  );
}
