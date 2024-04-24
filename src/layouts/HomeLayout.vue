<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="bg-white text-black home_header q-pt-xs">
      <q-toolbar>
        <q-img class="home_logo q-mr-md" src="~assets/Logo.svg"></q-img>
        <q-separator spaced="" vertical />
        <q-select
          class="select_width q-ml-md"
          borderless
          dense
          v-model="model"
          :options="options"
          label="PMS HUB/HOME"
        >
          <template v-slot:prepend>
            <q-icon class="bg-positive text-white home_select" name="home" />
          </template>
        </q-select>
        <q-space />
        <q-input
          class="home_search q-pl-sm"
          dense
          borderless
          v-model="text"
          type="text"
          placeholder="Search anything"
        >
          <template v-slot:prepend>
            <q-icon class="" name="eva-search-outline" />
          </template>
        </q-input>
        <q-separator spaced inset vertical />
        <q-btn rounded flat dense icon="eva-bell-outline" @click="onClick" />
        <q-btn
          rounded
          flat
          dense
          icon="eva-question-mark-circle-outline"
          @click="onClick"
        />
        <q-btn
          rounded
          flat
          dense
          icon="eva-settings-2-outline"
          @click="onClick"
        />
        <q-separator spaced inset vertical />
        <q-btn class="q-mr-sm" rounded flat dense icon="eva-keypad" @click="onClick" />
        <q-btn unelevated round>
          <q-avatar size="42px">
            <img src="https://cdn.quasar.dev/img/avatar2.jpg" />
          </q-avatar>
        </q-btn>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup></script>
