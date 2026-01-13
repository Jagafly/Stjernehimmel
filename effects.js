(function(){
  function sparkleBurst(x, y){
    const n = 22;
    for(let i=0;i<n;i++){
      const p = document.createElement("div");
      const angle = Math.random()*Math.PI*2;
      const dist = 40 + Math.random()*140;
      const dx = Math.cos(angle)*dist;
      const dy = Math.sin(angle)*dist;
      const size = 4 + Math.random()*6;

      p.style.position = "fixed";
      p.style.left = x + "px";
      p.style.top = y + "px";
      p.style.width = size + "px";
      p.style.height = size + "px";
      p.style.borderRadius = "999px";
      p.style.pointerEvents = "none";
      p.style.zIndex = 9999;
      p.style.opacity = "0.9";
      p.style.background = Math.random() < 0.65
        ? "rgba(156,196,255,.95)"
        : "rgba(255,214,166,.95)";
      p.style.boxShadow = "0 0 18px rgba(255,255,255,.35)";

      const life = 700 + Math.random()*600;
      p.animate([
        { transform:`translate(0,0) scale(1)`, opacity: 0.9 },
        { transform:`translate(${dx}px,${dy}px) scale(.2)`, opacity: 0 }
      ], { duration: life, easing: "cubic-bezier(.2,.8,.2,1)" });

      document.body.appendChild(p);
      setTimeout(()=>p.remove(), life+60);
    }
  }

  // eksporter globalt
  window.__sparkleBurst = sparkleBurst;
})();
