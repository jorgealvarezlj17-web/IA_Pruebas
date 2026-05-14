(function(){
  console.log("Ejecutando desde IA_Pruebas...");
  function llenar(el, val) {
    if(!el) return;
    el.focus();
    el.value = val;
    el.dispatchEvent(new Event('input', { bubbles: true }));
    el.dispatchEvent(new Event('change', { bubbles: true }));
    el.dispatchEvent(new Event('blur', { bubbles: true }));
  }

  /* 1. Fecha 14/05/2026 */
  let inputs = document.querySelectorAll('input');
  if(inputs[0]) llenar(inputs[0], '2026-05-14');

  /* 2. Marcar No y Si */
  let r = document.querySelectorAll('.q-radio__inner, .q-radio');
  if(r[0]) r[0].click();
  
  setTimeout(() => {
    if(r[3]) r[3].click();
    /* 3. Minutos 30 y 25 */
    setTimeout(() => {
      let n = document.querySelectorAll('input');
      let c = 0;
      n.forEach(i => {
        if(i.offsetParent !== null && i.value === "" && i.type !== 'date'){
          if(c === 0) llenar(i, '30');
          if(c === 1) llenar(i, '25');
          c++;
        }
      });
      alert('IA_Pruebas: Reporte Cargado');
    }, 600);
  }, 600);
})();
