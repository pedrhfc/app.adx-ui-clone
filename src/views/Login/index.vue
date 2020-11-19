<template>
  <div class="container col-sm-3 col-md-3">
    <img :src="logoImg" alt="doctum-logo" />
    <b-form @submit.prevent="onSubmit">
      <b-form-select
        v-model="user.unidade"
        :options="$data.units"
        class="mt-3 opacity-4"
        required
        placeholder="Unidade"
      />
      <b-form-input
        :state="error"
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
      <h6 class="text-right mt-1 text-white">
        <router-link to="/pedir-acesso" v-slot="{ href, navigate }">
          <b-link :href="href" @click="navigate"
            >Pedir acesso</b-link
          ></router-link
        >
      </h6>
    </b-form>
  </div>
</template>
<script>
import logoImg from "@/assets/img/logo_ADX.png";
import { BLink, BFormCheckbox } from "bootstrap-vue";

import { setUser } from "@/services/auth";

import api from "@/services/api";

import serviceMixins from "@/mixins/service.mixins";

export default {
  components: { BLink, BFormCheckbox },
  mixins: [serviceMixins],
  data() {
    return {
      logoImg,
      user: {
        unidade: null,
        matricula: "",
        senha: "",
        salvar: false,
      },
      error: null,
    };
  },
  methods: {
    onSubmit() {
      const {
        matricula: registration,
        senha: password,
        unidade: unit_id,
      } = this.user;
      api
        .post("/session", { registration, password, unit_id })
        .then((response) => {
          const { data } = response;
          setUser(data);
          this.$router.push(`logado/home`);
        })
        .catch(() => {
          this.error = false;
        });
    },
    getUnits() {
      api.get("/units").then((response) => {
        let { data } = response;

        data = data.map((unit) => {
          return {
            text: unit.name,
            value: unit.id,
          };
        });

        this.units.push(...data);
      });
    },
  },
  watch: {
    "user.matricula"() {
      this.error = null;
    },
  },
};
</script>
<style scoped>
.opacity-4 {
  opacity: 0.8;
}
</style>
