$(function () {
    // recenser tous les badges dans un tableau
    const spans = $('span.skills');
    const badges = new Array();
    const badge_classes = 'bg-info';
    const master_badge_classes = 'bg-light masterbadge';
    spans.each(function () {
        $(this).addClass("badge text-dark");
        if (badges.indexOf($(this).html().toUpperCase()) === -1) {
            badges.push($(this).html().toUpperCase());
            $(this).addClass(badge_classes);
            $(this).addClass(master_badge_classes);

            $(this).on({
                mouseenter   : function (event) {
                    // rechercher tous les span.skill ayant le même html
                    // et leur appliquer les classes
                    spans.each(function () {
                        if ($(event.target).html() === $(this).html() && !$(this).hasClass(master_badge_classes)) {
                            $(this).addClass(badge_classes);
                        }
                    })
                }, mouseleave: function (event) {
                    spans.each(function () {
                        if ($(event.target).html() === $(this).html() && !$(this).hasClass(master_badge_classes)) {
                            $(this).removeClass(badge_classes);
                        }
                    })
                }
            });
        }
    });
});
