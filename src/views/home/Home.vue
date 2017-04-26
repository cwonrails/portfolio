<template>
    <div class="home view">
        <section>
            <header class="profile-card">
                <figure class="picture">
                    <img height="125" width="125" src="../../assets/images/portrait.png">
                </figure>
                <div class="details">
                    <h1>Guillermo Maiolo</h1>
                    <h2>Software Developer</h2>
                </div>
            </header>
            <article class="main">
                <p>
                    Hey, I'm a web & software developer from Buenos Aires, Argentina. I work primarily with Javascript, mostly with <a class="link" href="https://angularjs.org" target="_blank">Angular</a>, <a class="link" href="https://cordova.apache.org" target="_blank">Cordova</a> and <a class="link" target="_blank" href="https://nodejs.org">Node</a>.
                </p>
                <p>
                    Have a look through some of my <router-link class="link" to="/projects">projects</router-link> or learn a bit more <router-link class="link" to="/about">about me</router-link>.
                </p>
            </article>
            <footer>
                <ul>
                    <li class="link" v-for="link in home.links">
                        <i class="icon" :class="link.icon"></i>
                        <a class="link" target="_blank" :href="link.url">{{ link.text }}</a>
                    </li>
                </ul>
            </footer>
        </section>
    </div>
</template>

<script>
    import home from './home.data';

    export default {
        name: 'home',
        data() { return { home }; }
    };
</script>

<style src="./home.style.scss" lang="scss" scoped></style>
