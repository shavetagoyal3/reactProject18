jQuery(document).ready(function () {	
jQuery("#heroSliderNav").owlCarousel({autoplay: true,items: 1});
jQuery("#officesSlider").owlCarousel();
jQuery("#cemetery").owlCarousel({
	autoplay: true,
	items: 5,
	responsive: {
        1199: {
            items: 5
        },
        1024: {
            items: 4
        },
        768: {
            items: 3
        },
        320: {
            items: 1
        }
	},
	onInitialized: function (event) {
	jQuery("#cemetery").parent().css({opacity: 1})
}
});

jQuery("#officesSlider").owlCarousel({
    loop: true,
    autoplay: true,
    items: 4,
    margin: 1,
    nav: true,
    dots: false,
    smartSpeed: 600,
    responsive: {
        1024: {
            items: 4
        },
        768: {
            nav: true,
            items: 4,
            autoplay: false,
        },
        320: {
            nav: false,
            items: 1,
            autoplay: true,
            autoplayTimeout: 4000,
            autoplaySpeed: 800
        }
    }
});

jQuery('.owl-carousel.company-owl-clients').owlCarousel({
    loop: true,
    autoplay: true,
    items: 4    
});
jQuery('#formRanking').owlCarousel({
	loop: true,
    autoplay: true,
    items: 3	
});

    var t = document.querySelector(".offers-tab");
     if (t) {
		    t.querySelectorAll(".offers-tablinks").forEach(function(t) {
            t.addEventListener("click", function(t) {
                var e = t.target,
                    n = e.getAttribute("data-name");
                document.querySelectorAll(".offers-tablinks").forEach(function(t) {
                    t.classList.remove("active")
                }), e.classList.add("active"), document.querySelectorAll(".offers-tabcontent").forEach(function(t) {
                    t.classList.remove("active")
                }), document.getElementById(n).classList.add("active")
            })
        }), jQuery("#defaultActiveTab").click(), jQuery(".offer-image").each(function() {
            var t = jQuery(this),
                e = t.attr("id"),
                n = t.attr("class"),
                r = t.attr("src");
            jQuery.get(r, function(r) {
                var o = jQuery(r).find("svg");
                void 0 !== e && (o = o.attr("id", e)), void 0 !== n && (o = o.attr("class", n + " replaced-svg")), o = o.removeAttr("xmlns:a"), t.replaceWith(o)
            }, "xml")
        })
		 }

});

