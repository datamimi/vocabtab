$.getJSON("vocab.json", function(json) {
    var jsonLength = Object.keys(json).length;
    var kanjiIdx = Math.floor(Math.random() * (jsonLength + 1));
    document.getElementById('kanji-text').innerHTML = json[kanjiIdx]['code']

    document.getElementById("kanji-form").addEventListener("submit", function(event){
        event.preventDefault();
        var userTranslation = $("#kanji-input").val().toLowerCase();
        var validTranslations = json[kanjiIdx]['meaning'].split(',');

        if (validTranslations.indexOf(userTranslation)==-1){
          // fail condition
          // document.getElementById('subtitle-heading').innerHTML = "oops, the correct translation is: " + validTranslations.join(' or ') + "!";
          window.close();
        } else {
          // success condition
          window.location.replace("http://www.google.com");
        }

    });

});
