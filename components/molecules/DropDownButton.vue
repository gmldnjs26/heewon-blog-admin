<script setup lang="ts">
interface Item {
  id: string | number
  value: string | number
}

interface Props {
  text: string
  items: Item[]
  type?: 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger'
  position?: 'down' | 'right'
  disabled?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  text: '',
  items: () => [],
  type: 'primary',
  position: 'down',
  disabled: false,
})

const emit = defineEmits(['select'])
const onSelect = (id: string | number) => {
  emit('select', id)
}

const isOpen = ref(false)
const clickHandler = () => {
  isOpen.value = !isOpen.value
}
const blurHandler = () => {
  isOpen.value = false
}

const styles = computed(() => {
  const classes = []
  switch (props.position) {
    case 'right':
      classes.push('top-0 right-0')
      break
    case 'down':
      classes.push('top-[38px] left-0')
      break
  }
  return classes.join(' ')
})
</script>

<template>
  <div class="relative" @blur="blurHandler">
    <AtomsButton px="px-1" :type="type" :disabled="disabled" @click="clickHandler" @blur="blurHandler">
      <span class="ml-[6px] font-semibold">{{ text }}</span>
      <Icon name="FullArrowDown" size="18" />
    </AtomsButton>
    <ul v-show="isOpen" class="absolute z-10 min-w-[192px] rounded-sm bg-white p-2 shadow-md" :class="styles">
      <li
        v-for="(item, idx) in items"
        :key="idx"
        class="cursor-pointer rounded-md px-3 py-2 text-sm text-black hover:bg-gray-100"
        @click="onSelect(item.id)"
      >
        item.value
      </li>
    </ul>
  </div>
</template>
