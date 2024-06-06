<template>
    <form @submit.prevent="registerUser">
        <h1>Регистрация</h1>
        <div class="input-box">
            <input type="text" v-model="name" placeholder="Ввелите ваше имя" required>
            <i class='bx bx-user'></i>
        </div>
        <div class="input-box">
            <input type="password" v-model="password" placeholder="Придумайте пароль" required>
            <i class='bx bxs-lock-alt'></i>
        </div>
        <div class="register-link">
            <p>Зарегистрированы? <router-link to="/login">Войти</router-link></p>
        </div>
        <button type="submit">Зарегистрироваться</button>
    </form>
</template>

<script>
export default {
    data() {
        return {
            name: '',
            password: '',
        };
    },
    methods: {
        registerUser() {
            this.$store.dispatch('registerUser', { name: this.name, password: this.password });
        },
    },
};
</script>

<style>

</style>