<template>
  <div class="auth-page">
    <div class="auth-page__left">
      <NuxtLink to="/" class="auth-logo">
        <span class="auth-logo__text">AR</span>
        <span class="auth-logo__dot"></span>
      </NuxtLink>
      <div class="auth-page__copy">
        <h2 class="auth-page__copy-title">Almost there.</h2>
        <p class="auth-page__copy-body">Create a strong new password to secure your portfolio account. Use a mix of letters, numbers, and symbols for best protection.</p>
        <ul class="pw-rules">
          <li v-for="rule in rules" :key="rule">{{ rule }}</li>
        </ul>
      </div>
    </div>
    <div class="auth-page__right">
      <div class="auth-card">
        <div v-if="!done">
          <div class="auth-card__header">
            <h1 class="auth-card__title">Reset password</h1>
            <p class="auth-card__sub">Choose a new password for your account.</p>
          </div>
          <form class="auth-form" @submit.prevent="handleReset">
            <div class="form-group">
              <label>New Password</label>
              <div class="input-wrap">
                <input :type="showPw ? 'text' : 'password'" v-model="form.password" placeholder="At least 8 characters" required />
                <button type="button" class="input-toggle" @click="showPw = !showPw">{{ showPw ? 'Hide' : 'Show' }}</button>
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
              <label>Confirm New Password</label>
              <div class="input-wrap">
                <input :type="showPw ? 'text' : 'password'" v-model="form.confirm" placeholder="Repeat new password" required />
              </div>
              <span class="field-error" v-if="form.confirm && form.password !== form.confirm">Passwords do not match</span>
            </div>
            <p v-if="error" class="auth-error">{{ error }}</p>
            <button type="submit" class="btn btn--gold btn--full" :class="{ loading }">
              {{ loading ? 'Updating...' : 'Update Password' }}
            </button>
          </form>
        </div>

        <div v-else class="auth-success">
          <div class="auth-success__icon">✓</div>
          <h2 class="auth-success__title">Password updated!</h2>
          <p class="auth-success__body">Your password has been changed successfully. You can now sign in with your new credentials.</p>
          <NuxtLink to="/Login" class="btn btn--gold btn--full" style="margin-top:1.5rem;">Go to Login</NuxtLink>
        </div>

        <p class="auth-card__footer" v-if="!done">
          Remember your password?
          <NuxtLink to="/Login" class="auth-link">Sign in</NuxtLink>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

definePageMeta({ layout: false })
useHead({ title: 'Reset Password | Adebayo Rukayat Portfolio' })

const form = ref({ password: '', confirm: '' })
const showPw = ref(false)
const loading = ref(false)
const done = ref(false)
const error = ref('')

const rules = [
  'At least 8 characters long',
  'Contains uppercase and lowercase letters',
  'Includes at least one number',
  'Has a special character (e.g. @, #, $)',
]

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

const strengthLabel = computed(() => (['', 'Weak', 'Fair', 'Good', 'Strong'])[passwordStrength.value] || '')

const handleReset = async () => {
  error.value = ''
  if (form.value.password !== form.value.confirm) {
    error.value = 'Passwords do not match.'
    return
  }
  if (passwordStrength.value < 2) {
    error.value = 'Please choose a stronger password.'
    return
  }
  loading.value = true
  await new Promise(r => setTimeout(r, 1300))
  loading.value = false
  done.value = true
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
  bottom: -60px; right: -60px;
  width: 360px; height: 360px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(201,168,76,0.07) 0%, transparent 70%);
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
.auth-page__copy { padding-bottom: 1rem; }
.auth-page__copy-title {
  font-family: var(--font-display);
  font-size: 2rem;
  font-weight: 300;
  color: var(--white);
  margin-bottom: 1rem;
}
.auth-page__copy-body {
  font-size: 0.88rem;
  color: var(--muted);
  line-height: 1.7;
  margin-bottom: 1.5rem;
}
.pw-rules {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}
.pw-rules li {
  font-size: 0.82rem;
  color: var(--muted);
  padding-left: 1.25rem;
  position: relative;
}
.pw-rules li::before {
  content: '—';
  position: absolute;
  left: 0;
  color: var(--gold-dim);
}
.auth-page__right {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  background: var(--black);
}
.auth-card { width: 100%; max-width: 420px; }
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
.input-wrap { position: relative; }
.input-wrap input {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius-sm);
  padding: 0.85rem 5rem 0.85rem 1rem;
  font-size: 0.9rem;
  color: var(--white);
  width: 100%;
  transition: border-color var(--transition);
}
.input-wrap input:focus { outline: none; border-color: var(--gold-dim); }
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
}
.pw-strength__bars { display: flex; gap: 4px; }
.pw-strength__bar {
  width: 36px; height: 3px;
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
.field-error { font-size: 0.78rem; color: #e05050; }
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
  text-decoration: none;
}
.btn--gold { background: var(--gold); color: var(--black); }
.btn--gold:hover { background: var(--gold-light); }
.btn--full { width: 100%; }
.btn.loading { opacity: 0.6; pointer-events: none; }
.auth-success { text-align: center; padding: 1rem 0 2rem; }
.auth-success__icon {
  width: 60px; height: 60px;
  border-radius: 50%;
  background: rgba(80,192,80,0.1);
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
}
.auth-card__footer {
  text-align: center;
  font-size: 0.85rem;
  color: var(--muted);
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
