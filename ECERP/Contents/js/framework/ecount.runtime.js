//event binding, router 

document.body.addEventListener('click', function(event){
  /* 

    * document어디를 클릭해도 event가 발생한다.
    * event가 발생했을 때 event target에 data-set에 설정한(cid, cindex, cdata... )
    정보를 통해서 
    * 모든 정보는 dom에서 가지고 온다.
    * data-ecPath : page, container, tab, ...
    클릭한 component의 Path가 담겨 있다.
    * ecount.runtime.js > document에 event type 마다 listento로 모두 등록해주고 있다.
    * ecount.event.native.js > ecEventHandler > parse function : dom에 등록 되어 있는 것을 ecEvent obejct에 등록합니다.
    
    * ecount.control.js 
    *   - getEcPath/ getEcIKey
    *   - setEcPath function: 세팅하는 규칙이 여기에 있다.
    *   - ecIKey: widget 최상단 layer에 달려 있다. 
    * 
    * * target event를 통해서 instance를 찾는 방법 
    *   - ecount.global.getEcInstance(target.getAttribute("data-ecIKey"))
    * 
  
  */
  alert(1);
  var cid = event.target.getAttribute("data-cid");
  if(cid){
    var ecPath, target = event.target;
    
    // # target으로 부터 가장 가까운 ecPath를찾기 위한 로직
    //    * jquery closeset function을 찾는 함수가 있다. 
    //    * 아래는 개념을 보여주기위해서 sample로 prototype code
    while(target){
      ecPath = target.getAttribute('data-ecPath');
      if(ecPath){
        break;
      }
      target = target.parentNode();
    }
  }
  console.log(cid);
  

});