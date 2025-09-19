<template>
    <h1>create an account</h1>
    <p><input type="text"placeholder="email" v-model="email"/></p>
    <p><input type="password" placeholder="password" v-model="password"/></p>
    <p><button @click="register">Register</button></p>
</template>

<script setup>
import { ref } from 'vue'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useRouter } from 'vue-router'
const router = useRouter()
const email = ref('')
const password = ref('')
const auth = getAuth();
const register = () => {
    createUserWithEmailAndPassword(auth, email.value, password.value)
    .then((data) => { 
        console.log('Firebase Register Successful!')
        router.push('/FireLogin')
    }).catch((error) => {
        console.log(errorCode);
    })
};
</script>