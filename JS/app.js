(function () {
    'use strict';

    const elms = document.getElementsByClassName("mb-loader");
    for (let i = 0; i < elms.length; i++) {
        const elm = elms[i];
        let mbCount = +elm.getAttribute("mb-count");
        const mbSize = +elm.getAttribute("mb-size");

        let divs = "";
        if (mbSize > 0) {
            divs = `<div  style="width: ${mbSize}px; height: ${mbSize}px">`;
            mbCount --;
        }
        for (let i = 0; i < mbCount; i++) {
            divs += "<div>";
        }
        for (let i = 0; i < mbCount; i++) {
            divs += "</div>";
        }
        if (mbSize > 0) {
            divs += `</div>`;
        }
        

        elm.innerHTML = divs;
    }
    
})();