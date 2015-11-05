        jQuery(document).ready(function ($) {
            var options = {
				$AutoPlay: true,
                $DragOrientation: 3,                               
                $ArrowNavigatorOptions: {                       
                    $Class: $JssorArrowNavigator$,              
                    $ChanceToShow: 2,                               
                    $AutoCenter: 0,                                 
                    $Steps: 1                             
                }
            };

            var jssor_slider1 = new $JssorSlider$("slider1_container", options);
        });
		
       
