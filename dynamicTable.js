(function($){
    let firstTd = $(".row1 td:first");
    firstTd.focus();
    document.onkeydown = checkKey;

    let i = 1;
    function checkKey(e){
        if(e.keyCode == 9){  
            let lastCell = $(`.row${i} td:last-child`)[0];
            if(e.target == lastCell){
                makeRow();
            }
        }
    }

    function makeRow(){
        i += 1;
        let tBody = $(".product-table tbody");
        tBody.append(`<tr class="row${i}"><td contenteditable="true">
                                        </td><td contenteditable="true"></td>
                                        <td contenteditable="true"></td></tr>`);
    }
})(jQuery);