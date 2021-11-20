<template>
  <div id="modal-login" class="modal" ref="modal">
    <div class="modal-content">
      <h4>Login</h4>
      <br />

      <form id="login-form" @submit.prevent="onSubmit">
        <div class="input-field">
          <input type="email" id="login-email" required v-model="email" />
          <label for="login-email">Email address</label>
        </div>

        <div class="input-field">
          <input
            type="password"
            id="login-password"
            required
            v-model="password"
          />
          <label for="login-password">Your password</label>
        </div>

        <button class="btn yellow darken-2 z-depth-0">Login</button>
      </form>
    </div>
  </div>
</template>

<script>
import { Modal } from "materialize-css"
import { login } from "@/firebase"

export default {
  name: "LoginModal",
  data() {
    return {
      email: "",
      password: "",
    }
  },
  methods: {
    async onSubmit() {
      await login(this.email, this.password)
      Modal.getInstance(this.$refs.modal).close()
      this.email = ""
      this.password = ""
    },
  },
}
</script>
