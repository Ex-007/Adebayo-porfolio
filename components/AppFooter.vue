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
              <li><a href="https://www.linkedin.com/in/adebayo-rukayat-153534246?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank">LinkedIn</a></li>
              <!-- <li><a href="#" target="_blank">Dribbble</a></li>
              <li><a href="#" target="_blank">Behance</a></li> -->
              <li><a href="https://x.com/Rukayatdesigner" target="_blank">Twitter / X</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="footer__social">
        <a href="https://wa.me/2347049515204" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
          <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
        </a>
        <a href="https://www.instagram.com/rukayatproductdesigner?utm_source=qr&igsh=dzc1bXpvcjk4ZTd1" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
          </svg>
        </a>
        <a href="https://x.com/Rukayatdesigner" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)">
          <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
          </svg>
        </a>
        <a href="https://www.linkedin.com/in/adebayo-rukayat-153534246?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
        </a>
        <a href="https://www.facebook.com/share/198hqoBb7n/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
          <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
          </svg>
        </a>
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
  margin-bottom: 3rem;
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

.footer__social {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 3rem;
  padding-top: 1rem;
}
.footer__social a {
  color: var(--muted);
  transition: color var(--transition);
  display: flex;
  align-items: center;
  justify-content: center;
}
.footer__social a:hover {
  color: var(--gold);
}
.footer__social svg {
  width: 22px;
  height: 22px;
}

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
  .footer__top { 
    grid-template-columns: 1fr; 
    gap: 2.5rem; 
  }
  .footer__social {
    justify-content: center;
    gap: 1.8rem;
  }
  .footer__bottom { 
    flex-direction: column; 
    gap: 0.5rem; 
    text-align: center; 
  }
}
</style>