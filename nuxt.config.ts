export default defineNuxtConfig({
  devtools: { enabled: false },
  css: ['~/assets/css/main.css'],

  app: {
    head: {
      title: 'Adebayo Rukayat Portfolio',
      meta: [
        { name: 'description', content: 'A premium, editorial-style digital flagship for Adebayo Rukayat, showcasing high-end UI/UX architecture, design systems, and product strategy for global enterprises and ambitious startups.' },
        { name: 'keywords', content: 'UI/UX Designer, Product Designer, Fintech Design, SaaS Design, Mobile App Design, Design Systems' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
        { property: 'og:title', content: 'Adebayo Rukayat Portfolio' },
        { property: 'og:type', content: 'website' },
        { property: 'og:image', content: 'https://media.base44.com/images/public/6a310f00b33f3584f5c0d82e/3ed49a071_logo.png/v1/fill/w_1200,h_630/3ed49a071_logo.png' },
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=Inter:wght@300;400;500;600&family=Space+Mono:wght@400;700&display=swap' },
      ],
    },
  },

  compatibilityDate: '2026-06-17',
})