//document.querySelector('.list').insertAdjacentHTML('beforebegin', "<p>Hellooooo</p>");

const dataBase = (function(){

//Constructor function for all hikes/destinations

    const Hike = function(name, regionNum, typeNum, lengthKM, loop, coords, closed) {
        this.name = name;
            //regionNum and typeNum are for array looping reference
        this.regionNum = regionNum; 
        this.typeNum = typeNum;
        this.lengthKM = lengthKM; //should be full length, regardless of trail type
        this.loop = loop; //true or false
        this.coords = coords;
        this.closed = closed; //true or false for if trail is currently closed
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

    const trail1 = new Hike('Eagle Creek to Punch Bowl Falls', 0, [0, 1], 6, false, '45.63653,-121.91947', true);
    const trail2 = new Hike('Eagle Creek to Tunnel Falls', 0, [0, 1], 18.2, false, '45.63653,-121.91947', true);
    const trail3 = new Hike('Multnomah Falls', 0, [0], 6.8, false, '45.57893,-122.11841', true);
    const trail4 = new Hike('Oneonta Gorge', 0, [0, 1], 1.6, false, '45.58948,-122.07531', true);
    const trail5 = new Hike('Romana Falls', 0, [0, 1], 11.4, true, '45.38696,-121.83221', false);
    const trail6 = new Hike('Little Crater Lake', 0, [2], 2.2, false, '45.1478,-121.7478', false);
    const trail7 = new Hike('Trail of Ten Falls', 0, [0, 1], 12.5, true, '44.87752,-122.65513', false);
    const trail8 = new Hike('Bagby Hot Springs', 0, [3], 12.5, false, '44.95402,-122.17023', false);
    const trail9 = new Hike('Opal Creek Trail', 0, [0, 1], 16.9, false, '44.85980,-122.26460', false);
    const trail10 = new Hike('Spirit Falls', 0, [0], 1, false, '43.731146,-122.639524', false);
    const trail11 = new Hike('Pinard Falls', 0, [0], 1.9, false, '43.713239,-122.619696', false);

    const trail12 = new Hike('Steamboat Falls', 0, [0, 1], 1, true, '43.373712,-122.640043', false);
    const trail13 = new Hike('Wolf Creek Falls', 0, [0], 3.7, false, '43.233835,-122.951074', false);
    const trail14 = new Hike('Grotto Falls', 0, [0, 1], 0.8, false, '43.248609,-122.824035', false);
    const trail15 = new Hike('Yakso Falls', 0, [0], 1.4, false, '43.216969,-122.721168', false);
    const trail16 = new Hike('Hemlock Falls', 0, [0, 2], 1.6, false, '43.216969,-122.721168', false);
    const trail17 = new Hike('Toketee Falls', 0, [0, 1], 1.3, false, '43.264033,-122.427411', false);
    const trail18 = new Hike('Watson Falls', 0, [0, 1], 1, true, '43.245696,-122.390948', false);
    const trail19 = new Hike('Lemolo Falls', 0, [0, 1], 5.1, false, '43.329709,-122.202589', false);
    const trail20 = new Hike('Umpqua Hot Springs', 0, [1, 3], 1.3, false, '43.293355,-122.365111', false);
    const trail21 = new Hike('Crater Lake', 0, [2, 4], 0, false, '42.946015,-122.169187', false); 
    const trail22 = new Hike('Falls Creek Falls', 0, [0, 1], 1.8, false, '43.313099,-122.835579', false)

    const trail23 = new Hike('Maryhill Loops Road', 1, [4], 0, false, '45.711700,-120.794706', false); 
    const trail24 = new Hike('White River Falls', 1, [0, 1], 2.2, false, '45.24349,-121.09687', false); 
    const trail25 = new Hike('Cove of Palisades', 1, [2, 4], 0, false, '44.542878,-121.274837', false); 
    const trail26 = new Hike('Smith Rock Park', 1, [1, 4], 0, false, '44.368142,-121.140542', false);
    const trail27 = new Hike('Shaniko', 1, [4], 0, false, '45.003942,-120.752193', false);
    const trail28 = new Hike('Antelope', 1, [4], 0, false, '44.910638,-120.723060', false);

    const trail29 = new Hike('Rialto Beach', 2, [4], 0, false, '47.919660,-124.638301', false); //WA
    const trail30 = new Hike('Ruby Beach', 2, [4], 0, false, '47.710928,-124.415417', false); //WA
    const trail31 = new Hike('Cape Disappointment', 2, [4], 0, false, '46.293634,-124.064134', false); //WA

    const trail32 = new Hike('Haystack Rock', 2, [4], 0, false, '45.884768,-123.966935', false);
    const trail33 = new Hike('Munson Creek Falls', 2, [0], 1, false, '45.365640,-123.773530', false);
    const trail34 = new Hike('Devils Punchbowl', [4], 0, false, '44.747158,-124.064941', false);
    const trail35 = new Hike('Thor\'s Well', 2, [4], 0, false, '44.278446,-124.113517', false);
    const trail36 = new Hike('Cape Arago', 2, [4], 0, false, '43.306290,-124.398672', false);
    const trail37 = new Hike('Bandon Beach', 2, [4], 0, false, '43.105380,-124.433674', false);
    const trail38 = new Hike('Cape Blanco Lighthouse', 2, [4], 0, false, '42.837277,-124.563727', false);
    const trail39 = new Hike('Natural Bridges', 2, [4], 0, false, '42.189925,-124.366007', false);

    const trail40 = new Hike('Fern Canyon', 2, [0], 1.8, true, '41.400672,-124.065885', false); //CA

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

dataBase.quoteGen();

document.getElementById('btn-scroll').addEventListener('click', function() { //smooth scroll down to table
    setTimeout(() => {
        document.getElementById('get-started').scrollIntoView(
            {block: "start",
            behavior: "smooth"
            });
    }, 150);
});

document.body.addEventListener('click', function(event) { //toggle dropdown menu items by clicking p tag spans
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

document.body.addEventListener('hover', function(event) {
    console.log(event);
})



