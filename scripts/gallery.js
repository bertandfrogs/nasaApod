const API_KEY = 'Gylefd14sDdaQZ2gbiFgTeu9DgJa8ghAhTiSwwgC';
// https://api.nasa.gov/
// https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&date=2019-12-12

// moment().subtract(1, 'days');
// moment().add(1, 'days');

let htmlContent = "";

for(let i = 0; i < 30; i++){
    date = moment().subtract(i, 'days').format("YYYY-MM-DD");
    url = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&date=${date}`;
    
    fetch(url)
    .then(function(response) {
        return response.json();
    })
    .then(function(json) {
        if(json.media_type == "image"){ // only add to gallery if it's an image
            document.getElementById("imgCollection").innerHTML += `<img src="${json.url}"/>`;
            if(i == 29){
                document.getElementById("imgCollection").className = "";
            }
        }
    })
}

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