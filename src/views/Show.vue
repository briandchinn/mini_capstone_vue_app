<template>
  <div class="products-show">
    <h1>{{ product.name }}</h1>
    <img v-bind:src="product.image_url" alt="">
    <p>Description: {{ product.description }}</p>
    <p>Price: {{ product.price }}</p>
    <p>Tax: {{ product.tax }}</p>
    <p>Total {{ product.total }}</p>

    <button class="btn btn-warning">
      <router-link v-bind:to="'/products/' + product.id + '/edit'">Edit</router-link>
    </button>
    <button class="btn btn-danger mt-3 ml-2" v-on:click="destroyProduct(product)">Delete</button>

  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      product: {}
    };
  },
  created: function() {
    axios.get("/api/products/" + this.$route.params.id).then(response => {
      this.product = response.data;
      console.log(this.product)
    });
  },
  methods: {
    destroyProduct: function(product) {
      if(confirm("Do you really want to delete " + this.product.name))
      axios.delete("/api/products/" + this.product.id).then(response => {
        console.log("Success!", response.data);
        this.$router.push("/");
      });
    }
  }
};
</script>