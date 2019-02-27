<template>
<div class="search-page">
  <div class="search-input">
    <input type="text" v-model="query" @keyup.enter="submit()">
    <span @click="notSunmit()">取消</span>
  </div>
  <div class="search-hot">
    <h3>热门搜索</h3>
    <button v-for="name in hotSearch" @click="serch(name.id)">{{name.name}}</button>
  </div>
</div>
</template>

<script>
    export default {
        name: "searchpage",
      query: '',
      data(){
          return{
            hotSearch: [
              {name: '金刚狼3', id: '25765735'},
              {name: '一条狗的使命', id: '6873143'},
              {name: '生化危机:终章', id: '20471852'},
              {name: '乐高蝙蝠侠', id: '26145033'},
              {name: '爱乐之城', id: '25934014'},
              {name: '欢乐好声音', id: '26354572'}
            ]
          }
      },
      //方法
      methods:{
          //第一个输入方法
        submit(){
          this.$router.push({path: '/serchResult', query: { name: this.query }})
          this.query = ''
        },
        //第二个返回的方法
        notSunmit(){
          window.history.go(-1)
        },
        //第三个方法点击按钮去到电影名字页面
        serch(str){
        const path= '/movie/' + str
          this.$router.push({path:path})
        },
      },
    }
</script>

<style scoped>
  .search-input{
    display: flex;
    padding: 10px;
    height: 30px;
  }
.search-input input{
  flex: 1;
  text-decoration: none;
  border: 1px solid #E5E9F2;
  border-radius: 15px;
  padding-left: 2em;
}
  .search-input span{
    margin-left: 10px;
    font-size: 15px;
    align-self: center;
    cursor: pointer;
  }
  .search-hot{
    padding: 10px;
  }
  .search-hot h3{
    font-size: 16px;
  }
  .search-hot button{
    padding: 7px;
    background: white;
    border: 1px solid white;
    border-radius: 22px;
    color: red;
    margin-top: 4px;
  }
</style>
