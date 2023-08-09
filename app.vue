<template lang="pug">
.container.my-4
  Title ごまの問題集
  .text-center
    .btn-group
      button.btn(v-for="(_csv,key) of problemCSVs"
      @click="selectedProblems = key.toString()"
      :class="selectedProblems === key ? 'btn-primary' : 'btn-outline-primary'"
      ) {{ key }}
  Session(v-if="data" :data="data")
</template>

<script setup lang="ts">
import dataCSV0 from "~/assets/hoan.csv?raw";
import dataCSV1 from "~/assets/data.csv?raw";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCeIOuLIWPTdi6hr5XC1bk0RKbLtSVlJ9o",
  authDomain: "dad-problem.firebaseapp.com",
  projectId: "dad-problem",
  storageBucket: "dad-problem.appspot.com",
  messagingSenderId: "615926471970",
  appId: "1:615926471970:web:93876343f7a893c5fb997b",
  measurementId: "G-69RDZPP64C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const selectedProblems = ref("保安")
const problemCSVs: { [key: string]: string } = {
  "保安": dataCSV0,
  "問題セットB": dataCSV1
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
