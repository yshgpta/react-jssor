import React, { Component } from 'react';
import '../public/lib/jssor.slider.min.js';

declare var $JssorSlider$;
declare var $JssorEasing$;
declare var $JssorSlideshowFormations$;
declare var $JssorSlideshowRunner$;
declare var $JssorBulletNavigator$;
declare var $JssorArrowNavigator$;
declare var $JssorThumbnailNavigator$;
declare var $JssorCaptionSlideo$;


class Slider extends Component {
  componentDidMount() {
    (function (containerId) {
        /*
          Transition Reference: http://www.jssor.com/development/tool-slideshow-transition-viewer.html
        */
        var _SlideshowTransitions = [{
            $Duration: 600,
            $Delay: 50,
            $Cols: 8,
            $Rows: 4,
            $FlyDirection: 5,
            $Formation:
            $JssorSlideshowFormations$.$FormationZigZag,
            $Assembly: 1028,
            $ChessMode: { $Column: 3, $Row: 12 },
            $Easing: { $Left: $JssorEasing$.$EaseInCubic, $Top: $JssorEasing$.$EaseInCubic, $Opacity: $JssorEasing$.$EaseOutQuad },
            $Opacity: 2
        }, {$Duration:600,x:1,$Delay:50,$Cols:8,$Rows:4,$Easing:{$Left:$JssorEasing$.$EaseInCubic,$Opacity:$JssorEasing$.$EaseOutQuad},$Opacity:2}];

        var options = {
            $DragOrientation: 3,
            $AutoPlay: true,
            $SlideDuration: 1500,
            $AutoPlayInterval: 4500,
            $SlideshowOptions: {                                //Options which specifies enable slideshow or not
                $Class: $JssorSlideshowRunner$,                 //Class to create instance of slideshow
                $Transitions: _SlideshowTransitions,            //Transitions to play slide, see jssor slideshow transition builder
                $TransitionsOrder: 1,                           //The way to choose transition to play slide, 1 Sequence, 0 Random
                $ShowLink: 2,                                   //0 After Slideshow, 2 Always
                $ContentMode: false                             //Whether to trait content as slide, otherwise trait an image as slide
            }
        };

        new $JssorSlider$(containerId, options);
    })('slider1_container');
  }

  render() {
    return (
      <div id="slider1_container" style={{
        position: 'relative',
        top: '0px',
        left: '0px',
        width: '600px',
        height: '300px'
      }}>
          <div data-u="slides" style={{
            cursor: 'move',
            position: 'absolute',
            overflow: 'hidden',
            left: '0px',
            top: '0px',
            width: '600px',
            height: '300px'
          }}>
              <div><img data-u="image" alt='ASD' data-src2="https://c1.staticflickr.com/4/3826/9721093875_1075126126_z.jpg" /></div>
              <div><img data-u="image" alt='ASD' src="http://imgsv.imaging.nikon.com/lineup/lens/zoom/normalzoom/af-s_dx_18-140mmf_35-56g_ed_vr/img/sample/sample1_l.jpg" /></div>
          </div>
      </div>
    )
  }
}

export default Slider;