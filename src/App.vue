<template>
 <div>
   <div class="inp">
     <input type="text" v-model="person.name" placeholder="ismingizni kiriting">
     <input type="number" v-model="person.age">
     <br>
     <br>
     <label for="">erkak</label>
     <input type="radio" v-model="person.gender" value="1" name="gender">
     
     <label for="">ayol</label>
     <input type="radio" v-model="person.gender" value="0" name="gender">
     <br>
     <br>
     <button @click="add()">qo'shish</button>
   </div>
   <h2>barcha odamlar {{all_persons}}</h2>
   <h2>barcha erkaklar {{all_men}}</h2>
   <h2>barcha ayollar {{all_women}}</h2>
<ul>
  <li v-for="(person,index) of persons" :key="index">{{person.name}} || {{person.age}} || {{person.gender}}
  </li>
</ul>
 </div>
</template>

<script>



export default {
  name: 'App',
  data(){
    return{
      person:{}
    }
  },
  methods:{
add(){
  this.$store.dispatch('addPersons',this.person)
  this.person ={}
}
  },
  computed:{
    persons(){
      return this.$store.getters.getPersons
    },
    all_persons(){
      return this.$store.getters.allPerson
    },
    all_men(){
      return this.$store.getters.getMen
    },
    all_women(){
      return this.$store.getters.getWomen
    }

  },
  created(){
    this.$store.dispatch('getAllPersons')
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
