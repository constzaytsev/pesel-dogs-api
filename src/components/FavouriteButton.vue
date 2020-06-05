<template>
    <div class="favourite-heart" :class="{'active': isActive}" @click="toggleFavourite"></div>
</template>

<script>
export default {
  props: {
    dog: {
      type: String,
      default: () => ('')
    }
  },
  data: () => ({ isActive: false }),
  created () {
    const favourites = localStorage.getItem('favourites') ? JSON.parse(localStorage.getItem('favourites')) : []
    if (favourites.findIndex(e => e === this.dog) > -1) {
      this.isActive = true
    }
  },
  methods: {
    toggleFavourite () {
      const favourites = localStorage.getItem('favourites') ? JSON.parse(localStorage.getItem('favourites')) : []
      const i = favourites.findIndex(e => e === this.dog)
      if (i > -1) {
        favourites.splice(i, 1)
        this.isActive = false
      } else {
        favourites.push(this.dog)
        this.isActive = true
      }

      localStorage.setItem('favourites', JSON.stringify(favourites))
    }
  }
}
</script>

<style lang="scss">
    .favourite-heart {
        position: absolute;
        display: block;
        top: 25px;
        left: 25px;
        width: 29px;
        height: 26px;
        cursor: pointer;
        background: {
            image: url(data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyOSAyNiI+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMy43NTggMjUuN0wyLjYyNSAxNC44NzNhOC41NTUgOC41NTUgMCAwMTAtMTIuMzMxYzMuMjQ5LTMuMTYgOC4zNy0zLjM3NSAxMS44NzUtLjY0NyAzLjUwNC0yLjcyOCA4LjYyNi0yLjUxMiAxMS44NzUuNjQ3YTguNTU1IDguNTU1IDAgMDEwIDEyLjMzMUwxNS4yNDIgMjUuN2ExLjA2NiAxLjA2NiAwIDAxLTEuNDg0IDB6TTQuMTA5IDQuMDVhNi40NTYgNi40NTYgMCAwMDAgOS4zMThMMTQuNSAyMy40N2wxMC4zOTEtMTAuMTAzYTYuNDU2IDYuNDU2IDAgMDAwLTkuMzE5Yy0yLjY2Mi0yLjU4OC02Ljk4Ny0yLjU4OC05LjY0OSAwYTEuMDY2IDEuMDY2IDAgMDEtMS40ODQgMGMtMi42NjItMi41ODgtNi45ODctMi41ODgtOS42NDkgMHoiIGZpbGw9IiNmZmYiLz48L3N2Zz4=);
            size: contain;
        }

        &.active {
            background-image: url(data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyOSAyNiI+PHBhdGggZD0iTTEzLjc1OCAyNS43Yy40MTIuNCAxLjA3Mi40IDEuNDg0IDBsMTEuMTMzLTEwLjgyNmE4LjU1NSA4LjU1NSAwIDAwMC0xMi4zMzFjLTMuMjQ5LTMuMTYtOC4zNy0zLjM3NS0xMS44NzUtLjY0Ny0zLjUwNC0yLjcyOC04LjYyNi0yLjUxMi0xMS44NzUuNjQ3YTguNTU1IDguNTU1IDAgMDAwIDEyLjMzMUwxMy43NTggMjUuN3oiIGZpbGw9IiNmZmYiLz48L3N2Zz4=);
        }
    }
</style>
