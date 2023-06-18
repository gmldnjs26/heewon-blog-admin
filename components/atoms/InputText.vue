<script setup lang="ts">
interface Props {
  value: string
  type?: string
  placeholder?: string
  error?: boolean
  disabled?: boolean
  readonly?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  type: 'text',
  placeholder: '',
  error: false,
  disabled: false,
  readonly: false,
})

const emit = defineEmits(['input', 'blur', 'update:value'])

const onInput = (e: Event & { target: HTMLInputElement }) => {
  emit('input', e.target.value)
  emit('update:value', e.target.value)
}
const onBlur = (e: Event & { target: HTMLInputElement }) => {
  emit('blur', e.target.value)
}
</script>

<template>
  <input
    class="border-gray-normal rounded-md border px-3 py-2 leading-none text-black placeholder:text-black focus:outline-none focus:ring-1"
    :value="value"
    :type="type"
    :placeholder="placeholder"
    :disabled="disabled"
    :readonly="readonly"
    @input="onInput"
    @blur="onBlur"
  />
</template>
