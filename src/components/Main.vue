<template>
    <main>
        <header>
            <a href="#intro" class="header-logo">
                Богдан Коновченко
                <span>Frontend Разработчик</span>
            </a>
            <button class="header-menu" :open="isOpen" @click="open">
                <i>menu</i>
            </button>
        </header>
        <section class="section cover" id="intro">
            <span class="overlay"></span>
            <div class="container">
                <h2>Я здесь, чтобы <span class="teal">помочь</span>
                    <br/>стать <span class="underline">фронтенд разработчиком</span>.
                </h2>
            </div>
        </section>
        <About/>
        <Experience/>
        <Skills/>
        <Education/>
        <Contacts/>
        <Resume/>
    </main>
</template>

<script>
import About from '@/components/About'
import Experience from '@/components/Experience'
import Skills from '@/components/Skills'
import Education from '@/components/Education'
import Contacts from '@/components/Contacts'
import Resume from '@/components/Resume'

export default {
  data: () => ({
    isOpen: false
  }),

  components: {
    Resume,
    Contacts,
    Experience,
    About,
    Skills,
    Education
  },

  methods: {
    open: function () {
      this.$store.commit('setMenu')
    }
  }
}
</script>

<style lang="less">
    #intro {
        height: 100vh;
        background: url("../assets/img/main/personal.jpg") center no-repeat;
        background-size: cover;
        position: relative;

        @media (max-width: 956px) {
            height: 60vh;
        }
    }

    #intro h2{
        position: relative;
        z-index: 2;
        margin: 0;
        font-weight: 300;
        line-height: 150%;
        padding: 40px 30px;
        color: #fefefe;
        font-size: 46px;
        text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.5);

        @media (max-width: 956px) {
            font-size: 30px;
        }

        @media (max-width: 767px) {
            font-size: 20px;
            padding: 80px 0 40px;
        }

        .teal {
            background: #008073;
            padding: 0 5px;
        }

        .underline {
            border-bottom: 5px solid #009688;
        }
    }

    header{
        display: none;
        padding: 0 15px;
        position: fixed;
        top: 0;
        left: 0;
        height: 50px;
        width: ~"calc(100% - 30px)";
        background: #eee;
        z-index: 10;

        @media(max-width: 767px) {
            display: flex;
            align-items: center;
        }
    }

    .header {

        &-logo {
            font-weight: 300;
            font-size: 16px;
            color: #008073;

            span {
                display: block;
                font-size: 14px;
                color: #795548;
            }
        }

        &-menu{
            margin-left: auto;
            background: transparent;
            border: none;
            outline: none;

            i {
                padding: 0;
                width: 30px;
                height: 30px;
                display: inline-block;
                font-family: 'Material Icons';
                font-style: normal;
                font-size: 30px;
                text-align: center;
            }
        }
    }

    main{
        padding-left: 210px;
        width: calc(100% - 210px);
        background: url('../assets/img/main/bg.png');

        @media (max-width: 767px) {
            padding-left: 0;
            width: 100%;
        }
    }

    .overlay {
        background-color: rgba(0, 0, 0, 0.2);
        height: 100%;
        left: 0;
        position: absolute;
        top: 0;
        width: 100%;
        z-index: 1;
    }

    .container {
        padding: 0 1.5rem;
        margin: 0 auto;
        max-width: 1280px;
        width: 95%;

        @media (max-width: 956px) {
            width: 80%;
        }

        @media (max-width: 767px) {
            width: 90%;
            padding: 0;
        }
    }

    .page-title {
        background-color: #008073;
        color: #fff;
        font-size: 32px;
    }

    section {
        padding-bottom: 60px;
    }
</style>
