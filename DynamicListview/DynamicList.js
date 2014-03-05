// Based on code from http://www.gajotres.net/building-a-native-mobile-app-with-phonegap-and-jquery-mobile-1-4/

$(document).on('pagecreate', '#home', function(){      
      
    $.ajax({
        url: "planets.json",
        dataType: "json",
        success: function(result){  
          planetInfo.result = result.PLANETS;
          $.each(result.PLANETS, function(i, row) {
            $('#planet-list').append('<li><a href="" data-id="' + i + '"><h3>' + row.NAME + '</h3></a></li>');
           });
          $('#planet-list').listview('refresh');
        },
        error: function (request,error) {
            alert('Network error has occurred please try again!');
        }
    });         
});

$(document).on('pagebeforeshow', '#planetPage', function(){      
    $('#planetInfo').empty(); 
    $('#planetInfo').append('<H3>' + planetInfo.result[planetInfo.id].NAME + '</H3>');
            
    $('#planetInfo').trigger('create');         
  
});

$(document).on('vclick', '#planet-list li a', function(){  
    planetInfo.id = $(this).attr('data-id');
    $.mobile.changePage( "#planetPage", { transition: "flip", changeHash: false });
});

var planetInfo = {
    id : null,
    result : null
}


