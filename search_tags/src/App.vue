<template>
  <div class="container">
    <h2>SearchTags</h2>
    <SearchTags :SearchResults = "SearchResults" @removeOne = "removeOne"> </SearchTags>
    <button @click="removeAll" id="removeAll-btn">Remove All</button>
  </div>
</template>

<script>
import SearchTags from "./components/Search";
export default {
  name: "App",
  components: {
    SearchTags,
  },
  data() {
    return {
      SearchResults: [
        {
          id: 1,
          name: "Nodejs",
        },
        {
          id: 2,
          name: "Reactjs",
        },
        {
          id: 3,
          name: "trungkien",
        },
      ],
    };
  },
  methods: {
    removeAll() {
       this.SearchResults = [];
    },
    // remove a search result
    removeOne(index){ 
       this.SearchResults.splice(index,1);
    }
  },
};
</script>

<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
@import url("https://fonts.googleapis.com/css2?family=Poppins&display=swap");
body {
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #8cc84c;
  font-family: "Poppins", sans-serif;
}
.container {
  width: 40%;
  height: auto;
  background-color: #fff;
  border-radius: 10px;
  padding: 20px;
}
.container h2 {
  font-weight: 600;
  margin: 10px 0;
}
.container #removeAll-btn {
  outline: none;
  border: none;
  padding: 15px 25px;
  border-radius: 7px;
  letter-spacing: 1.1px;
  font-size: 16px;
  color: #fff;
  background-color: #8cc84c;
  cursor: pointer;
  transition: 0.25s;
  margin: 10px 0;
}
.container #removeAll-btn:hover {
  background-color: #7cac49;
}
</style>
