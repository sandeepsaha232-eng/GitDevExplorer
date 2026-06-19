// main.js - Core entry point and Event bindings
elements.form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (elements.input.value.trim()) {
        queryGitHub(elements.input.value.trim());
    }
});

window.addEventListener('DOMContentLoaded', () => {
    queryGitHub('octocat');
});
