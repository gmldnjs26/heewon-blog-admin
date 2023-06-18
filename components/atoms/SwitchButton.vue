<script setup lang="ts">
interface Props {
  text?: string
  checked?: boolean
  disabled?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  text: '',
  checked: false,
  disabled: false,
})

const emit = defineEmits(['change'])

const styles = computed(() => {
  const classes = []
  if (props.checked) {
    classes.push(
      'bg-blue-dark border-blue-dark before:inline-block before:w-[16px] before:h-[16px] before:rounded-full before:bg-white before:translate-x-5'
    )
  } else {
    classes.push(
      'border-gray-normal before:inline-block before:w-[16px] before:h-[16px] before:rounded-full before:bg-gray-normal before:translate-x-1'
    )
  }
  if (props.disabled) {
    classes.push('opacity-0.6')
  }
  return classes.join(' ')
})

const onChange = (e: Event & { target: HTMLInputElement }) => {
  emit('change', e.target.checked)
}
</script>

<template>
  <input
    class="inline-flex h-6 w-10 appearance-none items-center rounded-full border transition before:transition"
    :class="styles"
    :checked="checked"
    :disabled="disabled"
    type="checkbox"
    tabindex="0"
    @click="onChange"
    @keydown.space.prevent="onChange"
  />
</template>
