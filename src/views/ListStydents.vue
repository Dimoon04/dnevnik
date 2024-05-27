<template>
    <div class="list-container">
      <div class="table_rate">
        <h1>Ученики</h1>
        <el-table :data="students">
          <el-table-column prop="fio" label="ФИО" />
          <el-table-column prop="classes" label="Класс"/>
          <el-table-column>
            <template slot-scope="scope">
              <el-button type="danger" size="small" @click="deleteStudent(scope.row)">Удалить</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div class="formAddShedule" >
        <div class="form-container">
        <h2>Новый ученик</h2>
        <div class="form-row">
          <div class="input-group">
            <label for="fio">ФИО:</label>
            <input type="text" id="fio" v-model="newStudent.fio" />
          </div>
          <div class="input-group">
            <label for="fio">Класс</label>
            <input type="text" id="classes" v-model="newStudent.classes" />
          </div>
        </div>
        <div class="form-row">
          <el-button type="success" @click="onSubmit">Добавить</el-button>
        </div>
        </div>
      </div>
    </div>
  </template>
  <script>
  import { store } from '../store/index'
  export default {
    name: 'App',
    data() {
      return {
        newStudent: {
          fio: '',
          classes: '',
          monday: null,
          tuesday: null,
          wednesday: null,
          thursday: null,
          friday: null
        }
      }
    },
    computed:{
      students(){
        return store.state.students
      }
    },
    methods: {
      onSubmit() {
          const studentData = {
            fio: this.newStudent.fio,
            classes: this.newStudent.classes,
            monday: this.newStudent.monday,
            tuesday: this.newStudent.tuesday,
            wednesday: this.newStudent.wednesday,
            thursday: this.newStudent.thursday,
            friday: this.newStudent.friday
          }
          this.$store.dispatch('addStudent', studentData)
          
          
        },
        deleteStudent(scope){
          store.dispatch('delStudent', scope.id)
        }
    }
  }
  </script>
  <style>
  .table_rate{
    background-color: #fff;
    width: 79vw;
    margin: 20px;
    padding: 10px;
  }
  
  
  
  
  
    .list-container {
      padding: 10px;
      height: 100vh; /* Установите желаемую высоту контейнера */
      overflow-y: auto; /* Включает вертикальный скроллинг */
    }
    .btn-clearShedule{
      margin: 10px;
    }
    .formAddShedule{
      margin: 20px; 
    }
    #fio{
      width: 100%
    }
  
  
  
    .form-container {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      background-color: #fff;
      padding: 20px;
    }
  
  .form-row {
    display: flex;
    width: 80vw;
    align-items: center;
    gap: 1rem;
  }
  
  .input-group {
    display: flex;
    
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
  input,
  select {
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 1rem;
    
  }
  
  @media (max-width>768px) {
    
  input,
  select {
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 1rem;
    width: 14vw;
  }
  }
  
    input,
  select {
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 1rem;
  }
  
    .input-group {
      width: 100%;
    }
  
  </style>