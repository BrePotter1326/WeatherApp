$('#getBtn').click(function(){
    var search = $('#searchResults').val();
    //alert(search);
    $.getJSON('https://api.openweathermap.org/data/2.5/weather?zip=' + search + '&APPID=ffbaed99f10375462add667213061774',function(result){
        console.log(result);
        $('#title').html(String(result.name));
        $('#temp').html(String(result.main.temp));
        $('#country').html(String(result.sys.country));
        $('#weather').html(String(result.weather[0].main))
        
    });
});