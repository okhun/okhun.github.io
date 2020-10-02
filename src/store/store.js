import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state:{
        Incomes:[
            {description:'', amount:''},
          
          ],
        Expenses:[
            {description:'',amount:''}
          ] 
    },
    getters:{
        Incomes: state=>{
            var Incomes=state.Incomes.map(Income=>{
                return{
                    description: Income.description,
                    amount:Income.amount
                }
            });
            return Incomes;
        },
        Expenses: state=>{
            var Expenses=state.Expenses.map(Expense=>{
                return{
                    description: Expense.description,
                    amount:Expense.amount
                }
            });
            return Expenses;
        },
        SumIncome: state=>{
            var SumIncome=state.Incomes.map(income=>{
                return{
                    amount:income.amount
                }
            })
            return SumIncome;
        }

    },
    mutations:{
        addIncomeToList: (state,{d,a})=>{  
            state.Incomes.push({description: d,amount:a});
        },
        addExpenseToList:(state, {d,a})=>{
            state.Expenses.push({description: d,amount:a});
        },
        removeIncome:(state,e)=>{
            state.Incomes.splice(e, 1);
        },
        removeExpense:(state,e)=>{
            state.Expenses.splice(e,1);
        },
        amountIncome:(state)=>{
            state.Incomes.forEach(income=>{
                var sumIncome;
                sumIncome=+parseInt(income);
                return sumIncome;
            })
        }
    },
    actions:{
        addIncomeToList:(context, {d,a})=>{
            context.commit('addIncomeToList',{d,a});
        },
        addExpenseToList:(context,{d,a})=>{
            context.commit('addExpenseToList',{d,a});
        },
        removeIncome:(context,e)=>{
            context.commit('removeIncome',e);
        },
        removeExpense:(context,e)=>{
            context.commit('removeExpense',e);
        },
        amountIncome:(context)=>{
            context.commit('amountIncome');
        }
    }
})