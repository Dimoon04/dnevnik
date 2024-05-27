<template>
    <div ref="myDiv">
        <div class="header">

            <el-row :gutter="24" class="rows">
                <el-col :xs="3" :sm="4" :md="5" :lg="4" :xl="1" style="margin: 0; padding: 0; height: 100%">
                <div class="bg-purple" style="height: 100%;">
                    <div class="side-nav" v-if="!userCondition">
                        <div class="user">
                            <i class="el-icon-user "></i>
                            <div>
                                <span class="hidden-xs-only" v-if="!isXsBreakpoint">Вы не авторизованы</span> 
                            </div>
                        </div>
                        <div class="btn-out">
                            <ul>
                                <li class="list"><router-link to="/login" class="routeLink"><img src="./images/logout.png" alt=""><span class="hidden-xs-only" v-if="!isXsBreakpoint">Войти</span> </router-link></li>
                            </ul>
                        </div>
                        
                    </div>
                    <div class="side-nav" v-else>
                        <div class="side-nav-vverh">
                            <div class="user">
                                <i class="el-icon-user "></i>
                                <div v-if="!isXsBreakpoint">
                                    <h3>{{userMail}}</h3>
                                    
                                </div>
                            </div>
                            <ul>
                                <li class="list"><router-link to="/rate" class="routeLink">
                                    <img src="./images/dashboard.png">
                                    <span class="hidden-xs-only" v-if="!isXsBreakpoint">Оценки</span> 
                                </router-link></li>
                                <li class="list"><router-link to="/list-students" class="routeLink"><img src="./images/file.png"><span v-if="!isXsBreakpoint">Ученики</span> </router-link></li>
                                <li class="list"><router-link to="/shedule" class="routeLink"><img src="./images/members.png" ><span v-if="!isXsBreakpoint">Расписание</span> </router-link></li>
                                <li class="list"><router-link to="/homework" class="routeLink"><img src="./images/reports.png"><span v-if="!isXsBreakpoint">Домашние задания</span></router-link></li>
                            </ul>
                        </div>
                        <div class="btn-out">
                            <ul>
                                <li class="list"><button class="btn-out routeLink" @click="signout()"> <img src="./images/logout.png" alt=""><b v-if="!isXsBreakpoint">Выйти</b></button></li>
                            </ul>
                        </div>
                    </div>
                    
                </div>
                </el-col>
                <el-col :xs="21" :sm="20" :md="19" :lg="20" :xl="1" style="margin: 0; padding: 0;">
                    <div class="bottom-ui">
                        <router-view></router-view>
                        <BottomView/>  
                    </div>  
                </el-col>
            </el-row>           
        </div>
    </div>   
</template>
<script>
import BottomView from '../components/BottomView.vue'
import {store} from '../store/index'

export default {
    data(){
        return{
            myDivWidth:0
        }
    },
    components:{
      BottomView  
    },
    mounted() {
        this.myDivWidth = this.$refs.myDiv.clientWidth;
    },
    computed:{
        
        isXsBreakpoint() {
            return this.myDivWidth < 767; // adjust the breakpoint value according to your needs
        },
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
    color: #2c3e50;
}
.bottom-ui{
    height: 100vh; /* Установите желаемую высоту контейнера */
    overflow-y: auto;
}
.rows{
    height: 100%;
}

.header{
	width: 100%;
	height: 100vh;
	background-image: url(images/background.png);
	z-index: -1;
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-size: cover;
	background-position: center;
	

}
.side-nav{
    height: 100%;
   
    font-size: 2vmax;

	top: 0;
	left: 0;
	padding: 30px 15px;
	background: rgba(255, 255, 255, 0.2);
	backdrop-filter: blur(5px);
    display: flex;
  flex-direction: column;
  justify-content: space-between;

    
}
.side-nav-vverh{
    height: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.user{
	display: flex;
	align-items: center;
    

	width: 100%;
	font-size: 1vmax;
	padding-left: 2vmin;
	
	
}
.el-icon-user{
    font-size: 3vmax;
    
}

.list{
    padding: 10px;
}
.routeLink{
    font-size: 1.2vmax;
    text-decoration: none;
    display: flex;
    align-items: center
    
}
.routeLink img {
 width: 2.5vmax;
}

.btn-out{
    border: none; /* remove border */
    padding: 0; /* remove padding */
    background: none;
    font-size: 1.3vmax;
    
}
.btn-out:hover{
    cursor: pointer;
}



</style>