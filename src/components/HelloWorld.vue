<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div>
      <el-button @click="changeCount('minus')">-</el-button>
      <span style="padding:0 10px">{{ count }}</span>
      <el-button @click="changeCount('add')">+</el-button>
    </div>
    <div style="margin-top:20px">
      <el-button type="primary" @click="changeMsg">Change Msg</el-button>
      <el-button  type="primary" plain @click="goHome">Go to Home</el-button>
    </div>

  </div>
</template>

<script setup>
import { computed, defineProps, defineEmits } from 'vue'
import { useStore } from 'vuex'

import { useRouter } from 'vue-router'

const store = useStore()

const $router = useRouter()

const count = computed(() => store.getters.count)

const props = defineProps({
  msg: String
})

const emits = defineEmits(['changeMsg'])

const changeCount = (type) => {
  store.dispatch('app/setCount', type === 'add' ? count.value + 1 : count.value - 1)
}

const goHome = (type) => {
  $router.push({
    path: '/home',
    query: {
      isLoad: '1'
    }
  })
}

const changeMsg = () => {
  emits('changeMsg', 'Child Msg')
}

console.log('props msg >>>', props.msg)
</script>
