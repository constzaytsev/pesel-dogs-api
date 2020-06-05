<template>
  <div>
    <DogCells :dogs="dogs" />
  </div>
</template>

<script>
import DogCells from '../components/DogCells'
export default {
  components: {
    DogCells
  },
  computed: {
    dogs () {
      return this.$store.state.dogsByBreed
    }
  },
  created () {
    this.$store.dispatch('sortDogs', this.$route.params.breed)
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      vm.$store.dispatch('sortDogs', to.params.breed)
    })
  },
  beforeRouteUpdate (to, from, next) {
    this.$store.dispatch('sortDogs', to.params.breed)
    next()
  }
}
</script>
