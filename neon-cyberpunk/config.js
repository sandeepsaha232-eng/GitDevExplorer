// config.js - Application Configuration, State, and Element references
let state = { user: null, repos: [], langs: {} };

const elements = {
    form: document.getElementById('search-form'),
    input: document.getElementById('search-input'),
    btn: document.getElementById('search-btn'),
    error: document.getElementById('error-alert'),
    loading: document.getElementById('loading-skeleton'),
    dashboard: document.getElementById('dashboard-wrapper'),
    apiRem: document.getElementById('api-remaining'),
    apiLimit: document.getElementById('api-limit'),
    apiDot: document.getElementById('api-status-dot'),
    avatar: document.getElementById('user-avatar'),
    name: document.getElementById('user-name'),
    username: document.getElementById('user-username'),
    bio: document.getElementById('user-bio'),
    link: document.getElementById('user-github-link'),
    location: document.getElementById('user-location'),
    website: document.getElementById('user-website'),
    joined: document.getElementById('user-joined'),
    reposCount: document.getElementById('metric-repos'),
    followers: document.getElementById('metric-followers'),
    following: document.getElementById('metric-following'),
    langList: document.getElementById('language-breakdown'),
    repoGrid: document.getElementById('repos-grid'),
    repoCountLabel: document.getElementById('repos-display-count')
};

const langColors = {
    'JavaScript': '#f1e05a', 'TypeScript': '#3178c6', 'HTML': '#e34c26',
    'CSS': '#563d7c', 'Python': '#3572A5', 'Java': '#b07219', 'Go': '#00ADD8'
};
