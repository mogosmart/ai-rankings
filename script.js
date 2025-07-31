// Hugging Face 模型排行榜：按 downloads 排序
async function loadHF() {
  const resp = await fetch('https://huggingface.co/api/models?sort=downloads&limit=10');
  const models = await resp.json();
  const ul = document.getElementById('hf-list');
  models.forEach(m => {
    const li = document.createElement('li');
    li.innerHTML = `<a href=" " target="_blank" rel="noopener">${m.id}</a > · 下载量: ${m.downloads}`;
    ul.appendChild(li);
  });
}

// GitHub 搜索 AI 相关项目（使用 topic:ai 或 description），按 stars 排序
async function loadGitHubAI() {
  const resp = await fetch('https://api.github.com/search/repositories?q=topic:ai+language:Python&sort=stars&order=desc&per_page=10');
  const items = (await resp.json()).items || [];
  const ul = document.getElementById('gh-ai-list');
  items.forEach(repo => {
    const li = document.createElement('li');
    li.innerHTML = `<a href="${repo.html_url}" target="_blank" rel="noopener">${repo.full_name}</a > · ⭐ ${repo.stargazers_count}`;
    ul.appendChild(li);
  });
}

// GitHub 搜索生命科学项目 （使用 topic:life science  或 description），按 stars 排序
async function loadGitHubLifeScience() {
  const resp = await fetch('https://api.github.com/search/repositories?q=topic:life-sciences+language:Python&sort=stars&order=desc&per_page=10');
  const items = (await resp.json()).items || [];
  const ul = document.getElementById('gh-life-list');
  items.forEach(repo => {
    const li = document.createElement('li');
    li.innerHTML = `<a href="${repo.html_url}" target="_blank" rel="noopener">${repo.full_name}</a > · ⭐ ${repo.stargazers_count}`;
    ul.appendChild(li);
  });
}

// 加载所有
loadHF();
loadGitHubAI();
loadGitHubLifeScience();
