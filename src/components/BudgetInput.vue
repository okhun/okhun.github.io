<template>
    <div class="input-options">
        <b-form-select v-model="selected" :options="options" class="Select-operation"></b-form-select>
        <b-input
            id="inline-form-input-name"
            class="mb-2 mr-sm-2 mb-sm-0 Select-operation"
            placeholder="Enter the purpose" v-model="description"
            
        ></b-input>
        <b-input type="number" class="mb-2 mr-sm-2 mb-sm-0 Select-operation" v-model="amount" ></b-input>
        <b-icon-check-circle-fill class="btn-input " v-on:click="$refs.c.addItemToList()"></b-icon-check-circle-fill>
        <BudgetResult 
        ref="c"
        v-bind:selected='selected'
        v-bind:description="description"
        v-bind:amount="amount"
        />
    </div>
</template>

<script>
import BudgetResult from './BudgetResult.vue'
  export default {
    computed:{
        Incomes(){
            return this.$store.state.Incomes;
        },
        Expenses(){
            return this.$store.state.Expenses;
        }
    },
   
    components:{
      BudgetResult
    },
    data() {
      return {
        selected: null,
        options: [
          { value: null, text: 'Choose operation' },
          { value: 'inc', text: '+' },
          { value: 'exp', text: '-' }
        ],
        description:null,
        amount:null,
        
      }
    },
    methods:{
      addItems: function(type, des, amount){
        if(type===null||des===null||amount===null){
          alert("Enter all fields");
        }else{
          console.log(type+" "+des+" "+amount);
          
        }
        
      },
    }
  }
</script>

<style>
.input-options{
  background-color: rgb(165, 177, 173);
  height: 120px;
}

 .Select-operation{
     display: inline;
     width:200px;
     margin:20px;
 }
 .btn-input{
     color:rgb(255, 102, 0);
     font-size: 80px;
     padding-top: 45px;
 }
 @media screen and (max-width: 790px){
      .Select-operation{
      display: inline;
      width:200px; 
      
 }  
 .input-options{
  background-color: rgb(165, 177, 173);
  height: 175px;
}
    }

    @media screen and (max-width: 500px){
      .Select-operation{
      display: inline;
      width:200px; 
      
 }  
 .input-options{
  background-color: rgb(165, 177, 173);
  height: 250px;
}
    }
</style>