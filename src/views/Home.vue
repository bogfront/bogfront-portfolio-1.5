<template>
  <div>
    <Nav/>
    <Main/>
  </div>
</template>

<script>
import Nav from '@/components/Nav'
import Main from '@/components/Main'

export default {
  name: 'home',
  components: {
    Nav,
    Main
  }
}
</script>
