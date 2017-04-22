function displayForm2(event){
	
	
		form = event.data.form;
		item = event.data.item;
		var img = $(item).find("img");
		
		var description = img.attr("title");
		var x = img.css("left");
		var y = img.css("top");
		
		var xx='', yy='';
		for(i=0; i<x.length; i++){
			 if ("" + parseInt(x[i]) != "NaN")
			xx=xx+x[i];
		}
		
		for(i=0; i<y.length; i++){
			 if ("" + parseInt(y[i]) != "NaN")
			yy=yy+y[i];
		}
		
		form2 = $(form).clone();
		form2[0].description.value = description;
		form2.get(0).x.value = xx;
		form2.get(0).y.value = yy;	
		
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
		
		
		/*form2.append(buttonModify);
		form2.append(buttonCancel);
		form2.append(buttonDelete);*/
		
		if($("#affichage").find("form").length == 0){
			$("#affichage").append(form2);
			$("#affichage").append($(group));
			//$("#affichage").append(form2);
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
function exportDataImage(event){
	var positionPicture=$("div.item");
	var data=[];
	var picture = $("div.item");
	
	console.log(images.length);
	console.log(images);
	
	picture.each(function(){
		var images=$(this).find("img");
		var picture = $(this);
		console.log(images);
		console.log(images.attr("title"));

		image ={}
		image ["src"] = images.attr("src"),
		image ["description"] = images.attr("title"),
		image ["position"] = { "x": picture.css("left"), "y":picture.css("top")},
			
			data.push(image)
			
		
	});
	
	
//	$.each( images, function( key, value ) {
//		  alert( key + ": " + value );
//	});
	/*
		for(var i=0; i<images.length; i++){
			console.log("ici"+" "+ i);
			var picture=images[i];
			console.log(picture);
			
			//var description=picture.atribute("title");
			console.log(picture.title +" "+ picture.src+ " " + picture.left + " " + picture.top);
			data.images.push({
					
	
				"description" : picture.title,
				"src" :picture.src,
				"left":picture.left,
				"top" :picture.top,
				
				
			})
			
			//images.push(data);
			
		}*/
		var myJson= JSON.stringify(data);
		console.log(data);
		alert("images"+" "+ ":"+myJson);
}
	
	
	

function cancelForm (event){
	form = event.data.form2;
	item  = event.data.item;
	$("#affichage").find("form").remove();
	$(group).empty();
	
	
}
function modifyImage(event){
	var form = $( "#affichage" ).find("form");
	
	form = event.data.form2;
	item  = event.data.item;
	var ly=form2.get(0);
	console.log(form2);
	$(item).replaceWith(createImage(ly));
	$("#affichage").find("form").remove();
	$(group).empty();

}
function deleteImage(event){

		$(item).remove();
		$("#affichage").find("form").remove();
		$(group).empty();
		
}

function jsonImport(form){
	console.log("inside the import function");
	
	alert($("#text-area").val());
	var myJson = $("#text-area").val();
	var myObj = JSON.parse(myJson);
	
	/*
	$.each(myObj, function(index, element) {
	    alert(element.src); 
	});*/
	var items = $('<div class="items">');
	$.each(myObj, function(index, element) {
		
	   console.log(element.src);
	   console.log(element.description); 
	   console.log(element.position.x); 
	   console.log(element.position.y);
	   
	   var item = $('<div class="item">');
		
		var deleteButton = $('<button type="button"/>').attr("type","button").text("X");
		buttonExport = $("<button />").text("Exporter");

		deleteButton.click(function(){
			item.remove();
		});
		
		var img = $('<img/>').attr('src', element.src); 
		img.attr("title", element.description);
		img.attr("id", "imgDirect");
		img.css("width", "50px");
		img.css("height", "50px");
		item.css("position", "absolute");
		item.css("left", element.position.x+"px");
		item.css("top", element.position.y+"px");
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
		

		exportJson = $("<div id='export'></div>"); 
		$(exportJson).append(buttonExport);
		$(exportJson).css("position", "absolute");
		$(exportJson).css("width", "100%");
		$(exportJson).css("height", "100px");
		$(exportJson).css("bottom", "-110px");
		$(exportJson).css("left", "450px");
		
		if($("#affichage").find(exportJson).length == 0){

			$("#affichage").append($(exportJson));

		}
		
		buttonExport.click({form:form, item : item}, exportDataImage);
		img.click({form:form, item: item}, displayForm2);
		
		 $("body").append(item);
		items.append(item);
		

	});
		
	 return items;
			console.log(myObj);
			

}
function createImage(form){
	console.log("inside create image" );
	console.log(form);
	var x=form.x.value;
	var y=form.y.value;
	console.log(form.x.value);

	console.log(y);
	var item = $('<div class="item">');
		
	var deleteButton = $('<button type="button"/>').attr("type","button").text("X");
	buttonExport = $("<button />").text("Exporter");

	deleteButton.click(function(){
		item.remove();
	});

	var img = $('<img/>').attr('src', form.image.value); 
	//img.css("left",x+"px");
	//img.css("top", y+"px");
	img.attr("title", form.description.value);
	img.attr("id", "imgDirect");
	img.css("width", "50px");
	img.css("height", "50px");
	item.css("position", "absolute");
	item.css("left", x+"px");
	item.css("top", y+"px");
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
	

	exportJson = $("<div id='export'></div>"); 
	$(exportJson).append(buttonExport);
	$(exportJson).css("position", "absolute");
	$(exportJson).css("width", "100%");
	$(exportJson).css("height", "100px");
	$(exportJson).css("bottom", "-110px");
	$(exportJson).css("left", "450px");
	
	if($("#affichage").find(exportJson).length == 0){

		$("#affichage").append($(exportJson));

	}
	
	buttonExport.click({form:form, item : item}, exportDataImage);
	img.click({form:form, item: item}, displayForm2);
	
	/*img.click(function() {
		
	});*/
	return item;

	
	}


$(document).ready(function(){
	
		$("#import").css("position", "relative");
		$("#import").css("top", "10px");
		$("#import").css("left", "1000px");
		var form = $("#dialog-form").find("form");
		var importDialog;
		dialog = $("#dialog-form").dialog({
	    autoOpen: false,
	    height: 400,
	    width: 350,
	    modal: true,
	    buttons: {
	      "Ajouter une image": function(){	    	  
	    	  var item = createImage(form.get(0));
	    	  $("body").append(item);
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
		    	  console.log(form.get(0));
		    	  var items = jsonImport(form.get(0));
		    	  $("body").append(items);
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

});

