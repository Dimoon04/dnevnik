<template>
    <form action="">
        <h1>Регистрация</h1>
        <div class="input-box">
            <input type="text" placeholder="Ввелите ваше имя" required>
            <i class='bx bx-user'></i>
        </div>

        <div class="input-box">
            <input type="passwoard" placeholder="Придумайте пароль" required>
            <i class='bx bxs-lock-alt'></i>
        </div>
        
        <div class="register-link">
			<p>Зарегистрированы? <router-link to="/login">Войти</router-link></p><!--вставить ссылку-->
		</div>
    </form>
</template>
<style>

</style>