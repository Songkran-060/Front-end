<template>
  <router-link to="/Team">
    <div class="container px-5 py-14 mx-auto">
      <div class="flex flex-col text-center w-full">
        <h1 class="sm:text-4xl text-3xl font-medium title-font text-white">Meet our team</h1>
      </div>
    </div>

    <section class="text-gray-600 body-font">
      <div class="container px-5 mx-auto">
        <div class="flex flex-wrap -m-4">
          <div class="lg:w-1/3 lg:mb-0 mb-6 p-4">
            <div class="h-full text-center">
              <img
                alt="testimonial"
                class="w-48 h-48 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                src="https://dummyimage.com/302x302"
              />
              <p class="leading-relaxed text-white">KRITSANAPON RAKKIATNGAM</p>
              <p class="leading-relaxed text-white">62130500008</p>
              <span class="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
              <h2 class="text-red-400 font-medium title-font tracking-wider text-sm">BACK-END</h2>
              <p class="text-white text-xs">DEV-OPS</p>
            </div>
          </div>
          <div class="lg:w-1/3 lg:mb-0 mb-6 p-4">
            <div class="h-full text-center">
              <img
                alt="testimonial"
                class="w-48 h-48 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                src="https://dummyimage.com/300x300"
              />
              <p class="leading-relaxed text-white">NIPPIT CHOTIGO</p>
              <p class="leading-relaxed text-white">62130500044</p>
              <span class="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
              <h2 class="text-green-400 font-medium title-font tracking-wider text-sm">DATABASE</h2>
              <p class="text-white text-xs">DEV-OPS</p>
            </div>
          </div>
          <div class="lg:w-1/3 lg:mb-0 p-4">
            <div class="h-full text-center">
              <img
                alt="testimonial"
                class="w-48 h-48 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                src="https://dummyimage.com/305x305"
              />
              <p class="leading-relaxed text-white">WARISARA KHRUAJINLI</p>
              <p class="leading-relaxed text-white">62130500084</p>
              <span class="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
              <h2 class="text-yellow-400 font-medium title-font tracking-wider text-sm">FRONT-END</h2>
              <p class="text-white text-xs">DEV-OPS</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </router-link>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  //   name: 'Home',
  components: {
    // HelloWorld
  },
};
</script>