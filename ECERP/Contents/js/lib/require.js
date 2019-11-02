/**
 * DOM API로 ESA002M.html, ESA008M.html 코드 작성
 * 기본 이론 - 자료형, 
 * 
 * 
 * 
 * 주의사항
 * 
 * 네임스페이스 기존으로 작성되어있어 상위 네임스페이스가 로딩되면 하위 네임스페이스 다 초기화됨
 * 반드시 하위까지 같이 내려야함
 * 
 * 
 * 
 * 
 * async defer 
 * https://blog.asamaru.net/2017/05/04/script-async-defer/
 * ==> 외부에 위치한 무슨뜻인지?
 * => 이 속성은 외부에 위치한 스크립트 파일에서만 사용할 수 있다. 외부 스크립트에 이 속성이 있으면 HTML 문서가 여전히 구문 분석되는 동안 파일을 다운로드 할 수 있으며 다운로드가 완료되면 스크립트가 실행될 수 있도록 구문 분석이 일시 중지 된다.
 * 
 * 
 * https://blog.asamaru.net/2017/05/04/understanding-the-critical-rendering-path/
 * 
 * getScript 함수 구현
 * "script dom api"
 * https://developer.mozilla.org/en-US/docs/Web/API/HTMLScriptElement
 * https://www.w3schools.com/jsref/dom_obj_script.asp
 * 
 * 
 * script.readyState
 * => 오페라 브라우저에서는 적용되지 않음(현재도 그런지는 확인 필요)
 * 
 * 
 * 스크립트 로딩 방법 script 태그, require
 * 왜 require를 할까
 * queue 로직 코딩 ==> asyncQueue 표준 모듈 작성
 * 
 * 기본적인 aync queue는 task를 처리할 함수만 다르다.
 * 1. queue에 task, 이벤트 핸들러 등록
 * 
 * 2. task를 처리할 로직만 다르다.
 * 
 * runAsyncTask = ecount.ayncTask(options)
 * 
 * Promise로 변경해본다.
 */


 






window.require = function(deps, callback){
    $.getScript({
        url: deps,
        success: callback,
        cache: true
    });
};