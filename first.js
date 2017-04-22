
	$(document).ready(function(){

	$("#dialog-form").hide();

    var displayDialog, form;
 
      // From http://www.whatwg.org/specs/web-apps/current-work/multipage/states-of-the-type-attribute.html#e-mail-state-%28type=email%29
      
 
    displayDialog = $( "#dialog-form" ).dialog({
      autoOpen: false,
      height: 200,
      width: 350,
      modal: true,
    //  buttons: {
        //"Create": addUser,
        /*Cancel: function() {
          dialog.dialog( "close" );
        }*/
    //  },
     
    });
 
    form = displayDialog.find( "form" ).on( "submit", function( event ) {
      event.preventDefault();
      //init();
    });
 
    $( "#bouton" ).button().on( "click", function() {
    	displayDialog.dialog( "open" );
    });
  } );
/*
$(function(){
	$('.closeImageDisplay').click(function(){
		$('#allItems').remove();
	})
});*/
//JSXYPlot.js
window.onload = init;


const SIZE = 50;  // width and height for the image
const MARGIN_LEFT = 15;  // left-margin for the container
const MARGIN_TOP  = 180; // top-margin for the container
// x, y coordinates of the items
const X_MIN = 0;
const Y_MIN = 0;
const X_MAX = 600;
const Y_MAX = 300;
const WIDTH = X_MAX - X_MIN + 1;
const HEIGHT = Y_MAX - Y_MIN + 1;
 
var numItems = 0;  // number of items created so far
 
// The onload handler. Initialize the bounds

function updateDialog(){
    $("Form")[0].reset();

	
}

function closeImageDisplay(){
var parent=	document.getElementById("allItems");
var child = document.getElementById("item");
parent.removeChild(child);
}

function init() {
   var box = document.getElementById("box");
   box.style.top = MARGIN_TOP + "px";
   box.style.left = MARGIN_LEFT + "px";
   box.style.width = WIDTH + "px";
   box.style.height = HEIGHT + "px";
 
   document.getElementById("btnCreate").onclick = createImageDisplay;
   //document.getElementById("btnCancel").onclick = updateItem;
   document.getElementById("btnCancel").onclick = updateDialog;
   document.getElementById("closeImageDisplay").onclick=closeImageDisplay;

} 
// Create a new item at x, y
function createImageDisplay() {
	var selectElemt=document.getElementById("choix");
	var SOURCE_IMAGE=selectElemt.options[selectElemt.selectedIndex].value;
	var textsel = selectElemt.options[selectElemt.selectedIndex].text;
	console.log(SOURCE_IMAGE);

   // Need to parseInt as it will be added.
   var x = parseInt(document.getElementById("newX").value);
   var y = parseInt(document.getElementById("newY").value);
   var displayX = x + MARGIN_LEFT;
   var displayY = y + MARGIN_TOP;
   if ((x >= X_MIN) && (x <= X_MAX) && (y >= Y_MIN) && (y <= Y_MAX)) {
      numItems++;
      // Put up an <img> to represent the item
      console.log("!!!!");
      var itemImg = "<img class='item' title ='" + textsel + "'name='item' src='"
            + SOURCE_IMAGE + "' style='width:" + SIZE
            + "px; height:" + SIZE + "px; top:" + displayY
            + "px; left:" + displayX + "px' />";
      console.log("????");

      // Put up a <p> for the item description
      var itemDesc = "<p class='itemDesc' name='itemDesc' style='top:"
            + displayY + "px; left:" + displayX
            + "px'>" + numItems + "</p>";
      console.log("LLLL");
      var itemClose = " <input id='closeImageDisplay' type='button' />"+"x"+"</button>";
      document.getElementById('allItems').innerHTML += itemImg + itemDesc + itemClose;
      // add a form's select option
    /*  document.getElementById('updateNo').innerHTML
          += "<option>" + numItems + "</option>";*/
      
      
   }
}

/*

$( function() {
    function left( element, using ) {
        my: "right middle",
        at: "left+25 middle",
        of: "#container",
        collision: "none",
        using: using
      });
    }
    function right( element, using ) {
      element.position({
        my: "left middle",
        at: "right-25 middle",
        of: "#container",
        collision: "none",
        using: using
      });
    }
    function center( element, using ) {
      element.position({
        my: "center middle",
        at: "center middle",
        of: "#container",
        using: using
      });
    }
 
    left( $( "img:eq(0)" ) );
    center( $( "img:eq(1)" ) );
    right( $( "img:eq(2)" ) );
 
    function animate( to ) {
      $( this ).stop( true, false ).animate( to );
    }
    function next( event ) {
      event.preventDefault();
      center( $( "img:eq(2)" ), animate );
      left( $( "img:eq(1)" ), animate );
      right( $( "img:eq(0)" ).appendTo( "#container" ) );
    }
    function previous( event ) {
      event.preventDefault();
      center( $( "img:eq(0)" ), animate );
      right( $( "img:eq(1)" ), animate );
      left( $( "img:eq(2)" ).prependTo( "#container" ) );
    }
    $( "#previous" ).on( "click", previous );
    $( "#next" ).on( "click", next );
 
    $( "img" ).on( "click", function( event ) {
      $( "img" ).index( this ) === 0 ? previous( event ) : next( event );
    });
 
    $( window ).on( "resize", function() {
      left( $( "img:eq(0)" ), animate );
      center( $( "img:eq(1)" ), animate );
      right( $( "img:eq(2)" ), animate );
    });
  } );
*/



/*
$(document).ready(function(){
	
	alert ("jquery est prêt");
});
*/
/*
$('.but').click(function(){
		

	$('.but').dialog({
		buttons: {
			OK: function() {
    			$(this).dialog("destroy");
			}
		}
	});
}); */
/*
$( function() {
    function left( element, using ) {
      element.position({
        my: "right middle",
        at: "left+25 middle",
        of: "#container",
        collision: "none",
        using: using
      });
    }
    function right( element, using ) {
      element.position({
        my: "left middle",
        at: "right-25 middle",
        of: "#container",
        collision: "none",
        using: using
      });
    }
    function center( element, using ) {
      element.position({
        my: "center middle",
        at: "center middle",
        of: "#container",
        using: using
      });
    }
 
    left( $( "img:eq(0)" ) );
    center( $( "img:eq(1)" ) );
    right( $( "img:eq(2)" ) );
 
    function animate( to ) {
      $( this ).stop( true, false ).animate( to );
    }
    function next( event ) {
      event.preventDefault();
      center( $( "img:eq(2)" ), animate );
      left( $( "img:eq(1)" ), animate );
      right( $( "img:eq(0)" ).appendTo( "#container" ) );
    }
    function previous( event ) {
      event.preventDefault();
      center( $( "img:eq(0)" ), animate );
      right( $( "img:eq(1)" ), animate );
      left( $( "img:eq(2)" ).prependTo( "#container" ) );
    }
    $( "#previous" ).on( "click", previous );
    $( "#next" ).on( "click", next );
 
    $( "img" ).on( "click", function( event ) {
      $( "img" ).index( this ) === 0 ? previous( event ) : next( event );
    });
 
    $( window ).on( "resize", function() {
      left( $( "img:eq(0)" ), animate );
      center( $( "img:eq(1)" ), animate );
      right( $( "img:eq(2)" ), animate );
    });
  } );*/
 /*$( "#bouton" ).button().on( "click", function() {
      dialog.dialog( "open" );
    
     var dialog, form,
 
      // From http://www.whatwg.org/specs/web-apps/current-work/multipage/states-of-the-type-attribute.html#e-mail-state-%28type=email%29
      xposition = $( "#positionX" ),
      yposition = $( "#positionY" ),
      description = $( "#description" ),
      allFields = $( [] ).add( xposition ).add( yposition ).add( description ),
      tips = $( ".validateTips" );
 
    function updateTips( t ) {
      tips
        .text( t )
        .addClass( "ui-state-highlight" );
      setTimeout(function() {
        tips.removeClass( "ui-state-highlight", 1500 );
      }, 500 );
    }
 

 */
  
 
  /*  function displayImage() {
   // JSXYPlot.js
      window.onload = init;
       
      const SOURCE_IMAGE = $('#img').attr('src');
      const SIZE = 50;  // width and height for the image
      const MARGIN_LEFT = 15;  // left-margin for the container
      const MARGIN_TOP  = 180; // top-margin for the container
      // x, y coordinates of the items
      const X_MIN = 0;
      const Y_MIN = 0;
      const X_MAX = 600;
      const Y_MAX = 300;
      const WIDTH = X_MAX - X_MIN + 1;
      const HEIGHT = Y_MAX - Y_MIN + 1;
       
      var numItems = 0;  // number of items created so far
       
      // The onload handler. Initialize the bounds
      function init() {
         var box = document.getElementById("box");
         box.style.top = MARGIN_TOP + "px";
         box.style.left = MARGIN_LEFT + "px";
         box.style.width = WIDTH + "px";
         box.style.height = HEIGHT + "px";
         newItem();
        // document.getElementById("btnCreate").onclick = newItem;
         //document.getElementById("btnUpdate").onclick = updateItem;
      }
       
      // Create a new item at x, y
      function newItem() {
         // Need to parseInt as it will be added.
         //var x = parseInt(document.getElementById("newX").value);
        // var y = parseInt(document.getElementById("newY").value);
    	  var x = $("#positionX");
    	  var y = $("#positionY");
    	  var img=$("#")
          var displayX = x + MARGIN_LEFT;
          var displayY = y + MARGIN_TOP;
         if ((x >= X_MIN) && (x <= X_MAX) && (y >= Y_MIN) && (y <= Y_MAX)) {
            numItems++;
            // Put up an <img> to represent the item
            var itemImg = "<img class='item' name='item' src='"
                  + SOURCE_IMAGE + "' style='width:" + SIZE
                  + "px; height:" + SIZE + "px; top:" + displayY
                  + "px; left:" + displayX + "px' />";
       
            // Put up a <p> for the item description
            var itemDesc = "<p class='itemDesc' name='itemDesc' style='top:"
                  + displayY + "px; left:" + displayX
                  + "px'>" + numItems + "</p>";
       
            document.getElementById('allItems').innerHTML += itemImg + itemDesc;
            // add a form's select option
           // document.getElementById('updateNo').innerHTML
             //     += "<option>" + numItems + "</option>";
         }
      }
      
    }*/
 /*
    dialog = $( "#dialog-form" ).dialog({
      autoOpen: false,
      height: 600,
      width: 450,
      modal: true,
      buttons: {
        "Create": displayImage,
        Cancel: function() {
          dialog.dialog( "close" );
        }
      },
      close: function() {
        form[ 0 ].reset();
        allFields.removeClass( "ui-state-error" );
      }
    });
 
    form = dialog.find( "form" ).on( "submit", function( event ) {
      event.preventDefault();
      displayImage();
    });
 
   
  
    function left( element, using ) {
        element.position({
          my: "right middle",
          at: "left+25 middle",
          of: "#container",
          collision: "none",
          using: using
        });
      }
      function right( element, using ) {
        element.position({
          my: "left middle",
          at: "right-25 middle",
          of: "#container",
          collision: "none",
          using: using
        });
      }
      function center( element, using ) {
        element.position({
          my: "center middle",
          at: "center middle",
          of: "#container",
          using: using
        });
      }

      left( $( "img:eq(0)" ) );
      center( $( "img:eq(1)" ) );
      right( $( "img:eq(2)" ) );

      function animate( to ) {
        $( this ).stop( true, false ).animate( to );
      }
      function next( event ) {
        event.preventDefault();
        center( $( "img:eq(2)" ), animate );
        left( $( "img:eq(1)" ), animate );
        right( $( "img:eq(0)" ).appendTo( "#container" ) );
      }
      function previous( event ) {
        event.preventDefault();
        center( $( "img:eq(0)" ), animate );
        right( $( "img:eq(1)" ), animate );
        left( $( "img:eq(2)" ).prependTo( "#container" ) );
      }
      $( "#previous" ).on( "click", previous );
      $( "#next" ).on( "click", next );

      $( "img" ).on( "click", function( event ) {
        $( "img" ).index( this ) === 0 ? previous( event ) : next( event );
      });

      $( window ).on( "resize", function() {
        left( $( "img:eq(0)" ), animate );
        center( $( "img:eq(1)" ), animate );
        right( $( "img:eq(2)" ), animate );
      });
 
 }  );*/
/*
  $( function() {
 function left( element, using ) {
     element.position({
       my: "right middle",
       at: "left+25 middle",
       of: "#container",
       collision: "none",
       using: using
     });
   }
   function right( element, using ) {
     element.position({
       my: "left middle",
       at: "right-25 middle",
       of: "#container",
       collision: "none",
       using: using
     });
   }
   function center( element, using ) {
     element.position({
       my: "center middle",
       at: "center middle",
       of: "#container",
       using: using
     });
   }

   left( $( "img:eq(0)" ) );
   center( $( "img:eq(1)" ) );
   right( $( "img:eq(2)" ) );

   function animate( to ) {
     $( this ).stop( true, false ).animate( to );
   }
   function next( event ) {
     event.preventDefault();
     center( $( "img:eq(2)" ), animate );
     left( $( "img:eq(1)" ), animate );
     right( $( "img:eq(0)" ).appendTo( "#container" ) );
   }
   function previous( event ) {
     event.preventDefault();
     center( $( "img:eq(0)" ), animate );
     right( $( "img:eq(1)" ), animate );
     left( $( "img:eq(2)" ).prependTo( "#container" ) );
   }
   $( "#previous" ).on( "click", previous );
   $( "#next" ).on( "click", next );

   $( "img" ).on( "click", function( event ) {
     $( "img" ).index( this ) === 0 ? previous( event ) : next( event );
   });

   $( window ).on( "resize", function() {
     left( $( "img:eq(0)" ), animate );
     center( $( "img:eq(1)" ), animate );
     right( $( "img:eq(2)" ), animate );
   });
 });
 

 */