<template>
  <main :class="!authRefs.isLoggedIn.value ? 'splash' : ''">
    <app-menu v-if="authRefs.isLoggedIn.value" />
    <RouterView />
  </main>
</template>

<script setup>
import AppMenu from './components/AppMenu.vue'

import { RouterView, useRouter } from 'vue-router'

import { useAuthStore } from './stores/authStore'
import { storeToRefs } from 'pinia'

const authStore = useAuthStore()

authStore.setAuth()

const authRefs = storeToRefs(useAuthStore())

const router = useRouter()

authStore.auth.onAuthStateChanged((user) => {
  authStore.setUser(user)

  if (router.currentRoute.value.meta.requiresAuth && !user) {
    console.log('Dissallowed')
    router.push('./signin')
  }
})
</script>

<style lang="scss">
@use './assets/scss/config/theme-config' as theme;
@use './assets/scss/utitilies/mixins/gradient';

body {
}

main {
  padding: 1rem;

  &.splash {
    @include gradient.linear(
      $deg: 20deg,
      $color1: darken(theme.accent('primary'), 20%),
      $color2: theme.accent('dark'),
      $pos2: 85%
    );

    &::before {
      content: '';
      position: absolute;
      inset: 0 0;
      width: 100%;
      height: 100%;
      background-image: url('./assets/background.svg');
      background-size: cover;
      background-position: center;
      mix-blend-mode: color-burn;
    }
  }
}
</style>
