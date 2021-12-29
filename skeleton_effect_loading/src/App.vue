<template>
  <div id="app">
    <div class="card">
      <div :class="{ loading: loading, 'card-img': true }" ref="img">
        <img :src="data.url" alt="" />
      </div>
      <div class="card-info">
        <div :class="{ loading: loading }">
          <h2 v-if="data.breeds">{{ data.breeds[0].name }} ( {{ data.breeds[0].origin }} )</h2>
        </div>
        <div :class="{ loading: loading }">
          <p v-if="data.breeds">
            {{ data.breeds[0].description }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { mapState } from "vuex";
export default {
  data() {
    return {
      loading: true,
    };
  },
  methods: {
    ...mapActions(["getData"]),
  },
  created() {
    setTimeout(() => {
      this.loading = false;
      this.getData();
    }, 1000);
  },
  computed: {
    ...mapState(["data"]),
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Poppins:400,500,600,700&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}

body {
  height: 100vh;
  background-color: #b1b9d4;
  display: flex;
  align-items: center;
  justify-content: center;
}
.loading {
  position: relative;
  background-color: #b8b8b8 !important;
  overflow: hidden;
  border-radius: 10px;
  &::after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    transform: translateX(-100%);
    background-image: linear-gradient(
      to right,
      rgba(255, 255, 255, 0.5),
      transparent
    );
    animation: loading 1s infinite;
  }
}

#app {
  .card {
    width: 700px;
    background-color: #fff;
    border-radius: 10px;
    display: flex;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    padding: 20px;
    .card-img {
      width: 250px;
      border-radius: 10px;
      overflow: hidden;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
        transition: 0.5s;
        &:hover{
          transform: scale(1.1);
        }
      }
    }
    .card-info {
      flex: 1;
      padding-left: 25px;
      &>:nth-child(1) {
        min-height: 40px;
        margin-bottom: 5px;
      }
      &>:nth-child(2) {
        min-height: 80px;
      }
    }
  }
}

@keyframes loading {
  100% {
    transform: translateX(100%);
  }
}
</style>
