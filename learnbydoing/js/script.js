/* Author: 

*/

var GFX = {
    objects: []
,   tick_callbacks: []
};

function __reset_canvas() {
    GFX.canvas = $('#canvas')[0]
    GFX.ctx = GFX.ctx || GFX.canvas.getContext('2d');
    GFX.ctx.fillStyle = "rgb(255, 255, 255)";
    GFX.ctx.fillRect(0, 0, 400, 300);
};
__reset_canvas();

function __tick() {
    __reset_canvas();
    $.each(GFX.tick_callbacks, function(i, func) {
        func();
    });
    $.each(GFX.objects, function(i, obj) {
        obj.draw();
    });
}
setInterval(__tick, 33);

$('#run').click(function(){
    var code = $('#code').val()
    ;

    var js_code = Pyscript.compile(code);

    console.log(js_code);

    eval(js_code);
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

function graphics_mode() {
    $('#right').attr('class', 'gfx');
    __reset_canvas();
}

function repeat(func) {
    GFX.tick_callbacks.push(func);
}

function _Rectangle(x, y, x2, y2) {
    this.x = x;
    this.y = y;
    this.x2 = x2;
    this.y2 = y2;

    this.draw = function() {
        GFX.ctx.fillStyle = "rgb(200, 0, 0)";
        GFX.ctx.fillRect(this.x, this.y, this.x2, this.y2);
    };
}

function rectangle(x, y, x2, y2) {
    var R = new _Rectangle(x, y, x2, y2);
    GFX.objects.push(R);
    return R;
}
