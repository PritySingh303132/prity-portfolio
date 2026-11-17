import { useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { Menu, X, Github, Linkedin, Code2, Trophy, Download, ArrowDown, Mail, MapPin, GraduationCap, Brain, Layers, Sparkles } from 'lucide-react'
import { profile, about, skills, education, currentLearning, projects, experience, achievements } from './data/content.js'

const NAV = ['about', 'skills', 'projects', 'experience', 'education', 'achievements', 'profiles', 'resume', 'contact']
const todo = (s) => !s || s.startsWith('TODO')

function useResume() {
  const [ok, setOk] = useState(false)
  useEffect(() => { fetch('/resume.pdf', { method: 'HEAD' }).then(r => setOk(r.ok && (r.headers.get('content-type') || '').includes('pdf'))).catch(() => setOk(false)) }, [])
  return ok
}
function Ext({ href, children, className = 'btn' }) {
  return href ? <a className={className} href={href} target="_blank" rel="noopener noreferrer">{children}</a>
    : <span className="pending">{children}: add link in content.js</span>
}
function Reveal({ children }) {
  const reduce = useReducedMotion()
  return <motion.div initial={reduce ? false : { opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .5 }}>{children}</motion.div>
}
function Nav() {
  const [open, setOpen] = useState(false)
  return <header className="nav"><div className="wrap">
    <a href="#top" style={{ fontFamily: 'var(--h)', fontWeight: 700, textDecoration: 'none' }}>Prity Singh</a>
    <button className="burger" aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
    <nav aria-label="Primary"><ul className={open ? 'open' : ''}>{NAV.map(n => <li key={n}><a href={`#${n}`} onClick={() => setOpen(false)}>{n[0].toUpperCase() + n.slice(1)}</a></li>)}</ul></nav>
  </div></header>
}
function Spotlight() {
  useEffect(() => {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const el = document.querySelector('.cursor')
    const mv = (e) => { el.style.background = `radial-gradient(420px at ${e.clientX}px ${e.clientY}px,rgba(198,243,107,.07),transparent 70%)` }
    addEventListener('pointermove', mv); return () => removeEventListener('pointermove', mv)
  }, [])
  return <div className="cursor" aria-hidden="true" />
}
function ResumeLink({ className = 'btn primary' }) {
  const ok = useResume()
  return ok ? <a className={className} href="/resume.pdf" download="Prity-Singh-Resume.pdf"><Download size={18} />Download Resume</a>
    : <a className="btn" href="#resume"><Download size={18} />Resume (coming soon)</a>
}
function Hero() {
  const [img, setImg] = useState(true)
  return <section className="hero" id="top"><div className="wrap"><div>
    <h1>PRITY SINGH</h1>
    <h2>Building ideas into intelligent experiences.</h2>
    <p>Computer Engineering student | Software Developer | AI/ML Enthusiast</p>
    <span className="status">Open to internships and placements, 2027</span>
    <div className="btns"><a className="btn primary" href="#projects"><ArrowDown size={18} />Explore My Work</a><ResumeLink className="btn" /></div>
  </div><div className="stage"><div className="orb" role="img" aria-label="Decorative floating lime orb" />
    {img && <img className="portrait" src={profile.portrait} alt="Prity Singh" onError={() => setImg(false)} />}</div></div></section>
}
const About = () => <section id="about"><div className="wrap"><Reveal><h2>About</h2></Reveal>{about.map((t, i) => <p key={i} style={{ marginBottom: '1rem', fontSize: '1.15rem' }}>{t}</p>)}</div></section>
function Bento() {
  const L = profile.links
  return <section id="skills"><div className="wrap"><Reveal><h2>What I work with</h2></Reveal>
    <div className="bento">
      <article className="card s4"><Layers /><h3>Software Development</h3><p>Full-stack web apps with React, Node.js and Express, backed by SQL and MongoDB.</p></article>
      <article className="card s2"><Brain /><h3>AI &amp; ML</h3><p>Data analysis and model building with Python.</p></article>
      {skills.map(g => <article key={g.group} className="card s2"><h3 style={{ fontSize: '1.05rem' }}>{g.group}</h3>{g.items.map(i => <span className="tag" key={i}>{i}</span>)}</article>)}
      <article className="card s3"><GraduationCap /><h3>Education</h3><p>{education.degree}, {education.status.toLowerCase()}.</p></article>
      <article className="card s3"><Sparkles /><h3>Current learning</h3><p>{currentLearning}</p></article>
      <article className="card s2"><Trophy /><h3>Google Student Ambassador</h3><p>2026 cohort.</p></article>
      <article className="card s2"><Code2 /><h3>Coding profiles</h3><p>{[L.github, L.leetcode, L.codechef].some(Boolean) ? <a href="#profiles">See profiles</a> : 'Links coming soon.'}</p></article>
      <article className="card s2"><MapPin /><h3>Location</h3><p>{profile.location}</p></article>
    </div></div></section>
}
function Shot({ name, alt }) {
  const [ok, setOk] = useState(true)
  return <div className="shot">{ok ? <img src={`/assets/${name}`} alt={alt} loading="lazy" onError={() => setOk(false)} /> : <span>Placeholder: public/assets/{name}</span>}</div>
}
function Project({ p }) {
  const full = p.featured
  return <details className="card proj"><summary><h3>{p.title}</h3><span className="mono">{p.category}</span></summary>
    <p style={{ marginTop: '.6rem' }}>{p.summary}</p>
    <div className="body"><div>
      {full && <>{!todo(p.problem) && <><h4>Problem</h4><p>{p.problem}</p></>}{!todo(p.contribution) && <><h4 style={{ marginTop: '1rem' }}>My contribution</h4><p>{p.contribution}</p></>}</>}
      {p.pipeline && <><h4 style={{ marginTop: '1rem' }}>Pipeline</h4><p className="mono">{p.pipeline.join(' > ')}</p></>}
      {full && <><h4 style={{ marginTop: '1rem' }}>Implemented</h4><ul>{p.implemented.map(f => <li key={f}>{f}</li>)}</ul>
        {p.planned.length > 0 && <><h4 style={{ marginTop: '1rem' }}>Planned</h4><ul>{p.planned.map(f => <li key={f}>{f}</li>)}</ul></>}
        {!todo(p.challenges) && <><h4 style={{ marginTop: '1rem' }}>Challenges and learning</h4><p>{p.challenges}</p></>}</>}
      <div style={{ marginTop: '1rem' }}>{p.tech.filter(t => !todo(t)).map(t => <span className="tag" key={t}>{t}</span>)}</div>
      <div className="btns"><Ext href={p.github}><Github size={16} />GitHub</Ext>{p.demo && <Ext href={p.demo}>Live demo</Ext>}</div>
    </div>
    {p.shots && <div className="shots">{p.shots.map(s => <Shot key={s} name={s} alt={`${p.title} screenshot`} />)}</div>}</div></details>
}
const Projects = () => <section id="projects"><div className="wrap"><Reveal><h2>Projects</h2></Reveal>
  <div className="projects">{projects.map(p => <Project key={p.id} p={p} />)}</div></div></section>
const Experience = () => <section id="experience"><div className="wrap"><Reveal><h2>Experience &amp; leadership</h2></Reveal>
  <div className="timeline">{experience.map(e => <div key={e.title} style={{ marginBottom: '1.5rem' }}><span className="mono">{e.period}</span><h3>{e.title}</h3><p>{e.body}</p>{e.points && <ul>{e.points.map(x => <li key={x}>{x}</li>)}</ul>}</div>)}</div></div></section>
const Education = () => <section id="education"><div className="wrap"><Reveal><h2>Education</h2></Reveal>
  <div className="card"><h3>{education.college}</h3><p>{education.university}</p><p>{education.degree} | {education.status} | {education.graduation}</p>
    <p className="mono">CGPA {education.cgpa} ({education.cgpaNote})</p>{education.earlier.map(x => <p key={x.level} style={{ marginTop: '.8rem' }}>{x.level}, {x.school}, {x.years}: {x.result}</p>)}</div></div></section>
const Achievements = () => <section id="achievements"><div className="wrap"><Reveal><h2>Achievements &amp; certifications</h2></Reveal>
  <div className="profiles">{achievements.map(a => <article className="card" key={a.name}>
    {a.img ? <img src={`/assets/${a.img}`} alt={`${a.name} certificate`} loading="lazy" style={{ width: '100%', borderRadius: 8, marginBottom: '.7rem' }} /> : <div className="shot" style={{ marginBottom: '.7rem' }}>Certificate image</div>}
    <h3 style={{ fontSize: '1.05rem' }}>{a.name}</h3>{a.meta && <p>{a.meta}</p>}{a.link && <Ext href={a.link} className="mono">Credential</Ext>}</article>)}</div></div></section>
function Profiles() {
  const L = profile.links, items = [['GitHub', L.github, Github], ['LinkedIn', L.linkedin, Linkedin], ['LeetCode', L.leetcode, Code2], ['CodeChef', L.codechef, Trophy]]
  return <section id="profiles"><div className="wrap"><Reveal><h2>Coding profiles</h2></Reveal><div className="profiles">
    {items.map(([n, h, I]) => <div className="card" key={n}><I /><h3>{n}</h3><Ext href={h}>Open {n}</Ext></div>)}</div></div></section>
}
function Resume() {
  const ok = useResume()
  return <section id="resume"><div className="wrap"><Reveal><h2>Resume</h2></Reveal>
    {ok ? <><div className="btns" style={{ marginBottom: '1rem' }}><ResumeLink /></div><iframe title="Resume preview" src="/resume.pdf" /></>
      : <div className="card"><h3>Resume not added yet</h3><p>Place your PDF at <code>public/resume.pdf</code>. The download button and preview appear automatically.</p></div>}</div></section>
}
function CopyEmail() {
  const [c, setC] = useState(false)
  const copy = () => navigator.clipboard.writeText(profile.email).then(() => { setC(true); setTimeout(() => setC(false), 2000) }).catch(() => { location.href = `mailto:${profile.email}` })
  return <button type="button" className="btn" onClick={copy} aria-live="polite"><Mail size={18} />{c ? 'Copied!' : profile.email}</button>
}
function Contact() {
  const [v, setV] = useState({ name: '', email: '', subject: '', message: '' }), [err, setErr] = useState({}), [state, setState] = useState('idle')
  const id = import.meta.env.VITE_FORMSPREE_ID
  const submit = async (e) => {
    e.preventDefault()
    const x = {}
    if (!v.name.trim()) x.name = 'Enter your name.'
    if (!/^\S+@\S+\.\S+$/.test(v.email)) x.email = 'Enter a valid email address.'
    if (!v.subject.trim()) x.subject = 'Enter a subject.'
    if (v.message.trim().length < 10) x.message = 'Write at least 10 characters.'
    setErr(x); if (Object.keys(x).length) return
    if (!id) return setState('unconfigured')
    setState('sending')
    try { const r = await fetch(`https://formspree.io/f/${id}`, { method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' }, body: JSON.stringify(v) })
      if (!r.ok) throw 0; setState('sent'); setV({ name: '', email: '', subject: '', message: '' })
    } catch { setState('failed') }
  }
  const F = (k, label, T = 'input') => <label>{label}<T name={k} value={v[k]} rows={T === 'textarea' ? 5 : undefined} onChange={e => setV({ ...v, [k]: e.target.value })} aria-invalid={!!err[k]} />{err[k] && <span className="err" role="alert">{err[k]}</span>}</label>
  return <section id="contact"><div className="wrap"><Reveal><h2>Have an interesting idea? Let's build something meaningful.</h2></Reveal>
    <div className="btns" style={{ marginBottom: '2rem' }}>{profile.email ? <CopyEmail /> : <span className="pending">Email: add in content.js</span>}
      <Ext href={profile.links.linkedin}>LinkedIn</Ext><Ext href={profile.links.github}>GitHub</Ext></div>
    <form onSubmit={submit} noValidate>{F('name', 'Name')}{F('email', 'Email')}{F('subject', 'Subject')}{F('message', 'Message', 'textarea')}
      <button className="btn primary" disabled={state === 'sending'}>{state === 'sending' ? 'Sending...' : 'Send message'}</button>
      <div aria-live="polite">{state === 'sent' && <span className="ok">Message sent. Thank you!</span>}
        {state === 'failed' && <span className="err">Sending failed. Please try again or email directly.</span>}
        {state === 'unconfigured' && <span className="err">Form not connected yet. Set VITE_FORMSPREE_ID (see README).</span>}</div></form></div></section>
}
export default function App() {
  return <><Spotlight /><Nav /><main><Hero /><About /><Bento /><Projects /><Experience /><Education /><Achievements /><Profiles /><Resume /><Contact /></main>
    <footer><div className="wrap">&copy; {new Date().getFullYear()} Prity Singh. Built with React and Vite.</div></footer></>
}
