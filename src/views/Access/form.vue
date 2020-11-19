<template>
  <div>
    <b-form @submit.prevent="onSubmit">
      <b-form-select
        v-model="user.unit_id"
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

      <b-button block type="submit" variant="primary" class="mt-3 opacity-4"
        >Enviar</b-button
      >
    </b-form>
  </div>
</template>

<script>
import serviceMixins from "@/mixins/service.mixins";

import api from "@/services/api";

export default {
  mixins: [serviceMixins],
  data() {
    return {
      id: this.$route.params.id,
      user: {
        id: "",
        email: "",
        registration: "",
        unit_id: 1,
      },
    };
  },
  mounted() {
    this.getRecords();
  },
  methods: {
    onSubmit() {
      if (this.id)
        api
          .put(`users/${this.id}`, this.user)
          .then(() => this.$router.push({ name: "Access" }));
      else
        api
          .post("users", this.user)
          .then(() => this.$router.push({ name: "Access" }));
    },
    getRecords() {
      this.id &&
        api
          .get(`users/${this.id}`)
          .then((response) => {
            const { data } = response;
            this.user = data;
          })
          .catch(() => {
            this.$router.push({ name: "Access" });
          });
    },
  },
};
</script>
