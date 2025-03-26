---
title: Recursos de aprendizaje
description: Link de los recursos de las documentaciones
---

## TEST

```js {% meta="'return true;' ins='inserted' del='deleted'" %}
function demo() {
  console.log('These are inserted and deleted marker types');
  // The return statement uses the default marker type
  return true;
}
```

```diff {% meta="lang='js'" %}
  function thisIsJavaScript() {
    // This entire block gets highlighted as JavaScript,
    // and we can still add diff markers to it!
-   console.log('Old code to be removed')
+   console.log('New and shiny code!')
  }
```

```bash {% title="Installing dependencies…" %}
npm install
```