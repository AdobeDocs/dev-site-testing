(self.webpackChunkdev_site_product_template=self.webpackChunkdev_site_product_template||[]).push([[206],{9536:function(e,t,n){"use strict";var r=n(6156),i=(n(8559),n(5007)),a=n(5444),o=n(4983),l=n(4922),s=n(7791),d=n(2390),u=n(8094),p=n(870),c=n(4148),v=n(7116),m=n(4955),h=n(6910),g=n(7672),f=n(553),b=n(739),y=n(8249),x=n(7288);function P(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function w(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?P(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):P(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Z=function(e){for(var t=e.childrenArray,n=e.query,r=e.hasSideNav,a=[],o=null,l=null,s=function(){var e=t[0],s=0;Object.keys(x.a).forEach((function(u){var p;(null==e||null===(p=e.props)||void 0===p?void 0:p.mdxType)===u&&function(){s++;var u=[];if((e.props.slots||e.props.repeat)&&function(){for(var n=Math.max(parseInt(e.props.repeat)||1,1),r=function(r){u=u.concat((e.props.slots||"element").split(",").map((function(e,i){return[""+e.trim()+(1===n?"":r),t[u.length+i+1]]})))},i=0;i<n;i++)r(i)}(),u.length){s+=u.length;var p=Object.fromEntries(u);"Variant"===e.props.mdxType&&(p.query=n),"Hero"===e.props.mdxType&&r&&(p.width="calc("+d.Av+" - "+d.dP+");");var c=(0,i.cloneElement)(e,w({},p));"Hero"===e.props.mdxType?o=o||c:"Resources"===e.props.mdxType?l=l||c:a.push(c)}else a.push(e)}()})),0===s&&(s++,a.push(e)),t=t.splice(s)};t.length;)s();return{filteredChildren:a,heroChild:o,resourcesChild:l}},O={name:"eibcz6",styles:"display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;margin-top:var(--spectrum-global-dimension-size-800);margin-bottom:var(--spectrum-global-dimension-size-400)"},j={name:"1ggp1wf",styles:"margin-right:var(--spectrum-global-dimension-size-400)"},C={name:"zjik7",styles:"display:flex"},z={name:"7wiue4",styles:"align-items:center;justify-content:center;display:flex;flex-direction:column"};t.Z=function(e){var t,n=e.children,r=e.pageContext,P=e.query,A=(0,i.useContext)(s.Z),D=A.hasSideNav,S=A.siteMetadata,k=A.location,M=A.allSitePage,T=A.allMdx,_=A.allGithub,N=A.allGithubContributors,q=void 0===r,E=i.Children.toArray(n);if(q||"none"===(null==r||null===(t=r.frontmatter)||void 0===t?void 0:t.layout)){var L=Z({childrenArray:(0,b.L)(E),query:P,hasSideNav:D}).filteredChildren;return q?(0,l.tZ)(o.MDXProvider,null,L):(0,l.tZ)(o.MDXProvider,{components:w(w({},y.t),x.a)},L,(0,l.tZ)(u.$,{hasSideNav:D}))}var X,Y,G,H,R,$,I,V,B,F,J,K=(0,d.kR)(k.pathname,S.subPages),Q=(0,d.P4)(k.pathname,S.subPages),U=(0,d.sl)(k.pathname,S.subPages),W=U.nextPage,ee=U.previousPage,te=M.nodes.find((function(e){var t=e.path;return(0,a.dq)(t)===k.pathname})),ne=null!==(X=null==te?void 0:te.componentPath)&&void 0!==X?X:"",re=T.nodes.find((function(e){return e.fileAbsolutePath===ne})),ie=null!==(Y=null==re?void 0:re.tableOfContents)&&void 0!==Y?Y:{},ae=_.nodes[0],oe=ae.repository,le=ae.default_branch,se=ae.root,de=N.nodes.find((function(e){return e.path===ne})),ue=null!==(G=null==de?void 0:de.contributors)&&void 0!==G?G:[],pe=ne.replace(/.*\/src\/pages\//g,""),ce=(0,d.Yx)(k.pathname,S.pages),ve=(0,d.Lh)(k.pathname,S.subPages),me=[];if(ve.length)for(var he=ve[ve.length-1].level+1,ge=function(e){var t=ve.filter((function(t){return t.level===e}));t.length&&me.push(t.pop())},fe=0;fe<he;fe++)ge(fe);var be=!1;null!=r&&null!==(H=r.frontmatter)&&void 0!==H&&H.jsDoc&&(be=!0,E=(0,b.L)(E));var ye=Z({childrenArray:E,hasSideNav:D}),xe=ye.filteredChildren,Pe=ye.heroChild,we=ye.resourcesChild,Ze=D&&null===Pe,Oe=null!==Pe&&(!Pe.props.variant||"default"===Pe.props.variant),je=null!==Pe&&Pe.props.variant&&"default"!==Pe.props.variant,Ce=null==ie||null===(R=ie.items)||void 0===R||null===($=R[0])||void 0===$?void 0:$.items,ze=!Pe&&(D||be)&&Ce&&(Ce.length>1||1===Ce.length&&(null===(I=Ce[0])||void 0===I||null===(V=I.items)||void 0===V?void 0:V.length)>0||(null===(B=Ce[0])||void 0===B?void 0:B.title)),Ae=(null==K?void 0:K.path)===(null==Q||null===(F=Q[0])||void 0===F?void 0:F.path),De=[];return ze&&De.push((0,d.MY)(2)+" - var(--spectrum-global-dimension-size-400)"),D&&De.push(d.dP),(0,l.tZ)(o.MDXProvider,{components:w(w({},y.t),x.a)},(0,l.tZ)("main",{css:z},Pe&&Pe,(0,l.tZ)("div",{css:(0,l.iv)(je?"width: var(--spectrum-global-dimension-static-grid-fluid-width);":"\n                max-width: "+d.Av+";\n                margin: 0 var(--spectrum-global-dimension-size-800);\n                "," ",Oe&&"\n                h2:first-of-type {\n                  margin-top: 0 !important;\n                }\n              ","@media screen and (max-width: ",d.Av,"){max-width:none;margin:0 var(--spectrum-global-dimension-size-400);}")},(0,l.tZ)("div",{css:C},(0,l.tZ)("div",{css:(0,l.iv)("width:",je?"\n                      var(--spectrum-global-dimension-static-grid-fluid-width);\n                      text-align: center;\n                      ":(0,d.MY)(12,De),";@media screen and (max-width: ",d.Av,"){width:100%;}")},Ze&&(0,l.tZ)("div",{css:(0,l.iv)("display:flex;margin-top:var(--spectrum-global-dimension-size-500);margin-bottom:var(--spectrum-global-dimension-size-500);@media screen and (max-width: ",d.Av,"){flex-direction:column;}")},(0,l.tZ)("div",{css:j},(0,l.tZ)(m.O,{selectedTopPage:ce,selectedSubPages:me})),(0,l.tZ)("div",{css:(0,l.iv)("margin-left:auto;@media screen and (max-width: ",d.Av,"){margin-left:0;margin-top:var(--spectrum-global-dimension-size-200);}")},(0,l.tZ)(v.X,{repository:oe,branch:le,root:se,pagePath:pe}))),xe,Ze&&Ae&&(0,l.tZ)(g.x,{pages:Q}),Ze&&(0,l.tZ)(f.m,{nextPage:W,previousPage:ee}),!je&&(0,l.tZ)("div",{css:O},(0,l.tZ)("div",null,(0,l.tZ)(p.T,{repository:oe,branch:le,root:se,pagePath:pe,contributors:ue,externalContributors:null==r||null===(J=r.frontmatter)||void 0===J?void 0:J.contributors,date:ue[0]?new Date(ue[0].date).toLocaleDateString():(new Date).toLocaleDateString()})),(0,l.tZ)("div",{css:(0,l.iv)("@media screen and (max-width: ",d.Av,"){margin-top:var(--spectrum-global-dimension-size-200);}")},(0,l.tZ)(c.x,null)))),ze&&(0,l.tZ)(h.m,{tableOfContents:ie}),we&&we)),(0,l.tZ)(u.$,{hasSideNav:D})))}}}]);
//# sourceMappingURL=2dee68d8-8aa2a1e66e0912bd7b0d.js.map