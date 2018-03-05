var url = 'https://restcountries.eu/rest/v1/name/';
var countriesList = $('#countries');

$('#search').click(searchCountries);
$('#country-name').keypress(function(){
	if(event.which == 13) searchCountries(); // using 'enter' key for searching
});

function searchCountries() {
  var countryName = $('#country-name').val();
  if (!countryName.length) countryName = 'Poland';
  $.ajax({
    url: url + countryName,
    method: 'GET',
    success: showCountriesList
  })
  .fail(function(){
    countriesList.empty();
    $('#countries').text('No found, try again!')
});
}

function showCountriesList(resp) {
  countriesList.empty();
  resp.forEach(function (item) {
    $('<li>').text('Country: ' + item.name + ', capital: ' + item.capital).appendTo(countriesList);
    
  });

}