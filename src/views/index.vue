<style lang="less" scoped>

</style>
<template>
  <img alt="Vue logo" :src="Logo" />
  <HelloWorld :msg="msg" @changeMsg="changeMsg"/>
</template>

<script setup>
import { ref } from 'vue'

import HelloWorld from '@/components/HelloWorld.vue'
import Logo from '@/assets/logo.png'

const msg = ref('Hello Vue3.0')

const changeMsg = (emitMsg) => {
  msg.value = emitMsg
}

</script>
