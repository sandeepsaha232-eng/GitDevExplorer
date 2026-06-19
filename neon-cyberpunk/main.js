// main.js - Core app entrypoint and Event attachments
elements.form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (elements.input.value.trim()) {
        searchUser(elements.input.value.trim());
    }
});

window.addEventListener('DOMContentLoaded', () => {
    searchUser('octocat');
});
