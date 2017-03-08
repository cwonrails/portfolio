<template>
    <transition name="fadeIn">
        <div class="backdrop-container" v-if="sidenavOpened" @click="closeSidenav"></div>
    </transition>
</template>

<script>
    import CONSTANTS from '../../utils/constants';

    export default {
        name: 'backdrop',
        computed: {
            sidenavOpened() {
                return this.$store.state.sidenav_status === CONSTANTS.CLASSES.OPENED;
            }
        },
        methods: {
            closeSidenav() {
                this.$store.commit(CONSTANTS.MUTATIONS.SIDENAV_CLOSE);
            }
        }
    };

</script>

<style lang="scss" src="./backdrop.scss" scoped></style>
