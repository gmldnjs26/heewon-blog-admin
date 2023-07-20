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

const text = ref<string>('')
const inputHandler = (value: string) => {
  text.value = value
}

const radioValue = ref<string>('a')
</script>

<template>
  <Icon name="LoginIcon" size="48" />
  <div>
    IndexPage
    <input type="checkbox" />
    <label>asdasd</label>
    <Button width="150px" @click="clickHandler"> Button </Button>
    <Button type="secondary" @click="clickHandler"> <Icon class="mr-1" name="LoginIcon" size="24" />Button </Button>
    <Button type="info" @click="clickHandler"> Button </Button>
    <Button type="warning" @click="clickHandler"> Button </Button>
    <Button type="success" @click="clickHandler"> Button </Button>
    <Button type="danger" width="150px" @click="clickHandler"> Button </Button>
    <div class="w-10 cursor-pointer text-xl" @click="toggleAccordion">Accordion Title</div>
    <Accordion :is-open="isOpen">
      <div class="h-5">asdasd</div>
      <div class="h-5">asdasd</div>
      <div class="h-5">asdasd</div>
      <div class="h-5">asdasd</div>
    </Accordion>

    <CheckBox id="sampleCheck" text="sample" :checked="checked" :disabled="true" @change="handleChkBoxChange" />

    <SwitchButton :checked="checked" :disabled="false" @change="handleChkBoxChange" />

    <InputText :value="text" :readonly="false" @input="inputHandler" />

    <DropDownButton text="DropDown" :items="dropDownItems" />

    <RadioGroup v-model:selectedValue="radioValue">
      <InputRadio value="a" label="AAAAA" />
      <InputRadio value="b" label="BBBBB" />
    </RadioGroup>
  </div>
</template>
