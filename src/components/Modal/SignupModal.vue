<template>
  <div id="modal-signup" class="modal" ref="modal">
    <div class="modal-content">
      <h4>Sign up</h4>
      <br />

      <form id="signup-form" @submit.prevent="onSubmit">
        <div class="input-field">
          <input type="email" id="signup-email" required v-model="email" />
          <label for="signup-email">Email address</label>
        </div>

        <div class="input-field">
          <input
            type="password"
            id="signup-password"
            required
            v-model="password"
          />
          <label for="signup-password">Choose password</label>
        </div>

        <button class="btn yellow darken-2 z-depth-0">Sign up</button>
      </form>
    </div>
  </div>
</template>

<script>
import { Modal } from "materialize-css"
import { signup } from "@/firebase"

export default {
  name: "SignupModal",
  data() {
    return {
      email: "",
      password: "",
    }
  },
  methods: {
    async onSubmit() {
      const cred = await signup(this.email, this.password)
      Modal.getInstance(this.$refs.modal).close()
      this.email = ""
      this.password = ""
    },
  },
}
</script>
