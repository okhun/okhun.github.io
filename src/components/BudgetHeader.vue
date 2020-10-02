<template>
    <div class="first-picture">
        <div class="label-control">
            <div class="header-background">
                <h1 >Available budget in {{currentMonth()}}</h1>
                <h2>{{availableBudget()}}</h2>
            </div>
            <div class="income-label">
                <label for="income" class="header-label">Incomes</label>
                <label >{{sumOfIncome()}}</label>
            </div>
            <div class="expense-label">
                <label for="expense" class="header-label">Expense</label>
                <label>{{sumOfExpense()}}</label>
            </div>
        </div>
        
    </div>
</template>
<script>
import {mapGetters} from  'vuex';
export default {
    computed:{
        ...mapGetters({
            Incomes:'Incomes',
            Expenses:'Expenses'
        }),
    },
    methods:{
        sumOfIncome(){
            var sum=0;
           
            this.Incomes.forEach(function(cur){
                if(cur.amount===''){
                    sum=0;
                }else{
                    sum=sum+parseInt(cur.amount);
                } 
            });
            return sum;
        },
        sumOfExpense(){
           var sum=0;
            this.Expenses.forEach(function(cur){
                if(cur.amount===''){
                    sum=0;
                }else{
                    sum=sum+parseInt(cur.amount);
                }   
            });
            return sum;  
        },
        availableBudget(){
           var i=this.sumOfIncome();
           var e=this.sumOfExpense();
           return i-e;
        },
        currentMonth(){
            var d = new Date();
            var month = new Array();
            month[0] = "January";
            month[1] = "February";
            month[2] = "March";
            month[3] = "April";
            month[4] = "May";
            month[5] = "June";
            month[6] = "July";
            month[7] = "August";
            month[8] = "September";
            month[9] = "October";
            month[10] = "November";
            month[11] = "December";
            var n = month[d.getMonth()];
            return n;
        }
    }  
}
</script>

<style>
.header-background{
    background: rgba(0, 151, 19, 0.6); 
}
.first-picture{
    background-image:url('../assets/header-background.jpg');
    background-size:cover;
    background-position:center;
    height: 50vh;
    color:aliceblue;
}
.header-label{
    margin-right:90px;
}
.income-label{
    position: absolute;
    transform: translate(-50%, -50%);
    left:50%;
    background: rgba(0, 151, 19, 0.6); 
    margin-top:70px;
    width:300px;
}
.expense-label{
    position: absolute;
    transform: translate(-50%, -50%);
    left:50%;
    background: rgba(240, 54, 30, 0.445); 
    margin-top:110px;
    width:300px;
}

</style>