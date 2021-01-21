//$(document).ready(function () {
//    $(".select2").select2();
//})
//$(document).ready(function () {
//    $(".collapse.show").each(function () {
//        $(this).prev(".card-header").find(".fa").addClass("fa-minus").removeClass("fa-plus");
//    });
//    $(".collapse").on('show.bs.collapse', function () {
//        $(this).prev(".card-header").find(".fa").removeClass("fa-plus").addClass("fa-minus");
//    }).on('hide.bs.collapse', function () {
//        $(this).prev(".card-header").find(".fa").removeClass("fa-minus").addClass("fa-plus");
//    });
//});
$(document).ready(function () {
    $(".select2").select2();
})
$(document).ready(function () {
    $('body').on('click', '.button-plus', function () {
        var $input = $(this).parent().siblings('input');
        if ($input.val() == "" || $input.val() == " ") { $input.val("1") } else {
            $input.val(parseInt($input.val()) + 1);
        }
    })
    $('body').on('click', '.button-minus', function () {
        var $input = $(this).parent().siblings('input');
        var count = parseInt($input.val());
        if (count > 0) {
            var newval = $input.val(parseInt($input.val()) - 1)
        } else {
            newval = 0
        }

    })
}
);

$(document).ready(function () {
    $(".collapse.show").each(function () {
        $(this).prev(".card-header").find(".fa").addClass("fa-minus").removeClass("fa-plus");
    });
    $(".collapse").on('show.bs.collapse', function () {
        $(this).prev(".card-header").find(".fa").removeClass("fa-plus").addClass("fa-minus");
    }).on('hide.bs.collapse', function () {
        $(this).prev(".card-header").find(".fa").removeClass("fa-minus").addClass("fa-plus");
    });
});

$(document).ready(function () {
    $(".custom-file-upload").on('click', function () {
        $(this).siblings(".upload").click();
    })
    $(".upload").on('change', function () {
        var numfirst = 0;
        if ($(this).val().indexOf('/') > 0) {
            numfirst = $(this).val().lastIndexOf('/');
        } else if ($(this).val().indexOf('\\') > 0) {
            numfirst = $(this).val().lastIndexOf('\\');
        }
        $(this).siblings(".custom-file-upload").html($(this).val().slice(numfirst + 1));
    })
})
function duplicatetlangtab(langId, langname, indx) {
    $(".custom-tab-1 .nav-tabs").append(`<li class="nav-item">
                        <a class="nav-link" data-toggle="tab" href="#lang`+ langId + `">` + langname + `</a>
                      </li>`);
    $(".tab-content").append(`<div class="tab-pane fade" id="lang` + langId + `" data-lang="` + langId + `">` + $(".tab-content #defaultlang").html() + `</div>`);

    var div = $('#lang' + langId);
    var txt = div.find('input');

    txt.parent().append('<input type="hidden" value="' + langId + '" name="Names.LanguageId[' + indx + ']" />');

    txt.attr('name', 'Names.Name[' + indx + ']')
        .val('')
        // used it
        .addClass('name-lang')
        .removeAttr('id')
        .removeAttr('data-val')
        .removeAttr('data-val-required')
        .attr('data-lang-id', langId).next('span').remove();

    //if (typeof makeHelpReadyToUse != undefined) {
    //    makeHelpReadyToUse();
    //}

}
$(document).ready(function () {
    if ($(".datepicker")) {
        $(".datepicker").pickadate({
            format: 'mm/dd/yyyy',
            monthsFull: ['íäÇíÑ', 'ÝÈÑÇíÑ', 'ãÇÑÓ', 'ÇÈÑíá', 'ãÇíæ', 'íæäíÉ', 'íæáíæ', 'ÇÛÓØÓ', 'ÓÈÊãÈÑ', 'ÇßÊæÈÑ', 'äæÝãÈÑ', 'ÏíÓãÈÑ'],
            weekdaysShort: ['ÇáÃÍÏ', 'ÇáÃËäíä', 'ÇáËáÇËÇÁ', 'ÇáÃÑÈÚÇÁ', 'ÇáÎãíÓ', 'ÇáÌãÚÉ', 'ÇáÓÈÊ'],

            // Buttons
            today: 'Çáíæã',
            clear: 'ãÓÍ',
            close: 'ÛáÞ',

            // Accessibility labels
            labelMonthNext: 'ÇáÔåÑ ÇáÊÇáí',
            labelMonthPrev: 'ÇáÔåÑ ÇáÓÇÈÞ',
            labelMonthSelect: 'ÇÎÊÑ ÔåÑ',
            labelYearSelect: 'ÇÎÊÑ ÚÇã',
        });
    }
    if ($(".year")) {
        $(".year").pickadate({
            format: "yyyy",
            startView: 'decade',
            minView: 'decade',
            viewSelect: 'decade',
            autoclose: true,

        });

    }
})
$('.datepicker').pickadate({
    format: 'mm/dd/yyyy',
    monthsFull: ['يناير', 'فبراير', 'مارس', 'ابريل', 'مايو', 'يونية', 'يوليو', 'اغسطس', 'سبتمبر', 'اكتوبر', 'نوفمبر', 'ديسمبر'],
    weekdaysShort: ['الأحد', 'الأثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت'],

    // Buttons
    today: 'اليوم',
    clear: 'مسح',
    close: 'غلق',

    // Accessibility labels
    labelMonthNext: 'الشهر التالي',
    labelMonthPrev: 'الشهر السابق',
    labelMonthSelect: 'اختر شهر',
    labelYearSelect: 'اختر عام',
});

$(document).ready(function () {
    $('.plusminus').on('click', '.button-plus', function () {
        var $input = $(this).siblings('input');
        $input.val(parseInt($input.val()) + 1);
    })
    $('.plusminus').on('click', '.button-minus', function () {
        var $input = $(this).siblings('input');
        var count = parseInt($input.val());
        if (count > 0) {
            var newval = $input.val(parseInt($input.val()) - 1)
        } else {
            newval = 0
        }

    })
}
);
$(document).ready(function () {
    var $datetime;

    var datepicker = $('#datetime').pickadate({
        formatSubmit: 'dd/mm/yyyy',
        monthsFull: ['يناير', 'فبراير', 'مارس', 'ابريل', 'مايو', 'يونية', 'يوليو', 'اغسطس', 'سبتمبر', 'اكتوبر', 'نوفمبر', 'ديسمبر'],
        weekdaysShort: ['الأحد', 'الأثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت'],

        // Buttons
        today: 'اليوم',
        clear: 'مسح',
        close: 'غلق',

        // Accessibility labels
        labelMonthNext: 'الشهر التالي',
        labelMonthPrev: 'الشهر السابق',
        labelMonthSelect: 'اختر شهر',
        labelYearSelect: 'اختر عام',
        container: '#containerdatetime',

        // min: [2015, 7, 14],
        // editable: true,
        closeOnSelect: true,
        closeOnClear: false,
        // Buttons
        today: false,
        // Formats
        onSet: function (item) {
            if ('select' in item) setTimeout(timepicker.open, 0);
        }
    }).pickadate('picker');

    var timepicker = $('#time').pickatime({
        container: '#containerdatetime',
        format: 'H:i ساعة',
        interval: 60,
        clear: 'مسح',

        onRender: function () {
            $('<button class="btn btn-danger">رجوع</button>').on('click', function () {
                timepicker.close();
                datepicker.open();
            }).prependTo(this.$root.find('.picker__box'));
        },
        onSet: function (item) {
            if ('select' in item) setTimeout(function () {
                $('.js-datepicker.active').val(datepicker.get() + '  ' + timepicker.get());
                $('.js-datepicker').removeClass('active');
                $('.active_name').val($('input[name=date_submit]').val() + ' ' + $('#time').val().replace(' horas', '')).removeClass('active_name');

            }, 0)
        }
    }).pickatime('picker');

    $('.js-datepicker').each(function () {
        var me = $(this);

        $(this).on('focus', function (event) {
            $(this).addClass('active');
            $('input[name=' + event.target.name + '_date]').addClass('active_name');
        });

        $datetime = $(this).on('focus', datepicker.open).on('click', function (event) {
            event.stopPropagation();
            datepicker.open();
        });
    });

    $('.datepicker').pickadate({
        format: 'mm/dd/yyyy',
        monthsFull: ['يناير', 'فبراير', 'مارس', 'ابريل', 'مايو', 'يونية', 'يوليو', 'اغسطس', 'سبتمبر', 'اكتوبر', 'نوفمبر', 'ديسمبر'],
        weekdaysShort: ['الأحد', 'الأثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت'],

        // Buttons
        today: 'اليوم',
        clear: 'مسح',
        close: 'غلق',

        // Accessibility labels
        labelMonthNext: 'الشهر التالي',
        labelMonthPrev: 'الشهر السابق',
        labelMonthSelect: 'اختر شهر',
        labelYearSelect: 'اختر عام',
    });
});
$(document).ready(function () {
    $('.js-example-basic-multiple').select2();
});
$(document).ready(function () {
    $(".main-files").on('click', ".custom-file-upload", function () {
        $(this).siblings(".file-upload").click();
    })
    $(".main-files").on('change', ".file-upload", function () {
        var numfirst = 0;
        if ($(this).val().indexOf('/') > 0) {
            numfirst = $(this).val().lastIndexOf('/');
        } else if ($(this).val().indexOf('\\') > 0) {
            numfirst = $(this).val().lastIndexOf('\\');
        }
        $(this).siblings(".custom-file-upload").html($(this).val().slice(numfirst + 1));
    })
});
$(document).ready(function () {
    $(".main-data").on('click', ".custom-file-upload", function () {
        $(this).siblings(".upload").click();
    })
    $(".main-data").on('change', ".upload", function () {
        var numfirst = 0;
        if ($(this).val().indexOf('/') > 0) {
            numfirst = $(this).val().lastIndexOf('/');
        } else if ($(this).val().indexOf('\\') > 0) {
            numfirst = $(this).val().lastIndexOf('\\');
        }
        $(this).siblings(".custom-file-upload").html($(this).val().slice(numfirst + 1));
    })
});
