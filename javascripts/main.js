$( document ).ready(function() {
    console.log( "ready!" );

		var folder = "images/cards/";

$.ajax({
    url : folder,
    success: function (data) {
        $(data).find("a").attr("href", function (i, val) {
            if( val.match(/\.(jpe?g|png|gif)$/) ) {
              $("#allCards-Container").append(
								"<button id="+val.split(".png")[0]+"><img class='royaleCard' src='"+ folder + val +"'></button>" );
            }

				});
				//After GET of all cards
				$("#goblin-barrel").clone().appendTo("#ezCounter-Container");
				$("#hog-rider").clone().appendTo("#ezCounter-Container");
				$("#minion-horde").clone().appendTo("#ezCounter-Container");
				$("#royal-giant").clone().appendTo("#ezCounter-Container");
    }
	});

});
