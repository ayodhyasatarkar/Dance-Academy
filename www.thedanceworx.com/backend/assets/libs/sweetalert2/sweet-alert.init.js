! function(e) {
    "use strict";
    var t = function() {};
    t.prototype.init = function() {
        e("#sa-basic").click(function() {
            swal("Here's a message!")
        }), e("#sa-title").click(function() {
            swal("Here's a message!", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lorem erat eleifend ex semper, lobortis purus sed.")
        }), e("#sa-success").click(function() {
            swal("Good job!", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lorem erat eleifend ex semper, lobortis purus sed.", "success")
        }), e("#sa-warning").click(function() {
            swal({
                title: "Are you sure?",
                text: "You will not be able to recover this imaginary file!",
                type: "warning",
                showCancelButton: !0,
                confirmButtonColor: "#DD6B55",
                confirmButtonText: "Yes, delete it!",
                closeOnConfirm: !1
            }, function() {
                swal("Deleted!", "Your imaginary file has been deleted.", "success")
            })
        }), e("#sa-params").click(function() {
            swal({
                title: "Are you sure?",
                text: "You will not be able to recover this imaginary file!",
                type: "warning",
                showCancelButton: !0,
                confirmButtonColor: "#DD6B55",
                confirmButtonText: "Yes, delete it!",
                cancelButtonText: "No, cancel plx!",
                closeOnConfirm: !1,
                closeOnCancel: !1
            }, function(e) {
                e ? swal("Deleted!", "Your imaginary file has been deleted.", "success") : swal("Cancelled", "Your imaginary file is safe :)", "error")
            })
        }), e("#sa-image").click(function() {
            swal({
                title: "Govinda!",
                text: "Recently joined twitter",
                imageUrl: "../../assets/images/users/1.jpg"
            })
        }), e("#sa-close").click(function() {
            swal({
                title: "Auto close alert!",
                text: "I will close in 2 seconds.",
                timer: 2e3,
                showConfirmButton: !1
            })
        })
    }, e.SweetAlert = new t, e.SweetAlert.Constructor = t
}(window.jQuery),
function(e) {
    "use strict";
    window.jQuery.SweetAlert.init()
}();