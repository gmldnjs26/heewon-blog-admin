<template>
  <Icon name="LoginIcon" size="48" class="text-teal-400" />
  <div>
    IndexPage
    <input type="checkbox" />
    <label>asdasd</label>
    <AtomsButton @click="clickHandler" width="150px">Button</AtomsButton>
    <AtomsButton @click="clickHandler" type="secondary">
      <Icon class="mr-1" name="LoginIcon" size="24" />Button
    </AtomsButton>
    <AtomsButton @click="clickHandler" type="info"> Button </AtomsButton>
    <AtomsButton @click="clickHandler" type="warning">Button</AtomsButton>
    <AtomsButton @click="clickHandler" type="success">Button</AtomsButton>
    <AtomsButton @click="clickHandler" type="danger" width="150px">Button</AtomsButton>
    <div class="text-xl w-10 cursor-pointer" @click="toggleAccordion">Accordion Title</div>
    <AtomsAccordion :is-open="isOpen">
      <div class="h-5">asdasd</div>
      <div class="h-5">asdasd</div>
      <div class="h-5">asdasd</div>
      <div class="h-5">asdasd</div>
    </AtomsAccordion>

    <AtomsCheckBox id="sampleCheck" text="sample" :checked="checked" :disabled="true" @change="handleChkBoxChange" />

    <AtomsSwitchButton :checked="checked" :disabled="false" @change="handleChkBoxChange" />

    <AtomsInputText :value="text" @input="inputHandler" :readonly="false" />

    <MoleculesDropDown text="DropDown" :items="dropDownItems" />
  </div>
</template>

<script setup lang="ts">
const checked = ref(false)
const handleChkBoxChange = () => {
  checked.value = !checked.value
}
const clickHandler = () => {
  console.log('click')
}
const isOpen = ref(false)
const toggleAccordion = () => {
  isOpen.value = !isOpen.value
}

const dropDownItems = [
  {
    id: 1,
    value: 'heewon',
  },
  {
    id: 2,
    value: 'heewon2',
  },
  {
    id: 3,
    value: 'heewon3',
  },
]

const text = ref<string | number>('')
const inputHandler = (value: string | number) => {
  text.value = value
}
</script>
