<template>
  <div id="app">
    <div id="nav">
      <input type="button" value="change" @click="flag=!flag">

      <transition name="header" mode="out-in">
        <div>
        <p v-show="flag">hahahha</p>
        </div>
      </transition>
      <br>name:
      <input type="text" v-model="name">
      ---age:
      <input type="text" v-model="age">

      <input type="button" value="add" @click="add">
      <transition-group name="title-list" tag="div" class="list" mode="out-in">
        <p v-for="item in list" :key="item.id">
          {{ item.id }}---{{ item.name }}---{{ item.age }}
          <a href @click.prevent="del(item.id)">del</a>
        </p>
      </transition-group>

      <br>
      <router-link to="/news">News</router-link>
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>
    </div>
    <transition name="header" mode="out-in">
      <router-view/>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      flag: false,
      name: "",
      age: "",
      list: [
        {
          id: 0,
          name: "zhangsan",
          age: 12
        },
        {
          id: 1,
          name: "lise",
          age: 121
        },
        {
          id: 2,
          name: "wangwu",
          age: 18
        }
      ]
    };
  },
  methods: {
    del(i) {
      this.list.some((v, ii) => {
        if (v.id === i) {
          this.list.splice(ii, 1);
          return true;
        }
      });
    },
    add() {
      this.list.unshift({
        id: this.list.length,
        name: this.name,
        age: this.age
      });
    }
  }
};
</script>



<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 40px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}
.list{
  /* text-align:initial; */
  width: 180px;
  text-align: left;
  position: relative;
  /* margin-left: 100px; */
  margin:0 auto;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.list-enter,
.list-leave-to,
.header-enter,
.header-leave-to {
  opacity: 0;
  /* transform: translate(50px, 0); */
  /* transition: translate(0, 0); */
}
.list-enter-active,
.list-leave-active,
.header-enter-active,
.header-leave-active {
  transition: all 0.4s ease;
}
.list-leave,
.list-enter-to,
.header-leave,
.header-enter-to {
  /* transition: translate(0, 0); */
  opacity: 1;
}

.list-leave-active {
  position: absolute;
}
.list-move {
  transition: all 0.4s ease;
}

.title-list-enter {
  opacity: 0;
  transform: translate(-20px, 20x);
}
.title-list-leave-to {
  opacity: 0;
  transform: translateX(8px);
}
.title-list-enter-active,
.title-list-leave-active {
  /* transform: translate() */
  transition: all 0.6s ease;
}
.title-list-move {
  transition: all 0.6s ease;
}
.title-list-leave-active {
  position: absolute;
}
</style>
