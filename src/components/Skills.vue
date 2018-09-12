<template>
    <section id="skills">
        <h3 class="page-title">Навыки</h3>
        <div class="container">
            <div class="card" v-for="card in skills" :key="card.id">
                <div class="card-flex-img" >
                    <img v-for="img in card.images" :key="img.id" :src="img" :alt="card.title"/>
                </div>
                <div class="card-title">{{card.title}}</div>
                <p>{{card.description}}</p>
            </div>
        </div>
    </section>
</template>

<script>
export default {
  computed: {
    skills () {
      return this.$store.getters.skills
    }
  }
}
</script>

<style scoped lang="less">
    .card {
        max-width: 800px;
        width: auto;
        padding: 30px;
        margin: 30px auto;
        background: #fff;
        box-shadow: 3px 3px 10px 0 rgba(0, 0, 0, .2);
        transition: box-shadow .2s;

        &-title {
            color: #795548;
            font-size: 40px;
            margin: 0 -10px 30px;
            border-bottom: 1px solid #ddd;
            padding-bottom: 10px;
        }

        &-flex {
            display: flex;
            flex-wrap: wrap;

            &-item {
                text-align: center;
                width: 150px;
                margin: 30px;
            }

            &-img {
                height: 60px;
                margin-bottom: 15px;
                overflow: hidden;

                img {
                    max-height: 100%;
                    max-width: 100%;
                    display: inline-block;
                    vertical-align: middle;
                    margin-right: 15px;
                }

                p {
                    margin: 0;
                }
            }
        }
    }

    @media (max-width: 956px) {
        .card-flex {
            justify-content: center;
        }
    }
</style>
