<template>
<form @submit.prevent="search" class="text-light">
  <label for="date">Choose Date:</label>
  <input type="date" 
        v-model="state.date"
        id="date">
  <button class='btn btn-success py-0 ms-3' type='submit'>ok</button>
  </form>


</template>

<script>
import Pop from '../utils/Pop'
import { nasaService } from '../services/NasaService'
import { computed, reactive } from 'vue'
import { AppState } from '../AppState'

export default {
setup(){
  const state = reactive({
      date: ''
  })

  return{
    state,
    nasaData: computed(() => AppState.nasaData),

    async search(){
      try {
        await nasaService.getNasaData(state.date)
      } catch (error) {
        Pop.toast(error.message, 'error')
      }
  }
}
}
}
</script>

<style lang="scss" scoped>
label {
    display: block;
    font: 1rem 'Fira Sans', sans-serif;
    
};

input {
background-color: rgba(207, 235, 206, 0.596);
};
label {
    margin: .4rem 0;
    
}

</style>