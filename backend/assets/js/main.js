$(document).ready(function () {
    $(".select2").select2();
})
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
$('#file-upload').change(function () {
    var i = $(this).prev('label').clone();
    var file = $('#file-upload')[0].files[0].name;
    $(this).prev('label').text(file);
});
$('#upload').change(function () {
    var i = $(this).prev('label').clone();
    var file = $('#upload')[0].files[0].name;
    $(this).prev('label').text(file);
});