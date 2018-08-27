function Opentab(evt, layerName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(layerName).style.display = "block";
    evt.currentTarget.className += " active";
}

function openExp(evt, empresaName) {
    var j, tabcontentvert, tablinksvert;
    tabcontentvert = document.getElementsByClassName("tabcontentvert");
    for (j = 0; j < tabcontentvert.length; j++) {
        tabcontentvert[j].style.display = "none";
    }
    tablinksvert = document.getElementsByClassName("tablinksvert");
    for (j = 0; j < tablinksvert.length; j++) {
        tablinksvert[j].className = tablinksvert[j].className.replace(" active", "");
    }
    document.getElementById(empresaName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();