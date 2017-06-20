<template>
    <nav class="navbar-container">
        <h1 class="name" @click="navigate()">G·M</h1>
        <ul class="navbar-wrapper">
            <li class="nav-link" v-for="link in links" :key="link.path" @click="navigate(link)" v-bind:class="linkClass(link)">{{ link.key }}</li>
        </ul>
    </nav>
</template>

<script>
import router from './../../router';
import navData from './../../utils/nav.data';
import CONSTANTS from '../../utils/constants';

export default {
    name: 'navbar',
    data() {
        return {
            links: navData.links
        };
    },
    methods: {
        navigate(link) {
            router.push(link ? link.path : '/');
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

.navbar-container {
    height: 80px;
    text-align: center;
    background: hsla(0, 0%, 100%, .8);
    border-bottom: 1px solid #EFEFEF;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    overflow: hidden;
    z-index: 999;
    .name {
        float: left;
        margin-left: 15%;
        font-family: 'Overpass Mono';
        font-size: 35px;
        &:hover {
            cursor: pointer;
        }
    }
    .navbar-wrapper {
        height: 100%;
        float: right;
        margin-right: 15%;
        display: flex;
        align-items: center;
        .nav-link {
            margin: 0 15px;
            &.selected {
                font-weight: bold;
            }
            &:hover {
                cursor: pointer;
            }
        }
    }
}

@include not-in-desktop {
    .navbar-container {
        display: none !important;
    }
}
</style>
