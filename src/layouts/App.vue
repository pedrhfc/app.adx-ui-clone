<template>
  <div>
    <app-navbar
      :matricula="matricula"
      :unidade="unidade"
      :logoImg="adxLogo"
      @user:logout="logout"
    />
    <div class="mt-3 col-10">
      <router-view></router-view>
    </div>
    <app-sidebar :logoImg="logoImg" :menus="menus" @menu:path="handleMenu" />
  </div>
</template>
<script>
import { Navbar, Sidebar } from "@/components/";
import menus from "@/services/menus.json";
import logoImg from "@/assets/img/doctum_logo.png";
import adxLogo from "@/assets/img/logo_ADX.png";
export default {
  components: {
    "app-navbar": Navbar,
    "app-sidebar": Sidebar,
  },
  data() {
    return {
      logoImg,
      adxLogo,
      matricula: this.$route.params.matricula,
      unidade: this.$route.params.unidade,
      menus,
    };
  },
  methods: {
    logout() {
      this.$router.push("/login");
    },
    handleMenu(path) {
      this.$router.push(path);
    },
  },
};
</script>
<style></style>
