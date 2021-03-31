$(function () {
    // recenser tous les badges dans un tableau
    const spans = $('span.skills');
    const badge_classes = 'bg-info';
    spans.each(function () {
        $(this).addClass("badge text-dark");
        $(this).on({
            mouseenter   : function (event) {
                // rechercher tous les span.skill ayant le même html
                // et leur appliquer les classes
                spans.each(function () {
                    if ($(event.target).html() === $(this).html() && !$(event.target).closest("div.projet").find("div.border.rounded").is($(this).closest("div.projet").find("div.border.rounded"))) {
                        $(this).addClass(badge_classes);
                        $(event.target).addClass(badge_classes);
                        $(this).closest("div.projet").find("div.border.rounded").addClass("border-info");
                    }
                })
            }, mouseleave: function (event) {
                spans.each(function () {
                    if ($(event.target).html() === $(this).html() && !$(event.target).closest("div.projet").find("div.border.rounded").is($(this).closest("div.projet").find("div.border.rounded"))) {
                        $(this).removeClass(badge_classes);
                        $(event.target).removeClass(badge_classes);
                        $(this).closest("div.projet").find("div.border.rounded").removeClass("border-info");
                    }
                })
            }
        });
    });
    const main_job_title = $("span.main_job_title");
    $("div.color-switch").on({
        click: function (event) {
            // var myColor=$(this).attr('data-switch');
            const myTargets = $('div[class*="bg-"]');
            main_job_title.addClass('flag-bg-change_mjt');
            myTargets.addClass('flag-bg-change');
            main_job_title.removeClass("bg-custom-1_1 bg-custom-2_1 bg-custom-3_1");
            myTargets.removeClass("bg-custom-1 bg-custom-2 bg-custom-3");
            $(".flag-bg-change_mjt").addClass($(this).attr('data-switch') + "_1");
            $(".flag-bg-change").addClass($(this).attr('data-switch'));
            main_job_title.removeClass('flag-bg-change_mjt');
            myTargets.removeClass("flag-bg-change");
        }
    });
    $('#carouselExampleSlidesOnly').on({
        click: function () {
            console.log("jnhjhk");
            $('#carouselExampleSlidesOnly').carousel('next') // Will slide to the slide 2 as soon as the transition to slide 1 is finished
        }
    });

    $("#formControlRange").on({
        input: function () {
            const level1 = $('*[class*="info-level-1"]');
            const level2 = $('*[class*="info-level-2"]');
            const level3 = $('*[class*="info-level-3"]');
            const level4 = $('*[class*="info-level-4"]');
            switch(Math.ceil($(this).val()/25)) {
                case 0:
                    $('*[class*="info-level"]').hide();
                    break;
                case 1:
                    level1.show();
                    break;
                case 2:
                    level1.show();
                    level2.show();
                    break;
                case 3:
                    level1.show();
                    level2.show();
                    level3.show();
                    break;
                case 4:
                    level1.show();
                    level2.show();
                    level3.show();
                    level4.show();
                    break;
                default:
                    break;
            }
        }
    });
});
