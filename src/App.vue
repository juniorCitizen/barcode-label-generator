<template>
  <div id="app">
    <label-mockup/>
    <br>
    <input
      v-if="!errorMessage"
      v-model="inputValue"
      class="input"
      type="text"
      placeholder="Lot Number">
    &nbsp;
    <button
      v-if="inputValue!==''&&!errorMessage"
      class="button"
      @click="saveLabelToImage()"
    >
      save label image
    </button>
    <br>
    <div
      v-if="errorMessage"
      class="error-message">{{ errorMessage }}
    </div>
  </div>
</template>

<script>
import {saveAs} from 'file-saver'
import html2Canvas from 'html2canvas'
import LabelMockup from './components/LabelMockup'
import {mapState} from 'vuex'

export default {
  name: 'App',
  components: {LabelMockup},
  data() {
    return {
      errorMessage: '',
    }
  },
  computed: {
    ...mapState(['lotNumber', 'mockupHandle']),
    inputValue: {
      set(value) {
        this.$store.commit('setLotNumber', value)
      },
      get() {
        return this.lotNumber
      },
    },
  },
  methods: {
    saveLabelToImage() {
      return html2Canvas(this.mockupHandle)
        .then(canvas => {
          canvas.getContext('2d')
          const fileName = `${this.lotNumber}.png`
          const saveFn = blob => saveAs(blob, fileName)
          canvas.toBlob(saveFn)
        })
        .catch(error => {
          this.errorMessage = error.message
        })
    },
  },
}
</script>

<style scoped>
.error-message {
  color: red;
  font-family: monospace;
  font-size: 165%;
  font-weight: bold;
}
</style>
