<template>
  <div id="app-menu" ref="menu">
    <div id="menu-icon" ref="icon" @click="toggleMenu">
      <div class="inner"></div>
    </div>
    <div class="pages">
      <ul>
        <li><button-comp link="./dashboard" class="invert light big">Dashboard</button-comp></li>
        <li><button-comp link="./tasks" class="invert light big">Tasks</button-comp></li>
        <li><button-comp link="./tasks" class="invert light big">Tasks</button-comp></li>
      </ul>
    </div>
    <div class="user">
      <button-comp @click="authStore.signOut() ? router.push('/') : false">Sign Out</button-comp>
    </div>
  </div>
</template>

<script setup>
import ButtonComp from './form/ButtonComp.vue'

import { ref } from 'vue'
import { getAuth } from '@firebase/auth'
import { useRouter } from 'vue-router'

import { useAuthStore } from '../stores/authStore'

const menu = ref('')
const icon = ref('')

const authStore = useAuthStore()

const router = useRouter()

function toggleMenu() {
  menu.value.classList.toggle('is-active')
  icon.value.classList.toggle('is-active')
}
</script>

<style lang="scss">
@use '../assets/scss/config/theme-config' as theme;
@use '../assets/scss/utitilies/mixins/shadow';

#app-menu {
  @include shadow.box($x: 1rem, $blur: 1rem, $color: #0004);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: fixed;
  inset: 0 0;
  width: clamp(10rem, 50%, 80%);
  height: 100vh;
  background-color: theme.accent('medium');
  translate: -100% 0;
  z-index: 5;

  ul,
  li {
    width: 100%;
    padding: 0;
    margin: 0;
  }

  ul {
    li {
      a {
        display: inline-block;
        width: 100%;
        padding: 0.5rem 1rem;
      }
    }
  }
  button {
    width: 100%;
  }

  &.is-active {
    translate: 0 0;
  }

  #menu-icon {
    display: flex;
    position: absolute;
    top: 0.5rem;
    left: calc(100% + 0.5rem);
    width: 3rem;
    height: 3rem;
    padding: 0.5rem;
    align-items: center;
    border-radius: 50%;
    background-color: theme.accent('primary');

    .inner,
    .inner::before,
    .inner::after {
      content: '';
      width: 2rem;
      height: 4px;
      border-radius: 2px;
      background-color: #fff;
    }
    .inner {
      position: relative;
    }
    .inner::before,
    .inner::after {
      position: absolute;
    }
    .inner::before {
      top: -0.5rem;
    }
    .inner::after {
      top: 0.5rem;
    }
  }

  div.user {
    padding: 0.5rem 1rem;
  }
}
</style>
