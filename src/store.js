import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    nav: [
      {
        title: 'Обо мне',
        icon: 'person',
        color: '#008073',
        url: '#about'
      },
      {
        title: 'Опыт',
        icon: 'trending_up',
        color: '#00bcd4',
        url: '#experience'
      },
      // {
      //   title: 'Проекты',
      //   icon: 'web',
      //   color: '#3f51b5',
      //   url: '#projects'
      // },
      {
        title: 'Навыки',
        icon: 'equalizer',
        color: '#9c27b0',
        url: '#skills'
      },
      {
        title: 'Образование',
        icon: 'school',
        color: '#ff9800',
        url: '#education'
      },
      {
        title: 'Контакты',
        icon: 'mail',
        color: '#795548',
        url: '#contacts'
      },
      {
        title: 'Резюме',
        icon: 'description',
        color: '#424242',
        url: '#resume'
      }
    ],

    jobs: [
      {
        logo: '/img/jobs/frenchrabbit.png',
        title: 'frenchRabbit',
        role: 'Верстальщик',
        href: 'http://frenchrabbit.ru',
        description: 'Разработка сайтов на 1С-Битрикс, сервисов и приложений.',
        stack: 'jquery, less, gulp',
        tasks: [
          'Адаптивная верстка коммерческих проектов студии'
        ],
        time: {
          from: 'Сентябрь 2014',
          to: 'Май 2015'
        }
      },
      {
        logo: '/img/jobs/logomachine.svg',
        title: 'Логомашина',
        role: 'Верстальщик',
        href: 'https://logomachine.ru',
        description: 'Дизайн-студия со 100% гарантиями. Сделали больше 350 фирменных стилей — больше всех в России.',
        stack: 'jquery, scss, gulp',
        tasks: [
          'Адаптивная верстка сайтов заказчиков',
          'Создан генератор для сборки landing page'
        ],
        time: {
          from: 'Май 2015',
          to: 'Сентябрь 2015'
        }
      },
      {
        logo: '/img/jobs/babadu.svg',
        title: 'babadu.ru',
        role: 'Frontend & Ux Designer',
        href: 'http://babadu.ru',
        description: 'Игрушки, одежда, коляски, мебель, книги, косметика и многое другое для детей и их родителей.',
        stack: 'jquery, less, gulp',
        tasks: [
          'Адаптивная верстка новых элементов сайта',
          'Поддержка клиентской части приложения',
          'Создание нового интерфейса сайта и его верстка'
        ],
        time: {
          from: 'Сентябрь 2015',
          to: 'Март 2016'
        }
      },
      {
        logo: '/img/jobs/names.jpg',
        title: 'NAME’S',
        role: 'Frontend Developer',
        href: '#',
        description: 'Интернет-магазин брендовой одежды. (Закрылся в 2017 году). Ушел по сокращению из-за закрытия магазина.',
        stack: 'angular, less, gulp, webpack',
        tasks: [
          'Поддержка существующего сайта',
          'Разработка раздела instaShop',
          'Разработка B2B разделов',
          'Верстка email рассылок'
        ],
        time: {
          from: 'Март 2016',
          to: 'Август 2016'
        }
      },
      {
        logo: '/img/jobs/fotosklad.png',
        title: 'Фотосклад.ру',
        role: 'Lead frontend developer',
        href: 'http://fotosklad.ru',
        description: 'Действительно низкие цены на цифровую технику и фототехнику. Компания входит в ТОП-3 в санкт-петербурге в e-commerce.\n' +
        'Разработка нескольких онлайн-магазинов с единым ядром, в который вынесен основной функционал. Разработка по методологии Scrum. Лично построил всю frontend разработку в команде.\n',
        stack: 'vue & vuex, webpack, eslint, less',
        tasks: [
          'Разработка с нуля клиентской части интернет-магазина',
          'Работа REST API',
          'Адаптивная верстка',
          'Создание шаблонов ядра для быстрого развертывания проектов',
          'Разработка пользовательского интерфейса сайта'
        ],
        time: {
          from: 'Август 2016',
          to: 'Октябрь 2018'
        }
      },
      {
        logo: '/img/jobs/skillfactory.svg',
        title: 'SkillFactory',
        role: 'Ведущий курса по JavaScript, Vue и Node.js',
        href: 'https://skillfactory.ru/javascript',
        description: 'Онлайно платформа обучения программированию и не только.',
        stack: 'vue & vuex, javascript, node.js',
        tasks: [
          'Разработаны курсы по JavaScript, Vue, Node.js',
          'Записаны уроки с разборами и примерами'
        ],
        time: {
          from: 'Ноябрь 2019',
          to: 'Февраль 2020'
        }
      },
      {
        logo: '/img/jobs/radario.svg',
        title: 'Радарио',
        role: 'Senior Frontend',
        href: 'https://business.radario.ru/',
        description: 'Платформа продажи билетов в театр и на концерты',
        stack: 'vue & vuex, javascript, canvas',
        tasks: [
          'Разработана библиотека рендера схемы для многотысячных стадионов с применением canvas',
          'Улучшены компоненты личного кабинета',
          'Написана аутентификация на Vue',
          'Поддержка legacy-кода'
        ],
        time: {
          from: 'Октябрь 2018',
          to: 'Апрель 2020'
        }
      },
      {
        logo: '/img/jobs/rabota.svg',
        title: 'Работа.ру',
        role: 'Senior Frontend',
        href: 'https://rabota.ru/',
        description: 'Быстрый поиск работы и подбор персонала',
        stack: 'nuxt & vuex, javascript, typescript',
        tasks: [
          'Разработка личного кабинета работодателей',
          'Разработка UI компонент сервиса'
        ],
        time: {
          from: 'Апрель 2020',
          to: 'Настоящее время'
        }
      },
      {
        logo: '/img/jobs/codefront.svg',
        title: 'CodeFront',
        role: 'Создатель курсов',
        href: 'https://juniorjs.ru/',
        description: 'Веселый и наполненный практикой курс изучения JavaScript',
        stack: 'javascript, преподавание, монтаж',
        tasks: [
          'Создан курс изучения JavaScript с нуля',
          'YouTube канал о фронтенд разработке'
        ],
        time: {
          from: 'Март 2020',
          to: 'Настоящее время'
        }
      }
    ],

    projects: [
      {
        cover: '',
        title: 'Mobila.shop',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A atque culpa doloribus nam odio quas suscipit! Architecto dicta eos facere incidunt magnam officiis, praesentium quas quibusdam rem, unde vero voluptates.'
      },
      {
        cover: '',
        title: 'Money & Honey Walk',
        description: 'Lorem ipsum '
      },
      {
        cover: '',
        title: 'Drone1.ru',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing '
      },
      {
        cover: '',
        title: 'Babadu.ru',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing '
      },
      {
        cover: '',
        title: 'names.ru',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing '
      },
      {
        cover: '',
        title: 'tonymoly.ru',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing '
      },
      {
        cover: '',
        title: 'kitfort.ru',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing '
      },
      {
        cover: '',
        title: 'architectstudio.ru',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing '
      },
      {
        cover: '',
        title: 'fond.ru',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing '
      },
      {
        cover: '',
        title: 'igotlaw.ru',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing '
      },
      {
        cover: '',
        title: 'prachka.ru',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing '
      }
    ],

    skills: [
      {
        title: 'Javascript & TypeScript',
        images: ['/img/skills/es6.png'],
        description: 'Подкрепляю знания ежедневным чтением специализированной литературы (сейчас серия You don\'t know JS). Ежедневно решаю одну-две задачи на ресурсе codewars. Пишу онлайн курс по ES6.'
      },
      {
        title: 'Nuxt & Vue & Vuex',
        images: ['/img/skills/vue.png'],
        description: 'Использую в компании и для своих проектов. Вынесен общий функционал для корзины, оформления заказа и полей форм. Разделение функционала на компоненты. Реализованы модальные окна, авторизация, корзина, оформление заказа, сравнение товаров. Везде придумано решение для SEO, так как разработка в e-commerce. Для разработки персональных идей также использую данный стек, так как он хорошо документирован, появляется сильное сообщество, начал первые шаги с ним еще с первой версии. Подписан на основных разработчиков фреймворка, благодаря чему слежу за всеми нововведениями и хуками.'
      },
      {
        title: 'HTML5 & CSS3',
        images: ['/img/skills/html5.png', '/img/skills/css3.png'],
        description: 'Хорошо знаком со многими особенностями и их отображением в браузерах. Изучаю новые особенности на CSS Tricks. В рамках своего профессионального профиля начинаю разработку интересных решений для Codepen.'
      },
      {
        title: 'Less & SCSS & BEM',
        images: ['/img/skills/less.png', '/img/skills/scss.svg'],
        description: 'Использую данный стек последние три года. Удобство написания стилей со своими нюансами в методологии BEM. В персональных проектах пишу стили непосредственно в компонентах.'
      },
      {
        title: 'Webpack & yarn & ESLint',
        images: ['/img/skills/webpack.jpg', '/img/skills/yarn.png', '/img/skills/eslint.svg'],
        description: 'Самостоятельно настраиваю менеджер задач gulp для сборки стилей, минификации изображений, распределения ассетов, запуска webpack. Умею настраивать webpack для сборки Vue & Vuex, ES6 в режимах dev и production. Настраиваю ESLint для принятых конвеншенов. Почему yarn - потому что удобнее устанавливать пакеты. Лучшее отображение в терминале.'
      },
      {
        title: 'WebStorm',
        images: ['/img/skills/webshtorm.png'],
        description: 'Предпочитаю IDE от Jetbrains, которая постоянно улучшается и используется мной свыше 5 лет. Мы с ней прошли огонь и воду)'
      },
      {
        title: 'git',
        images: ['/img/skills/git.png'],
        description: 'Без него никуда. В основном использую следующие функции: pull, push, commit, fetch, merge, status, checkout. Планирую глубже изучить документацию, так это очень сильный и сложный инструмент.'
      }
    ],

    contacts: [
      {
        icon: 'fas fa-envelope',
        link: 'mailto:bogfront@gmail.com',
        title: 'bogfront@gmail.com'
      },
      {
        icon: 'fab fa-telegram-plane',
        link: 'https://t.me/bogfront',
        title: 't.me/bogfront'
      },
      {
        icon: 'fab fa-github-alt',
        link: 'https://github.com/bogfront',
        title: 'github.com/bogfront'
      },
      {
        icon: 'fab fa-instagram',
        link: 'https://www.instagram.com/bogfront/',
        title: 'instagram.com/bogfront/'
      },
      {
        icon: 'fas fa-mobile-alt',
        link: 'tel:+79992006637',
        title: '+7 999 200-66-37'
      }
    ],

    menu: {
      isOpen: false
    }
  },

  mutations: {
    setMenu (state, param) {
      Vue.set(state.menu, 'isOpen', param || !state.menu.isOpen)
    }
  },

  actions: {},

  getters: {
    nav: state => state.nav,
    jobs: state => state.jobs,
    skills: state => state.skills,
    contacts: state => state.contacts,
    menu: state => state.menu
  }
})
