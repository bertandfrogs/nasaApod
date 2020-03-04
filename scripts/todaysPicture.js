const API_KEY = 'Gylefd14sDdaQZ2gbiFgTeu9DgJa8ghAhTiSwwgC';
// https://api.nasa.gov/
// https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&date=2019-12-12

// moment().subtract(1, 'days');
// moment().add(1, 'days');

const url = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`

fetch(url)
.then(function(response) {
    return response.json();
})
.then(function(json) {
    let date = moment(json.date, "YYYY-MM-DD").format("LL");
    let htmlContent = "";
    htmlContent += `<p>${date} – ${json.title}</p>`
    if(json.media_type == "image"){
        htmlContent += `<img class="todaysPicture" src="${json.url}" draggable="false">`
    }
    else if(json.media_type == "video") {
        htmlContent += `<iframe class="todaysPicture youtube" src="${json.url}"></iframe>`
    }  
    htmlContent += `<p class="explanation">${json.explanation}</p>`;
    document.getElementById("todaysPictureWrapper").innerHTML = htmlContent;
    document.getElementById("todaysPictureWrapper").className = "";
});

// ------------- JSON -------------
// {
//     date: "2020-02-19"
//     explanation: "Why does this galaxy spin so fast?  To start, even identifying which type of galaxy UGC 12591 is difficult -- featured on the lower left, it has dark dust lanes like a spiral galaxy but a large diffuse bulge of stars like a lenticular. Surprisingly observations show that UGC 12591 spins at about 480 km/sec, almost twice as fast as our Milky Way, and the fastest rotation rate yet measured.  The mass needed to hold together a galaxy spinning this fast is several times the mass of our Milky Way Galaxy. Progenitor scenarios for UGC 12591 include slow growth by accreting ambient matter, or rapid growth through a recent galaxy collision or collisions -- future observations may tell.  The light we see today from UGC 12591 left about 400 million years ago, when trees were first developing on Earth."
//     hdurl: "https://apod.nasa.gov/apod/image/2002/UGC12951_HubbleShatz_2019.jpg"
//     media_type: "image"
//     service_version: "v1"
//     title: "UGC 12591: The Fastest Rotating Galaxy Known"
//     url: "https://apod.nasa.gov/apod/image/2002/UGC12951_HubbleShatz_960.jpg"
// }