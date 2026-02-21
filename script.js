(function(){
  const sheet = document.getElementById("sheet");
  const openBtn = document.getElementById("openMenu");
  const closeBtn = document.getElementById("closeMenu");

  function openSheet(){ sheet?.classList.add("open"); }
  function closeSheet(){ sheet?.classList.remove("open"); }

  openBtn?.addEventListener("click", openSheet);
  closeBtn?.addEventListener("click", closeSheet);
  sheet?.addEventListener("click", (e)=>{ if(e.target === sheet) closeSheet(); });

  // Smooth scroll for in-page anchors
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener("click", (e)=>{
      const id = a.getAttribute("href");
      if(!id || id === "#") return;
      const el = document.querySelector(id);
      if(!el) return;
      e.preventDefault();
      closeSheet();
      el.scrollIntoView({behavior:"smooth", block:"start"});
      history.replaceState(null, "", id);
    });
  });

  // Download smart link
  const smartBtn = document.querySelector("[data-smart-download]");
  smartBtn?.addEventListener("click", (e)=>{
    e.preventDefault();
    const qs = new URLSearchParams(location.search);
    const qsStr = qs.toString();
    const target = "/download/" + (qsStr ? ("?"+qsStr) : "");
    location.href = target;
  });
})();
