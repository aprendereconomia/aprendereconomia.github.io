$('.videoModal').on('hide.bs.modal', function (e) {
    var $if = $(e.delegateTarget).find('iframe');
    var src = $if.attr("src");
    $if.attr("src", '/empty.html');
    $if.attr("src", src);
});

function filter_list(e) {
    let element_text = $(e).val();

    let search_text = element_text.normalize("NFC").toLowerCase().trim();
    let search_pattern = new RegExp(search_text, 'i');
    let list = $(e).parent().parent().next(".list-group").children(".list-group-item");

    list.each(function (idx, el) {
        let text = $(el).text().normalize("NFC").toLowerCase().trim();

        if (search_pattern.exec(text)) {
            $(el).css("display", "inline");
        } else {
            $(el).css("display", "none");
        }
    });
}
