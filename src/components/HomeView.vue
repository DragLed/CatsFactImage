<script setup>

</script>

<template>
<div  class="MainForm">
    <router-link style="text-decoration: none; color: inherit;" to="/"><p class="MainText">Главная</p></router-link>
    <b><p class="WellcomeTetx">Добро пожаловать!</p></b>
    <nav>
        <router-link to="/fact"><button class="GetRandomFactBtn">Получить случайный факт</button></router-link>
        <router-link to="/image"><button class="GetImageBtn">Получить картинку</button></router-link>
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
    color: #74c8a2;
    background-color: #f0f0f0;
    border-radius: 5px;
    padding: 5px;
}

.MainForm button {
    background-color: #42b983;
    color: white;
    border: none;
    border-radius: 7px;
    padding: 7px;
    margin: 7px;
    width: 500px;
}

.WellcomeText {
    font-size: 17px;
}

nav {
    display: flex;
    flex-direction: column;
}

</style>
