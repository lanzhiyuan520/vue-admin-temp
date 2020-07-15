<template>
    <div class="login-view">
        <vue-particles
                :style="{height:clientHeight+'px'}"
                color="#dedede"
                :particleOpacity="0.7"
                :particlesNumber="80"
                shapeType="circle"
                :particleSize="4"
                linesColor="#dedede"
                :linesWidth="1"
                :lineLinked="true"
                :lineOpacity="0.4"
                :linesDistance="150"
                :moveSpeed="3"
                :hoverEffect="true"
                hoverMode="grab"
                :clickEffect="true"
                clickMode="push"
        >
        </vue-particles>
        <div class="login-box">
            <div class="login-title">管理系统</div>
            <div class="login-form">
                <el-form :model="loginForm" ref="loginForm" :rules="loginRules">
                    <el-form-item prop="username">
                        <el-input prefix-icon="iconfont icon-denglu" v-model="loginForm.username" placeholder="用户名"></el-input>
                    </el-form-item>
                    <el-form-item prop="password">
                        <el-input prefix-icon="iconfont icon-pass" v-model="loginForm.password" type="password" placeholder="密码"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <button class="clear-btn-style login-btn" @click="login">登录</button>
                    </el-form-item>
                    <el-form-item>
                        <div class="tip-text">用户名随意，密码：123456</div>
                    </el-form-item>
                </el-form>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: "login",
    data () {
      return {
        clientHeight : 0,
        loginForm : {
          username : '',
          password : ''
        },
        loginRules : {
          username : [
            { required: true, message : '请输入用户名', trigger: 'blur' }
          ],
          password : [
            { required: true, message : '请输入密码', trigger: 'blur' }
          ],
        }
      }
    },
    mounted () {
      this.clientHeight = document.documentElement.clientHeight
    },
    methods : {
      login () {
        let { loginForm } = this
        this.$refs['loginForm'].validate(valid => {
          if (valid) {
            if (loginForm.password !== '123456') {
              this.$message.error('密码错误')
            } else {
              let loginInfo = JSON.stringify({
                username : loginForm.username
              })
              localStorage.setItem('login',loginInfo)
              this.$message.success('登录成功')
              setTimeout(() => {
                this.$router.replace({
                  path : '/'
                })
              },1000)
            }
          }
        })
      }
    }
  };
</script>

<style lang="scss">
    #particles-js {
        position: absolute;
        width: 100%;
        background: url("../static/img/login-bgc.jpg") no-repeat;
        background-size: cover;
    }
    .login-box {
        width: 420px;
        /*height: 351px;*/
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        box-shadow: 0 0 10px 10px rgba(0,0,0,0.1);
        border-radius: 10px;
        background-color: #fff;
        padding: 20px;
        .login-title {
            text-align: center;
            font-size: 22px;
        }
        .login-form {
            margin-top: 20px;
            .login-btn {
                width: 100%;
                height: 40px;
                background-color: #1abc9c;
                color: #fff;
                font-size: 16px;
                cursor: pointer;
            }
            .login-btn:active {
                background-color: #16a085;
            }
            .tip-text {
                text-align: center;
            }
        }
    }
</style>
