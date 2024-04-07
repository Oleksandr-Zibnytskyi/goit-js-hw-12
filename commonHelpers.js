import{a as $,i as c,S as E}from"./assets/vendor-6e0bf343.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();async function p(o,r){try{const s="https://pixabay.com/api/",i=o,e=new URLSearchParams({key:"9190280-87e8455cc30411d2efd850bc0",q:i,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:r}),t=`${s}?${e}`;return(await $.get(t)).data}catch{c.error({message:"Server error!",position:"topRight"})}}function f(o){const r=o.hits.map(s=>{const{id:i,webformatURL:e,largeImageURL:t,tags:a,likes:b,views:P,comments:R,downloads:q}=s;return`
    <li class="gallery-item">
        <a class="gallery-link" href="${t}">
          <img class="gallery-image" id=${i} src="${e}" alt="${a}"/>
        </a>
        <div class="gallery-item-info">
          <div class="item-info-atr">
          <h3>Likes</h3>
          <p>${b}</p>
          </div>
          <div class="item-info-atr">
          <h3>Views</h3>
          <p>${P}</p>
          </div>
          <div class="item-info-atr">
          <h3>Comments</h3>
          <p>${R}</p>
          </div>
          <div class="item-info-atr">
          <h3>Downloads</h3>
          <p>${q}</p>
          </div>
        </div>
    </li>
    `}).join("");y.insertAdjacentHTML("beforeend",r)}const y=document.querySelector(".gallery"),g=document.querySelector("#search-form"),h=document.querySelector("#load-more-btn"),L=document.querySelector("#loader");let d,v,l;const M=15;let n;const w=new E(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250});g.addEventListener("submit",async o=>{if(o.preventDefault(),y.innerHTML="",l=1,d=o.target.elements.query.value,d.trim()===""){c.warning({message:"The search field is empty. Please try again!",position:"topRight"}),g.reset();return}else{try{S(),n=await p(d,l),v=Math.ceil(n.totalHits/M),n.hits.length?(m(),f(n),w.refresh(),u()):(m(),c.error({message:"Sorry, there are no images matching your search query. Please try again.",position:"topRight"}),u())}catch{m(),c.error({message:"Error render gallery. Please try again!",position:"topRight"})}g.reset()}});h.addEventListener("click",x);async function x(){l+=1,S();try{n=await p(d,l),f(n),w.refresh()}catch{c.error({position:"topRight",message:"Error next render gallery"})}m(),B(),u()}function B(){const r=document.querySelector(".gallery-image").getBoundingClientRect().height;window.scrollBy({top:r*2,behavior:"smooth"})}function u(){l>=v?(h.classList.add("is-hidden"),c.info({message:"We're sorry, there are no more images to load",position:"topRight"})):h.classList.remove("is-hidden")}function m(){L.classList.add("is-hidden")}function S(){L.classList.remove("is-hidden")}
//# sourceMappingURL=commonHelpers.js.map
