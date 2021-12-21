<template>
  <div id="app" ref="app">
    <form action="#" id="search">
      <input
        type="text"
        name=""
        placeholder="Search..."
        v-on:keyup.enter="submit"
        v-model="citySearch"
      />
    </form>
    <div class="content-render">
      <h1 class="address">{{ cityName }} , {{ country }}</h1>
      <p class="time">{{ time }}</p>
      <p class="temperature">{{ Math.round(temperature) }} <span>o</span>C</p>
      <p class="detail-wether">{{ shortDesc }}</p>
      <div class="more-infor-container">
        <div class="more-infor">
          <p><i class="far fa-eye"></i></p>
          <p>{{ visibility }} (m)</p>
        </div>
        <div class="more-infor">
          <p><i class="fas fa-wind"></i></p>
          <p>{{ wind }} (m/s)</p>
        </div>
        <div class="more-infor">
          <p><i class="fas fa-cloud-sun"></i></p>
          <p>{{ cloud }} (%)</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      // Không thể lưu vào một object rổi render ra kiểu object.name , object.main.temp -> vẫn render được nhưng báo lỗi trên console.
      citySearch: "Ha Noi",
      cityName: "",
      country: "",
      temperature: 0,
      shortDesc: "",
      visibility: 0,
      wind: 0,
      cloud: 0,
    };
  },
  created() {
    this.callApi();
  },
  methods: {
    callApi() {
      return axios // promise
        .get(
          `https://api.openweathermap.org/data/2.5/weather?q=${this.citySearch}&units=metric&appid=5e4b32fed53cb940a18af49719f3227e`
        )
        .then((response) => {
          this.cityName = response.data.name;
          this.country = response.data.sys.country;
          this.temperature = response.data.main.temp;
          this.shortDesc = response.data.weather[0].main;
          this.visibility = response.data.visibility;
          this.wind = response.data.wind.speed;
          this.cloud = response.data.clouds.all;
        }).catch(this.catchError); // không thể viết luôn function trong method catch luôn được  (no name function)
        // vì nếu như gặp lỗi sẽ lập tức dừng, không chạy tiếp những đoạn code chưa được thực thi trong function đó
        // Nếu dùng callback thì catch chạy xong rồi callback mới được thực thi -> code trong callback được thực hiện hết.
    },
    catchError(er){
      console.log("ERROR: -------------------------- " + er.response.data.message)
      this.cityName = "Underfind" ;
    },
    submit() {
      this.callApi();
    },
  },
  computed: {
    time() {
      let today = new Date();
      return today.toLocaleString();
    },
  },
  watch: {
    temperature() {
      if (this.temperature < 18) {
        document.querySelector("body").classList.add("cold");
        this.$refs.app.classList.add("cold");
      } else {
        document.querySelector("body").classList.remove("cold");
        this.$refs.app.classList.remove("cold");
      }
    },
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Poppins&display=swap");
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
body {
  min-height: 100vh;
  font-family: "poppin", sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgb(0, 0, 0)),
    url("../public/images/hot.png");
  &.cold {
    background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgb(0, 0, 0)),
      url("../public/images/cold.png");
  }
  #app {
    width: 350px;
    height: 600px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 10px;
    padding: 30px 20px;
    background-image: url("../public/images/hot.png");
    &.cold {
      background-image: url("../public/images/cold.png");
    }
    #search {
      input {
        border: none;
        outline: none;
        padding: 12px 20px;
        font-size: 18px;
        color: #111;
        font-weight: 450;
        background-color: rgba(255, 255, 255, 0.4);
        width: 100%;
        border-radius: 0 15px 0 15px;
        box-shadow: 0px 5px 4px rgb(0, 0, 0, 0.2);
        transition: 0.4s;
      }
      input:focus {
        border-radius: 15px 0 15px 0;
        background-color: #fff;
      }
    }
    .content-render {
      text-align: center;
      color: #fff;
      font-family: "poppin", sans-serif;
      width: 100%;
      .address {
        margin-top: 2.5rem;
        text-shadow: 2px 2px rgba(0, 0, 0, 0.5);
      }
      .time {
        margin-top: 0.4rem;
      }
      .temperature {
        display: inline-block;
        font-size: 65px;
        font-family: sans-serif;
        font-weight: 800;
        text-shadow: 5px 5px rgba(0, 0, 0, 0.8);
        padding: 30px 25px 25px 25px;
        background-color: rgba(255, 255, 255, 0.3);
        border-radius: 20px;
        letter-spacing: 1.1px;
        box-shadow: 4px 4px rgba(0, 0, 0, 0.5);
        margin-top: 25px;
        span {
          vertical-align: super;
          font-size: 55px;
        }
      }
      .detail-wether {
        text-shadow: rgba(0, 0, 0, 0.4) 3px 3px;
        font-size: 40px;
        font-weight: 600;
        margin-top: 30px;
      }
      .more-infor-container {
        display: flex;
        justify-content: space-between;
        margin-top: 40px;
        .more-infor {
          p {
            &:nth-child(2) {
              margin-top: 20px;
            }
          }
        }
      }
    }
  }
}
</style>
