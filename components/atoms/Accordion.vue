<script setup lang="ts">
import { useTransition } from '~/composables/useTransition'

interface Props {
  isOpen?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  isOpen: false,
})

const {
  accordionBeforeEnter: beforeEnter,
  accordionBeforeLeave: beforeLeave,
  accordionEnter: enter,
  accordionLeave: leave,
} = useTransition()
</script>

<template>
  <Transition @before-enter="beforeEnter" @before-leave="beforeLeave" @enter="enter" @leave="leave">
    <div v-show="isOpen">
      <slot></slot>
    </div>
  </Transition>
</template>
