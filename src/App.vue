<template>
  <div id="app">
<!--     <div class="container">
 -->      <div id="nav">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <router-link to="/" class="navbar-brand">Product Shop</router-link>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <router-link to="/sample" class="nav-link">Sample</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/products/new" class="nav-link">New Product</router-link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
  <!--   </div> -->
    <div class="container">
      <router-view/>
    </div>
  </div>
</template>

<!-- <style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style> -->
