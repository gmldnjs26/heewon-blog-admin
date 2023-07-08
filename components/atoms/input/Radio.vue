<script setup lang="ts">
interface Props {
  selectedValue?: string
  value: string
  label?: string
  disabled?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  selectedValue: '',
  label: '',
  disabled: false,
})

const emits = defineEmits<{
  (e: 'change', value: string): void
}>()

const onInput = (e: Event) => {
  emits('change', props.value)
}

const isSelected = computed(() => {
  return props.value === props.selectedValue
})
</script>

<template>
  <div class="inline-flex items-center">
    <input
      :id="value + '_id'"
      class="h-4 w-4 border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500"
      type="radio"
      :checked="isSelected"
      :value="value"
      :disabled="disabled"
      @input="onInput"
    />
    <label :for="value + '_id'" class="ml-2 text-sm font-medium text-gray-900">{{ label }}</label>
  </div>
</template>
