
import Link from "next/link";

export default function ESP32Project() {
  return (
    <main className="min-h-screen bg-[#EDE5D8] text-[#242424]">
      <div className="mx-auto max-w-5xl px-6 py-12 md:px-12">
        <Link
          href="/#embedded"
          className="text-sm hover:underline"
        >
          ← Back to Portfolio
        </Link>

        <div className="mt-16">
          <p className="text-xs uppercase tracking-[0.3em]">
            Embedded Systems / In Progress
          </p>

          <h1 className="mt-5 font-serif text-5xl md:text-7xl">
            ESP32 Portable Music Player
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#625A52]">
            A portable music player built around the ESP32
            microcontroller, exploring audio playback,
            hardware integration, and embedded programming.
          </p>
        </div>

        <div className="mt-12 overflow-hidden rounded-xl">
          <img
            src="/esp32-music-player.jpg"
            alt="ESP32 music player prototype"
            className="h-[400px] w-full object-cover object-center"
          />
        </div>

        <section className="mt-20">
          <h2 className="font-serif text-4xl">
            Project Overview
          </h2>
          <div className="mt-6 max-w-3xl leading-8 text-[#625A52]">
            
<div className="mt-6 max-w-3xl space-y-6 leading-8 text-[#625A52]">
  <p>
    For this project, I designed and built a portable MP3 player
    using an ESP32 microcontroller. My goal was to create a
    simple music player that could play audio from a microSD
    card while allowing users to control playback using
    physical buttons.
  </p>

  <p>
    I used a DFPlayer Mini module to handle audio playback,
    an OLED display to show the current song and playback
    status, and three pushbuttons to play/pause, skip to the
    next song, or return to the previous song. I programmed
    the ESP32 using Arduino IDE and C++, integrating the
    different components to work together.
  </p>

  <p>
    Throughout this project, I gained hands-on experience
    with circuit wiring, serial communication, GPIO inputs,
    and troubleshooting hardware and software issues. One
    of the biggest challenges was getting the pushbuttons
    to respond correctly, which helped me better understand
    how pull-up resistors and button connections work.
  </p>

  <p>
    This project allowed me to strengthen my embedded
    systems programming skills while building something
    functional and interactive.
  </p>
</div>
</div>
 </section>

        
<section className="mt-20">
  <h2 className="font-serif text-4xl">
    Development Gallery
  </h2>

  <p className="mt-4 text-[#625A52]">
    A behind-the-scenes look at building and testing
    my ESP32 music player.
  </p>

  <div className="mt-8 grid gap-6 md:grid-cols-2">
    <div>
      <img
        src="/esp32-soldering.jpg"
        alt="Soldering components for the ESP32 music player"
        className="h-[350px] w-full rounded-lg object-cover"
      />
      <p className="mt-3 text-sm text-[#625A52]">
        Hardware assembly and soldering
      </p>
    </div>

    <div>
      <img
        src="/esp32-workbench.jpg"
        alt="ESP32 music player electronics testing setup"
        className="h-[350px] w-full rounded-lg object-cover"
      />
      <p className="mt-3 text-sm text-[#625A52]">
        Circuit prototyping and testing
      </p>
    </div>
  </div>
</section>

      </div>
    </main>
  );
}
