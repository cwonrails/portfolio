<template>
    <div id="app">
        <Navbar></Navbar>
        <Backdrop></Backdrop>
        <sidenav></sidenav>
        <transition name="viewFade" appear>
            <router-view></router-view>
        </transition>
    </div>
</template>

<script>
    import Navbar from './components/navbar/Navbar';
    import Backdrop from './components/backdrop/Backdrop';
    import Sidenav from './components/sidenav/Sidenav';

    export default {
        name: 'app',
        components: {
            Navbar,
            Backdrop,
            Sidenav
        }
    };

</script>

<style lang="scss">
    @import './styles/global.scss';

</style>
