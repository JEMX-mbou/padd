<template>
  <router-link v-if="link" :to="props.link">
    <button :class="props.class"><slot></slot></button>
  </router-link>
  <a v-else-if="href" :href="props.href">
    <button :class="props.class"><slot></slot></button>
  </a>
  <button v-else :class="props.class" :type="props.type"><slot></slot></button>
</template>

<script setup>
import { RouterLink } from 'vue-router'

const props = defineProps({
  href: String,
  link: String,
  type: String,
  class: String
})
</script>

<style lang="scss">
@use '../../assets/scss/config/base-config' as base;
@use '../../assets/scss/config/theme-config' as theme;
@use '../../assets/scss/utitilies/mixins/shadow';

button {
  padding: 0.5em 1em;
  border-radius: 0.6em;
  border: 2px solid;
  font-family: base.font-family('title');
  font-weight: bold;
  font-size: 1rem;

  &.invert {
    background-color: transparent;
  }

  &.shadow {
    @include shadow.box($y: 0.3em, $blur: 0.3em, $color: #0008);
  }

  @each $name, $color in theme.accent() {
    &.#{$name}:not(.invert) {
      background-color: $color;
      border-color: $color;
      transition: background-color 0.3s ease;

      @if (lightness($color) > 50) {
        color: theme.font-color(false);
      } @else {
        color: theme.font-color();
      }

      &:hover {
        background-color: darken($color, 10%);
        border-color: darken($color, 10%);
      }
    }
    &.#{$name}.invert {
      color: $color;
      border-color: $color;
    }
  }
}
</style>
