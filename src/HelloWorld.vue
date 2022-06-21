<template>
  <div>
    {{ JSON.stringify({ hello }) }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      hello: {
        world: "ok",
      },
    };
  },
};
</script>
