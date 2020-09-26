$(document).ready(function(){
    var settings = {
      "url": "https://APIURL/bing/v7.0/news/search?q=gaming&setLang=en&count=50&freshness=Week&safeSearch=Off",
      "method": "GET",
      "timeout": 0,
      "headers": {
        "Ocp-Apim-Subscription-Key": "APIKEY",
        "BingAPIs-Market": "en-US"
      },
    };

    $.ajax(settings).done(function (response) {
      console.log(response);
      response['value'].forEach(element => {

        let image = element.image != null ? element.image.thumbnail.contentUrl : 'https://getuikit.com/v2/docs/images/placeholder_600x400.svg'
        image = image.split("&")

        const $input = $(`<div class="card-main">
        <a target="_blank" href=${element.url}>
        <img alt="" src=${image[0]}></img>
        </a>
        <h4/>${element.name}</h4>
        <p>${element.description}</p>
        `);
        $input.appendTo($("body"));
      });
    });
});

