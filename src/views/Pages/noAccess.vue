<template>
  <div class="container col-sm-3 col-md-3">
    <img :src="logoImg" alt="doctum-logo" />
    <b-form @submit.prevent="onSubmit">
      <b-form-select
        disabled
        v-model="user.unit"
        :options="$data.units"
        class="mt-3 opacity-4"
        required
        placeholder="Unidade"
      />
      <b-form-input
        v-model="user.name"
        type="text"
        class="mt-3 opacity-4"
        required
        placeholder="Nome completo"
      />
      <b-form-input
        v-model="user.registration"
        type="text"
        class="mt-3 opacity-4"
        required
        placeholder="No. matrícula"
      />
      <b-form-input
        v-model="user.email"
        type="email"
        required
        class="mt-3 opacity-4"
        placeholder="Email"
      />
      <b-form-input
        v-model="user.password"
        type="password"
        required
        class="mt-3 opacity-4"
        placeholder="Senha"
      />
      <b-button block type="submit" variant="primary" class="mt-3 opacity-4"
        >Pedir acesso</b-button
      >
    </b-form>
  </div>
</template>
<script>
import logoImg from "@/assets/img/logo_ADX.png";
import { BForm } from "bootstrap-vue";
import serviceMixins from "@/mixins/service.mixins";

import api from "@/services/api";
export default {
  components: { BForm },
  mixins: [serviceMixins],
  data() {
    return {
      logoImg,
      user: {
        name: "",
        email: "",
        registration: "",
        unit: null,
        password: "",
      },
      units: [{ text: "Sem unidade. Aguarde confirmação", value: null, disabled: true }],
      error: null,
    };
  },
  methods: {
    onSubmit() {
      const { name, registration, password, email } = this.user;
      api
        .post("/users", { name, email, password, registration })
        .then(() => this.$router.push({ name: "Login" }));
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
};
</script>
<style scoped>
.opacity-4 {
  opacity: 0.8;
}
</style>
