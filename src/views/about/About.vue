<template>
    <div class="about view">
        This is the about section, it's still under construction!
    </div>
</template>

<script>
    export default {
        name: 'about',
        data() { return {}; },
    };

</script>

<style lang="scss">
    @import '../../styles/variables';
    @import '../../styles/mixins';
    @include mobile-width-breakpoint {
        .about.view {
            text-align: center;
            padding: 100px 25px;
        }
    }

</style>
