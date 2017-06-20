<template>
    <div class="sidenav-wrapper">
        <transition name="viewFade" appear>
            <hamburger></hamburger>
        </transition>
        <aside class="sidenav-container" v-bind:class="sidenavStatus">
            <ul>
                <li v-for="link in links" :key="link.path" @click="navigate(link)" v-bind:class="linkClass(link)">{{ link.key }}</li>
            </ul>
        </aside>
    </div>
</template>

<script>
import router from './../../router';
import Hamburger from './hamburger/Hamburger';
import navData from './../../utils/nav.data.json';
import CONSTANTS from '../../utils/constants.json';

export default {
    name: 'sidenav',
    components: { Hamburger },
    data() {
        return {
            links: navData.links
        };
    },
    computed: {
        sidenavStatus() {
            return this.$store.state.sidenav_status;
        }
    },
    methods: {
        navigate(link) {
            router.push(link.path);
            this.$store.commit(CONSTANTS.MUTATIONS.SIDENAV_CLOSE);
        },
        linkClass(link) {
            if (this.$store.state.current_path === link.path) {
                return CONSTANTS.CLASSES.SELECTED;
            }
            return null;
        }
    }
};

</script>

<style lang="scss" scoped>
@import 'src/styles/variables';
$translationX: $sidenav-width;
$paddingX: 30px;
$paddingY: 85px;
.sidenav-wrapper {
    .sidenav-container {
        @include common-transition;
        z-index: $second-layer;
        position: fixed;
        right: 0;
        top: 0;
        background-color: $soft-white-color;
        width: $sidenav-width;
        height: 100%;
        transform: translate3d($translationX, 0px, 0px);
        padding: $paddingY $paddingX;
        &.opened {
            transform: translate3d(0px, 0px, 0px);
        }
        ul {
            border-top: 2px solid $orange-color;
            li {
                margin: 30px 0px;
                font-family: Lato, serif;
                font-size: 20px;
                display: block;
                &:hover {
                    cursor: pointer;
                }
                &.selected {
                    font-weight: bold;
                }
            }
        }
    }
}

@include in-desktop {
    .sidenav-wrapper {
        display: none !important;
    }
}
</style>
