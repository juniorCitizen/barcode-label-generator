<template>
  <img v-if="idIsValid && textIsValid" :id="id" />
  <div v-else class="text-red-600">BARCODE VALUE MISSING</div>
</template>

<script setup lang="ts">
import {computed, defineProps, onMounted, nextTick, watch} from 'vue'
import jsbarcode from 'jsbarcode'

const props = defineProps({
  id: {
    type: String,
    default: '',
  },
  text: {
    type: String,
    default: '',
  },
})
const idIsValid = computed(() => props.id.length > 0)
const textIsValid = computed(() => props.text.length > 0)
const renderBarcode = (id: string, text: string) => {
  jsbarcode(`#${id}`)
    .options({
      margin: 0,
      marginBottom: 20,
      height: 60,
      font: 'monospace',
      fontOptions: 'bold',
      textAlign: 'left',
    })
    .CODE128(text, {fontSize: 20, textMargin: 0})
    .render()
}
onMounted(async () => {
  await nextTick()
  if (idIsValid.value && textIsValid.value) {
    renderBarcode(props.id, props.text)
  }
})
watch(
  () => props.text,
  async () => {
    await nextTick()
    if (idIsValid.value && textIsValid.value) {
      renderBarcode(props.id, props.text)
    }
  },
)
</script>
