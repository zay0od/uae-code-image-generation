<template>
  <div class="lang-box">
    <h1>Change your language</h1>
    <div>
      <vs-button flat @click="arabic" id="ar-app" :active="true">عربي</vs-button>
      <vs-button flat @click="english" :active="true">ِEnglish</vs-button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    arabic() {
      console.log('arabic')
      this.$router.push({
        name: 'ArGenerate'
      })
    },
    english() {
      console.log('english')
      this.$router.push({
        name: 'EnGenerate'
      })
    }
  }
}
</script>

<style>
.lang-box {
  font-size: 1.45rem;
  text-align: center;
  color: white;
}
.lang-box h1 {
  margin-bottom: 1rem;
}
.lang-box div {
  display: flex;
  justify-content: center;
  align-items: center;
}
.lang-box div button .vs-button__content {
  font-size: 0.8rem;
  background-color: #da0c81;
  transition: all 0.4s ease;
}
.lang-box div button .vs-button__content:hover {
  background-color: #e95793;
}
</style>
