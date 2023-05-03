<template>
  <div class="container">
    <div class="row vh-100 ai-center">
      <div class="col px-4" id="register">
        <h1 class="primary-color text-center">Register</h1>
        <form @submit.prevent class="jc-center">
          <input-comp type="text" placeholder="E-mail" label="E-mail" v-model="form.email" />
          <input-comp
            type="password"
            placeholder="Password"
            label="Password"
            v-model="form.password"
          />
          <button-comp class="primary mt-2" @click="register()">Register</button-comp>
        </form>

        <router-link to="./signin">Sign In</router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import InputComp from '../components/form/InputComp.vue'
import ButtonComp from '../components/form/ButtonComp.vue'
import { RouterLink } from 'vue-router'

import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'

const form = reactive({ email: '', password: '' })

const router = useRouter()

function register() {
  const auth = getAuth()

  createUserWithEmailAndPassword(auth, form.email, form.password)
    .then((data) => {
      console.log(data)
      alert('Registration was succesful')
      router.push('/dashboard')
    })
    .catch((error) => {
      console.log(error)
      alert('Something went wrong, please try again.')
    })
}
</script>

<style lang="scss"></style>
