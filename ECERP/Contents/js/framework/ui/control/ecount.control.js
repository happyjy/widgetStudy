if (!window.ecount) window.ecount = {};

/**
 * * 이전에는 view를 직접 바꿈으로 view를 관리 하고 있었다.
 *   현재는 mvvm 패턴을 사용하고 있다. 
 * 
 * * mvvm
 *    - view, viewmodel은 데이터 중심으로 frontend 구조를 변경하는 것이다.
 *    - viewmodel: view를 추상화한 layer(view를 가지고 있는 data == state)
 *
 * * state - view에 종속된 상태 정보
 *    component state - focus를 가지는 el 상태 집합
 *    component - 포커스를 가지는 el/ c-index를 가지고 있음/ c-index를 가지고 있는 el/ enter로 기동이 가능한 el
 *    functions - 포커스가 가지 않고 이벤트 처리 필요로 하는 것을 functions property에 넣는다.
 *              - eg) multi date에서 ~표시와, 달력 icon이 functions
 */

ecount.control = class {
    constructor(options) {
        this.options = options;
    }

    getTitle() {
        return this.options.id;
    }

    //form에 붙일 때 사용
    render ($parent) {
        $parent.append(this.getTemplate());
    }
}

ecount.control.codes = class extends ecount.control {
  // # widget만들때 고려해야 할 것 
  //1. state 설계
  //2.  
}

//viewModel
ecount.control.input = class {
    constructor(options) {
        // super(options);
        this.options = options;
        //readonly, display toggle 
        this._state = {
          readonly: false,
          display: true
        };

        this.ecview = new ecount.control.input.view();
    }
    render($parent){
      this.ecview.render($parent)
    }
    getTitle(){
      return this.options.id;
    }
    setReadonly(readonly){
      this.setState("reaondly", readonly);
    }
    setState(path, state){
      if(this.getState(path) != state){
        //view update
      }
    }

    //개별 랜더 후 body에 붙이기
    // render() {
    //     $("body").append(this.getTemplate());
    // }

    getTemplate() {
        return `<input type="text" id ="${this.options.id}" 
                    name = "${this.options.name}" 
                    value = "${this.options.value}"> `;
    }


    getValue() {}
    setValue() {}
    extract() {}
    reset() {}
}

ecount.control.input.view = class {
  constructor(){

  }
  getTemplate() {
    return `<input type='text'>`;
  }
  render($parent){
    $parent.append($(this.getTemplate()));
  }
}

ecount.control.radio = class extends ecount.control {
    constructor(options) {
        super(options);
    }

    //개별 랜더 후 body에 붙이기
    // render() {
    //     $("body").append(this.getTemplate());
    // }

    getTemplate() {
        return this.options.items.map(item => {
            return `<input type="radio" id ="${this.options.id}" 
                    name = "${this.options.name}" 
                    value = "${item.value}">${item.text}`;
        }).join("");
    }
}


