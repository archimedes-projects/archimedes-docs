(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{101:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return f}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=o.a.createContext({}),s=function(e){var t=o.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=s(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=s(r),d=n,f=p["".concat(c,".").concat(d)]||p[d]||b[d]||a;return r?o.a.createElement(f,l(l({ref:t},u),{},{components:r})):o.a.createElement(f,l({ref:t},u))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,c=new Array(a);c[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:n,c[1]=l;for(var u=2;u<a;u++)c[u]=r[u];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},89:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return l})),r.d(t,"toc",(function(){return i})),r.d(t,"default",(function(){return s}));var n=r(3),o=r(7),a=(r(0),r(101)),c={slug:"hello-world",title:"Hello world",author:"C\xe9sar Alberca",author_title:"Maintainer of Archimedes",author_url:"https://github.com/cesalberca",author_image_url:"https://avatars.githubusercontent.com/u/7138463?s=400&u=d75a9b21cc8f9ba10c8686f37472c80c6c042b5c&v=4",tags:["hello","docusaurus"]},l={permalink:"/archimedes-docs/blog/hello-world",editUrl:"https://github.com/archimedes-projects/edit/master/website/blog/blog/2021-02-09-hello-world.md",source:"@site/blog/2021-02-09-hello-world.md",description:"Welcome to this blog. This blog is created with Docusaurus 2 alpha.",date:"2021-02-09T00:00:00.000Z",tags:[{label:"hello",permalink:"/archimedes-docs/blog/tags/hello"},{label:"docusaurus",permalink:"/archimedes-docs/blog/tags/docusaurus"}],title:"Hello world",readingTime:.12,truncated:!0},i=[],u={toc:i};function s(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Welcome to this blog. This blog is created with ",Object(a.b)("a",{parentName:"p",href:"https://v2.docusaurus.io/"},Object(a.b)("strong",{parentName:"a"},"Docusaurus 2 alpha")),"."))}s.isMDXComponent=!0}}]);