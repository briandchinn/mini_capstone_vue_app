<template>
  <div class="products-new">
    <h3> {{ newProduct }}</h3>

    <ul>
      <li v-for="error in errors">Error: {{ error }}</li>
    </ul>

    <form v-on:submit.prevent="submit()">
        <div class="form-group">
          <label for="name">Name</label>
          <input type="text" class="form-control" id="name" placeholder="Cool Product" v-model="newProductName">
        </div>
        <div class="form-group">
          <label for="description">Description</label>
          <input type="text" class="form-control" id="description" placeholder="What is this product all about ..." v-model="newProductDescription">
        </div>
        <div class="form-group">
          <label for="price">Price</label>
          <input type="number" class="form-control" id="price" placeholder="$130" v-model="newProductPrice">
        </div>
        <div class="form-group">
          <label for="image">Image</label>
          <input type="text" class="form-control" id="image" placeholder="Link to image" v-model="newProductImageURL">
        </div>
      <button type="submit" class="btn btn-success">Create Product</button>
    </form>

  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      newProduct: "New Product",
      newProductName:"",
      newProductDescription:"",
      newProductPrice:"",
      newProductImageURL:"",
      errors: []
    };
  },
  created: function() {
  },
  methods: {
    submit: function() {
      var params = {
        name: this.newProductName,
        description: this.newProductDescription,
        price: this.newProductPrice,
        image_url: this.newProductImageURL
      };
      axios.post("/api/products", params).then(response => {
        console.log("Success!", response.data);
        this.$router.push("/");
      }).catch(error => {
        this.errors = error.response.data.errors;
      });
    }
  }
};
</script>