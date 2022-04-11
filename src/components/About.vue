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
          style="text-shadow: 1px 1px 2px #000"
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
    <section>
      <div class="mx-5 py-5">
        <b-row>
          <b-col>
            <h5 class="mb-3">References</h5>
            <p>
              Gallery: Windflow. Syncwind Power Ltd. - gallery - we synchronise
              the wind into the grid. (2021, June 7). Retrieved April 11, 2022,
              from https://windflow.co.nz/Gallery.htm
            </p>
            <p>
              James Brooks / Kodiak Daily Mirror Fairbanks Daily News-Miner.
              (2013, January 21). New wind turbines begin turning on Kodiak's
              Pillar Mountain. Miner. Retrieved April 11, 2022, from
              https://www.newsminer.com/new-wind-turbines-begin-turning-on-kodiak-s-pillar-mountain/article_2dea64ab-204e-5bcb-b8de-5ed390004e27.html
            </p>
            <p>
              Offshore Wind Turbine Development. (n.d.). Design - 2-B Energy –
              Offshore Wind Turbine Development. Retrieved April 11, 2022, from
              https://th.bing.com/th/id/OIP.qSWR6BM2Hh3z8FFNNxD3FwHaKn?pid=ImgDet&amp;rs=1.
            </p>
            <p>
              Wind Turbine Animation. (n.d.). Divi. Retrieved April 11, 2022,
              from
              http://www.jd3d.co.uk/portfolio/wind-turbine-animation-for-422-south/.
            </p>
          </b-col>
        </b-row>
      </div>
    </section>
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
b-carousel {
  text-align: center;
}
img {
  max-height: 300px;
}
</style>
