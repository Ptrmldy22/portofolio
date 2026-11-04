import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram, FaDownload, FaEnvelope, FaGooglePlay } from "react-icons/fa";
import { profile, skills, otherTools, projects, experience } from "./data/content";

const nav = ["Home", "About", "Skills", "Projects", "Experience", "Contact"];
const card = "rounded-3xl bg-white shadow-[0_8px_30px_rgba(244,114,182,0.12)]";
const btnPrimary =
  "inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-6 py-3 text-sm font-semibold text-white transition hover:brightness-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-dark";
const btnOutline =
  "inline-flex items-center gap-2 rounded-full border-2 border-primary px-6 py-3 text-sm font-semibold text-primary-dark transition hover:bg-soft focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-dark";

function Heading({ title, sub }) {
  return (
    <div className="mb-10 text-center">
      <h2 className="text-3xl font-bold md:text-4xl">{title}</h2>
      {sub && <p className="mt-2 text-muted">{sub}</p>}
    </div>
  );
}

function Typing({ words }) {
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [del, setDel] = useState(false);
  useEffect(() => {
    const word = words[i % words.length];
    const t = setTimeout(
      () => {
        if (!del) {
          setText(word.slice(0, text.length + 1));
          if (text.length + 1 === word.length) setTimeout(() => setDel(true), 1200);
        } else {
          setText(word.slice(0, text.length - 1));
          if (text.length - 1 === 0) { setDel(false); setI(i + 1); }
        }
      },
      del ? 40 : 90
    );
    return () => clearTimeout(t);
  }, [text, del, i, words]);
  return <span className="text-primary-dark">{text}<span className="animate-pulse">|</span></span>;
}

function Navbar() {
  return (
    <header className="fixed inset-x-0 top-4 z-50 px-4">
      <nav className="mx-auto flex max-w-4xl items-center justify-between rounded-full bg-white/80 px-5 py-3 shadow-[0_8px_30px_rgba(244,114,182,0.15)] backdrop-blur">
        <a href="#home" className="font-bold">Putri<span className="text-primary-dark">.</span></a>
        <ul className="hidden gap-6 text-sm font-medium text-muted md:flex">
          {nav.map((n) => (
            <li key={n}><a className="transition hover:text-primary-dark" href={`#${n.toLowerCase()}`}>{n}</a></li>
          ))}
        </ul>
        <a href="#contact" className={btnPrimary + " !px-4 !py-2"}>Hire me</a>
      </nav>
    </header>
  );
}

function Hero() {
  const icons = [
    [FaGithub, profile.socials.github, "GitHub"],
    [FaLinkedin, profile.socials.linkedin, "LinkedIn"],
    [FaInstagram, profile.socials.instagram, "Instagram"],
  ];
  return (
    <section id="home" className="mx-auto grid min-h-screen max-w-6xl items-center gap-10 px-6 pt-28 pb-16 md:grid-cols-2">
      <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <div className="mb-6 flex gap-3">
          {icons.map(([Icon, href, label]) => (
            <a key={label} href={href} aria-label={label} target="_blank" rel="noreferrer"
              className="grid h-10 w-10 place-items-center rounded-xl bg-soft text-primary-dark transition hover:bg-primary hover:text-white">
              <Icon />
            </a>
          ))}
        </div>
        <h1 className="text-4xl font-extrabold leading-tight md:text-5xl">Hi, I'm {profile.name}</h1>
        <p className="mt-3 text-xl font-semibold"><Typing words={profile.roles} /></p>
        <p className="mt-5 max-w-lg text-muted">{profile.intro}</p>
        <div className="mt-8 flex flex-wrap gap-4">
          <a href={profile.cvUrl} download className={btnPrimary}><FaDownload /> Download CV</a>
          <a href="#contact" className={btnOutline}><FaEnvelope /> Contact me</a>
        </div>
      </motion.div>
      {/* Foto tanpa kotak pink. File: public/avatar.png (PNG transparan) */}
      <div className="mx-auto w-full max-w-md">
        <img
          src="/avatar.png"
          alt="Putri Maulidya"
          className="block h-auto w-full object-contain"
          style={{
            WebkitMaskImage: "linear-gradient(to bottom, black 80%, transparent 100%)",
            maskImage: "linear-gradient(to bottom, black 80%, transparent 100%)",
          }}
        />
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="mx-auto max-w-3xl px-6 py-20">
      <Heading title="About me" />
      <div className={`${card} p-8`}>
        <p className="leading-relaxed text-muted">{profile.about}</p>
      </div>
    </section>
  );
}

const levelWidth = { Advanced: "90%", Intermediate: "65%", Learning: "35%" };

function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-5xl px-6 py-20">
      <Heading title="Skills" sub="Tools and technologies I work with" />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {skills.map((s) => (
          <div key={s.name} className={`${card} p-5`}>
            <p className="font-semibold">{s.name}</p>
            <p className="text-xs text-muted">{s.category}</p>
            <div className="mt-4 h-2 overflow-hidden rounded-full bg-soft">
              <motion.div className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
                initial={{ width: 0 }} whileInView={{ width: levelWidth[s.level] }} viewport={{ once: true }} transition={{ duration: 0.9 }} />
            </div>
            <p className="mt-2 text-xs font-medium text-primary-dark">{s.level}</p>
          </div>
        ))}
      </div>
      <p className="mt-8 text-center text-sm text-muted">Also: {otherTools.join(", ")}</p>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-5xl px-6 py-20">
      <Heading title="Projects" sub="A showcase of my recent work" />
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p) => (
          <article key={p.title} className={`${card} overflow-hidden`}>
            <div className="mx-auto w-full max-w-md">
              <img src={p.image} alt={p.title} className="block h-auto w-full object-contain" />
            </div>
            <div className="p-6">
              <h3 className="text-lg font-bold">{p.title}</h3>
              <p className="mt-2 whitespace-pre-line text-sm text-muted">{p.description}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {(p.tech || []).map((t) => <span key={t} className="rounded-full bg-soft px-3 py-1 text-xs font-medium text-primary-dark">{t}</span>)}
              </div>
              <div className="mt-5 flex gap-3">
                {p.playstore && (
                  <a href={p.playstore} target="_blank" rel="noreferrer" className={btnPrimary + " !px-4 !py-2"}>
                    <FaGooglePlay /> Play Store
                  </a>
                )}
                {p.github && p.github !== "#" && (
                  <a href={p.github} target="_blank" rel="noreferrer" className={btnOutline + " !px-4 !py-2"}>
                    <FaGithub /> GitHub
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-3xl px-6 py-20">
      <Heading title="Experience" sub="Organizations I've been part of" />
      <ol className="space-y-6 border-l-2 border-primary/40 pl-6">
        {experience.map((e) => (
          <li key={e.role} className="relative">
            <span className="absolute -left-[33px] top-1.5 h-3 w-3 rounded-full bg-primary" />
            <p className="font-bold">{e.role}</p>
            <p className="text-sm text-primary-dark">{e.org}{e.year && ` · ${e.year}`}</p>
            {e.detail && <p className="mt-1 text-sm text-muted">{e.detail}</p>}
          </li>
        ))}
      </ol>
    </section>
  );
}

function Contact() {
  const [status, setStatus] = useState("");
  async function onSubmit(e) {
    e.preventDefault();
    setStatus("Sending...");
    const data = new FormData(e.target);
    data.append("access_key", profile.web3formsKey);
    try {
      const res = await fetch("https://api.web3forms.com/submit", { method: "POST", body: data });
      const json = await res.json();
      if (json.success) { setStatus("Message sent. Thank you!"); e.target.reset(); }
      else setStatus("Couldn't send the message. Please email me directly.");
    } catch {
      setStatus("Couldn't send the message. Please email me directly.");
    }
  }
  const field = "w-full rounded-xl bg-soft px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-primary";
  return (
    <section id="contact" className="mx-auto max-w-3xl px-6 py-20">
      <Heading title="Get in touch" sub="Let's talk about your next project or opportunity" />
      <form onSubmit={onSubmit} className={`${card} space-y-4 p-8`}>
        <div className="grid gap-4 sm:grid-cols-2">
          <input className={field} name="name" placeholder="Your name" required />
          <input className={field} type="email" name="email" placeholder="Email address" required />
        </div>
        <textarea className={field} name="message" rows="5" placeholder="Your message" required />
        <button className={btnPrimary + " w-full justify-center"} type="submit">Send message</button>
        {status && <p role="status" className="text-center text-sm text-muted">{status}</p>}
      </form>
      <p className="mt-6 text-center text-sm text-muted">{profile.email} · {profile.location}</p>
    </section>
  );
}

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <footer className="border-t border-soft py-8 text-center text-sm text-muted">
        © {new Date().getFullYear()} {profile.name} · UI/UX Designer & Front-End Developer
      </footer>
    </>
  );
}
