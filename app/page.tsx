'use client';

import { useEffect, useMemo, useState } from 'react';
import GlitchLogo from './components/GlitchLogo';
import RadarAvatar from './components/RadarAvatar';
import RevealCard from './components/RevealCard';
import TypewriterText from './components/TypewriterText';

type Lang = 'id' | 'en';

const content = {
  id: {
    toggle: 'EN',
    nav: [
      { label: 'Beranda', href: '#home' },
      { label: 'Tentang', href: '#about' },
      { label: 'Arsenal', href: '#arsenal' },
      { label: 'Kontak', href: '#contact' },
    ],
    hello: 'Halo, saya',
    name: 'Taofik Hidayat',
    role: 'Security Analyst',
    tagline: 'Bug Hunter · Pentester · Red Team Operator',
    intro:
      'Saya berfokus pada offensive security untuk aplikasi web: mulai dari reconnaissance, validasi kerentanan, hingga rekomendasi hardening yang bisa langsung diterapkan tim engineering.',
    primaryBtn: 'Unduh CV',
    secondaryBtn: 'Hubungi Saya',
    aboutTitle: 'Profil Operasi',
    aboutText:
      'Berbasis di Bogor, Jawa Barat. Latar belakang frontend membantu saya memahami attack-surface dari sisi attacker dan developer. Saat ini saya aktif mengembangkan skill web pentest, threat modeling, dan security reporting.',
    stats: [
      { label: 'Simulasi Assessment', value: '20+' },
      { label: 'Target Teknologi', value: 'Web / API' },
      { label: 'Fokus', value: 'OWASP Top 10' },
    ],
    arsenalTitle: 'Arsenal Keamanan',
    arsenal: [
      { name: 'Recon & OSINT', level: 86 },
      { name: 'Web Pentesting', level: 82 },
      { name: 'Threat Modeling', level: 74 },
      { name: 'Secure Frontend', level: 78 },
      { name: 'Mobile Apps Security', level: 72 },
    ],
    expTitle: 'Mode Pengalaman',
    experiences: [
      {
        title: 'Web Security Assessment Lab',
        detail: 'Melakukan simulasi serangan XSS, SQLi, broken access control, dan menyusun report prioritas risiko.',
      },
      {
        title: 'UI Engineer to Security Transition',
        detail: 'Mengonversi perspektif UI menjadi secure coding checklist untuk mengurangi bug kelas high severity.',
      },
      {
        title: 'Capture The Flag & Practice Range',
        detail: 'Rutin latihan challenge web exploitation untuk mempertajam metodologi eksploitasi dan mitigasi.',
      },
    ],
    contactTitle: 'Kanal Kontak',
    contactText: 'Terbuka untuk kolaborasi audit keamanan, riset bug bounty, dan proyek hardening aplikasi.',
    form: {
      name: 'Nama',
      email: 'Email',
      message: 'Pesan',
      submit: 'Kirim Pesan',
    },
  },
  en: {
    toggle: 'ID',
    nav: [
      { label: 'Home', href: '#home' },
      { label: 'About', href: '#about' },
      { label: 'Arsenal', href: '#arsenal' },
      { label: 'Contact', href: '#contact' },
    ],
    hello: 'Hello, I am',
    name: 'Taofik Hidayat',
    role: 'Security Analyst',
    tagline: 'Bug Hunter · Pentester · Red Team Operator',
    intro:
      'I focus on offensive web security: from reconnaissance and vulnerability validation to practical hardening recommendations for engineering teams.',
    primaryBtn: 'Download CV',
    secondaryBtn: 'Contact Me',
    aboutTitle: 'Operation Profile',
    aboutText:
      'Based in Bogor, West Java. My frontend background helps me see attack surface from both attacker and developer perspectives. I am actively improving web pentest, threat modeling, and security reporting skills.',
    stats: [
      { label: 'Assessment Simulations', value: '20+' },
      { label: 'Target Technology', value: 'Web / API' },
      { label: 'Focus', value: 'OWASP Top 10' },
    ],
    arsenalTitle: 'Security Arsenal',
    arsenal: [
      { name: 'Recon & OSINT', level: 86 },
      { name: 'Web Pentesting', level: 82 },
      { name: 'Threat Modeling', level: 74 },
      { name: 'Secure Frontend', level: 78 },
      { name: 'Mobile Apps Security', level: 72 },
    ],
    expTitle: 'Experience Mode',
    experiences: [
      {
        title: 'Web Security Assessment Lab',
        detail: 'Executed XSS, SQLi, and broken-access-control simulations and delivered prioritized risk reports.',
      },
      {
        title: 'UI Engineer to Security Transition',
        detail: 'Translated UI engineering perspective into secure-coding checklists to reduce high-severity bug classes.',
      },
      {
        title: 'Capture The Flag & Practice Range',
        detail: 'Consistent web exploitation training to sharpen exploitation methodology and mitigation mapping.',
      },
    ],
    contactTitle: 'Contact Channel',
    contactText: 'Open for security audit collaboration, bug bounty research, and application hardening projects.',
    form: {
      name: 'Name',
      email: 'Email',
      message: 'Message',
      submit: 'Send Message',
    },
  },
};

export default function HomePage() {
  const [lang, setLang] = useState<Lang>('id');
  const t = useMemo(() => content[lang], [lang]);

  useEffect(() => {
    const savedLang = window.localStorage.getItem('portfolio-lang');
    if (savedLang === 'id' || savedLang === 'en') {
      setLang(savedLang as Lang);
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
    window.localStorage.setItem('portfolio-lang', lang);
  }, [lang]);

  return (
    <main className="shell">
      <div className="noise" />
      <div className="scanline" />

      <header className="topnav glass">
        <GlitchLogo />
        <nav>
          {t.nav.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <button
          type="button"
          className="lang"
          aria-label={`Switch language to ${lang === 'id' ? 'English' : 'Bahasa Indonesia'}`}
          onClick={() => setLang(lang === 'id' ? 'en' : 'id')}
        >
          {t.toggle}
        </button>
      </header>

      {/* Hero Section */}
      <section id="home" className="hero glass">
        <article>
          <p className="kicker">{t.hello}</p>
          <h1>{t.name}</h1>
          <h2>{t.role}</h2>
          <TypewriterText text={t.tagline} />
          <p className="muted">{t.intro}</p>
          <div className="cta-row">
            <a href="/assets/resume.pdf" target="_blank" rel="noreferrer" className="btn primary">
              {t.primaryBtn}
            </a>
            <a href="#contact" className="btn ghost">
              {t.secondaryBtn}
            </a>
          </div>
        </article>

        <RadarAvatar />
      </section>

      {/* About & Arsenal */}
      <section className="grid">
        <RevealCard id="about">
          <h3>{t.aboutTitle}</h3>
          <p className="muted">{t.aboutText}</p>
          <div className="stats">
            {t.stats.map((stat) => (
              <div key={stat.label} className="stat">
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </RevealCard>

        <RevealCard id="arsenal">
          <h3>{t.arsenalTitle}</h3>
          <div className="meter-wrap">
            {t.arsenal.map((skill) => (
              <div className="meter" key={skill.name}>
                <div className="meter-label">
                  <span>{skill.name}</span>
                  <b>{skill.level}%</b>
                </div>
                <div className="track">
                  <div className="fill" style={{ width: `${skill.level}%` }} />
                </div>
              </div>
            ))}
          </div>
        </RevealCard>
      </section>

      {/* Experiences */}
      <RevealCard id="experience">
        <h3>{t.expTitle}</h3>
        <div className="timeline">
          {t.experiences.map((exp) => (
            <div className="timeline-item" key={exp.title}>
              <h4>{exp.title}</h4>
              <p className="muted">{exp.detail}</p>
            </div>
          ))}
        </div>
      </RevealCard>

      {/* PoC & Projects */}
      <section className="grid">
        <RevealCard id="poc">
  <h3>PoC</h3>
  <p className="muted">Coming soon.</p>
  <a className="btn ghost" href="/poc">Open PoC Page</a>
</RevealCard>

<RevealCard id="project">
  <h3>Project</h3>
  <p className="muted">Coming soon.</p>
  <a className="btn ghost" href="/project">Open Project Page</a>
</RevealCard>
      </section>

      {/* Contact */}
      <RevealCard id="contact">
        <h3>{t.contactTitle}</h3>
        <p className="muted">{t.contactText}</p>

        <form className="contact" action="https://formspree.io/f/xbljlqow" method="POST">
          <input type="text" name="name" placeholder={t.form.name} required maxLength={30} />
          <input type="email" name="email" placeholder={t.form.email} required />
          <textarea name="message" rows={4} placeholder={t.form.message} required />
          <button type="submit" className="btn primary">
            {t.form.submit}
          </button>
        </form>

        <div className="links">
          <a href="https://github.com/eviruin" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/taofik-hidayat-b7b593215/" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href="https://wa.me/6281389678378" target="_blank" rel="noreferrer">
            WhatsApp
          </a>
        </div>
      </RevealCard>
    </main>
  );
}