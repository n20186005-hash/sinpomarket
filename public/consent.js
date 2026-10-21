(() => {
  const KEY='sinpo-cookie-preferences', DENY='sinpo-analytics-denied', MARK='|sinpo-analytics-denied|', ID='G-HXM22WWPKP';
  function denied(){
    if(window.__sinpoDenied)return true;
    try{if(sessionStorage.getItem(DENY)==='1')return true;}catch{return true;}
    try{return window.name.includes(MARK);}catch{return true;}
  }
  function markDeny(){
    window.__sinpoDenied=true;window['ga-disable-'+ID]=true;let retained=false;
    try{sessionStorage.setItem(DENY,'1');retained=sessionStorage.getItem(DENY)==='1';}catch{}
    try{window.name=window.name.split(MARK).join('')+MARK;retained=window.name.includes(MARK)||retained;}catch{}
    return retained;
  }
  function clearDeny(){
    // Verify tab-local veto removal before publishing a shared grant.
    sessionStorage.removeItem(DENY);
    if(sessionStorage.getItem(DENY)==='1')throw Error('Session refusal remains');
    window.name=window.name.split(MARK).join('');
    if(window.name.includes(MARK))throw Error('Tab refusal remains');
  }
  function read(){
    if(denied())return null;
    try{
      const saved=JSON.parse(localStorage.getItem(KEY)||'null');
      // A stale stored grant must not revive while writes are blocked.
      localStorage.setItem(KEY+'-write-check','1');localStorage.removeItem(KEY+'-write-check');
      return saved && typeof saved.analytics==='boolean'?saved:null;
    }catch{return null;}
  }
  function apply(grant){
    window['ga-disable-'+ID]=!grant;
    if(!grant){window.gtag?.('consent','update',{analytics_storage:'denied'});return;}
    window.dataLayer=window.dataLayer||[];
    window.gtag=window.gtag||function(){window.dataLayer.push(arguments);};
    if(document.getElementById('sinpo-ga4')){window.gtag('consent','update',{analytics_storage:'granted'});return;}
    window.gtag('consent','default',{analytics_storage:'denied',ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied'});
    window.gtag('consent','update',{analytics_storage:'granted'});
    const script=document.createElement('script');script.id='sinpo-ga4';script.async=true;script.src='https://www.googletagmanager.com/gtag/js?id='+ID;document.head.appendChild(script);
    window.gtag('js',new Date());window.gtag('config',ID,{allow_google_signals:false,allow_ad_personalization_signals:false});
  }
  let retainedDenial=false;
  function save(analytics){
    analytics=analytics===true;
    if(!analytics){retainedDenial=markDeny();apply(false);}
    try{
      if(analytics){clearDeny();localStorage.getItem(KEY);localStorage.setItem(KEY+'-write-check','1');localStorage.removeItem(KEY+'-write-check');}
      localStorage.setItem(KEY,JSON.stringify({analytics}));
      if(analytics)window.__sinpoDenied=false;
      apply(read()?.analytics===true);return true;
    }catch{retainedDenial=markDeny();apply(false);return false;}
  }
  window.sinpoConsent={read,save};
  apply(read()?.analytics===true);
  const checkbox=document.getElementById('analytics'),status=document.getElementById('cookie-status');
  function sync(){const allowed=window['ga-disable-'+ID]===false;if(checkbox)checkbox.checked=allowed;return allowed;}
  sync();
  function choose(value){
    const stored=save(value),allowed=sync();
    if(status)status.textContent=stored
      ?allowed?'이 브라우저에서 Google Analytics를 허용했습니다.':value?'설정은 저장했지만 브라우저 저장소를 확인할 수 없어 이 탭에서 Google Analytics는 비활성 상태입니다.':'이 브라우저에서 Google Analytics를 거부했습니다.'
      :retainedDenial?'이 탭에서 Google Analytics를 비활성화했습니다. 페이지 이동과 새로고침에도 거부가 유지됩니다. 영구 설정을 저장하지 못해 다른 탭에는 이전 허용이 남을 수 있습니다. 이전 허용을 지우려면 브라우저 설정에서 사이트 데이터를 삭제하세요.'
      :'이 페이지에서 Google Analytics를 비활성화했습니다. 저장소를 사용할 수 없어 이동이나 새로고침 후에도 유지된다고 보장하지 않습니다. 브라우저 설정에서 사이트 데이터를 삭제하세요.';
  }
  document.getElementById('save-cookies')?.addEventListener('click',()=>choose(checkbox?.checked===true));
  document.getElementById('reject-cookies')?.addEventListener('click',()=>choose(false));
  window.addEventListener('storage',event=>{
    if(event.key!==KEY&&event.key!==null)return;
    let grant=false;try{grant=JSON.parse(event.newValue||'null')?.analytics===true;}catch{}
    if(!grant)markDeny();
    const allowed=read()?.analytics===true;apply(allowed);if(checkbox)checkbox.checked=allowed;
    if(status)status.textContent=allowed?'이 탭에서 Google Analytics가 활성 상태입니다.':grant?'이 탭의 Google Analytics 거부는 유지됩니다. 허용하려면 이 페이지에서 선택을 저장하세요.':'다른 탭의 설정 변경에 따라 이 탭에서 Google Analytics를 비활성화했습니다.';
  });
})();
