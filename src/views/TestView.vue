<template>
    <div class="">
        <h1>eafwdfsw test</h1>

      <el-row>
        <el-col :span="3" style="height: 40px;" class="w3-border">
            Номер урока
        </el-col>   
        <el-col :span="3" style="height: 40px;" class="w3-border">
            ПН
        </el-col>   
        <el-col :span="3" style="height: 40px;" class="w3-border">
            ВТ
        </el-col>   
        <el-col :span="3" style="height: 40px;" class="w3-border">
            СР
        </el-col>   
        <el-col :span="3" style="height: 40px;" class="w3-border">
            ЧТ
        </el-col>   
        <el-col :span="3" style="height: 40px;" class="w3-border">
            ПТ
        </el-col>   
        <el-col :span="3" style="height: 40px;" class="w3-border">
            СБ
        </el-col>   
      </el-row>
      <el-row>
        <el-col :span="3" style="height: 40px;" class="w3-border">
            1
        </el-col>   
        <el-col :span="3" style="height: 40px;" class="w3-border">
            <span v-for="t in Test" :key="t.id">
              <span v-if="t.dn=='ПН' && t.num==1">{{ t.class }} <br></span>
              <span v-if="t.dn=='ПН' && t.num==1">{{ t.kab }} <br></span>
            </span>
        </el-col>   
        <el-col :span="3" style="height: 40px;" class="w3-border">
            ВТ
        </el-col>   
        <el-col :span="3" style="height: 40px;" class="w3-border">
            СР
        </el-col>   
        <el-col :span="3" style="height: 40px;" class="w3-border">
            ЧТ
        </el-col>   
        <el-col :span="3" style="height: 40px;" class="w3-border">
            ПТ
        </el-col>   
        <el-col :span="3" style="height: 40px;" class="w3-border">
            СБ
        </el-col>   
      </el-row>
      <el-row>
        <el-col :span="3" style="height: 40px;" class="w3-border">
            2
        </el-col>   
        <el-col :span="3" style="height: 40px;" class="w3-border">
           
        </el-col>   
        <el-col :span="3" style="height: 40px;" class="w3-border">
            <span v-for="t in Test" :key="t.id">
              <span v-if="t.dn=='ВТ' && t.num==2">{{ t.class }} <br></span>
              <span v-if="t.dn=='ВТ' && t.num==2">{{ t.kab }} <br></span>
            </span>
        </el-col>   
        <el-col :span="3" style="height: 40px;" class="w3-border">
            СР
        </el-col>   
        <el-col :span="3" style="height: 40px;" class="w3-border">
            ЧТ
        </el-col>   
        <el-col :span="3" style="height: 40px;" class="w3-border">
            ПТ
        </el-col>   
        <el-col :span="3" style="height: 40px;" class="w3-border">
            СБ
        </el-col>   
      </el-row>
      <el-row>
        <el-col :span="3" style="height: 40px;" class="w3-border">
            3
        </el-col>   
        <el-col :span="3" style="height: 40px;" class="w3-border">
           
        </el-col>   
        <el-col :span="3" style="height: 40px;" class="w3-border">
            <span v-for="t in Test" :key="t.id">
              <span v-if="t.dn=='ВТ' && t.num==2">{{ t.class }} <br></span>
              <span v-if="t.dn=='ВТ' && t.num==2">{{ t.kab }} <br></span>
            </span>
        </el-col>   
        <el-col :span="3" style="height: 40px;" class="w3-border">
            СР
        </el-col>   
        <el-col :span="3" style="height: 40px;" class="w3-border">
            ЧТ
        </el-col>   
        <el-col :span="3" style="height: 40px;" class="w3-border">
            ПТ
        </el-col>   
        <el-col :span="3" style="height: 40px;" class="w3-border">
            СБ
        </el-col>   
      </el-row>
      <el-row>
        <el-col :span="3" style="height: 40px;" class="w3-border">
            4
        </el-col>   
        <el-col :span="3" style="height: 40px;" class="w3-border">
           
        </el-col>   
        <el-col :span="3" style="height: 40px;" class="w3-border">
            <span v-for="t in Test" :key="t.id">
              <span v-if="t.dn=='ВТ' && t.num==2">{{ t.class }} <br></span>
              <span v-if="t.dn=='ВТ' && t.num==2">{{ t.kab }} <br></span>
            </span>
        </el-col>   
        <el-col :span="3" style="height: 40px;" class="w3-border">
            СР
        </el-col>   
        <el-col :span="3" style="height: 40px;" class="w3-border">
            ЧТ
        </el-col>   
        <el-col :span="3" style="height: 40px;" class="w3-border">
            ПТ
        </el-col>   
        <el-col :span="3" style="height: 40px;" class="w3-border">
            СБ
        </el-col>   
      </el-row>
      <el-row>
        <el-col :span="3" style="height: 40px;" class="w3-border">
            5
        </el-col>   
        <el-col :span="3" style="height: 40px;" class="w3-border">
           
        </el-col>   
        <el-col :span="3" style="height: 40px;" class="w3-border">
            <span v-for="t in Test" :key="t.id">
              <span v-if="t.dn=='ВТ' && t.num==2">{{ t.class }} <br></span>
              <span v-if="t.dn=='ВТ' && t.num==2">{{ t.kab }} <br></span>
            </span>
        </el-col>   
        <el-col :span="3" style="height: 40px;" class="w3-border">
            СР
        </el-col>   
        <el-col :span="3" style="height: 40px;" class="w3-border">
            ЧТ
        </el-col>   
        <el-col :span="3" style="height: 40px;" class="w3-border">
            ПТ
        </el-col>   
        <el-col :span="3" style="height: 40px;" class="w3-border">
            СБ
        </el-col>   
      </el-row>
<el-divider></el-divider>

<el-row>
        <el-col :span="3"  style="height: 40px;" class="w3-border">
            Номер урока
        </el-col>   
        <el-col :span="3" style="height: 40px;" class="w3-border">
            ПН
        </el-col>   
        <el-col :span="3" style="height: 40px;" class="w3-border">
            ВТ
        </el-col>   
        <el-col :span="3" style="height: 40px;" class="w3-border">
            СР
        </el-col>   
        <el-col :span="3" style="height: 40px;" class="w3-border">
            ЧТ
        </el-col>   
        <el-col :span="3" style="height: 40px;" class="w3-border">
            ПТ
        </el-col>   
        <el-col :span="3" style="height: 40px;" class="w3-border">
            СБ
        </el-col>   
    </el-row>
    <el-row style="height: 60px;">
        <el-col :span="3"  class="w3-border">
            1
        </el-col>   
        <el-col :span="3"  class="w3-border">
            <el-select v-model="sel1" size="mini">
                <el-option value="5 a">5 а</el-option>
                <el-option value="6 a">5 б</el-option>
                <el-option value="8 a">8 б</el-option>
            </el-select>
            <el-select v-model="kab1" size="mini">
                <el-option value="200">200</el-option>
                <el-option value="201">201</el-option>
                <el-option value="202">202</el-option>
            </el-select>
        </el-col>   
        <el-col :span="3"  class="w3-border">
            <el-select v-model="sel2" size="mini">
                <el-option value="5 a">5 а</el-option>
                <el-option value="6 a">5 б</el-option>
                <el-option value="8 a">8 б</el-option>
            </el-select>
            <el-select v-model="kab2" size="mini">
                <el-option value="200">200</el-option>
                <el-option value="201">201</el-option>
                <el-option value="202">202</el-option>
            </el-select>
        </el-col>   
        <el-col :span="3"  class="w3-border">
            <el-select v-model="sel3" size="mini">
                <el-option value="5 a">5 а</el-option>
                <el-option value="6 a">5 б</el-option>
                <el-option value="8 a">8 б</el-option>
            </el-select>
            <el-select v-model="kab3" size="mini">
                <el-option value="200">200</el-option>
                <el-option value="201">201</el-option>
                <el-option value="202">202</el-option>
            </el-select>
        </el-col>   
        <el-col :span="3"  class="w3-border">
            <el-select v-model="sel4" size="mini">
                <el-option value="5 a">5 а</el-option>
                <el-option value="6 a">5 б</el-option>
                <el-option value="8 a">8 б</el-option>
            </el-select>
            <el-select v-model="kab4" size="mini">
                <el-option value="200">200</el-option>
                <el-option value="201">201</el-option>
                <el-option value="202">202</el-option>
            </el-select>
        </el-col>   
        <el-col :span="3"  class="w3-border">
            <el-select v-model="sel5" size="mini">
                <el-option value="5 a">5 а</el-option>
                <el-option value="6 a">5 б</el-option>
                <el-option value="8 a">8 б</el-option>
            </el-select>
            <el-select v-model="kab5" size="mini">
                <el-option value="200">200</el-option>
                <el-option value="201">201</el-option>
                <el-option value="202">202</el-option>
            </el-select>
        </el-col>   
        <el-col :span="3"  class="w3-border">
            <el-select v-model="sel6" size="mini">
                <el-option value="5 a">5 а</el-option>
                <el-option value="6 a">5 б</el-option>
                <el-option value="8 a">8 б</el-option>
            </el-select>
            <el-select v-model="kab6" size="mini">
                <el-option value="200">200</el-option>
                <el-option value="201">201</el-option>
                <el-option value="202">202</el-option>
            </el-select>
        </el-col>   
    </el-row>
    <el-row style="height: 60px;">
        <el-col :span="3"  class="w3-border">
            2
        </el-col>   
        <el-col :span="3"  class="w3-border">
            <el-select v-model="sel1" size="mini">
                <el-option value="5 a">5 а</el-option>
                <el-option value="6 a">5 б</el-option>
                <el-option value="8 a">8 б</el-option>
            </el-select>
            <el-select v-model="kab1" size="mini">
                <el-option value="200">200</el-option>
                <el-option value="201">201</el-option>
                <el-option value="202">202</el-option>
            </el-select>
        </el-col>   
        <el-col :span="3"  class="w3-border">
            <el-select v-model="sel2" size="mini">
                <el-option value="5 a">5 а</el-option>
                <el-option value="6 a">5 б</el-option>
                <el-option value="8 a">8 б</el-option>
            </el-select>
            <el-select v-model="kab2" size="mini">
                <el-option value="200">200</el-option>
                <el-option value="201">201</el-option>
                <el-option value="202">202</el-option>
            </el-select>
        </el-col>   
        <el-col :span="3"  class="w3-border">
            <el-select v-model="sel3" size="mini">
                <el-option value="5 a">5 а</el-option>
                <el-option value="6 a">5 б</el-option>
                <el-option value="8 a">8 б</el-option>
            </el-select>
            <el-select v-model="kab3" size="mini">
                <el-option value="200">200</el-option>
                <el-option value="201">201</el-option>
                <el-option value="202">202</el-option>
            </el-select>
        </el-col>   
        <el-col :span="3"  class="w3-border">
            <el-select v-model="sel4" size="mini">
                <el-option value="5 a">5 а</el-option>
                <el-option value="6 a">5 б</el-option>
                <el-option value="8 a">8 б</el-option>
            </el-select>
            <el-select v-model="kab4" size="mini">
                <el-option value="200">200</el-option>
                <el-option value="201">201</el-option>
                <el-option value="202">202</el-option>
            </el-select>
        </el-col>   
        <el-col :span="3"  class="w3-border">
            <el-select v-model="sel5" size="mini">
                <el-option value="5 a">5 а</el-option>
                <el-option value="6 a">5 б</el-option>
                <el-option value="8 a">8 б</el-option>
            </el-select>
            <el-select v-model="kab5" size="mini">
                <el-option value="200">200</el-option>
                <el-option value="201">201</el-option>
                <el-option value="202">202</el-option>
            </el-select>
        </el-col>   
        <el-col :span="3"  class="w3-border">
            <el-select v-model="sel6" size="mini">
                <el-option value="5 a">5 а</el-option>
                <el-option value="6 a">5 б</el-option>
                <el-option value="8 a">8 б</el-option>
            </el-select>
            <el-select v-model="kab6" size="mini">
                <el-option value="200">200</el-option>
                <el-option value="201">201</el-option>
                <el-option value="202">202</el-option>
            </el-select>
        </el-col>   
    </el-row>
      <el-row>
        <el-col :span="3" style="height: 40px;" class="w3-border">
            3
        </el-col>   
        <el-col :span="3" style="height: 40px;" class="w3-border">
           
        </el-col>   
        <el-col :span="3" style="height: 40px;" class="w3-border">
            <span v-for="t in Test" :key="t.id">
              <span v-if="t.dn=='ВТ' && t.num==2">{{ t.class }} <br></span>
              <span v-if="t.dn=='ВТ' && t.num==2">{{ t.kab }} <br></span>
            </span>
        </el-col>   
        <el-col :span="3" style="height: 40px;" class="w3-border">
            СР
        </el-col>   
        <el-col :span="3" style="height: 40px;" class="w3-border">
            ЧТ
        </el-col>   
        <el-col :span="3" style="height: 40px;" class="w3-border">
            ПТ
        </el-col>   
        <el-col :span="3" style="height: 40px;" class="w3-border">
            СБ
        </el-col>   
      </el-row>
      <el-row>
        <el-col :span="3" style="height: 40px;" class="w3-border">
            4
        </el-col>   
        <el-col :span="3" style="height: 40px;" class="w3-border">
           
        </el-col>   
        <el-col :span="3" style="height: 40px;" class="w3-border">
            <span v-for="t in Test" :key="t.id">
              <span v-if="t.dn=='ВТ' && t.num==2">{{ t.class }} <br></span>
              <span v-if="t.dn=='ВТ' && t.num==2">{{ t.kab }} <br></span>
            </span>
        </el-col>   
        <el-col :span="3" style="height: 40px;" class="w3-border">
            СР
        </el-col>   
        <el-col :span="3" style="height: 40px;" class="w3-border">
            ЧТ
        </el-col>   
        <el-col :span="3" style="height: 40px;" class="w3-border">
            ПТ
        </el-col>   
        <el-col :span="3" style="height: 40px;" class="w3-border">
            СБ
        </el-col>   
      </el-row>
      <el-row>
        <el-col :span="3" style="height: 40px;" class="w3-border">
            5
        </el-col>   
        <el-col :span="3" style="height: 40px;" class="w3-border">
           
        </el-col>   
        <el-col :span="3" style="height: 40px;" class="w3-border">
            <span v-for="t in Test" :key="t.id">
              <span v-if="t.dn=='ВТ' && t.num==2">{{ t.class }} <br></span>
              <span v-if="t.dn=='ВТ' && t.num==2">{{ t.kab }} <br></span>
            </span>
        </el-col>   
        <el-col :span="3" style="height: 40px;" class="w3-border">
            СР
        </el-col>   
        <el-col :span="3" style="height: 40px;" class="w3-border">
            ЧТ
        </el-col>   
        <el-col :span="3" style="height: 40px;" class="w3-border">
            ПТ
        </el-col>   
        <el-col :span="3" style="height: 40px;" class="w3-border">
            СБ
        </el-col>   
        <el-button @click="saveShedule()">Сохранить</el-button>
      </el-row>



    </div>
</template>
<script>
import {store} from '../store'
export default{
    data(){
        return{
           sel1:'',
           sel2:'',
           sel3:'',
           sel4:'',
           sel5:'',
           sel6:'',
           kab1:'',
           kab2:'',
           kab3:'',
           kab4:'',
           kab5:'',
           kab6:'',
           
        }
        
    },
   computed:{
      Test(){
        return store.state.test
      }
   },
   methods:{
    fun(dn, num){
        let a = this.Test.filter((n)=> {
          return n.dn == dn && n.num == num
        })
        return a[0]
    },
    saveShedule(){
        let shedule = {
        lesson1: {
          class: this.sel1,
          room: this.kab1,
        },
        lesson2: {
          class: this.sel2,
          room: this.kab2,
        },
        lesson3: {
          class: this.sel3,
          room: this.kab3,
        },
        lesson4: {
          class: this.sel4,
          room: this.kab4,
        },
        lesson5: {
          class: this.sel5,
          room: this.kab5,
        },
        lesson6: {
          class: this.sel6,
          room: this.kab6,
        },
        }
        store.dispatch('saveShedule', shedule)
    }
   }
}


</script>