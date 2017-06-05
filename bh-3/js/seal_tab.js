(function ($) {

    $.fn.m​​axHeight = function () {

        var max = 0;

        this.each(function () {
            max = Math.max(max, $(this).height());
        });

        return max;
    };
})(jQuery);

var tallest = $('div').maxHeight()//返回高度最大的div元素的高度