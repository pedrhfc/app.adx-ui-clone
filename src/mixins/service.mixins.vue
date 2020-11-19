<script>
import api from "@/services/api";
export default {
  data() {
    return {
      units: [{ text: "Selecione a unidade", value: null, disabled: true }],
    };
  },
  mounted() {
    this.getUnits();
  },
  methods: {
    async getUnits() {
      await api.get("/units").then((response) => {
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
