import{d as h,l as k,m as f,o,c as t,F as i,n as a,e as r,t as l,j as n}from"./app.8f9fe947.js";const b={class:"bookmarks"},u={style:{"font-size":"2em","line-height":"2"}},x={class:"books"},_=["title","href"],g={class:"top"},v={class:"ico-wrapper"},w=["src"],y={class:"book-title"},j={class:"bottom"},D=h({__name:"bookmark",setup(z){const c=k(),d=f(c.bookmark);return(B,F)=>(o(),t("ul",b,[(o(!0),t(i,null,a(d.value,(p,m)=>(o(),t("li",{key:m},[(o(!0),t(i,null,a(p.lists,s=>(o(),t("div",{key:s.title},[r("h1",u,l(s.title),1),r("div",x,[(o(!0),t(i,null,a(s.cards,e=>(o(),t("a",{key:e.url,title:e.customDescription||e.title,href:e.url,target:"_blank",class:"book"},[r("div",g,[r("div",v,[r("img",{src:e.favIconUrl,class:"ico"},null,8,w)]),r("div",y,l(e.customTitle||e.title),1)]),r("div",j,l(e.customDescription||e.title),1)],8,_))),128))])]))),128))]))),128))]))}});typeof n=="function"&&n(D);export{D as default};