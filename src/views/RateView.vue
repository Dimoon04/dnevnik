<template>
  <div class="rate_view">
    <div class="table_rate">
      <h1>Оценки</h1>
      <el-table :data="students">
        <el-table-column prop="fio" label="ФИО" />
        <el-table-column prop="classes" label="Класс"/>
        <el-table-column prop="monday" label="Понедельник"/>
        <el-table-column prop="tuesday" label="Вторник"/>
        <el-table-column prop="wednesday" label="Среда"/>
        <el-table-column prop="thursday" label="Четверг"/>
        <el-table-column prop="friday" label="Пятница"/>
        <el-table-column>
          <template slot-scope="scope">
            <el-button type="wrong" size="small" @click="redackStudent(scope.row)">Исправить</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="formAddShedule" >
      <div class="form-container">
      <h2>Исправление оценки</h2>
      <div class="form-row">
        <div class="input-group">
          <label for="fio">ФИО:</label>
          <!-- <input type="text" id="fio_read" v-model="newStudent.fio" /> -->
          {{ newStudent.fio }}
        </div>
      </div>
      <div class="form-row">
        <div class="input-group">
          <label for="monday">Понедельник:</label>
          <!-- <input min="1" max="5" id="monday" v-model.number="newStudent.monday"></div> -->
          <el-input v-model.number="newStudent.monday" type="number" min="2" max="5"></el-input>
        </div>
        <div class="input-group">
          <label for="tuesday">Вторник:</label>
          <!-- <input min="1" max="5" id="tuesday" v-model.number="newStudent.tuesday"></div> -->
          <el-input v-model.number="newStudent.tuesday" type="number" min="2" max="5"></el-input>
        </div>
        <div class="input-group">
          <label for="wednesday">Среда:</label>
          <!-- <input min="1" max="5" id="wednesday" v-model.number="newStudent.wednesday"></div> -->
          <el-input v-model.number="newStudent.wednesday" type="number" min="2" max="5"></el-input>
        </div>
        <div class="input-group">
          <label for="thursday">Четверг:</label>
          <!-- <el-input min="1" max="5" id="thursday" v-model.number="newStudent.thursday"></el-input> -->
          <el-input v-model.number="newStudent.thursday" type="number" min="2" max="5"></el-input>
        </div>
        <div class="input-group">
          <label for="friday">Пятница:</label>
          <!-- <input min="1" max="5"  id="friday" v-model.number="newStudent.friday" /> -->
          <el-input v-model.number="newStudent.friday" type="number" min="2" max="5"></el-input>
        </div>
      </div>
      <div class="form-row">
        <el-button type="success" @click="saveRate()">Сохранить</el-button>
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
        monday: '',
        tuesday: '',
        wednesday: '',
        thursday: '',
        friday: ''
      },
      selectedStudent: null
      }
  },
  computed:{
    
    students(){
      return store.state.students
    }
  },
  methods: {
    redackStudent(student) {
      this.newStudent = { // копируем данные выбранного студента в newStudent
        fio: student.fio,
        monday: student.monday,
        tuesday: student.tuesday,
        wednesday: student.wednesday,
        thursday: student.thursday,
        friday: student.friday
      };
      this.selectedStudent = student; // сохраняем выбранного студента
    },
    saveRate() {
      
      // здесь вы можете сохранить изменения, сделанные в форме
      // для выбранного студента
      this.selectedStudent.monday = this.newStudent.monday;
      this.selectedStudent.tuesday = this.newStudent.tuesday;
      this.selectedStudent.wednesday = this.newStudent.wednesday;
      this.selectedStudent.thursday = this.newStudent.thursday;
      this.selectedStudent.friday = this.newStudent.friday;
      store.dispatch("updateStudent", { id: this.selectedStudent.id, doc:{ ...this.selectedStudent    } });
      console.log("update", this.selectedStudent.id)
      this.selectedStudent = null; // сбрасываем выбранного студента
    }
    
  }
}
</script>
<style>
.rate_view {
  height: 100vh;
  overflow-y: auto;
  width: 100%;
  padding-bottom: 10vh;
}

.table_rate {
  background-color: #fff;
  width: 79vw;
  margin: 20px;
  padding: 10px;
}

.formAddShedule {
  margin: 20px;
}

.form-container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: #fff;
  padding: 20px;
}

.form-row {
  
  width: 60vw;
  align-items: center;
  display: flex;
  flex-direction: row;
  gap: 1rem;
}

.input-group {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
}

input,
select {
  width: 80%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
}

@media (max-width: 768px) {
  .form-row {
    flex-direction: column;
  }
  .input-group {
    align-items: flex-start;
    width: 80%;
  }
  input,
  select {
    width: 100%;
  }
}

</style>