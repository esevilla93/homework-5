
$(document).ready(function () {
    $("#currentDay").text(moment().format("dddd, MMMM Do, h:mm a"));


    var hourCol = $("#inputGroup-sizing-lg");


    var eventCol = $("#text-input");


    var saveBtn = $("#button-addon2");


    getLocalStorage(i);

    hour();



    function updateColors() {
        var currentTime = new Date().getHours();
        {
            if (hourCol.data("time") == currentTime) {
                eventCol.addClass("present");
            } else if (currentTime < (hourCol.data("time")))
                eventCol.addClass("future");
        }
    }

    updateColors();

    function getLocalStorage(key) {
        var value = localStorage.getItem(key);
        if (value) {
            eventCol.text(value);
        }

        saveBtn.on('click', function () {
            localStorage.setItem(eventCol);
        });
    }
});
