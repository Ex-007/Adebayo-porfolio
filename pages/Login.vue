<template>
  <div class="auth-page">
    <div class="auth-page__left">
      <div class="auth-page__brand">
        <NuxtLink to="/" class="auth-logo">
          <span class="auth-logo__text">AR</span>
          <span class="auth-logo__dot"></span>
        </NuxtLink>
        <blockquote class="auth-page__quote">
          "Design is not just what it looks like and feels like. Design is how it works."
          <cite>— Steve Jobs</cite>
        </blockquote>
      </div>
    </div>
    <div class="auth-page__right">
      <div class="auth-card">
        <div class="auth-card__header">
          <h1 class="auth-card__title">Welcome back</h1>
          <p class="auth-card__sub">Sign in to your portfolio account</p>
        </div>
        <form class="auth-form" @submit.prevent="handleLogin">
          <div class="form-group">
            <label>Email Address</label>
            <input type="email" v-model="form.email" placeholder="your@email.com" required autocomplete="email" />
          </div>
          <div class="form-group">
            <label>Password</label>
            <div class="input-wrap">
              <input :type="showPw ? 'text' : 'password'" v-model="form.password" placeholder="••••••••" required autocomplete="current-password" />
              <button type="button" class="input-toggle" @click="showPw = !showPw">
                {{ showPw ? 'Hide' : 'Show' }}
              </button>
            </div>
          </div>
          <div class="auth-form__options">
            <label class="checkbox">
              <input type="checkbox" v-model="form.remember" />
              <span>Remember me</span>
            </label>
            <NuxtLink to="/ForgotPassword" class="auth-link">Forgot password?</NuxtLink>
          </div>
          <p v-if="error" class="auth-error">{{ error }}</p>
          <button type="submit" class="btn btn--gold btn--full" :class="{ loading: loading }">
            {{ loading ? 'Signing in...' : 'Sign In' }}
          </button>
        </form>
        <p class="auth-card__footer">
          Don't have an account?
          <NuxtLink to="/Register" class="auth-link">Create one</NuxtLink>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

definePageMeta({ layout: false })
useHead({ title: 'Login | Adebayo Rukayat Portfolio' })

const router = useRouter()
const form = ref({ email: '', password: '', remember: false })
const showPw = ref(false)
const loading = ref(false)
const error = ref('')

const handleLogin = async () => {
  error.value = ''
  loading.value = true
  await new Promise(r => setTimeout(r, 1200))
  loading.value = false
  if (form.value.email && form.value.password) {
    router.push('/')
  } else {
    error.value = 'Invalid credentials. Please try again.'
  }
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
.auth-page__left::before {
  content: '';
  position: absolute;
  bottom: -100px;
  left: -100px;
  width: 500px;
  height: 500px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(201,168,76,0.06) 0%, transparent 70%);
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
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--gold);
  margin-bottom: 12px;
}
.auth-page__quote {
  font-family: var(--font-display);
  font-size: 1.3rem;
  font-style: italic;
  color: var(--white-dim);
  line-height: 1.6;
  border-left: 2px solid var(--gold);
  padding-left: 1.5rem;
}
.auth-page__quote cite {
  display: block;
  font-style: normal;
  font-size: 0.78rem;
  color: var(--muted);
  margin-top: 1rem;
  letter-spacing: 0.08em;
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
.auth-card__header { margin-bottom: 2.5rem; }
.auth-card__title {
  font-family: var(--font-display);
  font-size: 2.5rem;
  font-weight: 300;
  color: var(--white);
  margin-bottom: 0.5rem;
}
.auth-card__sub {
  font-size: 0.9rem;
  color: var(--muted);
}
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
.form-group input:focus {
  outline: none;
  border-color: var(--gold-dim);
}
.input-wrap { position: relative; }
.input-wrap input { padding-right: 5rem; }
.input-toggle {
  position: absolute;
  right: 0.75rem;
  top: 50%;
  transform: translateY(-50%);
  font-size: 0.72rem;
  color: var(--muted);
  background: none;
  border: none;
  cursor: pointer;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  transition: color var(--transition);
}
.input-toggle:hover { color: var(--gold); }
.auth-form__options {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.checkbox {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.85rem;
  color: var(--muted);
  cursor: pointer;
}
.checkbox input { accent-color: var(--gold); width: 14px; height: 14px; }
.auth-link {
  font-size: 0.85rem;
  color: var(--gold);
  text-decoration: underline;
  text-underline-offset: 3px;
  transition: color var(--transition);
}
.auth-link:hover { color: var(--gold-light); }
.auth-error {
  font-size: 0.83rem;
  color: #e05050;
  padding: 0.75rem 1rem;
  background: rgba(224,80,80,0.1);
  border: 1px solid rgba(224,80,80,0.2);
  border-radius: var(--radius-sm);
}
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
.auth-card__footer {
  text-align: center;
  font-size: 0.85rem;
  color: var(--muted);
}
.auth-card__footer .auth-link { margin-left: 0.25rem; }

@media (max-width: 768px) {
  .auth-page { grid-template-columns: 1fr; }
  .auth-page__left { display: none; }
}
</style>
