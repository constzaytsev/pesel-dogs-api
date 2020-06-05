<template>
    <div>
        Loading...
    </div>
</template>

<script>
export default {
  mounted () {
    this.observer = new IntersectionObserver(([entry]) => {
      if (entry && entry.isIntersecting) {
        this.$store.dispatch('fetchAllDogs')
      }
    })

    this.observer.observe(this.$el)
  },
  beforeDestroy () {
    this.observer.disconnect()
  }
}
</script>
