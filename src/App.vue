<template>
  <div
    ref="labelElement"
    class="p-4 bg-white border border-black border-solid w-max"
  >
    <Barcode :id="'vendor'" :text="'GENTRY HARDWARE'"></Barcode>
    <Barcode :id="'model'" :text="'GT-9403D-4H-KD'"></Barcode>
    <Barcode :id="'lot-number'" :text="lotNumber"></Barcode>
    <div>GENTRY HARDWARE PRODUCTS CO., LTD.</div>
    <div>PRODUCT: ALUM. IV STAND</div>
    <div>REF: GT-9403D-4H-KD</div>
    <div v-if="lotNumberIsAvailable">LOT: {{ lotNumber }}</div>
    <div v-else class="text-red-600">LOT: PENDING</div>
    <br />
    <div>NO SPECIAL STORAGE REQUIREMENTS</div>
    <div>NO EXPIRATION DATE</div>
  </div>

  <div class="flex flex-wrap mt-2">
    <div class="w-full max-w-lg py-2">
      <input
        v-model="lotNumber"
        type="text"
        placeholder="ENTER LOT NUMBER"
        class="px-2 py-1 leading-tight text-gray-700 border rounded shadow appearance-none  focus:outline-none focus:ring"
      />
    </div>
    <div v-if="lotNumberIsAvailable" class="w-full py-2">
      <button
        class="px-4 py-2 font-bold text-white bg-blue-500 rounded  hover:bg-blue-700 focus:outline-none"
        @click="saveLabel(labelElement)"
      >
        SAVE LABEL
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import {computed, ref} from 'vue'
import Barcode from '@/components/Barcode.vue'
import * as htmlToImage from 'html-to-image'
import fileSaver from 'file-saver'

const lotNumber = ref('')
const lotNumberIsAvailable = computed(() => lotNumber.value.length > 0)
const labelElement = ref<HTMLElement>()

const saveLabel = async (
  htmlElement: HTMLElement | undefined,
): Promise<void> => {
  if (htmlElement !== undefined) {
    const blob = await htmlToImage.toBlob(htmlElement)
    if (blob !== null) {
      fileSaver.saveAs(blob, `${lotNumber.value}.png`)
    }
  }
}
</script>
