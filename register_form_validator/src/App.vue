<template>
  <div id="app">
    <form class="signup" v-show="isShow">
      <h1>Register</h1>
      <input-information
        typeInput="text"
        placeholder="Username"
        ref="myChild1"
        :error="userNameError"
      ></input-information>
      <input-information
        typeInput="email"
        placeholder="Email"
        ref="myChild2"
        :error="emailError"
      ></input-information>
      <input-information
        typeInput="password"
        placeholder="Password"
        ref="myChild3"
        :error="passWordError"
      ></input-information>
      <input-information
        typeInput="password"
        placeholder="Confirm Password"
        ref="myChild4"
        :error="reTypePassWordError"
      ></input-information>
      <button class="btn signup-btn" @click.prevent="validateSignup">
        Sign up
      </button>
      <div class="note">
        Already have accout? <a href="#" @click="showForm">Login</a>
      </div>
    </form>
    <form class="login" v-show="!isShow">
      <h1>Login</h1>
      <input-information
        typeInput="email"
        placeholder="Email"
        error=""
      ></input-information>
      <input-information
        typeInput="password"
        placeholder="Password"
        error=""
      ></input-information>
      <button class="btn signup-btn">Login</button>
      <div class="note">
        Not yet have accout? <a href="#" @click="showForm">Signup</a>
      </div>
    </form>
  </div>
</template>

<script>
import InputInformation from "./components/InputInformation.vue";
export default {
  components: { InputInformation },
  data() {
    return {
      userNameError: "",
      emailError: "",
      passWordError: "",
      reTypePassWordError: "",
      isShow: true,
    };
  },
  mounted() {},
  methods: {
    showForm() {
      this.isShow = !this.isShow;
    },
    validateSignup() {
      const userName = this.$refs.myChild1.value.trim();
      const email = this.$refs.myChild2.value.trim();
      const passWord = this.$refs.myChild3.value.trim();
      const reTypePassWord = this.$refs.myChild4.value.trim();
      this.userNameError = this.checkUserName(userName);
      this.emailError = this.checkEmail(email);
      this.passWordError = this.checkPassWord(passWord);
      this.reTypePassWordError = this.checkPassWordMatch(
        passWord,
        reTypePassWord
      );
    },
    checkEmail(email) {
      const re =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (email === "") return "Email is required";
      if (!re.test(email)) {
        return "Email is not valid";
      }
      return "success";
    },
    checkUserName(userName) {
      if (userName === "") return "Username is required";
      return this.checklength(userName, "Username", 3, 15);
    },
    checkPassWord(passWord) {
      if (passWord === "") return "Password is required";
      return this.checklength(passWord, "Password", 6, 25);
    },
    checkPassWordMatch(pass1, pass2) {
      if (pass2 === "") return "Confirm password is required";
      return pass1 === pass2 ? "success" : "Password do not match";
    },
    checklength(el, inputName, min, max) {
      if (el.length < min) {
        return inputName + " must be at least " + min + " characters";
      } else if (el.length > max)
        return inputName + `must be less than ${max} characters`;
      else return "success";
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap");
:root {
  --primary-color: #2691d9;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
a {
  text-decoration: none;
}
body {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(120deg, #3ca7ee, #9b408f);
}
#app {
  width: 400px;
  background-color: #fff;
  border-radius: 10px;
  padding: 25px 35px;
  font-family: "Poppins", sans-serif;
}
#app h1 {
  font-weight: bolder;
  text-align: center;
  margin-bottom: 40px;
}
#app .signup-btn {
  border: none;
  outline: none;
  color: #fff;
  font-family: "Poppins", sans-serif;
  font-size: 20px;
  font-weight: 500;
  width: 100%;
  padding: 10px 0;
  border-radius: 25px;
  background-color: var(--primary-color);
  cursor: pointer;
  margin: 20px 0;
  transition: 0.4s;
}
#app .signup-btn:hover {
  background-color: #08609a;
}
#app .note {
  text-align: center;
  font-family: "Poppins", sans-serif;
  color: #333;
}
#app .note a {
  color: var(--primary-color);
  transition: 0.25s;
}
#app .note a:hover {
  text-decoration: underline;
}
</style>
