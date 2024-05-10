// Get the value of the "source" parameter from the URL
const urlParams = new URLSearchParams(window.location.search);
var source = urlParams.get('adsource');
if (source == null) {
    source = localStorage.getItem('adsource');
} else {
    localStorage.setItem('adsource', source);
}
if (source !== null && source !== "") {
    if (source.toLowerCase() === 'google') {
        $("a.dynamicPhoneNumber").attr("href", "tel:4087818428");
        $("div.dynamicPhoneText").html("TEXT or CALL: (408) 781-8428");
    } else if (source.toLowerCase() === 'facebook') {
        $("a.dynamicPhoneNumber").attr("href", "tel:4087818888");
        $("div.dynamicPhoneText").html("TEXT or CALL: (408) 781-8888");
    }
}
