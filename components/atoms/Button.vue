<script setup lang="ts">
interface Props {
  type?: 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger'
  size?: 'small' | 'medium' | 'large'
  px?: string
  width?: string
  disabled?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  type: 'primary',
  size: 'medium',
  px: 'px-3',
  width: '',
  disabled: false,
})

const emit = defineEmits(['click', 'blur'])

const onClick = () => {
  emit('click')
}

const onBlur = () => {
  emit('blur')
}

// https://tailwindcss.com/docs/content-configuration#dynamic-class-names
// 동적 클래스 이름을 쓸 때는 중간에 javascript 코드를 끼워 넣을수는 없다.
const styles = computed<string>(() => {
  const classes = []
  // button color styles
  switch (props.type) {
    case 'primary': {
      classes.push(
        'text-primary-color bg-primary-bg border-primary-border-color',
        'hover:text-primary-hover-color hover:bg-primary-hover-bg hover:border-primary-hover-border-color',
        'disabled:text-primary-disabled-color disabled:bg-primary-disabled-bg disabled:border-primary-disabled-border-color'
      )
      break
    }
    case 'secondary': {
      classes.push(
        'text-secondary-color bg-secondary-bg border-secondary-border-color',
        'hover:text-secondary-hover-color hover:bg-secondary-hover-bg hover:border-secondary-hover-border-color',
        'disabled:text-secondary-disabled-color disabled:bg-secondary-disabled-bg disabled:border-secondary-disabled-border-color'
      )
      break
    }
    case 'success': {
      classes.push(
        'text-success-color bg-success-bg border-success-border-color',
        'hover:text-success-hover-color hover:bg-success-hover-bg hover:border-success-hover-border-color',
        'disabled:text-success-disabled-color disabled:bg-success-disabled-bg disabled:border-success-disabled-border-color'
      )
      break
    }
    case 'info': {
      classes.push(
        'text-info-color bg-info-bg border-info-border-color',
        'hover:text-info-hover-color hover:bg-info-hover-bg hover:border-info-hover-border-color',
        'disabled:text-info-disabled-color disabled:bg-info-disabled-bg disabled:border-info-disabled-border-color'
      )
      break
    }
    case 'warning': {
      classes.push(
        'text-warning-color bg-warning-bg border-warning-border-color',
        'hover:text-warning-hover-color hover:bg-warning-hover-bg hover:border-warning-hover-border-color',
        'disabled:text-warning-disabled-color disabled:bg-warning-disabled-bg disabled:border-warning-disabled-border-color'
      )
      break
    }
    case 'danger': {
      classes.push(
        'text-danger-color bg-danger-bg border-danger-border-color',
        'hover:text-danger-hover-color hover:bg-danger-hover-bg hover:border-danger-hover-border-color',
        'disabled:text-danger-disabled-color disabled:bg-danger-disabled-bg disabled:border-danger-disabled-border-color'
      )
      break
    }
  }
  // button size styles
  switch (props.size) {
    case 'small': {
      classes.push('text-sm')
      break
    }
    case 'medium': {
      classes.push('text-base')
      break
    }
    case 'large': {
      classes.push('text-large')
      break
    }
  }

  // etc styles
  classes.push(props.px)

  return classes.join(' ')
})
</script>

<template>
  <button
    type="button"
    tabindex="1"
    class="duration-250 flex items-center justify-center rounded-[3px] border py-[6px] transition ease-in-out"
    :style="`width: ${width}`"
    :class="styles"
    :disabled="disabled"
    @click="onClick"
    @blur="onBlur"
  >
    <slot></slot>
  </button>
</template>
