<template>
  <div class="auth-page">
    <div class="auth-page__left">
      <div class="auth-page__brand">
        <NuxtLink to="/" class="auth-logo">
          <span class="auth-logo__text">AR</span>
          <span class="auth-logo__dot"></span>
        </NuxtLink>
        <div class="auth-page__features">
          <div class="auth-feature" v-for="f in features" :key="f.title">
            <span class="auth-feature__icon">{{ f.icon }}</span>
            <div>
              <p class="auth-feature__title">{{ f.title }}</p>
              <p class="auth-feature__desc">{{ f.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="auth-page__right">
      <div class="auth-card">
        <div class="auth-card__header">
          <h1 class="auth-card__title">Create account</h1>
          <p class="auth-card__sub">Join to access exclusive portfolio content</p>
        </div>
        <form class="auth-form" @submit.prevent="handleRegister">
          <div class="form-row">
            <div class="form-group">
              <label>First Name</label>
              <input type="text" v-model="form.firstName" placeholder="John" required />
            </div>
            <div class="form-group">
              <label>Last Name</label>
              <input type="text" v-model="form.lastName" placeholder="Doe" required />
            </div>
          </div>
          <div class="form-group">
            <label>Email Address</label>
            <input type="email" v-model="form.email" placeholder="your@email.com" required />
          </div>
          <div class="form-group">
            <label>Password</label>
            <div class="input-wrap">
              <input :type="showPw ? 'text' : 'password'" v-model="form.password" placeholder="At least 8 characters" required />
              <button type="button" class="input-toggle" @click="showPw = !showPw">
                {{ showPw ? 'Hide' : 'Show' }}
              </button>
            </div>
            <div class="pw-strength" v-if="form.password">
              <div class="pw-strength__bars">
                <div
                  v-for="i in 4" :key="i"
                  class="pw-strength__bar"
                  :class="{ active: passwordStrength >= i, [`level-${passwordStrength}`]: true }"
                ></div>
              </div>
              <span class="pw-strength__label">{{ strengthLabel }}</span>
            </div>
          </div>
          <div class="form-group">
            <label>Confirm Password</label>
            <input :type="showPw ? 'text' : 'password'" v-model="form.confirmPassword" placeholder="Repeat password" required />
            <span class="field-error" v-if="form.confirmPassword && form.password !== form.confirmPassword">
              Passwords do not match
            </span>
          </div>
          <label class="checkbox">
            <input type="checkbox" v-model="form.agree" required />
            <span>I agree to the <a href="#" class="auth-link">Terms of Service</a> and <a href="#" class="auth-link">Privacy Policy</a></span>
          </label>
          <p v-if="error" class="auth-error">{{ error }}</p>
          <button type="submit" class="btn btn--gold btn--full" :class="{ loading: loading }">
            {{ loading ? 'Creating account...' : 'Create Account' }}
          </button>
        </form>
        <p class="auth-card__footer">
          Already have an account?
          <NuxtLink to="/Login" class="auth-link">Sign in</NuxtLink>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'

definePageMeta({ layout: false })
useHead({ title: 'Register | Adebayo Rukayat Portfolio' })

const router = useRouter()
const form = ref({ firstName: '', lastName: '', email: '', password: '', confirmPassword: '', agree: false })
const showPw = ref(false)
const loading = ref(false)
const error = ref('')

const passwordStrength = computed(() => {
  const pw = form.value.password
  if (!pw) return 0
  let score = 0
  if (pw.length >= 8) score++
  if (/[A-Z]/.test(pw)) score++
  if (/[0-9]/.test(pw)) score++
  if (/[^A-Za-z0-9]/.test(pw)) score++
  return score
})

const strengthLabel = computed(() => {
  const labels = ['', 'Weak', 'Fair', 'Good', 'Strong']
  return labels[passwordStrength.value] || ''
})

const features = [
  { icon: '◈', title: 'Exclusive Case Studies', desc: 'Access in-depth breakdowns of design decisions and research.' },
  { icon: '◇', title: 'Process Documentation', desc: 'See behind-the-scenes wireframes, explorations, and iterations.' },
  { icon: '◉', title: 'Direct Collaboration', desc: 'Connect and initiate project discussions directly.' },
]

const handleRegister = async () => {
  error.value = ''
  if (form.value.password !== form.value.confirmPassword) {
    error.value = 'Passwords do not match.'
    return
  }
  if (!form.value.agree) {
    error.value = 'Please accept the terms to continue.'
    return
  }
  loading.value = true
  await new Promise(r => setTimeout(r, 1400))
  loading.value = false
  router.push('/')
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
  top: -80px;
  right: -80px;
  width: 400px;
  height: 400px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(201,168,76,0.07) 0%, transparent 70%);
  pointer-events: none;
}
.auth-logo {
  display: flex;
  align-items: center;
  gap: 6px;
  text-decoration: none;
  margin-bottom: 4rem;
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
.auth-page__features {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}
.auth-feature {
  display: flex;
  align-items: flex-start;
  gap: 1.25rem;
}
.auth-feature__icon {
  font-size: 1.2rem;
  color: var(--gold);
  margin-top: 2px;
  flex-shrink: 0;
}
.auth-feature__title {
  font-size: 0.92rem;
  font-weight: 500;
  color: var(--white);
  margin-bottom: 0.25rem;
}
.auth-feature__desc {
  font-size: 0.82rem;
  color: var(--muted);
  line-height: 1.6;
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
  max-width: 460px;
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
.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
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
.pw-strength {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-top: 4px;
}
.pw-strength__bars {
  display: flex;
  gap: 4px;
}
.pw-strength__bar {
  width: 36px;
  height: 3px;
  border-radius: 2px;
  background: var(--border-light);
  transition: background var(--transition);
}
.pw-strength__bar.active.level-1 { background: #e05050; }
.pw-strength__bar.active.level-2 { background: #e0a050; }
.pw-strength__bar.active.level-3 { background: #a0c050; }
.pw-strength__bar.active.level-4 { background: #50c050; }
.pw-strength__label {
  font-size: 0.72rem;
  color: var(--muted);
  text-transform: uppercase;
  letter-spacing: 0.08em;
}
.field-error {
  font-size: 0.78rem;
  color: #e05050;
}
.checkbox {
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  font-size: 0.85rem;
  color: var(--muted);
  cursor: pointer;
  line-height: 1.5;
}
.checkbox input { accent-color: var(--gold); width: 14px; height: 14px; margin-top: 2px; flex-shrink: 0; }
.auth-link {
  color: var(--gold);
  text-decoration: underline;
  text-underline-offset: 3px;
  font-size: inherit;
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
.auth-card__footer .auth-link { margin-left: 0.25rem; font-size: 0.85rem; }

@media (max-width: 768px) {
  .auth-page { grid-template-columns: 1fr; }
  .auth-page__left { display: none; }
  .form-row { grid-template-columns: 1fr; }
}
</style>
