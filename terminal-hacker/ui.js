// ui.js - Dashboard Views renderer
function render() {
    const u = stats.profile;
    elements.avatar.src = u.avatar_url;
    elements.name.textContent = u.name || u.login;
    elements.username.textContent = `@${u.login}`;
    elements.bio.textContent = u.bio || 'Bio unpopulated.';
    elements.link.href = u.html_url;

    elements.rowLoc.classList.toggle('terminal-hidden', !u.location);
    elements.labelLoc.textContent = u.location || '';

    elements.rowWeb.classList.toggle('terminal-hidden', !u.blog);
    elements.labelWeb.href = u.blog && (u.blog.startsWith('http') ? u.blog : `https://${u.blog}`);
    elements.labelWeb.textContent = u.blog || '';

    elements.joined.textContent = new Date(u.created_at).toLocaleDateString(undefined, { year: 'numeric', month: '2-digit' });
    elements.reposCount.textContent = u.public_repos;
    elements.followers.textContent = u.followers;
    elements.following.textContent = u.following;

    // Languages
    elements.langStack.innerHTML = '';
    const sorted = Object.entries(stats.languages).sort((a,b) => b[1] - a[1]).slice(0, 5);
    const total = Object.values(stats.languages).reduce((a,b) => a+b, 0);
    sorted.forEach(([name, val]) => {
        const pct = Math.round((val / total) * 100);
        const col = colors[name] || '#33ff33';
        elements.langStack.innerHTML += `
            <div class="terminal-lang-row">
                <div class="lang-legend"><span><span class="legend-dot" style="background-color:${col}"></span>${name}</span><span>${pct}%</span></div>
                <div class="terminal-progress-track"><div class="terminal-progress-fill" style="background-color:${col};width:${pct}%"></div></div>
            </div>`;
    });

    // Repos
    elements.repoGrid.innerHTML = '';
    const topRepos = [...stats.repos].sort((a,b) => b.stargazers_count - a.stargazers_count).slice(0, 6);
    elements.countBadge.textContent = `[TOP ${topRepos.length} REPOSITORIES]`;
    topRepos.forEach(repo => {
        const col = colors[repo.language] || '#33ff33';
        elements.repoGrid.innerHTML += `
            <a href="${repo.html_url}" target="_blank" class="terminal-card">
                <div>
                    <div class="card-title"><span class="prompt-arrow">&gt;</span><span>${repo.name}</span></div>
                    <p class="card-desc">${repo.description || 'No description notes.'}</p>
                </div>
                <div class="card-inner-meta">
                    <span class="meta-badge"><span class="legend-dot" style="background-color:${col}"></span>${repo.language || 'HTML'}</span>
                    <span class="meta-badge">★ ${repo.stargazers_count}</span>
                    <span class="meta-badge">⑂ ${repo.forks_count}</span>
                </div>
            </a>`;
    });
}
