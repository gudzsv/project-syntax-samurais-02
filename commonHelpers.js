import{A as C,S as k,N as K,K as N,M as P,i as V,a as j}from"./assets/vendor-DOMKpuM6.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))t(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&t(c)}).observe(document,{childList:!0,subtree:!0});function o(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function t(i){if(i.ep)return;i.ep=!0;const s=o(i);fetch(i.href,s)}})();const X=document.querySelector(".about-me-btn");X.classList.add("btn-active");const H=document.querySelector(".about-me-chapter .section-title");H.classList.add("active");new C("#accordionAbout",{openOnInit:[0],showMultiple:!0,beforeOpen:function(e){e.querySelector(".about-me-btn.ac-trigger").classList.add("btn-active"),e.querySelector(".about-me-chapter .section-title").classList.add("active")},beforeClose:function(e){e.querySelector(".about-me-btn.ac-trigger").classList.remove("btn-active"),e.querySelector(".about-me-chapter .section-title").classList.remove("active")}});new k("#swiperAbout",{modules:[K,N,P],navigation:{nextEl:".about-me-btn-swipe"},mousewheel:{invert:!0},keyboard:{enabled:!0,onlyInViewport:!0},mousewheel:!0,touch:!0,centeredSlides:!1,loop:!0,speed:500,spaceBetween:0,slideToClickedSlide:!0,allowTouchMove:!0,slidesPerView:2,width:260,breakpoints:{768:{slidesPerView:3,width:600},1440:{slidesPerView:6,width:1200}}});const b={cards:document.querySelectorAll(".marquee__card"),covers:document.querySelector(".covers")};let _={root:null,rootMargin:"0px",threshold:0},F=e=>{e.forEach(n=>{if(n.isIntersecting){b.cards.forEach(o=>{o.classList.add("animation")});return}b.cards.forEach(o=>{o.classList.remove("animation")})})},Y=new IntersectionObserver(F,_);Y.observe(b.covers);new C(".accordion-container-faq",{duration:800,showMultiple:!0});document.addEventListener("DOMContentLoaded",function(){const e=document.querySelectorAll(".faq-item");z.forEach(n=>n.addEventListener("click",()=>{n.classList.toggle("active")})),e.forEach(n=>{const o=n.querySelector(".faq-btn"),t=n.querySelector(".ac-panel");o.addEventListener("click",function(){t.style.display==="flex"?t.style.display="none":t.style.display="flex"})})});const z=document.querySelectorAll(".faq-item"),U=document.querySelector(".menu-link"),u=document.querySelector(".menu-list"),W=document.querySelector(".burger-btn"),w=document.querySelector(".burger-menu"),$=document.querySelector(".close-btn"),G=document.querySelector(".burger-order-btn"),J=document.querySelector(".burger-menu-list");U.addEventListener("click",re);W.addEventListener("click",ae);$.addEventListener("click",S);G.addEventListener("click",S);J.addEventListener("click",S);const Z=new KeyframeEffect(u,[{opacity:"0",transform:"translateY(-100%)"},{opacity:"1",transform:"translateY(0)"}],{duration:500}),Q=new KeyframeEffect(u,[{opacity:"1",transform:"translateY(0)"},{opacity:"0",transform:"translateY(-100%)"}],{duration:500}),ee=new Animation(Z,document.timeline),te=new Animation(Q,document.timeline),ne=new KeyframeEffect(w,[{transform:"translateX(100%)"},{transform:"translateX(0)"}],{duration:500}),oe=new KeyframeEffect(w,[{transform:"translateX(0)"},{transform:"translateX(100%)"}],{duration:500}),ie=new Animation(ne,document.timeline),se=new Animation(oe,document.timeline);function re(){if(u.classList.contains("visually-hidden")){ee.play(),u.classList.remove("visually-hidden");return}te.play(),setTimeout(()=>{u.classList.add("visually-hidden")},500)}function ae(){w.classList.add("is-open"),ie.play(),document.body.style.overflow="hidden"}function S(){se.play(),setTimeout(()=>{w.classList.remove("is-open")},500),document.body.style.overflow=""}const ce=document.querySelector(".window-btn"),f=document.querySelector(".backdrop"),M="is-open",le=document.querySelector("body"),de=e=>{f.classList.add(M),le.style.overflow="hidden",ue(e)};ce.addEventListener("click",()=>{E()});f.addEventListener("click",e=>{e.target===f&&E()});document.addEventListener("keydown",e=>{e.key==="Escape"&&E()});function E(){f.classList.remove(M),document.body.style.overflow="auto",R()}function ue({title:e="",message:n=""}){const o=document.createElement("h2");o.classList.add("window-title"),o.textContent=e;const t=document.createElement("p");t.classList.add("window-text"),t.textContent=n,R();const i=document.querySelector(".modal-window");i.appendChild(o),i.appendChild(t)}function R(){const e=document.querySelector(".window-title"),n=document.querySelector(".window-text");e&&e.remove(),n&&n.remove()}document.addEventListener("DOMContentLoaded",function(){const e=document.querySelectorAll(".project-list-item"),n=document.querySelector(".prev"),o=document.querySelector(".next");let t=0,i=0,s=0,c=0;e.forEach((a,L)=>{L!==t&&(a.style.display="none")});function l(){e.forEach((a,L)=>{L===t?a.style.display="block":a.style.display="none"}),n.disabled=t===0,o.disabled=t===e.length-1}n.addEventListener("click",function(){t>0&&(i=t,t--,l(),e[i].style.animation="slideRightToLeft 0.2s ease-in-out",e[t].style.animation="slideRightToLeft 0.2s ease-in-out")}),o.addEventListener("click",function(){t<e.length-1&&(i=t,t++,l(),e[i].style.animation="slideLeftToRight 0.2s ease-in-out",e[t].style.animation="slideLeftToRight 0.2s ease-in-out")}),document.addEventListener("keydown",function(a){a.code==="ArrowLeft"&&t>0?(i=t,t--,l(),e[i].style.animation="slideRightToLeft 0.2s ease-in-out",e[t].style.animation="slideRightToLeft 0.2s ease-in-out"):a.code==="ArrowRight"&&t<e.length-1&&(i=t,t++,l(),e[i].style.animation="slideLeftToRight 0.2s ease-in-out",e[t].style.animation="slideLeftToRight 0.2s ease-in-out")}),document.addEventListener("touchstart",function(a){s=a.touches[0].clientX}),document.addEventListener("touchend",function(a){c=a.changedTouches[0].clientX,B()});function B(){c-s>50?t>0&&(i=t,t--,l(),e[i].style.animation="slideRightToLeft 0.2s ease-in-out",e[t].style.animation="slideRightToLeft 0.2s ease-in-out"):s-c>50&&t<e.length-1&&(i=t,t++,l(),e[i].style.animation="slideLeftToRight 0.2s ease-in-out",e[t].style.animation="slideLeftToRight 0.2s ease-in-out")}l()});const g=document.querySelector("#reviews-list"),me=document.querySelector(".swiper-button-next"),fe=document.querySelector(".swiper-button-prev");let m,p=!0;function I(){const e=window.innerWidth;e<768?m=1:e<1440?m=2:m=4}async function pe(){try{const e=await fetch("https://portfolio-js.b.goit.study/api/reviews");if(e.status!=200)throw new Error("Failed to fetch reviews");const n=await e.json();return p=!0,n}catch(e){return e}}function ye(e){g.innerHTML="";const n=e.map(o=>`
    <li class="swiper-slide" id="review">
        <img src="${o.avatar_url}" alt="Reviewer" class="reviewer-image" width = "48"
  height = "48" loading="lazy" />
        <h5 class="reviewer-name header-5">${o.author}</h5>
        <p class="main-text-with-opacity">${o.review}</p>
    </li>
    `).join("");g.insertAdjacentHTML("beforeend",n)}function ve(){const e=document.querySelector(".error");e&&e.remove(),g.insertAdjacentHTML("beforebegin",'<p class="main-text-with-opacity error">Not Found</p>')}async function O(){try{const e=await pe();ye(e);const n=new k(".swiper",{navigation:{nextEl:me,prevEl:fe},slidesPerView:m,slidesPerGroup:m,spaceBetween:16,keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!0},mousewheel:{sensitivity:1},autoHeight:!1,observer:!0});p=!0}catch{V.error({title:"Error",message:"Sorry, something went wrong with reviews."}),ve(),p=!1}}I();O();window.addEventListener("resize",function(){p&&(I(),O())});const D=document.querySelector("#scroll-top");window.addEventListener("scroll",we);function we(){D.style.display=window.scrollY>250?"flex":"none"}D.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})});const h=document.querySelector(".js-submit-form"),[y,v]=h,q=document.querySelector(".valid-email-text"),T=document.querySelector(".invalid-email-text"),A=document.querySelector(".invalid-comments-text"),he=async({email:e,comment:n})=>{const o="https://portfolio-js.b.goit.study/api/requests",{data:t}=await j.post(o,{email:e,comment:n});return t},r={valid:"valid-input",invalid:"invalid-input",isVisible:"is-visible"},Le=e=>{const o=/^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(e);return o?(y.classList.add(r.valid),q.classList.add(r.isVisible)):(y.classList.add(r.invalid),T.classList.add(r.isVisible)),o},be=e=>(e?v.classList.add(r.valid):(v.classList.add(r.invalid),A.classList.add(r.isVisible)),!!e),ge=e=>{const n=e.name;n==="userEmail"&&(q.classList.remove(r.isVisible),T.classList.remove(r.isVisible)),n==="userComments"&&A.classList.remove(r.isVisible),e.classList.remove(r.valid),e.classList.remove(r.invalid)},Se=()=>{[q,T,A].forEach(o=>{o.classList.remove(r.isVisible)}),[y,v].forEach(o=>{o.classList.remove(r.valid),o.classList.remove(r.invalid)})},x="formData",d=Te()||{userEmail:"",userComments:""};y.value=d.userEmail;v.value=d.userComments;h.addEventListener("input",e=>{ge(e.target);const{name:n,value:o}=e.target;d[n]=o.trim(),qe(d)});h.addEventListener("submit",Ee);async function Ee(e){e.preventDefault();const{userEmail:n,userComments:o}=d,t=Le(n),i=be(o);if(!(!t||!i))try{const s=await he({email:n,comment:o});de(s),Ae()}catch(s){V.error({title:"Error",message:s.message,position:"topRight"})}}function qe(e,n=x){localStorage.setItem(n,JSON.stringify(e))}function Te(e=x){return JSON.parse(localStorage.getItem(e))}function Ae(e=x){localStorage.removeItem(e),h.reset(),Se(),d.userEmail="",d.userComments=""}
//# sourceMappingURL=commonHelpers.js.map
