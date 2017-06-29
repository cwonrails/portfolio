<template>
    <div id="projects" class="view">
        <transition name="fadeIn" mode="out-in">
            <section v-if="!repos" class="wrapper spinner-wrapper" key="spinner">
                <spinner size="200px"></spinner>
            </section>
            <section v-else class="wrapper repos" key="repos">
                <h1 class="main-title">GitHub</h1>
                <gh-repo v-for="repo in reposByStars" :key="repo.name" v-if="repo.description" :repo="repo"></gh-repo>
            </section>
        </transition>
    </div>
</template>

<script>
    import store from '../../store';
    import Spinner from '../../components/spinner/Spinner';
    import GhRepo from './ghRepo/GhRepo';
    import CONSTANTS from '../../utils/constants.json';
    import { GithubRes } from '../../resources';

    export default {
        name: 'projects',
        components: { Spinner, GhRepo },
        computed: {
            repos() {
                return store.state.fetched_data.my_repos;
            },
            /* leaving this as it is but will implement dynamic sorting later */
            reposByStars() {
                return this.repos.sort((r1, r2) => r2.stargazers_count - r1.stargazers_count);
            }
        },
        beforeRouteEnter(_1, _2, next) {
            next();
            if (!store.state.fetched_data.my_repos) {
                GithubRes.fetchMyRepos()
                    .then(res => store.commit(CONSTANTS.MUTATIONS.UPDATE_MY_REPOS, res.body))
                    .catch(err => console.warn(`[${err.status}] Couldn't fetch repos.`));
            }
        }
    };

</script>

<style lang="scss" scoped>
    @import 'src/styles/variables';
    @import 'src/styles/mixins';
    #projects {
        .wrapper {
            @include common-transition;
            padding: 25px 0px;
            text-align: center;
            @include mobile-width-breakpoint {
                padding: 50px 0;
            }
        }
        .spinner-wrapper {
            @include mobile-width-breakpoint {
                 padding-top: 125px;
            }
        }
        .main-title {
            margin: auto;
            padding-bottom: 15px;
            width: 50%;
            border-bottom: 2px solid $orange-color;
        }
    }

</style>
