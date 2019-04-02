<template>
  <div class="header">
    <div class="nav-top">
      <div class="nav-left">
        <div class="nav-img">
          <img src="../assets/logo.png"/>
        </div>
        <div class="nav-top-txt">
          <h1>狗眼电影</h1>
          <span>查影讯，上狗眼电影就够了！</span>
        </div>
      </div>
      <div class="nav-right" @click="serch">
        <input type="text" placeholder="请输入电影名字">
      </div>
    </div>
    <div class="nav-hot">
      <router-link to="/inTheaters" class="v-nav">正在热映</router-link>
      <a href="#">即将上映</a>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'vHeader',
    data() {
      return {}
    },
    methods: {
      serch() {
        this.$router.push({path: '/searchPage'})
      },
    },
  }
</script>

<style>

  .nav-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 5px;
    background: wheat;
  }

  .nav-left{
    display: flex;
  }

  .nav-img{
    flex: 1;
    margin-right: 5px;
  }
  .nav-img img {
    width: 42px;
    height: 42px;
  }
  .nav-top-txt{
   display: flex;
    flex-direction: column;
  }
  .nav-top-txt h1 {
    font-size: 18px;
    font-weight: 600;
  }

  .nav-top-txt span {
    color: #999;
  }

  .nav-right input {
    width: 100px;
    border-radius: 27px;
    padding: 10px;
    border: 1px;
    line-height: 10px;
    text-indent: 8px;
  }

  .nav-hot {
    background: #df2d2d;
    height: 40px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .nav-hot a {
    font-size: 14px;
    color: white;
  }
</style>
