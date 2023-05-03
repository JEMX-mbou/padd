<template>
  <div class="container">
    <div class="row jc-center ai-center vh-100" id="intro">
      <div class="col text-center">
        <h1 class="primary-color">PADD</h1>
        <p><strong>The Planning app for people with ADD.</strong></p>
      </div>
      <div class="col-12 fd-row jc-space-around">
        <button-comp link="signin" class="primary shadow big">Sign in</button-comp>
        <button-comp link="register" class="dark shadow big">Register</button-comp>
      </div>
    </div>
  </div>
</template>

<script setup>
import ButtonComp from '../components/form/ButtonComp.vue'
</script>

<style lang="scss" scoped>
@use '../assets/scss/utitilies/mixins/shadow';
h1 {
  @include shadow.text($y: 0.5rem, $blur: 0.8rem);
  letter-spacing: -0.19em;
  font-size: 5rem;
}
</style>
