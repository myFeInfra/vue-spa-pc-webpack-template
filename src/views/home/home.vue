<template>
  <div class="home">
    <h1>Welcome to Your Vue.js App</h1>
    <button @click="handleClick">点击</button>
    <p>{{ name }}</p>
    <p>{{ message }}</p>
    <button @click="layout">退出</button>
  </div>
</template>

<script lang="ts" setup>
import { useHomeStoreHook } from '@/stores/modules/homeStore'
import { ref } from 'vue'
import { localStorageCache } from '@/utils/settleCache'
import { useRouter } from 'vue-router'
const useHomeStore = useHomeStoreHook()
const router: ReturnType<typeof useRouter> = useRouter()
const name: string = useHomeStore.getName
const message: ReturnType<typeof ref<string>> = ref<string>('Hello, World!')
const handleClick: () => void = () => {
  useHomeStore.setName('hello')
}
const layout: () => void = () => {
  localStorageCache.removeCache('token')
  router.push({ path: '/login' })
}
</script>

<style scoped lang="less">
.home {
  font-size: 24px;
  color: #333;
  margin: 200px auto;
  max-width: 600px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f9f9f9;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  h1 {
    margin-bottom: 20px;
    font-size: 36px;
    color: #007bff;
  }
  button {
    margin-top: 20px;
    padding: 10px 20px;
    background-color: #4caf50;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  button:hover {
    background-color: #45a049;
  }
  p {
    margin-top: 10px;
    font-size: 18px;
    color: #666;
  }
  p:nth-child(3) {
    color: #f00;
  }
  p:nth-child(4) {
    color: #00f;
  }
  p:nth-child(5) {
    color: #0f0;
  }
}
</style>
