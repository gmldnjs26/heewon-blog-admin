<template>
  <input
    class="inline-flex items-center w-10 h-6 rounded-full border appearance-none transition-all duration-250"
    :class="styles"
    :checked="checked"
    :disabled="disabled"
    type="checkbox"
    tabindex="0"
    @click="onChange"
    @keydown.space.prevent="onChange"
  />
  asdasd
</template>

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
  if (props.checked) {
    return 'bg-blue-dark border-blue-dark before:inline-block before:w-[16px] before:h-[16px] before:rounded-full before:bg-white before:ml-5'
  } else {
    return 'border-gray before:inline-block before:w-[16px] before:h-[16px] before:rounded-full before:bg-gray before:ml-1'
  }
})

const onChange = (e: Event & { target: HTMLInputElement }) => {
  emit('change', e.target.checked)
}
</script>
