<template>
  <div id="modal-account" class="modal">
    <div class="modal-content center-align">
      <h4>Account details</h4>
      <br />

      <div v-if="user" class="account-details">
        Logged in as {{ user.email }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AccountModal",
  props: ["user"],
}
</script>
