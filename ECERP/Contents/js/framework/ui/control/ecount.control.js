if (!window.ecount) window.ecount = {};

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

ecount.control.input = class extends ecount.control {
    constructor(options) {
        super(options);
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