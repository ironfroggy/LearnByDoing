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





















