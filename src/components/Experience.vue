<template>
    <section id="experience">
        <h3 class="page-title">Опыт</h3>
        <div class="container">
            <div class="card" v-for="job in jobs.slice().reverse()" :key="job.id">
                <div class="card-row">
                    <a :href="job.href" class="card-logo" target="_blank">
                        <img :src="job.logo" :alt="job.title"/>
                    </a>
                    <a :href="job.href" class="card-title" target="_blank">
                        <span>{{job.title}}</span>
                    </a>
                    <div class="card-role">{{job.role}}</div>
                </div>
                <p><b>Рабочий стек: </b><i>{{job.stack}}</i></p>
                <p class="card-description">{{job.description}}</p>
                <ul class="card-list" v-for="task in job.tasks" :key="task.id">
                    <li>
                        <p>{{task}}</p>
                    </li>
                </ul>
                <div class="card-action">
                    {{job.time.from}} - {{job.time.to}}
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
  computed: {
    jobs () {
      return this.$store.getters.jobs
    }
  },

  filter: {
    reverse: value => {
      return value.slice().reverse()
    }
  }
}
</script>

<style scoped lang="less">
    .card {
        max-width: 800px;
        padding: 30px;
        margin: 30px auto;
        background: #fff;
        box-shadow: 3px 3px 10px 0 rgba(0, 0, 0, .2);
        transition: box-shadow .2s;

        &-row {
            display: flex;
            align-items: center;
            padding: 0 10px 12px;
            margin: 0 -10px 20px;
            border-bottom: 1px solid #ddd;

            @media(max-width: 767px) {
                flex-direction: column;
                align-items: normal;

                .card-logo, .card-title, .card-role{
                    margin-left: 0;
                }
            }
        }

        &-logo {
            width: 120px;
            margin-right: 40px;
            height: 40px;

            img {
                height: 100%;
                max-height: 40px;
                max-width: 120px;
            }
        }

        &-title {
            color: #009688;
            text-transform: uppercase;
            font-size: 24px;
            font-weight: 300;
            border-bottom: 3px solid transparent;
            transition: border .2s;

            &:hover {
                border-color: #009688;
            }
        }

        &-role {
            font-size: 20px;
            margin-left: auto;
            color: #795548;
            text-transform: capitalize;
        }

        &-description {
            font-size: 18px;
            line-height: 24px;
            color: #666;
            font-weight: 400;
        }

        &-list {
            list-style: disc;
            padding-left: 40px;

            p {
                font-size: 18px;
                line-height: 24px;
                font-weight: 400;
                margin: 5px 0;
            }
        }

        &-action {
            font-size: 14px;
            color: #666;
            margin-top: 40px;
        }
    }

    @media (max-width: 956px) {
        .card-row {
            flex-wrap: wrap;
        }

        .card-title {
            margin-left: auto;
        }
    }

    @media (max-width: 767px) {
        .card {
            width: auto;
        }

        .card-description {
            font-size: 16px;
        }

        .card-list p {
            font-size: 16px;
        }

        .card-logo {
            margin-bottom: 10px;
        }
    }
</style>
