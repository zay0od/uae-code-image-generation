<template>
  <ImageGenerationForm @generate="generate" />
  <GeneratedImage v-if="show" :image="imageUrl" :loading="loading" />
</template>

<script>
import GeneratedImage from '../components/GeneratedImage.vue'
import ImageGenerationForm from '../components/ImageGenerationForm.vue'
import axios from 'axios'

export default {
  components: { ImageGenerationForm, GeneratedImage },
  data() {
    return {
      imageUrl: '',
      loading: false,
      show: false
    }
  },
  methods: {
    async generate(text) {
      // Define your API key and endpoint
      const apiKey = import.meta.env.VITE_APP_OPEN_AI_KEY //Set Your API Key here
      const endpoint = 'https://api.openai.com/v1/images/generations'

      // Define your request data
      const requestData = {
        prompt: text,
        n: 1, //number of images
        size: '512x512'
      }

      // Define the headers for the API request
      const headers = {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      }

      this.show = true
      this.imageUrl = ''
      this.loading = true
      // Make the API request
      axios
        .post(endpoint, requestData, { headers })
        .then((response) => {
          // Get the generated image URL from the response
          this.imageUrl = response.data?.data?.[0]?.url
          this.loading = false
        })
        .catch((error) => {
          this.imageUrl = ''
          this.loading = false
          console.error('Error generating image:', error)
        })
    }
  }
}
</script>

<style></style>
