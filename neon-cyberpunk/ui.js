// ui.js - Dashboard Views Builder
function renderProfile() {
    const u = state.user;
    elements.avatar.src = u.avatar_url;
    elements.name.textContent = u.name || u.login;
    elements.username.textContent = `@${u.login}`;
    elements.bio.textContent = u.bio || 'No biography provided.';
    elements.link.href = u.html_url;
    
    document.getElementById('location-container').style.display = u.location ? 'flex' : 'none';
    elements.location.textContent = u.location || '';
    
    document.getElementById('website-container').style.display = u.blog ? 'flex' : 'none';
    elements.website.href = u.blog && (u.blog.startsWith('http') ? u.blog : `https://${u.blog}`);
    elements.website.textContent = u.blog || '';
    
    elements.joined.textContent = new Date(u.created_at).toLocaleDateString(undefined, { year: 'numeric', month: 'short' });
    elements.reposCount.textContent = u.public_repos;
    elements.followers.textContent = u.followers;
    elements.following.textContent = u.following;

    // Render Languages
    elements.langList.innerHTML = '';
    const sortedLangs = Object.entries(state.langs).sort((a,b) => b[1] - a[1]).slice(0, 5);
    const total = Object.values(state.langs).reduce((a,b) => a+b, 0);
    sortedLangs.forEach(([name, count]) => {
        const pct = Math.round((count / total) * 100);
        const col = langColors[name] || '#6b7280';
        elements.langList.innerHTML += `
            <div class="lang-item">
                <div class="lang-text"><span><span class="lang-color-indicator" style="background-color:${col}"></span>${name}</span><span>${pct}%</span></div>
                <div class="lang-progress-track"><div class="lang-progress-fill" style="background-color:${col};width:${pct}%"></div></div>
            </div>`;
    });

    // Render Repos
    elements.repoGrid.innerHTML = '';
    const topRepos = [...state.repos].sort((a,b) => b.stargazers_count - a.stargazers_count).slice(0, 6);
    elements.repoCountLabel.textContent = `Showing top ${topRepos.length} repos`;
    topRepos.forEach(r => {
        const col = langColors[r.language] || '#6b7280';
        elements.repoGrid.innerHTML += `
            <a href="${r.html_url}" target="_blank" class="repo-card">
                <div class="repo-card-title">
                    <svg class="repo-icon" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 1 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 0 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 0 1 1-1h8z"/></svg>
                    <span>${r.name}</span>
                </div>
                <p class="repo-card-desc">${r.description || 'No description.'}</p>
                <div class="repo-card-meta">
                    <span class="repo-meta-item"><span class="lang-color-indicator" style="background-color:${col}"></span>${r.language || 'HTML'}</span>
                    <span class="repo-meta-item">★ ${r.stargazers_count}</span>
                    <span class="repo-meta-item">⑂ ${r.forks_count}</span>
                </div>
            </a>`;
    });
}
