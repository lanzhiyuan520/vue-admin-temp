<template>
    <div>
        <div class="export-btn">
            <el-button type="primary" size="mini" @click="exportExcel">导出</el-button>
        </div>
        <lan-table
            :pagination="false"
            :table-cols="tableCols"
            :table-data="tableData"
        ></lan-table>
    </div>
</template>

<script>
  export default {
    name: "exportExcel",
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
        tableData : []
      }
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
      },
      exportExcel () {
        this.$exportExcel({
          tHeader : ['姓名','手机号','邮箱','地址','年龄','注册时间'],
          tKey : ['name','phone','email','address','age','createTime'],
          exportList : this.tableData,
          excelName : '测试导出'
        })
      }
    }
  };
</script>

<style scoped>
    .export-btn {
        margin-bottom: 20px;
    }
</style>
