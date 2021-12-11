<template>
    <div class="search-result">
      <p>{{name}}</p>
      <button id="close" @click="removeOne"><i class="fas fa-times"></i></button>
    </div>
</template>
<script>
export default {
    props: ['name','index'],
    methods: {
        
        // remove a search result
        removeOne(index){
            this.$parent.$emit("removeOne", this.index)
        }
    }
}
</script>
<style>
.search-result{
    cursor: pointer;
    padding: 10px;
    background-color: #8cc84c;
    border-radius: 5px;
    color: #fff;
    display: inline-block;
    margin: 7px 0;
    margin-right: 5px;
}
.search-result p{
    display: inline-block;
    margin-right: 15px;
}
.search-result  #close{
    outline: none;
    border: none;
    background-color: #8cc84c;
    padding: 3px;
    font-size: 17px;
    cursor: pointer;
    color: #fff;
    font-weight: 400;
}
</style>