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
    <div class="q-my-lg">
      <q-card class="q-pa-md topborder" flat>
        <div class="row">
          <div style="height: 40px" class="q-mr-lg">
            <q-avatar
              v-for="n in 5"
              :key="n"
              size="40px"
              class="overlapping"
              :style="`left: ${n * 25}px`"
            >
              <img :src="`https://cdn.quasar.dev/img/avatar${n + 1}.jpg`" />
            </q-avatar>
          </div>
          <div class="q-pl-xl q-ml-xl">
            <q-btn round color="secondary" class="q-ml-xl" unelevated>
              <q-img src="~assets/add-person.svg" class="logo_img" />
            </q-btn>
          </div>
          <div class="q-pl-md" v-for="item in dropdowList" :key="item">
            <q-btn-dropdown
              class="text-grey-8 text-weight-regular"
              flat
              :label="item.butonHeading"
              no-caps
              size="lg"
              dense
            >
              <q-list bordered separator>
                <q-item clickable v-close-popup @click="onItemClick">
                  <q-item-section>
                    <q-item-label>{{ item.dropdownItem1 }}</q-item-label>
                  </q-item-section>
                </q-item>

                <q-item clickable v-close-popup @click="onItemClick">
                  <q-item-section>
                    <q-item-label>{{ item.dropdownItem2 }}</q-item-label>
                  </q-item-section>
                </q-item>

                <q-item clickable v-close-popup @click="onItemClick">
                  <q-item-section>
                    <q-item-label>{{ item.dropdownItem3 }}</q-item-label>
                  </q-item-section>
                </q-item>
              </q-list>
            </q-btn-dropdown>
          </div>
          <q-space></q-space>

          <q-btn
            unelevated
            no-caps
            class="text-grey-8"
            color="info"
            icon="eva-options-2-outline"
            label="View settings"
            @click="onClick"
          />
        </div>
      </q-card>
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
const dropdowList = ref([
  {
    butonHeading: "Status catagory",
    dropdownItem1: "Photo",
    dropdownItem2: "video",
    dropdownItem3: "Images",
  },
  {
    butonHeading: "Workspaces",
    dropdownItem1: "Photo",
    dropdownItem2: "video",
    dropdownItem3: "Images",
  },
  {
    butonHeading: "Quick filter",
    dropdownItem1: "Photo",
    dropdownItem3: "video",
    dropdownItem2: "Images",
  },
]);
import { ref } from "vue";

export default {
  setup() {
    return {
      task_title,
      dropdowList,
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

.overlapping {
  border: 2px solid white;
  position: absolute;
}
</style>
