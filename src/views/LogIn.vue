<template>
	<form action="">
		<h1>Войти</h1>
		<div class="input-box">
			<input v-model="authInput.txtEmail" type="text" placeholder="Имя пользователя" required>
			<i class='bx bx-user'></i>
		</div>
		<div class="input-box">
			<input v-model="authInput.txtPassword" type="password" placeholder="Введите пароль" required>
			<i class='bx bxs-lock-alt'></i>
		</div>
			<button @click="login()" class="btn">Войти</button>
		<div class="register-link">
			<p>Ещё не зарегистрированы? <router-link to="/register">Зарегистрироваться</router-link></p><!--вставить ссылку-->
		</div>
	</form>
</template>

<script>
import {store} from '../store/index'

export default {
    data(){
        return{
            authInput:{
                txtEmail:'',
                txtPassword:''
            },
        }
    },
    computed:{
        user(){
            return store.state.user
        }
    },
    methods:{
        async login(){
            try {
              await store.dispatch('login', { email:this.authInput.txtEmail, password:this.authInput.txtPassword })
              if (this.user!=null){
                this.$router.push('/rate')
                // console.log("успешно")
                 
              }
            }catch(error){
            //   console.log(error.code)
            //   console.log('ошибочно')


              this.$message({
                message: 'Неверный логин или пароль!',
                type: 'warning'
              });
            }
          },
    }

}
</script>

<style>