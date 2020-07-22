<template>
    <div>
        <md-editor
            :value="value"
        ></md-editor>
    </div>
</template>

<script>
  import mdEditor from '../../components/markdown/mdEditor'
  export default {
    name: "mavon",
    data () {
      return {
        value : '111'
      }
    },
    components : {
      mdEditor
    }
  };
</script>

<style scoped>

</style>
