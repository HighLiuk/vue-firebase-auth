<template>
  <div class="collapsible-header grey lighten-4">{{ title }}</div>
  <div class="collapsible-body white">{{ body }}</div>
</template>

<script>
export default {
  name: "Guide",
  props: ["title", "body"],
}
</script>
