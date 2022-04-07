<template>
  <div>
    <b-row>
      <b-col>
        <b-carousel
          id="carousel-1"
          v-model="slide"
          :interval="4000"
          controls
          indicators
          background="#ababab"
          img-width="1024"
          img-height="480"
          style="text-shadow: 1px 1px 2px #000; "
          @sliding-start="onSlideStart"
          @sliding-end="onSlideEnd"
        >
          <!-- Text slides with image -->
          <b-carousel-slide
            caption="Founded in 1980"
            text="Our mission is to revolutionize the world to empower alternative energy, one step at a time."
            :img-src="require('../assets/turbine4.jpeg')"
          ></b-carousel-slide>

<b-carousel-slide
            caption="Efficient Design"
            text="Revolution360's efficient design helps YOU save electricity costs reliably, slashing your electricity bills "
            class="black_text"
            :img-src="require('../assets/turbine-design1.jpeg')"
          ></b-carousel-slide>
          <b-carousel-slide
            caption="Creating Opportunity"
            text="Revolution360 creates opportunities for the job market for those with the desire to get into alternative energy"
            :img-src="require('../assets/turbine5.jpeg')"
          ></b-carousel-slide>

          <b-carousel-slide
            caption="Crafted in the USA"
            text="Our turbines are fully manufactured and assembled in-house by our specialists."
            :img-src="require('../assets/turbine6.jpeg')"
          ></b-carousel-slide>
        </b-carousel>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slide: 0,
      sliding: null,
    };
  },
};
</script>

<style scoped>
* {
  text-align: center;
}
img {
  max-height: 300px;
}

</style>
