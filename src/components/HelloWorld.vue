<template>
  <div class="hello" id="test-id">
    <h1>Vue + Three</h1>
    <div>
      By <a target="_blank" href="https://github.com/maxfer03">Max Fernandez</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.hello {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 80vh;
  @include child-events-on();
}
a {
  color: #42b983;
}
</style>
