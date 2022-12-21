<template>
  <label class="inline-flex items-center" :class="{ 'opacity-50': disabled }">
    <input
      :id="id"
      class="inline-flex items-center justify-center mr-1 w-4 h-4 rounded border border-solid appearance-none transition-all"
      :class="styles"
      type="checkbox"
      :checked="checked"
      :disabled="disabled"
      @change="onChange"
    />
    <span :class="checked ? 'font-bold' : ''">{{ text }}</span>
  </label>
</template>

<script setup lang="ts">
interface Props {
  id: string
  text?: string
  checked?: boolean
  halfChecked?: boolean
  disabled?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  id: '',
  text: '',
  checked: false,
  halfChecked: false,
  disabled: false,
})

const emit = defineEmits(['change'])

const styles = computed(() => {
  if (props.checked) {
    return 'border-blue-dark bg-blue-dark before:absolute before:mb-1 before:w-[10px] before:h-[4.5px] before:border-white before:border-b-2 before:border-l-2 before:-rotate-45'
  } else {
    return 'border-gray'
  }
})

const onChange = (e: Event & { target: HTMLInputElement }) => {
  emit('change', e.target.checked)
}
</script>
