<template>
  <nav class="z-depth-0 grey lighten-4">
    <div class="nav-wrapper container">
      <a href="#" class="brand-logo">
        <img src="img/logo.svg" style="width: 180px; margin-top: 10px" />
      </a>

      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li v-if="user">
          <a
            href="#"
            class="grey-text modal-trigger"
            data-target="modal-account"
            >Account</a
          >
        </li>

        <li v-if="user">
          <a href="#" class="grey-text" id="logout" @click.prevent="logout"
            >Logout</a
          >
        </li>

        <li v-if="user">
          <a href="#" class="grey-text modal-trigger" data-target="modal-create"
            >Create Guide</a
          >
        </li>

        <li v-if="!user">
          <a href="#" class="grey-text modal-trigger" data-target="modal-login"
            >Login</a
          >
        </li>

        <li v-if="!user">
          <a href="#" class="grey-text modal-trigger" data-target="modal-signup"
            >Sign up</a
          >
        </li>
      </ul>
    </div>
  </nav>

  <SignupModal />
  <LoginModal />
  <AccountModal v-if="user" :user="user" />
  <CreateGuideModal />
</template>

<script>
import { logout } from "@/firebase"
import SignupModal from "./Modal/SignupModal"
import LoginModal from "./Modal/LoginModal"
import AccountModal from "./Modal/AccountModal"
import CreateGuideModal from "./Modal/CreateGuideModal"

export default {
  name: "Navbar",
  props: ["user"],
  components: {
    SignupModal,
    LoginModal,
    AccountModal,
    CreateGuideModal,
  },
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
