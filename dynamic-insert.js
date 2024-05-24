// Dynamically change the phone number based on adsource query parameter. 
// It is already defaulted to 408 number in html. If adsource is provided, it will
// use the 888 number.
const urlParams = new URLSearchParams(window.location.search);
var source = urlParams.get('adsource');
if (source == null) {
    source = localStorage.getItem('adsource');
} else {
    localStorage.setItem('adsource', source);
}
if (source !== null && source !== "") {
    if (source.toLowerCase() === 'google') {
        $("a.dynamicPhoneNumber").attr("href", "tel:8886885786");
        $("div.dynamicPhoneText").html("TEXT or CALL: (888) 688-5786");
    } else if (source.toLowerCase() === 'facebook') {
        $("a.dynamicPhoneNumber").attr("href", "tel:4087818428");
        $("div.dynamicPhoneText").html("TEXT or CALL: (408) 781-8428");
    }
}

// Dynamically change the promotion message based on promo query parameter.
// If promo is true, it will show the promotion message, otherwise it will
// not show the promotion message.
var promoSource = urlParams.get('promo');
if (promoSource != null && promoSource.toLowerCase() === 'true') {
    const currentMonth = new Date().toLocaleString('en-US', { month: 'long' });
    $("h4.promotion").html(`For the month of ${currentMonth}, get <strong class="promoAmount">$500 off</strong> your first month tuition!`);
}