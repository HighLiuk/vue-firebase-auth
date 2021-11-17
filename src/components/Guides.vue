<template>
  <div class="container">
    <ul class="collapsible z-depth-0 guides">
      <li v-for="guide in guides">
        <Guide :title="guide.title" :body="guide.body" />
      </li>
    </ul>
  </div>
</template>

<script>
import Guide from "./Guide"

export default {
  name: "Guides",
  components: {
    Guide,
  },
  data() {
    return {
      guides: [
        {
          title: "Guide title",
          body: "Lorem ipsum dolor sit amet.",
        },
        {
          title: "Guide title",
          body: "Lorem ipsum dolor sit amet.",
        },
        {
          title: "Guide title",
          body: "Lorem ipsum dolor sit amet.",
        },
        {
          title: "Guide title",
          body: "Lorem ipsum dolor sit amet.",
        },
      ],
    }
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
