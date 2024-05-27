<template>
  <div class="shedule-container">
    
    <div class="table_shedule">
      <h1>Расписание</h1>
      <el-table :data="shedule">
        <el-table-column prop="lesson" label="Урок" />
        <el-table-column prop="date" label="Дата на понедельник" />
        <el-table-column prop="monday" label="Понедельник" />
        <el-table-column prop="tuesday" label="Вторник" />
        <el-table-column prop="wednesday" label="Среда" />
        <el-table-column prop="thursday" label="Четверг" />
        <el-table-column prop="friday" label="Пятница" />
      </el-table>
      <div class="btn-clearShedule">
        <el-button type="danger" @click="clearShedule()">
          Очистить расписание
        </el-button>
       
      </div>
    </div>
    


    
    <div class="formAddShedule" >
      <div class="form-container">
      <h2>Новое расписание</h2>
      <div class="form-row">
        <div class="input-group">
          <label for="lesson">Урок:</label>
          <select id="lesson" v-model="selectedLesson">
            <option v-for="(lesson, key) in lessons" :key="key" :value="lesson">{{ lesson }}</option>
          </select>
        </div>
      </div>
      <div class="form-row">
        <div class="input-group">
          <label for="date">Дата:</label>
          <input class="input_sdedule" type="date" id="date" v-model="date" />
        </div>
      </div>
      <div class="form-row">
        <div class="input-group">
          <label for="monday">Понедельник:</label>
          <input class="input_sdedule" type="text" id="monday" v-model="monday" />
        </div>
        <div class="input-group">
          <label for="tuesday">Вторник:</label>
          <input class="input_sdedule" type="text" id="tuesday" v-model="tuesday" />
        </div>
        <div class="input-group">
          <label for="wednesday">Среда:</label>
          <input class="input_sdedule" type="text" id="wednesday" v-model="wednesday" />
        </div>
        <div class="input-group">
          <label for="thursday">Четверг:</label>
          <input class="input_sdedule" type="text" id="thursday" v-model="thursday" />
        </div>
        <div class="input-group">
          <label for="friday">Пятница:</label>
          <input class="input_sdedule" type="text" id="friday" v-model="friday" />
        </div>
      </div>
      <div class="form-row">
        <el-button type="success" @click="onSubmit">Добавить</el-button>
        
        <!-- <button type="submit" @click="onSubmit">Отправить</button> -->
      </div>
      </div>
    </div>

    
  </div>
</template>

<script>

import {mapState} from "vuex"
  export default {
    data(){
      
      return{
        
        lessons: ["Урок 1", "Урок 2", "Урок 3", "Урок 4", "Урок 5"],
        selectedLesson: null,
        date: null,
        monday: "",
        tuesday: "",
        wednesday: "",
        thursday: "",
        friday: ""
      }
    },
    
    computed:{
      ...mapState(['shedule'])
    },
    // created() {
    //   this.$store.dispatch('fetchShedule')
    // },

    methods:{
      async onSubmit() {
        const sheduleData = {
          lesson: this.selectedLesson,
          date: this.date,
          monday: this.monday,
          tuesday: this.tuesday,
          wednesday: this.wednesday,
          thursday: this.thursday,
          friday: this.friday
        }
        await this.$store.dispatch('addShedule', sheduleData)
        console.log('успешно')
        this.clearForm()
      },
      async clearShedule() {
        this.$confirm('Вы действительно хотите очистить расписание?', 'Удаление', {
          confirmButtonText: 'Да',
          cancelButtonText: 'Нет',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: 'Устройство удалено из списка'
          });
          this.$store.dispatch('clearShedule')
          // this.delete(imei);
        }).catch(() => {
          this.$message({
            type: 'info',
            message: 'Отменено'
          });          
        });




        
      }
    }
  }
</script>

<style>

.table_shedule{
  background-color: #fff;
  width: 79vw;
  margin: 20px;
  padding: 10px;
}
  .shedule-container {
    padding: 10px;
    /* Установите желаемую высоту контейнера */
    overflow-y: auto; /* Включает вертикальный скроллинг */
  }
  .btn-clearShedule{
    margin: 10px;
  }
  .formAddShedule{
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
  display: flex;
  width: 60vw;
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