<template>
  <div class="home clearfix">
  	<Carousel />
  	<Img />
  	<Loushi />
  	<Newloupan />
  </div>
</template>

<script>
// @ is an alias to /src
import Carousel from '@/components/Carousel.vue'
import Img from '@/components/Img.vue'
import Loushi from '@/components/Loushi.vue'
import Newloupan from '@/components/Newloupan.vue'

export default {
  name: 'home',
  components: {
    Carousel,
    Img,
    Loushi,
    Newloupan
  }
}
</script>      
