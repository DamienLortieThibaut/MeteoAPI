var callBackGetSuccess = function (data) {
  console.log("donnees api", data);
  var element = document.getElementById("zone_meteo");
  $(".wind").html(data.wind.speed + " KM/H");
  element.innerHTML = data.main.temp + "°";
  var iconcode = data.weather[0].icon;
  var iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";
  $(".iconName").attr("src", iconurl);
};

function date_heure(id)
{
        date = new Date;
        annee = date.getFullYear();
        moi = date.getMonth();
        mois = new Array('Janvier', 'F&eacute;vrier', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Ao&ucirc;t', 'Septembre', 'Octobre', 'Novembre', 'D&eacute;cembre');
        j = date.getDate();
        jour = date.getDay();
        jours = new Array('Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi');
        h = date.getHours();
        if(h<10)
        {
                h = "0"+h;
        }
        m = date.getMinutes();
        if(m<10)
        {
                m = "0"+m;
        }
        s = date.getSeconds();
        if(s<10)
        {
                s = "0"+s;
        }
        resultat = 'Le '+jours[jour]+' '+j+' '+mois[moi]+' '+annee+' il est actuellement '+h+':'+m+':'+s;
        document.getElementById(id).innerHTML = resultat;
        setTimeout('date_heure("'+id+'");','1000');
        return true;
}

function buttonClickGET() {
  var today = new Date();
  var options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  date_heure('date_heure');
  var queryLoc = document.getElementById("queryLoc").value;
  $(".cityName").html(queryLoc);


  var url =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    queryLoc +
    "&appid=e45f7f36e16c3f42067a8db728f9f9c0&units=metric";

  $.get(url, callBackGetSuccess)
    .done(function () {})
    .fail(function () {
      alert("error");
    })
    .always(function () {});
}
