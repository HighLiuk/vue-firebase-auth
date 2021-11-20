<template>
  <nav class="z-depth-0 grey lighten-4">
    <div class="nav-wrapper container">
      <a href="#" class="brand-logo">
        <img src="img/logo.svg" style="width: 180px; margin-top: 10px" />
      </a>

      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li class="logged-in">
          <a
            href="#"
            class="grey-text modal-trigger"
            data-target="modal-account"
            >Account</a
          >
        </li>

        <li class="logged-in">
          <a href="#" class="grey-text" id="logout" @click.prevent="logout"
            >Logout</a
          >
        </li>

        <li class="logged-in">
          <a href="#" class="grey-text modal-trigger" data-target="modal-create"
            >Create Guide</a
          >
        </li>

        <li class="logged-out">
          <a href="#" class="grey-text modal-trigger" data-target="modal-login"
            >Login</a
          >
        </li>

        <li class="logged-out">
          <a href="#" class="grey-text modal-trigger" data-target="modal-signup"
            >Sign up</a
          >
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import { logout } from "@/firebase"

export default {
  name: "Navbar",
  methods: {
    logout,
  },
}
</script>

<style scoped>
img {
  width: 180px;
  margin-top: 10px;
}
</style>
