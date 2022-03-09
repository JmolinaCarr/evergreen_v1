const defaultTextValue ="Search...";

let searchBox = document.getElementById("search");
searchBox.value = defaultTextValue;
searchBox.onfocus = function () {
    if (this.value == defaultTextValue) {
        this.value = "";
    }
    
}

searchBox.onblur = function () {
    if (this.value == "") {
        this.value = defaultTextValue;
    }
}