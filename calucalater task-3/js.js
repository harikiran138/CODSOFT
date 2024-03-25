var keypad = document.querySelector('.keypad');
var txt = document.getElementById('out')
let ok = true; // To Evit Repeat Operator two Time lik 3++4
let afterEqual = false;
let isdot = false;
keypad.addEventListener('click', e => {
    if (e.target.classList.contains('number')) {
        console.log(e.target.id);
        txt.value += e.target.id;
        ok = true;
    }
    if (e.target.classList.contains('deleteChar')) {
        var h = txt.value;
        var txtttt = h.slice(0, h.length - 1);
        txt.value = txtttt;
    }
    if (e.target.classList.contains('operator')) {
        if (txt.value != '') {
            if (e.target.id == '=') {
                var out = eval(txt.value);
                txt.value = '';
                if (Number.isInteger(out)) {
                    txt.value = out;
                } else {
                    txt.value = Number(out).toFixed(7);
                }
            } else if (e.target.id == 'c') {
                txt.value = '';
                isdot = false;
            } else {
                if (ok === true) {
                    txt.value += e.target.id;
                    isdot = false;
                }
                ok = false;
            }
        }
    }
    if (e.target.classList.contains('dot')) {
        if (isdot === false) {
            txt.value += e.target.id;
            isdot = true;
        }
    }
});