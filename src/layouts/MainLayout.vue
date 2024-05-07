<template>
    <div>
        <div class="header">
            <div class="side-nav" v-if="!userCondition">
                <ul>
                    <li>
                        <router-link to="/login" class="routeLink">Войти</router-link>
                    </li>
                </ul>
            </div>
            <div class="side-nav" v-else>
                <div class="user">
                    <i class="el-icon-user "></i>
                    <div>
                        <h2>Thomas Daniel</h2>
                        <p>{{userMail}}</p> <!--email {{  }}-->
                    </div>
                    
                </div>
                <ul >
                    <li><img src="./images/dashboard.png"><router-link to="/rate" class="routeLink">Оценки</router-link></li>
                    <li><img src="./images/members.png"><router-link to="/shedule" class="routeLink">Расписание</router-link></li>
                    <li><img src="./images/reports.png"><router-link to="/homework" class="routeLink">Домашние задания</router-link></li>
                </ul>
                <div class="btn-out">
                    <el-button type="primary" plain  @click="signout()">выйти</el-button>
                </div>
            </div>
            <div class='main'>
            <router-view></router-view>
        </div>
        </div>
    </div>   
</template>
<script>
import {store} from '../store/index'
export default {
    
    // data:()=>({
    //     email:"",
    // }),
    computed:{
        userMail(){
            return store.state.user && store.state.user.email;
        },
        userCondition(){
            return store.state.user
        }
    },
    methods:{
        signout(){
            store.dispatch('signout')
            this.$router.push('/')
        },
    },
    
    
}
</script>
<style>
*{
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	font-family: 'Poppins', sans-serif;
}
.router_Links{
    margin-top: 20%;
}
.routeLink{
    text-decoration: none;
    color: black;
}

.header{
	width: 100%;
	height: 100vh;
	background-image: url(images/background.png);
	background-position: center;
	background-size: cover;

}
.el-icon-user{
    font-size: 40px;
}
.side-nav{
	width: 250px;
	height: 100%;
	position: fixed;
	top: 0;
	left: 0;
	padding: 30px 15px;
	background: rgba(255, 255, 255, 0.2);
	backdrop-filter: blur(5px);
}
.user{
	display: flex;
	align-items: center;	
	justify-content: space-between;
	width: 100%;
	font-size: 12px;
	padding: 10px;
	border-radius: 8px;
	margin-left: auto;
	margin-right: auto;
}
.user h2{
	font-size: 15px;
	font-weight: 600;
	white-space: nowrap;
}
.user-img{
	width: 40px;
	border-radius: 50%;
	margin: auto;
}
.star-img{
	width: 20px;
}
ul{
    list-style: none;
    padding:0 15px;
}
ul li{
    margin: 30px 0;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    cursor: pointer;
}

ul li img{
	width: 30px;
	margin-right: 10px;

}
ul li p{
	white-space: nowrap;
}
</style>