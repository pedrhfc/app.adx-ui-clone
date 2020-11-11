<template>
  <div class="container col-sm-3 col-md-3">
    <img :src="logoImg" alt="doctum-logo" />
    <b-form @submit.prevent="onSubmit">
      <b-form-select
        v-model="user.unidade"
        :options="options"
        class="mt-3 opacity-4"
        required
        placeholder="Unidade"
      />
      <b-form-input
        v-model="user.matricula"
        type="text"
        class="mt-3 opacity-4"
        required
        placeholder="No. matrícula"
      />
      <b-form-input
        v-model="user.senha"
        type="password"
        required
        class="mt-3 opacity-4"
        placeholder="Senha"
      />
      <b-link
        target="_blank"
        class="d-flex flex-row-reverse mt-3 text-white"
        href="/esqueci-a-senha"
        >Esqueceu a senha?</b-link
      >
      <b-form-checkbox
        v-model="user.salvar"
        name="checkbox-1"
        class="d-flex flex-row-reverse mt-3 text-white"
      >
        Salvar credenciais
      </b-form-checkbox>
      <b-button block type="submit" variant="primary" class="mt-3 opacity-4"
        >Entrar</b-button
      >
    </b-form>
  </div>
</template>
<script>
import logoImg from "@/assets/img/logo_ADX.png";
import unidades from "@/services/unidades.json";
import { BForm, BLink, BFormCheckbox } from "bootstrap-vue";
export default {
  components: { BForm, BLink, BFormCheckbox },
  data() {
    return {
      logoImg,
      user: {
        unidade: null,
        matricula: "",
        senha: "",
        salvar: false,
      },
      options: unidades,
    };
  },
  methods: {
    onSubmit() {
      this.$router.push(
        `logado/home/${this.user.unidade}/${this.user.matricula}`
      );
    },
  },
};
</script>
<style scoped>
.opacity-4 {
  opacity: 0.8;
}
</style>
