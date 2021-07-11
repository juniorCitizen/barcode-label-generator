<template>
  <div>{{ name }} - {{ age }}</div>
</template>

<script setup lang="ts">
import {reactive, toRefs} from 'vue'

const state = reactive({
  name: 'link',
  age: 25,
})

const {name, age} = toRefs(state)
</script>
