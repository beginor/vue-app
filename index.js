function isProd() {
  var mode = getQueryString('mode');
  if (!!mode) {
    if (mode === 'prod') { return true; }
    if (mode === 'dev') { return false; }
  }
  return ['127.0.0.1', 'localhost'].indexOf(location.hostname) === -1;
}

function getQueryString(key) {
  const arr = location.search.substring(1).split('&');
  const query = { };
  for (const item of arr) {
    const itemArr = item.split('=');
    query[itemArr[0]] = itemArr[1];
  }
  return query[key];
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
  var res = await fetch(url);
  var text = await res.text();
  var el = document.createElement('script');
  el.type = 'importmap';
  el.textContent = text;
  document.body.appendChild(el);
}
