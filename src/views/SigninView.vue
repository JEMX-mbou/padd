<template>
  <div class="container">
    <div class="row vh-100 ai-center">
      <div class="col px-2" id="signin">
        <h1 class="primary-color text-center">Sign in</h1>
        <form @submit.prevent="handleSingIn()" class="jc-center">
          <input-comp
            type="text"
            placeholder="E-mail"
            label="E-mail"
            v-model="form.email"
            required
          />
          <input-comp
            type="password"
            placeholder="Password"
            label="Password"
            v-model="form.password"
            required
          />
          <button-comp type="submit" class="primary mt-2">Sign in</button-comp>
        </form>

        <router-link to="./register">Register</router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import InputComp from '../components/form/InputComp.vue'
import ButtonComp from '../components/form/ButtonComp.vue'

import { reactive } from 'vue'
import { useRouter } from 'vue-router'

import { useAuthStore } from '../stores/authStore'

const form = reactive({ email: '', password: '' })

const authStore = useAuthStore()

const router = useRouter()

function handleSingIn() {
  if (authStore.signIn(form.email, form.password)) {
    router.push('./dashboard')
  } else {
    alert('Something went wrong, try again.')
  }
}
</script>

<style lang="scss"></style>
