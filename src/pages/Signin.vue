<template>
  <q-page class="absolute-center">
    <Header />
    <q-card flat class="sign_card q-mt-lg">
      <div class="q-mx-md">
        <div class="text-h4 text-weight-bold text-dark">
          Hi, Welcome Back to Streamed!
        </div>
        <div class="text-subtitle1 q-pb-md text-dark">
          We suggest using the email address that you use at work.
        </div>
        <div class="q-mt-lg">
          <q-btn
            class="full-width connection_button q-py-sm"
            borderless
            unelevated
            no-caps
            @click="onClick"
          >
            <q-img class="logo_img" src="~assets/Google_logo.svg" />
            <div class="text-subtitle1 q-pl-md text-dark">
              Continue with Google
            </div>
          </q-btn>
          <q-btn
            class="full-width connection_button q-py-sm q-mt-md"
            borderless
            unelevated
            no-caps
            @click="onClick"
          >
            <q-img class="logo_img" src="~assets/Iphone_logo.svg" />
            <div class="text-subtitle1 q-pl-md text-dark">
              Continue with Apple
            </div>
          </q-btn>
        </div>
        <div class="row text-center">
          <div class="col-5 or_col"></div>
          <div class="col-2">
            <div class="text-subtitle1 text-dark q-pt-md">OR</div>
          </div>
          <div class="col-5 or_col"></div>
        </div>
        <div class="q-mt-lg">
          <div class="text-subtitle1 text-dark">Your Email</div>
          <q-input
            class="mail_input q-pl-md"
            borderless
            v-model="email"
            placeholder="e.g. john_brown@company.com"
          />
          <q-btn
            class="full-width connection_button q-py-sm q-mt-md"
            borderless
            unelevated
            no-caps
            color="positive"
            to="/verification"
          >
            <div class="text-subtitle1 q-pl-md text-dark:">Continue</div>
          </q-btn>
        </div>
        <div class="q-mt-md">
          <q-card flat class="my-card full-width">
            <q-card-section>
              <div class="text-subtitle1">
                We'll email you a magic code for a password-free sign-in.<br />
                Or you can<a href="" class="text-positive">
                  sign in manually instead.
                </a>
              </div>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </q-card>
    <Footer class="absolute-bottom" />
  </q-page>
</template>
<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import { ref } from "vue";

export default {
  components: {
    Header,
    Footer,
  },
  setup() {
    return {
      text: ref('')
    };
  },
};
</script>
<style lang="scss"></style>
