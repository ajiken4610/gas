<template lang="pug">
div
  Problem(v-if="problemVisibility" :problem="showingproblem.problem" @answer="answerFunc && answerFunc($event)")
  ProblemResult(v-if="problemResultVisibility"
  :problem="showingproblem.problem"
  :userAnswer="userAnswer"
  :correctAnswer="showingproblem.answer"
  @next="nextFunc && nextFunc()")
  Result(v-if="resultVisibility" :result="result" @next="nextFunc && nextFunc()")
</template>

<script setup lang="ts">
const props = defineProps<{ data: string }>()
const dataCSV = props.data
// states
const problemVisibility = ref(false);
const problemResultVisibility = ref(false);
const resultVisibility = ref(false);

let answerFunc: (answer: boolean) => void;
let nextFunc: () => void
let result = ref<{
  problem: string;
  userAnswer: boolean;
  correctAnswer: boolean;
}[]>([])

const userAnswer = ref(false);

const showingproblem = ref<{ problem: string; answer: boolean }>({
  problem: "",
  answer: false,
});
// parse
const rows = dataCSV.split("\n");
const data = rows.map((row) => row.split(","));

(async () => {
  while (true) {
    const problems: { problem: string, userAnswer: boolean, correctAnswer: boolean }[] = []
    for (var i = 0; i < 5; i++) {
      // 問題の生成
      const problem = data[Math.floor(Math.random() * data.length)];
      showingproblem.value = {
        problem: problem[0],
        answer: problem[1] === "〇" || problem[1] === "○",
      };
      problemVisibility.value = true;
      await new Promise<void>((resolve) => {
        answerFunc = (answer: boolean) => {
          userAnswer.value = answer;
          resolve();
        };
      });
      problemVisibility.value = false;
      problemResultVisibility.value = true;
      await new Promise<void>((resolve) => {
        nextFunc = () => {
          resolve()
        }
      })
      problemResultVisibility.value = false;
      problems.push({
        problem: showingproblem.value.problem,
        userAnswer: userAnswer.value,
        correctAnswer: showingproblem.value.answer
      })
    }

    await new Promise<void>((resolve) => {
      result.value = problems
      resultVisibility.value = true;
      nextFunc = () => resolve()
    })
    resultVisibility.value = false;
  }
})();
</script>

