<template>
    <div style="margin-bottom:50px">
        <div style="margin-bottom:50px" class="flex items-center justify-between">
          <div class="flex items-center" v-if="$route.name !== 'Favourites'">
            <a class="sorter-toggler" :class="{'active': open}" @click.prevent="open = !open">Породы</a>
            <div class="breed-item breed-item--active" v-if="this.activeBreed">
                {{ this.activeBreed }}
                <router-link class="breed-item__close" :to="{name: 'Home'}"></router-link>
            </div>
          </div>
          <div class="flex items-center" v-if="$route.name === 'Home'">
            <div>
              <a href="#" @click.prevent="toggleSort">Сортировать по алфавиту</a>
            </div>
            <div>
              <span @click="toggleSort" class="toggle-switch" :class="{'active': $store.state.sort}">
                <span class="toggle-knob"></span>
              </span>
            </div>
          </div>
        </div>

        <div v-if="open">
          <div style="display:inline;" v-for="(value, key) in sortedBreeds" :key="key">
            <div class="breed-letter">{{key}}</div>
            <router-link :to="{name: 'Sorted', params: { breed }}" class="breed-item" v-for="(breed, i) in value" :key="i">{{breed}}</router-link>
          </div>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      open: false,
      activeBreed: ''
    }
  },
  created () {
    this.$store.dispatch('fetchBreedList')
  },
  computed: {
    breeds () {
      return this.$store.state.breeds
    },
    sortedBreeds () {
      const breeds = [...this.breeds].reduce((result, word) => {
        const letter = word[0]
        result[letter] = result[letter] || []
        result[letter].push(word)
        return result
      }, {})
      return breeds
    }
  },
  watch: {
    '$route' () {
      this.open = false
      this.activeBreed = ''
      const breedFromUrl = this.$route.params.breed
      if (breedFromUrl && this.breeds.includes(breedFromUrl)) {
        this.activeBreed = breedFromUrl
      }
    }
  },
  methods: {
    toggleSort () {
      this.$store.commit('TOGGLE_SORT')
    }
  }
}
</script>

<style lang="scss">

.breed-letter {
  display: inline-block;
  text-transform: uppercase;
  font-size: 20px;
  color: #626262;
  margin-right: .8rem;
}

.breed-item {
    display: inline-block;
    font-size: 12px;
    line-height: 16px;
    color: #626262;
    text-decoration: none;
    padding: 4px 12px;
    border: 1px solid #626262;
    border-radius: 20px;
    text-transform: capitalize;
    margin-right: .8rem;
    margin-bottom: .8rem;

    &--active {
        border-color: #3C59F0;
        color: #3C59F0;
        margin: 0;
    }

    &__close {
      display: inline-block;
      width: 7px;
      height: 7px;
      background: {
        image: url(data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA3IDYiPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMy4yMDIgMi4yNzlsMi4xNi0yLjE2YS40MDUuNDA1IDAgMTEuNTczLjU3MmwtMi4xNiAyLjE2IDIuMTYgMi4xNmEuNDA1LjQwNSAwIDExLS41NzIuNTczbC0yLjE2LTIuMTYtMi4xNjEgMi4xNmEuNDA1LjQwNSAwIDExLS41NzItLjU3MmwyLjE2LTIuMTZMLjQ3LjY5YS40MDUuNDA1IDAgMTEuNTcyLS41NzNsMi4xNiAyLjE2eiIgZmlsbD0iIzNDNTlGMCIvPjwvc3ZnPg==);
        size: contain;
      }
    }
}

</style>
