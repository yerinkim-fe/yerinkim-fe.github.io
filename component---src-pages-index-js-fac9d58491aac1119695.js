(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{144:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return c}),a.d(t,"pageQuery",function(){return u});var n=a(7),r=a.n(n),i=a(0),o=a.n(i),l=a(156),s=a(167),c=(a(257),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.data.allMarkdownRemark.edges,t=this.props.location;return o.a.createElement(l.a,{location:t},o.a.createElement(s.a,{data:e}))},t}(i.Component)),u="755028477"},148:function(e,t,a){var n;e.exports=(n=a(152))&&n.default||n},149:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return g}),a.d(t,"StaticQueryContext",function(){return m}),a.d(t,"StaticQuery",function(){return p});var n=a(0),r=a.n(n),i=a(4),o=a.n(i),l=a(147),s=a.n(l);a.d(t,"Link",function(){return s.a}),a.d(t,"withPrefix",function(){return l.withPrefix}),a.d(t,"navigate",function(){return l.navigate}),a.d(t,"push",function(){return l.push}),a.d(t,"replace",function(){return l.replace}),a.d(t,"navigateTo",function(){return l.navigateTo});var c=a(148),u=a.n(c);a.d(t,"PageRenderer",function(){return u.a});var d=a(34);a.d(t,"parsePath",function(){return d.a});var m=r.a.createContext({}),p=function(e){return r.a.createElement(m.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function g(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},151:function(e,t,a){e.exports={title:"HUNDRED",author:"Junho Baik",description:"Junho Baik's blog",siteUrl:"https://junhobaik.github.io",titleLogo:function(){return a(155)},titleLogoShow:!0,bio:"Jr. FRONT END DEVELOPER",bioShow:!0,googleAnalyticsTrackingId:"UA-103592668-4",disqusShortname:"dev-hundred-blog"}},152:function(e,t,a){"use strict";a.r(t);a(33);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),l=a(49),s=a(2),c=function(e){var t=e.location,a=s.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json))};c.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=c},153:function(e){e.exports={data:{site:{siteMetadata:{title:"HUNDRED"}}}}},154:function(e,t,a){},155:function(e,t,a){e.exports=a.p+"static/profile-84a4704395a2596be588c30aae784e41.png"},156:function(e,t,a){"use strict";a(33);var n=a(153),r=a(0),i=a.n(r),o=a(4),l=a.n(o),s=a(160),c=a.n(s),u=a(149),d=a(150),m=a(157),p=(a(154),a(7)),g=a.n(p),h=function(e){function t(){return e.apply(this,arguments)||this}return g()(t,e),t.prototype.render=function(){return i.a.createElement("footer",{id:"footer"},i.a.createElement("div",{className:"copyright"},i.a.createElement("span",null,"© ",i.a.createElement("a",{href:"mailto:junhobaik@gmail.com"},"Junho Baik")," 2018. All rights reserved")),i.a.createElement("div",{className:"submenu"}))},t}(r.Component),f=a(151),E=a.n(f),y=(a(161),a(25),a(162),a(48),a(158),a(159),a(163)),v=new(a.n(y).a)({baseFontSize:"16px",baseLineHeight:1.666,headerFontFamily:["Nanum Gothic"],bodyFontFamily:["Nanum Gothic Coding"]}),w=[{name:"Nanum Gothic Coding",bold:[400,700]},{name:"Nanum Gothic",bold:[400,700]}].map(function(e){return e.bold?e.name.replace(/ /gi,"+")+":"+e.bold.toString():""+e.name.replace(/ /gi,"+")}).join("|").toString(),b=(v.rhythm,v.scale,function(e){var t=e.children,a=(e.data,e.location);return i.a.createElement(u.StaticQuery,{query:"755544856",render:function(e){var n;n=a?a.href:E.a.siteUrl;var r=function(e,t){var a={};return a=e?{display:"inline-block"}:{display:"none"},t||(a=Object.assign({},a,{width:"1.5rem",height:"1.5rem",marginRight:"0.1rem"})),a}(E.a.titleLogoShow,E.a.bioShow),o=E.a.bioShow?{}:{display:"none"};return i.a.createElement(i.a.Fragment,null,i.a.createElement(c.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:E.a.description},{name:"og:type",content:"website"},{name:"og:title",content:E.a.title},{name:"og:description",content:E.a.description},{name:"og:image",content:E.a.titleLogo()},{name:"og:url",content:n}]},i.a.createElement("link",{href:"https://fonts.googleapis.com/css?family="+w,rel:"stylesheet"}),i.a.createElement("script",{async:!0,src:"https://www.googletagmanager.com/gtag/js?id="+E.a.googleAnalyticsTrackingId}),i.a.createElement("script",null,"\n                window.dataLayer = window.dataLayer || [];\n                function gtag(){dataLayer.push(arguments);}\n                gtag('js', new Date());\n                gtag('config', '"+E.a.googleAnalyticsTrackingId+"');\n              ")),i.a.createElement("div",{id:"wrap"},i.a.createElement("header",{id:"header"},i.a.createElement("div",{className:"title"},i.a.createElement("div",{className:"title-wrap"},i.a.createElement(u.Link,{to:"/"},i.a.createElement("div",{className:"logo-img",style:r},i.a.createElement("img",{src:E.a.titleLogo(),alt:"logo"})),i.a.createElement("div",null,i.a.createElement("h1",null,E.a.title),i.a.createElement("p",{className:"bio",style:o},E.a.bio))))),i.a.createElement("div",{className:"menu"},i.a.createElement("div",{className:"home"},i.a.createElement(u.Link,{to:"/"},i.a.createElement(d.a,{icon:m.c,fixedWidth:!0,transform:"down-1"}),i.a.createElement("span",null,"Home"))),i.a.createElement("div",{className:"tags"},i.a.createElement(u.Link,{to:"/taglist"},i.a.createElement(d.a,{icon:m.f,fixedWidth:!0,transform:"down-1"}),i.a.createElement("span",null,"Tags"))),i.a.createElement("div",{className:"search"},i.a.createElement(u.Link,{to:"/search"},i.a.createElement(d.a,{icon:m.d,fixedWidth:!0,transform:"down-1"}),i.a.createElement("span",null,"Search"))))),i.a.createElement("article",{id:"article"},t)),i.a.createElement(h,null))},data:n})});b.propTypes={children:l.a.node.isRequired,location:l.a.object.isRequired};t.a=b},165:function(e,t,a){},166:function(e,t,a){},167:function(e,t,a){"use strict";a(75),a(48);var n=a(7),r=a.n(n),i=a(0),o=a.n(i),l=a(150),s=a(157),c=(a(165),a(4)),u=a.n(c),d=a(147),m=a.n(d),p=a(172),g=a.n(p),h=a(177),f=a.n(h),E=a(168),y=(a(166),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.post,t=e.fields.slug,a=g()(e,"frontmatter.title")||t,n=e.excerpt,r=e.frontmatter.date,i=e.frontmatter.tags.map(function(e,t){return"Empty Tag"!==e?o.a.createElement(m.a,{to:"/tags/"+f.a.kebabCase(e),className:"tag",key:"tag-"+e},"#",o.a.createElement("span",{className:"tag-name"},e)):null});return o.a.createElement("div",{className:"post-link",key:t,style:this.props.showCnt-1>=this.props.index?{display:"inline-block"}:{display:"none"}},o.a.createElement(m.a,{to:t},o.a.createElement("h2",{className:"title hover"},a)),o.a.createElement("span",{className:"excerpt"},n),o.a.createElement("div",{className:"sub"},o.a.createElement("div",{className:"date"},o.a.createElement(l.a,{icon:E.a}),o.a.createElement("span",null,r)),o.a.createElement("div",{className:"tags-list"},i)))},t}(i.Component));y.propTypes={post:u.a.object.isRequired,title:u.a.string};var v=y,w=function(e){function t(t){var a;return(a=e.call(this,t)||this).onScroll=function(){a.state.currentPostCnt<a.props.data.length&&window.scrollY+window.innerHeight>=a.state.loadElPoint&&!a.state.isLoading&&(a.setState({isLoading:!0}),setTimeout(function(){a.setState({currentPostCnt:a.state.currentPostCnt+a.state.loadPostCnt,isLoading:!1}),a.setLoadElPoint()},200))},a.setLoadElPoint=function(){a.setState({loadElPoint:document.querySelector(".load-point").offsetTop})},a.state={loadPostCnt:7,currentPostCnt:7,isLoading:!1,loadElPoint:0},a}r()(t,e);var a=t.prototype;return a.componentDidMount=function(){this.setLoadElPoint(),window.addEventListener("scroll",this.onScroll,!1)},a.componentWillUnmount=function(){window.removeEventListener("scroll",this.onScroll,!1)},a.render=function(){var e=this,t=this.props,a=t.data,n=t.title,r=a.filter(function(e){return!!e.node.frontmatter.date}).map(function(t,a){return o.a.createElement(v,{key:t.node.fields.slug,post:t.node,index:a,showCnt:e.state.currentPostCnt})});return o.a.createElement("div",{id:"PostList"},n?o.a.createElement("h1",{className:"list-title"},n):null,o.a.createElement("div",{className:"list"},r),o.a.createElement("div",{className:"load"},o.a.createElement("div",{className:"loading"},o.a.createElement("div",{className:"spinner",style:this.state.isLoading?{display:"inline-block"}:{display:"none"}},o.a.createElement(l.a,{className:"blink",icon:s.e,size:"2x"}))),o.a.createElement("div",{className:"load-point"})))},t}(i.Component);t.a=w},257:function(e,t,a){}}]);
//# sourceMappingURL=component---src-pages-index-js-fac9d58491aac1119695.js.map