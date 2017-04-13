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

<style lang="scss" src="./navbar.scss" scoped></style>
