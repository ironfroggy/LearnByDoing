/* Author: 

*/

$('#run').click(function(){
    var code = $('#code').val()
    ;

    eval(Pyscript.compile(code));
});

function print(text) {
    var o = $('#output');
    o.val(o.val() + text + '\n');
};

function clear() {
    $('#output').val('');
}

function range(x) {
    var l = [];
    for (var i=0;i++;i<x) {
        l.push(i);
    }
    return l;
}


















