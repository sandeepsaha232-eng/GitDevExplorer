// config.js - Configuration, State, and Element references
const stats = { profile: null, repos: [], languages: {}, limit: 60, remaining: 60 };

const elements = {
    form: document.getElementById('cli-form'),
    input: document.getElementById('cli-input'),
    btn: document.getElementById('run-btn'),
    consoleFeed: document.getElementById('console-feed'),
    error: document.getElementById('error-feed'),
    loading: document.getElementById('skeleton-loader'),
    mainframe: document.getElementById('mainframe'),
    limitVal: document.getElementById('limit-val'),
    limitRemaining: document.getElementById('limit-remaining'),
    limitIndicator: document.getElementById('limit-indicator'),
    avatar: document.getElementById('avatar-img'),
    name: document.getElementById('dev-name'),
    username: document.getElementById('dev-username'),
    bio: document.getElementById('dev-bio'),
    link: document.getElementById('visit-link'),
    rowLoc: document.getElementById('row-loc'),
    labelLoc: document.getElementById('label-loc'),
    rowWeb: document.getElementById('row-web'),
    labelWeb: document.getElementById('label-web'),
    joined: document.getElementById('label-joined'),
    reposCount: document.getElementById('count-repos'),
    followers: document.getElementById('count-followers'),
    following: document.getElementById('count-following'),
    langStack: document.getElementById('lang-stack'),
    repoGrid: document.getElementById('repo-shell-grid'),
    countBadge: document.getElementById('count-badge')
};

const colors = {
    'JavaScript': '#f1e05a', 'TypeScript': '#3178c6', 'HTML': '#e34c26',
    'CSS': '#563d7c', 'Python': '#3572A5', 'Java': '#b07219', 'Go': '#00ADD8'
};
