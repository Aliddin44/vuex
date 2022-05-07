import { createStore } from 'vuex'
import axios from 'axios'
const store = createStore({

    state:{
        persons:[]
    },
    actions:{
        addPersons(context,payload){
            axios.post('http://localhost:3000/persons',payload).then(res=>{
                context.commit('newPerson',res.data)
                
            })
        },
        getAllPersons(context){
            axios.get('http://localhost:3000/persons').then(res=>{
                context.commit('getPerson',res.data)
            })
        }
    },
    mutations:{
        newPerson(state,payload){
            state.persons.push(payload)
        },
        getPerson(state,payload){
            state.persons = payload
        }
    },
    getters:{
        getPersons(state){
           return state.persons
        },
        allPerson(state){
        return state.persons.length
        },
        getMen(state){
            const men = state.persons.filter(per =>{
                return per.gender == 1
            })
            return men.length
        },
        getWomen(state){
            const women = state.persons.filter(per =>{
                return per.gender == 0
            })
            return women.length
        }
    }
})
export default store