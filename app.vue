<template lang="pug">
.container.my-4 
  .text-center
    .btn-group
      button.btn(v-for="(_csv,key) of problemCSVs"
      @click="selectedProblems = key.toString()"
      :class="selectedProblems === key ? 'btn-primary' : 'btn-outline-primary'"
      ) 問題セット{{ key }}
  Session(v-if="data" :data="data")
</template>

<script setup lang="ts">
import dataCSV0 from "~/assets/data.csv?raw";
import dataCSV1 from "~/assets/data.csv?raw";

const selectedProblems = ref("A")
const problemCSVs: { [key: string]: string } = {
  "A": dataCSV0,
  "B": dataCSV1
}

const data = ref("")


data.value = dataCSV0
watch(selectedProblems, async () => {
  data.value = ""
  await nextTick()
  data.value = problemCSVs[selectedProblems.value]
})
</script>

<style lang="scss">
@use "bootstrap";
</style>
