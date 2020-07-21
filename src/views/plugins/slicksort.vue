<template>
    <div class="drag">
        <SortableList lockAxis="y" v-model="items" helperClass="active-class" useWindowAsScrollContainer>
            <SortableItem v-for="(item, index) in items" :index="index" :key="index" :item="item"/>
        </SortableList>
    </div>
</template>

<script>
  import SortableList from '../../components/drag/sortableList'
  import SortableItem from '../../components/drag/sortableItem'
  export default {
    name: "slicksort",
    data () {
      return {
        items : ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6', 'Item 7', 'Item 8','Item 9','Item 10','Item 11','Item 12']
      }
    },
    components: {
      SortableList,
      SortableItem,
    },
    watch : {
      items (val) {
        console.log(val)
      }
    }
  };
</script>

<style lang="scss">
    .drag {
        .list {
            .list-item:last-child {
                border: none;
            }
            .list-item {
                box-sizing: border-box;
                padding-left: 20px;
                height: 50px;
                line-height: 50px;
                background-color: #fff;
                border-bottom: 1px solid #ccc;
            }
        }
    }
    .active-class {
        background-color: #fff;
        list-style: none;
        line-height: 50px;
        box-sizing: border-box;
        padding-left: 20px;
    }
</style>
