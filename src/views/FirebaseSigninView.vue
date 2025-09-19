<!-- src/views/FirebaseSigninView.vue -->
<template>
  <section class="p-6 max-w-sm mx-auto space-y-4">
    <h1>Sign In</h1>

    <form @submit.prevent="signin" class="space-y-3">
      <input
        type="email"
        placeholder="Email"
        v-model="email"
        required
      />
      <input
        type="password"
        placeholder="Password"
        v-model="password"
        minlength="6"
        required
      />
      <button type="submit" :disabled="loading">
        {{ loading ? 'Signing in…' : 'Sign In' }}
      </button>
    </form>

    <p v-if="errorMsg" style="color:#c00">{{ errorMsg }}</p>

    <router-link to="/FireRegister">Create an account</router-link>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { useRouter } from 'vue-router'

const email = ref('')
const password = ref('')
const loading = ref(false)
const errorMsg = ref('')

const router = useRouter()
const auth = getAuth()

async function signin() {
  errorMsg.value = ''
  loading.value = true
  try {
    await signInWithEmailAndPassword(auth, email.value, password.value)
    // success -> navigate somewhere after login
    router.push('/') // or '/Home' if that’s your home route
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
    case 'auth/invalid-email':
      return 'Invalid email address.'
    case 'auth/user-not-found':
    case 'auth/wrong-password':
      return 'Email or password is incorrect.'
    case 'auth/too-many-requests':
      return 'Too many attempts. Try again later.'
    default:
      return 'Sign-in failed. Please try again.'
  }
}
</script>

<style scoped>
input, button { display:block; width:100%; padding:.6rem; }
button[disabled] { opacity:.6; cursor:not-allowed; }
</style>
