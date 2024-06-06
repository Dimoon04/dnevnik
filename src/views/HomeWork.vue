<template>
  <div class="homework-container">
    <h1>Домашние задания</h1>
    
    <div class="table_homework">
      <el-table :data="homework">
        <el-table-column prop="date" label="Дата" :formatter="formatDate" />
        <el-table-column prop="them" label="Тема" />
        <el-table-column prop="task" label="Задание" />
        <el-table-column prop="deadline" label="Дата проверки" :formatter="formatDate" />
      </el-table>
    </div>
    <div class="formHhomework">
      <h3>Добавить домашнее задание</h3>
      <div class="form-row">
        <div class="input-group">
          <label for="date">Дата</label>
          <el-date-picker
            v-model="addHomeWork.date"
            type="date"
            placeholder="гггг.мм.дд"
            :first-day-of-week="2">
          </el-date-picker>
        </div>
      </div>
      <div class="form-row">
        <div class="input-group">
          <label for="them">Тема</label>
          <input type="text" id="wednesday" v-model="addHomeWork.them" />
        </div>
        <div class="input-group">
          <label for="task">Задание</label>
          <input type="text" id="wednesday" v-model="addHomeWork.task" />
        </div>
      </div>
      <div class="form-row">
        <div class="input-group">
          <label for="task">Дата проверки</label>
          <el-date-picker
          
            v-model="addHomeWork.deadline"
            type="date"
            placeholder="гггг.мм.дд"
            :first-day-of-week="2">
          </el-date-picker>
        </div>
      </div>
      
      <div class="input-group">
        <el-button type="success" @click="onSubmit()">Добавить</el-button>
      </div>
    </div>
  </div>
</template>
<script>
import {store} from '../store/index.js'
export default {
  data(){
    return{
     homework: store.state.homework,
     addHomeWork: {
        date: null,
        them: '',
        task: '',
        deadline: null,
     },
    }
  },
  computed:{
    
  },
  methods:{
    onSubmit() {
      this.$store.dispatch('addHomeWork', this.addHomeWork)
    this.addHomeWork = {
      date: null,
      them: '',
      task: '',
      deadline: null
    }
  },
    formatDate(row, column, cellValue) {
      const date = new Date(cellValue.seconds * 1000); // Convert seconds to milliseconds
      return `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear().toString().slice(-2)}`;
    }
  }
}
</script>
<style>
.table_homework {
  background-color: #fff;
  width: 79vw;
  margin: 20px;
  padding: 10px;
}

.homework-container {
  height: 100vh;
  overflow-y: auto;
  width: 100%;
  padding-bottom: 10vh;
}

.homework-content {
  padding: 20px 0; /* Добавляет отступы для лучшего отображения */
}

.formHhomework {
  margin: 20px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: #fff;
  padding: 20px;
}

.form-row {
  display: flex;
  width: 60vw;
  align-items: center;
  gap: 1rem;
  flex-direction: row;
}

.input-group {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
}

input,
select {
  width: 20vmax;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
}

@media (max-width: 768px) {
  .form-row {
    flex-direction: column;
    align-items: flex-start;
  }
  input,
  select {
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 1rem;
    width: 100%; /* Установите ширину на 100% для мобильных устройств */
  }
}
</style>
