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
            monthsFull: ['Ì‰«Ì—', '›»—«Ì—', '„«—”', '«»—Ì·', '„«ÌÊ', 'ÌÊ‰Ì…', 'ÌÊ·ÌÊ', '«€”ÿ”', '”» „»—', '«ﬂ Ê»—', '‰Ê›„»—', 'œÌ”„»—'],
            weekdaysShort: ['«·√Õœ', '«·√À‰Ì‰', '«·À·«À«¡', '«·√—»⁄«¡', '«·Œ„Ì”', '«·Ã„⁄…', '«·”» '],

            // Buttons
            today: '«·ÌÊ„',
            clear: '„”Õ',
            close: '€·ﬁ',

            // Accessibility labels
            labelMonthNext: '«·‘Â— «· «·Ì',
            labelMonthPrev: '«·‘Â— «·”«»ﬁ',
            labelMonthSelect: '«Œ — ‘Â—',
            labelYearSelect: '«Œ — ⁄«„',
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
