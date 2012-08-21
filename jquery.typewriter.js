(function( $ ) {
    
    /**
     * Typewriter functionality using CSS3 animations
     * 
     * Requirements: css3 jQuery Plugin
     *
     * Initialize with "$(document).typewriter( options );"
     * 
     * Note: javascript only needed to handle number of characters for CSS steps().
     */
    $.fn.typewriter = function( options ) {  
        options = $.extend({
            "classname" : "typewriter",
            "timePerCharacter" : 0.15,
            "caretString" : "|", // suitable alternative is "_"
            "abortOnLeave" : true,
            "continueBlinking" : false
        }, options);
        
        $("." + options.classname).each(function(index, element) {
            var numberOfCharacters = $(element).text().length;
            
            var spanElement = $('<span>');
            spanElement.addClass("caret");
            spanElement.html(options.caretString);
            var clearElement = $('<div>');
            clearElement.addClass('clear');
            
            $(element).append(spanElement);   
            $(element).after(clearElement); 
            
            var propertyName = "animation";
            var typingString = "typing " + (numberOfCharacters*options.timePerCharacter) + "s steps(" + numberOfCharacters + ", end)";
            var blinkingString = "blink-caret 1s step-end infinite";  
            
            $(element).hover(function(event) {
                switch(event.type) {
                    case "mouseenter":
                        var propertyValue = typingString + "," + blinkingString;
                        break;
                    case "mouseleave":
                        if (options.abortOnLeave) {
                            if (options.continueBlinking) {
                                var propertyValue = blinkingString;
                            } else {
                                var propertyValue = "";
                            }
                        }
                        break;
                }
                
                $(spanElement).css3(propertyName, propertyValue);
            }); 
        });

        return this;
    };
    
})( jQuery );
