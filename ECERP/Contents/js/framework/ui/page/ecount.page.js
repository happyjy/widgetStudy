ecount.class = function(parent, ownPrototype) {
    var createNamespace = function (namespace, target) {
        var namespace = namespace ? namespace.split(".") : "";
        var inst = target || window;

        for (var i = 0; i < namespace.length; i++) {
            if (typeof inst[namespace[i]] === "undefined") {
                inst[namespace[i]] = {};
            }
            inst = inst[namespace[i]];
        }
        return inst;
    };


    //3.page instance 생성
    //회사 소스
    //var parentInstance = new $.Class(parent, page);


    var ctor = function() {};
    var klass = function () {
        this.init.apply(this, arguments);
    };

    if (parent != null) {
        var parentObject = createNamespace(parent);
        ctor.prototype = parentObject.prototype;
        klass.prototype = new ctor();
        ctor.prototype = null; //avoid leaks; -> ecount.page에서 init을 호출하는 것을 막기 위해 빈 객체 prototype으로 대체하여 처리
        //ecount.page.list에서는 ecount.page를 상속받기 때문에 init이 있으므로 처리 가능
    }

    for (var prop in ownPrototype) {
        klass.prototype[prop] = ownPrototype[prop];
    }
    
    return klass;
}



ecount.page = ecount.class(null, {
    init: function(options) {
        console.log("init");
        this.viewBag = options.viewBag;

        this.$contents = $("#mainPage");

        this.onInitHeader();
        this.onInitContents(this.$contents);
        this.onInitFooter();
    }
});

ecount.page.factory = function(parent, pageID, page) {

    // 묘듈 로더라고 보면 됨. nodejs에서 사용되고 있는 방식(AMD방식)
    // require("ecount.control.js", "ecount.layout.js", function() {

    // }); 

    //1. parent 로드 확인
    //2. 공통 스크립트 버전 확인
    //3. page instance 생성

    //1. 2. 작업
    // require.load(parent, function() {
    //     //부모가 등록이 되면, 기본적으로 등록되어야 하는 파일들을 등록(widget, grid 등)
    //     //원래는 parent할 때 같이 되긴 함.
    //     //비동기로 처리
    //     require.load("ecount.control", "ecount.layout", function() {
    //         console.log("file load complete!");
    //     });

    //     //중요!!!!!!
    //     //[]로 묶으면 순서대로 처리
    //     // require.load(["ecount.control", "ecount.layout"], function() {
    //     //     console.log("file load complete!");
    //     // });


        
    // });




    //위 소스를 promise로 처리하면 소스가 깔끔해짐
    new Promise(function(resolve) {
        if (parent == "ecount.page"){
            resolve();
        }
        else {
            require.load(parent, resolve);
        }
    })
    .then(function(resolve) {
        return new Promise(function(resolve) {
            require.load("ecount.control", "ecount.layout", resolve);
        })
    })
    .then(function(resolve) {
        
        var newPage = new (ecount.class(parent, page))({
            viewBag: window.viewBag
        });
        
        console.log(newPage);
    })


    //3.
}