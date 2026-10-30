export default function App() {
  const projects = [
    {
      id: 1,
      name: "Personal Portfolio",
      description:
        "This website built on React with Tailwind CSS using responsive design. The page has a introduction to me with my contact info and descriptions of each project. All sections are properly defined and properly spaced. This project is designed to show off my projects for professional reference. I have designed this portfolio as an individual.",
    },
    {
      id: 2,
      name: "Commmunity Event Page",
      description:
        "A page showing community events built with React, Typescript, and Tailwind CSS using responsive design and strictly typed code. The event page is well designed with all pertinent information. This project is designed to promote the event. I have designed this event page as an individual ",
    },
  ]
  return (
    <main className="min-h-screen mx-auto w-full max-w-5xl px-4 py-6 sm:px-6 lg:px-8">
      <nav className="flex flex-row flex-wrap">
        <a href="#contact" className="m-2">
          Contact
        </a>
        <a href="#work" className="m-2">
          Work
        </a>
      </nav>
      <section>
        <div className="p-1 m-1 py-3">
          <h1 className="py-2 text-2xl">Adam Hartman</h1>
          <p className="py-2 text-sm max-w-200 min-w-0">
            I am a junior developer with knowledge in HTML, CSS, JavaScript and
            React. I am focused on building full stack apps along with SPAs. I have a passion for coding and learning new technologies. I'm a strong self starter and have self-taught myself my skills through different online platforms.
          </p>
        </div>
        <section>
          <div id="contact" className="p-1 m-1">
            <h2 className="py-3 text-xl">Contact Info</h2>
              <div className="text-sm border border-gray-500 rounded-md p-4 max-w-200">
                <p> Phone: <a href='tel:+14788675309' className='text-blue-400'>(478) 867-5309 </a></p>
                <p> Email: <a href='mailto:foo@bar.com' className='text-blue-400 break-words'>foo@bar.com</a></p>
                <p>Github: <a href='https://www.github.com/adamhartman5' className='text-blue-400'>My GitHub</a></p>
              </div>
          </div>
        </section>
        <section>
          <div id="work" className="p-1 m-1">
            <h2 className="mt-2 text-xl">Work</h2>
            {projects.map((project) => (
              <article
                key={project.id}
                className="my-3 border border-gray-500 rounded-md p-4 max-w-200 flex flex-col"
              >
                <h3 className="py-2 text-lg min-w-0">{project.name}</h3>
                <p className="py-2 text-md max-w-200 min-w-0">{project.description}</p>
              </article>
            ))}
          </div>
        </section> 
      </section>
    </main>
  )
}
