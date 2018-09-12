<template>
    <section id="education">
        <h3 class="page-title">Образование</h3>
        <div class="container">
            <div class="grid">
                <div class="card">
                    <div class="card-title">Политехнический университет Петра Великого</div>
                    <div class="card-location">Санкт-Петербург, Россия | 2012 - 2019</div>
                    <ul class="card-list">
                        <li><p>Институт компьютерной науки и технологий</p></li>
                        <li><p>Компьютерная безопасность</p></li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
  name: 'Education'
}
</script>

<style scoped lang="less">
    .card{
        max-width: 815px;
        padding: 30px;
        margin: 30px auto;
        background: #fff;
        box-shadow: 3px 3px 10px 0 rgba(0, 0, 0, .2);
        transition: box-shadow .2s;
    }

    .card-title{
        border: none;
    }

    .card-location {
        color: #795548;
        margin: 20px 0;
    }
</style>
