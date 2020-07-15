<template>
    <div class="lan-tag">
        <span>{{getText}}</span>
    </div>
</template>

<script>
  export default {
    name: "lan-tag",
    props : {
      type : String,
    },
    computed : {
      getText () {
        if (this.$slots.default) {
          return this.$slots.default[0].text || ''
        }
        return ''
      }
    },
    mounted () {

    }
  };
</script>

<style scoped>

</style>
