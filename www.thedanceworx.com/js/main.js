$(function() {
    var e = $(".start-style");
    $(window).scroll(function() {
        $(window).scrollTop() >= 10 ? (e.removeClass("start-style").addClass("scroll-on"), $(".navigation-wrap").css("top", "0")) : (e.removeClass("scroll-on").addClass("start-style"), $(".navigation-wrap").css("top", "40px"), $(".homeslider-main").css("margin-top", "58px"))
    }), $('[data-fancybox="Photo-Gallery"]').fancybox({
        afterLoad: function(e, r) {
            r.$image.attr("alt", r.opts.$orig.attr("alt"))
        }
    })
}), $("body").on("mouseenter mouseleave", ".nav-item", function(e) {
    if ($(window).width() > 750) {
        var r = $(e.target).closest(".nav-item");
        r.addClass("show"), setTimeout(function() {
            r[r.is(":hover") ? "addClass" : "removeClass"]("show")
        }, 1)
    }
}), $(".inneritem-dropdown").click(function() {
    let e = $(this).find(".dropdown__menu");
    e && e.toggleClass("dropdown__menu--active")
});
var setSwiperSlideTimeout = function(e) {
        var r = $(e.slides[e.activeIndex]).data("timeout");
        void 0 !== r && "" !== r && 0 !== r || (r = 2500), e.params.autoplay = r, e.update(), e.startAutoplay()
    },
    swiper = new Swiper(".topbannerslider", {
        pagination: ".topbannerslider .swiper-pagination",
        slidesPerView: 1,
        paginationClickable: !0,
        spaceBetween: 0,
        effect: "fade",
        loop: !0,
        autoplay: 0,
        autoplayDisableOnInteraction: !1,
        speed: 1200,
        fadeEffect: {
            crossFade: !0
        },
        virtualTranslate: !0,
        onInit: function(e) {
            e.stopAutoplay(), setSwiperSlideTimeout(e)
        },
        onSlideChangeEnd: function(e) {
            e.stopAutoplay(), setSwiperSlideTimeout(e)
        },
        onSlideChangeStart: function() {
            setTimeout(function() {
                $(".swiper-slide-active video").each(function(e) {
                    this.currentTime = 0
                })
            }, 500)
        }
    });
$(".scroll").on("click", function() {
    return $(".scroll").parents().removeClass("active"), $(this).parents().addClass("active"), $("html, body").animate({
        scrollTop: $(this.hash).offset().top - 20
    }, 1e3), !1
});
var event = new Swiper(".eventslider", {
        nextButton: ".eventslider .swiper-button-next",
        prevButton: ".eventslider .swiper-button-prev",
        direction: "horizontal",
        slidesPerView: 2,
        spaceBetween: 40,
        loop: !1,
        breakpoints: {
            640: {
                slidesPerView: 1,
                spaceBetween: 10
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 20
            }
        }
    }),
    teach = new Swiper(".teachslider", {
        pagination: ".teachslider .swiper-pagination",
        direction: "horizontal",
        paginationClickable: !0,
        slidesPerView: 4,
        spaceBetween: 18,
        loop: !1,
        autoplay: 2500,
        breakpoints: {
            640: {
                slidesPerView: 1
            },
            768: {
                slidesPerView: 2
            }
        }
    }),
    insta = new Swiper(".instaslider", {
        pagination: ".instaslider .swiper-pagination",
        direction: "horizontal",
        paginationClickable: !0,
        slidesPerView: 6,
        spaceBetween: 0,
        loop: !1,
        autoplay: 5e3,
        breakpoints: {
            640: {
                slidesPerView: 1
            },
            768: {
                slidesPerView: 2
            }
        }
    });
$(".count").each(function() {
    $(this).prop("Counter", 0).animate({
        Counter: $(this).text()
    }, {
        duration: 1e4,
        easing: "swing",
        step: function(e) {
            $(this).text(Math.ceil(e))
        }
    })
});
var tesimonial = new Swiper(".tesimonialslider", {
    pagination: ".tesimonialslider .swiper-pagination",
    nextButton: ".tesimonialslider .swiper-button-next",
    prevButton: ".tesimonialslider .swiper-button-prev",
    paginationClickable: !0,
    spaceBetween: 20,
    autoHeight: !0,
    breakpoints: {
        640: {
            slidesPerView: 1
        }
    }
});

function readURL(e) {
    if (e.files && e.files[0]) {
        var r = new FileReader;
        r.onload = function(e) {
            $("#imagePreview").css("background-image", "url(" + e.target.result + ")"), $("#imagePreview").hide(), $("#imagePreview").fadeIn(650)
        }, r.readAsDataURL(e.files[0])
    }
}

function show_hide_workshop_batch_option(e) {
    $(".w_batches").each(function(r, n) {
        $(this).val(""), $(this).find("option").show(), $(this).find("option[data-group*='" + e + "']").hide()
    })
}
$(window).scroll(function() {
    $(this).scrollTop() >= 250 ? $("#return-to-top").fadeIn(200) : $("#return-to-top").fadeOut(200)
}), $("#return-to-top").click(function() {
    $("body,html").animate({
        scrollTop: 0
    }, 1e3)
}), $("#show_password").hover(function() {
    $("#eye-password").attr("type", "text"), $(".glyphicon").removeClass("fas fa-eye-slash").addClass("fas fa-eye")
}, function() {
    $("#eye-password").attr("type", "password"), $(".glyphicon").removeClass("fas fa-eye").addClass("fas fa-eye-slash")
}), $("#imageUpload").change(function() {
    readURL(this)
}), $(function() {
    $(".select2").select2(), $(".custom-file-input").on("change", function() {
            var e = $(this).val().split("\\").pop();
            $(this).siblings(".custom-file-label").addClass("selected").html(e)
        }), $("#styles_trained_in").select2({
            placeholder: "Select Styles"
        }), $(".styles_dropdown").select2({
            placeholder: "Select Styles"
        }), $("#subscribe_form").validate({
            errorElement: "div",
            errorClass: "error",
            focusInvalid: !1,
            ignore: "",
            rules: {
                email: {
                    required: !0
                }
            },
            errorPlacement: function(e, r) {
                var n = $(r).data("error");
                n ? $(n).append(e) : e.insertAfter(r)
            },
            invalidHandler: function(e, r) {
                r.numberOfInvalids() && $(".error-alert-bar").show()
            },
            submitHandler: function(e) {
                $.ajax({
                    url: e.action,
                    type: "POST",
                    dataType: "json",
                    data: $(e).serialize(),
                    beforeSend: function() {
                        $(e).find("button .fa-spinner").removeClass("d-none"), $(e).find("button").attr("disabled", !0)
                    },
                    headers: {
                        "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content")
                    },
                    success: function(r) {
                        1 == r.result ? window.location.href = baseurl + "/thank-you" : swal("Error", r.msg, "error"), $(e).find("button").attr("disabled", !1), $(e).find("button .fa-spinner").addClass("d-none")
                    },
                    error: function(r, n, t) {
                        var a = "",
                            s = JSON.parse(r.responseText);
                        if (422 == r.status) a = "This email id has already subscribed!";
                        else a = s.message;
                        swal("Error!", a, "error"), $(e).find("button").attr("disabled", !1), $(e).find("button .fa-spinner").addClass("d-none")
                    }
                })
            }
        }), $("#contact_form").validate({
            errorElement: "span",
            errorClass: "error",
            focusInvalid: !1,
            ignore: "",
            rules: {
                name: {
                    required: !0
                },
                email: {
                    required: !0
                },
                mobile: {
                    required: !0
                },
                message: {
                    required: !0
                }
            },
            errorPlacement: function(e, r) {
                var n = $(r).data("error");
                n ? $(n).append(e) : e.insertAfter(r)
            },
            invalidHandler: function(e, r) {
                r.numberOfInvalids() && $(".error-alert-bar").show()
            },
            submitHandler: function(e) {
                $.ajax({
                    url: e.action,
                    type: "POST",
                    dataType: "json",
                    data: $(e).serialize(),
                    beforeSend: function() {
                        $(e).find("button .fa-spinner").removeClass("d-none"), $(e).find("button").attr("disabled", !0)
                    },
                    headers: {
                        "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content")
                    },
                    success: function(r) {
                        1 == r.result ? ($(e).trigger("reset"), window.location.href = baseurl + "/thank-you") : swal("Error", r.msg, "error"), $(e).find("button").attr("disabled", !1), $(e).find("button .fa-spinner").addClass("d-none")
                    },
                    error: function(r, n, t) {
                        var a = "",
                            s = JSON.parse(r.responseText);
                        if (422 == r.status) $.each(s.errors, function(e, r) {
                            a += r + "<br>"
                        });
                        else a = s.message;
                        swal("Error!", a, "error"), $(e).find("button").attr("disabled", !1), $(e).find("button .fa-spinner").addClass("d-none")
                    }
                })
            }
        }),
        $("#TrainingProgram").validate({
            errorElement: "span",
            errorClass: "error",
            focusInvalid: !1,
            ignore: "",
            rules: {
                name: {
                    required: !0
                },
                email: {
                    required: !0
                },
                mobile: {
                    required: !0,
                    digits: !0,
                    maxlength: 10,
                    minlength: 10
                },
                age: {
                    required: !0,
                    digits: !0,
                },
                city: {
                    required: !0
                },
                experience: {
                    required: !0
                },
                trained: {
                    required: !0
                }
            },
            errorPlacement: function(e, r) {
                var n = $(r).data("error");
                n ? $(n).append(e) : e.insertAfter(r)
            },
            invalidHandler: function(e, r) {
                r.numberOfInvalids() && $(".error-alert-bar").show()
            },
            submitHandler: function(e) {

                var trained = $('input[name="trained"]:checked').val();

                var trained_name = $('input[name="trained_name"]').val();

                if (trained == 'Yes' && trained_name == '') {
                    $(".tranined-field").append('<span id="trained_name-error" class="error">This field is required.</span>');
                    return false;
                }

                $.ajax({
                    url: e.action,
                    type: "POST",
                    dataType: "json",
                    data: $(e).serialize(),
                    beforeSend: function() {
                        $(e).find("button .fa-spinner").removeClass("d-none"), $(e).find("button").attr("disabled", !0)
                    },
                    headers: {
                        "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content")
                    },
                    success: function(r) {
                        1 == r.result ? ($(e).trigger("reset"), window.location.href = baseurl + "/thank-you") : swal("Error", r.msg, "error"), $(e).find("button").attr("disabled", !1), $(e).find("button .fa-spinner").addClass("d-none")
                    },
                    error: function(r, n, t) {
                        var a = "",
                            s = JSON.parse(r.responseText);
                        if (422 == r.status) $.each(s.errors, function(e, r) {
                            a += r + "<br>"
                        });
                        else a = s.message;
                        swal("Error!", a, "error"), $(e).find("button").attr("disabled", !1), $(e).find("button .fa-spinner").addClass("d-none")
                    }
                })
            }
        }),
        $("#liveInteraction").validate({
            errorElement: "span",
            errorClass: "error",
            focusInvalid: !1,
            ignore: "",
            rules: {
                name: {
                    required: !0
                },
                email: {
                    required: !0
                },
                mobile: {
                    required: !0,
                    digits: !0,
                    maxlength: 10,
                    minlength: 10
                },
                age: {
                    digits: !0,
                    maxlength: 2,
                },
                city: {
                    required: !0
                }
            },
            errorPlacement: function(e, r) {
                var n = $(r).data("error");
                n ? $(n).append(e) : e.insertAfter(r)
            },
            invalidHandler: function(e, r) {
                r.numberOfInvalids() && $(".error-alert-bar").show()
            },
            submitHandler: function(e) {

                var trained = $('input[name="trained"]:checked').val();

                var trained_name = $('input[name="trained_name"]').val();

                if (trained == 'Yes' && trained_name == '') {
                    $(".tranined-field").append('<span id="trained_name-error" class="error">This field is required.</span>');
                    return false;
                }

                $.ajax({
                    url: e.action,
                    type: "POST",
                    dataType: "json",
                    data: $(e).serialize(),
                    beforeSend: function() {
                        $(e).find("button .fa-spinner").removeClass("d-none"), $(e).find("button").attr("disabled", !0)
                    },
                    headers: {
                        "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content")
                    },
                    success: function(r) {
                        1 == r.result ? ($(e).trigger("reset"), window.location.href = baseurl + "/interaction-thank-you") : swal("Error", r.msg, "error"), $(e).find("button").attr("disabled", !1), $(e).find("button .fa-spinner").addClass("d-none")
                    },
                    error: function(r, n, t) {
                        var a = "",
                            s = JSON.parse(r.responseText);
                        if (422 == r.status) $.each(s.errors, function(e, r) {
                            a += r + "<br>"
                        });
                        else a = s.message;
                        swal("Error!", a, "error"), $(e).find("button").attr("disabled", !1), $(e).find("button .fa-spinner").addClass("d-none")
                    }
                })
            }
        }),
        $("#footer_inquiry_form").validate({
            errorElement: "span",
            errorClass: "error",
            focusInvalid: !1,
            ignore: "",
            rules: {
                name: {
                    required: !0
                },
                email: {
                    required: !0
                },
                mobile: {
                    required: !0
                },
                age_group: {
                    required: !0
                }
            },
            errorPlacement: function(e, r) {
                var n = $(r).data("error");
                n ? $(n).append(e) : e.insertAfter(r)
            },
            invalidHandler: function(e, r) {
                r.numberOfInvalids() && $(".error-alert-bar").show()
            },
            submitHandler: function(e) {
                $.ajax({
                    url: e.action,
                    type: "POST",
                    dataType: "json",
                    data: $(e).serialize(),
                    beforeSend: function() {
                        $(e).find("button .fa-spinner").removeClass("d-none"), $(e).find("button").attr("disabled", !0)
                    },
                    headers: {
                        "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content")
                    },
                    success: function(r) {
                        1 == r.result ? ($(e).trigger("reset"), window.location.href = baseurl + "/thank-you") : swal("Error", r.msg, "error"), $(e).find("button").attr("disabled", !1), $(e).find("button .fa-spinner").addClass("d-none")
                        localStorage.setItem("pdcp", "yes");
                    },
                    error: function(r, n, t) {
                        var a = "",
                            s = JSON.parse(r.responseText);
                        if (422 == r.status) $.each(s.errors, function(e, r) {
                            a += r + "<br>"
                        });
                        else a = s.message;
                        swal("Error!", a, "error"), $(e).find("button").attr("disabled", !1), $(e).find("button .fa-spinner").addClass("d-none")
                    }
                })
            }
        }), $("#dance_career_form").validate({
            errorElement: "span",
            errorClass: "error",
            focusInvalid: !1,
            ignore: "",
            rules: {
                name: {
                    required: !0
                },
                email: {
                    required: !0
                },
                mobile: {
                    required: !0
                },
                resume: {
                    required: !0
                }
            },
            errorPlacement: function(e, r) {
                var n = $(r).data("error");
                n ? $(n).append(e) : e.insertAfter(r)
            },
            invalidHandler: function(e, r) {
                r.numberOfInvalids() && $(".error-alert-bar").show()
            },
            submitHandler: function(e) {
                $.ajax({
                    url: e.action,
                    type: "POST",
                    dataType: "json",
                    data: new FormData(e),
                    processData: !1,
                    contentType: !1,
                    beforeSend: function() {
                        $(e).find("button .fa-spinner").removeClass("d-none"), $(e).find("button").attr("disabled", !0)
                    },
                    headers: {
                        "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content")
                    },
                    success: function(r) {
                        1 == r.result ? (window.location.href = baseurl + "/thank-you", $(e).trigger("reset"), $("#dance_career_modal").modal("hide")) : swal("Error", r.msg, "error"), $(e).find("button").attr("disabled", !1), $(e).find("button .fa-spinner").addClass("d-none")
                    },
                    error: function(r, n, t) {
                        var a = "",
                            s = JSON.parse(r.responseText);
                        if (422 == r.status) $.each(s.errors, function(e, r) {
                            a += r + "<br>"
                        });
                        else a = s.message;
                        swal("Error!", a, "error"), $(e).find("button").attr("disabled", !1), $(e).find("button .fa-spinner").addClass("d-none")
                    }
                })
            }
        }), $("#corporate_career_form").validate({
            errorElement: "span",
            errorClass: "error",
            focusInvalid: !1,
            ignore: "",
            rules: {
                name: {
                    required: !0
                },
                email: {
                    required: !0
                },
                mobile: {
                    required: !0
                },
                designation: {
                    required: !0
                },
                employer: {
                    required: !0
                },
                resume: {
                    required: !0
                }
            },
            errorPlacement: function(e, r) {
                var n = $(r).data("error");
                n ? $(n).append(e) : e.insertAfter(r)
            },
            invalidHandler: function(e, r) {
                r.numberOfInvalids() && $(".error-alert-bar").show()
            },
            submitHandler: function(e) {
                $.ajax({
                    url: e.action,
                    type: "POST",
                    dataType: "json",
                    data: new FormData(e),
                    processData: !1,
                    contentType: !1,
                    beforeSend: function() {
                        $(e).find("button .fa-spinner").removeClass("d-none"), $(e).find("button").attr("disabled", !0)
                    },
                    headers: {
                        "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content")
                    },
                    success: function(r) {
                        1 == r.result ? (window.location.href = baseurl + "/thank-you", $(e).trigger("reset"), $("#corporate_career_modal").modal("hide")) : swal("Error", r.msg, "error"), $(e).find("button").attr("disabled", !1), $(e).find("button .fa-spinner").addClass("d-none")
                    },
                    error: function(r, n, t) {
                        var a = "",
                            s = JSON.parse(r.responseText);
                        if (422 == r.status) $.each(s.errors, function(e, r) {
                            a += r + "<br>"
                        });
                        else a = s.message;
                        swal("Error!", a, "error"), $(e).find("button").attr("disabled", !1), $(e).find("button .fa-spinner").addClass("d-none")
                    }
                })
            }
        }), $("#my_profile_form").validate({
            errorElement: "span",
            errorClass: "error",
            focusInvalid: !1,
            ignore: "",
            rules: {
                name: {
                    required: !0
                },
                lastname: {
                    required: !0
                },
                email: {
                    required: !0
                },
                mobile: {
                    required: !0
                },
                age_group: {
                    required: !0
                },
                state_id: {
                    required: !0
                },
                city_id: {
                    required: !0
                },
                address: {
                    required: !0
                },
                pincode: {
                    required: !0
                },
                date_of_birth: {
                    required: !0
                }
            },
            messages: {
                name: {
                    required: "Enter a first name"
                },
                lastname: {
                    required: "Enter a last name"
                },
                email: {
                    required: "Enter a email id"
                },
                mobile: {
                    required: "Enter a mobile number"
                },
                city_id: {
                    required: "Select city"
                },
                date_of_birth: {
                    required: "Enter date of birth"
                },
                age_group: {
                    required: "Select age group"
                }
            },
            errorPlacement: function(e, r) {
                var n = $(r).data("error");
                n ? $(n).append(e) : e.insertAfter(r)
            },
            invalidHandler: function(e, r) {
                r.numberOfInvalids() && $(".error-alert-bar").show()
            },
            submitHandler: function(e) {
                e.submit()
            }
        }), $.validator.addMethod("pwcheck", function(e) {
            return /[\@\#\$\%\^\&\*\(\)\_\+\!]/.test(e) && /[a-z]/.test(e) && /[0-9]/.test(e) && /[A-Z]/.test(e)
        }, "Password should contains at least 1 digit, 1 lowercase, 1 uppercase, 1 special character, length 8"), $("#registerFrm").validate({
            errorElement: "span",
            errorClass: "error",
            focusInvalid: !1,
            ignore: "",
            rules: {
                name: {
                    required: !0
                },
                lastname: {
                    required: !0
                },
                email: {
                    required: !0
                },
                mobile: {
                    required: !0,
                    digits: !0,
                    maxlength: 10,
                    minlength: 10
                },
                // gender: {
                //     required: !0
                // },
                // age_group: {
                //     required: !0
                // },
                date_of_birth: {
                    required: !0
                },
                address: {
                    required: true
                },
                // pincode: {
                //     required: true
                // },
                city_id: {
                    required: !0
                },
                state_id: {
                    required: !0
                },
                password: {
                    required: !0,
                    minlength: 8,
                    pwcheck: !0
                },
                "g-recaptcha-response": {
                    required: !0
                }
            },
            messages: {
                name: {
                    required: "Enter a first name"
                },
                lastname: {
                    required: "Enter a last name"
                },
                email: {
                    required: "Enter a email id"
                },
                mobile: {
                    required: "Enter a mobile number"
                },
                date_of_birth: {
                    required: "Enter your date of birth"
                },
                city_id: {
                    required: "Select city"
                }
                // age_group: {
                //     required: "Select age group"
                // },
                // gender: {
                //     required: "Select gender"
                // }
            },
            errorPlacement: function(e, r) {
                var n = $(r).data("error");
                n ? $(n).append(e) : e.insertAfter(r)
            },
            showErrors: function(e, r) {
                return $.each(this.successList, function(e, r) {
                    return $(r).closest(".form-group").removeClass("has-error").find(".help-block-error").remove()
                }), $.each(r, function(e, r) {
                    $(r.element).closest(".form-group").addClass("error"), $(r.element).closest(".form-group").find(".help-block-error").remove(), $(r.element).closest(".form-group").append('<span class="help-block help-block-error">' + r.message + "</span>")
                })
            },
            invalidHandler: function(e, r) {
                r.numberOfInvalids() && $(".error-alert-bar").show()
            },
            submitHandler: function(e) {
                e.submit()
            }
        }), $("#check-otp").validate({
            errorElement: "span",
            errorClass: "error",
            focusInvalid: !1,
            ignore: "",
            rules: {
                otp: {
                    required: !0
                }
            },
            errorPlacement: function(e, r) {
                var n = $(r).data("error");
                n ? $(n).append(e) : e.insertAfter(r)
            },
            invalidHandler: function(e, r) {
                r.numberOfInvalids() && $(".error-alert-bar").show()
            },
            submitHandler: function(e) {
                $.ajax({
                    url: e.action,
                    type: "POST",
                    dataType: "json",
                    data: new FormData(e),
                    processData: !1,
                    contentType: !1,
                    beforeSend: function() {
                        $(e).find("button .fa-spinner").removeClass("d-none"), $(e).find("button").attr("disabled", !0)
                    },
                    headers: {
                        "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content")
                    },
                    success: function(r) {
                        1 == r.result ? window.location.href = baseurl + "/my-profile" : swal("Error", r.msg, "error"), $(e).find("button").attr("disabled", !1), $(e).find("button .fa-spinner").addClass("d-none")
                    },
                    error: function(r, n, t) {
                        var a = "",
                            s = JSON.parse(r.responseText);
                        if (422 == r.status) $.each(s.errors, function(e, r) {
                            a += r + "<br>"
                        });
                        else a = s.message;
                        swal("Error!", a, "error"), $(e).find("button").attr("disabled", !1), $(e).find("button .fa-spinner").addClass("d-none")
                    }
                })
            }
        }), $("#dance_in_edu_form").validate({
            errorElement: "span",
            errorClass: "error",
            focusInvalid: !1,
            ignore: "",
            rules: {
                name: {
                    required: !0
                },
                email: {
                    required: !0
                },
                mobile: {
                    required: !0
                },
                message: {
                    required: !0
                }
            },
            errorPlacement: function(e, r) {
                var n = $(r).data("error");
                n ? $(n).append(e) : e.insertAfter(r)
            },
            invalidHandler: function(e, r) {
                r.numberOfInvalids() && $(".error-alert-bar").show()
            },
            submitHandler: function(e) {
                $.ajax({
                    url: e.action,
                    type: "POST",
                    dataType: "json",
                    data: new FormData(e),
                    processData: !1,
                    contentType: !1,
                    beforeSend: function() {
                        $(e).find("button .fa-spinner").removeClass("d-none"), $(e).find("button").attr("disabled", !0)
                    },
                    headers: {
                        "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content")
                    },
                    success: function(r) {
                        1 == r.result ? (window.location.href = baseurl + "/thank-you", $(e).trigger("reset"), $("#dance-in-edu-popup").modal("hide")) : swal("Error", r.msg, "error"), $(e).find("button").attr("disabled", !1), $(e).find("button .fa-spinner").addClass("d-none")
                    },
                    error: function(r, n, t) {
                        var a = "",
                            s = JSON.parse(r.responseText);
                        if (422 == r.status) $.each(s.errors, function(e, r) {
                            a += r + "<br>"
                        });
                        else a = s.message;
                        swal("Error!", a, "error"), $(e).find("button").attr("disabled", !1), $(e).find("button .fa-spinner").addClass("d-none")
                    }
                })
            }
        }), $("#ajax-login").validate({
            errorElement: "span",
            errorClass: "error",
            focusInvalid: !1,
            ignore: "",
            rules: {
                email: {
                    required: !0
                },
                password: {
                    required: !0
                }
            },
            errorPlacement: function(e, r) {
                var n = $(r).data("error");
                n ? $(n).append(e) : e.insertAfter(r)
            },
            showErrors: function(e, r) {
                return $.each(this.successList, function(e, r) {
                    return $(r).closest(".form-group").removeClass("has-error").find(".help-block-error").remove()
                }), $.each(r, function(e, r) {
                    $(r.element).closest(".form-group").addClass("error"), $(r.element).closest(".form-group").find(".help-block-error").remove(), $(r.element).closest(".form-group").append('<span class="help-block help-block-error">' + r.message + "</span>")
                })
            },
            invalidHandler: function(e, r) {
                r.numberOfInvalids() && $(".error-alert-bar").show()
            },
            submitHandler: function(e) {
                $.ajax({
                    url: e.action,
                    type: "POST",
                    dataType: "json",
                    data: new FormData(e),
                    processData: !1,
                    contentType: !1,
                    beforeSend: function() {
                        $(e).find("button .fa-spinner").removeClass("d-none"), $(e).find("button").attr("disabled", !0)
                    },
                    headers: {
                        "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content")
                    },
                    success: function(r) {
                        1 == r.result ? (swal("Success", r.msg, "success"), $(e).trigger("reset"), $("#loginpopup").modal("hide"), function() {
                            var e = window.location.href.split("/"),
                                r = e[e.length - 1];
                            "personal-training" == r && $.ajax({
                                url: baseurl + "/get-student-and-wallet-data",
                                type: "GET",
                                dataType: "json",
                                data: {},
                                processData: !1,
                                contentType: !1,
                                success: function(e) {
                                    e.user.id > 0 && ($("#pt_firstname").val(e.user.name), $("#pt_lastname").val(e.user.lastname), $("#pt_email").val(e.user.email), $("#pt_mobile").val(e.user.mobile), $("#pt_city").val(e.user.city.name), $("#coupon_code_section").removeClass("d-none")), e.wallet_amount > 0 && (wallet_amount = e.wallet_amount, $("#wallet_amount_section").removeClass("d-none"), $("#wallet_balance").val(wallet_amount), $("#wallet_balance_label").html("&nbsp;&nbsp;Use Wallet Balance (" + wallet_amount + ")"))
                                },
                                error: function(e, r, n) {
                                    var t = "",
                                        a = JSON.parse(e.responseText);
                                    if (422 == e.status) $.each(a.errors, function(e, r) {
                                        t += r + "<br>"
                                    });
                                    else var t = a.message;
                                    swal("Error!", t, "error")
                                }
                            });
                            "upcoming-workshops" == r && $.ajax({
                                url: baseurl + "/get-student-and-wallet-data",
                                type: "GET",
                                dataType: "json",
                                data: {},
                                processData: !1,
                                contentType: !1,
                                success: function(e) {
                                    e.wallet_amount > 0 && (wallet_amount = e.wallet_amount, $(".wallet_amount_section").removeClass("d-none"), $(".wallet_balance_ws").val(wallet_amount), $(".wallet_balance_tk").val(wallet_amount), $(".wallet_balance_ws_label").html("&nbsp;&nbsp;Use Wallet Balance (" + wallet_amount + ")"), $(".wallet_balance_tk_label").html("&nbsp;&nbsp;Use Wallet Balance (" + wallet_amount + ")")), e.user.id > 0 && $(".coupon_code_section").removeClass("d-none")
                                },
                                error: function(e, r, n) {
                                    var t = "",
                                        a = JSON.parse(e.responseText);
                                    if (422 == e.status) $.each(a.errors, function(e, r) {
                                        t += r + "<br>"
                                    });
                                    else var t = a.message;
                                    swal("Error!", t, "error")
                                }
                            })
                        }()) : swal("Error", r.msg, "error"), $(e).find("button").attr("disabled", !1), $(e).find("button .fa-spinner").addClass("d-none")
                    },
                    error: function(r, n, t) {
                        var a = "",
                            s = JSON.parse(r.responseText);
                        if (422 == r.status) $.each(s.errors, function(e, r) {
                            a += r + "<br>"
                        });
                        else a = s.message;
                        swal("Error!", a, "error"), $(e).find("button").attr("disabled", !1), $(e).find("button .fa-spinner").addClass("d-none")
                    }
                })
            }
        }), $("#personalTraningFrm").validate({
            errorElement: "span",
            errorClass: "error",
            focusInvalid: !1,
            ignore: "",
            rules: {
                name: {
                    required: !0
                },
                lastname: {
                    required: !0
                },
                email: {
                    required: !0
                },
                contact: {
                    required: !0
                },
                city: {
                    required: !0
                },
                day: {
                    required: !0
                },
                month: {
                    required: !0
                },
                year: {
                    required: !0
                },
                "styles[]": {
                    required: !0
                },
                time_preference: {
                    required: !0
                },
                session: {
                    required: !0
                },
                session_preference: {
                    required: !0
                },
                fees: {
                    required: !0
                }
            },
            errorPlacement: function(e, r) {
                var n = $(r).data("error");
                n ? $(n).append(e) : e.insertAfter(r)
            },
            showErrors: function(e, r) {
                return $.each(this.successList, function(e, r) {
                    return $(r).closest(".pt-input").removeClass("has-error").find(".help-block-error").remove()
                }), $.each(r, function(e, r) {
                    $(r.element).closest(".pt-input").addClass("error"), $(r.element).closest(".pt-input").find(".help-block-error").remove(), $(r.element).closest(".pt-input").append('<span class="help-block help-block-error">' + r.message + "</span>")
                })
            },
            invalidHandler: function(e, r) {
                r.numberOfInvalids() && $(".error-alert-bar").show()
            },
            submitHandler: function(e) {
                if ("pt-submit" != $("#pt-submit").attr("class")) return !0;
                $.ajax({
                    url: pt_validate_url,
                    type: "POST",
                    dataType: "json",
                    data: new FormData(e),
                    processData: !1,
                    contentType: !1,
                    beforeSend: function() {
                        $(e).find("button .fa-spinner").removeClass("d-none"), $(e).find("button").attr("disabled", !0)
                    },
                    headers: {
                        "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content")
                    },
                    success: function(r) {
                        1 == r.result ? ($("#pt-submit").removeClass("pt-submit"), $("#pt-submit").addClass("pt-submit-v"), $(e).submit()) : r.auth ? $("#loginpopup").modal("show") : r.pstate ? window.location = r.redirect : swal("Error", r.msg, "error"), $(e).find("button").attr("disabled", !1), $(e).find("button .fa-spinner").addClass("d-none")
                    },
                    error: function(r, n, t) {
                        var a = "",
                            s = JSON.parse(r.responseText);
                        if (422 == r.status) $.each(s.errors, function(e, r) {
                            a += r + "<br>"
                        });
                        else a = s.message;
                        swal("Error!", a, "error"), $(e).find("button").attr("disabled", !1), $(e).find("button .fa-spinner").addClass("d-none")
                    }
                })
            }
        }), $("#add_money_to_wallet").validate({
            errorElement: "span",
            errorClass: "error",
            focusInvalid: !1,
            ignore: "",
            rules: {
                amount: {
                    required: !0,
                    number: !0,
                    min: 1
                }
            },
            errorPlacement: function(e, r) {
                var n = $(r).data("error");
                n ? $(n).append(e) : e.insertAfter(r)
            },
            invalidHandler: function(e, r) {
                r.numberOfInvalids() && $(".error-alert-bar").show()
            }
        }), $("#transfer_money_to_friend").validate({
            errorElement: "span",
            errorClass: "error",
            focusInvalid: !1,
            ignore: "",
            rules: {
                student_id: {
                    required: !0,
                    remote: {
                        url: "my-wallet/validate_student_id"
                    }
                },
                amount: {
                    required: !0,
                    number: !0,
                    min: 1
                }
            },
            messages: {
                student_id: {
                    remote: "Student Mobile / Unique ID is invalid"
                }
            },
            errorPlacement: function(e, r) {
                var n = $(r).data("error");
                n ? $(n).append(e) : e.insertAfter(r)
            },
            invalidHandler: function(e, r) {
                r.numberOfInvalids() && $(".error-alert-bar").show()
            }
        }), $("#email_statement_wallet").validate({
            errorElement: "span",
            errorClass: "error",
            focusInvalid: !1,
            ignore: "",
            rules: {
                start_date: {
                    required: !0
                },
                end_date: {
                    required: !0,
                    greaterThan: "#start_date"
                }
            },
            errorPlacement: function(e, r) {
                var n = $(r).data("error");
                n ? $(n).append(e) : e.insertAfter(r)
            },
            invalidHandler: function(e, r) {
                r.numberOfInvalids() && $(".error-alert-bar").show()
            }
        }), $("#invite_friends").validate({
            errorElement: "span",
            errorClass: "error",
            focusInvalid: !1,
            ignore: "",
            rules: {
                email_ids: {
                    required: !0
                }
            },
            errorPlacement: function(e, r) {
                var n = $(r).data("error");
                n ? $(n).append(e) : e.insertAfter(r)
            },
            invalidHandler: function(e, r) {
                r.numberOfInvalids() && $(".error-alert-bar").show()
            }
        }), $("#coupon-code").validate({
            errorElement: "span",
            errorClass: "error",
            focusInvalid: !1,
            ignore: "",
            rules: {
                coupon_code: {
                    required: !0
                }
            },
            submitHandler: function(e) {
                $.ajax({
                    url: e.action,
                    type: "POST",
                    dataType: "json",
                    data: new FormData(e),
                    processData: !1,
                    contentType: !1,
                    beforeSend: function() {
                        $(e).find("button .fa-spinner").removeClass("d-none")
                    },
                    headers: {
                        "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content")
                    },
                    success: function(r) {
                        1 == r.result ? ($(".refresh_cart_list").trigger("click"), swal("Success", r.msg, "success"), $(e).trigger("reset")) : swal("Oops!", r.msg, "info"), $(e).find("button").attr("disabled", !1), $(e).find("button .fa-spinner").addClass("d-none")
                    },
                    error: function(r, n, t) {
                        var a = "",
                            s = JSON.parse(r.responseText);
                        if (422 == r.status) $.each(s.errors, function(e, r) {
                            a += r + "<br>"
                        });
                        else a = s.message;
                        swal("Error!", a, "error"), $(e).find("button").attr("disabled", !1), $(e).find("button .fa-spinner").addClass("d-none")
                    }
                })
            }
        }), $(document).on("click", "#pt_apply_coupon_code", function() {
            var e = $("#pt_coupon_code").val();
            $.ajax({
                url: baseurl + "/pt_apply_coupon_discount",
                type: "POST",
                dataType: "json",
                data: {
                    coupon_code: e
                },
                beforeSend: function() {
                    $("#pt_apply_coupon_code").find(".fa-spinner").removeClass("d-none"), $("#pt_apply_coupon_code").css("pointer-events", "none")
                },
                headers: {
                    "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content")
                },
                success: function(e) {
                    1 == e.result ? (swal("Success", e.msg, "success"), $("#pt_discount_type").val(e.discount_type), $("#pt_coupon_discount").val(e.coupon_discount), $("#pt_session").trigger("change"), $("#pt_apply_coupon_code").addClass("d-none"), $("#pt_remove_coupon_code").removeClass("d-none"), $("#pt_coupon_code").attr("readonly", !0)) : swal("Oops!", e.msg, "info"), $("#pt_apply_coupon_code").css("pointer-events", "auto"), $("#pt_apply_coupon_code").find(".fa-spinner").addClass("d-none")
                },
                error: function(e, r, n) {
                    var t = "",
                        a = JSON.parse(e.responseText);
                    if (422 == e.status) $.each(a.errors, function(e, r) {
                        t += r + "<br>"
                    });
                    else t = a.message;
                    swal("Error!", t, "error"), $("#pt_apply_coupon_code").css("pointer-events", "auto"), $("#pt_apply_coupon_code").find(".fa-spinner").addClass("d-none")
                }
            })
        }), $(document).on("click", "#pt_remove_coupon_code", function() {
            $("#pt_coupon_code").val(""), $("#pt_coupon_code").attr("readonly", !1), $("#pt_discount_type").val(0), $("#pt_coupon_discount").val(0), $("#pt_session").trigger("change"), $("#pt_remove_coupon_code").addClass("d-none"), $("#pt_apply_coupon_code").removeClass("d-none")
        }), $(document).on("click", ".ws_apply_coupon_code", function() {
            var e = $(this).attr("id").split("_"),
                r = e[e.length - 1],
                n = $("#ws_coupon_code_" + r).val(),
                t = $("#ws_id_" + r).val();
            $.ajax({
                url: baseurl + "/ws_apply_coupon_discount",
                type: "POST",
                dataType: "json",
                data: {
                    coupon_code: n,
                    workshop_id: t
                },
                beforeSend: function() {
                    $("#ws_apply_coupon_code_" + r).find(".fa-spinner").removeClass("d-none"), $("#ws_apply_coupon_code_" + r).css("pointer-events", "none")
                },
                headers: {
                    "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content")
                },
                success: function(e) {
                    1 == e.result ? (swal("Success", e.msg, "success"), $("#ws_discount_type_" + r).val(e.discount_type), $("#ws_coupon_discount_" + r).val(e.coupon_discount), $("#wallet_balance_ws_" + r).trigger("change"), $("#ws_apply_coupon_code_" + r).addClass("d-none"), $("#ws_remove_coupon_code_" + r).removeClass("d-none"), $("#ws_coupon_code_" + r).attr("readonly", !0)) : swal("Oops!", e.msg, "info"), $("#ws_apply_coupon_code_" + r).css("pointer-events", "auto"), $("#ws_apply_coupon_code_" + r).find(".fa-spinner").addClass("d-none")
                },
                error: function(e, n, t) {
                    var a = "",
                        s = JSON.parse(e.responseText);
                    if (422 == e.status) $.each(s.errors, function(e, r) {
                        a += r + "<br>"
                    });
                    else a = s.message;
                    swal("Error!", a, "error"), $("#ws_apply_coupon_code_" + r).css("pointer-events", "auto"), $("#ws_apply_coupon_code_" + r).find(".fa-spinner").addClass("d-none")
                }
            })
        }), $(document).on("click", ".ws_remove_coupon_code", function() {
            var e = $(this).attr("id").split("_"),
                r = e[e.length - 1];
            $("#ws_coupon_code_" + r).val(""), $("#ws_coupon_code_" + r).attr("readonly", !1), $("#ws_discount_type_" + r).val(0), $("#ws_coupon_discount_" + r).val(0), $("#wallet_balance_ws_" + r).trigger("change"), $("#ws_remove_coupon_code_" + r).addClass("d-none"), $("#ws_apply_coupon_code_" + r).removeClass("d-none")
        }), $(document).on("click", ".tk_apply_coupon_code", function() {
            var e = $(this).attr("id").split("_"),
                r = e[e.length - 1],
                n = $("#tk_coupon_code_" + r).val(),
                t = $("#tk_id_" + r).val();
            $.ajax({
                url: baseurl + "/tk_apply_coupon_discount",
                type: "POST",
                dataType: "json",
                data: {
                    coupon_code: n,
                    ticket_id: t
                },
                beforeSend: function() {
                    $("#tk_apply_coupon_code_" + r).find(".fa-spinner").removeClass("d-none"), $("#tk_apply_coupon_code_" + r).css("pointer-events", "none")
                },
                headers: {
                    "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content")
                },
                success: function(e) {
                    1 == e.result ? (swal("Success", e.msg, "success"), $("#tk_discount_type_" + r).val(e.discount_type), $("#tk_coupon_discount_" + r).val(e.coupon_discount), $("#wallet_balance_tk_" + r).trigger("change"), $("#tk_apply_coupon_code_" + r).addClass("d-none"), $("#tk_remove_coupon_code_" + r).removeClass("d-none"), $("#tk_coupon_code_" + r).attr("readonly", !0)) : swal("Oops!", e.msg, "info"), $("#tk_apply_coupon_code_" + r).css("pointer-events", "auto"), $("#tk_apply_coupon_code_" + r).find(".fa-spinner").addClass("d-none")
                },
                error: function(e, n, t) {
                    var a = "",
                        s = JSON.parse(e.responseText);
                    if (422 == e.status) $.each(s.errors, function(e, r) {
                        a += r + "<br>"
                    });
                    else a = s.message;
                    swal("Error!", a, "error"), $("#tk_apply_coupon_code_" + r).css("pointer-events", "auto"), $("#tk_apply_coupon_code_" + r).find(".fa-spinner").addClass("d-none")
                }
            })
        }), $(document).on("click", ".tk_remove_coupon_code", function() {
            var e = $(this).attr("id").split("_"),
                r = e[e.length - 1];
            $("#tk_coupon_code_" + r).val(""), $("#tk_coupon_code_" + r).attr("readonly", !1), $("#tk_discount_type_" + r).val(0), $("#tk_coupon_discount_" + r).val(0), $("#wallet_balance_tk_" + r).trigger("change"), $("#tk_remove_coupon_code_" + r).addClass("d-none"), $("#tk_apply_coupon_code_" + r).removeClass("d-none")
        }), $("#partner-code").validate({
            errorElement: "span",
            errorClass: "error",
            focusInvalid: !1,
            ignore: "",
            rules: {
                partner_code: {
                    required: !0
                }
            },
            submitHandler: function(e) {
                $.ajax({
                    url: e.action,
                    type: "POST",
                    dataType: "json",
                    data: new FormData(e),
                    processData: !1,
                    contentType: !1,
                    beforeSend: function() {
                        $(e).find("button .fa-spinner").removeClass("d-none")
                    },
                    headers: {
                        "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content")
                    },
                    success: function(r) {
                        1 == r.result ? ($(".refresh_cart_list").trigger("click"), swal("Success", r.msg, "success"), $(e).trigger("reset")) : swal("Oops!", r.msg, "info"), $(e).find("button").attr("disabled", !1), $(e).find("button .fa-spinner").addClass("d-none")
                    },
                    error: function(r, n, t) {
                        var a = "",
                            s = JSON.parse(r.responseText);
                        if (422 == r.status) $.each(s.errors, function(e, r) {
                            a += r + "<br>"
                        });
                        else a = s.message;
                        swal("Error!", a, "error"), $(e).find("button").attr("disabled", !1), $(e).find("button .fa-spinner").addClass("d-none")
                    }
                })
            }
        }), $(".fancybox-video").bind("contextmenu", function() {
            return !1
        })
}), $("#verify-mobile").on("click", function() {
    $.ajax({
        url: baseurl + "/verify-mobile",
        type: "POST",
        headers: {
            "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content")
        },
        success: function(e) {
            1 == e.result ? ($("#verifymobilepop").modal("show"), $("#verifymobilepop .msg").html('<div class="alert alert-success">' + e.msg + "</div>")) : swal("Error", e.msg, "error")
        },
        error: function(e, r, n) {
            var t = "",
                a = JSON.parse(e.responseText);
            if (422 == e.status) $.each(a.errors, function(e, r) {
                t += r + "<br>"
            });
            else t = a.message;
            swal("Error!", t, "error")
        }
    })
}), $(document).ready(function() {
    $(".date_mask").datepicker({
        changeMonth: !0,
        changeYear: !0,
        yearRange: "1950:2030",
        dateFormat: "dd-mm-yy",
        defaultDate: new Date(1991, 0, 1)
    }), $(".start_date").datepicker({
        changeMonth: !0,
        changeYear: !0,
        dateFormat: "dd-mm-yy",
        onClose: function(e) {
            $(".end_date").datepicker("option", "minDate", e)
        }
    }), $(".end_date").datepicker({
        changeMonth: !0,
        changeYear: !0,
        dateFormat: "dd-mm-yy"
    }), $(".page-banner").length && $(".page-banner").each(function(e) {
        var r = $(this).attr("data-bg");
        $(this).css("background-image", "url('" + r + "')")
    }), $("#slider-range").slider({
        range: !0,
        min: 0,
        max: 5e3,
        values: [0, 300],
        slide: function(e, r) {
            $("#amount").html(r.values[1])
        }
    }), $("#product-detail").length && $("#product-detail").sliderPro({
        width: 612,
        height: 819,
        orientation: "vertical",
        loop: !0,
        arrows: !1,
        buttons: !1,
        thumbnailsPosition: "left",
        thumbnailPointer: !0,
        thumbnailWidth: 168,
        thumbnailHeight: 148,
        breakpoints: {
            800: {
                thumbnailsPosition: "bottom",
                thumbnailWidth: 148,
                thumbnailHeight: 148
            },
            500: {
                thumbnailsPosition: "bottom",
                thumbnailWidth: 120,
                thumbnailHeight: 120
            }
        }
    }), $(".qtyplus").on("click", function(e) {
        e.preventDefault();
        var r = $(this).attr("data-field"),
            n = parseInt($("input[name=" + r + "]").val());
        isNaN(n) ? $(this).find("input[name=" + r + "]").val(0) : $("input[name=" + r + "]").val(n + 1)
    }), $(".qtyminus").on("click", function(e) {
        e.preventDefault();
        var r = $(this).attr("data-field"),
            n = parseInt($("input[name=" + r + "]").val());
        !isNaN(n) && n > 0 ? $("input[name=" + r + "]").val(n - 1) : $("input[name=" + r + "]").val(0)
    }), $(".featured-section").length && $(".featured-product").owlCarousel({
        loop: !0,
        margin: 7,
        nav: !1,
        dots: !1,
        autoplay: !0,
        items: 5,
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 2
            },
            768: {
                items: 3
            },
            992: {
                items: 4
            },
            1366: {
                items: 5
            }
        }
    })
}), $("#pt_session, #pt_session_preferance, #wallet_balance").change(function() {
    var e = parseInt($("#pt_session").val()) || 0;
    if ("At Home" == $("#pt_session_preferance").val()) var r = parseInt(3e3 * e) || 0;
    else r = parseInt(2e3 * e) || 0;
    var n = r,
        t = parseInt($("#pt_discount_type").val()) || 0,
        a = parseInt($("#pt_coupon_discount").val()) || 0;
    if (t > 0)
        if (1 == t) n = n - n / 100 * a;
        else n = n - a;

    var gst = n * 18 / 100;

    n = n + gst;

    $("#pt_fees").val(r + "/-"), $("#wallet_balance").prop("checked") && (wallet_amount >= n ? n = 0 : n -= wallet_amount), $("#grand_total").val(n + "/-")
}), $(document).on("change", ".guest_dd", function() {
    var e = $(this).attr("id").split("_"),
        r = e[e.length - 1],
        n = parseInt($(this).val()) || 1,
        t = parseInt($("#w_fees_" + r).val()) || 0;
    if (n > 0) {
        var a = t * n;
        $("#fees_" + r).val(a), $("#wallet_balance_ws_" + r).trigger("change")
    }
}), $(document).on("change", ".wallet_balance_ws", function() {
    var e = $(this).attr("id").split("_"),
        r = e[e.length - 1],
        n = parseInt($("#fees_" + r).val()) || 0,
        t = parseInt($("#ws_discount_type_" + r).val()) || 0,
        a = parseInt($("#ws_coupon_discount_" + r).val()) || 0;
    if (t > 0)
        if (1 == t) n = n - n / 100 * a;
        else n = n - a;
    var s = parseInt($(this).val()) || 0;

    var gst = n * 18 / 100;

    n = n + gst;

    r > 0 && ($(this).prop("checked") && (s >= n ? n = 0 : n -= s), $("#total_fees_" + r).html("Total: " + Math.round(n) + " /-"))
}), $(document).on("change", ".wallet_balance_tk", function() {
    var e = $(this).attr("id").split("_"),
        r = e[e.length - 1],
        n = parseInt($("#tkfees_" + r).val()) || 0,
        t = parseInt($("#tk_discount_type_" + r).val()) || 0,
        a = parseInt($("#tk_coupon_discount_" + r).val()) || 0,
        no_of_ticket = parseInt($("#no_of_ticket_" + r).val()) || 0;
    n = n * no_of_ticket;
    if (t > 0)
        if (1 == t) n = n - n / 100 * a;
        else n = n - a;
    var s = parseInt($(this).val()) || 0;

    var gst = n * 18 / 100;

    n = n + gst;

    r > 0 && ($(this).prop("checked") && (s >= n ? n = 0 : n -= s), $("#tk_total_fees_" + r).attr('data-total_price', Math.round(n)), $("#tk_total_fees_" + r).html("Total: " + Math.round(n) + " /-"))
}), $(document).on("keyup keydown", ".no_of_ticket_input", function() {
    var e = $(this).attr("id").split("_"),
        r = e[e.length - 1],
        n = parseInt($("#tkfees_" + r).val()) || 0,
        t = parseInt($("#tk_discount_type_" + r).val()) || 0,
        a = parseInt($("#tk_coupon_discount_" + r).val()) || 0,
        no_of_ticket = parseInt($(this).val()) || 0
    n = n * no_of_ticket;
    if (t > 0)
        if (1 == t) n = n - n / 100 * a;
        else n = n - a;
    var s = parseInt($(this).val()) || 0;

    var gst = n * 18 / 100;

    n = n + gst;

    var buy_ticket = $(this).attr("data-buy_ticket");
    if (no_of_ticket >= buy_ticket) {
        $(this).parent().find('.free_tickets_note').show();
    } else {
        $(this).parent().find('.free_tickets_note').hide();
    }

    r > 0 && ($(this).prop("checked") && (s >= n ? n = 0 : n -= s), $("#tk_total_fees_" + r).attr('data-total_price', Math.round(n)), $("#tk_total_fees_" + r).html("Total: " + Math.round(n) + " /-"))
}), $(document).on("click", ".enroll_now, .enroll_now_v", function() {
    var e = $(this).attr("id"),
        r = $(this).attr("id").split("_"),
        n = r[r.length - 1];
    $(this).attr("disabled", !0), $("#" + e).css("pointer-events", "none"), $(".bs_error").remove();
    var t = 0;
    $("#show_bs_" + n).is(":visible") && (t = parseInt($("#batch_" + n).val()) || 0), $.ajax({
        url: baseurl + "/validate-workshop-register/" + n + "/" + t,
        type: "GET",
        dataType: "json",
        data: {},
        processData: !1,
        contentType: !1,
        success: function(r) {
            1 == r.result ? ($(this).removeClass("enroll_now"), $(this).addClass("enroll_now_v"), $("#show_bs_" + n).is(":visible") && "" == $("#show_bs_" + n + " select").val() ? ($("#" + e).attr("disabled", !1), $("#" + e).css("pointer-events", "auto"), $("#show_bs_" + n + " select").after('<span class="error bs_error">&nbsp;&nbsp;&nbsp;This field is required.</span>')) : $("#workshop_register_" + n).submit()) : (r.auth ? $("#loginpopup").modal("show") : r.pstate ? window.location = r.redirect : r.info ? swal(r.info_title, r.msg, "info") : swal("Error", r.msg, "error"), $("#" + e).attr("disabled", !1), $("#" + e).css("pointer-events", "auto"))
        },
        error: function(r, n, t) {
            var a = "",
                s = JSON.parse(r.responseText);
            if (422 == r.status) $.each(s.errors, function(e, r) {
                a += r + "<br>"
            });
            else a = s.message;
            swal("Error!", a, "error"), $("#" + e).attr("disabled", !1), $("#" + e).css("pointer-events", "auto")
        }
    })
}), $(document).on("click", ".enroll_t_now, .enroll_t_now_v", function() {
    var e = $(this).attr("id"),
        r = $(this).attr("id").split("_"),
        n = r[r.length - 1],
        no_of_ticket = $("#no_of_ticket_" + n).val();

    var CE = $(this);
    if (no_of_ticket == "") {
        alert('Please enter no. of ticket');
        return false;
    }

    if (no_of_ticket == "0") {
        alert('Please enter valid no. of ticket');
        return false;
    }

    $(this).attr("disabled", !0), $("#" + e).css("pointer-events", "none"), $(".bs_error").remove();
    var t = 0;
    $("#show_bs_" + n).is(":visible") && (t = parseInt($("#batch_" + n).val()) || 0), $.ajax({
        url: baseurl + "/validate-ticket-register/" + n + "/" + t,
        type: "GET",
        dataType: "json",
        data: {},
        processData: !1,
        contentType: !1,
        success: function(r) {
            1 == r.result ? ($(this).removeClass("enroll_t_now"), $(this).addClass("enroll_t_now_v"), $("#show_bs_" + n).is(":visible") && "" == $("#show_bs_" + n + " select").val() ? ($("#" + e).attr("disabled", !1), $("#" + e).css("pointer-events", "auto"), $("#show_bs_" + n + " select").after('<span class="error bs_error">&nbsp;&nbsp;&nbsp;This field is required.</span>')) : $("#ticket_confirm_popup").modal("show")) : (r.auth ? $("#ticket_confirm_popup").modal("show") : r.pstate ? window.location = r.redirect : r.info ? swal(r.info_title, r.msg, "info") : swal("Error", r.msg, "error"), $("#" + e).attr("disabled", !1), $("#" + e).css("pointer-events", "auto"));

            $('#popup_ticket_id').val(n);
            $('.ticket_title').text(CE.data('title'));
            $('.popup_date').text(CE.data('date'));
            $('.popup_time').text(CE.data('time'));
            $('.popup_venue').text(CE.data('venue'));
            $('.popup_no_of_tickets').text(no_of_ticket);


            var no_of_free_ticket = 0;
            var buy_ticket = $("#no_of_ticket_" + n).attr("data-buy_ticket");
            var get_ticket = $("#no_of_ticket_" + n).attr("data-get_ticket");

            if (buy_ticket != "" && get_ticket != "" && no_of_ticket >= buy_ticket) {
                var tota_free = no_of_ticket / buy_ticket;
                no_of_free_ticket = get_ticket * parseInt(tota_free);
            }

            $('.popup_free_tickets').text(no_of_free_ticket);
            $('.popup_total_tickets').text(parseInt(no_of_free_ticket) + parseInt(no_of_ticket));
            $('.popup_total_amount').text($("#tk_total_fees_" + n).attr("data-total_price"));

        },
        error: function(r, n, t) {
            var a = "",
                s = JSON.parse(r.responseText);
            if (422 == r.status) $.each(s.errors, function(e, r) {
                a += r + "<br>"
            });
            else a = s.message;
            swal("Error!", a, "error"), $("#" + e).attr("disabled", !1), $("#" + e).css("pointer-events", "auto")
        }
    })
}), $(document).on("change", ".age_group", function() {
    var e = parseInt($(this).attr("data-id")) || 0;
    if (1 == $(this).val()) var r = 2;
    else r = 1;
    $("#batch_" + e).val(""), $("#batch_" + e).find("option").show(), $("#batch_" + e).find("option[data-group*='" + r + "']").hide()
}), $(document).ready(function() {
    show_hide_workshop_batch_option(2)
});
$(function() {
    $("#registerFrm_dtl").validate({
        errorElement: 'span',
        errorClass: "error",
        focusInvalid: !1,
        ignore: "",
        rules: {
            name: {
                required: true
            },
            lastname: {
                required: true
            },
            email: {
                required: true
            },
            c_email: {
                required: true,
                equalTo: email
            },
            coupon_code: {
                required: true,
                //equalTo: '#coupon_code_value'
            },
            mobile: {
                required: true,
                digits: true,
                maxlength: 10,
                minlength: 10,
            },
            gender: {
                required: true
            },
            age_group: {
                required: true
            },
            date_of_birth: {
                required: true
            },
            city_id: {
                required: true
            },
            password: {
                required: true,
                minlength: 8,
                pwcheck: true
            },
            'g-recaptcha-response': {
                required: true
            },
        },
        messages: {
            name: {
                required: "Enter a first name"
            },
            lastname: {
                required: "Enter a last name"
            },
            email: {
                required: "Enter a email id"
            },
            mobile: {
                required: "Enter a mobile number"
            },
            date_of_birth: {
                required: "Enter your date of birth"
            },
            city_id: {
                required: "Select city"
            },
            age_group: {
                required: "Select age group"
            },
            gender: {
                required: "Select gender"
            },
            coupon_code: {
                equalTo: "Invalid Coupon Code"
            },
        },
        errorPlacement: function(error, element) {
            var placement = $(element).data('error');
            if (placement) {
                $(placement).append(error)
            } else {
                error.insertAfter(element);
            }
        },
        showErrors: function(errorMap, errorList) {
            $.each(this.successList, function(index, value) {
                return $(value).closest(".form-group").removeClass("has-error").find('.help-block-error').remove();
            });
            return $.each(errorList, function(index, value) {
                $(value.element).closest(".form-group").addClass("error")
                $(value.element).closest(".form-group").find('.help-block-error').remove();
                $(value.element).closest(".form-group").append('<span class="help-block help-block-error">' + value.message + '</span>');
            });
        },
        invalidHandler: function(e, validator) {
            var errors = validator.numberOfInvalids();
            if (errors) {
                $('.error-alert-bar').show();
            }
        },
        submitHandler: function(e) {
            e.submit();
        }
    });

    //PDCP Form
    $("#pdcp-inquiry").validate({
        errorElement: 'span',
        errorClass: "error",
        focusInvalid: !1,
        ignore: "",
        rules: {
            name: {
                required: true
            },
            age_group: {
                required: true
            },
            email: {
                required: true
            },
            mobile: {
                required: true,
                digits: true,
                maxlength: 10,
                minlength: 10,
            }
        },
        errorPlacement: function(error, element) {
            var placement = $(element).data('error');
            if (placement) {
                $(placement).append(error)
            } else {
                error.insertAfter(element);
            }
        },
        showErrors: function(errorMap, errorList) {
            $.each(this.successList, function(index, value) {
                return $(value).closest(".form-group").removeClass("has-error").find('.help-block-error').remove();
            });
            return $.each(errorList, function(index, value) {
                $(value.element).closest(".form-group").addClass("error")
                $(value.element).closest(".form-group").find('.help-block-error').remove();
                $(value.element).closest(".form-group").append('<span class="help-block help-block-error">' + value.message + '</span>');
            });
        },
        invalidHandler: function(e, validator) {
            var errors = validator.numberOfInvalids();
            if (errors) {
                $('.error-alert-bar').show();
            }
        },
        submitHandler: function(e) {
            $.ajax({
                url: e.action,
                type: 'POST',
                dataType: 'json',
                data: new FormData(e),
                processData: false,
                contentType: false,
                beforeSend: function() {
                    $(e).find('button .fa-spinner').removeClass('d-none');
                    $(e).find('button').attr('disabled', true);
                },
                headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                },
                success: function(response) {
                    if (response.result == true) {
                        //  swal("Success",response.msg, "success");
                        localStorage.setItem("pdcp", "yes");
                        $(e).trigger("reset");
                        window.location.href = baseurl + '/thank-you';
                    } else {
                        swal("Error", response.msg, "error");
                    }
                    $(e).find('button').attr('disabled', false);
                    $(e).find('button .fa-spinner').addClass('d-none');
                },
                error: function(xhr, ajaxOptions, thrownError) {
                    var error = "";
                    var errors = JSON.parse(xhr.responseText);
                    if (xhr.status == 422) {
                        $.each(errors.errors, function(i, item) {
                            error += item + "<br>";
                        });
                    } else {
                        var error = errors.message;
                    }
                    swal("Error!", error, "error");
                    $(e).find('button').attr('disabled', false);
                    $(e).find('button .fa-spinner').addClass('d-none');
                },
            });
        }
    });

    //ticket-confirm-submit Form
    $("#ticket-confirm-submit").validate({
        errorElement: 'span',
        errorClass: "error",
        focusInvalid: !1,
        ignore: "",
        rules: {
            name: {
                required: true
            },
            email: {
                required: true
            },
            mobile: {
                required: true,
                digits: true,
                maxlength: 10,
                minlength: 10,
            }
        },
        errorPlacement: function(error, element) {
            var placement = $(element).data('error');
            if (placement) {
                $(placement).append(error)
            } else {
                error.insertAfter(element);
            }
        },
        showErrors: function(errorMap, errorList) {
            $.each(this.successList, function(index, value) {
                return $(value).closest(".form-group").removeClass("has-error").find('.help-block-error').remove();
            });
            return $.each(errorList, function(index, value) {
                $(value.element).closest(".form-group").addClass("error")
                $(value.element).closest(".form-group").find('.help-block-error').remove();
                $(value.element).closest(".form-group").append('<span class="help-block help-block-error">' + value.message + '</span>');
            });
        },
        invalidHandler: function(e, validator) {
            var errors = validator.numberOfInvalids();
            if (errors) {
                $('.error-alert-bar').show();
            }
        },
        submitHandler: function(e) {
            var ticket_id = $('#popup_ticket_id').val();
            $('#name_' + ticket_id).val($('#ticket-confirm-submit #name').val());
            $('#email_' + ticket_id).val($('#ticket-confirm-submit #email').val());
            $('#mobile_' + ticket_id).val($('#ticket-confirm-submit #mobile').val());

            $('#ticket_register_' + ticket_id).submit();
        }
    });
    //PDCP Form
    $("#academy-inquiry").validate({
        errorElement: 'span',
        errorClass: "error",
        focusInvalid: !1,
        ignore: "",
        rules: {
            name: {
                required: true
            },
            age_group: {
                required: true
            },
            class_type: {
                required: true
            },
            email: {
                required: true
            },
            mobile: {
                required: true,
                digits: true,
                maxlength: 10,
                minlength: 10,
            }
        },
        errorPlacement: function(error, element) {
            var placement = $(element).data('error');
            if (placement) {
                $(placement).append(error)
            } else {
                error.insertAfter(element);
            }
        },
        showErrors: function(errorMap, errorList) {
            $.each(this.successList, function(index, value) {
                return $(value).closest(".form-group").removeClass("has-error").find('.help-block-error').remove();
            });
            return $.each(errorList, function(index, value) {
                $(value.element).closest(".form-group").addClass("error")
                $(value.element).closest(".form-group").find('.help-block-error').remove();
                $(value.element).closest(".form-group").append('<span class="help-block help-block-error">' + value.message + '</span>');
            });
        },
        invalidHandler: function(e, validator) {
            var errors = validator.numberOfInvalids();
            if (errors) {
                $('.error-alert-bar').show();
            }
        },
        submitHandler: function(e) {
            $.ajax({
                url: e.action,
                type: 'POST',
                dataType: 'json',
                data: new FormData(e),
                processData: false,
                contentType: false,
                beforeSend: function() {
                    $(e).find('button .fa-spinner').removeClass('d-none');
                    $(e).find('button').attr('disabled', true);
                },
                headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                },
                success: function(response) {
                    if (response.result == true) {
                        //  swal("Success",response.msg, "success");
                        localStorage.setItem("acadamy", "yes");
                        $(e).trigger("reset");
                        window.location.href = baseurl + '/thank-you';
                    } else {
                        swal("Error", response.msg, "error");
                    }
                    $(e).find('button').attr('disabled', false);
                    $(e).find('button .fa-spinner').addClass('d-none');
                },
                error: function(xhr, ajaxOptions, thrownError) {
                    var error = "";
                    var errors = JSON.parse(xhr.responseText);
                    if (xhr.status == 422) {
                        $.each(errors.errors, function(i, item) {
                            error += item + "<br>";
                        });
                    } else {
                        var error = errors.message;
                    }
                    swal("Error!", error, "error");
                    $(e).find('button').attr('disabled', false);
                    $(e).find('button .fa-spinner').addClass('d-none');
                },
            });
        }
    });
    $("#workshop_inquiry").validate({
        errorElement: 'span',
        errorClass: "error",
        focusInvalid: !1,
        ignore: "",
        rules: {
            name: {
                required: true
            },
            email: {
                required: true
            },
            mobile: {
                required: true
            },
        },
        errorPlacement: function(error, element) {
            var placement = $(element).data('error');
            if (placement) {
                $(placement).append(error)
            } else {
                error.insertAfter(element);
            }
        },
        invalidHandler: function(e, validator) {
            var errors = validator.numberOfInvalids();
            if (errors) {
                $('.error-alert-bar').show();
            }
        },
        submitHandler: function(e) {
            $.ajax({
                url: e.action,
                type: 'POST',
                dataType: 'json',
                data: $(e).serialize(),
                beforeSend: function() {
                    $(e).find('button .fa-spinner').removeClass('d-none');
                    $(e).find('button').attr('disabled', true);
                },
                headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                },
                success: function(response) {
                    if (response.result == true) {
                        swal("Thank You", response.msg, "success");
                        $(e).trigger("reset");
                        //window.location.href = baseurl+'/thank-you';                        
                    } else {
                        swal("Error", response.msg, "error");
                    }
                    $(e).find('button').attr('disabled', false);
                    $(e).find('button .fa-spinner').addClass('d-none');
                },
                error: function(xhr, ajaxOptions, thrownError) {
                    var error = "";
                    var errors = JSON.parse(xhr.responseText);
                    if (xhr.status == 422) {
                        $.each(errors.errors, function(i, item) {
                            error += item + "<br>";
                        });
                    } else {
                        var error = errors.message;
                    }
                    swal("Error!", error, "error");
                    $(e).find('button').attr('disabled', false);
                    $(e).find('button .fa-spinner').addClass('d-none');
                },
            });
        }
    });
});


$(".request_for").click(function() {
    if ($(this).val() == "update_batch") {
        $('.for_push').hide();
        $('.for_update').show();
    } else {
        $('.for_update').hide();
        $('.for_push').show();
    }
});

$("#current_batch").change(function() {
    var city_id = $(this).find(':selected').data('city');

    if ($(".request_for:checked").val() == "batch_push") {
        $.ajax({
            url: baseurl + "/getMonthsCalendar",
            type: "POST",
            dataType: "json",
            data: {
                city: city_id
            },
            beforeSend: function() {

            },
            headers: {
                "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content")
            },
            success: function(e) {
                var options = "";
                $(e.data).each(function(i, row) {
                    options += '<option value="' + row.id + '">' + row.name + '</option>';
                });

                $("#new_months,#push_months").html(options);
                $('#new_months,#push_months').select2({
                    placeholder: "Select Months",
                });
            },

        })
    }
});

$(document).on("click", ".enroll_now_qr, .enroll_now_qr_v", function() {
    var this_id_att = $(this).attr('id');
    var this_id_arr = $(this).attr('id').split('_');
    var this_id = this_id_arr[this_id_arr.length - 1];

    $("#workshop_register_" + this_id).attr("action", baseurl + '/workshop-quick-register/');

    $(this).attr('disabled', true);
    $("#" + this_id_att).css("pointer-events", "none");
    $(".bs_error").remove();
    var batch_id = 0;
    if ($("#show_bs_" + this_id).is(":visible")) {
        batch_id = parseInt($("#batch_" + this_id).val()) || 0;
    }

    let isValid = 1;
    if (!$("#wqr_name_" + this_id).valid()) {
        isValid = 0;
    }
    if (!$("#wqr_mobile_" + this_id).valid()) {
        isValid = 0;
    }
    if (!$("#wqr_email_" + this_id).valid()) {
        isValid = 0;
    }
    if (!$("#wqr_city_id_" + this_id).valid()) {
        isValid = 0;
    }
    if (isValid == 0) {
        $("#" + this_id_att).attr('disabled', false);
        $("#" + this_id_att).css("pointer-events", "auto");
        return false;
    }

    //if($(this).attr('class')=='enroll_now') {
    $.ajax({
        url: baseurl + '/validate-workshop-quick-register/' + this_id + '/' + batch_id,
        type: 'GET',
        dataType: 'json',
        data: {},
        processData: false,
        contentType: false,
        success: function(response) {
            if (response.result == true) {
                $(this).removeClass('enroll_now_qr');
                $(this).addClass('enroll_now_qr_v');
                if ($("#show_bs_" + this_id).is(":visible")) {
                    if ($("#show_bs_" + this_id + " select").val() == '') {
                        $("#" + this_id_att).attr('disabled', false);
                        $("#" + this_id_att).css("pointer-events", "auto");
                        $("#show_bs_" + this_id + " select").after('<span class="error bs_error">&nbsp;&nbsp;&nbsp;This field is required.</span>');
                    } else {
                        $("#workshop_register_" + this_id).submit();
                    }
                } else {
                    $("#workshop_register_" + this_id).submit();
                }
            } else {
                if (response.info) {
                    swal(response.info_title, response.msg, "info");
                } else {
                    swal("Error", response.msg, "error");
                }
                $("#" + this_id_att).attr('disabled', false);
                $("#" + this_id_att).css("pointer-events", "auto");
            }
        },
        error: function(xhr, ajaxOptions, thrownError) {
            var error = "";
            var errors = JSON.parse(xhr.responseText);
            if (xhr.status == 422) {
                $.each(errors.errors, function(i, item) {
                    error += item + "<br>";
                });
            } else {
                var error = errors.message;
            }
            swal("Error!", error, "error");
            $("#" + this_id_att).attr('disabled', false);
            $("#" + this_id_att).css("pointer-events", "auto");
        }
    });
    /*} else {
        $("#workshop_register_"+this_id).submit();
    }*/
});