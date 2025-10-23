<template>
    <h1>sign in</h1>
    <p><input type="text"placeholder="email" v-model="email"/></p>
    <p><input type="password" placeholder="password" v-model="password"/></p>
    <p><button @click="signin">sign in via firebase</button></p>
</template>

<script setup>
import { ref } from 'vue'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from 'vue-router'
const router = useRouter()
const email = ref('')
const password = ref('')
const auth = getAuth();
const signin = () => {
    signInWithEmailAndPassword(getAuth(), email.value, password.value)
    .then((data) => { 
        console.log('Firebase Login Successful!')
        router.push('/')
        console.log(auth.currentUser)
    }).catch((error) => {
        console.log(errorCode);
    })
};
</script>