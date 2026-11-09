
export default function Home() {
  return (
    <main className="min-h-screen bg-[#EDE5D8]">


<nav className="flex flex-col items-center gap-5 px-4 py-6 md:flex-row md:justify-between md:px-16">

  <a href="/" className="font-serif text-3xl text-[#242424]">
    Carlie Gonzalez
  </a>

  
<div className="flex items-center gap-6 text-xs tracking-widest text-[#242424]">

    <a href="#about">ABOUT</a>
    
<details className="group relative">
  <summary className="flex cursor-pointer list-none items-center gap-2 hover:text-stone-500">
    PROJECTS
    <span className="text-[10px] transition-transform group-open:rotate-180">
      ▼
    </span>
  </summary>

  <div className="absolute right-0 top-full z-50 w-56 pt-3">
    <div className="rounded-md border border-[#D8CFC2] bg-[#F5EFE6] p-2 shadow-lg">
      <a
        href="#projects"
        className="block rounded px-4 py-3 text-[#242424] hover:bg-[#EDE5D8]"
      >
        Software Projects
      </a>

      <a
        href="#embedded"
        className="block rounded px-4 py-3 text-[#242424] hover:bg-[#EDE5D8]"
      >
        Embedded Systems
      </a>
    </div>
  </div>
</details>

   

<a
  href="#resume"
  
className="shrink-0 whitespace-nowrap rounded-md bg-[#242424] px-2 py-2 text-[10px] text-white md:px-4 md:py-3 md:text-sm"

>
  RESUME
</a>

  </div>
</nav>

      

<section className="grid min-h-[80vh] md:grid-cols-2">
  
<div className="min-h-[450px] bg-[url('/carlie-portrait.jpg')] bg-cover bg-[center_20%]" />

  
<div className="flex flex-col items-center justify-center bg-[#242424] px-8 py-16 text-center 
text-[#F5EFE6] [&_h1]:!text-[#F5EFE6] [&_p]:!text-[#F5EFE6]">



        <p className="text-sm tracking-[0.3em] uppercase mb-6 text-stone-500">
          Software Engineering Student
        </p>

        <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-[#242424]">

          Meet Carlie
        </h1>

        <p className="mt-5 text-lg text-stone-600 max-w-xl mx-auto">
          I love learning new things and experimenting with fun projects.
  I hope you enjoy exploring them as much as I enjoy creating them!
        </p>
      </div>
      </section>

<section
  id="about"
  className="bg-[#EDE5D8] px-8 py-24 md:px-20"
>
  <div className="mx-auto max-w-6xl">
    <p className="mb-5 text-xs uppercase tracking-[0.3em] text-stone-600">
      GET TO KNOW ME
    </p>

    <h2 className="font-serif text-5xl text-[#242424] md:text-7xl">
      A Little About Me.
    </h2>

<div className="mt-10 max-w-3xl space-y-6 text-lg leading-8 text-[#48413B]">
  <p>
    I'm a Software Engineering student at California State
    University San Marcos with an interest in software
    development and embedded systems.
  </p>

  <p>
    I enjoy working on hands-on projects that challenge me
    to learn new technologies, solve problems, and turn
    ideas into working applications. Through my coursework
    and personal projects, I'm continuing to develop my
    technical skills and gain experience across both
    software and hardware development.
  </p>
</div>

  </div>
</section>

<section
  id="projects"
  className="bg-[#EDE5D8] px-8 py-24 md:px-20"
>
  <div className="mx-auto max-w-6xl">
    <p className="mb-5 text-xs uppercase tracking-[0.3em] text-stone-600">
      SELECTED WORK
    </p>

    <h2 className="font-serif text-5xl text-[#242424] md:text-7xl">
      Software Projects.
    </h2>

    <div className="mt-8 h-px w-full bg-[#B8ADA0]" />

<div className="mt-12 grid items-center gap-10 md:grid-cols-2">
  <div className="h-[300px] overflow-hidden rounded-lg">
  <img
    src="/smart-baking-recipes.jpg"
    alt="Smart Baking Assistant recipe website"
    className="h-full w-full object-contain"
  />
</div>

  <div>
    <p className="mb-4 text-xs uppercase tracking-[0.25em] text-stone-600">
      01 / Web Development + Hardware
    </p>

    <h3 className="font-serif text-4xl text-[#242424]">
      Smart Scale & Recipe App
    </h3>

    <p className="mt-6 leading-8 text-[#48413B]">
      An in-progress application that connects a digital
      kitchen scale with a recipe platform. The project
      explores real-time weight measurements, ingredient
      tracking, and recipe adjustments through a web interface.
    </p>

    <p className="mt-6 text-sm text-[#625B55]">
      React · Arduino · Web Development
    </p>

<a
  href="/projects/smart-baking-assistant"
  className="mt-6 inline-block border-b border-[#242424] pb-1 text-sm text-[#242424] transition-opacity hover:opacity-60"
>
  Explore Project ↗
</a>

  </div>
</div>

<div className="mt-16 grid items-center gap-10 md:grid-cols-2">
  <a
    href="/projects/little-learners"
    className="block overflow-hidden rounded-lg"
  >
    <img
      src="/little-learner.jpg"
      alt="Little Learners educational website"
      
className="h-[300px] w-full object-contain bg-[#F4E4E8] transition duration-300 hover:scale-105"
 />
  </a>

  <div>
    <p className="mb-4 text-xs uppercase tracking-[0.25em] text-stone-500">
      02 / Web Development
    </p>

    <h3 className="font-serif text-4xl text-[#242424]">
      Little Learners
    </h3>

    <p className="mt-6 leading-8 text-[#48413B]">
      An interactive educational website for children ages
      3–10, featuring personalized learning experiences,
      engaging activities, games, and quizzes.
    </p>

    <p className="mt-6 text-sm text-[#625B55]">
      Next.js · React · TypeScript · CSS
    </p>

    <a
      href="/projects/little-learners"
      className="mt-6 inline-block border-b border-[#242424] pb-1 text-sm text-[#242424] transition hover:opacity-60"
    >
      Explore Project ↗
    </a>
  </div>
</div>


  </div>
</section>

<section
  id="embedded"
  className="bg-[#242424] px-8 py-24 md:px-20"
>
  <div className="mx-auto max-w-6xl">
    <p className="mb-5 text-xs uppercase tracking-[0.3em] text-[#C4B8AA]">
      BEYOND THE SCREEN
    </p>

    <h2 className="font-serif text-5xl text-[#F5EFE6] md:text-7xl">
      Embedded Systems.
    </h2>

    <div className="mt-8 h-px w-full bg-[#625B55]" />

<div className="mt-12 grid items-center gap-10 md:grid-cols-2">
  

<a
  href="/projects/esp32-mp3"
  className="block overflow-hidden rounded-lg"
  aria-label="Explore ESP32 Portable Music Player project"
>
  <img
    src="/esp32-music-player.jpg"
    alt="ESP32 portable music player prototype with OLED display"
    className="h-[300px] w-full object-cover object-center scale-[1.8] translate-y-[35px]"
  />
</a>



  <div>
    <p className="mb-4 text-xs uppercase tracking-[0.25em] text-[#C4B8AA]">
      01 / Microcontrollers + Electronics
    </p>

    <h3 className="font-serif text-4xl text-[#F5EFE6]">
      ESP32 Portable Music Player
    </h3>

    <p className="mt-6 leading-8 text-[#D8CFC2]">
      An in-progress portable music player built around
      the ESP32 microcontroller. The project explores
      audio playback, hardware integration, and
      programming a custom device from scratch.
    </p>

    <p className="mt-6 text-sm text-[#C4B8AA]">
      ESP32 · C++ · Arduino IDE · Electronics
    </p>
  </div>
</div>

  </div>
</section>

<section
  id="resume"
  className="bg-[#EDE5D8] px-8 py-24 md:px-20"
>
  <div className="mx-auto max-w-6xl">
    <p className="mb-5 text-xs uppercase tracking-[0.3em] text-[#625B55]">
      EXPERIENCE & QUALIFICATIONS
    </p>

    <h2 className="font-serif text-5xl text-[#242424] md:text-7xl">
      My Resume.
    </h2>

    <div className="mt-8 h-px w-full bg-[#B8ADA0]" />

    <div className="mx-auto mt-12 max-w-4xl overflow-hidden rounded-lg bg-white shadow-xl">
      
<img
  src="/carlie-resume.png"
  alt="Carlie Gonzalez Resume"
  className="block h-auto w-full"
/>

    </div>

<div className="mt-8 text-center">
  <a
    href="/carlie-resume.pdf"
    download="Carlie-Gonzalez-Resume.pdf"
    className="inline-block rounded-md bg-[#242424] px-8 py-4 text-sm uppercase tracking-[0.15em] text-[#F5EFE6] transition-colors hover:bg-[#48413B]"
  >
    Download Resume ↓
  </a>
</div>

  </div>
</section>

<section
  id="contact"
  className="bg-[#242424] px-8 py-24 text-center text-[#F5EFE6]"
>
  <div className="mx-auto max-w-4xl">
    <p className="mb-5 text-xs uppercase tracking-[0.3em] text-[#C4B8AA]">
      LET'S CONNECT
    </p>

    <h2 className="font-serif text-5xl md:text-7xl">
      Get In Touch.
    </h2>

    <p className="mx-auto mt-8 max-w-xl leading-8 text-[#D8CFC2]">
      I'm always interested in opportunities to learn,
      collaborate, and contribute to meaningful projects.
      Feel free to reach out!
    </p>

    <a
      href="mailto:cjgonzalez2022@gmail.com"
      className="mt-10 inline-block rounded-md border border-[#C4B8AA] px-8 py-4 text-sm uppercase tracking-[0.15em] transition-colors hover:bg-[#F5EFE6] hover:text-[#242424]"
    >
      Say Hello ↗
    </a>

<div className="mt-10 flex items-center justify-center gap-8">
  <a
    href="https://github.com/carliejlynne"
    target="_blank"
    rel="noopener noreferrer"
    className="text-sm text-[#D8CFC2] transition-colors hover:text-white"
  >
    GitHub ↗
  </a>

  <a
    href="https://www.linkedin.com/in/carlie-gonzalez/"
    target="_blank"
    rel="noopener noreferrer"
    className="text-sm text-[#D8CFC2] transition-colors hover:text-white"
  >
    LinkedIn ↗
  </a>
</div>

  </div>
</section>

<footer className="bg-[#242424] px-8 pb-8 md:px-20">
  <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 border-t border-[#625B55] pt-8 md:flex-row">
    <p className="font-serif text-xl text-[#F5EFE6]">
      Carlie Gonzalez
    </p>

    <p className="text-xs text-[#C4B8AA]">
      © 2026 Carlie Gonzalez. All rights reserved.
    </p>
  </div>
</footer>

    </main>
  );
}
