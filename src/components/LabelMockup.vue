<template>
  <div id="label-mockup">
    <img class="barcode"
         jsbarcode-format="code128"
         jsbarcode-value="GENTRY HARDWARE"
         jsbarcode-displayValue="true"
         jsbarcode-textmargin="0"
         jsbarcode-fontoptions="bold"
         jsbarcode-height="60"
         jsbarcode-textAlign="left"
         jsbarcode-width="2"
         jsbarcode-background="">
    <br>
    <img class="barcode"
         jsbarcode-format="code128"
         jsbarcode-value="GT-9403D-4H-KD"
         jsbarcode-displayValue="true"
         jsbarcode-textmargin="0"
         jsbarcode-fontoptions="bold"
         jsbarcode-height="60"
         jsbarcode-textAlign="left"
         jsbarcode-width="2"
         jsbarcode-background="">
    <br>
    <img v-if="lotNumber"
         :jsbarcode-value="lotNumber"
         class="barcode"
         jsbarcode-format="code128"
         jsbarcode-displayValue="true"
         jsbarcode-textmargin="0"
         jsbarcode-fontoptions="bold"
         jsbarcode-height="60"
         jsbarcode-textAlign="left"
         jsbarcode-width="2"
         jsbarcode-background="">
    <div v-else
         class="warning-text">
      Lot number is empty
    </div>
    <br>
    <br>
    <div class="label-text">GENTRY HARDWARE PRODUCTS CO., LTD.</div>
    <div class="label-text">PRODUCT: ALUM. IV STAND</div>
    <div class="label-text">REF: GT-9403D-4H-KD</div>
    <div class="label-text">LOT: {{ lotNumber }}</div>
    <br>
    <div class="label-text">NO SPECIAL STORAGE REQUIREMENTS</div>
    <div class="label-text">NO EXPIRATION DATE</div>
  </div>
</template>

<script>
import jsbarcode from 'jsbarcode'
import {mapState} from 'vuex'

export default {
  name: 'LabelMockup',
  computed: {
    ...mapState(['lotNumber']),
  },
  watch: {
    lotNumber() {
      this.$nextTick(() => jsbarcode('.barcode').init())
    },
  },
  mounted() {
    jsbarcode('.barcode').init()
    this.$store.commit('setMockupHandle', this.$el)
  },
}
</script>

<style scoped>
#label-mockup {
  border: 1px solid black;
  background-color: white;
  width: max-content;
  padding: 10px;
}

.warning-text {
  font-family: monospace;
  color: red;
  font-size: 165%;
  font-weight: bold;
  padding-left: 10px;
}

.label-text {
  font-family: monospace;
  font-weight: bold;
  font-size: 165%;
  padding-left: 10px;
}
</style>
