var apiURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
var townDataRequest = new XMLHttpRequest();
townDataRequest.open('GET', apiURL, true);
townDataRequest.send();

townDataRequest.onload =  function () {
    let townData = JSON.parse(townDataRequest.responseText);
    var prestonName = townData.towns[4].name;
    var prestonMotto = townData.towns[4].motto;
    var prestonFounded = townData.towns[4].yearFounded;
    var prestonPopulation = townData.towns[4].currentPopulation;
    var prestonRainfall = townData.towns[4].averageRainfall;
    document.getElementById("townNamePreston").innerHTML = prestonName;
    document.getElementById("townMottoPreston").innerHTML = prestonMotto;
    document.getElementById("yearFoundedPreston").innerHTML = prestonFounded;
    document.getElementById("townPopulationPreston").innerHTML = prestonPopulation;
    document.getElementById("annualRainfallPreston").innerHTML = prestonRainfall+"&quot;";

    var FHName = townData.towns[1].name;
    var FHMotto = townData.towns[1].motto;
    var FHFounded = townData.towns[1].yearFounded;
    var FHPopulation = townData.towns[1].currentPopulation;
    var FHRainfall = townData.towns[1].averageRainfall;
    document.getElementById("townNameFH").innerHTML = FHName;
    document.getElementById("townMottoFH").innerHTML = FHMotto;
    document.getElementById("yearFoundedFH").innerHTML = FHFounded;
    document.getElementById("townPopulationFH").innerHTML = FHPopulation;
    document.getElementById("annualRainfallFH").innerHTML = FHRainfall+"&quot;";


    var SSName = townData.towns[5].name;
    var SSMotto = townData.towns[5].motto;
    var SSFounded = townData.towns[5].yearFounded;
    var SSPopulation = townData.towns[5].currentPopulation;
    var SSRainfall = townData.towns[5].averageRainfall;
    document.getElementById("townNameSS").innerHTML = SSName;
    document.getElementById("townMottoSS").innerHTML = SSMotto;
    document.getElementById("yearFoundedSS").innerHTML = SSFounded;
    document.getElementById("townPopulationSS").innerHTML = SSPopulation;
    document.getElementById("annualRainfallSS").innerHTML = SSRainfall+"&quot;";
}