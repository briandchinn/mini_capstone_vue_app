<template>
  <div class="products-edit">
    <h3>Edit: {{ product.name }}</h3>

    <ul>
      <li v-for="error in errors">Error: {{ error }}</li>
    </ul>

    <form v-on:submit.prevent="submit()">
        <div class="form-group">
          <label for="name">Name</label>
          <input type="text" class="form-control" id="name" placeholder="Cool Product" v-model="product.name">
        </div>
        <div class="form-group">
          <label for="description">Description</label>
          <input type="text" class="form-control" id="description" placeholder="What is this product all about ..." v-model="product.description">
        </div>
        <div class="form-group">
          <label for="price">Price</label>
          <input type="number" class="form-control" id="price" placeholder="$130" v-model="product.price">
        </div>
        <div class="form-group">
          <label for="image">Image</label>
          <input type="text" class="form-control" id="image" placeholder="Link to image" v-model="product.image_url">
        </div>
      <button type="submit" class="btn btn-warning">Update Product</button>
    </form>

  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      product: {},
      errors: []
    };
  },
  created: function() {
    axios.get("/api/products/" + this.$route.params.id).then(response => {
      this.product = response.data;
      console.log(this.product)
    });
  },
  methods: {
    submit: function() {
      var params = {
        name: this.product.name,
        description: this.product.description,
        price: this.product.price,
        image_url: this.product.image_url
      };
      axios.patch("/api/products/" + this.product.id , params).then(response => {
        console.log("Success!", response.data);
        this.$router.push("/products/" + this.product.id);
      }).catch(error => {
        this.errors = error.response.data.errors;
      });
    }
  }
};
</script>
