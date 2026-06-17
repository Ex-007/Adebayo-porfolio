<template>
  <nav class="nav" :class="{ scrolled: isScrolled }">
    <div class="nav__inner">
      <NuxtLink to="/" class="nav__logo">
        <img src="/images/arlogo.png" alt="AR Logo" class="nav__logo-img" />
      </NuxtLink>

      <ul class="nav__links" :class="{ open: menuOpen }">
        <li><NuxtLink to="/" @click="menuOpen = false">Work</NuxtLink></li>
        <li><NuxtLink to="/#about" @click="menuOpen = false">About</NuxtLink></li>
        <li><NuxtLink to="/#services" @click="menuOpen = false">Services</NuxtLink></li>
        <li><NuxtLink to="/#contact" @click="menuOpen = false">Contact</NuxtLink></li>
      </ul>

      <div class="nav__actions">
        <NuxtLink to="/#contact" class="nav__cta">Let's Talk</NuxtLink>
        <button class="nav__burger" @click="menuOpen = !menuOpen" :aria-expanded="menuOpen" aria-label="Toggle menu">
          <span></span><span></span><span></span>
        </button>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)
const menuOpen = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 40
}

onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>

<style scoped>
.nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  padding: 1.5rem 2rem;
  transition: background var(--transition), padding var(--transition), border-bottom var(--transition);
}
.nav.scrolled {
  background: rgba(10,10,10,0.92);
  backdrop-filter: blur(12px);
  padding: 0.8rem 2rem;
  border-bottom: 1px solid var(--border);
}
.nav__inner {
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
}
.nav__logo {
  display: flex;
  align-items: center;
  text-decoration: none;
  flex-shrink: 0;
}
.nav__logo-img {
  height: 40px;
  width: auto;
  display: block;
  transition: height var(--transition);
}
.nav.scrolled .nav__logo-img {
  height: 32px;
}
.nav__logo-text {
  font-family: var(--font-display);
  font-size: 1.4rem;
  font-weight: 600;
  color: var(--white);
  letter-spacing: 0.05em;
}
.nav__logo-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--gold);
  margin-bottom: 10px;
}
.nav__links {
  display: flex;
  list-style: none;
  gap: 2.5rem;
  margin: 0;
  padding: 0;
}
.nav__links a {
  font-size: 0.8rem;
  font-weight: 500;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--white-dim);
  transition: color var(--transition);
  position: relative;
  text-decoration: none;
}
.nav__links a::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 1px;
  background: var(--gold);
  transition: width var(--transition);
}
.nav__links a:hover,
.nav__links a.router-link-exact-active {
  color: var(--white);
}
.nav__links a:hover::after,
.nav__links a.router-link-exact-active::after {
  width: 100%;
}
.nav__actions {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}
.nav__cta {
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--black);
  background: var(--gold);
  padding: 0.6rem 1.4rem;
  border-radius: var(--radius-sm);
  transition: background var(--transition), transform var(--transition);
  text-decoration: none;
  white-space: nowrap;
}
.nav__cta:hover {
  background: var(--gold-light);
  transform: translateY(-1px);
}
.nav__burger {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
  z-index: 100;
}
.nav__burger span {
  display: block;
  width: 24px;
  height: 1.5px;
  background: var(--white);
  transition: var(--transition);
}
.nav__burger.open span:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px);
}
.nav__burger.open span:nth-child(2) {
  opacity: 0;
}
.nav__burger.open span:nth-child(3) {
  transform: rotate(-45deg) translate(5px, -5px);
}

@media (max-width: 768px) {
  .nav {
    padding: 1rem 1.5rem;
  }
  .nav.scrolled {
    padding: 0.8rem 1.5rem;
  }
  .nav__burger { 
    display: flex; 
  }
  .nav__links {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(10,10,10,0.98);
    backdrop-filter: blur(20px);
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2.5rem;
    z-index: 99;
  }
  .nav__links.open { 
    display: flex; 
  }
  .nav__links a { 
    font-size: 1.2rem; 
  }
  .nav__cta { 
    display: none; 
  }
  .nav__logo-img {
    height: 32px;
  }
  .nav.scrolled .nav__logo-img {
    height: 28px;
  }
}

@media (max-width: 480px) {
  .nav__logo-img {
    height: 28px;
  }
  .nav.scrolled .nav__logo-img {
    height: 24px;
  }
}
</style>