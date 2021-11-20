<template>
  <Navbar />
  <Guides :guides="guides" />
</template>

<script>
import M from "materialize-css"
import Navbar from "./components/Navbar"
import Guides from "./components/Guides"
import { getUser, getGuides } from "@/firebase"

export default {
  name: "App",
  components: {
    Navbar,
    Guides,
  },
  data() {
    return {
      guides: [],
    }
  },
  mounted() {
    M.AutoInit()

    getUser(async (user) => {
      if (user) {
        this.guides = await getGuides()
      } else {
        this.guides = []
      }
    })
  },
}
</script>
