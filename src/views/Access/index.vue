<template>
  <div>
    <b-table hover :items="items" :fields="fields">
      <template #cell(actions)="row">
        <b-icon
          class="btn"
          variant="info"
          @click="handleEdit(row.item, row.index, $event.target)"
          icon="pencil-square"
        />
        <b-icon
          class="btn"
          variant="danger"
          @dblclick="handleRemove(row.item, row.index, $event.target)"
          icon="x-circle-fill"
        /> </template
    ></b-table>
  </div>
</template>
<script>
import { BTable } from "bootstrap-vue";
import api from "@/services/api";
export default {
  components: {
    BTable,
  },
  data() {
    return {
      fields: [
        { key: "name", label: "Nome" },
        { key: "registration", label: "Matrícula" },
        { key: "email", label: "E-mail" },
        { key: "unit", label: "Unidade" },
        { key: "actions", label: "Ações" },
      ],
      items: [],
    };
  },
  mounted() {
    this.getRecords();
  },
  methods: {
    async getRecords() {
      await api.get("users").then((response) => {
        const { data } = response;

        this.items = data;
      });
    },
    async handleRemove(item) {
      await api.delete(`users/${item.id}`).then(() => {
        this.$bvToast.toast("O usuário foi removido com êxito.", {
          variant: "success",
          title: "Sucesso!",
          autoHideDelay: 5000,
          appendToast: false,
          solid: true,
        });
        this.getRecords();
      });
    },
    handleEdit(item) {
      this.$router.push(`gerir-acessos/${item.id}/editar`);
    },
  },
};
</script>
<style></style>
