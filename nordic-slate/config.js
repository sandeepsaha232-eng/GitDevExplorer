// config.js - Configuration, State, and Element references
let userData = null;
let userRepos = [];
let calculatedLangs = {};

const elements = {
    form: document.getElementById('search-form'),
    input: document.getElementById('username-input'),
    btn: document.getElementById('submit-button'),
    error: document.getElementById('error-container'),
    loading: document.getElementById('loading-skeleton'),
    dashboard: document.getElementById('profile-dashboard'),
    apiRem: document.getElementById('rate-remaining'),
    apiLimit: document.getElementById('rate-limit'),
    apiDot: document.getElementById('rate-indicator'),
    avatar: document.getElementById('user-avatar'),
    name: document.getElementById('user-name'),
    username: document.getElementById('user-login'),
    bio: document.getElementById('user-bio'),
    link: document.getElementById('github-link'),
    location: document.getElementById('user-location'),
    blog: document.getElementById('user-blog'),
    joined: document.getElementById('user-joined'),
    reposCount: document.getElementById('repo-count'),
    followers: document.getElementById('followers-count'),
    following: document.getElementById('following-count'),
    langsList: document.getElementById('languages-list'),
    reposGrid: document.getElementById('repos-grid'),
    featuredCount: document.getElementById('featured-repos-count')
};

const colors = {
    'JavaScript': '#f1e05a', 'TypeScript': '#3178c6', 'HTML': '#e34c26',
    'CSS': '#563d7c', 'Python': '#3572A5', 'Java': '#b07219', 'Go': '#00ADD8'
};
