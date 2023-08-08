<template lang="pug">
.text-center
  table.table.table-striped.table-responsive
    thead
      tr
        th 問題
        th あなた
        th 正解
        th 正誤
    tbody
      tr(v-for="resultRow of result")
        th {{ resultRow.problem }}
        th {{ resultRow.userAnswer ? "O" : "X" }}
        th {{ resultRow.correctAnswer ? "O" : "X" }}
        th {{ resultRow.userAnswer === resultRow.correctAnswer ? "正" : "誤" }}
  button.btn.btn-primary(@click="emit('next')") 次へ
</template>

<script setup lang="ts">
defineProps<{ result: { problem: string, userAnswer: boolean, correctAnswer: boolean }[] }>()
const emit = defineEmits<(e: "next") => void>()
</script>