<template>
  <Navbar />
  <SignupModal />
  <LoginModal />
  <AccountModal />
  <CreateGuideModal />
  <Guides />
</template>

<script>
import M from "materialize-css"
import SignupModal from "./components/Modal/SignupModal"
import LoginModal from "./components/Modal/LoginModal"
import AccountModal from "./components/Modal/AccountModal"
import CreateGuideModal from "./components/Modal/CreateGuideModal"
import Navbar from "./components/Navbar"
import Guides from "./components/Guides"
import { getUser } from "@/firebase"

export default {
  name: "App",
  components: {
    SignupModal,
    LoginModal,
    AccountModal,
    CreateGuideModal,
    Navbar,
    Guides,
  },
  mounted() {
    M.AutoInit()

    getUser((user) => {
      if (user) {
        console.log("User logged in", user)
      } else {
        console.log("User logged out")
      }
    })
  },
}
</script>
