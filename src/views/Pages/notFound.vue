<template>
  <div id="app">
    <img :src="notFoundImg" width="25%" />
    <h2 class="notFound mt-3">Página não encontrada</h2>
  </div>
</template>
<script>
import notFoundImg from "@/assets/img/not_found.svg";
export default {
  data() {
    return {
      notFoundImg,
    };
  },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.notFound {
  color: #fff;
}
</style>
