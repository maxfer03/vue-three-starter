<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<style lang="scss" scoped>
.about {
  display: flex;
  flex-direction: column;
  align-items: center;
  @include child-events-on();
}
</style>
