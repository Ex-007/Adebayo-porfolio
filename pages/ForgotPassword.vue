<template>
  <div class="auth-page">
    <div class="auth-page__left">
      <NuxtLink to="/" class="auth-logo">
        <span class="auth-logo__text">AR</span>
        <span class="auth-logo__dot"></span>
      </NuxtLink>
      <div class="auth-page__illustration">
        <div class="lock-icon">
          <div class="lock-icon__body">
            <span class="lock-icon__keyhole"></span>
          </div>
          <div class="lock-icon__shackle"></div>
        </div>
        <p class="auth-page__ill-text">Password recovery is quick and secure. We'll send a reset link straight to your inbox.</p>
      </div>
    </div>
    <div class="auth-page__right">
      <div class="auth-card">
        <NuxtLink to="/Login" class="auth-back">
          <span>←</span>
          <span>Back to login</span>
        </NuxtLink>

        <div v-if="!sent">
          <div class="auth-card__header">
            <h1 class="auth-card__title">Forgot password?</h1>
            <p class="auth-card__sub">Enter your email and we'll send you a reset link.</p>
          </div>
          <form class="auth-form" @submit.prevent="handleSubmit">
            <div class="form-group">
              <label>Email Address</label>
              <input type="email" v-model="email" placeholder="your@email.com" required autocomplete="email" />
            </div>
            <button type="submit" class="btn btn--gold btn--full" :class="{ loading }">
              {{ loading ? 'Sending...' : 'Send Reset Link' }}
            </button>
          </form>
        </div>

        <div v-else class="auth-success">
          <div class="auth-success__icon">✓</div>
          <h2 class="auth-success__title">Check your inbox</h2>
          <p class="auth-success__body">
            We've sent a password reset link to <strong>{{ email }}</strong>. The link expires in 15 minutes.
          </p>
          <p class="auth-success__hint">Didn't receive it? Check your spam folder or
            <button class="auth-resend" @click="sent = false">try again</button>.
          </p>
        </div>

        <p class="auth-card__footer">
          Remembered it?
          <NuxtLink to="/Login" class="auth-link">Sign in</NuxtLink>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

definePageMeta({ layout: false })
useHead({ title: 'Forgot Password | Adebayo Rukayat Portfolio' })

const email = ref('')
const loading = ref(false)
const sent = ref(false)

const handleSubmit = async () => {
  loading.value = true
  await new Promise(r => setTimeout(r, 1300))
  loading.value = false
  sent.value = true
}
</script>

<style scoped>
.auth-page {
  min-height: 100vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
}
.auth-page__left {
  background: var(--off-black);
  border-right: 1px solid var(--border);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 3rem;
  position: relative;
  overflow: hidden;
}
.auth-page__left::after {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse at 20% 80%, rgba(201,168,76,0.06) 0%, transparent 60%);
  pointer-events: none;
}
.auth-logo {
  display: flex;
  align-items: center;
  gap: 6px;
  text-decoration: none;
}
.auth-logo__text {
  font-family: var(--font-display);
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--white);
  letter-spacing: 0.05em;
}
.auth-logo__dot {
  width: 6px; height: 6px;
  border-radius: 50%;
  background: var(--gold);
  margin-bottom: 12px;
}
.auth-page__illustration {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  text-align: center;
  padding: 2rem 0;
}
.lock-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0;
}
.lock-icon__shackle {
  width: 48px;
  height: 32px;
  border: 3px solid var(--gold-dim);
  border-bottom: none;
  border-radius: 24px 24px 0 0;
}
.lock-icon__body {
  width: 72px;
  height: 56px;
  background: var(--surface-3);
  border: 2px solid var(--gold-dim);
  border-radius: var(--radius-sm);
  display: flex;
  align-items: center;
  justify-content: center;
}
.lock-icon__keyhole {
  width: 14px;
  height: 20px;
  border: 2px solid var(--gold);
  border-radius: 50% 50% 0 0;
  position: relative;
}
.lock-icon__keyhole::after {
  content: '';
  position: absolute;
  bottom: -8px;
  left: 50%;
  transform: translateX(-50%);
  width: 6px;
  height: 8px;
  background: var(--gold);
  border-radius: 0 0 3px 3px;
}
.auth-page__ill-text {
  font-size: 0.88rem;
  color: var(--muted);
  line-height: 1.7;
  max-width: 280px;
}
.auth-page__right {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  background: var(--black);
}
.auth-card {
  width: 100%;
  max-width: 420px;
}
.auth-back {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.8rem;
  color: var(--muted);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 2.5rem;
  transition: color var(--transition);
}
.auth-back:hover { color: var(--gold); }
.auth-card__header { margin-bottom: 2rem; }
.auth-card__title {
  font-family: var(--font-display);
  font-size: 2.5rem;
  font-weight: 300;
  color: var(--white);
  margin-bottom: 0.5rem;
}
.auth-card__sub { font-size: 0.9rem; color: var(--muted); }
.auth-form {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  margin-bottom: 1.5rem;
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
.form-group input {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius-sm);
  padding: 0.85rem 1rem;
  font-size: 0.9rem;
  color: var(--white);
  width: 100%;
  transition: border-color var(--transition);
}
.form-group input:focus { outline: none; border-color: var(--gold-dim); }
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 0.78rem;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  padding: 0.9rem 2rem;
  border-radius: var(--radius-sm);
  transition: all var(--transition);
  cursor: pointer;
  border: none;
}
.btn--gold { background: var(--gold); color: var(--black); }
.btn--gold:hover { background: var(--gold-light); }
.btn--full { width: 100%; }
.btn.loading { opacity: 0.6; pointer-events: none; }
.auth-success {
  text-align: center;
  padding: 1rem 0 2rem;
}
.auth-success__icon {
  width: 60px; height: 60px;
  border-radius: 50%;
  background: rgba(80, 192, 80, 0.1);
  border: 1px solid rgba(80,192,80,0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  color: #50c050;
  margin: 0 auto 1.5rem;
}
.auth-success__title {
  font-family: var(--font-display);
  font-size: 1.8rem;
  font-weight: 300;
  color: var(--white);
  margin-bottom: 1rem;
}
.auth-success__body {
  font-size: 0.9rem;
  color: var(--muted);
  line-height: 1.7;
  margin-bottom: 1rem;
}
.auth-success__body strong { color: var(--white); }
.auth-success__hint {
  font-size: 0.82rem;
  color: var(--muted);
}
.auth-resend {
  background: none;
  border: none;
  color: var(--gold);
  font-size: inherit;
  text-decoration: underline;
  text-underline-offset: 3px;
  cursor: pointer;
}
.auth-card__footer {
  text-align: center;
  font-size: 0.85rem;
  color: var(--muted);
  margin-top: 1.5rem;
}
.auth-link {
  color: var(--gold);
  text-decoration: underline;
  text-underline-offset: 3px;
  font-size: inherit;
  margin-left: 0.25rem;
}
.auth-link:hover { color: var(--gold-light); }
@media (max-width: 768px) {
  .auth-page { grid-template-columns: 1fr; }
  .auth-page__left { display: none; }
}
</style>
