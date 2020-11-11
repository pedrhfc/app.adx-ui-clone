<template>
  <b-navbar toggleable="lg" type="dark" variant="light">
    <b-navbar-brand href="#"
      ><b-img :src="logoImg" alt="doctum-logo" width="100%"
    /></b-navbar-brand>

    <b-navbar-toggle target="nav-collapse" />

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item
          ><span class="text-primary"
            >Centro Universitário Doctum de {{ unidade }} » {{ unidade
            }}<br />MATRÍCULA ({{ matricula }})</span
          ></b-nav-item
        >
      </b-navbar-nav>

      <b-navbar-nav class="mx-auto">
        <b-nav-item-dropdown center>
          <template #button-content>
            <span class="text-primary">
              <b-icon icon="person-circle" />
              Minha conta
            </span>
          </template>
          <b-dropdown-item>Perfil</b-dropdown-item>
          <b-dropdown-item @click="logout">Sair</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>
<script>
import {
  BNavbar,
  BNavbarBrand,
  BDropdownItem,
  BNavItemDropdown,
  BNavbarToggle,
  BCollapse,
  BNavbarNav,
  BNavItem,
  BImg,
  VBToggle,
} from "bootstrap-vue";
export default {
  name: "app-navbar",
  props: {
    matricula: {
      type: String,
      default: "",
    },
    unidade: {
      type: String,
      default: "",
    },
    logoImg: {
      type: String,
    },
  },
  components: {
    BNavbar,
    BNavbarBrand,
    BDropdownItem,
    BNavItem,
    BNavItemDropdown,
    BNavbarToggle,
    BCollapse,
    BNavbarNav,
    BImg,
  },
  directives: {
    "b-toggle": VBToggle,
  },
  methods: {
    logout() {
      this.$emit("user:logout");
    },
  },
};
</script>
