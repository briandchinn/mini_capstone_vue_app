<template>
  <div class="products-index">

    <h1 class="mt-3">{{ message }}</h1>
    <div v-for="product in products">
      <h3 class="mt-3"> {{ product.name }}</h3>
      <router-link v-bind:to="'/products/' + product.id">
        <img v-bind:src="product.image_url">
      </router-link>
      <div>
        <button class="btn btn-secondary mt-3">
          <router-link v-bind:to="'/products/' + product.id">More Info</router-link>
        </button>

      </div>
      <div v-if="product === currentProduct">
        <button class="btn btn-danger mt-3 ml-2" v-on:click="destroyProduct(product)">Delete</button>
      </div>
    </div>
  </div>

  </div>
</template>


<style>
</style>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      message: "Welcome to the Product Shop",
      products: [],
      currentProduct: {},
    };
  },
  created: function() {
    axios.get("/api/products").then(response => {
      this.products = response.data;
    });
  },
  methods: {
    showProduct: function(product) {
      if (this.currentProduct === product) {
        this.currentProduct = null;
      } else {
        this.currentProduct = product;
      }
    },
    updateProduct: function(product) {
      var params = {
        name: product.name,
        description: product.description,
        price: product.price,
        image_url: product.image_url
      };
      axios.patch("/api/products/" + product.id, params).then(response => {
        console.log("Success!", response.data);
        product = response.data;
      });
    },
    destroyProduct: function(product) {
      axios.delete("/api/products/" + product.id).then(response => {
        console.log("Success!", response.data);
        var index = this.products.indexOf(product);
        this.products.splice(index, 1);
      });
    }
  }
};
</script>