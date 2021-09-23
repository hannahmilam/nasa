<template>
  <div class="container-fluid img" :style="{ 'backgroundImage': `url(${nasaData.url})` }">
    <div class="row">
      <div class="col-3">
        <Calendar />
      </div>
    </div>

    <div class="row mt-5">
    <div class="col-8 offset-2 text-light">
      <div class="card p-3">
    <h3 class="text-center">{{ nasaData.title }}</h3>
    <p>{{ nasaData.explanation}}</p>
    <p class="text-center">-{{ nasaData.copyright }}</p>
    </div>
    </div>
  </div>
  </div>
</template>

<script>
import { computed, onMounted } from '@vue/runtime-core'
import { AppState } from '../AppState'
import { nasaService } from '../services/NasaService'

export default {
  name: 'Home',
  setup(){
    onMounted(async ()=> {await nasaService.getNasaData('')})
    return{
     nasaData: computed(() => AppState.nasaData) 
    }
  },
}
</script>

<style scoped lang="scss">
  .img{
    background-size: cover;
    height: 100vh;
  }
  .card{
    background-color: rgba(48, 38, 38, 0.178);
  color: white;
  border-radius: 25px;
  box-shadow: 0px 0px 12px #e0dfd7c4;
  backdrop-filter: blur(4px);
  font-family: 'Scheherazade New', serif;
  }
  p{
    font-size: 20px;
    text-shadow: 2px 2px 8px #000000;
  }
  h3{
    text-shadow: 2px 2px 8px #000000;
  }

</style>
