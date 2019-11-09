<template>
  <div>
    <h1>ログインしました</h1>
    <P>こんにちわ{{ $store.state.auth.user.name }}さん</P>
    <!-- <P>こんにちわ{{ $auth.$state.user.name }}さん</P> -->
    <button @click="logout">ログアウト</button>
  </div>
</template>

<script>
export default {
  middleware: "auth",
  methods: {
    logout() {
      this.$auth.logout();
    }
  },
};
</script>
