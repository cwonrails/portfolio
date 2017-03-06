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
    import sidenavData from './sidenav.data';
    import CONSTANTS from '../../utils/constants';

    export default {
        name: 'sidenav',
        components: { Hamburger },
        data() {
            return {
                links: sidenavData.links
            };
        },
        computed: {
            sidenavStatus() {
                return this.$store.state.sidenav.status;
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

<style lang="scss" src="./sidenav.scss" scoped></style>
