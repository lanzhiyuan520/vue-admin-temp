<template>
    <div>
        <div class="img-item" v-for="(item,index) in imgList" :key="index">
            <img v-lazy="item" />
        </div>
    </div>
</template>

<script>
  export default {
    name: "lazy",
    data () {
      return {
        imgList : []
      }
    },
    mounted () {
      let data = []
      for (let i = 0; i < 50; i++) {
        data.push('http://pic.lanzhiyuan99.cn/image/jpg/admin-bgclogin-bgc.jpg')
      }
      this.imgList = data
    }
  };
</script>

<style scoped lang="scss">
    .img-item {
        img {
            width: 100%;
            height: 500px;
        }
    }
</style>
