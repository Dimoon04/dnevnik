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
                console.log("успешно")
                // messege 
              }
            }catch(error){
              console.log(error.code)
              console.log('ошибочно')
            //   this.$message({
            //     message: 'Неверный логин или пароль!',
            //     type: 'warning'
            //   });
            }
          },
    }

}
</script>

<style>
/* .wrapper h1 {
	font-size: 36px;
	text-align: center;
}

.wrapper .input-box {
	position: relative;
	width: 100%;
	height: 50px;	
	margin: 30px 0;
}

.input-box input {
	width: 100%;
	height: 100%;
	background: transparent;
	border: none;
	outline: none;
	border: 2px solid rgba(255, 255, 255, 2);
	border-radius: 40px;
	font-size: 16px;
	color: #fff;
	padding: 20px 45px 20px 20px;	
}

.input-box input::placeholder {
	color: #fff;
}

.input-box i {
	position: absolute;
	right: 20px;
	top: 50%;
	transform: translateY(-50%);
	font-size: 20px;
}

.wrapper .remember-forgot {
	display: flex;
	justify-content: space-between;
	font-size: 14.5px;
	margin: -15px 0 15px;
}

.remember-forgot label input {
	accent-color: #fff;
	margin-right: 3px;
}

.remember-forgot a {
	color: #fff;
	text-decoration: none;
}

.remember-forgot a:hover {
	text-decoration: underline;
}

.wrapper .btn {
	width: 100%;
	height: 45px;
	background: #fff;
	border-radius: 40px;
	box-shadow: 0 0 10px rgba(0, 0, 0, .1);
	cursor: pointer;
	font-size: 16px;
	color: #333;
	font-weight: 600;
}

.wrapper .register-link {
	font-size: 14.5px;
	text-align: center;
	margin: 20px 0 15px;
}

.register-link p a {
	color: #fff;
	text-decoration: none;
	font-weight: 600;
}

.register-link p a:hover{
	text-decoration: underline;
} */
</style>