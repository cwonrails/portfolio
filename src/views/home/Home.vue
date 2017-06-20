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
                    Hey, I'm a web & software developer from Buenos Aires, Argentina. I work primarily with Javascript, mostly with
                    <a class="link" href="https://angularjs.org" target="_blank">Angular</a>,
                    <a class="link" href="https://cordova.apache.org" target="_blank">Cordova</a> and
                    <a class="link" target="_blank" href="https://nodejs.org">Node</a>.
                </p>
                <p>
                    Have a look through some of my
                    <router-link class="link" to="/projects">projects</router-link> or learn a bit more
                    <router-link class="link" to="/about">about me</router-link>.
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

<style lang="scss" scoped>
@import 'src/styles/variables';
@import 'src/styles/mixins';

.home {
    overflow: auto;
    section {
        width: $common-block-width;
        .profile-card {
            padding-bottom: 30px;
            border-bottom: 2px solid $orange-color;
            @include flex-row;
            .picture {
                width: 125px;
                height: 125px;
                margin-right: 40px;
            }
            .details {
                @include flex-col;
                justify-content: center;
                h1,
                h2 {
                    display: block;
                    margin-top: 0;
                    margin-bottom: 10px;
                }
                h2 {
                    font-weight: 100;
                    color: rgba($black-color, 0.7);
                }
            }
        }
        .main {
            margin: 30px 0px;
        }
        footer ul {
            @include flex-row;
            flex-wrap: wrap;
            li.link {
                width: 33.33%;
                @include flex-row;
                align-items: center;
                font-size: 16px;
                font-family: Lato, serif;
                margin-bottom: 15px;
                transition: color linear .4s;
                color: $black-color;
                .icon {
                    font-size: 25px;
                }
                a {
                    transition: none;
                    color: inherit;
                }
                &:hover {
                    cursor: pointer;
                    color: $orange-color;
                }
            }
        }
    }
}

@include mobile-width-breakpoint {
    .home {
        section {
            width: 100%;
            padding: 50px 50px 30px 50px;
            header.profile-card {
                display: block;
                text-align: center;
                padding-bottom: 15px;
                .picture {
                    margin: auto;
                    margin-bottom: 15px;
                }
            }
            .main {
                margin: 25px 0px;
            }
            footer ul {
                flex-direction: column;
                align-items: center;
            }
        }
    }
}

@include mobile-height-breakpoint {
    div.home {
        display: block;
        section {
            width: 100%;
            display: block;
            padding: 25px 50px;
            header {
                .picture {
                    display: none;
                }
                .details {
                    display: block;
                    width: 100%;
                    text-align: center;
                }
            }
        }
    }
}
</style>
