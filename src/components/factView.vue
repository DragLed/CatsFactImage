<script setup>
import { ref } from 'vue';
import axios from 'axios';
import { onMounted } from 'vue';

const Fact = ref('');

function Getfact() {
    Fact.value = '';
    axios.get('https://meowfacts.herokuapp.com')
  .then(response => {
    console.log(response.data.data[0]);
    Fact.value = response.data.data[0];
  })
  .catch(error => {
    console.error('Ошибка:', error.message);
  });

}



onMounted(() => {
    Getfact();
})

</script>

<template>
<div  class="MainForm">
    <router-link style="text-decoration: none; color: inherit;" to="/"><p class="MainText">Главная</p></router-link>
    <b><p class="TextForm">Случайный факт о котах</p></b>
    <div class="Fact">
        <p v-if="Fact" class="Catfact">{{ Fact }}</p>
        <p v-else>Загрузка...</p>
        <button class="ReloadBtn" @click="Getfact">Ещё факт</button>
    </div>
    <nav>
    </nav>
</div>
</template>

<style scoped>
.MainForm {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    font-size: 18px;
}

.MainText {
    background-color: #f0f0f0;
    border-radius: 5px;
    padding: 5px;
}
.Fact{
    background-color: #f0f0f0;
    max-width: 600px;
    padding: 25px;
    border-radius: 15px;
}

.ReloadBtn{
    background-color: #42b983;
    color: white;
    border: none;
    border-radius: 5px;
    padding: 10px;
    padding-left: 15px;
    padding-right: 15px;
}

nav {
    color: gray;
    margin-top: 25px;

}

</style>
