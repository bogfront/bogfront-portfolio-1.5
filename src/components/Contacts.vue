<template>
    <section id="contacts">
        <h3 class="page-title">Контакты</h3>
        <div class="container">
            <ul>
                <li v-for="item in contacts" :key="item.id">
                    <p>
                        <a :href="item.link" class="contacts-link" target="_blank">
                            <i :class="item.icon"></i>
                            <span>{{item.title}}</span>
                        </a>
                    </p>
                </li>
            </ul>
        </div>
    </section>
</template>

<script>
export default {
  computed: {
    contacts () {
      return this.$store.getters.contacts
    }
  }
}
</script>

<style scoped>
ul {
  list-style: none;
}

    .contacts-link {
        display: inline-block;
        line-height: 50px;
    }

    .contacts-link i {
        margin-right: 15px;
        line-height: 50px;
        width: 50px;
        text-align: center;
        background: #795548;
        color: #fff;
        border-radius: 50%;
        box-shadow: 0 3px 3px 0 rgba(0, 0, 0, .16);
    }

    .contacts-link span {
        transition: border .3s;
    }

    .contacts-link:hover span {
        border-bottom: 3px solid #009688;
    }
</style>
