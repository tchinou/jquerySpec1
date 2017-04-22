function displayForm2(event){
	
	
	form = event.data.form;
	item = event.data.item;
	
	var img = $(item).find("img");
	var description = img.attr("title");
	var x = item.css("left");
	var y = item.css("top");
	var src=img.attr("src");
	var xx='', yy='';
		
		for(i=0; i<x.length; i++){
			
			 if ("" + parseInt(x[i]) != "NaN")  	xx=xx+x[i];
		
		}
		
		for(i=0; i<y.length; i++){
			
			 if ("" + parseInt(y[i]) != "NaN") 		yy=yy+y[i];
		
		}
		
	form2 = $(form).clone();
	form2[0].description.value = description;
	form2.get(0).x.value = xx;
	form2.get(0).y.value = yy;	
	form2.get(0).image.value=src;
		
	buttonModify = $("<button type='button'/>").text("Modifier");
	buttonCancel = $("<button />").text("annuler");
	buttonDelete = $("<button />").text("supprimer");
	buttonModify.click({form:form2, item : item}, modifyImage);
	buttonDelete.click({form:form2, item : item}, deleteImage);
	buttonCancel.click({form:form2, item : item}, cancelForm);
	group = $("<div id='group'></div>");
	$(group).append(buttonModify);
	$(group).append(buttonCancel);
	$(group).append(buttonDelete);
		
		if($("#affichage").find("form").length == 0){
		
				$("#affichage").append(form2);
				$("#affichage").append($(group));
		}
		
		else{

				$("#affichage").find("form").remove();
				$("#group").remove();
			
		}
		
		
	$( "#affichage").css("position", "absolute");
	$( "#affichage").css("width", "100%");
	$( "#affichage").css("height", "100px");
	$( "#affichage").css("left", "0px");
	$( "#affichage").css("bottom", "0px");
	$( "#affichage").css("right", "0px");
	
}

function cancelForm (event){
	form = event.data.form2;
	item  = event.data.item;
	$("#affichage").find("form").remove();
	$(group).empty();
}
function modifyImage(event){
	var form = $( "#affichage" ).find("form");
	form  = event.data.form2;
	item  = event.data.item;
	var formJs=form2.get(0);
	$(item).replaceWith(createImageForm(formJs));
	$("#affichage").find("form").remove();
	$(group).empty();
}

function deleteImage(event){

	$(item).remove();
	$("#affichage").find("form").remove();
	$(group).empty();
}

function jsonImport(form){
	alert($("#text-area").val());
	var myJson = $("#text-area").val();
	var myObj = JSON.parse(myJson);

	$.each(myObj, function(){
		
			$.each(this, function(index, value){
		
					var x =myObj.images[index].position.x;
					var y =myObj.images[index].position.y
					var imag=myObj.images[index].src;
					var descr=myObj.images[index].description;
					createImage(form, x, y, descr, imag);
				
			});
	});
};

function createImageForm(form){
	
	var xForm=form.x.value;
	var yForm=form.y.value;
	var descForm=form.description.value;
	var imagForm=form.image.value;
	
	createImage(form, xForm, yForm, descForm, imagForm);
}
function createImage(form, x, y, desc, imag){
	var xPos=x;
	var yPos=y;
	var xx=" ", yy=" ";
	var imagg=imag;
	var descrpt=desc;
	var item = $('<div class="item">');
	var deleteButton = $('<button type="button"/>').attr("type","button").text("X");
	

	deleteButton.click(function(){
		
		item.remove();
	});
	
	for(i=0; i<xPos.length; i++){
		
		 if ("" + parseInt(xPos[i]) != "NaN") xx=xx+xPos[i];
	
	}
	
	for(i=0; i<yPos.length; i++){
		
		 if ("" + parseInt(yPos[i]) != "NaN") yy=yy+yPos[i];
	
	}
	
	var img = $('<img/>').attr('src', imagg); 
	img.attr("title", descrpt);
	img.attr("id", "imgDirect");
	img.css("width", "50px");
	img.css("height", "50px");
	var item = $('<div class="item">');
	item.css("position", "absolute");
	item.css("left", xx+"px");
	item.css("top", yy+"px");
	item.append(img);
	item.css("width", "50px");
	item.css("height", "50px");
	item.css("borderColor", "red");
	item.css("borderWidth", "1px");
	item.css("borderStyle", "solid");
	
	deleteButton.css("position", "relative");
	deleteButton.css("left", 0);
	deleteButton.css("top", 0);
	deleteButton.css("z-index", "5000");
	
	item.append(deleteButton);
	
	img.click({form:form, item: item}, displayForm2);
	
		$("body").append(item);
	
	}


$(document).ready(function(){
		
		$("#import").css("position", "relative");
		$("#import").css("top", "10px");
		$("#import").css("left", "1000px");
		
		$("#export").css("position", "relative");
		$("#export").css("width", "10%");
		$("#export").css("height", "100px");
		$("#export").css("bottom", "-500px");
		$("#export").css("left", "450px");
		
		var form = $("#dialog-form").find("form");
		var importDialog;
		dialog = $("#dialog-form").dialog({
		    autoOpen: false,
		    height: 400,
		    width: 350,
		    modal: true,
			    buttons: {
			      "Ajouter une image": function(){
				    
			    	  createImageForm(form.get(0));
			    	  dialog.dialog( "close" ); 
			      },
			    
			    Cancel: function() {
			    	
			        dialog.dialog( "close" );
			      
			    	}
			    },
			    
			    close: function() {
			    				
			    	form[0].reset();
			    }
		  });
		
		importDialog = $("#import-form").dialog({
		    autoOpen: false,
		    height: 400,
		    width: 350,
		    modal: true,
			    buttons: {
			      "Valider Import": function(){	    
			    	 
					jsonImport(form.get(0));
					importDialog.dialog( "close" ); 
			      	},
			      		
			    Cancel: function() {
			          
			    	importDialog.dialog( "close" );
			      	}
			    },
			    close: function() {
			    	
			    	form[0].reset();
			    					
			    }
		  });

		
		 form = dialog.find( "form" ).on( "submit", function( event ) {
			
			   event.preventDefault();
		
		 });
	
		  $( "#create-image" ).button().on( "click", function() {
			
				$("#affichage").empty(),  
				dialog.dialog( "open" );
		  });
	
		  
		  $("#annuler").button().on("click", function(){

			   form[0].reset();
		  });
	  
		  
		  $("#import").button().on("click", function(){
			  			
			  importDialog.dialog("open"); 
		  });
		  
		  $("#export").button().on("click", function() {
				
			  var positionPicture=$("div.item");
				data={images: []};
				var picture = $("div.item");
				picture.each(function(){
					
					var images=$(this).find("img");
					var picture = $(this);
					image ={}
					image ["src"] = images.attr("src"),
					image ["description"] = images.attr("title"),
					image ["position"] = { "x": picture.css("left"), 
							
										   "y":picture.css("top") 
										   },
							
					data.images.push(image)
						
				});
				
				var myJson= JSON.stringify(data);
				alert(myJson);
		  });
			
			

});

