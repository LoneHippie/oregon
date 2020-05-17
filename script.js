//pageID for current file. Use to make functions inactive if they aren't relavant to a certain page

let curFile = location.href.split("/").slice(-1);

if (curFile == '') { //curFile corection
    curFile = "index.html"
};

//tests for curFile
if (curFile == 'index.html') {
    console.log('positive ID: index');
} else if (curFile == 'forest.html') {
    console.log('positive ID: forest');
} else if (curFile == 'desert.html') {
    console.log('positive ID: desert');
} else if (curFile == 'coast.html') {
    console.log('positive ID: coast'); 
} else if (curFile == 'trip-umpqua.html') {
    console.log('positive ID: trip-umpqua');
} else {
    console.log('negative ID: not found');
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
        this.description;
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

    const trailsAll = trailsForest.concat(trailsDesert).concat(trailsCoast);

    let trailsWaterfall, trailsRiver, trailsLake, trailsHotspring, trailsShort, trailsMedium, trailsLong;

    let listWaterfall = [];
    let listRiver = [];
    let listLake = [];
    let listHotspring = [];

    let listShort = [];
    let listMedium = [];
    let listLong = [];

//Road Trips

    const tripUmpqua = [trailsForest[10], trailsForest[11], trailsForest[21], trailsForest[12], trailsForest[13], trailsForest[14], trailsForest[16], trailsForest[19]];
    const tripCentral = [trailsDesert[0], trailsDesert[1], trailsDesert[4], trailsDesert[5], trailsDesert[2], trailsDesert[3]];
    const trip101 = [trailsCoast[3], trailsCoast[4], trailsCoast[5], trailsCoast[6], trailsCoast[7], trailsCoast[8], trailsCoast[9], trailsCoast[10]];

    const tripsAll = [tripUmpqua, tripCentral, trip101];

    const mapDir = 'https://www.google.com/maps/dir/';

    const directionsUmpqua = `${mapDir}/${trailsForest[10].coords}/${trailsForest[11].coords}/${trailsForest[21].coords}/${trailsForest[12].coords}/${trailsForest[13].coords}/${trailsForest[14].coords}/${trailsForest[16].coords}/${trailsForest[19].coords}/${trailsForest[17].coords}`;
    const directionsCentral = `${mapDir}/${trailsDesert[0].coords}/${trailsDesert[4].coords}/${trailsDesert[5].coords}/${trailsDesert[2].coords}/${trailsDesert[3].coords}`;
    const directions101 = `${mapDir}/${trailsCoast[3].coords}/${trailsCoast[4].coords}/${trailsCoast[5].coords}/${trailsCoast[6].coords}/${trailsCoast[7].coords}/${trailsCoast[8].coords}/${trailsCoast[9].coords}/${trailsCoast[10].coords}`;

    const directionsAll = [directionsUmpqua, directionsCentral, directions101];

//Quotes

    const arrQuotes = ['Of all the paths you take in life, make sure a few of them are dirt', 'I haven’t been everywhere, but it’s on my list', 'The traveler sees what he sees, the tourist sees what he has come to see', 'We don’t stop hiking because we grow old – we grow old because we stop hiking', 'Between every two pine trees there is a door leading to a new way of life', 'All journeys have secret destinations of which the traveler is unaware', 'Do not follow where the path may lead, go instead where there is no path and leave a trail', 'The world\'s big and I want to have a good look at it before it gets dark', 'Tourists don’t know where they’ve been, travelers don’t know where they’re going', 'In every walk with nature, one receives far more than he seeks'];

//Return Values

    return {
        quoteGen: function() {
            if (curFile == 'index.html') {
                let random = Math.floor(Math.random() * arrQuotes.length);
                document.getElementById('quote').textContent = `"${arrQuotes[random]}"`;
            };
        },

        getTrails: function() { //to call outside, dataBase.getTrails(); -> returns the object. ...().forest; returns just forest array
            return {
                all: trailsAll,
                forest: trailsForest,
                desert: trailsDesert,
                coast: trailsCoast,
                trips: tripsAll,
                tripDirections: directionsAll,
            };
        },

        fillTrails: function(allHikes) {
            fillSortArr(allHikes);
        }
    };

})();

const sortGen = (function() {

    const allTrails = dataBase.getTrails().all;

//Filter functions for generating new arrays

    function getWaterfall(el) {
        return el.typeNum.includes(0);
    };
    function getRiver(el) {
        return el.typeNum.includes(1);
    };
    function getLake(el) {
        return el.typeNum.includes(2);
    };
    function getHotspring(el) {
        return el.typeNum.includes(3);
    };

    function getShort(el) {
        return el.lengthKM > 0 && el.lengthKM <= 6;
    };
    function getMedium(el) {
        return el.lengthKM > 6 && el.lengthKM <= 15;
    };
    function getLong(el) {
        return el.lengthKM > 15;
    };

//New arrays for each type and length. Dependant on/defined by alltrails const in dataBase IIFE

    const allWaterfalls = allTrails.filter(getWaterfall);
    const allRivers = allTrails.filter(getRiver);
    const allLakes = allTrails.filter(getLake);
    const allHotsprings = allTrails.filter(getHotspring);

    const allShort = allTrails.filter(getShort);
    const allMedium = allTrails.filter(getMedium);
    const allLong = allTrails.filter(getLong);

    return {
        allWaterfalls: allWaterfalls,
        allRivers: allRivers,
        allLakes: allLakes,
        allHotsprings: allHotsprings,

        allShort: allShort,
        allMedium: allMedium,
        allLong: allLong
    };

})();

const descriptionData = (function(){ //IIFE that assigns unique descriptions to the this.description property of each trail

    const all = dataBase.getTrails().all;

    all[0].description = 'Punchbowl Falls is a short section of Eagle Creek, one of the quintessential hike in the Columbia River Gorge, boasting dozens of spectacular waterfalls, tall basalt cliffs, and the lush temperate rain forests that so characterize the Pacific Northwest. It is considered by many to be one of the most beautiful hiking destinations in the Northwest, and if you have the time, continuing on to the trail to Tunnel Falls is highly recommended. This short trail will bring you past several waterfalls on the way to Punchbowl Falls, a pristine pool of clear water that one could easily spend the afternoon at. While it might be tempting to go rock diving here, please don\'t, the signs are there for a reason.';

    all[1].description = 'Tunnel Falls is a longer section of Eagle Creek, and possibly the best and most beautiful intoductory hike for anyone new to exploring the region. This long out and back trail is dotted with many other waterfalls along stunning basalt cliffs, cold streams, high bridges and endless expanse of unique geological formations and flora. While this hike is highly recommended, it\'s worth noting that this trail can take several hours and is somewhat challenging. While it might be great for a few friends or a couple, this may not be the ideal family hike.';

    all[2].description = 'Perhaps the most iconic waterfall in Oregon, Multnomah Falls is a the tallest waterfall in the state and offers both a picturesque view and fantastic hike. Keep in mind that this is a large tourist destination, both for locals and visitors, so showing up early in the morning during tourist season is recommended to avoid massive crowds near the waterfall\'s base. While the main out and back hike isn\'t too challenging, the end connects to several trails leading to other waterfalls in the area. If you have the time, it\'s recommended to check some of these trails out as well and see all that the Columbia Gorge has to offer.';

    all[3]. description = 'Oneonta Gorge is a out and back water hike through a mossy gorge that ends at lower Oneonta Falls. One of the many gems of the Columbia Gorge, this waterfall is surprisingly hidden and is not accessible by trail. Rather you must walk up the creek bed, over a large and perhaps unstable log jam, through the gorge, and up to your waist (or even torso depending on your height and the time of year) in water until you reach the end of the hike. Definitely an adventurous experience, but be prepared to get cold and wet and bring spare clothes/towels if needed.';

    all[4].description = 'Ramona Falls is a beautiful loop hike tucked away deep in the forests of Mt Hood. A moderate length trail without too much incline, but is not without it\'s unique challenges: where bridges once passed over the Sandy River crossing, a series of logs now take its place, and while crossing is not difficult, it\'s worth taking into consideration, especially if the Sandy River is running fast and deep. Ramona Falls itself is stunning - a unique rock face that splits the waterfall into dozens of fractals of itself before pooling at the bottom and running elegantly into a stream below a nearby foot bridge. A fantastic way to spend a summer day';

    all[5].description = 'Little Crater Lake, a lovely sapphire-hued artesian spring formed in a dissolving layer of siltstone, is less than a kilometer from a trailhead via a universal access path. Those who are able to go farther can hike out through a lush meadow to the Pacific Crest Trail and then walk south for about another kilometer to view more lush marshes where Crater Creek forms an arm of Timothy Lake. The sheer blueness and opacity of this spring is stunning, and you can expect to be able to see all the way to the bottom year-round.';

    all[6].description = 'The Trail of Ten Falls is located in Silver Falls State Park, the crown jewel of the Oregon State Parks system, being both Oregon\'s largest State Park (9,000 acres) and boasting one of America\'s most impressive waterfall day-hikes. There are no less than ten falls on this 12.5 km loop (which can be reduced via two cutoff trails), and most of them are flat-out gorgeous. Unfortunately, while the hike is not very strenuous (most people will handle the changes in elevation over the course of three to five hours just fine), dogs are not allowed on the Canyon Trail portion of the hike — which is where the waterfalls are found. While there are several points where turning back is possible, it\'s highly recommended to see every waterfall this trail has to offer. The waterfalls along this trail range from massive single falls to double falls and even include waterfalls you can walk behind. When we first hiked this trail, we were blown away not just by the quantity and quality of the falls, but by how long it took us to get around to exploring it. Definitely move this trip up a few spots on your list.';

    all[7].description = 'Bagby Trail is a medium length out and back trail ending at Bagby Hot Springs. The trail follows Hot Springs Fork of the Collowash River and passes through old growth trees on the way Bagby Hot Springs. Bagby Hot Springs is a natural free to use site (aside from a $5.00 per person fee) with several open air tubs that can be drained and filled with naturally heated spring water via pumps by each tub. It\'s highly recommended to drain a tub before use to clean it out, and HIGHLY recommended to not touch hot spring water as it\'s flowing from a pipe or before adding a few buckets of cold water (which can be found near each tub), as the water can be extremely hot.';

    all[8].description = 'Opal Creek Trail is a lengthy out and back hike that goes through Jawbone Flats on it\'s way to Opal Pool. After the first few kilometers you\'ll pass a few historic attractions in the forest before arriving to a fork in the trail. Continuing straight will lead you first through the historic mining town of Jawbone Flats, a collection of buildings built between 1929 and 1932 now operating an education and hospitality center. If you\'re just interested in the nature and getting to the end of the hike, take the right hand path over a log bridge to go straight towards Opal Pool, a pristine swimming hole at the head of a chasm in Opal Creek.';

    all[9].description = 'This short, easy out and back trail descends gradually with occasional switchbacks down to Spirit Falls, a fairy tale-esque waterfall that drops 18 meters over a mossy rock wall into a shallow pool inhabited by frogs and salamanders. Spirit Falls is generally shaded by the surrounding woods; however, in late spring and summer, sunlight reaches the base of the falls in the early afternoon hours and makes for a lovely photograph. The trail is also in very close proximity to other waterfall hikes like Pinard Falls, and checking out other short waterfall hikes in the area is definitely recommended.';

    all[10].description = 'Pinard Falls is an impressive waterfall that drops over a 32 meter tall basalt cliffs. A dense, lush forest surrounds the area and shades the waterfall most of the day; however, during summer afternoons, sunlight cuts through the mist to reach the base of the waterfall. Definitely a big part of the magic of the Umpqua forest. The trail is also in very close proximity to other waterfall hikes like Spirit Falls, and checking out other short waterfall hikes in the area is highly recommended.'

    all[11].description = 'A short yet pleasant loop hike will take you right to Steamboat Falls, a series of swimming holes at the base of a wide waterfall used by salmon as a natural ladder to climb upsteam on Steamboat Creek. While the waterfalls here may be dwarfed by others in the Umqpua forest, it remains a unique and fun site to check out while in the area. Be wary of poison oak along patches of the trail.';

    all[12].description = 'Nestled among the big trees in an old growth forest, this short out and back forest trail leads to a cascading two-tier waterfall that plummet over 30 meters into a pool below. The width of the waterfall varies greatly between seasons, fanning all the way out in the winter and spring to a narrow spout during the summer.';

    all[13].description = 'This short out and back trail leads to Grotto Falls, where water splits and plunges 30 meters over a deeply recessed cliff, creating a double curtain of falling water that visitors can pass behind. The falls are located in a well-shaded river gorge that sees sunlight for only a few hours in the middle of the day. The first part of the trail passes through old-growth forest and lush understory where Oregon grape is abundant; the trail then arrives at the waterfall and passes behind the falls and through the deep, natural cavern. The water flow is at its highest in the spring after snowmelt.';

    all[14].description = 'Another short out and back trail that leads to yet another unique waterall. Located along with Hemlock Falls next to the Lake of the Woods campground, the trail travels through older forest and over a wooden footbridge, then comes to an end at a tall step. Climbing down the step will allow you to see the falls from the rocky base, although the view from the end of the trail is beautiful by itself. In the spring, wildflowers and rhododendron grow along the trail, while in the fall, vine maples turn the understory shades of red, orange, and yellow. Yakso Falls is a fine example of a classic fan form waterfall, and is yet more proof than while Oregon may not have some of the tallest waterfalls in the country, it houses some of the prettiest.';

    all[15].description = 'The Umpqua forest is bursting with short out and back waterfall hikes, and this is another one of them. Located along with Yakso Falls next to the Lake of the Woods campground, this trail boasts impressive greenery that rivals the beauty of the waterfall itself. Hemlock falls drops into stunning gorge of fallen trees, creating quite the display. Trail may be blocked by fallen trees.';

    all[16].description = 'A true gem of the Umpqua forest and perhaps one of the most stunning waterfalls in Oregon. A short out and back trail leads to a viewing platform from which hikers can view a river cascading through a narrow gorge until dropping into a breath taking 35 meter two-tier waterfall that shoots from a cliff of ornate volcanic basalt. Some other sources might mention other sights and spots that can be reached by hoping the fence near the end of the trail, but this is ill advised and very dangerous. Please enjoy the waterfall and hike as it is.';

    all[17].description = 'This short loop hike leads to the beautiful Watson Falls, the highest water fall in southwest Oregon with its 89 meter drop. With how short the trail is coupled with the sheer scale and beauty of the waterfall, this is one not to miss when visiting the Umpqua forest.';

    all[18].description = 'This short out and back trail drops down into the North Umpqua Canyon for an impressive view of Lemolo Falls as it cascades 30 meters to the canyon bottom. A spur trail accesses the bottom of the canyon below the falls for those interested in getting a close look. The trail itself can be difficult to access due to fallen trees, mud, and other debris, but shouldn\'t be too much trouble to enter on foot.';

    all[19].description = 'A short yet steep out and back trail leads to the Umpqua Hot Springs, a beautiful set of cascading naturally heated pools that have been naturally eroded out of the rocky hillside leading all the way down to a river below. There are several natural pools to soak in including a covered one and a sectioned off pool in the river below. The pools furtherst up the hillside are the hottest, with most of the lower pools being runoffs of the upper ones that gradually cool off as they descend down the hill. While this spot was once considered somewhat secret, it\'s now often crowded during most of the summer, and nudity is very common. Either way, if you can manage to get a pool/are willing to wait for one, or are planning on coming off-season, this is a hike you can\'t afford to miss.';

    all[20].description = 'One of the great landmarks of Oregon, Crater Lake is a sight to behold, surrounded by massive cliffs and filled with deep blue water. Formed 7,700 years ago by the collapse of Mount Mazama, Crater Lake is the deepest lake in the United States with a depth of 594 meters. The lake is also host to two small islands sitting near the center, adding to the lake\'s great beauty. A must see spot in Southern Oregon.';

    all[21].description = 'This short out and back trail passes through a narrow crevice in a large boulder, then climbs alongside the creek through an old-growth forest. After a short hike, the trail reaches the base of the falls, where you can view the largest, bottommost tier tumbling over a mossy rock cliff. The trail then continues more steeply to a viewing platform where you can view the second to the last tier, before climbing to connect with the old North Umpqua Highway, Road 4710. From this vantage point, you can view the top of the falls descending into the gorge you just climbed through. One of the more impressive multi-tier waterfalls in the area, and definitely worth the short hike.';

    all[22].description = 'Just over the border to Washington you\'ll find Maryhill Loops Road, an "abandoned" experimental road laid in 1911 that now acts as a pilgrimage spot for longboarders. Vehicular access is forbidden, but the long twisted downhill road remains well paved and open year-round to pedestrians and boarders alike, and is rented out yearly for the International Downhill Federation World Cup Series downhill longboarding and luge events.';

    all[23].description = 'While maybe not what one expects to see in the desert, this short out and back trail is a beautiful and pleasant surprise. From the beginning of the trail the two-tier White River Falls is already viewable. On the way down to the base of the falls and the swimming hole, hikers will come across an abandoned fully explorable hydroelectric plant. This hike makes for a great adventure with some friends, and the waterfall itself looks like something straight out of paradise.';

    all[24].description = 'A true desert oasis, the Cove of Palisades is a large lake surrounded by tall desert cliffs. Waterfalls trickle down the sides of rocky walls as the confluence of the Deschutes, Crooked and Metolius rivers form this beautiful lake that glows green in the summer from blue-green algae. Whether you come to camp, boat, swim or look for hikes, this desert oasis is a must when visiting the Oregon desert.';

    all[25].description = 'A rock climbers paradise. Smith Rock state park is a fantastic destination that boasts several steep rewarding hikes, biking trails, stunning views, rocky spires, a calm river, and endless options for climbing. Great for sight seeing and the casual hiker, but an athlete could spend days here and not run out of things to do. Worth checking out for the spectacle alone.';

    all[26].description = 'One of Oregon\'s many ghost towns that hasn\'t moved much out of the days of the Wild West. Once a transportation hub and called the "Wool Capital of the World," Shaniko is now a town of less than 40 people and features early 20th century architecture that likely hasn\'t changed much since the town\'s decline. A nice stop or drive through destination for a desert trip.';

    all[27].description = 'One of Oregon\'s ghost towns that, while it was never large, certaintly hasn\'t grown or modernized much. It\'s small size (less than 50 people) might not make it unique among ghost towns, but the bizarre history around it and the cult of Rajneeshpuram definitely do. In the 1980\'s the town of Antelope was breifly taken over by a nearby religious movement known as Rajneeshpuram in a strange story of political takeovers, attempted assassinations, and the largest to date bioterror attack in United States history. Some small remnants from the abandoned settlemnt of Rajneesh can still be found near Antelope.';

    all[28].description = 'A beautiful rocky beach littered with driftwood logs surrounded by towering trees. Gorgeous and off the beaten path, this beach feels like a bit of a hidden gem.';

    all[29].description = 'Considered by many to be the prettiest beach in Washington, Ruby Beach is known for its large ammount of sea stacks, driftwood, and ruby-like crystals that make up some of the sand.';

    all[30].description = 'Cape Disappointment is one of the foggiest places in the United States, and home to several beaches, lighthouses, hikes, and historic military installments. Do some research prior to arriving in order to appreciate some of the history this park has to offer, but make sure you check out Dead Man\'s Cove, a small but unforgettable beach along one of the park\'s trails.';

    all[31].description = 'This massive 72 meter tall sea stack might seem familiar to some, being featured in movies such as The Goonies, 1941, and Kindergarten Cop. Pop culture aspects aside, Haystack Rock remains a beautiful natural formation and is one of the largest such rock formations in the world. This landmark also houses many tide pools and serves as a nesting site for many seabirds, such as terns and puffins.';

    all[32].description = 'Even if you were considering the possibility of running into waterfalls even near the coast of Oregon, you likely weren\'t considering the possibility of finding one that\'s nearly 100 meters tall. This short out and back hike will take you right to a viewing point for the waterfall along an easy trail lined with ripe salmonberries and watermelon berries during the summer.';

    all[33].description = 'During winter storms, water from the restless ocean slams with a thundering roar into a hollow rock formation shaped like a huge punch bowl. The surf churns, foams, and swirls as it mixes a violent brew. The punch bowl was probably created by the collapse of the roof over two sea caves, then shaped by wave action. The park is a popular whale watching site and displays an intriguing geology.';

    all[34].description = 'Although known as the drainpipe of the Pacific, Thor\'s Well is actually a hole in the rock that only appears to drain water from the ocean, but from the ouside appears to be a gaping, seemingly bottomless sinkhole swallows the unbroken stream of seawater around it. As strangely beautiful as the well may be, be sure to keep a comfortable distance; it may not be bottomless, but if you fall in, good luck trying to get out.';

    all[35].description = 'Cape Arago is one of the more scenic coastal parks with several relatively short hikes, beaches filled with tide pools, and spots to view offshore colonies of seals and sea lions.';

    all[36].description = 'One of the most scenic beaches in Oregon, Bandon beach is home to dozens of beautiful sea stacks and rock formations that are just asking to be explored.';

    all[37].description = 'Cape Blanco feels lonely in a beautiful way: expansive, open, and nary another person to distract from the sound of crashing waves against the cold foggy shore. At the end of the cape sits a charming old lighthouse run by a lovely elderly couple that offer cheap tours.';

    all[38].description = 'Tucked away on the southern Oregon coast is a beautiful hidden gem called the Natural Bridges Cove. This unique natural wonder was formed over thousands of years by the gradual shifting of sea and stone, resulting in beautiful natural arches nestled into a secluded cove. The viewpoint overlooking the Natural Bridges can be reached on a short, easy stroll just off Highway 101, and makes for a truly magical day trip destination.';

    all[39].description = 'This short loop trail follows a series of small footbridges deep into a green canyon. Lush, drooping ferns create hanging gardens, miniature waterfalls pour down rock faces, and moss wallpapers every surface. The walls grow taller and squeeze tighter as you travel. A very worthwhile detour in the Redwood section of highway 101.';

})();

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
        if (curFile == 'forest.html' || curFile == 'desert.html' || curFile == 'coast.html') {
        menu3.classList.remove('selected');
        }
    };

});

const hikeGen = (function(){

//function that generates html for each hike in an array. Fills template with values related to each object
//after html section is generated, unique CSS class is created for each instance to assign a matching background image

    function createlist(pageArray) {
        let html, newHtml;

        pageArray.forEach((el, index) => { //creates the html section for each hike, still need to add some code for getting the right images and css classes

            //HTML template is determined by page type. Trip pages will not have a ui-directions button.
            //May have to make similar if else statement when assigning button functionality to avoid errors

            if (curFile == 'trip-umpqua.html' || curFile == 'trip-central.html' || curFile == 'trip-101.html') {
                html = '<section class="hike-container"><div class="hike-top %imgID%"><div class="info-container"><span class="hike-name" id="hike-name">%name%</span><span class="hike-length" id="hike-lengthKM">%lengthKM%</span></div><div class="type-container" id="type-container-%index%">%typeIcons%</div><div class="difficulty-container">%lengthType%</div></div><div class="hike-bottom"><div class="description-holder"></div><div class="description-box" id="desc-%index%"><p class="description-text">%description%</p></div></div><div class="icon-container" id="icons-%index%"><img class="icon" id="btn-desc-%index%" src="../img_ui/ui-description.png"><img class="icon" id="btn-map-%index%" src="../img_ui/ui-location.png"></div></section>';
            } else {
                html = '<section class="hike-container"><div class="hike-top %imgID%"><div class="info-container"><span class="hike-name" id="hike-name">%name%</span><span class="hike-length" id="hike-lengthKM">%lengthKM%</span></div><div class="type-container" id="type-container-%index%">%typeIcons%</div><div class="difficulty-container">%lengthType%</div></div><div class="hike-bottom"><div class="description-holder"></div><div class="description-box" id="desc-%index%"><p class="description-text">%description%</p></div></div><div class="icon-container" id="icons-%index%"><img class="icon" id="btn-desc-%index%" src="../img_ui/ui-description.png"><img class="icon" id="btn-map-%index%" src="../img_ui/ui-location.png"><img class="icon" src="../img_ui/ui-directions2.png"></div></section>';
            }

            newHtml = html.replace('%name%,', index);
            newHtml = newHtml.replace('%name%', el.name);
            newHtml = newHtml.replace('%imgID%', `back-image-${index + 1}`);
            
            if (el.description == undefined) {
                newHtml = newHtml.replace('%description%', 'Description coming soon');
            } else {
                newHtml = newHtml.replace('%description%', el.description);
            };
            
            if (el.lengthKM == undefined || el.lengthKM == null || el.lengthKM == 0) {
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

//functions for creating/enabling button functionality for each hike instance

    let descActive; //when true allows description toggling. Upon swap to false will close all descriptions for reset

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
            //console.log('open sesame');
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
        document.body.addEventListener('click', function(event) { //functionality for description button
            for (i = 0; i < pageArray.length; i++) {
                if (event.toElement.id === `btn-desc-${i}`) {
                    toggleDescActive();
                    openDescription(i);
                    //console.log(i);
                };

                if (event.toElement.id === `btn-map-${i}`) { //functionality for map/location button
                    const mapPre = 'https://www.google.com/maps/place/';
                    let mapCoord = pageArray[i].coords;

                    window.open(mapPre + mapCoord);
                };
            };
        });
    };

    function buttonEventsTrip(pageDir) {
        document.getElementById('trip-directions').addEventListener('click', function() {
            window.open(pageDir);    
        });
    };

    return {
        fillPage: function(dataSet) {
            createlist(dataSet);
            toggleDescActive();
            buttonEvents(dataSet);
        },
        reFillPage: function(dataSet) { //same as fill page but won't reset mess up the event listeners. Use after sorts
            createlist(dataSet);
            toggleDescActive();
        },
        init: function(dataSet) {
            closeDescriptions(dataSet);
        },
        getTripDir: function(directions) {
            buttonEventsTrip(directions);
        }
    };

})();

const pageSorter = (function(){

//sorting functions for region pages

//by length sorts

    function sortShort(a, b) {
        if (a.lengthKM < b.lengthKM) {
            return -1;
        } 

        if (a.lengthKM > b.lengthKM) {
            return 1;
        }
    
        return 0;
    };

    function sortMedium(array) {
        if (array.length === 'medium') {
          return -1;
        } else {
          return 1;
        }
    };
    
    function sortLong(a, b) {
        if (a.lengthKM > b.lengthKM) {
          return -1;
        }

        if (a.lengthKM < b.lengthKM) {
            return 1;
        }
    
        return 0;
    };

//by type sorts

    function sortWaterfall(array) {
        if (array.typeNum.includes(0)) {
            return -1;
        } else {
            return 1;
        }
    };
    
    function sortRiver(array) {
        if (array.typeNum.includes(1)) {
            return -1;
        } else {
            return 1;
        }
    };
    
    function sortLake(array) {
        if (array.typeNum.includes(2)) {
          return -1;
        }
        else {
          return 1;
        }
    };
    
    function sortHotspring(array) {
        if (array.typeNum.includes(3)) {
          return -1;
        }
        else {
          return 1;
        }
    };


    function buttonEvents(curArray) {
        const genNode = document.getElementById('genPoint');
        let curList = curArray;

        document.body.addEventListener('click', function(event) { 
            switch(event.toElement.id) { //functionality for "by length" sorting
                case 'sort-short':
                    curlist = curArray.sort(sortShort);
                
                    document.getElementById('sort-refresh').scrollIntoView({block: "start", behavior: "smooth"});

                    genNode.innerHTML = '';
                    hikeGen.reFillPage(curlist);
                    hikeGen.init(curList);
                    break;
                case 'sort-medium':
                    curlist = curArray.sort(sortMedium);

                    document.getElementById('sort-refresh').scrollIntoView({block: "start", behavior: "smooth"});

                    genNode.innerHTML = '';
                    hikeGen.reFillPage(curlist);
                    hikeGen.init(curList);
                    break;
                case 'sort-long':
                    curlist = curArray.sort(sortLong);

                    document.getElementById('sort-refresh').scrollIntoView({block: "start", behavior: "smooth"});

                    genNode.innerHTML = '';
                    hikeGen.reFillPage(curlist);
                    hikeGen.init(curList);
                    break;
            };

            switch(event.toElement.id) { //functionality for "by type" sorting
                case 'sort-waterfall':
                    curlist = curArray.sort(sortWaterfall);
                
                    document.getElementById('sort-refresh').scrollIntoView({block: "start", behavior: "smooth"});

                    genNode.innerHTML = '';
                    hikeGen.reFillPage(curlist);
                    hikeGen.init(curList);
                    break;
                case 'sort-river':
                    curlist = curArray.sort(sortRiver);

                    document.getElementById('sort-refresh').scrollIntoView({block: "start", behavior: "smooth"});

                    genNode.innerHTML = '';
                    hikeGen.reFillPage(curlist);
                    hikeGen.init(curList);
                    break;
                case 'sort-lake':
                    curlist = curArray.sort(sortLake);

                    document.getElementById('sort-refresh').scrollIntoView({block: "start", behavior: "smooth"});

                    genNode.innerHTML = '';
                    hikeGen.reFillPage(curlist);
                    hikeGen.init(curList);
                    break;
                case 'sort-hotspring':
                    curlist = curArray.sort(sortHotspring);

                    document.getElementById('sort-refresh').scrollIntoView({block: "start", behavior: "smooth"});

                    genNode.innerHTML = '';
                    hikeGen.reFillPage(curlist);
                    hikeGen.init(curList);
                    break;
            };
        });
    };
      
    return {
        sort: function(pageArray) {
            buttonEvents(pageArray);
        },
        sortInit: function(pageArray) {
            sortShort(pageArray);
        }
    };

})();

let pageForest = dataBase.getTrails().forest;
let pageDesert = dataBase.getTrails().desert;
let pageCoast = dataBase.getTrails().coast;

let pageTripUmpqua = dataBase.getTrails().trips[0];
let directionsUmpqua = dataBase.getTrails().tripDirections[0];

let pageTripCentral = dataBase.getTrails().trips[1];
let directionsCentral = dataBase.getTrails().tripDirections[1];

let pageTrip101 = dataBase.getTrails().trips[2];
let directions101 = dataBase.getTrails().tripDirections[2];

if (curFile == 'index.html') { //if on landing page, adds event listener to scroll button and gets quoteGen function from dataBase
    document.getElementById('btn-scroll').addEventListener('click', function() { //smooth scroll down to table
        setTimeout(() => {
            document.getElementById('get-started').scrollIntoView(
                {block: "start",
                behavior: "smooth"
                });
        }, 150);
    });

    //document.getElementById('btn-home').style.pointerEvents = "none"; //disables home button on landing page

    dataBase.quoteGen();
};

if (curFile == 'forest.html') {
    hikeGen.fillPage(pageForest);
    hikeGen.init(pageForest);
    pageSorter.sort(pageForest);
};

if (curFile == 'desert.html') {
    hikeGen.fillPage(pageDesert);
    hikeGen.init(pageDesert);
    pageSorter.sort(pageDesert);
};

if (curFile == 'coast.html') {
    hikeGen.fillPage(pageCoast);
    hikeGen.init(pageCoast);
    pageSorter.sort(pageCoast);
};

if (curFile == 'trip-umpqua.html') {
    hikeGen.fillPage(pageTripUmpqua);
    hikeGen.init(pageTripUmpqua);
    hikeGen.getTripDir(directionsUmpqua);
};

if (curFile == 'trip-central.html') {
    hikeGen.fillPage(pageTripCentral);
    hikeGen.init(pageTripCentral);
    hikeGen.getTripDir(directionsCentral);
};

if (curFile == 'trip-101.html') {
    hikeGen.fillPage(pageTrip101);
    hikeGen.init(pageTrip101);
    hikeGen.getTripDir(directions101);
};

//console.log(sortGen.allMedium);

