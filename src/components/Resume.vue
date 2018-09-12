<template>
    <section id="resume">
        <h3 class="page-title">Резюме</h3>
        <div class="container">
            <a href="https://drive.google.com/open?id=1zldtho2VINr1QE1pbFpZpMj8iHqHhu4I" class="btn" target="_blank">Скачать резюме</a>
        </div>
    </section>
</template>

<script>
export default {
  name: 'Resume'
}
</script>

<style scoped lang="less">
    .btn{
        display: block;
        margin: auto;
        max-width: 600px;
        background: rgb(255, 152, 0);
        line-height: 60px;
        border-radius: 30px;
        text-align: center;
        color: #fff;
        text-transform: uppercase;
        font-size: 22px;
        box-shadow: 0 3px 3px 0 rgba(0, 0, 0, .16);
        transition: box-shadow .2s;

        &:hover{
            box-shadow: 0 1px 1px 0 rgba(0, 0, 0, .16);
        }
    }
</style>
