<template>
  <div class="collapsible-header grey lighten-4">{{ title }}</div>
  <div class="collapsible-body white">{{ content }}</div>
</template>

<script>
export default {
  name: "Guide",
  props: ["title", "content"],
}
</script>
