<template>
    <nav class="nav">
        <ul class="side-nav" :class="{'side-nav_open': menu.isOpen}">
            <li class="logo">
                <a href="#intro" class="brand-logo">
                    <h1>
                        Богдан Коновченко
                        <span>Frontend Разработчик</span>
                    </h1>
                </a>
            </li>
            <li class="bold" v-for="item in nav" :key="item.id">
                <a :href="item.url" v-scroll-to="item.url" @click="closeMenu" :style="{'border-color': item.color}">
                    <i :style="{'color': item.color}">{{item.icon}}</i>
                    <span>{{item.title}}</span>
                </a>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
  computed: {
    nav () {
      return this.$store.getters.nav
    },

    menu () {
      return this.$store.getters.menu
    }
  },

  methods: {
    closeMenu () {
      this.$store.commit('setMenu', false)
    }
  }
}
</script>

<style scoped lang="less">
    .side-nav {
        height: 100%;
        left: 0;
        top: 0;
        position: fixed;
        width: 210px;
        box-shadow: 0 2px 10px 0 rgba(0, 0, 0, .16);
        background: #fafafa;
        z-index: 5;
        transition: left .2s;

        @media (max-width: 767px) {
            left: -240px;
            padding-top: 60px;

            &_open{
                left: 0;
            }
        }

        .bold a {
            border-left: 0 solid #000;
            padding: 10px 0 12px;
            display: flex;
            align-items: center;
            transition: border .3s, background-color .2s;

            &:hover {
                border-left: 4px solid #000;
                background: #f4f6f9;
            }

            i {
                padding: 0 15px;
                width: 30px;
                height: 30px;
                display: inline-block;
                font-family: 'Material Icons';
                font-style: normal;
                font-size: 30px;
                text-align: center;
            }

            span {
                color: #333;
                font-weight: 300;
                line-height: 20px;
                font-size: 14px;
                display: inline-block;
            }
        }
    }

    .logo {
        padding: 30px 30px 40px;
        border-bottom: 1px solid #ddd;
        background: #fafafa;
        box-sizing: content-box;
        min-height: 90px;

        @media (max-width: 767px) {
            display: none;
        }
    }

    .brand-logo {
        display: block;

        h1 {
            font-weight: 300;
            font-size: 22px;
            color: #008073;

            span {
                display: block;
                font-size: 14px;
                margin-top: 6px;
                color: #795548;
            }
        }
    }
</style>
