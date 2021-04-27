<template>
<div id="nav">
    <!-- <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> -->
    
<nav class="shadow relative bg-black text-white ">
  <div class="container p-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">

    <router-link to="/">
    <div class="flex items-center mb-4 md:mb-0">
      <span class="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white">Gaming Gear</span>
    </div>
    </router-link>

    <nav class="md:ml-auto flex flex-wrap items-center justify-center">
      <router-link to="/">
      <div class="px-3 py-2 text-white text-sm uppercase font-bold leading-snug hover:opacity-75">Products</div>
      </router-link>

      <router-link to="/Team">
      <div class="px-3 py-2 text-white text-sm uppercase font-bold leading-snug hover:opacity-75">Team</div>
      </router-link>

      <router-link to="/Add">
      <div class="px-3 py-2 text-white text-sm uppercase font-bold leading-snug hover:opacity-75">ADD +</div>
      </router-link>  
    </nav>
  </div>
</nav>
</div>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #353535;
  /* color: #2c3e50; */
}

/* #nav {
  padding: 30px;
} */

#nav a {
  font-weight: bold;
  /* color: #2c3e50; */
}

#nav a.router-link-exact-active {
  color: #42b983;
}

</style>
