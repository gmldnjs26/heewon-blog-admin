<script setup lang="ts">
import { useTransition } from '~/composables/useTransition'

interface Props {
  isOpen?: boolean
}

type Tag = HTMLDivElement

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
  <Transition @before-enter="beforeEnter<Tag>" @before-leave="beforeLeave<Tag>" @enter="enter<Tag>" @leave="leave<Tag>">
    <div v-show="isOpen">
      <slot></slot>
    </div>
  </Transition>
</template>
