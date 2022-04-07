<template>
  <div>
    <b-row
      class="image-overlay lighter"
      align-v="end"
      align-h="end"
    >
      <b-col class="background-color p-4" md="9">
        <b-row>
          <b-col cols="12">
            <h1>Efficient, Powerful, and Cost-effective.</h1>
             <h6 class="mt-4">Reliability through 2-blade turbine design</h6>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
    <section class="m-5">
      <b-row>
        <b-col>
          <h4 class="mb-5">
            Learn what <span class="custom-bold">wind power</span> through
            Revolution360 can do for you.
          </h4>
        </b-col>
      </b-row>
      <b-row align-h="around" align-v="center">
        <b-col align="end" md="4">
          <b-img
            class="standard-border"
            :src="require('../assets/turbine2.jpeg')"
            fluid
          />
        </b-col>
        <b-col md="7">
          <h5 class="my-3">
            <span class="custom-bold">Revolution360</span> values a sustainable
            future
          </h5>
          <p>
            For over 40 years, Revolution360 holds dedication towards innovative
            excellence for wind power solutions. For customers, this means a
            cheaper electricity bill through using our services.
          </p>

          <p>
            Revolution360 believes in a better world starts with sustainability.
            Through our 2-blade, downwind, horizontal axis design turbine, we
            believe will pave the path for better energy. Our turbines are built
            to ensure stability at a good cost.
          </p>
        </b-col>
      </b-row>
    </section>
    <section>
      <div class="mx-5 py-5">
        <b-row align-v="center">
            <b-col md="7">
               <h5 class="mb-3">Why Wind Power?</h5>
              <p>
                <span class="custom-bold">Wind power</span> is an alternative
                form of energy that is considered a renewable energy source. It
                is clean and readily available, especially through our services.
                The blades on a wind turbine spin in order to generate
                electricity. There are numerous benefits to using wind energy.
              </p>
              <p>
                The U.S. wind industry as a whole supports 116,800 jobs. As a
                whole, wind currently provides more than 10% of the country's
                electricity. Greenhouse gas emissions from renewable sources is
                also significantly lower (link here). Wind energy produces
                around 11 grams of CO2 per kilowatt-hour, whereas coal is around
                980g CO2/kWh and natural gas being 465g CO2/hWh.
              </p>
              <span class="custom-bold"
                >The carbon footprint of wind power is almost 90 times less than
                coal, and around 40 times less than natural gas.
              </span>
            </b-col>
            <b-col md="5" class="text-center">
              <b-img
                class="p-3" fluid
                src="https://www.energy.gov/sites/default/files/styles/full_article_width/public/2021-08/greenhouse-gas-emissions.jpg?itok=2n0qOGbB"
              />
              <p style="font-size: .8rem;">Wind produces a significantly less amount of CO2.</p>
            </b-col>
          </b-row>
      </div>
    </section>
    <section>
      <div class="mx-5 py-5">
        <b-row>
          <h5>What this means to you</h5>
        </b-row>
        <b-row>
          <p>
            At Revolution360, we want everyone to be able to have affordable
            electricity. With our efforts, we have been able to deliver reliable
            electricity services through our products. As a customer, you are
            directly contributing towards lessening the world's carbon
            footprint. It must start with someone, and it can start with
            <span class="custom-bold">you.</span>
          </p>
        </b-row>
      </div>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.image-overlay {
  background-image: url("../assets/turbine.jpeg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 0% 75%;
  height: 500px;
}

.background-color {
  background-color: rgba(60, 59, 59, 0.95);
  border-top-left-radius: 10px;
}

.lighter {
  color: white;
}

.custom-bold {
  font-weight: bold;
}

.standard-border {
  box-shadow: 0 0 0 5px rgba(67, 67, 67, 0.54);
}

section:nth-child(odd) {
  background-color: rgba(236, 236, 236, 0.617);
}
</style>
