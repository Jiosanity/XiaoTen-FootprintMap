(function(){
  function lsGet(key, def){
    try{
      const v = localStorage.getItem(key);
      return v === null ? def : v;
    }catch(e){
      return def;
    }
  }
  function lsSet(key, val){
    try{ localStorage.setItem(key, val); }catch(e){}
  }
  // 兼容旧代码：全局 Utils 对象 + 全局函数
  window.Utils = { lsGet, lsSet };
  window.lsGet = lsGet;
  window.lsSet = lsSet;
})();
