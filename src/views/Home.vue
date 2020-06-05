<template>
  <div>
    <DogCells :dogs="dogs" />
    <Observer />
  </div>
</template>

<script>
import Observer from '../components/Observer'
import DogCells from '../components/DogCells'
export default {
  components: {
    Observer,
    DogCells
  },
  computed: {
    dogs () {
      if (this.$store.state.sort) {
        return [...this.$store.state.dogs].sort((a, b) => {
          return this.getBreedFromUrl(a).localeCompare(this.getBreedFromUrl(b))
        })
      } else {
        return this.$store.state.dogs
      }
    }
  },
  methods: {
    getBreedFromUrl (url) {
      const rawName = new URL(url).pathname.split('/')[2]
      return rawName.replace('-', ' ')
    }
  }

}
</script>
