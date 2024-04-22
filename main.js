function filterData(arr) {
    for(let i = 0; i < arr.length; i++) {
        // if the items state property is the criteria then add the location to the page

        if (arr[i].state == 'Michigan') {
            let stateName = document.createElement('p');
            stateName.textContent = arr[i].location;
            document.body.appendChild(stateName);
            

        }
    }
}


fetch('/places')
.then(res => res.json())
.then(data => {
   console.log(data);
   filterData(data.places);
})
.catch(err => {console.log(err) }) 


let lat = '35.9304211';
let lon = '-115.1329813';
let url = `https://api.geoapify.com/v1/geocode/reverse?lat=${lat}&lon=${lon}&apiKey=${apiKey}`

fetch(url)
.then(res => res.json())
.then(data => {
    console.log(data.features[0].properties.state);

    //document.body.innerHTML = data.features[0].properties.state;
});

navigator.geolocation.getCurrentPosition((pos) => {
    //document.body.innerHTML = pos.coords;
    //console.log(pos.coords);
})