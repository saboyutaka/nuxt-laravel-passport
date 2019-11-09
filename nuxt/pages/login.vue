<template>
  <div>
    <h1>ログイン画面</h1>
    <button @click="authenticate">ログイン</button>
  </div>
</template>

<script>
export default {
  methods: {
    authenticate() {
      this.$auth.loginWith("laravel.passport");
    }
  }
};
</script>
