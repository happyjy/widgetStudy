ecount.page.factory("ecount.page", "ECP002M", {
    onInitHeader: function() {

    },

    onInitContents: function(contents) {
        const input = new ecount.control.input({
            id: "input1-WH",
            name: "CUST",
            value: "ecount"

        });
        //input.render();

        const radio = new ecount.control.radio({
            id: "radio1-WH",
            name: "WH",
            items: [
                {text:"받는창고", value: "1"},
                {text:"보내는창고", value: "2"}
            ]
        });
        //radio.render();


        const form = new ecount.layout.form();
        form.add(input);
        form.add(radio);
        form.render(contents);
    },

    onInitFooter: function() {
        
    }
});