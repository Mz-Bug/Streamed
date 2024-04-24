<template>
  <q-page class="absolute-center">
    <Header />
    <q-card flat class="sign_card q-mt-lg">
      <div class="q-mx-md text-center">
        <div class="text-h4 text-weight-bold text-dark">
          Check your email for a code
        </div>
        <div class="text-subtitle1 q-pb-md text-dark q-mt-md">
          We've sent a 6-character code to john_brown@company.com<br />
          The code expires shortly, so please enter it soon.
        </div>
        <div class="row q-col-gutter-md flex flex-center">
          <div class="col-2" v-for="item in 5" :key="item">
            <q-input
              class="otp_input"
              borderless
              maxlength="2"
              dense
              v-model="text"
              type="text"
              placeholder=""
            />
          </div>
        </div>
        <q-btn
          class="full-width connection_button q-py-sm q-mt-md"
          borderless
          unelevated
          no-caps
          color="positive"
          to="/home"
        >
          <div class="text-subtitle1 q-pl-md text-dark:">Continue</div>
        </q-btn>
        <div class="text-subtitle1 text-dark q-mt-md">
          Didn't get and SMS? <a class="text-positive" href="">Send again</a>
        </div>
        <div class="text-subtitle1 text-dark q-mt-lg">
          Can't find your code? Check your spam folder!
        </div>
      </div>
    </q-card>
    <Footer class="absolute-bottom" />
  </q-page>
</template>
<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";

export default {
  components: {
    Header,
    Footer,
  },
  setup() {},
};
</script>
<style lang="scss">
.otp_input {
  width: 70px;
  height: 70px;
  align-items: center;
  border: 1px solid $secondary;
  border-radius: 8px;
}
</style>
