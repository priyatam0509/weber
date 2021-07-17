var companies = "/wp-content/themes/wealthfront-chisel/career-launching-companies/career-launching-companies-2021.json?2";

jQuery.getJSON(companies, function (data) {
    $Letter = "A";
    $prevLetter = "A";
    jQuery(".the-list-container").append('<h4 class="border">' + $Letter + '</h4>');
    var dataCompanies = data.companies;
    console.log(dataCompanies);
    dataCompanies.forEach(function (object) {
        $Letter = object.letter;
        if ($Letter != $prevLetter) {
            jQuery(".the-list-container").append('<h4 class="border">' + $Letter + '</h4>');
            $prevLetter = $Letter;
        }

        jQuery(".the-list-container").append('<div class="pure-u-1 pure-u-md-18-24"> <div class="company_name">' + object.company_name + '</div><div class="url"><a href="' + object.url + '" target="_blank">' + cleanUrl(object.url) + '</a></div></div>');
        jQuery(".the-list-container").append('<div class="pure-u-1 pure-u-md-6-24"><div class="location">' + object.location + '</div><div class="description">' + object.description + '</div></div><hr>');

    });

}).fail(function (jqXHR) {
    console.log("failed to load json file");
});

function cleanUrl(url) {
    var displayUrl = url.replace(/(^\w+:|^)\/\//, '');
    displayUrl = displayUrl.replace('www.', '');
    return displayUrl.replace(/\/$/, "");
}

document.querySelector('.back-to-top').addEventListener("click", function () {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});

$('.scroll a').on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: $($(this).attr('href')).offset().top
    }, 500, 'linear');
});