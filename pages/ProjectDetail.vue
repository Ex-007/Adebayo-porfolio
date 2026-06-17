<template>
  <div class="project-detail">
    <!-- HERO -->
    <section class="pd-hero">
      <div class="pd-hero__bg">
        <div class="pd-hero__grain"></div>
        <div class="pd-hero__glow"></div>
      </div>
      <div class="pd-hero__inner">
        <div class="pd-hero__breadcrumb">
          <NuxtLink to="/">Work</NuxtLink>
          <span>/</span>
          <span>{{ project.category }}</span>
        </div>
        <div class="pd-hero__meta">
          <span class="pd-hero__tag">{{ project.type }}</span>
          <span class="pd-hero__year">{{ project.year }}</span>
        </div>
        <h1 class="pd-hero__title">{{ project.title }}</h1>
        <p class="pd-hero__sub">{{ project.tagline || project.desc }}</p>
        <div class="pd-hero__chips">
          <span class="chip" v-for="tool in project.tools" :key="tool">{{ tool }}</span>
        </div>
      </div>
      <div class="pd-hero__scroll">
        <span>Explore</span>
        <div class="pd-hero__scroll-line"></div>
      </div>
    </section>

    <!-- OVERVIEW -->
    <section class="pd-section">
      <div class="pd-inner">
        <div class="pd-overview">
          <div class="pd-overview__stats">
            <div class="pd-stat" v-for="s in project.stats" :key="s.label">
              <span class="pd-stat__num">{{ s.value }}</span>
              <span class="pd-stat__label">{{ s.label }}</span>
            </div>
          </div>
          <div class="pd-overview__content">
            <div class="pd-block">
              <h2 class="pd-block__title">Project Overview</h2>
              <p class="pd-block__body">{{ project.overview }}</p>
            </div>
            <div class="pd-block">
              <h2 class="pd-block__title">The Challenge</h2>
              <p class="pd-block__body">{{ project.challenge }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- MOCKUP BANNER -->
    <div class="pd-banner">
      <div class="pd-banner__inner" :style="{ backgroundImage: `url(${project.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }">
        <div class="pd-banner__overlay"></div>
        <div class="pd-banner__placeholder">
          <span class="pd-banner__label">{{ project.title }}</span>
          <span class="pd-banner__sub">UI Preview</span>
        </div>
      </div>
    </div>

    <!-- PROCESS -->
    <section class="pd-section pd-section--alt">
      <div class="pd-inner">
        <div class="pd-block">
          <h2 class="pd-block__title">Design Process</h2>
          <p class="pd-block__body">{{ project.process }}</p>
        </div>
        <div class="pd-phases">
          <div class="pd-phase" v-for="phase in project.phases" :key="phase.title">
            <div class="pd-phase__icon">{{ phase.icon }}</div>
            <h3 class="pd-phase__title">{{ phase.title }}</h3>
            <p class="pd-phase__desc">{{ phase.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- OUTCOMES -->
    <section class="pd-section">
      <div class="pd-inner">
        <div class="pd-block">
          <h2 class="pd-block__title">Outcomes &amp; Impact</h2>
          <p class="pd-block__body">{{ project.outcomes }}</p>
        </div>
        <div class="pd-results">
          <div class="pd-result" v-for="r in project.results" :key="r.label">
            <span class="pd-result__num">{{ r.value }}</span>
            <span class="pd-result__label">{{ r.label }}</span>
            <span class="pd-result__desc">{{ r.desc }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- NAV -->
    <section class="pd-nav">
      <div class="pd-inner">
        <div class="pd-nav__inner">
          <NuxtLink to="/" class="pd-nav__back">
            <span>←</span>
            <span>Back to All Work</span>
          </NuxtLink>
          <div class="pd-nav__next">
            <span class="pd-nav__next-label">Next Project</span>
            <NuxtLink 
              v-if="nextProject" 
              :to="`/ProjectDetail?id=${nextProject.id}`" 
              class="pd-nav__next-title"
            >
              {{ nextProject.title }} →
            </NuxtLink>
            <span v-else class="pd-nav__next-title pd-nav__next-title--disabled">No more projects</span>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

useHead({ title: 'Project Detail | Adebayo Rukayat Portfolio' })

const route = useRoute()
const id = Number(route.query.id) || 1

// All 18 projects from the main page with full details
const allProjects = {
  1: {
    id: 1,
    title: 'Digital Banking Mobile Application',
    desc: 'A comprehensive payments and banking platform serving 2M+ users across West Africa.',
    category: 'Fintech / Mobile',
    type: 'End-to-End Product Design',
    year: '2024',
    image: 'https://media.base44.com/images/public/user_6a310e2b8f4a880e02e679e1/bd66ed0a6_sample6.webp',
    tagline: 'Reimagining everyday banking for 2 million users across West Africa.',
    tools: ['Figma', 'Principle', 'Maze', 'FigJam', 'Zeplin'],
    stats: [
      { value: '2M+', label: 'Active Users' },
      { value: '4.8★', label: 'App Store Rating' },
      { value: '6 months', label: 'Project Duration' },
      { value: '38%', label: 'Retention Increase' },
    ],
    overview: 'A comprehensive digital banking platform serving over 2 million users across West Africa. The challenge was to unify fragmented financial services — payments, savings, investments, and lending — into a single cohesive product that felt simple for everyday users while powerful enough for financial power users.',
    challenge: 'The existing product suffered from severe cognitive overload, with 17 different entry points on the home screen and an average session abandonment rate of 67%. Users were leaving mid-transaction because they couldn\'t find core features.',
    process: 'I led a 12-week discovery sprint that included 48 user interviews across three markets, competitive benchmarking across 22 fintech products, and an extensive heuristic audit. This informed a complete information architecture restructure.',
    phases: [
      { icon: '◎', title: 'Research', desc: '48 user interviews, diary studies, and contextual inquiry across Lagos, Accra, and Nairobi.' },
      { icon: '◇', title: 'Architecture', desc: 'Card sorting, tree testing, and co-design workshops to restructure the entire navigation model.' },
      { icon: '◈', title: 'Design', desc: '220+ screens across 6 core user journeys, from onboarding to advanced savings goals.' },
      { icon: '◉', title: 'Testing', desc: 'Moderated usability testing with 34 participants and A/B testing of 3 critical flows.' },
    ],
    outcomes: 'The redesigned platform launched to a 94% positive reception. Transaction completion rates increased by 52% in the first month, and the app climbed from a 3.2 to a 4.8 star rating.',
    results: [
      { value: '+52%', label: 'Task Completion', desc: 'Increase in transaction success rates' },
      { value: '-43%', label: 'Support Tickets', desc: 'Reduction in UX-related support queries' },
      { value: '+38%', label: 'User Retention', desc: 'Improvement in 30-day retention rate' },
      { value: '4.8★', label: 'App Rating', desc: 'Up from 3.2 at launch' },
    ],
  },
  2: {
    id: 2,
    title: 'Design System Creation',
    desc: 'A scalable design system with tokens, components, and documentation.',
    category: 'SaaS / Web',
    type: 'Design System',
    year: '2024',
    image: 'https://media.base44.com/images/public/user_6a310e2b8f4a880e02e679e1/904368807_sample5.webp',
    tagline: 'A scalable design system with tokens, components, and documentation.',
    tools: ['Figma', 'Storybook', 'Framer', 'Notion'],
    stats: [
      { value: '500+', label: 'Enterprise Users' },
      { value: '4.9★', label: 'User Rating' },
      { value: '4 months', label: 'Project Duration' },
      { value: '45%', label: 'Efficiency Gain' },
    ],
    overview: 'A comprehensive design system built to power multiple products across a growing organization. The system includes design tokens, component libraries, and extensive documentation.',
    challenge: 'The organization had 5 separate products with inconsistent UI patterns, leading to brand fragmentation and development inefficiency.',
    process: 'I conducted a thorough audit of existing interfaces, defined design principles, and built a component-based architecture that could scale across all products.',
    phases: [
      { icon: '◎', title: 'Audit', desc: 'Comprehensive UI audit across 5 products to identify patterns and inconsistencies.' },
      { icon: '◇', title: 'Define', desc: 'Established design tokens, color system, typography scale, and spacing rules.' },
      { icon: '◈', title: 'Build', desc: 'Created 150+ components with dark/light modes and accessibility standards.' },
      { icon: '◉', title: 'Document', desc: 'Comprehensive documentation with usage guidelines and interactive examples.' },
    ],
    outcomes: 'The design system was adopted across 5 product teams, reducing development time by 45% and significantly improving user satisfaction scores.',
    results: [
      { value: '+45%', label: 'Dev Efficiency', desc: 'Faster implementation across teams' },
      { value: '-60%', label: 'Design Debt', desc: 'Reduction in technical debt' },
      { value: '+42%', label: 'User Adoption', desc: 'Increase in daily active users' },
      { value: '4.9★', label: 'User Rating', desc: 'From 3.5 to 4.9 stars' },
    ],
  },
  3: {
    id: 3,
    title: 'AI Nutrition Mobile App',
    desc: 'AI-powered nutrition tracking app for personalized health goals.',
    category: 'Mobile / Impact',
    type: 'UX Research + Design',
    year: '2023',
    image: 'https://media.base44.com/images/public/user_6a310e2b8f4a880e02e679e1/ec86d9734_sample4.webp',
    tagline: 'AI-powered nutrition tracking app for personalized health goals.',
    tools: ['Figma', 'Principle', 'After Effects', 'Maze'],
    stats: [
      { value: '100K+', label: 'Downloads' },
      { value: '4.7★', label: 'App Rating' },
      { value: '3 months', label: 'Project Duration' },
      { value: '67%', label: 'Daily Engagement' },
    ],
    overview: 'An AI-powered nutrition tracking app that helps users achieve personalized health goals through intelligent meal recommendations and tracking.',
    challenge: 'Users found existing nutrition apps too complex and time-consuming to log their meals consistently.',
    process: 'I conducted user research to understand eating habits and pain points, then designed an intuitive interface with AI-powered features.',
    phases: [
      { icon: '◎', title: 'Research', desc: 'User interviews and diary studies to understand eating habits and tracking challenges.' },
      { icon: '◇', title: 'Strategy', desc: 'Defined AI integration strategy and core user journeys.' },
      { icon: '◈', title: 'Design', desc: 'Created an intuitive interface with quick-log features and visual feedback.' },
      { icon: '◉', title: 'Test', desc: 'Usability testing with 20 participants to refine the experience.' },
    ],
    outcomes: 'The app achieved 67% daily engagement rate with users spending an average of 8 minutes per session tracking their nutrition.',
    results: [
      { value: '+67%', label: 'Daily Engagement', desc: 'Users return daily to track nutrition' },
      { value: '4.7★', label: 'App Rating', desc: 'Positive reception in app stores' },
      { value: '100K+', label: 'Downloads', desc: 'Strong market adoption' },
      { value: '3 min', label: 'Log Time', desc: 'Average time to log a meal' },
    ],
  },
  4: {
    id: 4,
    title: 'Logistic Tracking Mobile App',
    desc: 'Real-time fleet tracking with health scores and route optimization.',
    category: 'Enterprise / SaaS',
    type: 'Product Design',
    year: '2023',
    image: 'https://media.base44.com/images/public/user_6a310e2b8f4a880e02e679e1/3f82adb86_sample3.webp',
    tagline: 'Real-time fleet tracking with health scores and route optimization.',
    tools: ['Figma', 'Sketch', 'InVision', 'Jira'],
    stats: [
      { value: '200+', label: 'Fleet Vehicles' },
      { value: '45%', label: 'Cost Savings' },
      { value: '6 months', label: 'Project Duration' },
      { value: '98%', label: 'Uptime' },
    ],
    overview: 'A comprehensive fleet tracking and management platform that provides real-time visibility, route optimization, and vehicle health monitoring.',
    challenge: 'Fleet managers were struggling with inefficient routes, unplanned maintenance, and lack of real-time visibility into operations.',
    process: 'I worked closely with fleet managers and drivers to understand their daily challenges and designed a solution that streamlined their workflows.',
    phases: [
      { icon: '◎', title: 'Discovery', desc: 'Shadowed fleet managers and drivers to understand daily operations.' },
      { icon: '◇', title: 'Strategy', desc: 'Defined core features including tracking, alerts, and analytics.' },
      { icon: '◈', title: 'Design', desc: 'Created an intuitive dashboard with real-time data visualization.' },
      { icon: '◉', title: 'Deploy', desc: 'Pilot testing with 20 vehicles before full rollout.' },
    ],
    outcomes: 'The platform reduced fuel costs by 45% through optimized routing and improved vehicle maintenance scheduling.',
    results: [
      { value: '45%', label: 'Fuel Savings', desc: 'Reduced through route optimization' },
      { value: '200+', label: 'Vehicles', desc: 'Fleet vehicles managed' },
      { value: '98%', label: 'Uptime', desc: 'System reliability' },
      { value: '-60%', label: 'Downtime', desc: 'Reduction in vehicle downtime' },
    ],
  },
  5: {
    id: 5,
    title: 'Recruitment SaaS Dashboard',
    desc: 'Streamlined hiring platform with interview management and analytics.',
    category: 'Design System',
    type: 'Systems Design',
    year: '2023',
    image: 'https://media.base44.com/images/public/user_6a310e2b8f4a880e02e679e1/d55344b09_sample2.webp',
    tagline: 'Streamlined hiring platform with interview management and analytics.',
    tools: ['Figma', 'Miro', 'Notion', 'Storybook'],
    stats: [
      { value: '50+', label: 'Enterprise Clients' },
      { value: '70%', label: 'Faster Hiring' },
      { value: '4 months', label: 'Project Duration' },
      { value: '95%', label: 'Client Satisfaction' },
    ],
    overview: 'A comprehensive recruitment platform that streamlines the entire hiring process from job posting to candidate selection.',
    challenge: 'Recruiters were managing multiple tools and spreadsheets, leading to inefficiencies and lost candidate data.',
    process: 'I designed a unified platform that brought all recruitment activities into one place with intuitive workflows.',
    phases: [
      { icon: '◎', title: 'Research', desc: 'Interviewed recruiters and hiring managers to identify pain points.' },
      { icon: '◇', title: 'Define', desc: 'Mapped the complete hiring journey and identified key features.' },
      { icon: '◈', title: 'Design', desc: 'Created a clean, data-rich dashboard with visual analytics.' },
      { icon: '◉', title: 'Validate', desc: 'Tested with 5 companies before full deployment.' },
    ],
    outcomes: 'The platform reduced time-to-hire by 70% and increased recruiter productivity by 50%.',
    results: [
      { value: '70%', label: 'Faster Hiring', desc: 'Reduced time-to-hire' },
      { value: '50+', label: 'Clients', desc: 'Enterprise clients served' },
      { value: '95%', label: 'Satisfaction', desc: 'Client satisfaction rate' },
      { value: '50%', label: 'Productivity', desc: 'Recruiter efficiency gain' },
    ],
  },
  6: {
    id: 6,
    title: 'Fintech Dashboard Design',
    desc: 'Modern Financial Dashboard with transaction tracking and analytics.',
    category: 'Design System',
    type: 'Systems Design',
    year: '2023',
    image: 'https://media.base44.com/images/public/user_6a310e2b8f4a880e02e679e1/8d4870832_samples1.webp',
    tagline: 'Modern Financial Dashboard with transaction tracking and analytics.',
    tools: ['Figma', 'Tableau', 'D3.js', 'Adobe XD'],
    stats: [
      { value: '10K+', label: 'Daily Users' },
      { value: '4.6★', label: 'User Rating' },
      { value: '5 months', label: 'Project Duration' },
      { value: '83%', label: 'Task Efficiency' },
    ],
    overview: 'A modern financial dashboard that provides real-time analytics, transaction tracking, and comprehensive financial reporting.',
    challenge: 'Financial teams struggled to get a holistic view of their data across multiple disconnected systems.',
    process: 'I designed a unified dashboard that consolidated data from multiple sources into a clean, actionable interface.',
    phases: [
      { icon: '◎', title: 'Research', desc: 'Analyzed financial workflows and reporting needs.' },
      { icon: '◇', title: 'Strategy', desc: 'Defined key metrics and visualization approaches.' },
      { icon: '◈', title: 'Design', desc: 'Created interactive dashboards with drill-down capabilities.' },
      { icon: '◉', title: 'Refine', desc: 'Iterated based on user feedback and performance testing.' },
    ],
    outcomes: 'Users reported an 83% increase in task efficiency with the new dashboard, saving an average of 8 hours per week.',
    results: [
      { value: '83%', label: 'Efficiency', desc: 'Task completion improvement' },
      { value: '10K+', label: 'Daily Users', desc: 'Active daily users' },
      { value: '4.6★', label: 'Rating', desc: 'User satisfaction' },
      { value: '8 hrs', label: 'Saved', desc: 'Weekly time saved per user' },
    ],
  },
  7: {
    id: 7,
    title: 'Medical Appointment Booking App',
    desc: 'Streamlined platform for booking and managing medical appointments with specialist search and symptom input.',
    category: 'Design System',
    type: 'Systems Design',
    year: '2023',
    image: 'https://media.base44.com/images/public/6a310f00b33f3584f5c0d82e/4b9cd36fc_sample12.webp',
    tagline: 'Streamlined platform for booking and managing medical appointments with specialist search.',
    tools: ['Figma', 'InVision', 'Miro', 'UserTesting'],
    stats: [
      { value: '50K+', label: 'Appointments' },
      { value: '4.8★', label: 'App Rating' },
      { value: '3 months', label: 'Project Duration' },
      { value: '92%', label: 'Patient Satisfaction' },
    ],
    overview: 'A comprehensive medical appointment booking platform that connects patients with specialists, manages schedules, and streamlines the entire healthcare journey.',
    challenge: 'Patients struggled with long wait times, difficult booking processes, and lack of specialist information.',
    process: 'I designed an intuitive booking flow that allows patients to search by specialty, location, and availability, with seamless appointment management.',
    phases: [
      { icon: '◎', title: 'Research', desc: 'Interviewed patients and healthcare providers to identify pain points.' },
      { icon: '◇', title: 'Define', desc: 'Mapped patient journey from symptom input to appointment confirmation.' },
      { icon: '◈', title: 'Design', desc: 'Created a clean, accessible interface with smart search and booking features.' },
      { icon: '◉', title: 'Test', desc: 'Usability testing with 30 patients and 10 healthcare providers.' },
    ],
    outcomes: 'The platform reduced appointment booking time by 70% and increased patient satisfaction to 92%.',
    results: [
      { value: '70%', label: 'Faster Booking', desc: 'Reduced appointment setup time' },
      { value: '50K+', label: 'Appointments', desc: 'Booked through the platform' },
      { value: '92%', label: 'Satisfaction', desc: 'Patient satisfaction rate' },
      { value: '4.8★', label: 'Rating', desc: 'App store rating' },
    ],
  },
  8: {
    id: 8,
    title: 'Skincare E-commerce App - SOLE',
    desc: 'Luxury skincare shopping experience with product details and seamless checkout.',
    category: 'Design System',
    type: 'Systems Design',
    year: '2023',
    image: 'https://media.base44.com/images/public/6a310f00b33f3584f5c0d82e/22af9ca31_sample11.webp',
    tagline: 'Luxury skincare shopping experience with product details and seamless checkout.',
    tools: ['Figma', 'Shopify', 'After Effects', 'Sketch'],
    stats: [
      { value: '200K+', label: 'Monthly Visitors' },
      { value: '4.9★', label: 'Store Rating' },
      { value: '4 months', label: 'Project Duration' },
      { value: '45%', label: 'Conversion Rate' },
    ],
    overview: 'A luxury skincare e-commerce app that delivers a premium shopping experience with detailed product information, personalized recommendations, and seamless checkout.',
    challenge: 'The existing store had poor mobile experience with high cart abandonment rates and low conversion.',
    process: 'I designed a mobile-first experience that showcases products beautifully with rich media, detailed ingredients, and customer reviews.',
    phases: [
      { icon: '◎', title: 'Research', desc: 'Analyzed e-commerce trends and customer shopping behavior.' },
      { icon: '◇', title: 'Strategy', desc: 'Defined product discovery and purchase journey.' },
      { icon: '◈', title: 'Design', desc: 'Created a visually stunning interface with smooth animations.' },
      { icon: '◉', title: 'Optimize', desc: 'A/B tested checkout flow to maximize conversion.' },
    ],
    outcomes: 'The new app increased conversion rate by 45% and reduced cart abandonment by 35%.',
    results: [
      { value: '45%', label: 'Conversion', desc: 'Increase in conversion rate' },
      { value: '200K+', label: 'Visitors', desc: 'Monthly store visitors' },
      { value: '4.9★', label: 'Rating', desc: 'Store rating' },
      { value: '35%', label: 'Abandonment', desc: 'Reduction in cart abandonment' },
    ],
  },
  9: {
    id: 9,
    title: 'Personal Finance Mobile App',
    desc: 'Smart Finance Tracker with spending analytics, saving goals and bill management.',
    category: 'Fintech',
    type: 'Systems Design',
    year: '2023',
    image: 'https://media.base44.com/images/public/6a310f00b33f3584f5c0d82e/a48ac797e_sample10.webp',
    tagline: 'Smart Finance Tracker with spending analytics, saving goals and bill management.',
    tools: ['Figma', 'Principle', 'D3.js', 'Firebase'],
    stats: [
      { value: '300K+', label: 'Active Users' },
      { value: '4.8★', label: 'App Rating' },
      { value: '5 months', label: 'Project Duration' },
      { value: '56%', label: 'Savings Growth' },
    ],
    overview: 'A comprehensive personal finance app that helps users track spending, set savings goals, manage bills, and achieve financial wellness.',
    challenge: 'Users found personal finance management overwhelming with multiple accounts, bills, and spending categories to track.',
    process: 'I designed a simple yet powerful interface that gamifies savings goals and provides clear spending insights.',
    phases: [
      { icon: '◎', title: 'Research', desc: 'Studied personal finance habits and pain points with existing tools.' },
      { icon: '◇', title: 'Strategy', desc: 'Defined core features: tracking, goals, bills, and analytics.' },
      { icon: '◈', title: 'Design', desc: 'Created an intuitive dashboard with visual spending insights.' },
      { icon: '◉', title: 'Test', desc: 'Beta tested with 500 users to refine the experience.' },
    ],
    outcomes: 'Users saved an average of 56% more with the app, and engagement increased by 40% month-over-month.',
    results: [
      { value: '56%', label: 'Savings Growth', desc: 'Average user savings increase' },
      { value: '300K+', label: 'Users', desc: 'Active monthly users' },
      { value: '4.8★', label: 'Rating', desc: 'App store rating' },
      { value: '40%', label: 'Engagement', desc: 'Monthly engagement increase' },
    ],
  },
  10: {
    id: 10,
    title: 'Heart Rate and ECG Health App',
    desc: 'Real-time monitoring and analysis of heart rate and ECG data with weekly health reports.',
    category: 'Wellness',
    type: 'Systems Design',
    year: '2023',
    image: 'https://media.base44.com/images/public/6a310f00b33f3584f5c0d82e/44691b96a_sample9.webp',
    tagline: 'Real-time monitoring and analysis of heart rate and ECG data with weekly health reports.',
    tools: ['Figma', 'Adobe XD', 'After Effects', 'HealthKit'],
    stats: [
      { value: '150K+', label: 'Active Users' },
      { value: '4.7★', label: 'App Rating' },
      { value: '4 months', label: 'Project Duration' },
      { value: '89%', label: 'User Retention' },
    ],
    overview: 'A health monitoring app that provides real-time heart rate and ECG analysis with weekly reports and health insights.',
    challenge: 'Health data visualization needed to be clear, accessible, and actionable for users without medical backgrounds.',
    process: 'I designed a clean, data-rich interface that presents complex health metrics in an understandable and actionable format.',
    phases: [
      { icon: '◎', title: 'Research', desc: 'Consulted with healthcare professionals and studied health data visualization.' },
      { icon: '◇', title: 'Define', desc: 'Created information hierarchy for health metrics and reports.' },
      { icon: '◈', title: 'Design', desc: 'Designed intuitive charts and visual health indicators.' },
      { icon: '◉', title: 'Validate', desc: 'Tested with users and medical professionals for accuracy.' },
    ],
    outcomes: 'The app achieved 89% retention rate with users checking their health metrics daily.',
    results: [
      { value: '89%', label: 'Retention', desc: 'Monthly user retention rate' },
      { value: '150K+', label: 'Users', desc: 'Active users' },
      { value: '4.7★', label: 'Rating', desc: 'App store rating' },
      { value: '92%', label: 'Accuracy', desc: 'Data accuracy rate' },
    ],
  },
  11: {
    id: 11,
    title: 'Mental Health and Mood Tracking App',
    desc: 'Mood tracking, guided relaxation and personalized mental wellness sessions.',
    category: 'Wellness',
    type: 'Systems Design',
    year: '2023',
    image: 'https://media.base44.com/images/public/6a310f00b33f3584f5c0d82e/8c73e1a81_sample8.webp',
    tagline: 'Mood tracking, guided relaxation and personalized mental wellness sessions.',
    tools: ['Figma', 'Principle', 'After Effects', 'Firebase'],
    stats: [
      { value: '200K+', label: 'Downloads' },
      { value: '4.8★', label: 'App Rating' },
      { value: '3 months', label: 'Project Duration' },
      { value: '76%', label: 'Daily Active Users' },
    ],
    overview: 'A mental wellness app that helps users track their mood, practice guided relaxation, and access personalized wellness sessions.',
    challenge: 'Mental health support needed to be accessible, non-intimidating, and personalized for diverse user needs.',
    process: 'I designed a warm, inviting interface with daily check-ins, mood tracking, and personalized content recommendations.',
    phases: [
      { icon: '◎', title: 'Research', desc: 'Researched mental wellness practices and user needs.' },
      { icon: '◇', title: 'Strategy', desc: 'Defined mood tracking and content recommendation system.' },
      { icon: '◈', title: 'Design', desc: 'Created a calming interface with intuitive mood tracking.' },
      { icon: '◉', title: 'Test', desc: 'Usability testing with mental health professionals and users.' },
    ],
    outcomes: 'Users reported 76% daily engagement and significant improvements in mood tracking consistency.',
    results: [
      { value: '76%', label: 'Daily Active', desc: 'Daily engagement rate' },
      { value: '200K+', label: 'Downloads', desc: 'App downloads' },
      { value: '4.8★', label: 'Rating', desc: 'App store rating' },
      { value: '65%', label: 'Mood Improvement', desc: 'User-reported mood improvement' },
    ],
  },
  12: {
    id: 12,
    title: 'Travel Booking Mobile App',
    desc: 'Intuitive travel booking with flexible date search, calendar picker, and profile management.',
    category: 'Travel',
    type: 'Systems Design',
    year: '2023',
    image: 'https://media.base44.com/images/public/6a310f00b33f3584f5c0d82e/56c2592fb_sample7.webp',
    tagline: 'Intuitive travel booking with flexible date search, calendar picker, and profile management.',
    tools: ['Figma', 'Sketch', 'Protopie', 'Firebase'],
    stats: [
      { value: '100K+', label: 'Bookings' },
      { value: '4.7★', label: 'App Rating' },
      { value: '5 months', label: 'Project Duration' },
      { value: '68%', label: 'Return Users' },
    ],
    overview: 'An intuitive travel booking app that makes planning and booking trips seamless with flexible search, calendar views, and personalized profiles.',
    challenge: 'Users found travel booking overwhelming with too many options and complex search filters.',
    process: 'I designed a simplified booking flow with smart search, flexible date selection, and easy profile management.',
    phases: [
      { icon: '◎', title: 'Research', desc: 'Analyzed travel booking patterns and user frustrations.' },
      { icon: '◇', title: 'Strategy', desc: 'Designed simplified search and booking flows.' },
      { icon: '◈', title: 'Design', desc: 'Created visual search with rich media and intuitive filtering.' },
      { icon: '◉', title: 'Test', desc: 'A/B tested booking flow to maximize conversion.' },
    ],
    outcomes: 'The app achieved 68% return user rate with an average booking time of under 3 minutes.',
    results: [
      { value: '68%', label: 'Return Users', desc: 'User retention rate' },
      { value: '100K+', label: 'Bookings', desc: 'Total bookings' },
      { value: '4.7★', label: 'Rating', desc: 'App store rating' },
      { value: '3 min', label: 'Booking Time', desc: 'Average booking time' },
    ],
  },
  13: {
    id: 13,
    title: 'Crypto Exchange and DeFi App',
    desc: 'Dark-themed crypto trading app with instant token swaps, deposits via QR, and easy send flow.',
    category: 'Crypto',
    type: 'Systems Design',
    year: '2023',
    image: 'https://media.base44.com/images/public/6a310f00b33f3584f5c0d82e/46bf2a26b_cryptoexchangeappui.webp',
    tagline: 'Dark-themed crypto trading app with instant token swaps, deposits via QR, and easy send flow.',
    tools: ['Figma', 'Adobe XD', 'Principle', 'Web3'],
    stats: [
      { value: '50K+', label: 'Traders' },
      { value: '4.6★', label: 'App Rating' },
      { value: '4 months', label: 'Project Duration' },
      { value: '$100M+', label: 'Trading Volume' },
    ],
    overview: 'A dark-themed crypto trading app that provides seamless token swaps, QR deposits, and an intuitive send/receive flow for DeFi users.',
    challenge: 'Crypto interfaces are traditionally complex and intimidating for new users.',
    process: 'I designed a clean, dark-themed interface that simplifies complex crypto operations while maintaining a professional trading environment.',
    phases: [
      { icon: '◎', title: 'Research', desc: 'Studied crypto user behaviors and common pain points.' },
      { icon: '◇', title: 'Strategy', desc: 'Defined core features: swaps, deposits, sends, and portfolio.' },
      { icon: '◈', title: 'Design', desc: 'Created a sleek dark interface with clear visual hierarchy.' },
      { icon: '◉', title: 'Validate', desc: 'Tested with experienced and beginner crypto users.' },
    ],
    outcomes: 'The app processed over $100M in trading volume with a 4.6★ rating from users.',
    results: [
      { value: '$100M+', label: 'Volume', desc: 'Total trading volume' },
      { value: '50K+', label: 'Traders', desc: 'Active traders' },
      { value: '4.6★', label: 'Rating', desc: 'App store rating' },
      { value: '35%', label: 'New Users', desc: 'New user acquisition' },
    ],
  },
  14: {
    id: 14,
    title: 'Real Estate Discovery App',
    desc: 'Elegant home search with rich filters, price range charts and immersive property visuals.',
    category: 'Real Estate',
    type: 'Systems Design',
    year: '2023',
    image: 'https://media.base44.com/images/public/6a310f00b33f3584f5c0d82e/3d7b749a6_realestateappui.webp',
    tagline: 'Elegant home search with rich filters, price range charts and immersive property visuals.',
    tools: ['Figma', 'Sketch', 'Protopie', 'Mapbox'],
    stats: [
      { value: '75K+', label: 'Properties' },
      { value: '4.8★', label: 'App Rating' },
      { value: '5 months', label: 'Project Duration' },
      { value: '60%', label: 'Inquiry Rate' },
    ],
    overview: 'An elegant real estate discovery app that makes property search intuitive with rich filters, price range visualization, and immersive property media.',
    challenge: 'Property search needed to balance comprehensive filtering with a simple, visual experience.',
    process: 'I designed a sophisticated search experience with visual price charts, interactive maps, and rich property media.',
    phases: [
      { icon: '◎', title: 'Research', desc: 'Studied property search behaviors and real estate trends.' },
      { icon: '◇', title: 'Strategy', desc: 'Defined filter hierarchy and property display approach.' },
      { icon: '◈', title: 'Design', desc: 'Created a visually rich interface with interactive maps and galleries.' },
      { icon: '◉', title: 'Test', desc: 'Tested with real estate professionals and home seekers.' },
    ],
    outcomes: 'The app achieved a 60% inquiry rate with users spending an average of 12 minutes per session.',
    results: [
      { value: '60%', label: 'Inquiry Rate', desc: 'Property inquiry conversion' },
      { value: '75K+', label: 'Properties', desc: 'Listed properties' },
      { value: '4.8★', label: 'Rating', desc: 'App store rating' },
      { value: '12 min', label: 'Session', desc: 'Average session duration' },
    ],
  },
  15: {
    id: 15,
    title: 'Multi-Brand Marketplace App',
    desc: 'Trending brands, smart search, promotions, and seamless multi-brand shopping experience.',
    category: 'E-commerce',
    type: 'Systems Design',
    year: '2026',
    image: 'https://media.base44.com/images/public/6a310f00b33f3584f5c0d82e/a9ba723b5_marketplaceappui.webp',
    tagline: 'Trending brands, smart search, promotions, and seamless multi-brand shopping experience.',
    tools: ['Figma', 'Shopify', 'Firebase', 'After Effects'],
    stats: [
      { value: '500+', label: 'Brands' },
      { value: '4.7★', label: 'App Rating' },
      { value: '6 months', label: 'Project Duration' },
      { value: '42%', label: 'Repeat Purchase' },
    ],
    overview: 'A multi-brand marketplace app that connects shoppers with trending brands through smart search, curated collections, and seamless checkout.',
    challenge: 'Multi-brand shopping needed a unified experience across different brand identities and product catalogs.',
    process: 'I designed a cohesive marketplace experience that highlights individual brands while maintaining consistent navigation and checkout.',
    phases: [
      { icon: '◎', title: 'Research', desc: 'Analyzed marketplace shopping behaviors and brand preferences.' },
      { icon: '◇', title: 'Strategy', desc: 'Defined brand showcase and product discovery approach.' },
      { icon: '◈', title: 'Design', desc: 'Created a vibrant marketplace with brand-focused shopping.' },
      { icon: '◉', title: 'Test', desc: 'Tested with shoppers and brand partners.' },
    ],
    outcomes: 'The marketplace achieved 42% repeat purchase rate with strong brand engagement.',
    results: [
      { value: '42%', label: 'Repeat Purchase', desc: 'Repeat customer rate' },
      { value: '500+', label: 'Brands', desc: 'Active brands on platform' },
      { value: '4.7★', label: 'Rating', desc: 'App store rating' },
      { value: '35%', label: 'Growth', desc: 'Month-over-month growth' },
    ],
  },
  16: {
    id: 16,
    title: 'Pro Bowl Sport Betting App',
    desc: 'Dark sports app with live match tracking, win probability charts, and multi-league coverage.',
    category: 'Sport',
    type: 'Systems Design',
    year: '2023',
    image: 'https://media.base44.com/images/public/6a310f00b33f3584f5c0d82e/a7d794ee1_rugbyappui.webp',
    tagline: 'Dark sports app with live match tracking, win probability charts, and multi-league coverage.',
    tools: ['Figma', 'Adobe XD', 'D3.js', 'Firebase'],
    stats: [
      { value: '100K+', label: 'Active Users' },
      { value: '4.6★', label: 'App Rating' },
      { value: '4 months', label: 'Project Duration' },
      { value: '73%', label: 'Daily Active' },
    ],
    overview: 'A comprehensive sports betting app with live match tracking, win probability visualization, and multi-league coverage.',
    challenge: 'Sports betting needed real-time data visualization that\'s both engaging and easy to understand.',
    process: 'I designed a dynamic interface with live match tracking, predictive analytics, and intuitive betting flows.',
    phases: [
      { icon: '◎', title: 'Research', desc: 'Studied sports betting behaviors and live data integration.' },
      { icon: '◇', title: 'Strategy', desc: 'Defined data visualization and betting flow approach.' },
      { icon: '◈', title: 'Design', desc: 'Created a dark, dynamic interface with real-time updates.' },
      { icon: '◉', title: 'Test', desc: 'Beta tested with sports bettors and analysts.' },
    ],
    outcomes: 'The app achieved 73% daily active rate with users spending an average of 15 minutes per session.',
    results: [
      { value: '73%', label: 'Daily Active', desc: 'Daily engagement rate' },
      { value: '100K+', label: 'Users', desc: 'Active users' },
      { value: '4.6★', label: 'Rating', desc: 'App store rating' },
      { value: '15 min', label: 'Session', desc: 'Average session time' },
    ],
  },
  17: {
    id: 17,
    title: 'Scorify - Fantasy Sports Hub',
    desc: 'Fantasy league hub with live scores, team stats and multi-league fantasy game modes.',
    category: 'Sport',
    type: 'Systems Design',
    year: '2023',
    image: 'https://media.base44.com/images/public/6a310f00b33f3584f5c0d82e/ba7bf3272_fantasysportappui.webp',
    tagline: 'Fantasy league hub with live scores, team stats and multi-league fantasy game modes.',
    tools: ['Figma', 'Protopie', 'Firebase', 'D3.js'],
    stats: [
      { value: '80K+', label: 'Players' },
      { value: '4.8★', label: 'App Rating' },
      { value: '5 months', label: 'Project Duration' },
      { value: '82%', label: 'Retention' },
    ],
    overview: 'A comprehensive fantasy sports hub that brings together live scores, team stats, and multiple fantasy game modes in one platform.',
    challenge: 'Fantasy sports users needed consolidated information and easy team management across multiple leagues.',
    process: 'I designed a unified hub with live updates, team management, and competitive league features.',
    phases: [
      { icon: '◎', title: 'Research', desc: 'Studied fantasy sports user behaviors and pain points.' },
      { icon: '◇', title: 'Strategy', desc: 'Defined multi-league management and scoring system.' },
      { icon: '◈', title: 'Design', desc: 'Created an engaging interface with live score integration.' },
      { icon: '◉', title: 'Test', desc: 'Tested with fantasy sports enthusiasts and league managers.' },
    ],
    outcomes: 'The platform achieved 82% retention rate with users actively managing multiple fantasy teams.',
    results: [
      { value: '82%', label: 'Retention', desc: 'Monthly retention rate' },
      { value: '80K+', label: 'Players', desc: 'Active fantasy players' },
      { value: '4.8★', label: 'Rating', desc: 'App store rating' },
      { value: '45%', label: 'Growth', desc: 'User growth rate' },
    ],
  },
  18: {
    id: 18,
    title: 'Purchase Management POS App',
    desc: 'Clean point-of-sale system with product catalog, transactions, and streamlined checkout.',
    category: 'Sport',
    type: 'Systems Design',
    year: '2023',
    image: 'https://media.base44.com/images/public/6a310f00b33f3584f5c0d82e/822cc8fdd_posappui1.webp',
    tagline: 'Clean point-of-sale system with product catalog, transactions, and streamlined checkout.',
    tools: ['Figma', 'Sketch', 'Stripe', 'Firebase'],
    stats: [
      { value: '1K+', label: 'Stores' },
      { value: '4.7★', label: 'App Rating' },
      { value: '4 months', label: 'Project Duration' },
      { value: '58%', label: 'Transaction Speed' },
    ],
    overview: 'A clean and efficient point-of-sale system that streamlines transactions, product management, and customer checkout.',
    challenge: 'POS systems needed to balance comprehensive features with fast, efficient transaction processing.',
    process: 'I designed a minimalist POS interface that prioritizes speed and ease of use while maintaining full functionality.',
    phases: [
      { icon: '◎', title: 'Research', desc: 'Observed retail operations and POS usage patterns.' },
      { icon: '◇', title: 'Strategy', desc: 'Defined transaction flow and product management system.' },
      { icon: '◈', title: 'Design', desc: 'Created a clean, focused interface optimized for speed.' },
      { icon: '◉', title: 'Test', desc: 'Pilot tested in 20 retail stores.' },
    ],
    outcomes: 'The POS system increased transaction speed by 58% and was adopted by over 1,000 stores.',
    results: [
      { value: '58%', label: 'Speed Increase', desc: 'Transaction processing speed' },
      { value: '1K+', label: 'Stores', desc: 'Adopted stores' },
      { value: '4.7★', label: 'Rating', desc: 'App store rating' },
      { value: '95%', label: 'Satisfaction', desc: 'User satisfaction rate' },
    ],
  },
};

// Generate default project for any ID not found
const defaultProject = (id) => ({
  id,
  title: 'Project Details',
  desc: 'A comprehensive design project.',
  category: 'Product Design',
  type: 'UI/UX Design',
  year: '2024',
  image: 'https://via.placeholder.com/1200x800/1a1a2e/ffffff?text=Project+Image',
  tagline: 'A comprehensive product design project with strategic thinking and elegant execution.',
  tools: ['Figma', 'Principle', 'Maze', 'Notion'],
  stats: [
    { value: '100K+', label: 'Users' },
    { value: '4.7★', label: 'Rating' },
    { value: '4 months', label: 'Duration' },
    { value: '30%', label: 'Impact' },
  ],
  overview: 'A strategically designed product that transforms complex workflows into elegant, intuitive interfaces.',
  challenge: 'Users were struggling with an overly complex interface that hindered daily tasks and reduced overall satisfaction.',
  process: 'Conducted extensive user research, iterated through multiple design concepts, and validated with real users before finalising.',
  phases: [
    { icon: '◎', title: 'Research', desc: 'In-depth interviews and usability studies to understand user needs.' },
    { icon: '◇', title: 'Define', desc: 'Synthesised insights into clear problem statements and design principles.' },
    { icon: '◈', title: 'Design', desc: 'High-fidelity UI across all core user journeys with a scalable component library.' },
    { icon: '◉', title: 'Validate', desc: 'Iterative usability testing to refine and optimise before handoff.' },
  ],
  outcomes: 'The redesign significantly improved user satisfaction, task completion rates, and overall product engagement.',
  results: [
    { value: '+40%', label: 'Task Completion', desc: 'Increase in success rates' },
    { value: '-35%', label: 'Support Tickets', desc: 'Reduction in user confusion' },
    { value: '+28%', label: 'Retention', desc: 'Improvement in 30-day retention' },
    { value: '4.7★', label: 'App Rating', desc: 'Post-launch rating' },
  ],
})

const project = computed(() => {
  return allProjects[id] || defaultProject(id)
})

// Find next project
const projectIds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18]
const currentIndex = projectIds.indexOf(id)
const nextProject = computed(() => {
  if (currentIndex !== -1 && currentIndex < projectIds.length - 1) {
    const nextId = projectIds[currentIndex + 1]
    return allProjects[nextId]
  }
  return null
})
</script>

<style scoped>
.project-detail { 
  padding-top: 80px; 
  background: var(--off-black);
}

/* HERO */
.pd-hero {
  position: relative;
  min-height: 60vh;
  display: flex;
  align-items: center;
  padding: 6rem 2rem 5rem;
  overflow: hidden;
  border-bottom: 1px solid var(--border);
}
.pd-hero__bg {
  position: absolute;
  inset: 0;
  pointer-events: none;
}
.pd-hero__glow {
  position: absolute;
  top: -20%;
  right: -10%;
  width: 600px;
  height: 600px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(201,168,76,0.06) 0%, transparent 70%);
}
.pd-hero__grain {
  position: absolute;
  inset: 0;
  opacity: 0.03;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
  background-repeat: repeat;
  background-size: 256px;
}
.pd-hero__inner {
  max-width: 900px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
  width: 100%;
}
.pd-hero__breadcrumb {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 0.78rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--muted);
  margin-bottom: 2rem;
}
.pd-hero__breadcrumb a { 
  color: var(--gold); 
  text-decoration: none;
  transition: color var(--transition);
}
.pd-hero__breadcrumb a:hover { 
  color: var(--gold-light);
  text-decoration: underline; 
}
.pd-hero__meta {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
}
.pd-hero__tag {
  font-size: 0.7rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--gold);
  border: 1px solid var(--gold-dim);
  padding: 0.3rem 0.8rem;
  border-radius: 100px;
}
.pd-hero__year {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  color: var(--muted);
}
.pd-hero__title {
  font-family: var(--font-display);
  font-size: clamp(2.5rem, 6vw, 5rem);
  font-weight: 300;
  color: var(--white);
  line-height: 1.05;
  margin-bottom: 1.5rem;
}
.pd-hero__sub {
  font-size: 1.1rem;
  color: var(--muted);
  line-height: 1.7;
  max-width: 640px;
  margin-bottom: 2rem;
}
.pd-hero__chips {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}
.pd-hero__scroll {
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
.pd-hero__scroll-line {
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

.chip {
  font-size: 0.7rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--light-muted);
  border: 1px solid var(--border-light);
  padding: 0.3rem 0.8rem;
  border-radius: 100px;
  background: rgba(255,255,255,0.02);
}

/* SECTIONS */
.pd-section { 
  padding: 5rem 2rem; 
  border-bottom: 1px solid var(--border);
}
.pd-section--alt { 
  background: var(--surface); 
}
.pd-inner { 
  max-width: 1100px; 
  margin: 0 auto; 
}

.pd-overview {
  display: grid;
  grid-template-columns: 280px 1fr;
  gap: 4rem;
  align-items: start;
}
.pd-overview__stats {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding-right: 2rem;
  border-right: 1px solid var(--border);
}
.pd-stat__num {
  display: block;
  font-family: var(--font-display);
  font-size: 2.2rem;
  color: var(--gold);
  line-height: 1;
}
.pd-stat__label {
  font-size: 0.72rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--muted);
  margin-top: 4px;
  display: block;
}
.pd-overview__content {
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
}
.pd-block__title {
  font-family: var(--font-display);
  font-size: 1.6rem;
  font-weight: 400;
  color: var(--white);
  margin-bottom: 1rem;
}
.pd-block__body {
  font-size: 0.95rem;
  color: var(--muted);
  line-height: 1.8;
}

/* BANNER */
.pd-banner { 
  padding: 0 2rem 5rem; 
}
.pd-banner__inner {
  max-width: 1100px;
  margin: 0 auto;
  border-radius: var(--radius-lg);
  height: 420px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--border);
  position: relative;
  overflow: hidden;
  background-size: cover;
  background-position: center;
}
.pd-banner__overlay {
  position: absolute;
  inset: 0;
  background: rgba(0,0,0,0.4);
  z-index: 1;
}
.pd-banner__placeholder { 
  text-align: center;
  position: relative;
  z-index: 2;
}
.pd-banner__label {
  display: block;
  font-family: var(--font-display);
  font-size: 2.5rem;
  color: rgba(255,255,255,0.8);
  margin-bottom: 0.5rem;
  text-shadow: 0 2px 20px rgba(0,0,0,0.5);
}
.pd-banner__sub {
  font-size: 0.75rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: rgba(255,255,255,0.5);
  text-shadow: 0 2px 20px rgba(0,0,0,0.5);
}

/* PHASES */
.pd-phases {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.5rem;
  margin-top: 3rem;
}
.pd-phase {
  background: var(--surface-2);
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  padding: 1.75rem;
  transition: all var(--transition);
}
.pd-phase:hover {
  border-color: var(--gold-dim);
  transform: translateY(-2px);
}
.pd-phase__icon {
  font-size: 1.4rem;
  color: var(--gold);
  margin-bottom: 1rem;
}
.pd-phase__title {
  font-family: var(--font-display);
  font-size: 1.1rem;
  font-weight: 400;
  color: var(--white);
  margin-bottom: 0.5rem;
}
.pd-phase__desc {
  font-size: 0.83rem;
  color: var(--muted);
  line-height: 1.65;
}

/* RESULTS */
.pd-results {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  margin-top: 3rem;
}
.pd-result {
  padding: 1.5rem;
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  background: var(--surface);
  transition: all var(--transition);
}
.pd-result:hover {
  border-color: var(--gold-dim);
  transform: translateY(-2px);
}
.pd-result__num {
  display: block;
  font-family: var(--font-display);
  font-size: 2.5rem;
  color: var(--gold);
  line-height: 1;
  margin-bottom: 0.5rem;
}
.pd-result__label {
  display: block;
  font-size: 0.8rem;
  font-weight: 500;
  color: var(--white);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 0.4rem;
}
.pd-result__desc {
  display: block;
  font-size: 0.8rem;
  color: var(--muted);
}

/* NAV */
.pd-nav { 
  padding: 3rem 2rem; 
  border-top: 1px solid var(--border);
  background: var(--surface);
}
.pd-nav__inner {
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.pd-nav__back {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 0.85rem;
  color: var(--muted);
  transition: color var(--transition);
  text-decoration: none;
}
.pd-nav__back:hover { 
  color: var(--gold); 
}
.pd-nav__next { 
  text-align: right; 
}
.pd-nav__next-label {
  display: block;
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: var(--muted);
  margin-bottom: 0.4rem;
}
.pd-nav__next-title {
  font-family: var(--font-display);
  font-size: 1.2rem;
  color: var(--white);
  transition: color var(--transition);
  text-decoration: none;
}
.pd-nav__next-title:hover { 
  color: var(--gold); 
}
.pd-nav__next-title--disabled {
  color: var(--muted);
  cursor: default;
}

@media (max-width: 768px) {
  .pd-hero {
    min-height: 50vh;
    padding: 4rem 1.5rem 3rem;
  }
  .pd-overview { 
    grid-template-columns: 1fr; 
    gap: 2rem;
  }
  .pd-overview__stats { 
    flex-direction: row; 
    flex-wrap: wrap; 
    border-right: none; 
    border-bottom: 1px solid var(--border); 
    padding-right: 0; 
    padding-bottom: 2rem; 
    gap: 1.5rem;
  }
  .pd-nav__inner { 
    flex-direction: column; 
    gap: 2rem; 
    text-align: center; 
  }
  .pd-nav__next { 
    text-align: center; 
  }
  .pd-banner__inner {
    height: 280px;
  }
  .pd-banner__label {
    font-size: 1.8rem;
  }
  .pd-phases {
    grid-template-columns: 1fr;
  }
  .pd-results {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 480px) {
  .pd-results {
    grid-template-columns: 1fr;
  }
  .pd-hero__title {
    font-size: 2rem;
  }
}
</style>