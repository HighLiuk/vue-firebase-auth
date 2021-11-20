<template>
  <Navbar :user="user" />
  <Guides :guides="guides" />
</template>

<script>
import M from "materialize-css"
import Navbar from "./components/Navbar"
import Guides from "./components/Guides"
import { getCurrentUser, getGuides } from "@/firebase"

export default {
  name: "App",
  components: {
    Navbar,
    Guides,
  },
  data() {
    return {
      user: null,
      guides: [],
    }
  },
  mounted() {
    M.AutoInit()

    getCurrentUser((user) => {
      this.user = user

      if (user) {
        getGuides((guides) => {
          this.guides = guides
        })
      } else {
        this.guides = []
      }
    })
  },
}
</script>
