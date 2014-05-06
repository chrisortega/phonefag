function getData(){
var baseUrl = "http://www.frontera.info/Garitas/InfoGaritas.aspx";
	
    $.ajax({
        url: baseUrl,
        type: "get",
        dataType: "",
        success: function(data) {
        	var $foop;
        	$foop = $('<form>' + data.responseText + '</form>');

        	
			var tobject = $foop.find('table');
  			var table = html2json(tobject); // Convert the table into a javascript object
  			$("#div_si").html(table)
  			
        	
        	/*

            $.each($foop.find('table'), function(idx, item) {
            	var table = $(item).tableToJSON();
                console.log(table)
                /*$("#div_si").html(item)
                
            })

        	/*$foop = $('<form>' + data.responseText + '</form>');*/
        		/*$("#div_si").html(data.responseText)*/
        }});

}


function html2json(tab) {
   var json = '{';
   var otArr = [];
   var tbl2 =tab.each(function(i) {        
      x = $(this).children();


      
      var itArr = [];
      x.each(function() {
      	

         itArr.push('"' + $(this).text() + '"');
      });


      otArr.push('"' + i + '": [' + itArr.join(',') + ']');
   })
   json += otArr.join(",") + '}'

   return json;
}
