<template>
  <label v-if="label" :for="name">{{ label }}</label>
  <input
    :type="type"
    :name="name"
    :id="name"
    :placeholder="placeholder"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
    :required="required"
  />
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'

defineProps({
  type: String,
  name: String,
  label: String,
  modelValue: String,
  placeholder: String,
  required: Boolean
})

defineEmits(['update:modelValue'])
</script>

<style lang="scss">
@use '../../assets/scss/config/theme-config' as theme;
input {
  background-color: #0004;
  color: theme.accent('light');
  letter-spacing: 0.1em;
  border: solid theme.accent('light');
  border-width: 0 0 2px 0;
}
</style>
