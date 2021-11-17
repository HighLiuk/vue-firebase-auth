<template>
  <Navbar />
  <SignupModal />
  <LoginModal />
  <AccountModal />
  <CreateGuideModal />
  <Guides />
</template>

<script>
import SignupModal from "./components/Modal/SignupModal"
import LoginModal from "./components/Modal/LoginModal"
import AccountModal from "./components/Modal/AccountModal"
import CreateGuideModal from "./components/Modal/CreateGuideModal"
import Navbar from "./components/Navbar"
import Guides from "./components/Guides"

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
}
</script>
