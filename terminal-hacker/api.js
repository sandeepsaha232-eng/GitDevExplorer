// api.js - GitHub API queries
function printLog(msg) {
    const time = new Date().toLocaleTimeString();
    elements.consoleFeed.innerHTML += `<div class="console-line"><span class="timestamp">[${time}]</span> <span class="log-msg">${msg}</span></div>`;
    elements.consoleFeed.scrollTop = elements.consoleFeed.scrollHeight;
}

function parseHeaders(headers) {
    const limit = headers.get('X-RateLimit-Limit');
    const remaining = headers.get('X-RateLimit-Remaining');
    if (limit && remaining) {
        stats.limit = limit;
        stats.remaining = remaining;
        elements.limitRemaining.textContent = remaining;
        elements.limitVal.textContent = limit;
        elements.limitIndicator.className = 'status-indicator ' + (remaining > 30 ? 'indicator-online' : remaining > 10 ? 'indicator-warning' : 'indicator-offline');
    }
}

async function queryGitHub(username) {
    elements.loading.classList.remove('terminal-hidden');
    elements.mainframe.classList.add('terminal-hidden');
    elements.error.classList.add('terminal-hidden');
    elements.btn.disabled = true;

    printLog(`Connecting... Query user: "${username}"`);

    try {
        printLog(`GET /users/${username}...`);
        const userRes = await fetch(`https://api.github.com/users/${username}`);
        parseHeaders(userRes.headers);
        if (!userRes.ok) throw new Error(userRes.status === 404 ? 'NOT_FOUND' : 'API_ERROR');
        stats.profile = await userRes.json();

        printLog(`GET /users/${username}/repos...`);
        const reposRes = await fetch(`https://api.github.com/users/${username}/repos?per_page=100&sort=updated`);
        parseHeaders(reposRes.headers);
        stats.repos = reposRes.ok ? await reposRes.json() : [];

        printLog(`Processing codebase languages...`);
        compileLangs();
        render();
        elements.mainframe.classList.remove('terminal-hidden');
        printLog(`Compilation finished: SUCCESS.`);
    } catch (err) {
        printLog(`ERROR: Connection aborted. ${err.message}`);
        elements.error.classList.remove('terminal-hidden');
        elements.error.innerHTML = `<strong>ALERT: ${err.message === 'NOT_FOUND' ? 'USER_ABSENT' : 'SYSTEM_ERROR'}</strong>
            <p>${err.message === 'NOT_FOUND' ? 'Profile identifier invalid.' : 'Connection breakdown.'}</p>`;
    } finally {
        elements.loading.classList.add('terminal-hidden');
        elements.btn.disabled = false;
    }
}

function compileLangs() {
    stats.languages = {};
    stats.repos.forEach(r => {
        if (r.language) stats.languages[r.language] = (stats.languages[r.language] || 0) + 1;
    });
}
