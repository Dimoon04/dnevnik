<template>
    <div class="table_rate_students">
        <h1>Для учеников</h1>
        <div class="tables">
            <h2>Расписание</h2>
            <el-table :data="shedule">
                <el-table-column prop="lesson" label="Урок" />
                <!-- <el-table-column prop="date" label="Дата на понедельник" /> -->
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
        <div class="tables">
            <h2>Домашние задания</h2>
            <div class="table_homework">
            <el-table :data="sortedHomework">
                <el-table-column prop="date" label="Дата" :formatter="formatDate" />
                <el-table-column prop="them" label="Тема" />
                <el-table-column prop="task" label="Задание"  width="160"/>
                <el-table-column prop="deadline" label="Дата проверки" :formatter="formatDate" />
            </el-table>
            </div>
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
        sortedHomework() {
        return [...store.state.homework].sort((a, b) => {
            return a.date.seconds - b.date.seconds;
        });
        },
        students(){
            return store.state.students
        },
        shedule(){
        return store.state.shedule.sort((a, b) => {
          if (a.lesson < b.lesson) return -1;
          if (a.lesson > b.lesson) return 1;
          return 0;
        });
      }
        
    },
    methods:{
        formatDate(row, column, cellValue) {
            const date = new Date(cellValue.seconds * 1000); // Convert seconds to milliseconds
            return `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear().toString().slice(-2)}`;
        }
    }
}
</script>

<style>
.table_rate_students{
  height: 100vh;
  overflow-y: auto;
  width: 100%;
  padding: 20px;
  padding-bottom: 10vh;}
.tables{
    background-color: #fff;
    margin-top: 20px;
    margin-bottom: 20px;
}
.table_homework{
  background-color: #fff;
  
  margin: 20px;
  padding: 10px;
}
</style>