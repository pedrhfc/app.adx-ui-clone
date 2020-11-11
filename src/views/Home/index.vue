<template>
  <div>
    <b-card title="Avisos">
      <b-alert show variant="danger" v-if="alert"
        >Hoje é o último dia para renovação de matrícula!</b-alert
      >
      <p class="text-muted font-weight-light">Não há mensagens para você!</p>
    </b-card>
  </div>
</template>
<script>
import { BAlert } from "bootstrap-vue";
export default {
  data() {
    return { alert: false };
  },
  components: {
    BAlert,
  },
};
</script>
<style></style>
