

   
        /*owl one*/ 

        jQuery(document).ready(function($) {
            "use strict";
            $('#customers-testimonials').owlCarousel( {
                    loop: true,
                    center: false,
                    items: 3,
                    margin: 35,
                    autoplay: false,
                    dots:true,
                nav:true,
                    autoplayTimeout: 8500,
                    smartSpeed: 650,
                  navText: [' <img src="./images/ic_trending_flat_24px.svg" alt="">','   <img src="./images/ic_trending_r.svg" alt=""> '],
                    responsive: {
                        0: {
                            items: 1
                        },
                        300: {
                            items: 1.2
                        },
                        525: {
                            items: 1.5
                        },
                        600: {
                            items: 1.5
                        },
                        768: {
                            items: 3
                        },
                        1200: {
                            items: 4.5
                        },
                       
                    }
                });
            });

        /*owl two*/ 

        jQuery(document).ready(function($) {
            "use strict";
            $('#customers-testimonials2').owlCarousel( {
                    loop: true,
                    center: false,
                    items: 3,
                    margin: 35,
                    autoplay: false,
                    dots:true,
                nav:true,
                    autoplayTimeout: 8500,
                    smartSpeed: 450,
                    navText: [' <img src="./images/ic_trending_flat_24px.svg" alt="">','   <img src="./images/ic_trending_r.svg" alt=""> '],
                    responsive: {
                        0: {
                            items: 1
                        },
                        325: {
                            items: 1.2
                        },
                        425: {
                            items: 1.5
                        },
                        600: {
                            items: 1.8
                        },
                        768: {
                            items: 3
                        },
                       
                        1200: {
                            items: 4.5
                        },
                        
                    }
                });
            });
        /*owl three*/ 
        jQuery(document).ready(function($) {
            "use strict";
            $('#customers-testimonials3').owlCarousel( {
                    loop: true,
                    center: false,
                    items: 3,
                    margin: 35,
                    autoplay: false,
                    dots:true,
                nav:true,
                    autoplayTimeout: 8500,
                    smartSpeed: 650,
                    navText: [' <img src="./images/ic_trending_flat_24px.svg" alt="">','   <img src="./images/ic_trending_r.svg" alt=""> '],
                    responsive: {
                        0: {
                            items: 1
                        },
                        425: {
                            items: 1.5
                        },
                        
                        768: {
                            items: 3
                        },
                        1200: {
                            items: 4.5
                        },
                       
                    }
                });
            });
        /*owl four*/ 
        jQuery(document).ready(function($) {
            "use strict";
            $('#customers-testimonials4').owlCarousel( {
                    loop: true,
                    center: false,
                    items: 3,
                    margin: 35,
                    autoplay: false,
                    dots:true,
                nav:true,
                    autoplayTimeout: 8500,
                    smartSpeed: 450,
                    navText: [' <img src="./images/ic_trending_flat_24px.svg" alt="">','   <img src="./images/ic_trending_r.svg" alt=""> '],
                    responsive: {
                        0: {
                            items: 1
                        },
                        425: {
                            items: 1.5
                        },
                        600: {
                            items: 1.7
                        },
                        768: {
                            items: 2.3
                        },
                        992: {
                            items: 3
                        },
                        1200: {
                            items: 4.5
                        },
                       
                    }
                });
            });
            let nav_toggle = document.querySelector('.nav_toggle');
            let nav_toggle_icon = document.querySelector('.nav_toggle ion-icon');
            let nav_menu = document.querySelector('.nav_menu');
            
            nav_toggle.addEventListener('click', () => {
              nav_menu.classList.toggle('active');
              nav_toggle_icon.setAttribute('name',
                nav_menu.classList.contains('active') ? 'close-outline' : 'menu-outline'
              );
            });
            $(function() {
                var Accordion = function(el, multiple) {
                  this.el = el || {};
                  this.multiple = multiple || false;
              
                  // Variables privadas
                  var links = this.el.find('.link');
                  // Evento
                  links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
                }
              
                Accordion.prototype.dropdown = function(e) {
                  var $el = e.data.el;
                    $this = $(this),
                    $next = $this.next();
              
                  $next.slideToggle();
                  $this.parent().toggleClass('open');
              
                  if (!e.data.multiple) {
                    $el.find('.submenu').not($next).slideUp().parent().removeClass('open');
                  };
                } 
              
                var accordion = new Accordion($('#accordion'), false);
              });
         
