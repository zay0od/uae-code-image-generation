<template>
  <form @submit.prevent="generate">
    <div class="input">
      <vs-input placeholder="Enter some text to generate an image" v-model="value" />
    </div>
    <div class="Submitbutton">
      <vs-button flat :active="true" :disabled="value === ''">Generate Image</vs-button>
      <vs-button flat :active="true" :disabled="value === ''">Generate Text</vs-button>
    </div>
  </form>
</template>

<script>
export default {
  data: () => ({
    value: ''
  }),
  methods: {
    generate() {
      this.$emit('generate', this.value)
    }
  }
}
</script>

<style>
body {
  background-image: url('../assets/images/HelloWorld.gif');
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
}
.GPTDiv {
  margin: 0;
  padding: 0;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65));
}
form {
  /*display: flex;*/
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  gap: 0.25rem;
}
form .input {
  width: 100%;
}
form .input input {
  width: 100%;
}
form .button {
  width: 15%;
  text-wrap: nowrap;
}
form div button.vs-button--flat.vs-button--active {
  width: 50%;
  background-color: #da0c81;
  color: white;
  font-weight: 600;
  font-size: 0.7rem;
}
.Submitbutton {
  margin-top: 20px;
  width: 100%;
  align-content: center;
  display: flex;
}
.input .vs-input {
  font-size: 0.75rem;
  color: black;
}
.input .vs-input__label {
  font-size: 0.75rem;
  color: black;
}
</style>
