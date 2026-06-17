<template>
  <footer class="footer">
    <div class="footer__inner">
      <div class="footer__top">
        <div class="footer__brand">
          <NuxtLink to="/" class="footer__logo">
            <span class="footer__logo-text">AR</span>
            <span class="footer__logo-dot"></span>
          </NuxtLink>
          <p class="footer__tagline">UI/UX Architect &amp; Product Strategist</p>
          <p class="footer__sub">Crafting digital experiences that bridge the gap between human intuition and business intelligence.</p>
        </div>
        <div class="footer__links">
          <div class="footer__col">
            <h4>Navigation</h4>
            <ul>
              <li><NuxtLink to="/">Work</NuxtLink></li>
              <li><NuxtLink to="/#about">About</NuxtLink></li>
              <li><NuxtLink to="/#services">Services</NuxtLink></li>
              <li><NuxtLink to="/#contact">Contact</NuxtLink></li>
            </ul>
          </div>
          <div class="footer__col">
            <h4>Connect</h4>
            <ul>
              <li><a href="#" target="_blank">LinkedIn</a></li>
              <li><a href="#" target="_blank">Dribbble</a></li>
              <li><a href="#" target="_blank">Behance</a></li>
              <li><a href="#" target="_blank">Twitter / X</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="footer__bottom">
        <p class="footer__copy">&copy; {{ currentYear }} Adebayo Rukayat. All rights reserved.</p>
        <p class="footer__made">Designed &amp; built with intention.</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
const currentYear = new Date().getFullYear()
</script>

<style scoped>
.footer {
  background: var(--off-black);
  border-top: 1px solid var(--border);
  padding: 5rem 2rem 2rem;
}
.footer__inner {
  max-width: 1280px;
  margin: 0 auto;
}
.footer__top {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  margin-bottom: 4rem;
}
.footer__logo {
  display: flex;
  align-items: center;
  gap: 6px;
  margin-bottom: 1rem;
}
.footer__logo-text {
  font-family: var(--font-display);
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--white);
  letter-spacing: 0.05em;
}
.footer__logo-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--gold);
  margin-bottom: 12px;
}
.footer__tagline {
  font-size: 0.75rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--gold);
  margin-bottom: 1rem;
}
.footer__sub {
  font-size: 0.9rem;
  color: var(--muted);
  line-height: 1.7;
  max-width: 360px;
}
.footer__links {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
}
.footer__col h4 {
  font-size: 0.7rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--light-muted);
  margin-bottom: 1.2rem;
}
.footer__col ul {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}
.footer__col a {
  font-size: 0.9rem;
  color: var(--muted);
  transition: color var(--transition);
}
.footer__col a:hover { color: var(--gold); }
.footer__bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 2rem;
  border-top: 1px solid var(--border);
}
.footer__copy, .footer__made {
  font-size: 0.8rem;
  color: var(--muted);
}
@media (max-width: 768px) {
  .footer__top { grid-template-columns: 1fr; gap: 2.5rem; }
  .footer__bottom { flex-direction: column; gap: 0.5rem; text-align: center; }
}
</style>
