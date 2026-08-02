import React, { useState } from 'react';
import {
  Mail,
  Linkedin,
  Github, 
  Award,
  GraduationCap,
  Briefcase,
  Code2,
  FolderKanban,
  Star,
  Phone,
  MapPin,
  UserRound,
  Instagram,
  Send,
  ExternalLink,
} from 'lucide-react';

const navItems = ['About', 'Skills', 'Projects', 'Experience', 'Education', 'Certifications', 'Achievements', 'Contact'];

const skillGroups = [
  { category: 'Data', label: 'Data Structures & Algorithms' },
  { category: 'Other', label: 'Object-Oriented Design' },
  { category: 'Data', label: 'DBMS' },
  { category: 'Other', label: 'Operating System (Basics)' },
  { category: 'AI/ML', label: 'AI/ML: Machine Learning, RAG, LangChain' },
  { category: 'Languages', label: 'Languages: Python, Java, JavaScript, C, SQL' },
  { category: 'DevOps', label: 'Developer Tools: VS Code, GitHub, Jupyter Notebook, MongoDB, Postman' },
  { category: 'Frameworks', label: 'Frameworks/Libraries: NumPy, Pandas, Matplotlib, scikit-learn' },
  { category: 'Frameworks', label: 'Web Technologies: HTML, CSS, React, Tailwind CSS' },
  { category: 'Frameworks', label: 'Backend: Node.js, Express.js, REST APIs' },
  { category: 'AI/ML', label: 'AI Tools: OpenCV, Google Speech Recognition, SMTP, Twilio' },
];

const certifications = [
  'Foundations of Prompt Engineering -  AWS -- November 2025',
  'Generative AI Certification - Simplilearn -- January 2026',
  'Problem Solving (Basic) Certification - HackerRank -- April 2025',
];

const events = [
  'Participant - NASSCOM AI Code Sarathi AI-Assisted Coding Workshop',
  'Participant - Google Agentic AI Day (Hack2Skill)',
  'Participant - Avinya 2k25 National Level Hackathon',
];

const filterPills = ['All', 'Languages', 'AI/ML', 'Data', 'Frameworks', 'DevOps', 'Other'];

export default function Resume() {
  const [activeFilter, setActiveFilter] = useState('All');
  const visibleSkills = activeFilter === 'All'
    ? skillGroups
    : skillGroups.filter((skill) => skill.category === activeFilter);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [formErrors, setFormErrors] = useState({});
  const [formSent, setFormSent] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const errors = {};
    if (!formData.name.trim()) errors.name = 'Name is required';
    if (!/^\S+@\S+\.\S+$/.test(formData.email)) errors.email = 'Valid email required';
    if (!formData.subject.trim()) errors.subject = 'Subject is required';
    if (formData.message.trim().length < 20) errors.message = 'Message must be at least 20 characters';
    setFormErrors(errors);
    setFormSent(Object.keys(errors).length === 0);
  };

  return (
    <div className="min-h-screen bg-[#f7f7fb] text-[#1a1a2e]">
      <header className="sticky top-0 z-50 border-b border-violet-100 bg-white/90 backdrop-blur-xl">
        <div className="mx-auto grid max-w-7xl grid-cols-[1fr_auto_1fr] items-center px-6 py-4 lg:px-10">
          <div aria-hidden="true" />
          <nav className="hidden gap-1 md:flex">
            {navItems.map((item, idx) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`interactive-button rounded-full border px-4 py-2 text-sm font-semibold transition duration-200 ${ 
                  idx === 0
                    ? 'border-violet-600 bg-violet-600 text-white'
                    : 'border-transparent text-slate-600 hover:border-blue-500/40 hover:text-violet-700'
                }`}
              >
                {item}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main className="resume-main">
        <section className="resume-section resume-hero overflow-hidden rounded-4xl border border-white/10 bg-[linear-gradient(135deg,#111114_0%,#17171d_55%,#0e0f13_100%)] p-6 shadow-[0_20px_80px_rgba(0,0,0,0.45)] md:p-8">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <div>
              <p className="availability-badge mb-5 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-[#ff6a3d]">
                💼 Open to Internships & Exciting Opportunities
              </p>
              <h1 className="hero-name max-w-4xl text-5xl font-black leading-none tracking-[-0.05em] text-white md:text-7xl">
                <span className="block">Preetham</span>
                <span className="hero-name-gradient block">Reddy Paduru</span>
              </h1>
              <p className="mt-6 text-xl font-bold text-[#ff6a3d]"> B.Tech Student · AI/ML · Full-stack Developer · Problem Solver</p>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-white/70">
                Building intelligent systems, competing in hackathons, and crafting practical products that bring AI ideas into the real world.
              </p>
            </div>

            <div className="profile-card mx-auto w-full max-w-sm">
              <div className="relative aspect-5/5 overflow-hidden rounded-[300px] border border-slate-200 bg-slate-100">
                <img
                  src="/Preetham-photo.jpg"
                  alt="Profile placeholder"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="mailto:preethampaduru@gmail.com" className="flex w-fit items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs text-white/80 transition hover:-translate-y-0.5 hover:border-[#ff6a3d]/60">
              <Mail size={16} className="text-violet-600" />
              Gmail
            </a>
            <a href="https://www.linkedin.com/in/preethamreddy17/" target="_blank" rel="noreferrer" className="flex w-fit items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs text-white/80 transition hover:-translate-y-0.5 hover:border-[#ff6a3d]/60">
              <Linkedin size={16} className="text-blue-600" />
              Linkedin
            </a>
            <a href="https://github.com/PreethamPaduru" target="_blank" rel="noreferrer" className="flex w-fit items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs text-white/80 transition hover:-translate-y-0.5 hover:border-[#ff6a3d]/60">
              <Github size={16} className="text-violet-600" />
             Github
            </a>
          </div>
        </section>

        <section id="about" className="resume-section section-apricot section-about scroll-mt-24">
          <div className="mb-12">
            <h2 className="text-4xl font-bold tracking-tight text-white md:text-6xl">About Me</h2>
            <p className="mt-3 text-lg text-white/70">Curiosity turned into useful technology</p>
          </div>

          <div className="grid gap-10 lg:grid-cols-[1fr_0.88fr] lg:items-center">
            <div>
              <div className="max-w-3xl space-y-6 text-lg leading-8 text-white/80">
                <p>
                  I’m an <strong className="text-[#ff6a3d]">AI and Machine Learning undergraduate</strong> with a strong interest in turning ideas into reliable, human-centred products.
                </p>
                <p>
                  My work brings together full-stack development, machine-learning workflows, and automation — from real-time dashboards to LLM-powered applications.
                </p>
                <p>
                  Outside of code, I enjoy hackathons, learning in public, and using technology to create useful impact.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                {['Problem solving', 'Full-stack development', 'AI/ML', 'Teamwork'].map((strength) => (
                  <span key={strength} className="rounded-full border border-[#ff6a3d]/40 px-4 py-2 text-sm font-semibold text-[#ff6a3d]">
                    {strength}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                ['3+', 'Projects built'],
                ['9.4/10', 'CGPA'],
              ].map(([value, label]) => (
                <div key={label} className="rounded-3xl border border-[#ff6a3d]/40 bg-white/5 p-5 text-center md:p-7">
                  <div className="text-4xl font-black tracking-tight text-[#ff6a3d] md:text-5xl">{value}</div>
                  <div className="mt-3 text-xs font-bold uppercase tracking-[0.16em] text-white/70">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="resume-section section-sage mt-8 scroll-mt-24 rounded-4xl p-6 md:p-8">
          <div className="mb-6 flex items-center gap-3">
            <Code2 className="text-[#ff6a3d]" size={26} />
            <h2 className="text-3xl font-black tracking-tight text-white md:text-5xl">Technical Skills</h2>
          </div>
          <p className="mb-6 text-lg text-white/70">Technologies I work with</p>

          <div className="mb-6 flex flex-wrap gap-3">
            {filterPills.map((pill) => (
              <button
                type="button"
                key={pill}
                onClick={() => setActiveFilter(pill)}
                className={`interactive-button rounded-full border px-4 py-2 text-sm font-semibold transition ${ 
                  activeFilter === pill
                    ? 'border-violet-600 bg-violet-600 text-white'
                    : 'border-white/10 text-white/80'
                }`}
              >
                {pill}
              </button>
            ))}
          </div>

            <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/10">
              <div className="h-2 w-[72%] rounded-full bg-linear-to-r from-[#ff6a3d] to-[#ff9b6a]"></div>
            </div>

          <div className="grid gap-3 md:grid-cols-2">
            {visibleSkills.map((skill) => (
              <div key={skill.label} className="skill-card rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/85 transition duration-200 hover:-translate-y-0.5 hover:border-[#ff6a3d]/50 hover:bg-white/10">
                {skill.label}
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="resume-section section-apricot mt-8 scroll-mt-24 rounded-4xl p-6 md:p-8">
          <div className="mb-6 flex items-center gap-3">
            <FolderKanban className="text-[#ff6a3d]" size={26} />
            <h2 className="text-3xl font-black tracking-tight text-white md:text-5xl">Projects</h2>
          </div>

          <div className="space-y-5">
            <article className="rounded-[28px] border border-white/10 bg-[linear-gradient(135deg,#17171d_0%,#1b1c24_100%)] p-5 transition duration-300 hover:-translate-y-1 hover:border-[#ff6a3d]/50">
              <div className="mb-3 flex flex-wrap items-center justify-between gap-3">
                <h3 className="text-2xl font-black text-white">Pharmaceutical Warehouse Management System</h3>
                <span className="rounded-full bg-[#ff6a3d]/15 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-[#ff9b6a]">React · Node.js · Express.js · MongoDB</span>
              </div>
              <div className="mb-3 text-sm text-white/70">
                <a href="https://github.com/PreethamPaduru/Warehouse-Management" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-[#ff9b6a] hover:underline">
                  <Github size={14} /> GitHub
                </a>
                <br />
                  <a href="https://eugia-pharma.vercel.app/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-[#ff9b6a] hover:underline">
                  <ExternalLink size={14} /> Live Demo
                  </a>
              </div>
              <ul className="list-disc space-y-2 pl-5 text-sm leading-6 text-white/80">
                <li>Built a MERN stack web app to streamline pharmaceutical inventory operations with secure Employee ID-based authentication.</li>
                <li>Automated near-expiry medicine tracking and QR-based drug label generation, reducing manual inventory monitoring effort.</li>
                <li>Designed and integrated REST APIs with MongoDB to manage pharmaceutical product records and warehouse inventory.</li>
                <li>Delivered 4 core modules - inventory management, drug label generation, QR code generation, and expiry tracking - in a single unified dashboard.</li>
              </ul>
            </article>

            <article className="rounded-[28px] border border-white/10 bg-[linear-gradient(135deg,#17171d_0%,#1b1c24_100%)] p-5 transition duration-300 hover:-translate-y-1 hover:border-[#ff6a3d]/50">
              <div className="mb-3 flex flex-wrap items-center justify-between gap-3">
                <h3 className="text-2xl font-black text-white">Attendance Query and Alert Agent - AI Automation System</h3>
                <span className="rounded-full bg-[#ff6a3d]/15 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-[#ff9b6a]">Python · Flask · LLMs · OpenCV</span>
              </div>
              <div className="mb-3 text-sm text-white/70">
                <a href="https://github.com/PreethamPaduru/Attendance-Agent" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-[#ff9b6a] hover:underline">
                  <Github size={14} /> GitHub
                </a>
              </div>
              <ul className="list-disc space-y-2 pl-5 text-sm leading-6 text-white/80">
                <li>Automated 90% of repeat attendance queries, reducing manual communication effort between students and faculty by 70%.</li>
                <li>Built a Flask REST API with 6+ endpoints handling attendance marking, stats retrieval, gesture detection, chatbot, and speech-to-text workflows.</li>
                <li>Integrated LLM-based query understanding (Gemma-2-2b-it) achieving 92% response accuracy for real-time automated responses.</li>
                <li>Implemented attendance recognition using OpenCV with contour and convexity defect analysis to detect hand gestures for attendance marking and chat triggers.</li>
                <li>Developed speech-to-text functionality using Google Speech Recognition API to enable voice-based query input for hands-free interaction.</li>
                <li>Built an email notification system via SMTP to route unresolved faculty queries to designated recipients, reducing manual follow-up effort.</li>
              </ul>
            </article>
          </div>
        </section>

        <section id="experience" className="resume-section section-sky mt-8 scroll-mt-24 rounded-4xl p-6 md:p-8">
          <div className="mb-6 flex items-center gap-3">
            <Briefcase className="text-[#ff6a3d]" size={26} />
            <h2 className="text-3xl font-black tracking-tight text-white md:text-5xl">Experience</h2>
          </div>
          <div className="rounded-[28px] border-l-4 border-[#ff6a3d] bg-white/5 p-5">
            <div className="mb-2 flex flex-wrap items-center justify-between gap-3">
              <div>
                <h3 className="text-xl font-black text-white">Cresco Engineers Private Limited</h3>
                <p className="text-white/70">AI & Full Stack Developer Intern</p>
              </div>
              <span className="rounded-full bg-white/5 px-3 py-1 text-sm font-semibold text-white/75">May 2026 - June 2026</span>
            </div>
            <ul className="list-disc space-y-2 pl-5 text-sm leading-6 text-white/80">
              <li>Evaluated AI integration opportunities for industrial SCADA systems using process workflows and available datasets.</li>
              <li>Developed the Pharma Warehouse Management Dashboard with employee authentication, inventory tracking, QR code generation, and analytics.</li>
              <li>Built and deployed an LLM-based application using RAG, LangChain, and Hugging Face.</li>
              <li>Developed an enhanced company website using the MERN stack.</li>
              <li>Gained hands-on experience in CRM deployment, website hosting, domain management, and DNS configuration.</li>
            </ul>
          </div>
        </section>

        <section id="education" className="resume-section section-rose mt-8 scroll-mt-24 rounded-4xl p-6 md:p-8">
          <div className="mb-6 flex items-center gap-3">
            <GraduationCap className="text-[#ff6a3d]" size={26} />
            <h2 className="text-3xl font-black tracking-tight text-white md:text-5xl">Education</h2>
          </div>
          <div className="space-y-4">
            <div className="grid gap-2 rounded-3xl border-l-4 border-[#ff6a3d] bg-white/5 p-4 md:grid-cols-[1fr_auto] md:items-start">
              <div>
                <h3 className="text-lg font-black text-white">Anurag University</h3>
                <p className="text-white/70">B.Tech - Artificial Intelligence & Machine Learning</p>
              </div>
              <div className="text-sm font-semibold text-white/60">2024 - 2028</div>
            </div>
            <div className="grid gap-2 rounded-3xl border-l-4 border-white/20 bg-white/5 p-4 md:grid-cols-[1fr_auto] md:items-start">
              <div>
                <h3 className="text-lg font-black text-white">Sri Chaitanya Junior Kalasala</h3>
                <p className="text-white/70">Intermediate (MPC)</p>
              </div>
              <div className="text-sm font-semibold text-white/60">2022 - 2024</div>
            </div>
            <div className="grid gap-2 rounded-3xl border-l-4 border-white/20 bg-white/5 p-4 md:grid-cols-[1fr_auto] md:items-start">
              <div>
                <h3 className="text-lg font-black text-white">Vijaya Ratna High School</h3>
                <p className="text-white/70">SSC - Secondary School Education</p>
              </div>
              <div className="text-sm font-semibold text-white/60">2021 - 2022</div>
            </div>
          </div>
        </section>

        <div className="resume-paired">
          <section id="certifications" className="resume-section section-sage scroll-mt-24 rounded-4xl p-6 md:p-8">
            <div className="mb-6 flex items-center gap-3">
              <Award className="text-[#ff6a3d]" size={26} />
              <h2 className="text-3xl font-black tracking-tight text-white">Certifications</h2>
            </div>
            <ul className="space-y-3 text-sm text-white/80">
              {certifications.map((item) => (
                <li key={item} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3"><span className="mr-2 text-[#ff6a3d]">&bull;</span>{item}</li>
              ))}
            </ul>
          </section>

          <section id="achievements" className="resume-section section-apricot scroll-mt-24 rounded-4xl p-6 md:p-8">
            <div className="mb-6 flex items-center gap-3">
              <Star className="text-[#ff6a3d]" size={26} />
              <h2 className="text-3xl font-black tracking-tight text-white">Technical Events</h2>
            </div>
            <ul className="space-y-3 text-sm text-white/80">
              {events.map((item) => (
                <li key={item} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3"><span className="mr-2 text-[#ff6a3d]">&bull;</span>{item}</li>
              ))}
            </ul>
          </section>
        </div>

        <section id="contact" className="resume-section section-sky mt-8 scroll-mt-24 rounded-4xl p-6 md:p-8">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <h2 className="text-4xl font-black tracking-tight text-white md:text-5xl">Contact</h2>
              <p className="mt-3 text-xl font-semibold text-[#ff6a3d]">Let&apos;s connect and create something meaningful</p>
              <p className="mt-6 max-w-xl leading-7 text-white/80">I’m open to internships and exciting projects in software development and AI/ML. Feel free to reach out — I’d love to hear from you.</p>
              <div className="mt-8 space-y-4">
                <a href="mailto:preethampaduru@gmail.com" className="contact-detail flex items-center gap-4 rounded-2xl bg-white/5 p-4"><Mail className="text-[#ff6a3d]" size={20} /><div><div className="text-sm font-bold text-white">Email</div><div className="text-sm text-white/70">preethampaduru@gmail.com</div></div></a>
                <div className="contact-detail flex items-center gap-4 rounded-2xl bg-white/5 p-4"><MapPin className="text-[#ff6a3d]" size={20} /><div><div className="text-sm font-bold text-white">Location</div><div className="text-sm text-white/70">Hyderabad, Telangana</div></div></div>
                <a href="tel:+917999766626" className="contact-detail flex items-center gap-4 rounded-2xl bg-white/5 p-4"><Phone className="text-[#ff6a3d]" size={20} /><div><div className="text-sm font-bold text-white">Phone</div><div className="text-sm text-white/70">+91 7981021011</div></div></a>
              </div>
              <div className="mt-8">
                <div className="text-sm font-bold text-white">Find me on</div>
                <div className="mt-3 flex flex-wrap gap-3">
                  <a className="interactive-button rounded-full border border-white/10 px-4 py-2 text-sm font-semibold text-white/80" href="https://linkedin.com/in/preethamreddy17/" target="_blank" rel="noreferrer">LinkedIn</a>
                  <a className="interactive-button rounded-full border border-white/10 px-4 py-2 text-sm font-semibold text-white/80" href="https://github.com/PreethamPaduru" target="_blank" rel="noreferrer">GitHub</a>
                </div>
              </div>
            </div>
            <form onSubmit={handleSubmit} noValidate className="rounded-[28px] border border-white/10 bg-white/5 p-5 md:p-7">
              <div className="grid gap-5">
                <label className="contact-field">Name<input value={formData.name} onChange={(event) => setFormData({ ...formData, name: event.target.value })} placeholder="Your name" />{formErrors.name && <span>{formErrors.name}</span>}</label>
                <label className="contact-field">Email<input value={formData.email} onChange={(event) => setFormData({ ...formData, email: event.target.value })} placeholder="you@example.com" type="email" />{formErrors.email && <span>{formErrors.email}</span>}</label>
                <label className="contact-field">Subject<input value={formData.subject} onChange={(event) => setFormData({ ...formData, subject: event.target.value })} placeholder="How can I help?" />{formErrors.subject && <span>{formErrors.subject}</span>}</label>
                <label className="contact-field">Message<textarea value={formData.message} onChange={(event) => setFormData({ ...formData, message: event.target.value })} placeholder="Write at least 20 characters..." rows="5" />{formErrors.message && <span>{formErrors.message}</span>}</label>
                <button type="submit" className="interactive-button flex items-center justify-center gap-2 rounded-xl bg-violet-600 px-5 py-3 font-bold text-white">Send Message <Send size={17} /></button>
                {formSent && <p className="text-center text-sm font-semibold text-[#ff6a3d]">Thanks! Your message is ready to be sent.</p>}
              </div>
            </form>
          </div>
        </section>

        <footer className="site-footer mt-8 border-t border-white/10 pt-5 text-center text-sm text-white/50">
          &copy; 2026 Preetham Reddy Paduru. All Rights Reserved.
        </footer>
      </main>
    </div>
  );
}
