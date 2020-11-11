<template>
  <div>
    <b-card title="Grade horária">
      <table class="table mt-3">
        <thead>
          <tr class="text-center">
            <th v-for="(thead, index) in tableHead" :key="index">
              {{ thead }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(tbody, index) in tableBody"
            :key="index"
            class="text-center"
          >
            <th scope="row">{{ `${index + 1} º` }}</th>
            <td v-for="(tday, index) in tbody.day" :key="index">
              <p :class="tday ? 'text-dark' : 'text-muted font-weight-light'">
                {{ tday ? tday : "-" }}
              </p>
              <!-- {{ tday ? <p>{{tday}}</p> : "não há" }} -->
            </td>
          </tr>
        </tbody>
      </table>
    </b-card>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tableHead: ["horário", "seg", "ter", "qua", "qui", "sex", "sab"],
      tableBody: [
        {
          day: [null, null, "PROG. WEB", "Fund.Mat.Comp.", "Sist.Dist.", null],
        },
        {
          day: [null, null, "PROG. WEB", "Fund.Mat.Comp.", "Sist.Dist.", null],
        },
        {
          day: [
            "Fund.Teo.Comp.",
            null,
            "PROG. WEB",
            "TCCII	",
            "Ger.Proj.",
            null,
          ],
        },
        { day: ["Fund.Teo.Comp.", null, null, "TCCII", "Ger.Proj.", null] },
      ],
    };
  },
};
</script>
<style></style>
