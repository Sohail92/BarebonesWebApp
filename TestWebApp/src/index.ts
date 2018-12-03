import "./index.css";
import * as $ from "jquery";
import "popper.js"
import "bootstrap";

var images = <any><HTMLInputElement>document.getElementById("imgContainer");

$.ajax({
    type: "GET",
    url: "http://localhost:55828/api/values",
     dataType: 'json',
    success: function (json) {
        alert("Successfully got images");
        images.myImages = json;
        console.log(images.myImages);
    },
    error: function (xhr, ajaxOptions, thrownError) {
        console.log(xhr.status);
        console.log(thrownError);
    }
});