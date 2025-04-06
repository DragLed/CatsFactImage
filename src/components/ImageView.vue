<script setup>
import { ref } from 'vue';
import axios from 'axios';
import { onMounted } from 'vue';

const imageUrl = ref('');
const tags = ref(['']);
const selectedTag = ref('A');

function GetImage() {
    imageUrl.value = '';
    console.log(selectedTag.value);
    if (selectedTag ) {
        axios.get('https://cataas.com/cat/'+ selectedTag.value +'?position=center&json=true')
  .then(response => {
    console.log(response.data.url)
    imageUrl.value = response.data.url;

  })
  .catch(error => {
    console.error('Ошибка:', error.message);
  });
    }
}

function GetTags () {
    axios.get('https://cataas.com/api/tags')
  .then(response => {
    console.log(response.data);
    tags.value = response.data;
  })
  .catch(error => {
    console.log(error);
  })
}

onMounted(() => {
    GetImage();
    GetTags();
})
</script>

<template>
<div  class="MainForm">
    <router-link style="text-decoration: none; color: inherit;" to="/"><p class="MainText">Главная</p></router-link>
    <b><p class="TextForm">Случайная картинка котика</p></b>
    <div class="Image">
        <img v-if="imageUrl" :src="imageUrl" alt="Динамическое изображение">
        <p v-else>Загрузка...</p>
        <button class="ReloadBtn" @click="GetImage">Другая каринка</button>
    </div>
    <div>
    <label for="tag-select">Выбери тег:</label>
    <select id="tag-select" v-model="selectedTag">
      <option v-for="(tag, index) in tags" :key="index" :value="tag">
        {{ tag }}
      </option>
    </select>
  </div>
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
.Image{
    background-color: #f0f0f0;
    max-width: 600px;
    padding: 25px;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
}

.Image img {
    height: 300px;
    width: 300px;
    border-radius: 25px;
}

.ReloadBtn{
    background-color: #42b983;
    color: white;
    border: none;
    margin-top: 25px;
    border-radius: 5px;
    padding: 10px;
    padding-left: 15px;
    padding-right: 15px;
}




</style>