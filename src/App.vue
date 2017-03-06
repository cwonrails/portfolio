<template>
    <div id="app">
        <backdrop></backdrop>
        <sidenav></sidenav>
        <transition name="viewFade" appear>
            <router-view></router-view>
        </transition>
    </div>
</template>

<script>
    import Backdrop from './components/backdrop/Backdrop';
    import Sidenav from './components/sidenav/Sidenav';

    export default {
        name: 'app',
        components: {
            Backdrop,
            Sidenav
        }
    };

</script>

<style lang="scss">
    @import './styles/global.scss';

</style>
