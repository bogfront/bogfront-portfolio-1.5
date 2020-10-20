<script>
export default {
  name: 'About',

  computed: {
    years () {
      const now = new Date();
      const birthday = new Date('1994-03-13');
      const ageDate = new Date(now - birthday);

      return Math.floor(ageDate.getUTCFullYear() - 1970);
    }
  }
}
</script>

<template>
    <section id="about">
        <h3 class="page-title">Обо мне</h3>
        <div class="container">
            <blockquote>
                <h2>Привет!</h2>
            </blockquote>
            <p>Меня зовут <b>Коновченко Богдан</b>, я frontend разработчик из Санкт&#8209;Петербурга. Мне {{ years }} лет, программировать начал в 15 лет. Начинал со студии разработки, затем работал в интернет-магазинах, билетной платформе, записал курс для SkillFactory. Сейчас работаю Senior Frontend в одном из крупнейших сайтов поиска работы, разрабатываю side project и создаю курсы для обучения Фронту.</p>
            <p>В ближайшем будущем планирую прогрессировать в сфере перподавания программирования.</p>
            <p><strong>Текущий фокус:&#8195;</strong>
                <a href="https://ru.nuxtjs.org/" target="_blank">Nuxt</a><span>&#8195;//&#8195;</span>
                <a href="https://vuejs.org/" target="_blank">Vue 3</a><span>&#8195;//&#8195;</span>
                <a href="https://www.typescriptlang.org/" target="_blank">TypeScript</a><span>&#8195;//&#8195;</span>
                <a href="https://nodejs.org/en/about/" target="_blank">Node.js</a></p>
        </div>
    </section>
</template>

<style scoped lang="less">
    .container{
        max-width: 800px;
        overflow: hidden;
    }
</style>
