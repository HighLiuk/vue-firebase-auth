<template>
  <Navbar />
  <Guides />
</template>

<script>
import M from "materialize-css"
import Navbar from "./components/Navbar"
import Guides from "./components/Guides"
import { getUser } from "@/firebase"

export default {
  name: "App",
  components: {
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
