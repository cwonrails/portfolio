<template>
    <div class="hamburger-container" v-bind:class="sidenavStatus" @click="toggleSidenav">
        <div class="bar arrow-top"></div>
        <div class="bar arrow-middle"></div>
        <div class="bar arrow-bottom"></div>
    </div>
</template>

<script>
    import CONSTANTS from '../../../utils/constants';

    export default {
        name: 'hamburger',
        computed: {
            sidenavStatus() {
                return this.$store.state.sidenav_status;
            }
        }, 
        methods: {
            toggleSidenav() {
                this.$store.commit(CONSTANTS.MUTATIONS.SIDENAV_TOGGLE);
            }
        }
    };

</script>

<style lang="scss" src="./hamburger.scss" scoped></style>
