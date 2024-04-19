import{a as g,i as L,S as w,N as E,K as h,M as b,A as S}from"./vendor-4e15793d.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const d of r.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function n(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(o){if(o.ep)return;o.ep=!0;const r=n(o);fetch(o.href,r)}})();const T=document.querySelector(".menu-button"),m=document.querySelector(".mobile-menu-wrapper"),A=document.querySelector(".mobile-menu-close-btn"),x=document.querySelectorAll(".mobile-menu-link"),O=document.querySelector(".mobile-order-button"),f=document.querySelector(".tablet-and-desktop-menu-navigation-wrapper"),P=document.querySelector(".menu-link");T.addEventListener("click",()=>{m.classList.add("is-open"),document.body.style.overflow="hidden"});A.addEventListener("click",()=>{m.classList.remove("is-open"),document.body.style.overflow="auto"});x.forEach(e=>{e.addEventListener("click",()=>{m.classList.remove("is-open"),document.body.style.overflow="auto"})});O.addEventListener("click",()=>{m.classList.remove("is-open"),document.body.style.overflow="auto"});P.addEventListener("click",e=>{e.preventDefault(),getComputedStyle(f).display==="none"?f.style.display="block":f.style.display="none"});const B="https://portfolio-js.b.goit.study";function D(){const t=`${B}/api/reviews`;return g.get(t).then(n=>n.data).catch(M)}function V(e){const n=`${B}/api/requests`;return g.post(n,e).then(s=>s.data).catch(M)}function M(e){throw L.error({title:"Error!",message:"Sorry, something went wrong. Please try again.",position:"topRight"}),e}const N=document.querySelector(".not-found"),F=document.querySelector(".reviews-list"),R=document.querySelector(".swiper-container");function $(e){L.error({title:"Error",message:e,position:"topRight"})}function z(e){if(e.length===0)v();else{const t=e.map(n=>`<li class="reviews-item swiper-slide">
                <img src="${n.avatar_url}" alt="" width="48" height="48"  class="reviews-avatar"/>
                <div class="reviews-info">
                    <h3 class="reviews-name">${n.author}</h3>
                    <p class="reviews-text">${n.review}</p>
                </div>
              </li>`).join("");F.insertAdjacentHTML("beforeend",t),W()}}function v(){R.style.display="none",N.style.display="block",$("The connection with the server has problem, so reviews are not rendered")}function _(){D().then(e=>{e&&e.length>0?z(e):v()}).catch(e=>{console.error(e),v()})}function W(){new w(".swiper-container",{modules:[E,h,b],slidesPerView:1,breakpoints:{768:{slidesPerView:2},1440:{slidesPerView:4}},keyboard:{enabled:!0,onlyInViewport:!0},mousewheel:{enabled:!0},speed:800,spaceBetween:16,allowTouchMove:!0,loop:!1,watchOverflow:!0,slideToClickedSlide:!0,navigation:{nextEl:".swiper-button-next-reviews",prevEl:".swiper-button-prev-reviews"}})}document.addEventListener("DOMContentLoaded",_);const p=document.getElementById("contact-form"),l=document.getElementById("email"),i=document.getElementById("comment"),c=document.getElementById("emailValidationMessage"),u=document.getElementById("CommentValidationMessage");document.addEventListener("DOMContentLoaded",function(){const e=document.querySelector("[data-modal]"),t=document.querySelector("[data-modal-close]"),n=l.style.borderBottomColor;p.addEventListener("submit",function(o){if(o.preventDefault(),!K())return;const r=new FormData(p),d=r.get("email"),q=r.get("comment");V({email:d,comment:q}).then(I=>{e.classList.remove("is-hidden"),p.reset(),l.style.borderBottomColor=n,c.classList.add("hidden-container-for-footer"),l.style.borderBottomColor=n,u.classList.add("hidden-container-for-footer"),i.style.borderBottomColor=n,i.value="",a=""}).catch(I=>{})}),t.addEventListener("click",function(){s()}),e.addEventListener("click",function(o){o.target===e&&s()}),document.addEventListener("keydown",function(o){o.key==="Escape"&&!e.classList.contains("is-hidden")&&s()});function s(){e.classList.add("is-hidden")}});const j=l.style.borderBottomColor;l.addEventListener("input",H);function H(){const e=new RegExp(l.pattern);return l.value===""?(c.classList.add("hidden-container-for-footer"),l.style.borderBottomColor=j,!1):e.test(l.value)?(c.classList.remove("hidden-container-for-footer"),c.textContent="Success!",c.style.color="#3cbc81",l.style.borderBottomColor="#3cbc81",!0):(c.classList.remove("hidden-container-for-footer"),c.textContent="Invalid email, try again",c.style.color="#e74a3b",l.style.borderBottomColor="#e74a3b",!1)}function K(){return i.value.trim()===""||i.value===null?(u.classList.remove("hidden-container-for-footer"),u.textContent="Please, type somesing",u.style.color="#DAA520",i.style.borderBottomColor="#DAA520",!1):!0}let a="",y=0;function k(){const e=document.getElementById("comment").offsetWidth;y=Math.floor(e/8)}function G(){i.value.length>y?(a=i.value,i.value=a.substring(0,y)+"..."):a=i.value}window.addEventListener("load",function(){k()});window.addEventListener("resize",k);i.addEventListener("blur",function(){G()});i.addEventListener("focus",function(){i.value=a});const U=document.querySelectorAll(".btn-about"),J=document.querySelectorAll(".ac");document.addEventListener("DOMContentLoaded",()=>{const e=new S(".accordion-container",{showMultiple:!0,openOnInit:[0]});J.forEach(t=>{const n=t.querySelector(".ac-header"),s=t.querySelector(".ac-panel");n.addEventListener("click",()=>{s.classList.contains("active")?e.close(s):e.open(s)})}),U.forEach(t=>{t.addEventListener("click",n=>{const s=n.currentTarget.querySelector(".icon-about");s.classList.toggle("icon-close"),s.classList.toggle("icon-open")})})});document.addEventListener("DOMContentLoaded",()=>{const e=new w(".swiper-about",{modules:[h,b],cssMode:!0,speed:400,spaceBetween:0,allowTouchMove:!0,loop:!0,slideToClickedSlide:!0,keyboard:{enabled:!0,onlyInViewport:!0},mousewheel:{enabled:!0},slidesPerView:2,width:260,breakpoints:{768:{slidesPerView:3,width:600},1440:{slidesPerView:6,width:1200}}}),t=document.querySelector(".btn-arrow");t.addEventListener("click",()=>{e.slideNext(),e.updateSize(),e.updateSlides()}),t.addEventListener("keydown",n=>{n.key==="Tab"&&(e.slideNext(),e.updateSize(),e.updateSlides())})});function Q(e){var t=e.getBoundingClientRect();return t.top>=0&&t.left>=0&&t.bottom<=(window.innerHeight||document.documentElement.clientHeight)&&t.right<=(window.innerWidth||document.documentElement.clientWidth)}function C(){var e=document.querySelectorAll(".benefits-item");e.forEach(function(t){Q(t)&&t.classList.add("visible")})}window.addEventListener("scroll",function(){C()});document.addEventListener("DOMContentLoaded",function(){C()});const X=document.querySelector(".covers-section"),Y={root:null,rootMargin:"500px",threshold:.5},Z=e=>{e.forEach(t=>{t.isIntersecting?te():ee()})};function ee(){document.querySelectorAll(".covers-slide").forEach(t=>t.classList.remove("animation"))}function te(){document.querySelectorAll(".covers-slide").forEach(t=>t.classList.add("animation"))}const oe=new IntersectionObserver(Z,Y);oe.observe(X);new S(".faq-list",{duration:400,showOne:!0,showMultiple:!0,onToggle:function(e){const t=e.target.closest(".qwestions");t&&t.classList.toggle("is-active")}});function ne(){new w(".swiper",{modules:[E,h,b],keyboard:{enabled:!0},mousewheel:{enabled:!0},loop:!1,slidesPerView:1,speed:1e3,navigation:{prevEl:".swiper-prev",nextEl:".swiper-next",disabledClass:"disabled-button"}})}document.addEventListener("DOMContentLoaded",ne);window.onscroll=function(){se()};function se(){document.body.scrollTop>200||document.documentElement.scrollTop>200?document.getElementById("scrollToTopBtn").style.display="flex":document.getElementById("scrollToTopBtn").style.display="none"}document.getElementById("scrollToTopBtn").onclick=function(){document.body.scrollTop=0,document.documentElement.scrollTop=0};
//# sourceMappingURL=main-b437915d.js.map
