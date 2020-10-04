<template>
<div>
    <div class="row">
        <div class="Income-list col" v-if="check">
            <h2>Incomes</h2>
          <ul >
              <li class="Inter-income-list >" v-for="(Income, index) in Incomes " 
                  :key='index'><p class="p-description" >{{Income.description}}
                      </p><p class="p-amount">{{Income.amount}} <b-icon-x-circle-fill v-on:click="removeItemFromIncomeList(index)" >
                          </b-icon-x-circle-fill></p></li>    
          </ul>
        </div>
        <div class="Expenses-list col" v-if="check">
            <h2>Expenses</h2>
            <ul>
              <li class="Inter-expense-list >" v-for="(Expense, index) in Expenses" 
                  :key='index'><p class="p-description">{{Expense.description}}
                      </p><p class="p-amount">{{Expense.amount}}<b-icon-x-circle-fill v-on:click="removeItemFromExpenseList(index)" ></b-icon-x-circle-fill></p></li>
          </ul>
        </div>
    </div>
</div>  
</template>
<script>
import {mapActions} from 'vuex';
import {mapGetters} from  'vuex';
export default {
    computed:{
        ...mapGetters([
            'Incomes',
            'Expenses',
        ]), 
    },
    props:['selected','description','amount'],
    data(){
        return{
            check:false
        }
        
    },
methods:{
    ...mapActions({
        in:'addIncomeToList',
        ex:'addExpenseToList',
        remI:'removeIncome',
        remE:'removeExpense'
    }),
        addItemToList(){
            if((this.selected===null||this.description===null||this.amount===null)||(this.selected===""||this.description===""||this.amount==="")){
                alert("Fill out all fields");
                console.log(this.description);
                console.log(this.Incomes);
            }else{
                this.check=true;
                var d=this.description;
                var a=this.amount;
                if(this.selected==='inc'){
                    this.in({d,a});
                }else{  
                    this.ex({d,a});   
                }
            }   
           },
           removeItemFromIncomeList(e){
               this.remI(e);
            },
            removeItemFromExpenseList(e){
                this.remE(e);  
            }
        }
}   
</script>
<style>
.Income-list{
        margin-top:80px;
    }
    .Expenses-list{
        margin-top:80px;
    }
.Inter-income-list{
        color: white;
        border-radius: 5px;
        width:90%;
        background: rgba(0, 151, 19, 0.6); 
        list-style-type: none;
    }
    .Inter-expense-list{
        color: white;
        border-radius: 5px;
        width:90%;
        background: rgba(240, 54, 30, 0.445);
        list-style-type: none;
    }     
</style>