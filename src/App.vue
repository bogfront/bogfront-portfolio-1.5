<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="less">
  .App {
    text-align: center;

    &-logo{
      animation: App-logo-spin infinite 20s linear;
      height: 80px;
    }

    &-header {
      background-color: #222;
      height: 150px;
      padding: 20px;
      color: white;
    }

    &-title {
      font-size: 1.5em;
    }

    &-intro {
      font-size: large;
    }
  }

  @keyframes App-logo-spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  a {
    color: #444;
    text-decoration: none;
  }

  p {
    font-size: 24px;
    line-height: 34px;
    font-weight: 300;
    color: #333;
  }

  p a {
    color: #009688;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 400;
  }

  h3 {
    font-weight: 300;
    margin-bottom: 60px;
    margin-top: 0;
    padding: 30px 40px;
    text-transform: uppercase;
  }

  blockquote {
    border-left: 5px solid #795548;
    color: #795548;
    font-size: 125%;
    font-weight: 400;
    margin: 20px 0;
    padding-left: 1.5rem;
  }

  strong {
    font-weight: 500;
  }

  @media (max-width: 767px) {
    blockquote {
      font-size: 16px;
    }

    p {
      font-size: 16px;
      line-height: 22px;
    }
  }
</style>
