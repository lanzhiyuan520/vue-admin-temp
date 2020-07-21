<template>
    <div class="lan-table" :style="{paddingBottom:pagination?'20px':'0'}">
        <el-table
                :data="tableData"
                border
                fit
                highlight-current-row
        >
            <template v-for="col in tableCols">
                <slot v-if="col.slot" :name="col.slot"></slot>
                <el-table-column
                    v-else
                    :align="col.align || 'center'"
                    :width="col.width || ''"
                    :label="col.label"
                    :key="col.label"
                >
                    <template slot-scope="scope">
                        <div v-if="col.type === 'image'">
                            <img :src="scope.row[col.props]" class="img_head" />
                        </div>
                        <div v-else>
                            <span>{{ scope.row[col.props]}}</span>
                        </div>
                    </template>
                </el-table-column>
            </template>
        </el-table>
        <div class="pagination-style" v-if="pagination">
            <el-pagination
                    layout="prev, pager, next, jumper"
                    :total="paginationOption.total"
                    :current-page.sync="paginationOption.page"
                    :page-size="paginationOption.limit"
                    @current-change="handPaginationData"
            >
            </el-pagination>
        </div>
    </div>
</template>

<script>
  export default {
    name: "lanTable",
    props : {
      tableData : {
        type : Array,
        default : () => []
      },
      //表头
      tableCols : {
        type : Array,
        default : () => []
      },
      //是否需要分页
      pagination : {
        type : Boolean,
        default : true,
      },
      //分页属性
      paginationOption : {
        type : Object,
        default : () => {
          return {
            page : 1,
            total : 0,
            limit : 20
          }
        }
      }
    },
    data() {
      return {

      }
    },
    methods: {
      handPaginationData (page) {
        this.$emit('handPaginationData' , { page })
      }
    },
  }
</script>

<style lang="scss">
    .lan-table {
        background-color: #fff;
        .pagination-style {
            padding: 0 20px;
            margin-top: 20px;
            text-align: right;
        }
        .el-table {
            font-size: 12px;
        }
    }
</style>
