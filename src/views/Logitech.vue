<template>
<div id="main" class="grid grid-cols-2 grid-cols-2 md:grid-cols-3 gap-0 lg:gap-1 justify-evenly text-white"> 
        <div class="bg-gray-100 lg:w-26 md:h-96"></div>
        <div class="bg-gray-200 lg:w-26 md:h-96"></div>
        <div class="bg-gray-300 lg:w-26 md:h-96">
          <!-- <img alt="content" class="object-cover object-center h-full w-full" src="https://thegadgetflow.com/wp-content/uploads/2021/01/Razer-Seiren-Mini-Portable-Microphone-02.jpg&quot">
        </div> -->
        </div>
</div>

  <div class="Logitech">
    <div class="mb:-mb-px lg:flex justify-center">
      <router-link to="/">
        <p class="no-underline text-white border-b-2 border-teal-white uppercase tracking-wide font-bold text-sm pt-8 py-3 mr-8"
        >Logitech
        </p>
      </router-link>

      <router-link to="/Nubwo">
        <p class="no-underline text-white border-b-2 border-transparent uppercase tracking-wide font-bold text-sm pt-8 py-3 mr-8"
        >Nubwo
        </p>
      </router-link>

      <router-link to="/Razer">
        <p class="no-underline text-white border-b-2 border-transparent uppercase tracking-wide font-bold text-sm pt-8 py-3 mr-8"
        >Razer
        </p>
      </router-link>

      <router-link to="/Fantech">
        <p class="no-underline text-white border-b-2 border-transparent uppercase tracking-wide font-bold text-sm pt-8 py-3 mr-8"
        >Fantech
        </p>
      </router-link>

      <router-link to="/HyperX">
        <p class="no-underline text-white border-b-2 border-transparent uppercase tracking-wide font-bold text-sm pt-8 py-3 mr-8"
        >Hyper X
        </p>
      </router-link>

      <router-link to="/Steelseries">
        <p class="no-underline text-white border-b-2 border-transparent uppercase tracking-wide font-bold text-sm pt-8 py-3 mr-8"
        >Steelseries
        </p>
      </router-link>
    </div>
  </div>

  <section class="text-white body-font">
    <div class="container px-5 py-24 mx-auto grid grid-cols-3 gap-8 flex">
      <!-- <div class="flex flex-col"></div> -->
      
<!-- Loop -->
<div v-for="product in products" :key="product.productcode">
      <!-- <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4"> -->
      <div class="sm:-m-4 -mx-4 -mb-10 -mt-4">  
        <div class="p-4 sm:mb-0 mb-6">         
          <div class="rounded-lg h-64 overflow-hidden">
            <img
              alt="content"
              class="image"
              src="https://dummyimage.com/1203x503"
            />
          </div>
          
          <h2 class="text-xl font-medium title-font text-white mt-5">{{ product.productname }}</h2>
          <p class="text-base leading-relaxed mt-2">{{ product.productdescription }}</p>

          <div class="flex flew-wrap justify-center items-center mt-5 px-2 ">
            <span class="cursor-pointer w-6 h-6 rounded-full last:mr-0 mr-2 bg-gray-300"></span>
            <span class="cursor-pointer w-6 h-6 rounded-full last:mr-0 mr-2 bg-gray-300"></span>
            <span class="cursor-pointer w-6 h-6 rounded-full last:mr-0 mr-2 bg-gray-300"></span>
            <span class="cursor-pointer w-6 h-6 rounded-full last:mr-0 mr-2 bg-gray-300"></span>
            <span class="cursor-pointer w-6 h-6 rounded-full last:mr-0 mr-2 bg-gray-300"></span>
          </div>
          
          <div class="flex justify-center mt-5 px-2">
            <router-link to="/EditProduct">
            <base-button class="ButtonSubmit focus:outline-none hover:bg-indigo-600" label="Edit"/>
            </router-link>
            <base-button class="ButtonCancle focus:outline-none hover:bg-red-700" label="Delete"/>
          </div>
          
        </div>
      </div>
</div>
    </div>
  </section>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: "Logitech",
  components: {
    // HelloWorld
  },
  data() {
    return {
      url: "http://localhost:3000/products",
      products: [],
      
    }
  },
  methods: {
async getSurveyResult(){
  try {
    const res = await fetch(this.url)
    const data = await res.json()
    return data
   }
  catch(error){
    console.log(`Could not get ${error}`)
  }
},
},
async created(){
  this.products = await this.getSurveyResult()
  },
  

};
</script>
