<template>
  <div class="home">
    <!-- HERO -->
    <section class="hero">
      <div class="hero__bg">
        <div class="hero__grain"></div>
        <div class="hero__glow"></div>
      </div>
      <div class="hero__inner">
        <div class="hero__content">
          <div class="hero__text">
            <div class="hero__label">
              <span class="hero__label-line"></span>
              <span>UI/UX Architect — Product Strategist</span>
            </div>
            <h1 class="hero__title">
              Designing Systems<br />
              <em>That Scale.</em>
            </h1>
            <p class="hero__sub">
              Adebayo Rukayat — crafting high-end digital experiences for global enterprises and ambitious startups. Where design meets strategy.
            </p>
            <div class="hero__actions">
              <NuxtLink to="#work" class="btn btn--gold">View Selected Work</NuxtLink>
              <NuxtLink to="#about" class="btn btn--outline">About Me</NuxtLink>
            </div>
            <div class="hero__stats">
              <div class="hero__stat">
                <span class="hero__stat-num">7+</span>
                <span class="hero__stat-label">Years of Experience</span>
              </div>
              <div class="hero__stat-divider"></div>
              <div class="hero__stat">
                <span class="hero__stat-num">60+</span>
                <span class="hero__stat-label">Projects Delivered</span>
              </div>
              <div class="hero__stat-divider"></div>
              <div class="hero__stat">
                <span class="hero__stat-num">30+</span>
                <span class="hero__stat-label">Happy Clients</span>
              </div>
            </div>
          </div>
          <div class="hero__image">
            <img src="/images/home-image.png" alt="Adebayo Rukayat - UI/UX Architect" />
          </div>
        </div>
      </div>
      <div class="hero__scroll">
        <span>Scroll</span>
        <div class="hero__scroll-line"></div>
      </div>
    </section>

    <!-- WORK / PROJECTS -->
    <section class="work" id="work">
      <div class="section__inner">
        <div class="section__header">
          <span class="section__eyebrow">Selected Work</span>
          <h2 class="section__title">Recent Projects</h2>
        </div>
        <div class="projects__grid">
          <NuxtLink
            v-for="project in projects"
            :key="project.id"
            :to="`/ProjectDetail?id=${project.id}`"
            class="project-card"
            :class="`project-card--${project.size}`"
          >
            <div class="project-card__img">
              <div class="project-card__img-inner" :style="{ backgroundImage: `url(${project.image})` }">
                <span class="project-card__category">{{ project.category }}</span>
              </div>
              <div class="project-card__overlay">
                <span class="project-card__view">View Project →</span>
              </div>
            </div>
            <div class="project-card__info">
              <div class="project-card__meta">
                <span class="project-card__tag">{{ project.type }}</span>
              </div>
              <h3 class="project-card__title">{{ project.title }}</h3>
              <p class="project-card__desc">{{ project.desc }}</p>
            </div>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- ABOUT -->
    <section class="about" id="about">
      <div class="section__inner">
        <div class="about__grid">
          <div class="about__visual">
            <div class="about__img-wrap">
              <div class="about__img-placeholder">
                <img src="/images/home2.png" alt="Adebayo Rukayat" />
              </div>
              <div class="about__img-accent"></div>
            </div>
            <div class="about__chips">
              <span class="chip" v-for="skill in topSkills" :key="skill">{{ skill }}</span>
            </div>
          </div>
          <div class="about__content">
            <span class="section__eyebrow">About Me</span>
            <h2 class="section__title">Designing with purpose, strategy &amp; craft</h2>
            <p class="about__body">
              I'm Adebayo Rukayat — a Senior UI/UX Architect and Product Designer based in Lagos, Nigeria, with over 7 years of experience translating complex business challenges into intuitive, high-impact digital products.
            </p>
            <p class="about__body">
              My practice spans the full product design lifecycle — from user research and information architecture to high-fidelity prototyping and scalable design systems. I've worked with fintech companies, SaaS platforms, and global startups to build products that users love and businesses depend on.
            </p>
            <div class="about__badges">
              <div class="about__badge" v-for="b in badges" :key="b.label">
                <span class="about__badge-num">{{ b.num }}</span>
                <span class="about__badge-label">{{ b.label }}</span>
              </div>
            </div>
            <NuxtLink to="#contact" class="btn btn--gold">Work With Me</NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- SERVICES -->
    <section class="services" id="services">
      <div class="section__inner">
        <div class="section__header section__header--center">
          <span class="section__eyebrow">What I Do</span>
          <h2 class="section__title">Services &amp; Expertise</h2>
        </div>
        <div class="services__grid">
          <div class="service-card" v-for="service in services" :key="service.title">
            <div class="service-card__icon">{{ service.icon }}</div>
            <h3 class="service-card__title">{{ service.title }}</h3>
            <p class="service-card__desc">{{ service.desc }}</p>
            <ul class="service-card__list">
              <li v-for="item in service.items" :key="item">{{ item }}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- PROCESS -->
    <section class="process">
      <div class="section__inner">
        <div class="section__header section__header--center">
          <span class="section__eyebrow">How I Work</span>
          <h2 class="section__title">A Thoughtful Process</h2>
        </div>
        <div class="process__steps">
          <div class="process__step" v-for="(step, i) in processSteps" :key="step.title">
            <div class="process__step-num">{{ String(i + 1).padStart(2, '0') }}</div>
            <div class="process__step-line" v-if="i < processSteps.length - 1"></div>
            <h3 class="process__step-title">{{ step.title }}</h3>
            <p class="process__step-desc">{{ step.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- TESTIMONIALS -->
    <section class="testimonials">
      <div class="section__inner">
        <div class="section__header section__header--center">
          <span class="section__eyebrow">Client Words</span>
          <h2 class="section__title">What Clients Say</h2>
        </div>
        <div class="testimonials__grid">
          <div class="testimonial-card" v-for="t in testimonials" :key="t.name">
            <div class="testimonial-card__quote">"{{ t.quote }}"</div>
            <div class="testimonial-card__author">
              <div class="testimonial-card__avatar">{{ t.initials }}</div>
              <div>
                <p class="testimonial-card__name">{{ t.name }}</p>
                <p class="testimonial-card__role">{{ t.role }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CONTACT -->
    <section class="contact" id="contact">
      <div class="section__inner">
        <div class="contact__wrap">
          <div class="contact__content">
            <span class="section__eyebrow">Get In Touch.</span>
            <h2 class="contact__title">Ready to build something remarkable?</h2>
            <p class="contact__sub">Let's discuss your project and explore how strategic design can drive your business forward.</p>
            <div class="contact__details">
              <a href="mailto:adebayorukayatblessing@gmail.com" class="contact__link">adebayorukayatblessing@gmail.com</a>
              <p class="contact__location">Lagos, Nigeria · Available Globally</p>
            </div>
          </div>
          <form class="contact__form" action="https://formspree.io/f/mnjyynpl" method="POST" @submit.prevent="handleContact">
            <div class="form-group">
              <label>Full Name</label>
              <input type="text" name="fullname" v-model="form.name" placeholder="Your name" required />
            </div>
            <div class="form-group">
              <label>Email Address</label>
              <input type="email" name="email" v-model="form.email" placeholder="your@email.com" required />
            </div>
            <div class="form-group">
              <label>Project Type</label>
              <select name="project_type" v-model="form.type">
                <option value="">Select a service</option>
                <option>UI/UX Design</option>
                <option>Design System</option>
                <option>Product Strategy</option>
                <option>Mobile App Design</option>
                <option>Brand Identity</option>
              </select>
            </div>
            <div class="form-group">
              <label>Message</label>
              <textarea name="message" v-model="form.message" rows="4" placeholder="Tell me about your project..." required></textarea>
            </div>
            <button type="submit" class="btn btn--gold btn--full" :class="{ loading: sending }">
              {{ sending ? 'Sending...' : 'Send Message' }}
            </button>
            <p v-if="sent" class="contact__success">✓ Message sent! I'll get back to you soon.</p>
            <p v-if="error" class="contact__error">❌ Something went wrong. Please try again.</p>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'

useHead({ title: 'Adebayo Rukayat Portfolio' })

const projects = [
  {
    id: 1, size: 'large',
    title: 'Digital Banking Mobile Application',
    desc: 'A comprehensive payments and banking platform serving 2M+ users across West Africa.',
    category: 'Fintech / Mobile', type: 'End-to-End Product Design', year: '2024',
    image: 'https://media.base44.com/images/public/user_6a310e2b8f4a880e02e679e1/bd66ed0a6_sample6.webp'
  },
  {
    id: 2, size: 'small',
    title: 'Design System Creation',
    desc: 'A scalable design system with tokens, components, and documentation.',
    category: 'SaaS / Web', type: 'Design System', year: '2024',
    image: 'https://media.base44.com/images/public/user_6a310e2b8f4a880e02e679e1/904368807_sample5.webp'
  },
  {
    id: 3, size: 'small',
    title: 'AI Nutrition Mobile App',
    desc: 'AI-powered nutrition tracking app for personalized health goals.',
    category: 'Mobile / Impact', type: 'UX Research + Design', year: '2023',
    image: 'https://media.base44.com/images/public/user_6a310e2b8f4a880e02e679e1/ec86d9734_sample4.webp'
  },
  {
    id: 4, size: 'medium',
    title: 'Logistic Tracking Mobile App',
    desc: 'Real-time fleet tracking with health scores and route optimization.',
    category: 'Enterprise / SaaS', type: 'Product Design', year: '2023',
    image: 'https://media.base44.com/images/public/user_6a310e2b8f4a880e02e679e1/3f82adb86_sample3.webp'
  },
  {
    id: 5, size: 'medium',
    title: 'Recruitment SaaS Dashboard',
    desc: 'Streamlined hiring platform with interview management and analytics.',
    category: 'Design System', type: 'Systems Design', year: '2023',
    image: 'https://media.base44.com/images/public/user_6a310e2b8f4a880e02e679e1/d55344b09_sample2.webp'
  },
  {
    id: 6, size: 'large',
    title: 'Fintech Dashboard Design',
    desc: 'Modern Financial Dashboard with transaction tracking and analytics.',
    category: 'Design System', type: 'Systems Design', year: '2023',
    image: 'https://media.base44.com/images/public/user_6a310e2b8f4a880e02e679e1/8d4870832_samples1.webp'
  },
  {
    id: 7, size: 'medium',
    title: 'Medical Appointment Booking App',
    desc: 'Streamlined platform for booking and managing medical appointments with specialist search and symptom input.',
    category: 'Design System', type: 'Systems Design', year: '2023',
    image: 'https://media.base44.com/images/public/6a310f00b33f3584f5c0d82e/4b9cd36fc_sample12.webp'
  },
  {
    id: 8, size: 'small',
    title: 'Skincare E-commerce App - SOLE',
    desc: 'Luxury skincare shopping experience with product details and seamless checkout.',
    category: 'Design System', type: 'Systems Design', year: '2023',
    image: 'https://media.base44.com/images/public/6a310f00b33f3584f5c0d82e/22af9ca31_sample11.webp'
  },
  {
    id: 9, size: 'large',
    title: 'Personal Finance Mobile App',
    desc: 'Smart Finance Tracker with spending analytics, saving goals and bill management.',
    category: 'Fintech', type: 'Systems Design', year: '2023',
    image: 'https://media.base44.com/images/public/6a310f00b33f3584f5c0d82e/a48ac797e_sample10.webp'
  },
  {
    id: 10, size: 'medium',
    title: 'Heart Rate and ECG Health App',
    desc: 'Real-time monitoring and analysis of heart rate and ECG data with weekly health reports.',
    category: 'Wellness', type: 'Systems Design', year: '2023',
    image: 'https://media.base44.com/images/public/6a310f00b33f3584f5c0d82e/44691b96a_sample9.webp'
  },
  {
    id: 11, size: 'small',
    title: 'Mental Health and Mood Tracking App',
    desc: 'Mood tracking, guided relaxation and personalized mental wellness sessions.',
    category: 'Wellness', type: 'Systems Design', year: '2023',
    image: 'https://media.base44.com/images/public/6a310f00b33f3584f5c0d82e/8c73e1a81_sample8.webp'
  },
  {
    id: 12, size: 'medium',
    title: 'Travel Booking Mobile App',
    desc: 'Intuitive travel booking with flexible date search, calendar picker, and profile management.',
    category: 'Travel', type: 'Systems Design', year: '2023',
    image: 'https://media.base44.com/images/public/6a310f00b33f3584f5c0d82e/56c2592fb_sample7.webp'
  },
  {
    id: 13, size: 'medium',
    title: 'Crypto Exchange and DeFi App',
    desc: 'Dark-themed crypto trading app with instant token swaps, deposits via QR, and easy send flow.',
    category: 'Crypto', type: 'Systems Design', year: '2023',
    image: 'https://media.base44.com/images/public/6a310f00b33f3584f5c0d82e/46bf2a26b_cryptoexchangeappui.webp'
  },
  {
    id: 14, size: 'large',
    title: 'Real Estate Discovery App',
    desc: 'Elegant home search with rich filters, price range charts and immersive property visuals.',
    category: 'Real Estate', type: 'Systems Design', year: '2023',
    image: 'https://media.base44.com/images/public/6a310f00b33f3584f5c0d82e/3d7b749a6_realestateappui.webp'
  },
  {
    id: 15, size: 'small',
    title: 'Multi-Brand Marketplace App',
    desc: 'Trending brands, smart search, promotions, and seamless multi-brand shopping experience.',
    category: 'E-commerce', type: 'Systems Design', year: '2026',
    image: 'https://media.base44.com/images/public/6a310f00b33f3584f5c0d82e/a9ba723b5_marketplaceappui.webp'
  },
  {
    id: 16, size: 'medium',
    title: 'Pro Bowl Sport Betting App',
    desc: 'Dark sports app with live match tracking, win probability charts, and multi-league coverage.',
    category: 'Sport', type: 'Systems Design', year: '2023',
    image: 'https://media.base44.com/images/public/6a310f00b33f3584f5c0d82e/a7d794ee1_rugbyappui.webp'
  },
  {
    id: 17, size: 'large',
    title: 'Scorify - Fantasy Sports Hub',
    desc: 'Fantasy league hub with live scores, team stats and multi-league fantasy game modes.',
    category: 'Sport', type: 'Systems Design', year: '2023',
    image: 'https://media.base44.com/images/public/6a310f00b33f3584f5c0d82e/ba7bf3272_fantasysportappui.webp'
  },
  {
    id: 18, size: 'small',
    title: 'Purchase Management POS App',
    desc: 'Clean point-of-sale system with product catalog, transactions, and streamlined checkout.',
    category: 'Sport', type: 'Systems Design', year: '2023',
    image: 'https://media.base44.com/images/public/6a310f00b33f3584f5c0d82e/822cc8fdd_posappui1.webp'
  },
]

const topSkills = ['Figma', 'Prototyping', 'User Research', 'Design Systems', 'Interaction Design']

const badges = [
  { num: '7+', label: 'Years Experience' },
  { num: '60+', label: 'Projects' },
  { num: '30+', label: 'Clients' },
]

const services = [
  {
    icon: '◈',
    title: 'UI/UX Design',
    desc: 'Creating user-centred interfaces that are both beautiful and functionally precise.',
    items: ['User Research & Testing', 'Wireframing & Prototyping', 'High-Fidelity UI', 'Usability Audits']
  },
  {
    icon: '◇',
    title: 'Design Systems',
    desc: 'Building scalable, component-based systems that keep products consistent at scale.',
    items: ['Component Libraries', 'Design Tokens', 'Documentation', 'Figma Libraries']
  },
  {
    icon: '◉',
    title: 'Product Strategy',
    desc: 'Bridging design and business goals with research-driven strategic thinking.',
    items: ['Product Discovery', 'Roadmap Planning', 'Competitive Analysis', 'OKR Alignment']
  },
  {
    icon: '◎',
    title: 'Mobile App Design',
    desc: 'Designing native iOS and Android experiences with platform-specific best practices.',
    items: ['iOS & Android Apps', 'Gesture-based UX', 'Performance UX', 'App Store Assets']
  },
]

const processSteps = [
  { title: 'Discover', desc: 'Deep dive into your business goals, users, and market landscape through structured research.' },
  { title: 'Define', desc: 'Synthesise findings into clear problem statements, user personas, and success metrics.' },
  { title: 'Design', desc: 'Iterative design from low-fidelity wireframes through to polished, pixel-perfect interfaces.' },
  { title: 'Deliver', desc: 'Handoff-ready files, documentation, and ongoing support to ensure seamless implementation.' },
]

const testimonials = [
  {
    quote: "Rukayat transformed our product entirely. Her ability to understand complex user needs and translate them into elegant solutions is unmatched.",
    name: 'Chidi Okonkwo', role: 'CPO, NovaPay', initials: 'CO'
  },
  {
    quote: "Working with Adebayo was a revelation. The design system she built became the foundation of our entire product family.",
    name: 'Sarah Mensah', role: 'Head of Product, Stellr', initials: 'SM'
  },
  {
    quote: "She brings strategic depth that most designers don't have. The ROI from her work was measurable within the first quarter.",
    name: 'James Olatunji', role: 'CEO, Meridian Tech', initials: 'JO'
  },
]

const form = ref({ name: '', email: '', type: '', message: '' })
const sending = ref(false)
const sent = ref(false)
const error = ref(false)

const handleContact = async (e) => {
  sending.value = true
  sent.value = false
  error.value = false
  
  try {
    const formData = new FormData()
    formData.append('fullname', form.value.name)
    formData.append('email', form.value.email)
    formData.append('project_type', form.value.type)
    formData.append('message', form.value.message)
    
    const response = await fetch('https://formspree.io/f/mpwdbdjo', {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    })
    
    if (response.ok) {
      sent.value = true
      form.value = { name: '', email: '', type: '', message: '' }
      setTimeout(() => { sent.value = false }, 5000)
    } else {
      error.value = true
      setTimeout(() => { error.value = false }, 5000)
    }
  } catch (err) {
    error.value = true
    setTimeout(() => { error.value = false }, 5000)
  } finally {
    sending.value = false
  }
}
</script>

<style scoped>
/* HERO */
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  overflow: hidden;
  padding: 0 2rem;
}
.hero__bg {
  position: absolute;
  inset: 0;
  pointer-events: none;
}
.hero__glow {
  position: absolute;
  top: -20%;
  right: -10%;
  width: 700px;
  height: 700px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(201,168,76,0.08) 0%, transparent 70%);
}
.hero__grain {
  position: absolute;
  inset: 0;
  opacity: 0.03;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
  background-repeat: repeat;
  background-size: 256px;
}
.hero__inner {
  max-width: 1280px;
  margin: 0 auto;
  padding: 7rem 0 4rem;
  position: relative;
  z-index: 1;
  width: 100%;
}
.hero__content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}
.hero__text {
  display: flex;
  flex-direction: column;
}
.hero__label {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
  font-size: 0.72rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--gold);
}
.hero__label-line {
  display: block;
  width: 40px;
  height: 1px;
  background: var(--gold);
}
.hero__title {
  font-family: var(--font-display);
  font-size: clamp(3rem, 7vw, 6rem);
  font-weight: 300;
  line-height: 1.0;
  color: var(--white);
  margin-bottom: 2rem;
}
.hero__title em {
  font-style: italic;
  color: var(--gold);
}
.hero__sub {
  font-size: 1.1rem;
  color: var(--muted);
  max-width: 520px;
  line-height: 1.75;
  margin-bottom: 2.5rem;
}
.hero__actions {
  display: flex;
  gap: 1rem;
  margin-bottom: 4rem;
  flex-wrap: wrap;
}
.hero__stats {
  display: flex;
  align-items: center;
  gap: 2.5rem;
}
.hero__stat-num {
  display: block;
  font-family: var(--font-display);
  font-size: 2.5rem;
  font-weight: 500;
  color: var(--white);
  line-height: 1;
}
.hero__stat-label {
  font-size: 0.72rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--muted);
  margin-top: 4px;
  display: block;
}
.hero__stat-divider {
  width: 1px;
  height: 48px;
  background: var(--border);
}
.hero__image {
  display: flex;
  justify-content: center;
  align-items: center;
}
.hero__image img {
  max-width: 100%;
  height: auto;
  border-radius: var(--radius-md);
  box-shadow: 0 20px 60px rgba(0,0,0,0.5);
  border: 1px solid var(--border-light);
  object-fit: cover;
  width: 100%;
  max-height: 500px;
}
.hero__scroll {
  position: absolute;
  bottom: 2.5rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.65rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--muted);
}
.hero__scroll-line {
  width: 1px;
  height: 40px;
  background: linear-gradient(to bottom, var(--gold), transparent);
  animation: scrollLine 2s ease-in-out infinite;
}
@keyframes scrollLine {
  0% { opacity: 0; transform: scaleY(0); transform-origin: top; }
  50% { opacity: 1; transform: scaleY(1); }
  100% { opacity: 0; }
}

/* BUTTONS */
.btn {
  display: inline-flex;
  align-items: center;
  font-size: 0.78rem;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  padding: 0.85rem 2rem;
  border-radius: var(--radius-sm);
  transition: all var(--transition);
  cursor: pointer;
  text-decoration: none;
  border: none;
  font-family: inherit;
}
.btn--gold {
  background: var(--gold);
  color: var(--black);
}
.btn--gold:hover { background: var(--gold-light); transform: translateY(-2px); }
.btn--outline {
  border: 1px solid var(--border-light);
  color: var(--white-dim);
  background: transparent;
}
.btn--outline:hover { border-color: var(--gold); color: var(--gold); }
.btn--full { width: 100%; justify-content: center; }
.btn.loading { opacity: 0.6; pointer-events: none; }

/* SECTIONS */
.section__inner {
  max-width: 1280px;
  margin: 0 auto;
  padding: 7rem 2rem;
}
.section__header {
  margin-bottom: 4rem;
}
.section__header--center {
  text-align: center;
}
.section__eyebrow {
  display: inline-block;
  font-size: 0.72rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--gold);
  margin-bottom: 1rem;
}
.section__title {
  font-family: var(--font-display);
  font-size: clamp(2rem, 4vw, 3.5rem);
  font-weight: 300;
  color: var(--white);
  line-height: 1.1;
}

/* PROJECTS */
.projects__grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 1.5rem;
}
.project-card {
  display: block;
  text-decoration: none;
  color: inherit;
}
.project-card--large { grid-column: span 7; }
.project-card--small { grid-column: span 5; }
.project-card--medium { grid-column: span 6; }
.project-card__img {
  position: relative;
  border-radius: var(--radius-md);
  overflow: hidden;
  margin-bottom: 1.25rem;
}
.project-card--large .project-card__img { aspect-ratio: 16/10; }
.project-card--small .project-card__img { aspect-ratio: 4/3; }
.project-card--medium .project-card__img { aspect-ratio: 3/2; }
.project-card__img-inner {
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  align-items: flex-end;
  padding: 1.5rem;
  min-height: 280px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
.project-card__img-inner::before {
  content: '';
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1;
}
.project-card__category {
  position: relative;
  z-index: 2;
  font-size: 0.7rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: rgba(255,255,255,0.5);
  border: 1px solid rgba(255,255,255,0.15);
  padding: 0.3rem 0.8rem;
  border-radius: 100px;
  background: rgba(0, 0, 0, 0.5);
}
.project-card__overlay {
  position: absolute;
  inset: 0;
  background: rgba(0,0,0,0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity var(--transition);
  z-index: 3;
}
.project-card:hover .project-card__overlay { opacity: 1; }
.project-card__view {
  font-size: 0.85rem;
  letter-spacing: 0.08em;
  color: var(--gold);
  border-bottom: 1px solid var(--gold);
  padding-bottom: 2px;
}
.project-card__meta {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 0.5rem;
}
.project-card__year {
  font-family: var(--font-mono);
  font-size: 0.7rem;
  color: var(--muted);
}
.project-card__tag {
  font-size: 0.68rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--gold);
}
.project-card__title {
  font-family: var(--font-display);
  font-size: 1.4rem;
  font-weight: 400;
  color: var(--white);
  margin-bottom: 0.5rem;
}
.project-card__desc {
  font-size: 0.88rem;
  color: var(--muted);
  line-height: 1.65;
}
@media (max-width: 900px) {
  .projects__grid { grid-template-columns: 1fr; }
  .project-card--large, .project-card--small, .project-card--medium { grid-column: span 1; }
}

/* ABOUT */
.about {
  background: var(--surface);
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
}
.about__grid {
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 6rem;
  align-items: center;
}
.about__img-wrap {
  position: relative;
  display: inline-block;
}
.about__img-placeholder {
  width: 320px;
  height: 400px;
  border-radius: var(--radius-md);
  background: var(--surface-3);
  border: 1px solid var(--border-light);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}
.about__img-placeholder img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.about__initials {
  font-family: var(--font-display);
  font-size: 5rem;
  font-weight: 300;
  color: var(--gold-dim);
}
.about__img-accent {
  position: absolute;
  bottom: -16px;
  right: -16px;
  width: 160px;
  height: 160px;
  border: 1px solid var(--gold-dim);
  border-radius: var(--radius-sm);
  z-index: -1;
}
.about__chips {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1.5rem;
}
.chip {
  font-size: 0.7rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--light-muted);
  border: 1px solid var(--border-light);
  padding: 0.3rem 0.8rem;
  border-radius: 100px;
}
.about__content .section__title { margin-bottom: 1.5rem; }
.about__body {
  font-size: 0.95rem;
  color: var(--muted);
  line-height: 1.8;
  margin-bottom: 1.25rem;
}
.about__badges {
  display: flex;
  gap: 2rem;
  margin: 2rem 0;
  padding: 1.5rem 0;
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
}
.about__badge-num {
  display: block;
  font-family: var(--font-display);
  font-size: 2rem;
  color: var(--gold);
  line-height: 1;
}
.about__badge-label {
  font-size: 0.72rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--muted);
  margin-top: 4px;
  display: block;
}
@media (max-width: 900px) {
  .about__grid { grid-template-columns: 1fr; }
  .about__img-placeholder { width: 100%; height: 280px; }
}

/* SERVICES */
.services__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1.5rem;
}
.service-card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  padding: 2rem;
  transition: border-color var(--transition), transform var(--transition);
}
.service-card:hover {
  border-color: var(--gold-dim);
  transform: translateY(-4px);
}
.service-card__icon {
  font-size: 1.5rem;
  color: var(--gold);
  margin-bottom: 1.25rem;
}
.service-card__title {
  font-family: var(--font-display);
  font-size: 1.3rem;
  font-weight: 400;
  color: var(--white);
  margin-bottom: 0.75rem;
}
.service-card__desc {
  font-size: 0.88rem;
  color: var(--muted);
  line-height: 1.7;
  margin-bottom: 1.25rem;
}
.service-card__list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.service-card__list li {
  font-size: 0.82rem;
  color: var(--light-muted);
  padding-left: 1rem;
  position: relative;
}
.service-card__list li::before {
  content: '—';
  position: absolute;
  left: 0;
  color: var(--gold-dim);
}

/* PROCESS */
.process {
  background: var(--surface);
  border-top: 1px solid var(--border);
}
.process__steps {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0;
  position: relative;
}
.process__step {
  padding: 2rem 2rem 2rem 0;
  border-left: 1px solid var(--border);
  padding-left: 2rem;
  position: relative;
}
.process__step:first-child { border-left: none; padding-left: 0; }
.process__step-num {
  font-family: var(--font-mono);
  font-size: 0.7rem;
  color: var(--gold-dim);
  letter-spacing: 0.1em;
  margin-bottom: 1rem;
}
.process__step-title {
  font-family: var(--font-display);
  font-size: 1.5rem;
  font-weight: 400;
  color: var(--white);
  margin-bottom: 0.75rem;
}
.process__step-desc {
  font-size: 0.85rem;
  color: var(--muted);
  line-height: 1.7;
}
@media (max-width: 768px) {
  .process__steps { grid-template-columns: 1fr; }
  .process__step { border-left: none; padding-left: 0; border-top: 1px solid var(--border); padding-top: 2rem; }
  .process__step:first-child { border-top: none; padding-top: 0; }
}

/* TESTIMONIALS */
.testimonials__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
}
.testimonial-card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  padding: 2rem;
}
.testimonial-card__quote {
  font-family: var(--font-display);
  font-size: 1.1rem;
  font-style: italic;
  color: var(--white-dim);
  line-height: 1.7;
  margin-bottom: 1.5rem;
}
.testimonial-card__author {
  display: flex;
  align-items: center;
  gap: 1rem;
}
.testimonial-card__avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: var(--surface-3);
  border: 1px solid var(--border-light);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-display);
  font-size: 0.85rem;
  color: var(--gold);
  flex-shrink: 0;
}
.testimonial-card__name {
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--white);
}
.testimonial-card__role {
  font-size: 0.78rem;
  color: var(--muted);
  margin-top: 2px;
}

/* CONTACT */
.contact {
  background: var(--off-black);
  border-top: 1px solid var(--border);
}
.contact__wrap {
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 6rem;
  align-items: start;
}
.contact__title {
  font-family: var(--font-display);
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 300;
  color: var(--white);
  line-height: 1.15;
  margin-bottom: 1rem;
}
.contact__sub {
  font-size: 0.95rem;
  color: var(--muted);
  line-height: 1.75;
  margin-bottom: 2rem;
}
.contact__link {
  display: block;
  font-size: 1rem;
  color: var(--gold);
  text-decoration: underline;
  text-underline-offset: 4px;
  margin-bottom: 0.5rem;
}
.contact__location {
  font-size: 0.82rem;
  color: var(--muted);
}
.contact__form {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}
.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.form-group label {
  font-size: 0.72rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--light-muted);
}
.form-group input,
.form-group select,
.form-group textarea {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius-sm);
  padding: 0.85rem 1rem;
  font-size: 0.9rem;
  color: var(--white);
  transition: border-color var(--transition);
  resize: vertical;
  font-family: inherit;
}
.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--gold-dim);
}
.form-group select option { background: var(--surface); }
.contact__success {
  font-size: 0.85rem;
  color: #5cb85c;
  text-align: center;
  padding: 0.5rem;
  background: rgba(92, 184, 92, 0.1);
  border-radius: var(--radius-sm);
  border: 1px solid rgba(92, 184, 92, 0.2);
}
.contact__error {
  font-size: 0.85rem;
  color: #d9534f;
  text-align: center;
  padding: 0.5rem;
  background: rgba(217, 83, 79, 0.1);
  border-radius: var(--radius-sm);
  border: 1px solid rgba(217, 83, 79, 0.2);
}
@media (max-width: 900px) {
  .contact__wrap { grid-template-columns: 1fr; gap: 3rem; }
}

/* RESPONSIVE HERO */
@media (max-width: 1024px) {
  .hero__content {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
  .hero__image {
    order: -1;
  }
  .hero__image img {
    max-height: 350px;
  }
  .hero__text {
    text-align: center;
    align-items: center;
  }
  .hero__sub {
    max-width: 100%;
  }
  .hero__actions {
    justify-content: center;
  }
  .hero__stats {
    justify-content: center;
  }
}

@media (max-width: 768px) {
  .hero__inner {
    padding: 5rem 0 4rem;
  }
  .hero__title {
    font-size: clamp(2.5rem, 10vw, 4rem);
  }
  .hero__image img {
    max-height: 250px;
  }
  .hero__stats {
    flex-wrap: wrap;
    gap: 1.5rem;
    justify-content: center;
  }
  .hero__stat-divider {
    display: none;
  }
}
</style>