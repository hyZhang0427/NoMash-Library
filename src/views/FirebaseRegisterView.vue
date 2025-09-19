<template>
  <section class="p-6 max-w-sm mx-auto space-y-4">
    <h1>Create an Account</h1>

    <form @submit.prevent="register" class="space-y-3">
      <input
        type="email"
        placeholder="Email"
        v-model="email"
        required
      />
      <input
        type="password"
        placeholder="Password (min 6 chars)"
        v-model="password"
        minlength="6"
        required
      />
      <button type="submit" :disabled="loading">
        {{ loading ? 'Creating…' : 'Save to Firebase' }}
      </button>
    </form>

    <p v-if="errorMsg" style="color:#c00">{{ errorMsg }}</p>

    <router-link to="/FireLogin">Already have an account? Sign in</router-link>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { useRouter } from 'vue-router'

const email = ref('')
const password = ref('')
const loading = ref(false)
const errorMsg = ref('')

const router = useRouter()
const auth = getAuth()

async function register() {
  errorMsg.value = ''
  loading.value = true
  try {
    await createUserWithEmailAndPassword(auth, email.value, password.value)
    console.log('Firebase Register Successful!')
    router.push('/FireLogin')
  } catch (err) {
    console.log(err.code)
    errorMsg.value = mapAuthError(err)
  } finally {
    loading.value = false
  }
}

function mapAuthError(err) {
  const code = err?.code || ''
  switch (code) {
    case 'auth/email-already-in-use':
      return 'This email is already in use.'
    case 'auth/invalid-email':
      return 'Please enter a valid email address.'
    case 'auth/weak-password':
      return 'Password should be at least 6 characters.'
    default:
      return 'Registration failed. Please try again.'
  }
}
</script>

<style scoped>
/* minimal styling; adjust as you like */
input, button { display:block; width:100%; padding:.6rem; }
button[disabled] { opacity:.6; cursor:not-allowed; }
</style>
