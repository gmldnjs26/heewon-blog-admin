<template>
  <input
    class="rounded-md border border-gray-normal placeholder-black text-black px-3 py-2 focus:ring-1 focus:outline-none leading-none"
    :type="type"
    :placeholder="placeholder"
    :disabled="disabled"
    :readonly="readonly"
    @input="onInput"
    @blur="onBlur"
  />
</template>

<script setup lang="ts">
interface Props {
  type: string
  placeholder: string
  error: boolean
  disabled: boolean
  readonly: boolean
}

const props = withDefaults(defineProps<Props>(), {
  type: 'text',
  placeholder: '',
  error: false,
  disabled: false,
  readonly: false,
})

const emit = defineEmits(['input', 'blur'])

const onInput = (e: Event & { target: HTMLInputElement }) => {
  emit('input', e.target.value)
}
const onBlur = (e: Event & { target: HTMLInputElement }) => {
  emit('blur', e.target.value)
}
</script>

<style scoped></style>
