<template>
  <body class="auth">
    <img :src="image" class="bg" />
    <router-view></router-view>
  </body>
</template>
<script>
import image from "@/assets/img/video_tt_2019_01.gif";
export default {
  data() {
    return {
      image,
    };
  },
};
</script>
<style>
img.bg {
  -webkit-user-drag: none;
  min-width: 1024px;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
}

@media screen and (max-width: 1024px) {
  img.bg {
    left: 50%;
    margin-left: -512px; /* 50% */
  }
}
.auth {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
