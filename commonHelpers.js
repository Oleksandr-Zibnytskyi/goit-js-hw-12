import{a as w,S,i as u}from"./assets/vendor-06b1bbdf.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function i(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(e){if(e.ep)return;e.ep=!0;const s=i(e);fetch(e.href,s)}})();const q=15,h=async(t,r=1)=>{const i="9190280-87e8455cc30411d2efd850bc0";return(await w.get("https://pixabay.com/api/",{params:{key:i,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:q,page:r}})).data},M=document.querySelector(".gallery");function p(t){const r=t.map(a=>`<li class="gallery-item">
  <a class="gallery-link" href="${a.largeImageURL}">
    <img
            src="${a.webformatURL}"
            alt="${a.tags}"
            width="360"
            height="200"
            class="gallery-img"
        />
        <ul class="gal-list">
        <li class="gal-link"><span class="gal-span">Likes</span> ${a.likes}</li>
        <li class="gal-link"><span class="gal-span">Views</span> ${a.views}</li>
        <li class="gal-link"><span class="gal-span">Comments</span> ${a.comments}</li>
        <li class="gal-link"><span class="gal-span">Downloads</span> ${a.downloads}</li>
     </ul>
  </a>
</li>`).join("");M.insertAdjacentHTML("beforeend",r),new S(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()}const P=document.getElementById("search-form");document.getElementById("search-input");const d=document.querySelector(".gallery"),f=document.querySelector(".loading"),m=document.querySelector(".btn-load-more");document.querySelector(".gallery-item");let l,n=1,y=0;const E=15;function $(){m.classList.remove("hidden")}function o(){m.classList.add("hidden")}function L(){f.classList.add("loader")}function g(){f.classList.remove("loader")}o();m.addEventListener("click",k);async function k(){n+=1,o(),L();try{const t=await h(l,n);p(t.hits)}catch(t){console.error("Error fetching data:",t),o()}b(),g()}P.addEventListener("submit",v);async function v(t){if(t.preventDefault(),d.innerHTML="",n=1,l=t.target.elements.query.value.trim(),l==="")return u.warning({message:"Please try again! Write something.",position:"topRight",color:"red"});try{L();const r=await h(l,n);if(r.hits.length===0){u.error({message:"Sorry, there are no images matching your search query. Please try again!",color:"red",position:"topRight"}),d.innerHTML="",t.target.reset(),g(),o();return}y=Math.ceil(r.totalHits/E),p(r.hits)}catch(r){console.error("Error fetching data:",r),d.innerHTML="",o()}b(),t.target.reset(),g()}function b(){n>=y?(u.warning({message:"Were sorry, but youve reached the end of search results.",color:"red",position:"topRight"}),o()):$()}
//# sourceMappingURL=commonHelpers.js.map
