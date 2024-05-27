<template>
    <div class="table_rate_students">
        <h1>Страница для учеников</h1>
        <div class="tables">
            <h2>Расписание</h2>
            <el-table :data="shedule">
                <el-table-column prop="lesson" label="Урок" />
                <el-table-column prop="date" label="Дата на понедельник" />
                <el-table-column prop="monday" label="Понедельник" />
                <el-table-column prop="tuesday" label="Вторник" />
                <el-table-column prop="wednesday" label="Среда" />
                <el-table-column prop="thursday" label="Четверг" />
                <el-table-column prop="friday" label="Пятница" />
            </el-table>
        </div> 
        <div class="tables">
            <h2>Оценки</h2>
            <el-table :data="students">
                <el-table-column prop="fio" label="ФИО" />
                <el-table-column prop="classes" label="Класс"/>
                <el-table-column prop="monday" label="Понедельник"/>
                <el-table-column prop="tuesday" label="Вторник"/>
                <el-table-column prop="wednesday" label="Среда"/>
                <el-table-column prop="thursday" label="Четверг"/>
                <el-table-column prop="friday" label="Пятница"/>
            </el-table>
        </div>
        
    </div>
</template>

<script >
import {store} from '../store/index.js'

export default{
    data(){
        return{

        }
    },
    
    computed:{
        students(){
            return store.state.students
        },
        shedule(){
            return store.state.shedule
        }
    }
}
</script>

<style>
.table_rate_students{
  
  width: 80vw;
  margin: 20px;
  padding: 10px;
}
.tables{
    background-color: #fff;
    margin-top: 20px;
}
</style>