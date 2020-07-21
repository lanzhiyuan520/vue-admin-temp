<template>
    <li class="list-item">{{item}}</li>
</template>

<script>
  import { ElementMixin } from 'vue-slicksort';
  export default {
    mixins : [ElementMixin],
    name: "sortableItem",
    props : ['item']
  };
</script>

<style>

</style>
