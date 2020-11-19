<template>
  <div>
    <app-navbar
      :matricula="matricula"
      :unidade="unidade"
      :name="name"
      :logoImg="adxLogo"
      @logout:user="logout"
      @change:path="goTo"
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

import { getUser, signOut } from "@/services/auth";

export default {
  components: {
    "app-navbar": Navbar,
    "app-sidebar": Sidebar,
  },
  data() {
    return {
      logoImg,
      adxLogo,
      matricula: getUser().registration,
      unidade: getUser().unit,
      name: getUser().name,
      menus,
    };
  },
  methods: {
    logout() {
      signOut();
      this.$router.push({ name: "Login" });
    },
    handleMenu(path) {
      this.$router.push(path);
    },
    goTo(path) {
      this.$router.push({ name: path });
    },
  },
};
</script>
<style></style>
