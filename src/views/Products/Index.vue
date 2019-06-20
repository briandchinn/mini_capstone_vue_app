<template>
  <div class="products-index">

    <div class="form-group">
      <label for="filter">Search</label>
      <input type="text" class="form-control" id="filter" placeholder="Search for name" v-model="filter" list="names">
    </div><br>

    <div class="form-group">
      <button v-on:click="setSortAttribute('name')">Sort By Name
        <span v-if="sortAttribute === 'name' && sortAscending === 1">^</span>
        <span v-if="sortAttribute === 'name' && sortAscending === -1">v</span>
      </button>
      
      <button v-on:click="setSortAttribute('price')">Sort By Price
        <span v-if="sortAttribute === 'price' && sortAscending === 1">^</span>
        <span v-if="sortAttribute === 'price' && sortAscending === -1">v</span>      
      </button>

    </div><br>

    <datalist id="names">
      <option v-for="product in products">{{ product.name }}</option>
    </datalist>

    <h1 class="mt-3">{{ message }}</h1>
    
    <transition-group appear enter-active-class="animated zoomInDown" leave-active-class="animated rotateOut">
      <div v-bind:key="product.id" v-for="product in orderBy(filterBy(products, filter, 'name'), sortAttribute, sortAscending)">

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
    </transition-group>

  </div>
</template>


<style>
</style>

<script>
import axios from "axios";
import Vue2Filters from "vue2-filters";

export default {
  mixins: [Vue2Filters.mixin],
  data: function() {
    return {
      message: "Welcome to the Product Shop",
      products: [],
      currentProduct: {},
      filter: "",
      sortAttribute: "name",
      sortAscending: 1
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
    },
    setSortAttribute: function(attribute) {
      if (this.sortAttribute = attribute) {
        this.sortAscending = this.sortAscending * -1;
      } else {
        this.sortAscending = 1;
      }
      this.sortAttribute = attribute;
    }
  }
};
</script>