<template lang="pug">
.text-center
  .h1(v-text="props.problem")
  .h2 あなたの回答 : {{ userAnswer?"O":"X" }}
  .h2 正しい回答 : {{ correctAnswer ? "O":"X" }}
  .h2 正誤 : {{ userAnswer === correctAnswer ? "正": "誤" }}
  button.btn.btn-primary(@click="emit('next')") 次へ
</template>

<script setup lang="ts">
const props = defineProps<{
  problem: string;
  userAnswer: boolean;
  correctAnswer: boolean;
}>();
const emit = defineEmits<(e: "next") => void>();
</script>
