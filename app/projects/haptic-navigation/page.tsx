
export default function HapticNavigationPage() {
  const components = [
    "STM32 Nucleo-F401RE Microcontroller",
    "6 HC-SR04 Ultrasonic Sensors",
    "2 Titan Drake LF Tac Hammer Actuators",
    "2 DRV2605L Haptic Drivers",
    "PCA9548 I2C Multiplexer",
    "10kΩ Potentiometer",
    "Battery and Power Circuitry",
  ];

  const features = [
    {
      title: "Three-Direction Detection",
      description:
        "Designing an obstacle detection system that monitors the left, center, and right directions using six ultrasonic sensors.",
    },
    {
      title: "Haptic Feedback",
      description:
        "Planning distinct vibration patterns to communicate obstacle direction and proximity without relying on visual or audio instructions.",
    },
    {
      title: "Microcontroller Integration",
      description:
        "Using the STM32 Nucleo-F401RE to process sensor measurements and control feedback through embedded C/C++.",
    },
    {
      title: "Adjustable Sensitivity",
      description:
        "Incorporating a potentiometer to allow adjustments to the obstacle detection threshold.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#EDE5D8] text-[#242424]">
      <nav className="flex items-center justify-between px-8 py-8 md:px-20">
        <a href="/" className="font-serif text-2xl">
          Carlie Gonzalez
        </a>

        <a
          href="/#embedded"
          className="text-xs uppercase tracking-[0.2em] hover:opacity-60"
        >
          ← Back to Projects
        </a>
      </nav>

      <section className="px-8 pb-20 pt-20 md:px-20">
        <div className="mx-auto max-w-5xl">
          <p className="mb-6 text-xs uppercase tracking-[0.3em] text-[#625B55]">
            Embedded Systems / Team Project / In Progress
          </p>

          <h1 className="max-w-4xl font-serif text-5xl leading-tight md:text-7xl">
            Head-Mounted Haptic Navigation Device.
          </h1>

          <p className="mt-8 max-w-3xl text-xl leading-9 text-[#48413B]">
            A wearable assistive technology project exploring
            how ultrasonic sensors and haptic feedback can
            provide directional obstacle awareness for
            visually impaired individuals.
          </p>

          <div className="mt-12 h-px bg-[#B8ADA0]" />

          <div className="mt-10 flex flex-wrap gap-3">
            {[
              "STM32",
              "Embedded C/C++",
              "Ultrasonic Sensors",
              "I2C",
              "Haptic Feedback",
            ].map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-[#B8ADA0] px-4 py-2 text-xs text-[#48413B]"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#242424] px-8 py-20 text-[#F5EFE6] md:px-20">
        <div className="mx-auto max-w-5xl">
          <p className="mb-5 text-xs uppercase tracking-[0.3em] text-[#C4B8AA]">
            01 / THE IDEA
          </p>

          <h2 className="font-serif text-4xl md:text-5xl">
            Project Overview.
          </h2>

          <p className="mt-8 max-w-3xl leading-9 text-[#D8CFC2]">
            I'm working with a team to develop a head-mounted
            navigation device designed to help visually impaired
            individuals detect nearby obstacles. Our goal is to
            expand an existing single-direction design into a
            system capable of detecting obstacles from the left,
            center, and right.
          </p>

          <p className="mt-6 max-w-3xl leading-9 text-[#D8CFC2]">
            The proposed system uses six ultrasonic sensors
            connected to an STM32 Nucleo-F401RE microcontroller.
            Sensor measurements will be processed to determine
            obstacle direction and proximity, with two haptic
            actuators providing vibration-based alerts.
          </p>
        </div>
      </section>

      <section className="px-8 py-24 md:px-20">
        <div className="mx-auto max-w-5xl">
          <p className="mb-5 text-xs uppercase tracking-[0.3em] text-[#625B55]">
            02 / SYSTEM DESIGN
          </p>

          <h2 className="font-serif text-4xl md:text-5xl">
            Features & Development.
          </h2>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="border-t border-[#B8ADA0] pt-6"
              >
                <h3 className="font-serif text-2xl">
                  {feature.title}
                </h3>

                <p className="mt-4 leading-8 text-[#48413B]">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#E4D9CB] px-8 py-24 md:px-20">
        <div className="mx-auto max-w-5xl">
          <p className="mb-5 text-xs uppercase tracking-[0.3em] text-[#625B55]">
            03 / HARDWARE
          </p>

          <h2 className="font-serif text-4xl md:text-5xl">
            Components & Technology.
          </h2>

          <p className="mt-6 max-w-3xl leading-8 text-[#48413B]">
            Our planned prototype combines distance sensing,
            microcontroller processing, and tactile feedback.
            The following components are part of our
            proposed hardware design.
          </p>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {components.map((component) => (
              <div
                key={component}
                className="border-b border-[#B8ADA0] py-4 text-[#48413B]"
              >
                {component}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-8 py-24 md:px-20">
        <div className="mx-auto max-w-5xl">
          <p className="mb-5 text-xs uppercase tracking-[0.3em] text-[#625B55]">
            04 / DEVELOPMENT PROCESS
          </p>

          <h2 className="font-serif text-4xl md:text-5xl">
            What's Next.
          </h2>

          <p className="mt-8 max-w-3xl leading-9 text-[#48413B]">
            Our next steps include testing the ultrasonic
            sensors, integrating the haptic drivers, developing
            directional vibration patterns, and assembling
            the wearable prototype. We plan to evaluate the
            system using obstacles positioned at different
            distances and directions in a controlled environment.
          </p>

          <div className="mt-12 border-t border-[#B8ADA0] pt-8">
            <p className="text-sm italic text-[#625B55]">
              This project is currently in development as part
              of a team-based embedded systems course.
            </p>
          </div>
        </div>
      </section>

      <footer className="bg-[#242424] px-8 py-10 text-center text-[#C4B8AA]">
        <a
          href="/#embedded"
          className="text-sm uppercase tracking-widest hover:text-white"
        >
          ← Back to Embedded Systems
        </a>
      </footer>
    </main>
  );
}
