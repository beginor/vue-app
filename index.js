function isProd() {
  const mode = getQueryString('mode');
  if (!!mode) {
    if (mode === 'prod') { return true; }
    if (mode === 'dev') { return false; }
  }
  return ['127.0.0.1', 'localhost'].indexOf(location.hostname) === -1;
}

function getQueryString(key) {
  const query = new URLSearchParams(location.search);
  return query.get(key);
}

async function loadScripts(scripts) {
  for (const script of scripts) {
    await loadScript(script);
  }
}

function loadScript({ src, type }) {
  if (type === 'importmap') {
    return loadImportmap(src);
  }
  return new Promise((resolve, reject) => {
    const el = document.createElement('script');
    type = type || 'text/javascript';
    el.setAttribute('type', type);
    el.setAttribute('src', src);
    if (type === 'text/javascript' || type === 'module') {
      el.onload = () => resolve();
      el.onerror = ex => reject(ex);
    }
    else {
      resolve();
    }
    document.body.appendChild(el);
  });
}

async function loadImportmap(url) {
  if (Array.isArray(url)) {
    const importMap = {};
    for (const u of url) {
      const res = await fetch(u);
      const json = await res.json();
      Object.assign(importMap, json);
    }
    createImportMapElement(importMap)
  }
  else {
    const res = await fetch(url);
    const importMap = await res.json();
    createImportMapElement(importMap);
  }
}

function createImportMapElement(importMap) {
  const el = document.createElement('script');
  el.type = 'importmap';
  el.textContent = JSON.stringify(importMap);
  document.body.appendChild(el);
}
