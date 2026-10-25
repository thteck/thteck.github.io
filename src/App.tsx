import { useState } from "react";
import {
  ArrowUpRight,
  GitBranch,
  Menu,
  X,
  Code2,
  GraduationCap,
  BriefcaseBusiness,
} from "lucide-react";

import {
  profile,
  projects,
  skills,
  experience,
  education,
} from "./data/portfolio";

const navigation = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

function SectionHeading({
  number,
  title,
  subtitle,
}: {
  number: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mb-10">
      <p className="mb-3 font-mono text-sm text-sky-400">
        {number} / SECTION
      </p>
      <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 max-w-2xl text-slate-400">{subtitle}</p>
      )}
    </div>
  );
}

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#080d19]/90 backdrop-blur-xl">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5"
      >
        <a
          href="#home"
          className="text-xl font-bold tracking-tight text-white"
        >
          TH<span className="text-sky-400">.</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-slate-400 transition hover:text-sky-400"
            >
              {item.label}
            </a>
          ))}
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen(!open)}
          className="text-white md:hidden"
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {open && (
        <div
          id="mobile-navigation"
          className="space-y-4 border-t border-white/10 px-6 py-5 md:hidden"
        >
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block text-slate-300"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}


function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[85vh] items-center overflow-hidden"
    >
      {/* Background grid */}
      <div className="grid-background absolute inset-0" />

      {/* Background glow */}
      <div className="pointer-events-none absolute right-0 top-10 h-96 w-96 rounded-full bg-sky-500/10 blur-3xl" />

      <div className="relative mx-auto w-full max-w-6xl px-6 py-24">

        {/* Two-column layout */}
        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* LEFT: Introduction */}
          <div>
            <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-sky-400/20 bg-sky-400/5 px-4 py-2 text-sm text-sky-300">
              <span className="h-2 w-2 rounded-full bg-sky-400" />
              AI · Machine Learning · Software Engineering
            </div>

            <p className="mb-4 font-mono text-sky-400">
              Hello, I'm
            </p>

            <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl">
              {profile.name}
              <span className="text-sky-400">.</span>
            </h1>

            <h2 className="mt-6 text-2xl font-semibold leading-snug text-slate-300 lg:text-3xl">
              Building intelligent systems that solve real-world problems.
            </h2>

            <p className="mt-7 text-lg leading-8 text-slate-400">
              {profile.description}
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-xl bg-sky-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-sky-300"
              >
                Explore Projects <ArrowUpRight size={18} />
              </a>

              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-6 py-3 font-semibold text-white transition hover:border-sky-400"
              >
                <GitBranch size={18} /> GitHub Profile
              </a>
            </div>
          </div>

          {/* RIGHT: Profile photo */}
          <div className="relative flex justify-center lg:justify-end">

            {/* Decorative glow */}
            <div className="absolute inset-0 m-auto h-72 w-72 rounded-full bg-sky-500/20 blur-3xl sm:h-96 sm:w-96" />

            {/* Portrait */}
            <div className="relative h-72 w-72 overflow-hidden rounded-full border-4 border-sky-400/40 bg-[#111a2b] p-2 shadow-[0_0_80px_rgba(56,189,248,0.15)] sm:h-96 sm:w-96">

              <img
                src="/profile.jpg"
                alt="Portrait of Tey Hao Teck"
                className="h-full w-full rounded-full object-cover object-center"
                width="384"
                height="384"
                fetchPriority="high"
              />

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}


function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-20">
      <SectionHeading
        number="01"
        title="About Me"
        subtitle="Combining artificial intelligence, engineering, and practical problem-solving."
      />

      <div className="glass-card max-w-4xl p-8">
        <p className="text-lg leading-9 text-slate-300">
          I'm a Computer Science graduate with First Class
          Honours from the University of London, currently
          pursuing a Master of Technology in AI Systems at
          NUS-ISS.
        </p>
        <p className="mt-5 leading-8 text-slate-400">
          My interests span machine learning, computer vision,
          intelligent decision systems, financial technology,
          and software engineering. Professionally, I work
          with enterprise applications, automation, cloud
          systems, and IT infrastructure.
        </p>
      </div>
    </section>
  );
}


function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-20">
      <SectionHeading
        number="02"
        title="Selected Projects"
        subtitle="A selection of research, engineering, and AI projects."
      />

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, index) => (
          <article
            key={project.title}
            className="glass-card flex flex-col p-7"
          >
            <div className="mb-8 flex items-start justify-between">
              <div className="rounded-xl bg-sky-400/10 p-3 text-sky-400">
                <Code2 size={25} />
              </div>

              <span className="font-mono text-xs text-slate-500">
                PROJECT {String(index + 1).padStart(2, "0")}
              </span>
            </div>

            <p className="text-sm text-sky-400">
              {project.category}
            </p>

            <h3 className="mt-3 text-2xl font-semibold text-white">
              {project.title}
            </h3>

            <p className="mt-4 flex-1 leading-7 text-slate-400">
              {project.description}
            </p>

            <div className="mt-7 flex flex-wrap gap-2">
              {project.technologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded-lg border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300"
                >
                  {technology}
                </span>
              ))}
            </div>

            {/* Project links */}
            <div className="mt-7 flex flex-wrap items-center gap-5">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-medium text-sky-400 hover:text-sky-300"
                >
                  View Source Code
                  <ArrowUpRight size={17} />
                </a>
              )}

              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-sky-400 px-4 py-2 font-semibold text-slate-950 transition hover:bg-sky-300"
                >
                  Live Demo
                  <ArrowUpRight size={17} />
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-6 py-20">
      <SectionHeading number="03" title="Experience & Education" />

      <div className="grid gap-6 md:grid-cols-2">
        <div className="glass-card p-7">
          <h3 className="mb-7 flex items-center gap-3 text-xl font-semibold text-white">
            <BriefcaseBusiness className="text-sky-400" />
            Work Experience
          </h3>
          {experience.map((item) => (
            <div key={item.role} className="border-l-2 border-sky-400/30 pl-5">
              <p className="font-mono text-sm text-sky-400">{item.period}</p>
              <h4 className="mt-2 text-lg font-semibold text-white">
                {item.role}
              </h4>
              <p className="mt-1 text-slate-300">{item.organization}</p>
              <p className="mt-4 leading-7 text-slate-400">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="glass-card p-7">
          <h3 className="mb-7 flex items-center gap-3 text-xl font-semibold text-white">
            <GraduationCap className="text-sky-400" />
            Education
          </h3>
          <div className="space-y-7">
            {education.map((item) => (
              <div
                key={item.degree}
                className="border-l-2 border-indigo-400/30 pl-5"
              >
                <p className="font-mono text-sm text-sky-400">
                  {item.period}
                </p>
                <h4 className="mt-2 font-semibold text-white">
                  {item.degree}
                </h4>
                <p className="mt-2 text-sm text-slate-400">
                  {item.institution}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-20">
      <SectionHeading number="04" title="Technical Expertise" />

      <div className="grid gap-5 sm:grid-cols-2">
        {Object.entries(skills).map(([category, items]) => (
          <div key={category} className="glass-card p-7">
            <h3 className="mb-5 text-lg font-semibold text-white">
              {category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {items.map((item) => (
                <span
                  key={item}
                  className="rounded-lg bg-white/5 px-3 py-2 text-sm text-slate-300"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-24">
      <div className="glass-card p-9 text-center md:p-16">
        <p className="font-mono text-sm text-sky-400">
          05 / GET IN TOUCH
        </p>

        <h2 className="mt-5 text-3xl font-bold text-white md:text-5xl">
          Let's connect.
        </h2>

        <p className="mx-auto mt-5 max-w-xl leading-8 text-slate-400">
          Interested in artificial intelligence, machine learning,
          software engineering, or discussing technical projects?
          Feel free to connect with me on LinkedIn.
        </p>

        <a
          href={profile.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-2 rounded-xl bg-sky-400 px-7 py-3 font-semibold text-slate-950 hover:bg-sky-300"
        >
          Connect on LinkedIn <ArrowUpRight size={18} />
        </a>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Skills />
        <Contact />
      </main>
      <footer className="border-t border-white/10 py-8 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} {profile.name}.
        Built with React, TypeScript & Tailwind CSS.
      </footer>
    </>
  );
}