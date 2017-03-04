<template>
    <div class="projects view">
        <transition name="fadeIn" mode="out-in">
            <section v-if="!repos" key="spinner">
                <spinner size="200px"></spinner>
            </section>
            <section v-else="repos" key="repos">
                <article v-for="repo in repos">
                    <a target="_blank" v-bind:href="repo.html_url">{{repo.name}}</a>
                </article>
            </section>
        </transition>
    </div>
</template>

<script>
    import store from '../../store';
    import Spinner from '../../components/spinner/Spinner';
    import CONSTANTS from '../../utils/constants';
    import { GithubRes } from '../../resources';

    export default {
        name: 'projects',
        components: { Spinner },
        computed: {
            repos() {
                return store.state.my_repos;
            }
        },
        beforeRouteEnter(_1, _2, next) {
            next();
            if (!store.state.my_repos) {
                GithubRes.fetchMyRepos()
                    .then(res => store.commit(CONSTANTS.MUTATIONS.UPDATE_MY_REPOS, res.body))
                    .catch(err => console.warn(`[${err.status}] Couldn't fetch repos.`));
            }
        }
    };

</script>

<style src="./projects.style.scss" lang="scss" scoped></style>
