// 加载 Hugging Face 热门模型
async function loadHuggingFace() {
  const res = await fetch('https://huggingface.co/api/models?sort=likes&limit=10');
  const models = await res.json();
  const ul = document.getElementById('hf-list');
  models.forEach(model => {
    const li = document.createElement('li');
    li.innerHTML = `<a href=" " target="_blank">${model.modelId}</a > - ❤ ${model.likes}`;
    ul.appendChild(li);
  });
}

// 加载 GitHub 热门 AI 项目
async function loadGitHubAI() {
  const res = await fetch('https://api.github.com/search/repositories?q=artificial+intelligence+in:description+language:Python&sort=stars&order=desc');
  const data = await res.json();
  const ul = document.getElementById('gh-ai-list');
  data.items.slice(0, 10).forEach(repo => {
    const li = document.createElement('li');
    li.innerHTML = `<a href="${repo.html_url}" target="_blank">${repo.full_name}</a > - ⭐ ${repo.stargazers_count}`;
    ul.appendChild(li);
  });
}

// 加载 GitHub 热门生命科学项目
async function loadGitHubLifeScience() {
  const res = await fetch('https://api.github.com/search/repositories?q=life+science+in:description+language:Python&sort=stars&order=desc');
  const data = await res.json();
  const ul = document.getElementById('gh-life-list');
  data.items.slice(0, 10).forEach(repo => {
    const li = document.createElement('li');
    li.innerHTML = `<a href="${repo.html_url}" target="_blank">${repo.full_name}</a > - ⭐ ${repo.stargazers_count}`;
    ul.appendChild(li);
  });
}

// 执行加载
loadHuggingFace();
loadGitHubAI();
loadGitHubLifeScience();