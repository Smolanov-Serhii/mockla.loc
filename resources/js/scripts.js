$(document ).ready(function() {

    if ($(".login-popup").length){
        $(".js-try").click( function(e) {
            $('body').toggleClass('locked');
            $('.body-fade').fadeToggle(300);
            $('.login-popup').fadeToggle(300);
        });
        $(".login-popup__close").click( function(e) {
            $('body').toggleClass('locked');
            $('.body-fade').fadeToggle(300);
            $('.login-popup').fadeToggle(300);
        });
    };

    if ($(".selectrik").length){
        $('select.selectrik').selectric();
    };

    if($('.tabs-elements').length){
        $(".tabs-elements .tabs-nav-item").click(function() {
            $(".tabs-elements .tabs-nav-item").removeClass("active").eq($(this).index()).addClass("active");
            $(".tabs-elements .tabs-content-item").hide().eq($(this).index()) .css("display", "flex")
                .hide()
                .fadeIn();
        }).eq(0).addClass("active");
        $(".tabs-elements .tabs-content-item").eq(0).addClass("active");
    }

    if ($(".faq-block1").length){
        $(".faq-block1__item-header").click( function(e) {
            $(this).closest('.faq-block1__item').toggleClass('active');
            $(this).closest('.faq-block1__item').find('.faq-block1__item-content').fadeToggle(300);
        });

    };

    function submitFromAuthForm(e) {
        e.preventDefault();

        var formData = new FormData(this);

        for (var key of formData.keys()) {

            if (validation_title = $(`label[for=${key}] .validate`)[0]) {
                validation_title.innerHTML = '';
            }
        }

        $.ajax({
            method: this.method,
            url: this.action,
            data: formData,
            dataType: 'JSON',
            contentType: false,
            cache: false,
            processData: false,
            success: function (data, textStatus, jqXHR) {
                console.log(data, textStatus, jqXHR)
                if(jqXHR.status == 204) {
                    console.log(data)
                    return ;
                }
                document.location.href = data.redirectTo;
            }
        })
            .catch(function (data) {

                $.each(data.responseJSON.errors, function (key, value) {
                    $(`label[for=${key}] .validate`)[0].innerHTML = value[0];
                })
            })

        return false;
    }

    $('#register_form').submit(submitFromAuthForm)
    $('#login_form').submit(submitFromAuthForm)

    if ($(".js-search").length){
        $(".js-search").click( function(e) {
            $('body').toggleClass('locked');
            $('.body-fade').fadeToggle(300);
            $('.search-popup').fadeToggle(300);
        });
        $(".search-popup__close").click( function(e) {
            $('body').toggleClass('locked');
            $('.body-fade').fadeToggle(300);
            $('.search-popup').fadeToggle(300);
        });
    };

    $(".faq__item-header").click( function(e) {
        $(this).closest('.faq__item').toggleClass('active');
        $(this).closest('.faq__item').find('.faq__item-content').fadeToggle(300);
    });

    if ($('.list').length){
        $( ".list .list__content" ).each(function() {
            var masonry = new Macy({
                container: this,
                trueOrder: true,
                waitForImages: false,
                useOwnImageLoader: false,
                debug: true,
                mobileFirst: true,
                columns: 6,
                margin: {
                    y: 40,
                    x: 20,
                },
                breakAt: {
                    1440: 6,
                    1200: 5,
                    940: 4,
                    768: 3,
                    500: {
                        margin: {
                            x: 20,
                            y: 40,
                        },
                        columns: 2
                    },
                    350: {
                        margin: {
                            x: 10,
                            y: 40,
                        },
                        columns: 2
                    },
                    300: {
                        margin: {
                            x: 10,
                            y: 40,
                        },
                        columns: 1
                    },
                },
            });
        });
    }

    if ($('#category_result').length){
        $( "#category_result" ).each(function() {
            var MacyResult = new Macy({
                container: this,
                trueOrder: true,
                waitForImages: false,
                useOwnImageLoader: false,
                debug: true,
                mobileFirst: true,
                columns: 5,
                margin: {
                    y: 40,
                    x: 20,
                },
                breakAt: {
                    1440: 6,
                    1200: 5,
                    940: 4,
                    768: 3,
                    500: {
                        margin: {
                            x: 20,
                            y: 40,
                        },
                        columns: 2
                    },
                    350: {
                        margin: {
                            x: 10,
                            y: 40,
                        },
                        columns: 2
                    },
                    300: {
                        margin: {
                            x: 10,
                            y: 40,
                        },
                        columns: 1
                    },
                },
            });
        });

    }
});
