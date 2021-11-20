<template>
  <div id="modal-create" class="modal" ref="modal">
    <div class="modal-content">
      <h4>Create Guide</h4>
      <br />

      <form @submit.prevent="onSubmit">
        <div class="input-field">
          <input type="text" id="title" required v-model="title" />
          <label for="title">Guide Title</label>
        </div>

        <div class="input-field">
          <textarea
            id="content"
            class="materialize-textarea"
            required
            v-model="content"
          ></textarea>
          <label for="content">Guide Content</label>
        </div>

        <button class="btn yellow darken-2 z-depth-0">Create</button>
      </form>
    </div>
  </div>
</template>

<script>
import { Modal } from "materialize-css"
import { createGuide } from "@/firebase"

export default {
  name: "AccountModal",
  data() {
    return {
      title: "",
      content: "",
    }
  },
  methods: {
    async onSubmit() {
      await createGuide(this.title, this.content)
      Modal.getInstance(this.$refs.modal).close()
      this.title = ""
      this.content = ""
    },
  },
}
</script>
