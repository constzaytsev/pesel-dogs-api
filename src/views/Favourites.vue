<template>
  <div>
    <DogCells :dogs="favourites" />
  </div>
</template>

<script>
import DogCells from '../components/DogCells'
export default {
  name: 'Favourites',
  components: {
    DogCells
  },
  computed: {
    favourites () {
      return Array.isArray(JSON.parse(localStorage.getItem('favourites'))) ? JSON.parse(localStorage.getItem('favourites')) : []
    }
  }
}
</script>
