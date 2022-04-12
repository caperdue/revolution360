<template>
  <div id="app" style="min-height: 100vh;">
    <b-navbar toggleable="lg" variant="faded" type="light" class="page-color">
      <b-navbar-brand href='/' class="ps-3 py-2">
        <img class="navbar-image" :src="require('@/assets/revolution360.png')"
      /></b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="px-3 ms-auto">
          <b-nav-item href="/about">About</b-nav-item>
          <b-nav-item href="/design">Design</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>

    <router-view/>
    
    <section>
      <div class="footer page-color">
        <b-row class="p-3" style="text-align:center;">
          <b-col>
            <b-button variant="link" target="_blank" href="https://www.instagram.com/revolution_.360/">
              <b-iconstack font-scale="2">
                <b-icon
                  stacked
                  icon="circle-fill"
                  class=""
                  @click="console.log(0)"
                  style="color:green;"
                ></b-icon>
                <b-icon
                  stacked
                  icon="instagram"
                  scale="0.5"
                  variant="white"
        
                ></b-icon>
              </b-iconstack>
            </b-button>
            <b-button variant="link">
              <b-iconstack font-scale="2" class="mx-2" title="Phone">
                <b-icon stacked icon="circle-fill" style="color:green;" ></b-icon>
                <b-icon
                  stacked
                  icon="telephone-fill"
                  scale="0.5"
                  variant="white"
                  
                ></b-icon>
              </b-iconstack>
            </b-button>
          </b-col>
        </b-row>
      </div>
    </section>
    
  </div>
</template>

<script>

export default {
  name: "App",
  components: {
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Anybody:wght@200&family=Montserrat&display=swap");

#app {
  font-family: "Montserrat", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: black;
}

.navbar-image {
  height: 40px;
}

.page-color {
  background-color: rgba(145, 145, 145, 0.181);
}
.icon-color {
  background-color: rgb(29, 29, 29);
}
.footer {

}
</style>
