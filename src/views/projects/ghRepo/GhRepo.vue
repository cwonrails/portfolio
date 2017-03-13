<template>
    <div class="repo card-shadow">
        <div class="repo-content">
            <div class="data">
                <h2 class="name hover-border">{{repo.name}}</h2>
                <p class="description">{{repo.description}}</p>
            </div>
            <ul class="info">
                <li :title="starsTooltip" class="item link link-hover-grow stars" v-if="stars"><i class="icon fi-star"></i>{{stars}}</li>
                <li :title="watchersTooltip" class="item link link-hover-grow watchers" v-if="watchers"><i class="icon fi-eye"></i>{{watchers}}</li>
                <li :title="issuesTooltip" class="item link link-hover-grow issues" v-if="issues"><i class="icon fi-flag"></i>{{issues}}</li>
                <li :title="forksTooltip" class="item link link-hover-grow forks" v-if="forks"><i class="icon fi-torsos-all"></i>{{forks}}</li>
            </ul>
            <a class="btn-secondary learn-more link" :href="repo.html_url" target="_blank">
                <span class="text">See more</span>
                <i class="fi-link"></i>
            </a>
        </div>
    </div>
</template>

<script>
    const createTooltip = (name, count) => `Repository has ${count} ${name}`;

    export default {
        name: 'gh-repo',
        props: ['repo'],
        computed: {
            stars() {
                return this.repo.stargazers_count;
            },
            starsTooltip() {
                const name = this.stars === 1 ? 'star' : 'stars';
                return createTooltip(name, this.stars);
            },
            watchers() {
                return this.repo.watchers_count;
            },
            watchersTooltip() {
                const name = this.watchers === 1 ? 'watcher' : 'watchers';
                return createTooltip(name, this.watchers);
            },
            issues() {
                return this.repo.open_issues_count;
            },
            issuesTooltip() {
                const name = this.issues === 1 ? 'issue' : 'issues';
                return createTooltip(name, this.issues);
            },
            forks() {
                return this.repo.forks_count;
            },
            forksTooltip() {
                const name = this.forks === 1 ? 'fork' : 'forks';
                return createTooltip(name, this.forks);
            }
        }
    };

</script>

<style lang="scss" src="./ghRepo.scss" scoped></style>
