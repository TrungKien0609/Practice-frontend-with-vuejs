<template>
<div class="search">
    <SearchResult v-for = "(item,index) in SearchResults" :key="item.id" :name="item.name" :index="index" ></SearchResult>
    <form action="#">
      <input type="text" placeholder="Type and enter" />
    </form>
  </div>
</template>
<script>
import SearchResult from "./SearchResult.vue";
export default {
  name: "Search",
  components:{
    SearchResult,
  },
  props:['SearchResults'],
  methods:{
    
  },
};
</script>
<style>
.search {
  padding: 10px;
  border: 1px solid #555;
  border-radius: 5px;
  margin: 15px 0;
}
.search form input{
  display: block;
  border: none;
  outline: none;
  font-size: 20px;
  font-family: 'Poppins', sans-serif;
}
</style>