<style lang="less" scoped></style>
<template>
  <h4>Home</h4>
</template>

<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()

const query = route.query

console.log('query >>>', query)

</script>
