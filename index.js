const apiKey = 'jcZGeGMCLey8jUuI08tKEL3XPTb2RGDd4HxFsxc8tmSs7FBvgDKNFBWN';
//apikey

const formEl = document.getElementById('form');
const searchEl = document.getElementById('search');

async function getImg() {
    let url = 'https://api.pexels.com/v1/search?query=' + searchEl.value
    const response = await fetch(url, {
            method: 'GET',
            mode: 'cors',
            headers: {
                'Authorization': apiKey

            }
        })
        .then(response => {
            return response.json()
        })
        .then(data => {
            let gottenPhotoes = getPhotos(data.photos);
            console.log(data.photos);
            //getting single array properties with the for loop
            createDiv(data)
            return gottenPhotoes;
        }).catch((err) => {
            console.log('Error Occured At:' + err.message);
        })
}

function getPhotos(photos) {
    photos.map(photo => {
        const openEl = document.querySelector('.open');
        const img = document.createElement('img');
        img.src = photo.src.original
        openEl.appendChild(img)
    })
}



//?create a new function to map and download images

function createDiv(data) {
    const div = document.getElementById('div');
    for (let i = 0; i < data.photos.length; i++) {
        const n = data.photos[i]
            // let mr = `<div id="${n.id}" class="change">
            // <img src="${n.src.original}" class="img">
            // <button type="button" data-download="${n.src.original}">Submit</button>
            // </div>`;

        let mr = document.createElement('div');
        mr.id = n.id;
        let ig = document.createElement('img');
        ig.src = n.src.original;
        ig.id = n.id;
        let btn = document.createElement('button');
        btn.type = 'button';
        btn.dataset.download = n.id;
        btn.innerText = "Download";
        mr.appendChild(ig)
        mr.appendChild(btn);

        div.append(mr)
            //div.append(mr);
        console.log(mr)
    }

}

//download function


//event handler
formEl.addEventListener('submit', (e) => {
        e.preventDefault();
        e.stopPropagation();
        e.preventDefault();


        getImg()
    })
    //console.log(searchImage)
    //console.log(searchImage)