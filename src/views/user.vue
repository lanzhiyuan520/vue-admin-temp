<template>
    <div class="user">
        <lan-table
            :table-cols="tableCols"
            :table-data="tableData"
            :pagination-option="paginationOption"
        >
            <el-table-column align="center" prop="created_at" label="操作" width="240" slot="opt">
                <template>
                    <el-button size="mini" type="text" class="table-btn">编辑</el-button>
                    <el-button size="mini" type="text" class="table-btn">删除</el-button>
                </template>
            </el-table-column>
        </lan-table>
    </div>
</template>

<script>
  import lanTable from '../components/lanTable/lanTable'
  export default {
    name: "user",
    data () {
      return {
        tableCols : [
          {
            label : 'ID',
            width : 80,
            props : 'id',
          },
          {
            label : '姓名',
            props : 'name'
          },
          {
            label : '手机号',
            props : 'phone',
          },
          {
            label : '邮箱',
            props : 'email',
          },
          {
            label : '地址',
            props : 'address',
          },
          {
            label : '年龄',
            props : 'age',
          },
          {
            label : '注册时间',
            props : 'createTime',
          },
          {
            label : '操作',
            slot : 'opt'
          }
        ],
        tableData : [
          {
            id : 1,
            name : '兰志远',
            phone : '18310737476',
            email : 'lanzhiyuan99@126.com',
            address : '北京市昌平区',
            age : 18,
            createTime : '2018-12-01'
          }
        ],
        paginationOption : {
          total : 100,
          page : 1,
          limit : 20
        }
      }
    },
    components : {
      lanTable
    },
    mounted () {
      this.createData()
    },
    methods : {
      createData () {
        let data = []
        for (let i = 0; i < 99; i++) {
          data.push({
            id : i+1,
            name : '兰志远',
            phone : '18310737476',
            email : 'lanzhiyuan99@126.com',
            address : '北京市昌平区',
            age : i+1,
            createTime : '2018-12-01'
          })
        }
        this.tableData = data
      }
    }
  };
</script>

<style lang="scss">

</style>
