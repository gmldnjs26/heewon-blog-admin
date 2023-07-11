
<script setup lang="ts">
import { h, mergeProps } from 'vue'

type ListnerFunc = (vnode: any) => void

const props = defineProps<{
  selectedValue: string
}>()

const emit = defineEmits(['update:selectedValue'])

const RADIO_BUTTON_NAME = 'Radio'

// const _addListener = (listeners: any, eventName: string, listener: ListnerFunc) => {
//   if (!listeners[eventName]) {
//     listeners[eventName] = [listener]
//     return
//   }

//   if (typeof listeners[eventName] === 'function') {
//     listeners[eventName] = [listeners[eventName]]
//   }

//   listeners[eventName].push(listener)
// }

// const addListener = (vnode: any, eventName: string, listener: ListnerFunc) => {
//   if (!vnode.componentOptions.listeners) {
//     vnode.componentOptions.listeners = {}
//   }

//   _addListener(vnode.componentOptions.listeners, eventName, listener)
// }

const applyMatchedNodes = (vnodes: any, componentName: string, applyFunc: ListnerFunc) => {
  const regex = new RegExp(`${componentName}$`)
  for (let i = 0; i < vnodes.length; i++) {
    const vnode = vnodes[i]
    console.log(vnode.type.__name)
    if (regex.test(vnode.type.__name)) {
      applyFunc(vnode)
    }
    if (vnode.children) {
      applyMatchedNodes(vnode.children, componentName, applyFunc)
    }
  }
}

const slots = useSlots()

const render = () => {
  const vnodes = slots.default()
  applyMatchedNodes(vnodes, RADIO_BUTTON_NAME, (vnode) => {
    vnode.props = vnode.props || {}
    vnode.props.selectedValue = props.selectedValue
    vnode.props = mergeProps(vnode.props, {
      onChange(value: string) {
        emit('update:selectedValue', value)
      },
    })
  })
  return h('div', {}, vnodes)
}
</script>

<template>
  <render />
</template>