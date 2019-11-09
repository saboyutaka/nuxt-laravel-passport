<template>
  <div>
    <h1>ログインしました</h1>
    <P>こんにちわ{{ $store.state.auth.user.name }}さん</P>
    <!-- <P>こんにちわ{{ $auth.$state.user.name }}さん</P> -->
    <button @click="logout">ログアウト</button>

    <table>
      <tbody>
        <tr v-for="post in posts" :key="post.id">
          <td>{{post.id}}</td>
          <td>{{post.title}}</td>
          <td>{{post.content}}</td>
        </tr>
      </tbody>
    </table>
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
  async asyncData({ $axios, env }) {
    const { data } = await $axios.get(env.LARAVEL_APP_URL + "/api/posts");
    return { posts: data.posts };
  }
};
</script>
