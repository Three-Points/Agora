var H=Object.defineProperty,B=Object.defineProperties;var D=Object.getOwnPropertyDescriptors;var v=Object.getOwnPropertySymbols;var q=Object.prototype.hasOwnProperty,T=Object.prototype.propertyIsEnumerable;var y=(t,e,s)=>e in t?H(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s,d=(t,e)=>{for(var s in e||(e={}))q.call(e,s)&&y(t,s,e[s]);if(v)for(var s of v(e))T.call(e,s)&&y(t,s,e[s]);return t},m=(t,e)=>B(t,D(e));var O=(t,e,s)=>{if(!e.has(t))throw TypeError("Cannot "+s)};var u=(t,e,s)=>(O(t,e,"read from private field"),s?s.call(t):e.get(t)),N=(t,e,s)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,s)};import{c as R,M as k,h as W,b as G,S as z,R as F,j as g,L as S,_ as U,r as l,B as V,a as J,d as h,N as Y,e as $,f as K}from"./vendor.d7021249.js";const Q=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function s(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerpolicy&&(a.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?a.credentials="include":o.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(o){if(o.ep)return;o.ep=!0;const a=s(o);fetch(o.href,a)}};Q();var L=[{id:1,username:"paeolohiram",description:"Rockstar of the world",avatar:"https://randomuser.me/api/portraits/men/32.jpg",password:"P4ssW0rd!#"},{id:2,username:"dieloy",description:"Gamer professional and passionate designer",avatar:"https://randomuser.me/api/portraits/women/44.jpg",password:"P4ssW0rd!#"},{id:3,username:"ygreensall",description:"Singer and master communication services",avatar:"https://randomuser.me/api/portraits/men/46.jpg",password:"P4ssW0rd!#"},{id:4,username:"ubrittian",description:"Traveler lover and professional photographer",avatar:"https://api.uifaces.co/our-content/donated/3799Ffxy.jpeg",password:"P4ssW0rd!#"},{id:5,username:"roremdev",description:"\u26A1\uFE0F Software Engineer",avatar:"https://avatars.githubusercontent.com/u/58270359?s=400&u=c28c4995ee478b3d17bf6b5a8c00c41ce19acb6f&v=4",password:"P4ssW0rd!#"}],X=[{id:1,image:"https://images.unsplash.com/photo-1570654844562-3661dd9ab169?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",title:"Nordic Mountains",description:"Some quick example to build on the card title and make up the bulk the card's content.",comments:98,likes:100},{id:2,image:"https://images.unsplash.com/photo-1604537529300-3744886c512c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2669&q=80",title:"England Lake",description:"Some quick example to build on the card title and make up the bulk the card's content.",comments:25,likes:50},{id:3,image:"https://images.unsplash.com/photo-1591017403321-dc264d1fd6e5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80",title:"Miami Beach",description:"Some quick example to build on the card title and make up the bulk the card's content.",comments:2,likes:15},{id:4,image:"https://images.unsplash.com/photo-1570655670276-2fa0872d03e3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2668&q=80",title:"Canada Landscape",description:"Some quick example to build on the card title and make up the bulk the card's content.",comments:100,likes:150}];function Z({environment:t}){return console.log("miragejs server"),R({environment:t,models:{author:k.extend({post:W()}),post:k.extend({author:G()})},serializers:{post:z.extend({include:["author"],embed:!0})},seeds(e){X.forEach((s,n)=>{e.create("post",m(d({},s),{author:e.create("author",L[n])}))}),e.create("author",L[4])},routes(){this.get("/api/author/:id",({authors:e},{params:s})=>{const{id:n}=s;return e.find(n)}),this.post("/api/login",({db:e,authors:s},{requestBody:n})=>{const o=JSON.parse(n),a=e.authors.findBy({username:o.username});return a&&a.password===o.password?{token:"475adab0-13f1-4cfb-bc04-076ff3c07bef",user:{username:a.username,avatar:a.avatar,description:a.description}}:new F(401,{},{errors:["Invalid credentials"]})}),this.get("/api/posts",({posts:e},{queryParams:s})=>{const{title:n}=s;return n?e.where(o=>o.title.includes(n)):e.all()}),this.patch("/api/post/:id",({db:e,posts:s},{params:n,requestBody:o})=>{const{id:a}=n,c=e.posts.find(a);return JSON.parse(o).post.like&&c.likes>=0?s.find(a).update({likes:++c.likes}):s.find(a).update({likes:--c.likes})})}})}var ee="/Agora/assets/agora.b5511d9e.svg",te="/Agora/assets/user.e403ebee.svg";const r=g.exports.jsx,i=g.exports.jsxs,M=g.exports.Fragment,re="flex justify-between items-end",se="cursor-pointer";var A=()=>i("header",{className:re,children:[r(S,{to:"/",children:r("img",{src:ee,alt:"Agora"})}),r(S,{to:"/profile",children:r("img",{className:se,src:te,alt:"User"})})]});const ae="grid gap-y-6 grid-cols-1 md:grid-cols-6",oe=`p-2
                    rounded-lg border-2 border-primary
                    outline-none
                    text-primary
                    col-span-2`;var ne=({handleSearch:t})=>r("div",{className:ae,children:r("input",{className:oe,type:"text",placeholder:"Search",onKeyUp:t})}),E="/Agora/assets/logo.f5ad66c7.svg";const ie=`fixed inset-0 z-10
                flex flex-col justify-center items-center`,ce="mb-3 flex flex-col",le="text-primary-bold font-normal text-2xl";var I=()=>i("div",{className:ie,children:[i("div",{className:ce,children:[r("img",{src:E,alt:"logo"}),r("span",{className:le,children:"Loading"})]}),r(U,{color:"#657172",loading:"true",size:35})]}),de="/Agora/assets/comment.e97b16fd.svg",pe="/Agora/assets/heart.5a1f8d21.svg",p;class x extends Error{constructor(e="CLIENT",s="without trace"){super(s);N(this,p,{CLIENT:{code:500,description:"Internal Application Error"}});this.code=u(this,p)[e].code,this.description=u(this,p)[e].description}}p=new WeakMap;const f=async(t="")=>{try{return await fetch(`/api/posts?title=${t}`).then(e=>e.json()).then(e=>e.posts)}catch(e){throw new x("CLIENT",e.message)}},me=async t=>{try{return await fetch(`/api/post/${t}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({post:{like:!0}})}).then(e=>e.json()).then(e=>e.post)}catch(e){throw new x("CLIENT",e.message)}},ue=`w-[75px] p-3
                grid grid-flow-col place-items-center gap-x-1
                text-white
                bg-red rounded-md`;var he=({postID:t,likesCount:e=0})=>{const[s,n]=l.exports.useState(e);return i("button",{className:ue,onClick:async()=>{const a=await me(t);n(a==null?void 0:a.likes)},children:[r("img",{src:pe,alt:"heart"}),r("span",{children:s>=1e3?`${Math.round(s/10)/100}K`:s})]})};const fe=`w-full pb-6
            grid gap-y-6 grid-rows-[370px_1fr]
            bg-white rounded shadow`,ge=`w-full h-full
                    object-cover rounded-t-lg`,xe=`px-6
                    grid gap-y-6`,be="flex flex-col",we="text-primary-bold font-normal text-lg",ve="text-primary font-light text-base cursor-pointer hover:underline",ye="text-primary-bold font-normal text-lg",Ne="flex items-center",ke="mx-3 grow text-primary cursor-pointer hover:underline";var Se=({id:t,image:e,title:s,author:n,description:o,comments:a,likes:c})=>i("div",{className:fe,children:[r("img",{className:ge,src:e,alt:"Image Card"}),i("div",{className:xe,children:[i("div",{className:be,children:[r("span",{className:we,children:s}),i("span",{className:ve,children:["@",n==null?void 0:n.username]})]}),r("span",{className:ye,children:o}),i("div",{className:Ne,children:[r("img",{src:de,alt:"Comment icon"}),i("span",{className:ke,children:["Comments (",a,")"]}),r(he,{postID:t,likesCount:c})]})]})]});const Le=`grid gap-6 grid-cols-1
                    sm:grid-cols-2 xl:grid-cols-3`,_e=`fixed inset-0 z-10
                flex flex-col justify-center items-center`,je="flex flex-col",Ce="text-primary-bold font-normal text-2xl",Pe=r("div",{className:_e,children:r("div",{className:je,children:r("span",{className:Ce,children:"No posts found"})})});var Me=({posts:t,loading:e})=>r("div",{className:Le,children:(()=>e?r(I,{}):t.length?t.map((n,o)=>r(Se,d({},n),o)):Pe)()}),Ae=()=>{const[t,e]=l.exports.useState([]),[s,n]=l.exports.useState(!1),[o,a]=l.exports.useState(!0);return l.exports.useEffect(async()=>{!t.length&&!s&&e(await f()),a(!1)},[t]),i(M,{children:[r(A,{}),r(ne,{handleSearch:async({target:b})=>{a(!0),n(!0);const{value:w}=b;e(w?await f(w):await f())}}),r(Me,{posts:t,loading:o})]})};const Ee=async()=>{try{return await fetch("/api/author/5").then(t=>t.json()).then(({author:t})=>t)}catch(t){throw new x("CLIENT",t.message)}},Ie=async({username:t,password:e})=>await fetch("/api/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:t,password:e})}).then(s=>s.json()),He=`
            w-full h-screen
            md:w-[750px] md:h-[624px] md:p-[186px]
            flex flex-col justify-center`,Be=`mb-9
                    flex flex-col items-center
                    text-2xl text-center text-primary-bold`,_="flex flex-col",j="text-primary flex flex-col",C=`p-2 mt-1.5
                    rounded-lg border-2 border-primary
                    outline-none
                    text-primary`,De=`w-full p-3 mt-9
                grid grid-flow-col place-items-center gap-x-1
                text-white
                bg-blue rounded-md`,qe=`p-2 mt-9
                    rounded-lg border-2 border-red-dark
                    text-red-dark
                    bg-red-light`;var Te=()=>{const[t,e]=l.exports.useState({username:"",password:""}),[s,n]=l.exports.useState(!1),o=async a=>{if(a.preventDefault(),t.username&&t.password){const c=await Ie(t);if(c!=null&&c.errors)n(!0);else{debugger;n(!1),localStorage.setItem("token",c==null?void 0:c.token),window.location.href="/"}}};return i("div",{className:He,children:[i("div",{className:Be,children:[r("img",{src:E,alt:"Logo",width:"75"}),r("span",{children:"Welcome to Agora"})]}),i("form",{onSubmit:o,children:[r("div",{className:_,children:i("label",{className:j,children:["Username",r("input",{type:"text",name:"username",className:C,minLength:3,maxLength:50,required:!0,value:t.username,onChange:a=>e(m(d({},t),{username:a.target.value}))})]})}),r("div",{className:_,children:i("label",{className:j,children:["Password",r("input",{type:"password",name:"password",className:C,minLength:6,maxLength:50,required:!0,value:t.password,onChange:a=>e(m(d({},t),{password:a.target.value}))})]})}),r("button",{type:"submit",className:De,onClick:o,children:"Login"})]}),s&&r("div",{className:qe,children:r("span",{children:"Username or password is incorrect. Please try again."})})]})},Oe=()=>r("div",{className:"flex place-content-center",children:r(Te,{})});const Re=`fixed inset-0 z-[-10]
                flex place-content-center
                font-normal text-lg text-center`,We=`w-[348px]
                        flex flex-col justify-center items-center`,Ge="w-32 h-32 object-fit rounded-full",ze="my-6 text-primary-bold",Fe="text-primary";var Ue=({avatar:t,username:e,description:s})=>r("div",{className:Re,children:i("div",{className:We,children:[r("img",{className:Ge,src:t,alt:"Image Card"}),i("span",{className:ze,children:["@",e]}),r("span",{className:Fe,children:s})]})}),Ve=()=>{const[t,e]=l.exports.useState(!0),[s,n]=l.exports.useState(null);return l.exports.useEffect(async()=>{s||(n(await Ee()),e(!1))},[s]),i(M,{children:[r(A,{}),t?r(I,{}):r(Ue,d({},s))]})};const P=({children:t})=>localStorage.getItem("token")?t:r(Y,{to:"/login"});var Je=()=>r("div",{className:"main xl:p-[24px_160px] 2xl:p-[24px_20vw]",children:r(V,{basename:"/Agora",children:i(J,{children:[r(h,{exact:!0,path:"/",element:r(P,{children:r(Ae,{})})}),r(h,{exact:!0,path:"/login",element:r(Oe,{})}),r(h,{exact:!0,path:"/profile",element:r(P,{children:r(Ve,{})})})]})})});Z({environment:"production"});$.render(r(K.StrictMode,{children:r(Je,{})}),document.getElementById("root"));
