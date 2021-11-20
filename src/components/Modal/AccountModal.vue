<template>
  <div id="modal-account" class="modal">
    <div class="modal-content center-align">
      <h4>Account details</h4>
      <br />

      <div v-if="user" class="account-details">
        <div>Logged in as {{ user.email }}</div>
        <div v-if="user">{{ bio }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import M from "materialize-css"
import { getUser } from "@/firebase"

export default {
  name: "AccountModal",
  props: ["user"],
  data() {
    return {
      bio: "",
    }
  },
  async mounted() {
    M.AutoInit()

    const { bio } = await getUser(this.user.uid)
    this.bio = bio
  },
}
</script>
