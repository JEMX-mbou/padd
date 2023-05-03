<template>
  <main :class="!state.isLoggedIn ? 'splash' : ''">
    <RouterView />
  </main>
</template>

<script setup>
import { RouterView } from 'vue-router'
import { getAuth } from 'firebase/auth'
import { reactive } from 'vue'
import { useRouter } from 'vue-router'

const state = reactive({
  isLoggedIn: false
})

const router = useRouter()

const auth = getAuth()

const nonUserPages = ['home', 'signin', 'register']

const currentPage = router.currentRoute._value.name

auth.onAuthStateChanged((user) => {
  if (user) {
    state.isLoggedIn = true

    if (typeof currentPage == 'undefined' || nonUserPages.includes(currentPage)) {
      router.push('./dashboard')
    }
  } else {
    state.isLoggedIn = false
  }
})
</script>

<style lang="scss">
@use './assets/scss/config/theme-config' as theme;
@use './assets/scss/utitilies/mixins/gradient';

body {
}

main {
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
      z-index: -1;
    }
  }
}
</style>
