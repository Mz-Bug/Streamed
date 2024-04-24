<template>
  <q-page>
    <div class="topborder">
      <div class="row">
        <div
          class="col q-pa-md"
          v-for="(item, index) in task_title"
          :key="index"
        >
          <q-list>
            <q-item>
              <q-item-section>
                <div class="text-subtitle1">
                  {{ item.title }}
                  <span class="text-positive"
                    ><q-icon color="positive" name="eva-arrow-up" />{{
                      item.no
                    }}</span
                  >
                </div>
                <div class="text-h5">{{ item.amount }}</div>
              </q-item-section>
              <q-item-section
                side
                :style="{
                  'border-left': index < 4 ? '1px dashed #D4E1E4' : '',
                }"
              ></q-item-section>
            </q-item>
          </q-list>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
const task_title = ref([
  {
    title: "Total Project",
    no: "2",
    amount: "7",
  },
  {
    title: "Total Task",
    no: "2",
    amount: "7",
  },
  {
    title: "Assigned Tasks",
    no: "2",
    amount: "7",
  },
  {
    title: "Completed Tasks",
    no: "2",
    amount: "7",
  },
  {
    title: "Overdue Tasks",
    no: "2",
    amount: "7",
  },
]);
import { ref } from "vue";

export default {
  setup() {
    return {
      task_title,
    };
  },
};
</script>

<style lang="scss">
.topborder {
  border: 1px solid $secondary;
  border-radius: 14px;
  margin: 10px;
}
</style>
