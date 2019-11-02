//event binding, router 

var ecEventHandler = function() {
  /* 
    * document어디를 클릭해도 event가 발생한다. 
    * event가 발생했을 때 event target에 data-set에 설정한(cid, cindex, cdata... )
    정보를 통해서 
    * 모든 정보는 dom에서 가지고 온다.
    * data-ecPath : page, container, tab, ...
    클릭한 component의 Path가 담겨 있다.
    * ecount.runtime.new.js > document에 event type 마다 listento로 모두 등록해주고 있다.
    * ecount.event.native.js > ecEventHandler > parse function : dom에 등록 되어 있는 것을 ecEvent obejct에 등록합니다.
    
    * ecount.control.js 
    *   - getEcPath/ getEcIKey
    *   - setEcPath function: 세팅하는 규칙이 여기에 있다.
    *   - ecIKey: widget 최상단 layer에 달려 있다. 
    * 
    * * target event를 통해서 instance를 찾는 방법 
    *   - ecount.global.getEcInstance(target.getAttribute("data-ecIKey"))
    * 
    * * ecEvent 만든 이유 
    *   - 모든 정보가 다들어가 있어야 한다.
    *     : 어떤 위젯에, 몇번째 component에 어떤 eventType이 어떤 role, service를 가지고 있는지 추축을 해야한다. 
    *   - 즉 oEvent를 사용하지 말아야 한다.
    *   - 단위테스트 목적을 가지고 만든 것이다.
    * 
    * 
    * * ecFunction은 cindex가 없는 event를 처리를 해주기 위해서 
    *    - ecFunction에 세팅할 key값을 반드시 dom에 넣어줘야 한다. 
    * 
    * * ecFunction, ecRole
    *   - 성격은 비슷하다 
    *   - function으로 나누다가, 구분할 개념이 더 생겨 ecRole이 생겼다.
    * 
    * * triggerevent가 남아 있는 경우가 잇다. 
    *   - change 되는 경우
    *   - ecount.contorl.evnet.native.js > decorator에 서 control instance만 수행 한다.
    *   - dom이 없는 경우 
    *   - page쪽으로 나간다. 
    * 
    * 
    * 
  */
  var cid = event.target.getAttribute("data-cid");
  // ### 과제 1 TODO LIST  ### 
  // ref) ecount.event.native.js > triggerEventBubble function
  // 1. CREATE ecEvent
  // 2. FIND targetInstance
  // 3. CREATE page before handler -> cancle bubble 
  // 4. CREATE widget event bubbling -> cancle bubble 
  // 5. CREATE page event handler -> cancle bubble 

  // 6. ecount.observer

  // ### 과제 2 TODO LIST ###
  // single code - ui
  //  돋보기 클릭시 -> page에 이벤트 발생

  // ### 알아야 할 것 ### 
  // tab이동, form, form tab error 띄워 주는 방법, tab sync

  // * 예외 처리를 하기 위해서 event register 하는 단계가 생김 ( dispatcher ) 
  // * ecount.handler.event.js > 

  /**
   * * ecEvent.handler - eventType + control 
   * * event Type 추가
   *  - runtime에 listento 로 추가 
   *  - ecount.handler.event.js > register(eventType, decorator, dispatcher)에 등록(아래 evnet.native에 의해서)
   *     : decorator - event를 throating 또는 ecEvent외에 추가할 property를 만드는 공간
   *     : dispatcher - event를 dispatcher하는 부분(여기에 triggerEventBubble이 들어 있다.)
   *  - ecount.handler.event.native.js > 여기에 runtime에 추가한 event를 register(ecount.handler.event.js에 있는 function)에 등록
   * 
   *  - ecEventHandler
   *    > handle 
   *    > 
   */

  if(cid){
    var ecPath, target = event.target;    
    // # target으로 부터 가장 가까운 ecPath를찾기 위한 로직
    //    * jquery closeset function을 찾는 함수가 있다. 
    //    * 아래는 개념을 보여주기위해서 sample로 prototype code
    while(target){
      ecIkey = target.getAttribute('data-ecIkey');
      if(ecIkey){
        targetInstance.push(ecount.global.getEcInstance(ecIkey));
        break;
      }
      target = target.parentNode();
    }


    //ON_PAGE_BEFORE_CLICK
    // store: instnace간 data를 공유하기 위한/ pipe line 같은 역할
    var store = {};
    for( var k= 0, len = targetInstance.length; k < len; k++){
      targetInstance[k]["ON_" + ecEvent.oType](ecEvent, event, targetInstance[0], store);
    }

    //페이지 호출
    //ON_PAGE_CLICK
    //findPageInstance()
  }
  console.log(cid);
}

document.addEventListener("focusin", ecEventHandler);
document.addEventListener("focusout", ecEventHandler);
document.addEventListener("mouseodwn", ecEventHandler);
document.addEventListener("", ecEventHandler);

document.body.addEventListener('click', function(event){

  

});