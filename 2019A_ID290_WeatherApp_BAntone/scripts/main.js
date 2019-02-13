$('#getBtn').click(function(){
    var search = $('#searchResults').val();
    //alert(search);
    $.getJSON('https://api.openweathermap.org/data/2.5/weather?zip=' + search + '&APPID=ffbaed99f10375462add667213061774',function(result){
        console.log(result);
        $('#title').html(String(data.id[0].name))
        
    });
});
