<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import Home from '@/views/Home'

export default {
  name: 'app',
  components: {
    Home
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');

* {
  font-family: 'Roboto', sans-serif;
}

body {
  padding: 0;
  margin: 0;
}

a {
  text-decoration: none !important;
}

h2 {
  font-weight: 300;
}

h3 {
  font-weight: 300;
  margin-bottom: 60px;
  margin-top: 0;
  padding: 30px 40px;
  text-transform: uppercase;
}

p {
  color: #333;
  font-size: 24px;
  font-weight: 300;
  line-height: 34px;
}

blockquote {
  border-left: 5px solid #795548;
  color: #795548;
  font-size: 125%;
  font-weight: 400;
  margin: 20px 0;
  padding-left: 1.5rem;
}
</style>
