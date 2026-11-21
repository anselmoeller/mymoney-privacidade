/* Paz Financeira — voltar ao topo com melhoria progressiva e respeito à acessibilidade. */
(function(){
  'use strict';
  function iniciar(){
    var botao=document.querySelector('a.pf-backtotop-20261121');
    if(!botao)return;
    document.documentElement.classList.add('pf-btt-enhanced');
    var pendente=false;
    function atualizar(){
      pendente=false;
      var visivel=window.scrollY>Math.min(450,Math.max(250,window.innerHeight*.45));
      botao.classList.toggle('pf-btt-visible',visivel);
      if(visivel){botao.removeAttribute('tabindex');botao.removeAttribute('aria-hidden');}
      else{botao.setAttribute('tabindex','-1');botao.setAttribute('aria-hidden','true');}
    }
    window.addEventListener('scroll',function(){
      if(!pendente){pendente=true;window.requestAnimationFrame(atualizar);}
    },{passive:true});
    window.addEventListener('resize',atualizar,{passive:true});
    botao.addEventListener('click',function(event){
      event.preventDefault();
      var reduce=window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      window.scrollTo({top:0,behavior:reduce?'auto':'smooth'});
    });
    atualizar();
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',iniciar,{once:true});
  else iniciar();
})();
