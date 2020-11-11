<template>
  <b-sidebar
    width="220px"
    id="menu-sidebar"
    right
    shadow
    no-header
    visible
    no-close-on-route-change
  >
    <div class="text-center mt-4">
      <b-img :src="logoImg" alt="doctum-logo" width="150%" />
      <p class="text-muted mt-3 mb-0">Ambiente do aluno</p>
      <b-list-group>
        <span class="mt-3">
          <b-list-group-item
            class="btn btn-light"
            :disabled="$route.path === `${menu.layout}/${menu.path}`"
            v-for="(menu, index) in menus"
            :key="index"
            @click="handleMenu(`${menu.layout}/${menu.path}`)"
          >
            <b-icon :icon="menu.icon" /> {{ menu.title }}
          </b-list-group-item>
        </span>
      </b-list-group>
    </div>
  </b-sidebar>
</template>
<script>
import {
  BSidebar,
  BImg,
  BListGroup,
  BListGroupItem,
  VBToggle,
} from "bootstrap-vue";
export default {
  components: {
    BSidebar,
    BImg,
    BListGroup,
    BListGroupItem,
  },
  directives: {
    "b-toggle": VBToggle,
  },
  props: {
    logoImg: {
      type: String,
    },
    menus: {
      type: Array,
    },
  },
  methods: {
    handleMenu(path) {
      this.$emit("menu:path", path);
    },
  },
};
</script>
