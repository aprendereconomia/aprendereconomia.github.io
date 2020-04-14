$('.videoModal').on('hide.bs.modal', function (e) {
    var $if = $(e.delegateTarget).find('iframe');
    var src = $if.attr("src");
    $if.attr("src", '/empty.html');
    $if.attr("src", src);
});

// (() => {
//     el = $(".presentationModal");
//     console.log(/Mobi/.test(navigator.userAgent));
//     if (!(/Mobi/.test(navigator.userAgent))) {
//         el.children().find(".modal-footer").append("<a class='btn btn-primary text-white' href='{{ site.baseurl }} /{{ pres.src }}' download='{{ pres.src }}'>Baixar apresentação</a >");
//     }
// })();