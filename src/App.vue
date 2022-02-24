<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view/>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color:hsl(210, 29%, 20%);;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: hsl(210, 29%, 20%);

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
