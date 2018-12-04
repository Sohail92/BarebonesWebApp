import "./index.css";
import * as $ from "jquery";
import "popper.js"
import "bootstrap";

$(document).ready(function () {
    var result = $.ajax({
        type: "GET",
        url: "http://localhost:55828/api/values",
        dataType: 'json',
        success: function (json) {
            alert("Successfully got images");
            result = json;
            console.log("ajax completed: result = " + result);
        },
        error: function (xhr, ajaxOptions, thrownError) {
            console.log(xhr.status);
            console.log(thrownError);
        }
    });
    
    debugger;

    console.log("Result = " + result);

    for (let j = 0; j < 3; j++) {
        $('<div class="carousel-item"><img src="https://via.placeholder.com/700x300.png?text=i0" width="100%"></div>').appendTo('.carousel-inner');
        $('<li data-target="#carousel" data-slide-to="' + j + '"></li>').appendTo('.carousel-indicators')
    }
    $('.carousel-item').first().addClass('active');
    $('.carousel-indicators > li').first().addClass('active');
    $('#carousel').carousel();

    $('.carousel-control-prev-icon').click(function () { $('#carousel').carousel('prev'); });

    $('.carousel-control-next-icon').click(function () { $('#carousel').carousel('next'); });

    $('.carousel-control').click(function (e) { e.preventDefault(); });

});