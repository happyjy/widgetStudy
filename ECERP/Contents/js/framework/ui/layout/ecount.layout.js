ecount.layout = class {
    constructor(options){
        this.options = options;
        this.itemList = [];
    }
}

ecount.layout.form = class extends ecount.layout {
    constructor(options){
        super(options);
    }

    add(control) {
        this.itemList.push(control);
    }

    render(parents) {  
        this.$el = $("<table></table>")
        this.itemList.forEach(item => {
            const $tr = $("<tr/>");
            const $td_title = $(`<td>${item.getTitle()}</td>`);
            const $td_child = $(`<td/>`);
            item.render($td_child);

            $tr.append($td_title);
            $tr.append($td_child);
            this.$el.append($tr);
        })
        
        if (parents.length > 0)
            parents.append(this.$el);
        else
            $("body").append(this.$el);
    }
}