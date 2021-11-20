<template>
  <div class="container">
    <ul class="collapsible z-depth-0 guides">
      <li v-for="guide in guides">
        <Guide :title="guide.title" :content="guide.content" />
      </li>
    </ul>
  </div>
</template>

<script>
import Guide from "./Guide"

export default {
  name: "Guides",
  props: ["guides"],
  components: {
    Guide,
  },
}
</script>

<style scoped>
.container {
  margin-top: 40px;
}

.guides {
  border: none;
}
</style>
