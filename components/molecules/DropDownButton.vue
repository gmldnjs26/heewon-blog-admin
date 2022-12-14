<template>
  <div class="relative" @blur="blurHandler">
    <AtomsButton px="px-1" :type="type" :disabled="disabled" @click="clickHandler" @blur="blurHandler">
      <span class="font-semibold ml-[6px]">{{ text }}</span>
      <Icon name="FullArrowDown" size="18" />
    </AtomsButton>
    <ul class="absolute bg-white shadow-md min-w-[192px] rounded-sm p-2 z-10" :class="styles" v-show="isOpen">
      <li
        v-for="(item, idx) in items"
        class="px-3 py-2 text-sm cursor-pointer text-black hover:bg-gray-100 rounded-md"
        :key="idx"
        @click="onSelect(item.id)"
      >
        item.value
      </li>
    </ul>
  </div>
</template>

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

<style scoped></style>
