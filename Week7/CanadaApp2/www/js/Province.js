// Based on code from http://www.gajotres.net/building-a-native-mobile-app-with-phonegap-and-jquery-mobile-1-4/

$(document).on('pagecreate', '#home', function(){      
      toastr.info("Page Loaded!");
    $.ajax({
        url: "http://mobile.sheridanc.on.ca/~medeeric/SYST35300/canada.json",
        dataType: "json",
        success: function(result){  
          //provinceInfo.result = result.province;
          var provinceItems = '';
          $.each(result.province, function(i, row) {
          provinceItems += '<li><a href="" data-id="' + i + '"><h3>' + row.name + '</h3></a></li>';
            
           });
           $('#province-list').append(provinceItems);
          $('#province-list').listview('refresh');
        },
        error: function (request,error) {
            alert('Network error has occurred please try again!');
        }
    });         
});

$(document).on('pagebeforeshow', '#provincePage', function(){      
    $('#provinceInfo').empty(); 
    $('#provinceInfo').append('<H3>' + provinceInfo.result[provinceInfo.id].name + '</H3>');
            
    $('#provinceInfo').trigger('create');         
  
});

$(document).on('vclick', '#province-list li a', function(){  
    provinceInfo.id = $(this).attr('data-id');
    $.mobile.changePage( "#provincePage", { transition: "flip", changeHash: false });
});

var provinceInfo = {
    id : null,
    result : null
    
}


