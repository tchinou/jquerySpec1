console.log("test)");



function createImage(form){
	
	console.log(form.description.value);
	console.log(form.image.value);
	
	
	var x=$("#posx").val();
	var y=$("#ypos").val();
	console.log(x);
	var item = $("<div >");
	item.css("width", "50px");
	item.css("height", "50px");
	var deleteButton = $('<button/>').attr("type","button").text("X");
	deleteButton.click(function(){
		item.remove();
	});
	var zx=x-50;
	deleteButton.css("position", "relative");
	deleteButton.css("left", zx+"px");
	deleteButton.css("top", y+"px");
	deleteButton.css("z-index", "10000");
	item.append(deleteButton);
	var img = $('<img id="imag" />').attr('src', form.image.value); 
	img.css("width", "50px");
	img.css("height", "50px");
	img.css("left", x+"px");
	img.css("top", y+"px");
	img.attr("title", form.description.value);
	window.x=x;
	window.y=y;
	var xxx=form.x.value;
	var yyy=form.y.value;
	console.log("xxx");
	console.log(xxx);
	item.append(img)
	$("body").append(item);	

	$( "#imag" ).on("click", {x:form.x.value, y: form.y.value, d:form.description.value}, executeCode);


}

function executeCode(event){
	
	console.log(event.data.x);

$( "#dispForm").css("position", "absolute");

$( "#dispForm").css("width", "100%");
console.log("lyeTTTTTTs");

$( "#dispForm").css("height", "200px");
$( "#dispForm").css("left", "0px");
$( "#dispForm").css("bottom", "0px");
$( "#dispForm").css("right", "0px");
//console.log(form.xpos.value);
//console.log(form.ypos.value);
$("#nx").val(event.data.x);
$("#ny").val(event.data.y);
$("#desc").val(event.data.d);
$( "#dispForm").show();

console.log($("dispForm"));

console.log("tchinou");
}

$("#annuler").on("click", function(){
	
	$("#dispForm").hide();
	
});

$("#supprimer").on("click", function(){
	console.log("suppression");
	$("#imag").remove();
	
	var e = $("div button");
	console.log(e);
	e.remove();

	$("#dispForm").hide();
	
});
$("#ok").on("click", function(){
	
	
	
	var x=$("#nx").val();
	var y=$("#ny").val();
	console.log(x);
	var item = $("<div >");
	item.css("width", "50px");
	item.css("height", "50px");
	var deleteButton = $('<button/>').attr("type","button").text("X");
	deleteButton.click(function(){
		item.remove();
	});
	var zx=x-50;
	deleteButton.css("position", "relative");
	deleteButton.css("left", zx+"px");
	deleteButton.css("top", y+"px");
	deleteButton.css("z-index", "10000");
	item.append(deleteButton);
	var img = $('<img id="imag" />').attr('src', form.image.value); 
	img.css("width", "50px");
	img.css("height", "50px");
	img.css("left", x+"px");
	img.css("height", y+"px");
	img.attr("title", form.description.value);

	item.append(img)
	
});


$(function(){
	$( "#dispForm").hide();


dialog = $( "#dialog-form" ).dialog({
    autoOpen: false,
    height: 400,
    width: 350,
    modal: true,
    buttons: {
      "Ajouter une image": function(){
    	  createImage(form[0]);
    	  dialog.dialog( "close" );  
      },
      Cancel: function() {
        dialog.dialog( "close" );
      }
    },
    close: function() {
      form[ 0 ].reset();
    }
  });

  form = dialog.find( "form" ).on( "submit", function( event ) {
    event.preventDefault();
  });

  $( "#create-image" ).button().on( "click", function() {
    dialog.dialog( "open" );
    console.log("DIF");
  });
  

  
});