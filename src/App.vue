<template>
  <div id="app">
   <!-- <b-navbar >
      <b-navbar-brand class="p-2" href="#">
       
      </b-navbar-brand>
      
    </b-navbar>-->
<b-navbar toggleable="lg" variant="faded" type="light" class="page-color">
    <b-navbar-brand href="#" class="ps-3 py-2"> <img
          class="navbar-image"
          :src="require('@/assets/revolution360.png')"
        /></b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="px-3 ms-auto">
        <b-nav-item href="#">About</b-nav-item>
        <b-nav-item href="#">Design</b-nav-item>
        <b-nav-item href="#">Contact</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>

    <Home />
    <section>
      <div class="page-color">
        <b-row class="p-3" align-h="center">
          <b-col cols="2">
            <b-button variant="link">
              <b-iconstack font-scale="2">
                <b-icon stacked icon="circle-fill" class="icon-color" @click="console.log(0)"></b-icon>
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
                <b-icon stacked icon="circle-fill" class="icon-color"></b-icon>
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
import Home from "./components/Home.vue";

export default {
  name: "App",
  components: {
    Home,
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
</style>
