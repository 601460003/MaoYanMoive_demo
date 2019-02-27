<template>
  <div>
    <div class="moive-title">
      <div class="moive-title-left"><</div>
      <div class="moive-title-main">Rosa Salazar 罗莎·萨拉查</div>
    </div>
    <div class="moive-mss">
      <div class="moive-img">
        <img
          src="https://gss1.bdstatic.com/-vo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike80%2C5%2C5%2C80%2C26/sign=1535ee37533d26973ade000f3492d99e/bd315c6034a85edf38682dde4b540923dc547563.jpg"/>
      </div>
      <div class="moive-txt">
        <h2>影星资料</h2>
        <p>罗莎·萨拉查</p>
        <p>Rosa Salazar</p>
        <p>女</p>
      </div>
    </div>
    <h2 style="background: white;padding-left: 10px;padding-top: 10px">她的代表作品</h2>
    <div class="moive-mss" style="background-color: white">
      <div class="moive-img">
        <img src="https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2544987866.jpg"/>
      </div>
      <div class="moive-txt">
        <h3>阿丽塔：战斗天使</h3>
        <span>7.6分</span>
        <p>导演:罗伯特·罗德里格兹</p>
        <p>主演:罗莎·萨拉查 , 克里斯托弗·沃尔兹</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "starmsg"
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
    padding: 10px;
    border-bottom: 1px solid #d6d6d6;
    background-color: #b4b1b1;
    padding-top: 15px;
  }

  .moive-img img {
    width: 120px;
    height: 160px;
  }

  .moive-txt {
    margin-left: 12px;
    width: 172px;
    font-size: 16px;
  }

  .moive-txt h2 {
    font-weight: normal;
    padding-bottom: 8px;
  }
</style>
