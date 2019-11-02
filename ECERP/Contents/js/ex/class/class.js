/**
 * > prototype을 활용한 클래스 설계 및 상속 패턴에 대한 이해
 * 1. prototype 정의
 * 
 * 
 * 
 * [day3] - 클래스, prototype, extend 개념 이해 및 예제 코드 작성
 * 기존 DOM 코드 => radio, input 클래스로 변경
 * control 클래스 만들면서 prototype, extend 개념 설명
 * $.Class 로직 구현
 * 
 * [day4] - 주요 control 위젯 개발
 *  ## control = 기능을 가지는 최소 단위 위젯
 *  ##기능 명세
 *      [input, radio, select, button]
 *      init - id, name, defalut 값을 받는다.
 *      render - 돔 생성후 화면에 표시한다.
 *      getValue - 화면에 표시된 값을 반환한다.
 *      setValue - 입력 받은 값을 화면에 표시한다.
 *      serialize - {name, value} 값을 가진 오브젝트를 반환한다.
 *      reset - 초기 값을 화면에 표시한다.
 *      
 *  ## cindex 이해 - 심화
 *      onFocus, onNextFocus, onFocusout
 *  
 * 
 *  ## input 위젯을 샘플로 만들어주고, radio, select, button 실습
 *  - this.$el, template 개념 이해
 *   
 *  ## ecount.control 부모 클래스 실습
 *      -- control.js
 *          init
 *          render
 *          createHTML
 *          serialize
 *          reset
 * 
 * [day5] - 주요 layout 개발
 *  form - itemList 개념 
 *  tabContents - tab, tabPane, 
 *      - click이벤트 처리, event delegator 적용
 * 
 *  
 * 
 * 
 * [layout] - control을 배치하는 위젯
 * init
 * render
 * getControl - itemList 개념, DFS
 *      https://www.bsidesoft.com/?p=7190
 *      json이나 js의 오브젝트는 복잡한 계층구조를 갖고 있어 깊은 복사나 각 원소 전체에 뭔가 적용할 때 그래프구조를 갖습니다.
 *      그래프 구조를 루프돌 때 다양한 기법이 있지만 제어문과 스택을 사용하면 간단하면서도 고속으로 처리할 수 있습니다.
 *      사실 꼬리물기 최적화의 원리를 이해한다면 다음 함수 호출 시 인자를 메모리처럼 사용한다는 사실로부터 매번 만들어지는 인자를 스택 구조에 저장하여 꺼내는 것으로 얼마든지 제어문의 루프로 바꿀 수 있다는 것을 알 수 있습니다.
 *   　
 * serialize
 * reset
 * 
 * [header]
 * quick search
 * helper
 * bookmark
 * search form
 * 
 * 
 * [form]
 * initializer(ecount.widget.initializer - 페이지에 정의된 콜백아이디 정리) onInitControl 호출
 * getFormTypeControl - 양식 설정 데이터 추가
 * 1단, 2단 설정가능하게 - 과제
 * 
 * 타이틀 링크 - 심화
 * moveFocus - 심화
 * 듀얼모드 - 심화 
 * group row - 심화
 * 
 * 
 * [tabContents]
 * tab와 tabPane으로 구성됨
 * activeTab 설정
 * singleMode
 * 탭클릭시 페이지 서브밋
 * error 표시   - 심화
 * 탭간 씽크 기능 - 심화
 * 인클루드 페이지 로드(layout.page) - 심화
 * 사용자탭 - 과제(난이도 상) - 심화
 * 
 * [tab]
 * dropdown layer
 * 사용자탭
 * contextmenu
 * 
 * [tabPane]
 * active
 * deactive
 * redrawControl
 * 
 * 
 * [container]
 * header - quicksearch, 도움말
 * find (getForm, getGrid, getTabContents)
 * 
 * 
 * 
 */

 ecount.control.input = function(){}

