<script setup lang="ts">
interface Props {
  text?: string
  checked?: boolean
  indeterminate?: boolean
  disabled?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  text: '',
  checked: false,
  indeterminate: false,
  disabled: false,
})

const emit = defineEmits(['change'])

const styles = computed(() => {
  // indeterminate style 구현
  if (props.checked) {
    return 'border-blue-dark bg-blue-dark before:absolute before:mb-1 before:w-[10px] before:h-[4.5px] before:border-white before:border-b-2 before:border-l-2 before:-rotate-45'
  } else {
    return 'border-gray-normal'
  }
})

const onChange = (e: Event & { target: HTMLInputElement }) => {
  emit('change', e.target.checked)
}
</script>

<template>
  <label class="inline-flex items-center" :class="{ 'opacity-50': disabled }">
    <input
      class="mr-1 inline-flex h-4 w-4 appearance-none items-center justify-center rounded border border-solid transition-all"
      :class="styles"
      type="checkbox"
      :checked="checked"
      :disabled="disabled"
      @change="onChange"
    />
    <span :class="checked ? 'font-bold' : ''">{{ text }}</span>
  </label>
</template>
