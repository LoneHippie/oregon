//document.querySelector('.list').insertAdjacentHTML('beforebegin', "<p>Hellooooo</p>");

//pageID for current file. Use to make functions inactive if they aren't relavant to a certain page

let curFile = location.href.split("/").slice(-1);

if (curFile == '') {
    curFile = "index.html"
};

if (curFile == 'index.html') {
    console.log('positive ID: index');
} else if (curFile == 'forest.html') {
    console.log('positive ID: forest');
} else {
    console.log('negative ID: other page');
};

const dataBase = (function(){

//Constructor function for all hikes/destinations

    const Hike = function(name, regionNum, typeNum, lengthKM, loop, coords, closed, picID) {
        this.name = name;
            //regionNum and typeNum are for array looping reference
        this.regionNum = regionNum; 
        this.typeNum = typeNum;
        this.lengthKM = lengthKM; //should be full length, regardless of trail type
        this.loop = loop; //true or false
        this.coords = coords;
        this.closed = closed; //true or false for if trail is currently closed
        this.id = picID;
        this.region;
        this.type = [];
        this.length;
        this.trailType;

        this.getLength = function() {
            switch(true) {
                case this.lengthKM >= 0 && this.lengthKM <= 6:
                    return this.length = "short";
                    break;
                case this.lengthKM > 6 && this.lengthKM <= 15:
                    return this.length = "medium";
                    break;
                default:
                    return this.length = "long";
            };
        }
        this.getRegion = function(){
            switch(true) {
                case this.regionNum == 0:
                    return this.region = ('Forest');
                    break;
                case this.regionNum == 1:
                    return this.region = 'Desert';
                    break;
                case this.regionNum == 2:
                    return this.region = 'Coast';
                    break;
                default:
                    return this.region = 'No region found';
            };
        }
        this.getType = function(){ //Will sort for types based on typeNum array
            if (this.typeNum[0] == 0) {
                this.type.push('Waterfall');

                if (this.typeNum.includes(1)) { //index 1 = 1
                    this.type.push('River'); {
                        if (this.typeNum.includes(2)) {
                            this.type.push('Lake'); {
                                if (this.typeNum.includes(3)) {
                                    this.type.push('Hot Spring'); {
                                        if (this.typeNum.includes(4)) {
                                            this.type.push('Destination');
                                        }
                                    }
                                }
                            }
                        } else if (this.typeNum.includes(3)) { 
                            this.type.push('Hot Spring'); {
                                if (this.typeNum.includes(4)) {
                                    this.type.push('Destination');
                                }
                            }
                        } else if (this.typeNum.includes(4)) {
                            this.type.push('Destination');
                        }
                    }
                } else if (this.typeNum.includes(2)) { //index 1 = 2
                    this.type.push('Lake'); {
                        if (this.typeNum.includes(3)) {
                            this.type.push('Hot Spring'); {
                                if (this.typeNum.includes(4)) {
                                    this.type.push('Destination');
                                }
                            }
                        }
                    }
                } else if (this.typeNum.includes(3)) { //index 1 = 3
                    this.type.push('Hot Spring'); {
                        if (this.typeNum.includes(4)) {
                            this.type.push('Destination');
                        }
                    }
                } else if (this.typeNum.includes(4)) { //index 1 = 4
                    this.type.push('Destination');
                }

            } else if (this.typeNum[0] == 1) {
                this.type.push('River');

                if (this.typeNum.includes(2)) {
                    this.type.push('Lake'); {
                        if (this.typeNum.includes(3)) {
                            this.type.push('Hot Spring'); {
                                if (this.typeNum.includes(4)) {
                                    this.type.push('Destination');
                                }
                            }
                        }
                    }
                } else if (this.typeNum.includes(3)) {
                    this.type.push('Hot Spring'); {
                        if (this.typeNum.includes(4)) {
                            this.type.push('Destination');
                        }
                    }
                } else if (this.typeNum.includes(4)) {
                    this.type.push('Destination');
                }

            } else if (this.typeNum[0] == 2) {
                this.type.push('Lake');

                if (this.typeNum.includes(3)) {
                    this.type.push('Hot Spring'); {
                        if (this.typeNum.includes(4)) {
                            this.type.push('Destination');
                        }
                    }
                } else if (this.typeNum.includes(4)) {
                    this.type.push('Destination');
                }

            } else if (this.typeNum[0] == 3) {
                this.type.push('Hot Spring');

                if (this.typeNum.includes(4)) {
                    this.type.push('Destination');
                }

            } else if (this.typeNum[0] == 4){
                this.type.push('Destination');

            } else {
                this.type = 'Error';

            };
        }
        this.getTrailType = function() { //gets length for round trip and creates property if true
            if (this.loop == true) {
                this.trailType = 'Loop';
            } else {
                this.trailType = 'Out and Back';
            };
        }
        this.isDestination = function() {
            if (this.type.includes('Destination')) {
                delete this.length;
                delete this.trailType;
                delete this.lengthKM;
            }
        };

        this.getLength();
        this.getRegion();
        this.getType();
        this.getTrailType();
        this.isDestination();
    };

//regionNum 0 = forest, 1 = desert, 2 = coast
//type 0 = waterfall, 1 = river, 2 = lake, 3 = hotspring, 4 = destination

    const trail1 = new Hike('Punch Bowl Falls', 0, [0, 1], 6, false, '45.63653,-121.91947', true, '001');
    const trail2 = new Hike('Tunnel Falls', 0, [0, 1], 18.2, false, '45.63653,-121.91947', true, '002');
    const trail3 = new Hike('Multnomah Falls', 0, [0], 6.8, false, '45.57893,-122.11841', true, '003');
    const trail4 = new Hike('Oneonta Gorge', 0, [0, 1], 1.6, false, '45.58948,-122.07531', true, '004');
    const trail5 = new Hike('Romana Falls', 0, [0, 1], 11.4, true, '45.38696,-121.83221', false, '005');
    const trail6 = new Hike('Little Crater Lake', 0, [2], 2.2, false, '45.1478,-121.7478', false, '006');
    const trail7 = new Hike('Trail of Ten Falls', 0, [0, 1], 12.5, true, '44.87752,-122.65513', false, '007');
    const trail8 = new Hike('Bagby Trail', 0, [3], 12.5, false, '44.95402,-122.17023', false, '008');
    const trail9 = new Hike('Opal Creek Trail', 0, [0, 1], 16.9, false, '44.85980,-122.26460', false, '009');
    const trail10 = new Hike('Spirit Falls', 0, [0], 1, false, '43.731146,-122.639524', false, '010');
    const trail11 = new Hike('Pinard Falls', 0, [0], 1.9, false, '43.713239,-122.619696', false, '011');

    const trail12 = new Hike('Steamboat Falls', 0, [0, 1], 1, true, '43.373712,-122.640043', false, '012');
    const trail13 = new Hike('Wolf Creek Falls', 0, [0], 3.7, false, '43.233835,-122.951074', false, '013');
    const trail14 = new Hike('Grotto Falls', 0, [0, 1], 0.8, false, '43.248609,-122.824035', false, '014');
    const trail15 = new Hike('Yakso Falls', 0, [0], 1.4, false, '43.216969,-122.721168', false, '015');
    const trail16 = new Hike('Hemlock Falls', 0, [0, 2], 1.6, false, '43.216969,-122.721168', false, '016');
    const trail17 = new Hike('Toketee Falls', 0, [0, 1], 1.3, false, '43.264033,-122.427411', false, '017');
    const trail18 = new Hike('Watson Falls', 0, [0, 1], 1, true, '43.245696,-122.390948', false, '018');
    const trail19 = new Hike('Lemolo Falls', 0, [0, 1], 5.1, false, '43.329709,-122.202589', false, '019');
    const trail20 = new Hike('Umpqua Spings', 0, [1, 3], 1.3, false, '43.293355,-122.365111', false, '020');
    const trail21 = new Hike('Crater Lake', 0, [2, 4], 0, false, '42.946015,-122.169187', false, '021'); 
    const trail22 = new Hike('Falls Creek Falls', 0, [0, 1], 1.8, false, '43.313099,-122.835579', false, '022');

    const trail23 = new Hike('Maryhill Loops Rd', 1, [4], 0, false, '45.711700,-120.794706', false, '023'); 
    const trail24 = new Hike('White River Falls', 1, [0, 1], 2.2, false, '45.24349,-121.09687', false, '024'); 
    const trail25 = new Hike('Cove of Palisades', 1, [2, 4], 0, false, '44.542878,-121.274837', false, '025'); 
    const trail26 = new Hike('Smith Rock Park', 1, [1, 4], 0, false, '44.368142,-121.140542', false, '026');
    const trail27 = new Hike('Shaniko', 1, [4], 0, false, '45.003942,-120.752193', false, '027');
    const trail28 = new Hike('Antelope', 1, [4], 0, false, '44.910638,-120.723060', false, '028');

    const trail29 = new Hike('Rialto Beach', 2, [4], 0, false, '47.919660,-124.638301', false, '029'); //WA
    const trail30 = new Hike('Ruby Beach', 2, [4], 0, false, '47.710928,-124.415417', false, '030'); //WA
    const trail31 = new Hike('Cape Disappointment', 2, [4], 0, false, '46.293634,-124.064134', false, '031'); //WA

    const trail32 = new Hike('Haystack Rock', 2, [4], 0, false, '45.884768,-123.966935', false, '032');
    const trail33 = new Hike('Munson Creek Falls', 2, [0], 1, false, '45.365640,-123.773530', false, '033');
    const trail34 = new Hike('Devils Punchbowl', 2, [4], 0, false, '44.747158,-124.064941', false, '034');
    const trail35 = new Hike('Thor\'s Well', 2, [4], 0, false, '44.278446,-124.113517', false, '035');
    const trail36 = new Hike('Cape Arago', 2, [4], 0, false, '43.306290,-124.398672', false, '036');
    const trail37 = new Hike('Bandon Beach', 2, [4], 0, false, '43.105380,-124.433674', false, '037');
    const trail38 = new Hike('Cape Blanco Lighthouse', 2, [4], 0, false, '42.837277,-124.563727', false, '038');
    const trail39 = new Hike('Natural Bridges', 2, [4], 0, false, '42.189925,-124.366007', false, '039');

    const trail40 = new Hike('Fern Canyon', 2, [0], 1.8, true, '41.400672,-124.065885', false, '040'); //CA

    const trailsWillamette = [trail1, trail2, trail3, trail4, trail5, trail6, trail7, trail8, trail9, trail10, trail11];
    const trailsUmpqua = [trail12, trail13, trail14, trail15, trail16, trail17, trail18, trail19, trail20, trail21, trail22];

    const trailsForest = trailsWillamette.concat(trailsUmpqua); //All forest hikes
    const trailsDesert = [trail23, trail24, trail25, trail26, trail27, trail28]; //All desert hikes
    const trailsCoast = [trail29, trail30, trail31, trail32, trail33, trail34, trail35, trail36, trail37, trail38, trail39, trail40]; //All coast hikes

    const trailsAll = [trailsForest, trailsDesert, trailsCoast];

//Road Trips

    const mapDir = 'https://www.google.com/maps/dir/';

    const tripUmpqua = `${mapDir}/${trailsForest[10].coords}/${trailsForest[11].coords}/${trailsForest[21].coords}/${trailsForest[12].coords}/${trailsForest[13].coords}/${trailsForest[14].coords}/${trailsForest[16].coords}/${trailsForest[19].coords}/${trailsForest[17].coords}`;
    const tripDesert = `${mapDir}/${trailsDesert[0].coords}/${trailsDesert[4].coords}/${trailsDesert[5].coords}/${trailsDesert[2].coords}/${trailsDesert[3].coords}`;
    const tripCoast = `${mapDir}/${trailsCoast[3].coords}/${trailsCoast[4].coords}/${trailsCoast[5].coords}/${trailsCoast[6].coords}/${trailsCoast[7].coords}/${trailsCoast[8].coords}/${trailsCoast[9].coords}/${trailsCoast[10].coords}`;

    const tripAll = [tripUmpqua, tripDesert, tripCoast];

//Quotes

    const arrQuotes = ['Of all the paths you take in life, make sure a few of them are dirt', 'I haven’t been everywhere, but it’s on my list', 'The traveler sees what he sees, the tourist sees what he has come to see', 'We don’t stop hiking because we grow old – we grow old because we stop hiking', 'Between every two pine trees there is a door leading to a new way of life', 'All journeys have secret destinations of which the traveler is unaware', 'Do not follow where the path may lead, go instead where there is no path and leave a trail', 'The world\'s big and I want to have a good look at it before it gets dark', 'Tourists don’t know where they’ve been, travelers don’t know where they’re going', 'In every walk with nature, one receives far more than he seeks'];

//Return Values

    return {
        quoteGen: function() {
            let curFile = location.href.split("/").slice(-1);
            
            if (curFile == '') {
                curFile = "index.html"
            };

            if (curFile == 'index.html') {
                let random = Math.floor(Math.random() * arrQuotes.length);
                document.getElementById('quote').textContent = `"${arrQuotes[random]}"`;
            };
        },

        trips: tripAll,

        getTrails: function() { //to call outside, dataBase.getTrails(); -> returns the object. ...().forest; returns just forest array
            return {
                all: trailsAll,
                forest: trailsForest,
                desert: trailsDesert,
                coast: trailsCoast,
            };
        }
    };

})();

//console.log(dataBase.getTrails());
//console.log(dataBase.trips);

document.body.addEventListener('click', function(event) { //toggle dropdown menu items by clicking p tag spans (will have to modify per page if the nav bar is different)
    const menu1 = document.querySelector('.top-1');
    const menu2 = document.querySelector('.top-2');
    const menu3 = document.querySelector('.top-3'); 

    if (event.toElement.id === 'focus-menu-1') {
        menu1.classList.toggle('selected');
        menu2.classList.remove('selected');
        menu3.classList.remove('selected');
    } else if (event.toElement.id === 'focus-menu-2') {
        menu2.classList.toggle('selected');
        menu1.classList.remove('selected');
        menu3.classList.remove('selected');
    } else if (event.toElement.id === 'focus-menu-3') {
        menu3.classList.toggle('selected');
        menu1.classList.remove('selected');
        menu2.classList.remove('selected');
    }

    if (event.toElement.id !== 'focus-menu-1' && event.toElement.id !== 'focus-menu-2' && event.toElement.id !== 'focus-menu-3') {
        menu1.classList.remove('selected');
        menu2.classList.remove('selected');
        menu3.classList.remove('selected');
    };

});


const hikeGen = (function(){

    function createlist(pageArray) {
        let html, newHtml;

        pageArray.forEach((el, index) => { //creates the html section for each hike, still need to add some code for getting the right images and css classes

            html = '<section class="hike-container"><div class="hike-top %imgID%"><div class="info-container"><span class="hike-name" id="hike-name">%name%</span><span class="hike-length" id="hike-lengthKM">%lengthKM%</span></div><div class="type-container" id="type-container-%index%">%typeIcons%</div><div class="difficulty-container">%lengthType%</div></div><div class="hike-bottom"><div class="description-holder"></div><div class="description-box" id="desc-%index%"><p class="description-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui eligendi explicabo nobis, doloribus soluta rerum repellat eveniet, laborum, placeat assumenda quibusdam delectus! Non voluptates earum quam excepturi perspiciatis quisquam praesentium.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi, et harum, eveniet esse sequi quod debitis repellendus maxime distinctio deserunt inventore minima adipisci nesciunt dolorum est possimus error incidunt. Distinctio.Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum quam corrupti veritatis illum, quas officiis quo provident voluptatem vero, quibusdam recusandae totam in aliquid nihil quis omnis? Delectus, voluptates quaerat?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia dolor laborum consequatur temporibus, tempora quaerat laboriosam est obcaecati! Reiciendis neque odio ut laborum, saepe labore vero provident id a veritatis.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum repudiandae perspiciatis esse nisi provident, ipsam veniam quia ea consequatur dolore excepturi commodi dolorem sunt repellat inventore! Recusandae ipsam cum a!</p></div></div><div class="icon-container" id="icons-%index%"><img class="icon" id="btn-desc-%index%" src="../img_ui/ui-description.png"><img class="icon" id="btn-map-%index%" src="../img_ui/ui-location.png"><img class="icon" src="../img_ui/ui-directions2.png"></div></section>'

            newHtml = html.replace('%name%,', index);
            newHtml = newHtml.replace('%name%', el.name);
            newHtml = newHtml.replace('%imgID%', `back-image-${index + 1}`);
            
            if (el.lengthKM == undefined || el.lengthKM == null) {
                newHtml = newHtml.replace('%lengthKM%', '');
                newHtml = newHtml.replace('%lengthType%', '<img class="hike destination" id="hike-length" src="../img_icons/icon-trail-sign.png"></img>');
            } else {
                newHtml = newHtml.replace('%lengthKM%', `${el.lengthKM}&nbsp;km`);
                newHtml = newHtml.replace('%lengthType%', '<img class="hike %length%" id="hike-length" src="../img_icons/icon-hike.png"></img>');
                newHtml = newHtml.replace('%length%', el.length);
            };

            newHtml = newHtml.replace(/%index%/g, index);

            const iconWaterfall = '<img class="type" src="../img_icons/icon-type-waterfall.png">'; //0
            const iconRiver = '<img class="type" src="../img_icons/icon-type-river.png">'; //1
            const iconLake = '<img class="type" src="../img_icons/icon-type-lake.png">'; //2
            const iconHotspring = '<img class="type" src="../img_icons/icon-type-hotspring.png"></img>'; //3
            const iconDestination = '<img class="type" src="../img_icons/icon-type-destination.png"></img>' //4

            if (el.typeNum[0] == 0) { //sorts and replaces icon images
                newHtml = newHtml.replace('%typeIcons%', iconWaterfall);

                if (el.typeNum.includes(1)) { //index 1 = 1
                    newHtml = newHtml.replace(iconWaterfall, iconWaterfall + iconRiver); {
                        if (el.typeNum.includes(2)) {
                            newHtml = newHtml.replace(iconWaterfall + iconRiver, iconWaterfall + iconRiver + iconLake); {
                                if (el.typeNum.includes(3)) {
                                    newHtml = newHtml.replace(iconWaterfall + iconRiver + iconLake, iconWaterfall + iconRiver + iconLake + iconHotspring);
                                }
                            }
                        } else if (el.typeNum.includes(3)) { 
                            newHtml = newHtml.replace(iconWaterfall + iconRiver, iconWaterfall + iconHotspring);
                        }
                    }
                } else if (el.typeNum.includes(2)) { //index 1 = 2
                    newHtml = newHtml.replace(iconWaterfall, iconWaterfall + iconLake);
                        if (el.typeNum.includes(3)) {
                            newHtml = newHtml.replace(iconWaterfall + iconLake, iconWaterfall + iconLake + iconHotspring);
                        }
                    
                } else if (el.typeNum.includes(3)) { //index 1 = 3
                    newHtml = newHtml.replace(iconWaterfall, iconWaterfall + iconHotspring);
                }
            } else if (el.typeNum[0] == 1) {
                newHtml = newHtml.replace('%typeIcons%', iconRiver);

                if (el.typeNum.includes(2)) {
                    newHtml = newHtml.replace(iconRiver, iconRiver + iconLake); {
                        if (el.typeNum.includes(3)) {
                            newHtml = newHtml.replace(iconRiver + iconLake, iconRiver + iconLake + iconHotspring);
                        }
                    }
                } else if (el.typeNum.includes(3)) {
                    newHtml = newHtml.replace(iconRiver, iconRiver + iconHotspring);
                }
            } else if (el.typeNum[0] == 2) {
                newHtml = newHtml.replace('%typeIcons%', iconLake);

                if (el.typeNum.includes(3)) {
                    newHtml = newHtml.replace(iconLake, iconLake + iconHotspring);
                }

            } else if (el.typeNum[0] == 3) {
                newHtml = newHtml.replace('%typeIcons%', iconHotspring); 

            } else if (el.typeNum[0] == 4) {
                newHtml = newHtml.replace('%typeIcons%', iconDestination);

            } else {
                console.log('error, type combination not found');
            };

            //inserts completed html for a hike section
            document.getElementById('genPoint').insertAdjacentHTML('beforeend', newHtml);

            //creating unique CSS classes for each instance of class="back-image-index"
            const gradientForest = 'linear-gradient(#7ed56f00, #55c57a73)';
            let image = `url(../img_hike/hike-${el.id}.jpg)`;

            let imageForest = `${gradientForest}, ${image}`;

            document.querySelector('.back-image-' + (index + 1)).style.background = imageForest;
            document.querySelector('.back-image-' + (index + 1)).style.backgroundSize = "cover";
            document.querySelector('.back-image-' + (index + 1)).style.backgroundPosition = "center";

        });

    };

    let descActive;

    function toggleDescActive() { //toggles active class and checks to see if exists or not w/descActive boolean
        let active = document.querySelector('.active');

        if (typeof(active) !== 'undefined' && active !== null) {
            //inactive state
            //return descActive = false;
        } else {
            //active state
            return descActive = true;
        };
    };

    function openDescription(target) {//toggles active class for descriptions based on descActive status
        if (descActive == true) {
            document.getElementById('desc-' + target).classList.toggle('active');
            document.getElementById('icons-' + target).classList.toggle('active');
            // console.log('open sesame');
        } else {
            document.getElementById('desc-' + target).classList.remove('active');
            document.getElementById('icons-' + target).classList.remove('active');
            // console.log('close sesame');
        };
    };

    function closeDescriptions(pageArray) { //closes all hike descriptions for initialization
        for (i = 0; i < pageArray.length; i++) {
            document.getElementById('desc-' + i).classList.remove('active');
            document.getElementById('icons-' + i).classList.remove('active');
        }
    };

    function buttonEvents(pageArray) {
        document.body.addEventListener('click', function(event) {
            for (i = 0; i < pageArray.length; i++) {
                if (event.toElement.id === `btn-desc-${i}`) {
                    toggleDescActive();
                    openDescription(i);
                };

                if (event.toElement.id === `btn-map-${i}`) { //functionality for map/location button
                    const mapPre = 'https://www.google.com/maps/place/';
                    let mapCoord = pageArray[i].coords;

                    window.open(mapPre + mapCoord);
                };
            };
        });
    };

    return {
        fillPage: function(dataSet) {
            createlist(dataSet);
            toggleDescActive();
            buttonEvents(dataSet);
        },
        init: function(dataSet) {
            closeDescriptions(dataSet);
        }
    };

})();

const pageForest = dataBase.getTrails().forest;
const pageDesert = dataBase.getTrails().desert;
const pageCoast = dataBase.getTrails().coast;

if (curFile == 'index.html') { //if on landing page, adds event listener to scroll button and gets quoteGen function from dataBase
    document.getElementById('btn-scroll').addEventListener('click', function() { //smooth scroll down to table
        setTimeout(() => {
            document.getElementById('get-started').scrollIntoView(
                {block: "start",
                behavior: "smooth"
                });
        }, 150);
    });

    document.getElementById('btn-home').style.pointerEvents = "none"; //disables home button on landing page

    dataBase.quoteGen();
};

if (curFile == 'forest.html') {
    hikeGen.fillPage(pageForest);
    hikeGen.init(pageForest);
    console.log(pageForest);
}

if (curFile == 'desert.html') {
    hikeGen.fillPage(pageDesert);
    hikeGen.init(pageDesert);
    console.log(pageDesert);
}

if (curFile == 'coast.html') {
    hikeGen.fillPage(pageCoast);
    hikeGen.init(pageCoast);
    console.log(pageCoast);
}