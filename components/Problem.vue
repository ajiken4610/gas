<template lang="pug">
.text-center
  .h1(v-text="props.problem")
  .btn-group
    button.btn.btn-outline-primary(@click="emit('answer',false)") X
    button.btn.btn-primary(@click="emit('answer',true)") O
</template>

<script setup lang="ts">
const props = defineProps<{ problem: string }>();
const emit = defineEmits<(e: "answer", answer: boolean) => void>();
</script>
