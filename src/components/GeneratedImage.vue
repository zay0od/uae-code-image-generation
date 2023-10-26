<template>
  <div class="image-container">
    <div v-if="!loading && image">
      <img :src="image" />
      <vs-button flat :active="true" :disabled="value === ''"> Download Image </vs-button>
      <vs-button flat :active="true" :disabled="value === ''">
        Get your Participation Certificate
      </vs-button>
    </div>
    <div v-else>
      <img class="loading" src="../assets/images/ll.gif" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    image: {
      type: String,
      default:
        'https://oaidalleapiprodscus.blob.core.windows.net/private/org-q9WZQhXCbOkQSYO7q6jn5ioD/user-gdVJWGVewFuKcmXaymRO8iz5/img-UEKxZKdNRj6sdlb29YQTXpIZ.png?st=2023-10-24T20%3A02%3A18Z&se=2023-10-24T22%3A02%3A18Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2023-10-24T17%3A27%3A42Z&ske=2023-10-25T17%3A27%3A42Z&sks=b&skv=2021-08-06&sig=UJqRFpk/zEnGev8gAK1iVvLczfOIX%2BK7dyc9bCNNoO0%3D'
    },
    loading: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>
.image-container {
  width: 100%;
  padding: 0 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1.35rem;
}
.image-container div:first-child {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.image-container div:first-child img {
  margin-bottom: 0.3rem;
}

.image-container img {
  width: 400px;
  border-radius: 10px;
}
.image-container .loading {
  color: white;
  width: 90px !important;
}
</style>
