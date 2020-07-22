<template>
    <div>
        <rich-text :catch-data="handChange"></rich-text>
        <div v-html="text"></div>
    </div>
</template>

<script>
  import richText from '../../components/richText/richText'
  export default {
    name: "richTextView",
    data () {
      return {
        text : ''
      }
    },
    components : {
      richText
    },
    methods : {
      handChange (data) {
        this.text = data
      }
    }
  };
</script>

<style scoped>

</style>
