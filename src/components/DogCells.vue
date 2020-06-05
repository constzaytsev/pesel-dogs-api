<template>
  <div class="grid">
    <div
      v-for="(url, i) in list"
      :key="i"
      :dog="url"
      class="grid__item"
      :class="{'first': $route.name === 'Home' && i === 0}"
      :style="{'background-image': `url('${url}')`}"
    >
      <div class="grid__item__container">
        <FavouriteButton :dog="url" />
        <div class="grid__item__container__breed">{{ getBreedFromUrl(url) }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import FavouriteButton from './FavouriteButton'
export default {
  props: {
    dogs: {
      type: Array,
      default: () => ([])
    }
  },
  components: {
    FavouriteButton
  },
  computed: {
    list () {
      return this.dogs.filter(e => e)
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

<style lang="scss">
.grid {
  display: flex;
  flex-wrap: wrap;
  margin-left: -30px;

  &__item {
    position: relative;
    height: 290px;
    width: calc(100% / 3 - 30px);
    margin-bottom: 30px;
    margin-left: 30px;
    background: {
      size: cover;
    }
    border-radius: 8px;

    &.first {
      height: 500px;
      width: 100%;
    }

    &__container {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(
        1deg,
        #000000 -5.53%,
        rgba(0, 0, 0, 0) 54.45%
      );

      &__breed {
        position: absolute;
        font-weight: bold;
        font-size: 25px;
        right: 25px;
        bottom: 25px;
        text-transform: capitalize;
      }
    }
  }
}
</style>
