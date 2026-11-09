
export default function SmartBakingAssistantPage() {
  return (
    <main className="min-h-screen bg-[#EDE5D8] px-8 py-20 md:px-20">
      <a
        href="/#projects"
        className="text-sm text-[#625B55] hover:underline"
      >
        ← Back to Projects
      </a>

      <h1 className="mt-12 font-serif text-5xl text-[#242424] md:text-7xl">
        Smart Baking Assistant
      </h1>

      <p className="mt-6 max-w-3xl text-lg leading-8 text-[#48413B]">
        An interactive recipe application developed as part of a
        team capstone project, combining a user-friendly recipe
        website with a smart food scale.
      </p>
<div className="mt-12 overflow-hidden rounded-xl">
  <img
    src="/smart-baking-recipes.jpg"
    alt="Smart Baking Assistant recipe website"
    className="h-auto w-full rounded-xl"
  />
</div>
      <section className="mt-16">
        <h2 className="font-serif text-4xl text-[#242424]">
          Project Overview
        </h2>

       
<div className="mt-6 max-w-3xl space-y-6 leading-8 text-[#625B55]">
  <p>
    For this project, I am working with a team to develop a
    Smart Baking Assistant, an interactive cooking application
    that connects to a digital food scale to help users follow
    recipes and measure ingredients more accurately.
  </p>

  <p>
    Our goal is to create a cooking experience that goes beyond
    a traditional kitchen scale. Instead of simply displaying
    ingredient weights, the application is designed to guide
    users through recipes, provide real-time measurement feedback,
    and help them determine when they have added the correct
    amount of an ingredient.
  </p>

  <p>
    My main focus has been developing the recipe website and
    frontend interface. I worked on creating a recipe library
    where users can browse and search for recipes, filter recipes
    based on their preferences, and view ingredients and
    step-by-step instructions.
  </p>

  <p>
    I developed the interface using React, JavaScript, and CSS,
    focusing on creating a clean, organized layout that makes
    recipes easy to explore and follow. Throughout development,
    I worked on building reusable components, improving the
    website design, and troubleshooting frontend functionality.
  </p>

  <p>
    This project has helped me strengthen my frontend development
    skills while gaining experience collaborating with a team
    on an application that combines software development with
    embedded hardware.
  </p>
</div>

      </section>

<section className="mt-20">
  <h2 className="font-serif text-4xl text-[#242424]">
    Features & Development
  </h2>

  <div className="mt-8 grid gap-12 md:grid-cols-2">
    <div>
      <h3 className="font-serif text-2xl text-[#242424]">
        Recipe Website
      </h3>

      <ul className="mt-5 list-disc space-y-3 pl-5 leading-7 text-[#625B55]">
        <li>Recipe browsing and search functionality</li>
        <li>Recipe categories and filtering options</li>
        <li>Individual recipe pages with ingredients and instructions</li>
        <li>Clean, user-friendly frontend interface</li>
      </ul>
    </div>

    <div>
      <h3 className="font-serif text-2xl text-[#242424]">
        Planned Smart Assistant Features
      </h3>

      <ul className="mt-5 list-disc space-y-3 pl-5 leading-7 text-[#625B55]">
        <li>Smart food scale integration</li>
        <li>Real-time ingredient weight feedback</li>
        <li>Step-by-step cooking guidance</li>
        <li>Adjustable serving and batch sizes</li>
        <li>Recipe recommendations based on available ingredients</li>
        <li>Text-to-speech instructions</li>
      </ul>
    </div>
  </div>
</section>

    </main>
  );
}
