<template>
  <div>
    <section>
      <div class="mx-5 py-5">
        <b-row align-v="center">
          <b-col md="7">
            <h5 class="mb-3">Turbine Design Overview</h5>
            <p>
              The basic design of a wind turbine consists of a rotor, a
              generator, gear box, drive shaft, and a tower support pole. The
              tower support pole holds all the parts listed above and their
              casing in the air with the blades in order to allow the wind
              turbine to work.
            </p>
            <p>
              When it comes to the design of the wind turbines used to create
              energy, there is a lot of time and thought put in. Your typical
              Wind Turbine is designed with curved blades, these blades lift the
              air instead of pushing it like a straight blade would. According
              to Meg Jenkins, “The side with the most curve generates low air
              pressure, while at the same time high-pressure air beneath forces
              on the other side of the blade-shaped aerofoil.”
            </p>
          </b-col>
          <b-col md="5" class="">
            <b-img
              class="p-3"
              fluid
              :src="require('../assets/howitsmade1.gif')"
            />
            <p style="font-size: 0.6rem">.</p>
          </b-col>
        </b-row>
      </div>
    </section>
    <section>
      <div class="mx-5 py-5">
        <b-row align-v="center">
          <b-col md="7">
            <h5 class="mb-3">Blade Design</h5>
            <p>
              Not only does the shape of the blades used on the wind turbine
              matter, but so does the speed at which the blades move. “The
              optimal tip speed ratio (TSR), which is defined as the ratio of
              the speed of the rotor tip to the incoming wind speed, depends on
              the rotor blade shape profile, the number of turbine blades, and
              the wind turbine propeller blade design itself” (Jenkins). When a
              blade moves too slow, it doesn’t move the wind as fast as it
              should reducing the amount of energy that is made. However, the
              same thing can happen if the blades move too fast, it pushes the
              wind too fast which prevents the maximum amount of energy from
              being created. It is important that the blades move at the correct
              speed otherwise the greatest amount of energy will not be
              produced.
            </p>
            <p>
              Although the most commonly used wind turbine blade type is curved,
              sometimes a flat blade is more beneficial. If you are considering
              purchasing a wind turbine it would be beneficial for you to have a
              technician come to the property you are putting the wind turbine
              on to assess which type of wind turbine would be most beneficial
              for you.
            </p>
          </b-col>
          <b-col md="5" class="">
            <b-img
              class="p-3"
              fluid
              :src="require('../assets/howitsmade2.png')"
            />
          </b-col>
        </b-row>
      </div>
    </section>
    <section>
      <div class="mx-5 py-5">
        <b-row align-v="center">
          <b-col>
            <h5 class="mb-3">References</h5>
            <p>
              Alternative Energy Tutorials. (n.d.). Wind Turbine Design. Wind
              Turbine Design for a Wind Turbine System. Retrieved from
              https://www.alternative-energy-tutorials.com/wind-energy/wind-turbine-design.html#:~:text=Wind%20turbine%20design%20generally%20comprise,a%20house%20or%20desktop%20fan
            </p>
            <p>
              Wind Turbine Blade design optimization with Simscale: Blog.
              SimScale. (2019, November 7). Retrieved April 11, 2022, from
              https://www.simscale.com/blog/2019/09/wind-turbine-blade-design/#:~:text=Wind%20turbine%20blades%20generate%20lift,of%20the%20blade%2Dshaped%20aerofoil.
            </p>
          </b-col>
        </b-row>
      </div>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
section:nth-child(even) {
  background-color: rgba(236, 236, 236, 0.617);
}
</style>
