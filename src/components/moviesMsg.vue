<template>
  <div class="message-moive">
    <!--电影信息标题-->
    <div class="moive-title">
      <div class="moive-title-left" @click="backLastPage ()"><</div>
      <div class="moive-title-main">阿丽塔：战斗天使</div>
    </div>
    <!--电影信息封面-->
    <section>
      <div class="moive-mss">
        <div class="moive-img">
          <img src="https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2544987866.jpg"/>
        </div>
        <div class="moive-txt">
          <h2>阿丽塔：战斗天使</h2>
          <span>7.6(168447人评分)</span>
          <p>2019年</p>
          <p>动作, 科幻, 冒险</p>
          <p>美国</p>
          <p>加拿大</p>
          <p>阿根廷</p>
          <p>2019-02-22(中国大陆)</p>
        </div>
      </div>
    </section>
    <!--想看 看过-->
    <div class="peple">
      <span>123564人想看</span>
      <span>1358人看过</span>
    </div>
    <!--电影简介-->
    <div style="margin-left: 10px;margin-right: 10px">
      <p style="font-size: 14px;">
        《阿丽塔：战斗天使》由科幻电影大师詹姆斯·卡梅隆编剧及监制，鬼才导演罗伯特·罗德里格兹执导，根据日本作家木城幸人经典漫画《铳梦》改编。
        未来26世纪，科技发展，人类与机械改造人共存，弱肉强食是钢铁城唯一的生存法则。依德是钢铁城著名的改造人医生，他在垃圾场发现了一个半机械
        少女残躯，依德医生将其拯救后为她取名阿丽塔。阿丽塔虽然重获生命却失去了记忆，如一个新生儿一样对这个世界充满新鲜感。在依德医生与好友雨果的帮助下，她逐步适应着新生活和街头险恶。一次偶然的机会，阿丽塔发现自己竟有着惊人的战斗天赋。
        一次次猎杀激发着她的觉醒，阿丽塔逐渐明白自己注定为战斗而生，为正义而战。一场揭开自己身世之谜，并打破宇宙旧秩序的史诗级冒险之旅就这样展开。
      </p>
    </div>
    <!--//演员信息-->
    <section class="start">
      <h2>演职人员</h2>
      <div>
        <img src="https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2544987866.jpg"/>
        <img src="https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2544987866.jpg"/>
        <img src="https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2544987866.jpg"/>
        <img src="https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2544987866.jpg"/>
      </div>
    </section>
    <!--热门短评-->
    <section class="hot-duanp">
      <h2>热门短评</h2>
      <p> 2019-02-05 08:02:44</p>
      <p>兩星半。看得快想睡著只想離開電影院的例子：說是「叛逆精神」，但最叛逆的就是加入高層操控的娛樂體系打球，明知道打球也未必能登上上層，還是繼續參與這個遊戲。說是「絕望」和「無序」，但其實整部電影從頭到尾都沒提供過有什麼很絕望的理由，更在最後自己打自己，提及到一切都被監視。說是「宿命」，是前世的記憶，但前世的記憶既不會隨著零件更替而損耗，也不會思考到底該否繼續堅持這套宿命。也許最好看的就是各種 CGI 特技，那些在城市跑酷的追殺場景，還有選到了這個女主角。我差點以為女主角的眼睛怎麼那麼大，是不是在看CG……</p>
      <div class="hot-img">
        <img src="https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2544987866.jpg">
        <span>桐梓桢</span>
      </div>
    </section>
    <section class="hot-duanp">
      <p> 2019-02-05 08:02:44</p>
      <p>兩星半。看得快想睡著只想離開電影院的例子：說是「叛逆精神」，但最叛逆的就是加入高層操控的娛樂體系打球，明知道打球也未必能登上上層，還是繼續參與這個遊戲。說是「絕望」和「無序」，但其實整部電影從頭到尾都沒提供過有什麼很絕望的理由，更在最後自己打自己，提及到一切都被監視。說是「宿命」，是前世的記憶，但前世的記憶既不會隨著零件更替而損耗，也不會思考到底該否繼續堅持這套宿命。也許最好看的就是各種 CGI 特技，那些在城市跑酷的追殺場景，還有選到了這個女主角。我差點以為女主角的眼睛怎麼那麼大，是不是在看CG……</p>
      <div class="hot-img">
        <img src="https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2544987866.jpg">
        <span>桐梓桢</span>
      </div>
    </section>
    <div class="chakan" @click="smallComment(movieMsg.id)">查看全部短评</div>
    <div class="chakan">查看全部评论</div>
  </div>
</template>
<script>
  export default {
    name: "moviesmsg",
    data(){
      return{
        movieMsg: {
          'rating': {
            'max': '',
            'average': '',
            'details': {
              '1': '',
              '3': '',
              '2': '',
              '5': '',
              '4': ''
            },
            'stars': '',
            'min': 0
          },
          trailer_urls: [],
          collect_count: '',
          'wish_count': '',
          'reviews_count': '',
          'images': {
            'small': '',
            'large': '',
            'medium': ''
          },
          'alt': '',
          'year': '',
          'pubdates': [],
          'id': '',
          'pubdate': '',
          'title': '',
          'languages': [],
          'countries': [],
          'writers': [{
            'avatars': {
              'small': '',
              'large': '',
              'medium': ''
            },
            'name_en': '',
            'name': '',
            'alt': '',
            'id': ''
          },
            {
              'avatars': {
                'small': '',
                'large': '',
                'medium': ''
              },
              'name_en': '',
              'name': '',
              'alt': '',
              'id': ''
            }
          ],
          'casts': [
            {
              'avatars': {
                'small': '',
                'large': '',
                'medium': ''
              },
              'name_en': '',
              'name': '',
              'alt': '',
              'id': ''
            }
          ],
          'summary': '',
          'directors': [
            {
              'avatars': {
                'small': '',
                'large': '',
                'medium': ''
              },
              'name_en': '',
              'name': '',
              'alt': '',
              'id': ''
            }
          ],
          'durations': [],
          'genres': [],
          popular_comments: [{
            rating: {
              max: '',
              min: '',
              value: ''
            },
            author: {
              uid: '',
              avatar: '',
              name: ''
            },
            content: '',
            create_at: ''
          }],
          comments_count: '',
          popular_reviews: ''
        }
      }
    },
    //获取数据
    mounted(){

    },
    methods:{
      smallComment (str) {
        const path = '/smallComment/' + str
        this.$router.push({path: path})

      },
      backLastPage (){
        window.history.go(-1)
      }
    },
    }
</script>

<style scoped>
  .moive-title {
    background: #e54847;
  }

  .moive-title-left {
    color: white;
    font-size: 32px;
    float: left;
    margin-left: 10px;
  }

  .moive-title-main {
    text-align: center;
    font-size: 20px;
    color: white;
    padding: 10px;
  }

  .moive-mss {
    display: flex;
    padding: 15px;
    border-bottom: 1px solid #d6d6d6;
    background-color: #b4b1b1;
  }

  .moive-img img {
    width: 140px;
  }

  .moive-txt {
    margin-left: 12px;
    width: 172px;
    line-height: 20px;
  }

  .moive-txt h2 {
    font-weight: normal;
    padding-bottom: 8px;
  }

  .peple {
    text-align: center;
    margin-top: 20px;
    margin-bottom: 25px;
  }

  .peple span {
    background: #e54847;
    color: white;
    font-size: 14px;
    padding: 8px;
    border-radius: 4px;
    margin-left: 30px;
  }

  .start {
    margin-top: 15px;
    margin-bottom: 15px;
    margin-left: 10px;
  }

  .start img {
    width: 100px;
    margin-left: 50px;
  }
  .hot-img img{
    width: 60px;
    height: 60px;
    border-radius: 30px;
    vertical-align: middle;
  }
  .hot-duanp{
    margin-left: 10px;
    border-bottom: 1px solid #d6d6d6;
  }
  .hot-duanp h2,  .hot-duanp p, .hot-duanp img{
    margin-bottom: 10px;
  }
  .chakan{
    text-align: center;
    font-size: 16px;
    color: red;
    border-bottom: 1px solid #d6d6d6;
  }
</style>
