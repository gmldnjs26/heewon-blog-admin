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

<template>
  <Icon name="LoginIcon" size="48" class="text-teal-400" />
  <div>
    IndexPage
    <input type="checkbox" />
    <label>asdasd</label>
    <AtomsButton width="150px" @click="clickHandler"> Button </AtomsButton>
    <AtomsButton type="secondary" @click="clickHandler">
      <Icon class="mr-1" name="LoginIcon" size="24" />Button
    </AtomsButton>
    <AtomsButton type="info" @click="clickHandler"> Button </AtomsButton>
    <AtomsButton type="warning" @click="clickHandler"> Button </AtomsButton>
    <AtomsButton type="success" @click="clickHandler"> Button </AtomsButton>
    <AtomsButton type="danger" width="150px" @click="clickHandler"> Button </AtomsButton>
    <div class="w-10 cursor-pointer text-xl" @click="toggleAccordion">Accordion Title</div>
    <AtomsAccordion :is-open="isOpen">
      <div class="h-5">asdasd</div>
      <div class="h-5">asdasd</div>
      <div class="h-5">asdasd</div>
      <div class="h-5">asdasd</div>
    </AtomsAccordion>

    <AtomsCheckBox id="sampleCheck" text="sample" :checked="checked" :disabled="true" @change="handleChkBoxChange" />

    <AtomsSwitchButton :checked="checked" :disabled="false" @change="handleChkBoxChange" />

    <AtomsInputText :value="text" :readonly="false" @input="inputHandler" />

    <MoleculesDropDownButton text="DropDown" :items="dropDownItems" />
  </div>
</template>
