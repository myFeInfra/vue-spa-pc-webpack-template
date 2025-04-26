<template>
  <div class="login">
    <h1>登录</h1>
    <form>
      <label for="username">用户名:</label>
      <input type="text" id="username" v-model="username" />
      <br />
      <label for="password">密码:</label>
      <input type="password" id="password" v-model="password" />
      <br />
      <button type="button" @click="login">登录</button>
    </form>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { localStorageCache } from '@/utils/settleCache'
import { useRouter } from 'vue-router'
const username: ReturnType<typeof ref<string>> = ref<string>('')
const password: ReturnType<typeof ref<string>> = ref<string>('')
const router: ReturnType<typeof useRouter> = useRouter()
const login: () => void = () => {
  localStorageCache.setCache('token', '123456')
  router.push({ path: '/' })
}
</script>

<style scoped lang="less">
.login {
  max-width: 300px;
  margin: 200px auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f9f9f9;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  h1 {
    text-align: center;
  }
  form {
    display: flex;
    flex-direction: column;
  }
  label {
    margin-bottom: 5px;
  }
  input {
    margin-bottom: 10px;
    padding: 5px;
  }
  button {
    padding: 10px;
    background-color: #4caf50;
  }
  button:hover {
    background-color: #45a049;
  }
}
</style>
