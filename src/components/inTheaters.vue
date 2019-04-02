<template>
<div >
  <vHeader></vHeader>
  <div class="moive-mss" v-for="item in movieMM">
    <div class="moive-img" >
      <img :src="item.images.small" />
    </div>
    <div class="moive-txt" >
      <h2 v-text="item.title"></h2>
      <p>{{ item.rating.average }}分</p>
      <p>导演:{{ item.directors[0].name}}</p>
      <p>主演:罗莎·萨拉查 克里斯托弗·沃尔兹
        <!--<span v-if="item.casts[1]">, {{ item.casts[1].name }}</span>-->
      </p>
    </div>
  </div>
</div>
</template>

<script>
  import vHeader from '../components/iheader'
  export default {
    name: "in-theaters.vue",
    components: {
      vHeader,
    },
    data(){
      return{
        movieMM:{},
      }
    },
    mounted () {
      this.$http.jsonp('https://api.douban.com/v2/movie/in_theaters')
        .then(function (response) {
          this.movieMM=response.body.subjects
        })
        .catch(function (response) {
        })
    },
    methods: {
      showMoreMsg (str) {
        const path = '/movie/' + str
        this.$router.push({path: path})
      }
    }
  }

</script>

<style scoped>
.moive-mss{
  display: flex;
  padding: 10px;
  border-bottom: 1px solid #d6d6d6;
  background-color: white;
  padding-top: 15px;
}
  .moive-img img{
    width: 90px;
  }
  .moive-txt{
    margin-left: 12px;
    width: 172px;
  }
  .moive-txt h2{
    font-weight: normal;
    padding-bottom: 8px;
  }
</style>
