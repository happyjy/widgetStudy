
require = (function() {
    var urlMap = {};

    var scriptLoader = function(key, callback) {
        var script = document.createElement("script");
        script.src = urlMap[key].url;
        script.async = true; //순서대로 로드안되는 경우에 true, 순서가 중요한 경우에는 false로 처리

        script.onreadystatechange = script.onload = function (evt) {
            var state = script.readyState;

            if ((evt && evt.type == "load") || /(loaded|complete)$/i.test(state)) {
                script.onreadystatechange = script.onload = null;
                callback();
            }
        };

        document.body.appendChild(script);
    };

    function requestScript(key) {
        return new Promise(function(resolve) {
            if (urlMap[key]) {
                if (!urlMap[key].complete) {
                    scriptLoader(key, function() {
                        urlMap[key].complete = true;
                        resolve();
                    });
                }
                else {
                    resolve();
                }
            }
            else {
                resolve();
                //실제로는 jquery.prototype.require - javascript 함수에서 해당 작업
                //scriptLoader(urlMap[key], callback);
            }
        })
    }

    return {
        //복수개가 들어온 경우
        load: function(/*url ,callback*/) {
            //url -> 로드완료 여부 체크
            //미로드시 요청 -> callback()
            //로드시 -> callback()
            var urls = [].slice.apply(arguments);
            var callback = urls.pop();
            var loadedCount = urls.length;


            //방법 1
            // urls.forEach(function(key) {
            //     if (urlMap[key]) {
            //         if (!urlMap[key].complete) {
            //             scriptLoader(key, function() {
            //                 urlMap[key].complete = true;
            //                 loadedCount--;
            //                 if (loadedCount == 0)
            //                     callback();
            //             });
            //         }
            //         else {
            //             loadedCount--;
            //             if (loadedCount == 0)
            //                 callback();
            //         }
            //     }
            //     else {
            //         //실제로는 jquery.prototype.require - javascript 함수에서 해당 작업
            //         //scriptLoader(urlMap[key], callback);
            //     }
            // })

            //방법 2
            var promises = [];
            urls.forEach(function(key) {
                promises.push(requestScript(key))
            })
            //들어 있는 모든 promise들이 resolve되면 then 실행시킴
            Promise.all(promises).then(callback);


            //방법 3
            //new RequestScript() 로 객체 관리 하기
        },

        //단수로 들어온 경우
        // load: function(key ,callback) {
        //     //url -> 로드완료 여부 체크
        //     //미로드시 요청 -> callback()
        //     //로드시 -> callback()
        //     if (urlMap[key]) {
        //         if (!urlMap[key].complete)
        //             scriptLoader(key, function() {
        //                 urlMap[key].complete = true;
        //                 callback();
        //             });
        //         else
        //             callback();
        //     }
        //     else {
        //         //실제로는 jquery.prototype.require - javascript 함수에서 해당 작업
        //         //scriptLoader(urlMap[key], callback);
        //     }
        // },

        define: function(config) {
            for (var key in config) {
                if (!urlMap[key] || urlMap[key].url != config[key]) {
                    urlMap[key] = {
                        url: config[key]
                    };
                }
            }

            console.log(urlMap);
        }
    } 
    
})();