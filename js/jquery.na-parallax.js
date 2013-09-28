/*
	Copyright (c) 2013 Nuno Alves, https://github.com/nunodpalves/na-parallax
	
	Permission is hereby granted, free of charge, to any person obtaining
	a copy of this software and associated documentation files (the
	"Software"), to deal in the Software without restriction, including
	without limitation the rights to use, copy, modify, merge, publish,
	distribute, sublicense, and/or sell copies of the Software, and to
	permit persons to whom the Software is furnished to do so, subject to
	the following conditions:
	
	The above copyright notice and this permission notice shall be
	included in all copies or substantial portions of the Software.
	
	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
	EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
	NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
	LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
	OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
	WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

;(function( $ ) {

	var layers = [],
		started = false;

	function Layer( $el ) {
		this.data = {
			ratio: $el.data( "ratio" ) || 1,
			offset: $el.data( "offset" ) || 0
		};
	}

	function onscroll( e ) {
		console.log( "scroll" );
		console.log( e );
	}

	function onresize( e ) {
		console.log( "resize" );
		console.log( e );
	}

    $.fn.extend({

        parallax: function( options ) {
            this.defaultOptions = {};

            var settings = $.extend( {}, this.defaultOptions, options );

            return this.each( function() {
                var $this = $( this );

                $this.children().each( function( ) {
                	layers.push( new Layer( $( this ) ) );
                });

                if ( !started ) {
                	started = true;
                	$( window ).scroll( onscroll );
                	$( window ).resize( onresize );
                }
            });
        }

    });

})( jQuery );