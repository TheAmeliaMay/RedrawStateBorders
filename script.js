const version = '1.0.2';

// The list of valid hex characters
const hex = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];

// The default color to use for counties
const defaultColor = '#d0d0d0';

// The list of colors to use for the data map
const colors = {
    'Tie': ['#999999', '#909090', '#868686', '#7d7d7d', '#747474', '#6b6b6b', '#626262', '#595959', '#515151', '#484848', '#414141', '#3a3a3a', '#343434', '#2e2e2e', '#282828', '#222222', '#1c1c1c', '#171717', '#101010', '#070707', '#070707'], // Gray
    'No Data': '#000000',
    'race': {
        'White': ['#ffd3d3', '#ffc2c1', '#ffb2af', '#ffa19d', '#fe908a', '#fb7f76', '#f76d62', '#f25b4e', '#eb483a', '#e43124', '#d72018', '#c71a18', '#b61417', '#a50f15', '#950a14', '#840612', '#74040f', '#65020c', '#560106', '#470000', '#470000'], // Red
        'Black': ['#d1ddff', '#c4d2fd', '#b7c7fa', '#aabdf8', '#9db2f5', '#90a7f2', '#849cef', '#7792ec', '#6a87e8', '#5d7ce5', '#5271da', '#4965c8', '#4159b6', '#384ea4', '#2f4393', '#273883', '#1d2e72', '#142462', '#091a53', '#001144', '#001144'], //Blue
        'Latino': ['#ceffff', '#bff9f9', '#b1f3f3', '#a2ecec', '#92e6e6', '#81e0e0', '#70dada', '#5dd4d4', '#46cdcd', '#26c7c7', '#00bcbc', '#00adad', '#009f9f', '#009090', '#008282', '#007474', '#006666', '#005959', '#004c4c', '#003f3f', '#003f3f'], // Teal
        'American Indian': ['#fffec9', '#faf7b8', '#f6efa8', '#f2e797', '#eee086', '#ebd875', '#e7cf64', '#e5c753', '#e2bf41', '#dfb62c', '#d6aa1d', '#c69c1a', '#b68d16', '#a67f13', '#967110', '#86640c', '#765709', '#674a06', '#583e04', '#493200', '#493200'], // Yellow
        'Asian': ['#cbffc6', '#bef9b7', '#b0f3a8', '#a2ed9a', '#95e78b', '#87e17b', '#78db6c', '#69d55c', '#59cf4b', '#47c839', '#3abe2c', '#35b127', '#2fa321', '#29961c', '#248916', '#1e7c11', '#18700c', '#136407', '#0d5803', '#074c00', '#074c00'], // Green
        'Pacific': ['#ffddb2', '#fcd29f', '#fac78d', '#f7bc7b', '#f4b06a', '#f2a559', '#ef9948', '#ec8c37', '#e97f25', '#e67210', '#de6701', '#d05f02', '#c25803', '#b55004', '#a74904', '#9a4204', '#8d3b04', '#7f3403', '#732d02', '#662700', '#662700'] // Orange
    },
    'religion': {
        'complex': {
            'Baptist': '#CC3333', // Red
            'Catholic': '#FF7F00', // Orange
            'Mormon': '#4C91BF', // Blue
            'Lutheran': '#D9B400', // Yellow
            'Methodist': '#5AAE61', // Green
            'Pentecostal': '#B9A087', // Light brown
            'Presbyterian/Reformed': '#BDBDBD', // Gray
            'Restorationist': '#045A8D', // Light blue
            'Anglican': '#8C510A', // Brown
            'Non-denominational': '#986BA1', // Purple
            'Other Christian': '#CAB2D6', // Light purple
            'Non-Christian': '#F781BF', // Pink
            'Other/Unknown Protestant': '#155B2A', // Dark green
            'Tie': '#515151' // Dark gray
        },
        'simple': {
            'Catholic': ['#ffddb2', '#fcd29f', '#fac78d', '#f7bc7b', '#f4b06a', '#f2a559', '#ef9948', '#ec8c37', '#e97f25', '#e67210', '#de6701', '#d05f02', '#c25803', '#b55004', '#a74904', '#9a4204', '#8d3b04', '#7f3403', '#732d02', '#662700', '#662700'], // Orange
            'Mormon': ['#d1ddff', '#c4d2fd', '#b7c7fa', '#aabdf8', '#9db2f5', '#90a7f2', '#849cef', '#7792ec', '#6a87e8', '#5d7ce5', '#5271da', '#4965c8', '#4159b6', '#384ea4', '#2f4393', '#273883', '#1d2e72', '#142462', '#091a53', '#001144', '#001144'], //Blue
            'Other Christian': ['#ecd6ff', '#e3c9f8', '#d9bcf2', '#d0b0eb', '#c7a3e4', '#be97de', '#b58ad7', '#ac7ed0', '#a372c9', '#9a65c2', '#905bb9', '#8552ad', '#7a49a1', '#704095', '#653889', '#5b307d', '#512772', '#471f67', '#3e175c', '#340f51', '#340f51'], // Purple
            'Non-Christian': ['#ffd3d3', '#ffc2c1', '#ffb2af', '#ffa19d', '#fe908a', '#fb7f76', '#f76d62', '#f25b4e', '#eb483a', '#e43124', '#d72018', '#c71a18', '#b61417', '#a50f15', '#950a14', '#840612', '#74040f', '#65020c', '#560106', '#470000', '#470000'], // Red
            'Total Protestant': ['#cbffc6', '#bef9b7', '#b0f3a8', '#a2ed9a', '#95e78b', '#87e17b', '#78db6c', '#69d55c', '#59cf4b', '#47c839', '#3abe2c', '#35b127', '#2fa321', '#29961c', '#248916', '#1e7c11', '#18700c', '#136407', '#0d5803', '#074c00', '#074c00'] // Green
        },
        'Protestant Groups': {
            'Mainline': ['#cbffc6', '#bef9b7', '#b0f3a8', '#a2ed9a', '#95e78b', '#87e17b', '#78db6c', '#69d55c', '#59cf4b', '#47c839', '#3abe2c', '#35b127', '#2fa321', '#29961c', '#248916', '#1e7c11', '#18700c', '#136407', '#0d5803', '#074c00', '#074c00'], // Green
            'Evangelical': ['#ffd3d3', '#ffc2c1', '#ffb2af', '#ffa19d', '#fe908a', '#fb7f76', '#f76d62', '#f25b4e', '#eb483a', '#e43124', '#d72018', '#c71a18', '#b61417', '#a50f15', '#950a14', '#840612', '#74040f', '#65020c', '#560106', '#470000', '#470000'], // Red
            'Historically Black': ['#d1ddff', '#c4d2fd', '#b7c7fa', '#aabdf8', '#9db2f5', '#90a7f2', '#849cef', '#7792ec', '#6a87e8', '#5d7ce5', '#5271da', '#4965c8', '#4159b6', '#384ea4', '#2f4393', '#273883', '#1d2e72', '#142462', '#091a53', '#001144', '#001144'], //Blue
            'Unknown_Mixed': ['#ecd6ff', '#e3c9f8', '#d9bcf2', '#d0b0eb', '#c7a3e4', '#be97de', '#b58ad7', '#ac7ed0', '#a372c9', '#9a65c2', '#905bb9', '#8552ad', '#7a49a1', '#704095', '#653889', '#5b307d', '#512772', '#471f67', '#3e175c', '#340f51', '#340f51'] // Purple
        },
        'full': {
            'Baptist': ['#ffd3d3', '#ffc2c1', '#ffb2af', '#ffa19d', '#fe908a', '#fb7f76', '#f76d62', '#f25b4e', '#eb483a', '#e43124', '#d72018', '#c71a18', '#b61417', '#a50f15', '#950a14', '#840612', '#74040f', '#65020c', '#560106', '#470000', '#470000'], // Red
            'Lutheran': ['#fffec9', '#faf7b8', '#f6efa8', '#f2e797', '#eee086', '#ebd875', '#e7cf64', '#e5c753', '#e2bf41', '#dfb62c', '#d6aa1d', '#c69c1a', '#b68d16', '#a67f13', '#967110', '#86640c', '#765709', '#674a06', '#583e04', '#493200', '#493200'], // Yellow
            'Methodist': ['#cbffc6', '#bef9b7', '#b0f3a8', '#a2ed9a', '#95e78b', '#87e17b', '#78db6c', '#69d55c', '#59cf4b', '#47c839', '#3abe2c', '#35b127', '#2fa321', '#29961c', '#248916', '#1e7c11', '#18700c', '#136407', '#0d5803', '#074c00', '#074c00'], // Green
            'Pentecostal': ['#ddc4a8', '#d7bc9d', '#d0b392', '#caab88', '#c4a27d', '#bd9a73', '#b79268', '#b08a5e', '#aa8254', '#a37a4a', '#9a7142', '#8f683d', '#835f38', '#785632', '#6d4d2d', '#624528', '#573d23', '#4d351e', '#422d19', '#382514', '#382514'], // Brown
            'Presbyterian/Reformed': ['#d1ddff', '#c4d2fd', '#b7c7fa', '#aabdf8', '#9db2f5', '#90a7f2', '#849cef', '#7792ec', '#6a87e8', '#5d7ce5', '#5271da', '#4965c8', '#4159b6', '#384ea4', '#2f4393', '#273883', '#1d2e72', '#142462', '#091a53', '#001144', '#001144'], // Blue
            'Restorationist': ['#d1ddff', '#c4d2fd', '#b7c7fa', '#aabdf8', '#9db2f5', '#90a7f2', '#849cef', '#7792ec', '#6a87e8', '#5d7ce5', '#5271da', '#4965c8', '#4159b6', '#384ea4', '#2f4393', '#273883', '#1d2e72', '#142462', '#091a53', '#001144', '#001144'], // Blue
            'Anglican': ['#ffa3da', '#f397ce', '#e78cc2', '#db81b6', '#cf75aa', '#c36a9e', '#b75f93', '#ac5488', '#a0497c', '#953e71', '#8a3768', '#7f3361', '#752f59', '#6b2b52', '#61274a', '#582343', '#4e1f3c', '#451b35', '#3c182e', '#331427', '#331427'], // Maroon
            'Non-denominational': ['#ecd6ff', '#e3c9f8', '#d9bcf2', '#d0b0eb', '#c7a3e4', '#be97de', '#b58ad7', '#ac7ed0', '#a372c9', '#9a65c2', '#905bb9', '#8552ad', '#7a49a1', '#704095', '#653889', '#5b307d', '#512772', '#471f67', '#3e175c', '#340f51', '#340f51'], // Purple
            'Other/Unknown Protestant': ['#cbffc6', '#bef9b7', '#b0f3a8', '#a2ed9a', '#95e78b', '#87e17b', '#78db6c', '#69d55c', '#59cf4b', '#47c839', '#3abe2c', '#35b127', '#2fa321', '#29961c', '#248916', '#1e7c11', '#18700c', '#136407', '#0d5803', '#074c00', '#074c00'] // Green
        }
    },
    'Ancestry': {
        'largest': {
            'American': '#cc3333',
            'Anglo': '#f781bf',
            'Celtic': '#1b7837',
            'Finnish or Estonian': '#986ba1',
            'French or Cajun': '#045a8d',
            'German or Austrian': '#d9b400',
            'Italian': '#5aae61',
            'Other Germanic': '#8c510a',
            'Other/Generic European': '#b9a087',
            'Scandinavian': '#4c91bf',
            'Slavic': '#ff7f00',
            'Tie': '#515151'
        },
        'full': {
            'American': ['#ffd3d3', '#ffc2c1', '#ffb2af', '#ffa19d', '#fe908a', '#fb7f76', '#f76d62', '#f25b4e', '#eb483a', '#e43124', '#d72018', '#c71a18', '#b61417', '#a50f15', '#950a14', '#840612', '#74040f', '#65020c', '#560106', '#470000', '#470000'], // Red
            'Anglo': ['#ffa3da', '#f397ce', '#e78cc2', '#db81b6', '#cf75aa', '#c36a9e', '#b75f93', '#ac5488', '#a0497c', '#953e71', '#8a3768', '#7f3361', '#752f59', '#6b2b52', '#61274a', '#582343', '#4e1f3c', '#451b35', '#3c182e', '#331427', '#331427'], // Maroon
            'Celtic': ['#cbffc6', '#bef9b7', '#b0f3a8', '#a2ed9a', '#95e78b', '#87e17b', '#78db6c', '#69d55c', '#59cf4b', '#47c839', '#3abe2c', '#35b127', '#2fa321', '#29961c', '#248916', '#1e7c11', '#18700c', '#136407', '#0d5803', '#074c00', '#074c00'], // Green
            'Finnish or Estonian': ['#ecd6ff', '#e3c9f8', '#d9bcf2', '#d0b0eb', '#c7a3e4', '#be97de', '#b58ad7', '#ac7ed0', '#a372c9', '#9a65c2', '#905bb9', '#8552ad', '#7a49a1', '#704095', '#653889', '#5b307d', '#512772', '#471f67', '#3e175c', '#340f51', '#340f51'], // Purple,
            'French or Cajun': ['#d1ddff', '#c4d2fd', '#b7c7fa', '#aabdf8', '#9db2f5', '#90a7f2', '#849cef', '#7792ec', '#6a87e8', '#5d7ce5', '#5271da', '#4965c8', '#4159b6', '#384ea4', '#2f4393', '#273883', '#1d2e72', '#142462', '#091a53', '#001144', '#001144'], // Blue,
            'German or Austrian': ['#fffec9', '#faf7b8', '#f6efa8', '#f2e797', '#eee086', '#ebd875', '#e7cf64', '#e5c753', '#e2bf41', '#dfb62c', '#d6aa1d', '#c69c1a', '#b68d16', '#a67f13', '#967110', '#86640c', '#765709', '#674a06', '#583e04', '#493200', '#493200'], // Yellow,
            'Italian': ['#cbffc6', '#bef9b7', '#b0f3a8', '#a2ed9a', '#95e78b', '#87e17b', '#78db6c', '#69d55c', '#59cf4b', '#47c839', '#3abe2c', '#35b127', '#2fa321', '#29961c', '#248916', '#1e7c11', '#18700c', '#136407', '#0d5803', '#074c00', '#074c00'], // Green,
            'Other Germanic': ['#ddc4a8', '#d7bc9d', '#d0b392', '#caab88', '#c4a27d', '#bd9a73', '#b79268', '#b08a5e', '#aa8254', '#a37a4a', '#9a7142', '#8f683d', '#835f38', '#785632', '#6d4d2d', '#624528', '#573d23', '#4d351e', '#422d19', '#382514', '#382514'], // Brown
            'Other/Generic European': ['#ddc4a8', '#d7bc9d', '#d0b392', '#caab88', '#c4a27d', '#bd9a73', '#b79268', '#b08a5e', '#aa8254', '#a37a4a', '#9a7142', '#8f683d', '#835f38', '#785632', '#6d4d2d', '#624528', '#573d23', '#4d351e', '#422d19', '#382514', '#382514'], // Brown
            'Scandinavian': ['#d1ddff', '#c4d2fd', '#b7c7fa', '#aabdf8', '#9db2f5', '#90a7f2', '#849cef', '#7792ec', '#6a87e8', '#5d7ce5', '#5271da', '#4965c8', '#4159b6', '#384ea4', '#2f4393', '#273883', '#1d2e72', '#142462', '#091a53', '#001144', '#001144'], // Blue,
            'Slavic': ['#ffddb2', '#fcd29f', '#fac78d', '#f7bc7b', '#f4b06a', '#f2a559', '#ef9948', '#ec8c37', '#e97f25', '#e67210', '#de6701', '#d05f02', '#c25803', '#b55004', '#a74904', '#9a4204', '#8d3b04', '#7f3403', '#732d02', '#662700', '#662700'] // Orange
        }
    },
    'elections': {
        'Democratic': ['#d1ddff', '#c4d2fd', '#b7c7fa', '#aabdf8', '#9db2f5', '#90a7f2', '#849cef', '#7792ec', '#6a87e8', '#5d7ce5', '#5271da', '#4965c8', '#4159b6', '#384ea4', '#2f4393', '#273883', '#1d2e72', '#142462', '#091a53', '#001144', '#001144'], //Blue
        'Republican': ['#ffd3d3', '#ffc2c1', '#ffb2af', '#ffa19d', '#fe908a', '#fb7f76', '#f76d62', '#f25b4e', '#eb483a', '#e43124', '#d72018', '#c71a18', '#b61417', '#a50f15', '#950a14', '#840612', '#74040f', '#65020c', '#560106', '#470000', '#470000'], // Red
        'Other': ['#ecd6ff', '#e3c9f8', '#d9bcf2', '#d0b0eb', '#c7a3e4', '#be97de', '#b58ad7', '#ac7ed0', '#a372c9', '#9a65c2', '#905bb9', '#8552ad', '#7a49a1', '#704095', '#653889', '#5b307d', '#512772', '#471f67', '#3e175c', '#340f51', '#340f51'] // Purple
    }
};

// Keep track of the map scale for zooming in and out
var scale = 1;

// Keep track of the map position
var tx = 0;
var ty = 0;

// Keep track of if to show state and county borders
var showStateBorders = true;
var showCountyBorders = true;

// Which version of AZ to use
var azType = 'new';

// Labels to be updated in the state table
const labels = ['White', 'Black', 'Latino', 'American Indian', 'Asian', 'Pacific', 'Baptist', 'Catholic', 'Mormon', 'Lutheran', 'Methodist', 'Pentecostal', 'Presbyterian/Reformed', 'Restorationist', 'Anglican', 'Non-denominational', 'Other Christian', 'Non-Christian', 'Other/Unknown Protestant', 'Evangelical & Conservative', 'Mainline & Liberal', 'Historically Black', 'Protestant Group Unknown/Mixed', 'American', 'Anglo', 'Celtic', 'Finnish or Estonian', 'French or Cajun', 'German or Austrian', 'Italian', 'Other Germanic', 'Other/Generic European', 'Scandinavian', 'Slavic', 'Total Protestant'];

// Religions to measure
const religions = ['Baptist', 'Catholic', 'Mormon', 'Lutheran', 'Methodist', 'Pentecostal', 'Presbyterian/Reformed', 'Restorationist', 'Anglican', 'Non-denominational', 'Other Christian', 'Non-Christian', 'Other/Unknown Protestant', 'Mainline & Liberal', 'Evangelical & Conservative', 'Historically Black', 'Protestant Group Unknown/Mixed', 'Total Protestant'];

// Ancestries to measure
const ancestries = ['American', 'Anglo', 'Celtic', 'Finnish or Estonian', 'French or Cajun', 'German or Austrian', 'Italian', 'Other Germanic', 'Other/Generic European', 'Scandinavian', 'Slavic'];

// What to show for each type of data
const dataLabels = {
    'race': 'Race/Ethnicity: Largest',
    'White': 'Race/Ethnicity: White',
    'Black': 'Race/Ethnicity: Black or African American',
    'Latino': 'Race/Ethnicity: Hispanic or Latino',
    'American_Indian': 'Race/Ethnicity: American Indian',
    'Asian': 'Race/Ethnicity: Asian',
    'Pacific': 'Race/Ethnicity: Native Hawaiian/Pacific Islander',
    'Religion-complex': 'Religion: Largest',
    'Religion-simple': 'Religion: Simple',
    'Protestant_Groups': 'Religion: Protestant Groups',
    'Catholic': 'Religion: Catholic',
    'Mormon': 'Religion: Mormon',
    'Other_Christian': 'Religion: Other Christian',
    'Non-Christian': 'Religion: Non-Christian',
    'Total_Protestant': 'Religion: Protestant',
    'Baptist': 'Religion: Baptist',
    'Lutheran': 'Religion: Lutheran',
    'Methodist': 'Religion: Methodist',
    'Pentecostal': 'Religion: Pentecostal',
    'Presbyterian/Reformed': 'Religion: Presbyterian/Reformed',
    'Restorationist': 'Religion: Restorationist',
    'Anglican': 'Religion: Anglican',
    'Non-denominational': 'Religion: Non-denominational',
    'Other/Unknown Protestant': 'Religion: Other/Unknown Protestant',
    'Ancestry': 'Ancestry: Largest',
    'American': 'Ancestry: American',
    'Anglo': 'Ancestry: Anglo',
    'Celtic': 'Ancestry: Celtic',
    'Finnish or Estonian': 'Ancestry: Finnish or Estonian',
    'French or Cajun': 'Ancestry: French or Cajun',
    'German or Austrian': 'Ancestry: German or Austrian',
    'Italian': 'Ancestry: Italian',
    'Other Germanic': 'Ancestry: Other Germanic',
    'Other/Generic European': 'Ancestry: Other/Generic European',
    'Scandinavian': 'Ancestry: Scandinavian',
    'Slavic': 'Ancestry: Slavic',
    'presTotal': 'Pres. 2016/2020 Total',
    'pres2016': 'President 2016',
    'pres2020': 'President 2020',
    'demTotal': 'Democratic Total',
    'gopTotal': 'Republican Total',
    'otherTotal': 'Other Total',
    'clinton2016': 'Clinton 2016',
    'trump2016': 'Trump 2016',
    'other2016': 'Other 2016',
    'biden2020': 'Biden 2020',
    'trump2020': 'Trump 2020',
    'other2020': 'Other 2020'
};

// The list of states
var states = [];

// Sort states alphabetically
function sortStates() {
    // Sort the array
    states.sort(function(a, b) {
        return a['name'].localeCompare(b['name']);
    });

    // Remove deleted states
    for (let i = 0; i < states.length; i++) {
        if (states[i]['name'] == 'DELETED') {
            states.splice(i, 1);
        }
    }

    // Clear the table
    var rows = document.getElementById('statesTable').getElementsByTagName('tr');
    // Ignores the first three rows (two header rows and the erase option) and iterates backwards because we're deleting rows
    for (let i = rows.length - 1; i > 2; i--) {
        // Delete the row
        rows[i].remove();
    }

    // Add the states back to the table in the right order
    for (let i = 0; i < states.length; i++) {
        addState(states[i]['name'], i);
    }
}

// Go to a county
function goto(co) {
    var countyMap = document.getElementById('county-map');

    // Get the county object
    var county = countyMap.contentDocument.getElementById(co);

    // Zoom in according to the county's size
    var coMax = Math.max(county.getBoundingClientRect().width, county.getBoundingClientRect().height);
    var mapMax = Math.max(countyMap.getBoundingClientRect().width, countyMap.getBoundingClientRect().height) / scale;
    scale = mapMax / (coMax * 2);

    countyMap.style.transform = `scale(${scale}) translate(${tx}px, ${ty}px)`;
    document.getElementById('data-map').style.transform = `scale(${scale}) translate(${tx}px, ${ty}px)`;

    // Get the county x and y
    var coX = (county.getBoundingClientRect().left + county.getBoundingClientRect().right) / 2;
    var coY = (county.getBoundingClientRect().top + county.getBoundingClientRect().bottom) / 2;

    // Move the map to the county's position
    tx = (coX - (Math.round(countyMap.getBoundingClientRect().width / scale) / 2)) *-1;
    ty = (coY - (Math.round(countyMap.getBoundingClientRect().height / scale) / 2)) *-1;

    // Set the map transform
    countyMap.style.transform = `scale(${scale}) translate(${tx}px, ${ty}px)`;
    document.getElementById('data-map').style.transform = `scale(${scale}) translate(${tx}px, ${ty}px)`;
}

// Find blank counties
function findBlank() {
    // Get a list of counties assigned to any state
    var assigned = [];
    for (let i = 0; i < states.length; i++) {
        let counties = states[i]['counties'];
        for (let j = 0; j < counties.length; j++) {
            assigned.push(counties[j]);
        }
    }

    if (assigned.length >= 3130) {
        // Tell them nothing is blank
        showInfo('None found!');
    } else {
        // Look for counties in the map that aren't assigned and build a message to show
        var text = '';
        var paths = document.getElementById('county-map').contentDocument.getElementsByTagName('path');
        for (let i = 0; i < paths.length; i++) {
            if (paths[i].id != '_State_borders' && assigned.indexOf(paths[i].id) == -1) {
                if (text == '') {
                    text = `${paths[i].id} <button onclick="goto('${paths[i].id}')">Go to</button>`;
                } else {
                    text = `${text}\n${paths[i].id} <button onclick="goto('${paths[i].id}')">Go to</button>`;
                }
            }
        }

        // Show the message
        showInfo(text);
    }
}

// Show/hide state borders
function toggleStateBorders() {
    if (showStateBorders) {
        showStateBorders = false;
        document.getElementById('county-map').contentDocument.getElementById('_State_borders').style.display = 'none';
    } else {
        showStateBorders = true;
        document.getElementById('county-map').contentDocument.getElementById('_State_borders').style.display = 'inline';
    }
}

// Show/hide county borders
function toggleCountyBorders() {
    // Update the variable
    if (showCountyBorders) {
        showCountyBorders = false;
    } else {
        showCountyBorders = true;
    }

    // Get a list of paths
    var paths = document.getElementById('county-map').contentDocument.getElementsByTagName('path');

    // Toggle each county's borders
    for (let i = 0; i < paths.length; i++) {
        if (paths[i].id == '_State_borders' || paths[i].id == 'background') {
            // Skip the state borders and background
            continue;
        }

        if (showCountyBorders) {
            // Set the borders to white
            paths[i].style.stroke = 'white';
        } else {
            // Set the border color to the fill color
            paths[i].style.stroke = paths[i].style.fill;
        }
    }
}

// Update a state's labels
function updateLabels(state) {
    // Ignore deleted states
    if (states[state]['name'] == 'DELETED') {
        return;
    }

    // Update the race labels
    for (let i = 0; i < labels.length; i++) {
        let rounded;
        if (states[state]['population'] == 0) {
            rounded = 0;
        } else {
            // Get the percentage
            let percentage = states[state][labels[i]] / states[state]['population'] * 100;

            // Round the percentage
            rounded = percentage.toFixed(2);
        }

        let label = document.getElementById(`state${state}-${labels[i].replace(new RegExp(' ', 'g'), '_')}`);
        if (label) {
            label.innerText = `${rounded}%`;
        }
    }

    // Update the religion label
    // Get the data
    let rData = {};

    for (let r = 0; r < religions.length; r++) {
        rData[religions[r]] = states[state][religions[r]];
    }

    // Get percentages
    let rPerc = {};
    for (let [key, value] of Object.entries(rData)) {
        // Get the percentage and add it to the dictionary
        rPerc[key] = value / states[state]['Religion Total'] * 100;
    }

    // Find the largest value
    let rLargest = 'n/a';
    let rLargestPerc = 0;
    for (let [key, value] of Object.entries(rPerc)) {
        if (['Total Protestant', 'Mainline & Liberal', 'Evangelical & Conservative', 'Historically Black', 'Protestant Group Unknown/Mixed', 'Total Christian', 'Total'].indexOf(key) >= 0) {
            continue;
        }

        if (value > rLargestPerc) {
            rLargest = key;
            rLargestPerc = value;
        } else if (value == rLargestPerc) {
            rLargest = 'Tie';
        }
    }

    // If the largest is 0%, there's no data
    if (rLargestPerc == 0) {
        document.getElementById(`state${state}-ReligionLabel`).innerText = 'No Data';
    } else {
        // Show it
        document.getElementById(`state${state}-ReligionLabel`).innerText = `${rLargestPerc.toFixed(2)}% ${rLargest}`;
    }

    // Update the ancestry label
    // Get the data
    let aData = {};

    for (let a = 0; a < ancestries.length; a++) {
        aData[ancestries[a]] = states[state][ancestries[a]];
    }

    // Get percentages
    let aPerc = {};
    for (let [key, value] of Object.entries(aData)) {
        // Get the percentage and add it to the dictionary
        aPerc[key] = value / states[state]['Ancestry Total'] * 100;
    }

    // Find the largest value
    let aLargest = 'n/a';
    let aLargestPerc = 0;
    for (let [key, value] of Object.entries(aPerc)) {
        if (key == 'Total') {
            continue;
        }

        if (value > aLargestPerc) {
            aLargest = key;
            aLargestPerc = value;
        } else if (value == aLargestPerc) {
            aLargest = 'Tie';
        }
    }

    // If the largest is 0%, there's no data
    if (aLargestPerc == 0) {
        document.getElementById(`state${state}-AncestryLabel`).innerText = 'No Data';
    } else {
        // Show it
        document.getElementById(`state${state}-AncestryLabel`).innerText = `${aLargestPerc.toFixed(2)}% ${aLargest}`;
    }

    // Get election results
    let eData = states[state]['Election Results'];
    let eTotal = Number(eData['pres2016']['Total']) + Number(eData['pres2020']['Total']);
    let demPerc = (Number(eData['pres2016']['Clinton']) + Number(eData['pres2020']['Biden'])) / eTotal * 100;
    let gopPerc = (Number(eData['pres2016']['Trump']) + Number(eData['pres2020']['Trump'])) / eTotal * 100;
    let otherPerc = (Number(eData['pres2016']['Other']) + Number(eData['pres2020']['Other'])) / eTotal * 100;

    // Change NaN to 0%
    if (isNaN(demPerc)) {
        demPerc = 0;
    }
    if (isNaN(gopPerc)) {
        gopPerc = 0;
    }
    if (isNaN(otherPerc)) {
        otherPerc = 0;
    }

    // Update the labels
    document.getElementById(`state${state}-Democratic`).innerText = `${demPerc.toFixed(2)}%`;
    document.getElementById(`state${state}-Republican`).innerText = `${gopPerc.toFixed(2)}%`;
    document.getElementById(`state${state}-Other`).innerText = `${otherPerc.toFixed(2)}%`;

    // Update the population label
    document.getElementById(`state${state}-pop`).innerText = Number(states[state]['population']).toLocaleString('en-US');
}

// Erase a county
function erase(obj, key=false) {
    // Return if there's no county
    if (obj === null) {
        return;
    }

    // Erase an entire state
    if (key) {
        // Get the state ID
        let state = obj.id.slice(-2);

        // Get the custom state to erase for shift-click
        let customState = null;
        for (let i = 0; i < states.length; i++) {
            if (states[i]['name'] == 'DELETED') {
                // Skip deleted states
                continue;
            }

            if (states[i]['counties'].indexOf(obj.id) >= 0) {
                customState = i;
                break;
            }
        }

        // Erase every county in that state
        var paths = document.getElementById('county-map').contentDocument.getElementsByTagName('path');
        for (let i = 0; i < paths.length; i++) {
            if (paths[i].id.endsWith(state)) {
                if (key == 'ctrl') {
                    // Erase all counties in that state
                    erase(paths[i]);
                } else if (key == 'shift' && customState != null) {
                    // Erase counties in that state, but only for the custom state they clicked on
                    if (states[customState]['counties'].indexOf(paths[i].id) >= 0) {
                        erase(paths[i]);
                    }
                }
            }
        }

        return;
    }

    // Remove it from the state its in
    for (let i = 0; i < states.length; i++) {
        // Skip it if it's deleted
        if (states[i]['name'] == 'DELETED') {
            continue;
        }

        // Check if it includes the county
        let index = states[i]['counties'].indexOf(obj.id);
        if (index >= 0) {
            // Don't erase it if the state is locked
            if (states[i]['locked']) {
                return;
            }

            // Remove the county from the list
            states[i]['counties'].splice(index, 1);

            // Decrease the population
            states[i]['population'] -= Number(race[obj.id]['Population']);

            // Decrease the religion total
            states[i]['Religion Total'] -= Number(religion[obj.id]['Total']);

            // Decrease the ancestry total
            states[i]['Ancestry Total'] -= Number(ancestry[obj.id]['Total']);

            for (let l = 0; l < labels.length; l++) {
                // Update the data
                if (religions.indexOf(labels[l]) >= 0) {
                    states[i][labels[l]] -= Number(religion[obj.id][labels[l]]);
                } else if (ancestries.indexOf(labels[l]) >= 0) {
                    states[i][labels[l]] -= Number(ancestry[obj.id][labels[l]]);
                } else {
                    states[i][labels[l]] -= Number(race[obj.id][labels[l]]);
                }
            }

            // Update election data
            states[i]['Election Results']['pres2016']['Clinton'] -= Number(pres2016[obj.id]['Clinton']);
            states[i]['Election Results']['pres2016']['Trump'] -= Number(pres2016[obj.id]['Trump']);
            states[i]['Election Results']['pres2016']['Other'] -= Number(pres2016[obj.id]['Other']);
            states[i]['Election Results']['pres2016']['Total'] -= Number(pres2016[obj.id]['Total']);
            states[i]['Election Results']['pres2020']['Biden'] -= Number(pres2020[obj.id]['Biden']);
            states[i]['Election Results']['pres2020']['Trump'] -= Number(pres2020[obj.id]['Trump']);
            states[i]['Election Results']['pres2020']['Other'] -= Number(pres2020[obj.id]['Other']);
            states[i]['Election Results']['pres2020']['Total'] -= Number(pres2020[obj.id]['Total']);

            // Update the labels
            updateLabels(i);
        }
    }
    // Fill it with the default color
    obj.style.fill = defaultColor;

    if (!showCountyBorders) {
        obj.style.stroke = defaultColor;
    }
}

// Draw a county
function draw(obj, key=false, drawTo=null) {
    // Return if there's no county
    if (obj === null) {
        return;
    }

    // Find which state is selected
    if (drawTo === null) {
        var state = document.querySelector('input[name="state"]:checked').value;

        // Erase it if erase is selected
        if (state == 'erase') {
            erase(obj, key);
            return;
        } else if (states[state]['locked']) {
            // Don't draw if the state selected is locked
            return;
        }
    } else {
        var state = drawTo;
    }

    // Draw an entire state
    if (key) {
        // Get the state ID
        let irlState = obj.id.slice(-2);

        // Draw every county in that state
        var paths = document.getElementById('county-map').contentDocument.getElementsByTagName('path');
        for (let i = 0; i < paths.length; i++) {
            if (paths[i].id.endsWith(irlState)) {
                if (key == 'ctrl') {
                    // Redraw all counties
                    draw(paths[i]);
                } else if (key == 'shift') {
                    // Only draw counties that are not in another state
                    let found = false;
                    for (let j = 0; j < states.length; j++) {
                        if (states[j]['name'] != 'DELETED') {
                            if (states[j]['counties'].indexOf(paths[i].id) >= 0) {
                                found = true;
                            }
                        }
                    }

                    if (!found) {
                        draw(paths[i]);
                    }
                }
            }
        }

        return;
    }

    // Remove it from other states
    for (let i = 0; i < states.length; i++) {
        // Skip it if it's deleted
        if (states[i]['name'] == 'DELETED') {
            continue;
        }

        // Check if it includes the county
        let index = states[i]['counties'].indexOf(obj.id);
        if (index >= 0) {
            if (state == i) {
                // Do nothing if it's already in the state
                return;
            } else if (states[i]['locked']) {
                // Do nothing if the state is locked
                return;
            }

            // Remove the county from the list
            states[i]['counties'].splice(index, 1);

            // Decrease the population
            states[i]['population'] -= Number(race[obj.id]['Population']);

            // Decrease the religion total
            states[i]['Religion Total'] -= Number(religion[obj.id]['Total']);

            // Decrease the ancestry total
            states[i]['Ancestry Total'] -= Number(ancestry[obj.id]['Total']);

            // Update the data
            for (let l = 0; l < labels.length; l++) {
                // Update the data
                if (religions.indexOf(labels[l]) >= 0) {
                    states[i][labels[l]] -= Number(religion[obj.id][labels[l]]);
                } else if (ancestries.indexOf(labels[l]) >= 0) {
                    states[i][labels[l]] -= Number(ancestry[obj.id][labels[l]]);
                } else {
                    states[i][labels[l]] -= Number(race[obj.id][labels[l]]);
                }
            }

            // Update election data
            states[i]['Election Results']['pres2016']['Clinton'] -= Number(pres2016[obj.id]['Clinton']);
            states[i]['Election Results']['pres2016']['Trump'] -= Number(pres2016[obj.id]['Trump']);
            states[i]['Election Results']['pres2016']['Other'] -= Number(pres2016[obj.id]['Other']);
            states[i]['Election Results']['pres2016']['Total'] -= Number(pres2016[obj.id]['Total']);
            states[i]['Election Results']['pres2020']['Biden'] -= Number(pres2020[obj.id]['Biden']);
            states[i]['Election Results']['pres2020']['Trump'] -= Number(pres2020[obj.id]['Trump']);
            states[i]['Election Results']['pres2020']['Other'] -= Number(pres2020[obj.id]['Other']);
            states[i]['Election Results']['pres2020']['Total'] -= Number(pres2020[obj.id]['Total']);

            // Update the labels
            updateLabels(i);
        }
    }

    // Fill it with that state's color
    obj.style.fill = states[state]['color'];

    if (!showCountyBorders) {
        obj.style.stroke = states[state]['color'];
    }

    // Add it to the list of counties
    states[state]['counties'].push(obj.id);

    // Add to the population
    if (race[obj.id] === undefined) {
    }

    states[state]['population'] += Number(race[obj.id]['Population']);

    // Raise the religion total
    states[state]['Religion Total'] += Number(religion[obj.id]['Total']);

    // Raise the ancestry total
    states[state]['Ancestry Total'] += Number(ancestry[obj.id]['Total']);

    // Update the data
    for (let i = 0; i < labels.length; i++) {
        if (religions.indexOf(labels[i]) >= 0) {
            states[state][labels[i]] += Number(religion[obj.id][labels[i]]);
        } else if (ancestries.indexOf(labels[i]) >= 0) {
            states[state][labels[i]] += Number(ancestry[obj.id][labels[i]]);
        } else {
            states[state][labels[i]] += Number(race[obj.id][labels[i]]);
        }
    }

    // Update election data
    states[state]['Election Results']['pres2016']['Clinton'] += Number(pres2016[obj.id]['Clinton']);
    states[state]['Election Results']['pres2016']['Trump'] += Number(pres2016[obj.id]['Trump']);
    states[state]['Election Results']['pres2016']['Other'] += Number(pres2016[obj.id]['Other']);
    states[state]['Election Results']['pres2016']['Total'] += Number(pres2016[obj.id]['Total']);
    states[state]['Election Results']['pres2020']['Biden'] += Number(pres2020[obj.id]['Biden']);
    states[state]['Election Results']['pres2020']['Trump'] += Number(pres2020[obj.id]['Trump']);
    states[state]['Election Results']['pres2020']['Other'] += Number(pres2020[obj.id]['Other']);
    states[state]['Election Results']['pres2020']['Total'] += Number(pres2020[obj.id]['Total']);

    // Update the labels
    updateLabels(state);
}

// Rename a state
function renameState(id) {
    // Get the new name
    var name = prompt('New name:');

    // Make sure the name doesn't already exist
    for (let i = 0; i < states.length; i++) {
        if (states[i]['name'] == name) {
            alert('Name already exists!');
            return;
        }
    }

    if (name) {
        // Rename the state
        states[id]['name'] = name;

        // Update the name label
        document.getElementById(`state${id}-label`).innerText = name;
    }
}

// Change the color for a state
function changeColor(id, color) {
    // Update it in the list
    states[id]['color'] = color;

    // Get the content document
    var cd = document.getElementById('county-map').contentDocument;

    // Update every county in the state
    var counties = states[id]['counties'];
    for (let i = 0; i < counties.length; i++) {
        cd.getElementById(counties[i]).style.fill = color;

        if (showCountyBorders) {
            cd.getElementById(counties[i]).style.stroke = 'white';
        } else {
            cd.getElementById(counties[i]).style.stroke = color;
        }
    }
}

// Show an info popup
function showInfo(info) {
    // Create a new element
    var popup = document.createElement('div');
    popup.setAttribute('class', 'popup');

    // Add a background element
    var bg = document.createElement('div');
    bg.setAttribute('class', 'popupBg');

    // Destroy the popup when clicking the background
    bg.addEventListener('click', function() {
        this.parentElement.remove();
    });

    // Add it to the popup
    popup.appendChild(bg);

    // Add a body
    var body = document.createElement('div');
    body.setAttribute('class', 'popupBody');

    // Split the info text into lines
    var lines = info.split('\n');

    // Add a paragraph for each line
    for (let i = 0; i < lines.length; i++) {
        let p = document.createElement('p');
        p.innerHTML = lines[i];
        body.appendChild(p);
    }

    // Create a button to close the popup
    var btn = document.createElement('button');
    btn.setAttribute('class', 'popupBtn');
    btn.innerHTML = 'Close';

    // Destroy the popup when clicked
    btn.addEventListener('click', function() {
        this.parentElement.parentElement.remove();
    });

    // Add it to the popup
    body.appendChild(btn);

    // Add it to the document body
    popup.appendChild(body);
    document.body.appendChild(popup);
}

// Show more religious data (it won't fit in the main table)
function showReligionData(e) {
    // Get the ID of the state to display
    var id = e.target.id.split('-')[0].substring(5);

    // Get the data to display
    var text;
    for (let i = 0; i < religions.length; i++) {
        let data = states[id][religions[i]] / states[id]['Religion Total'] * 100;
        let rounded = data.toFixed(2);

        if (i == 0) {
            text = `${religions[i]}: ${rounded}%`;
        } else {
            text = `${text}\n${religions[i]}: ${rounded}%`;
        }
    }

    // Display the data
    showInfo(text);
}

// Show more ancestry data (it won't fit in the main table)
function showAncestryData(e) {
    // Get the ID of the state to display
    var id = e.target.id.split('-')[0].substring(5);

    // Get the data to display
    var text;
    for (let i = 0; i < ancestries.length; i++) {
        let data = states[id][ancestries[i]] / states[id]['Ancestry Total'] * 100;
        let rounded = data.toFixed(2);

        if (i == 0) {
            text = `${ancestries[i]}: ${rounded}%`;
        } else {
            text = `${text}\n${ancestries[i]}: ${rounded}%`;
        }
    }

    // Display the data
    showInfo(text);
}

// Show a table of detailed election results
function showElectionResults() {
    // Don't show it if there's no states
    if (states.length == 0) {
        return;
    }

    // Create a container for the container
    var container = document.createElement('div');
    container.setAttribute('id', 'ertCntnrCntnr');

    // Add a background cover
    var bg = document.createElement('div');
    bg.setAttribute('id', 'ertbg');

    bg.onclick = function() {
        this.parentElement.remove();
    }

    container.appendChild(bg);

    // Add a close button
    var btn = document.createElement('button');
    btn.setAttribute('id', 'ertCloseBtn');
    btn.innerText = 'Close';

    btn.onclick = function() {
        // Delete the table
        this.parentElement.remove();
    };

    container.appendChild(btn);

    // Create a table container
    var tableCntnr = document.createElement('div');
    tableCntnr.setAttribute('id', 'ertCntnr');

    // Create a table
    var table = document.createElement('table');
    table.setAttribute('id', 'electionResultsTable');

    // Add a header row
    var hr1 = document.createElement('tr');

    var th1_1 = document.createElement('th');
    th1_1.innerText = 'State';
    th1_1.setAttribute('rowspan', '2');
    hr1.appendChild(th1_1);

    // Pres. 2016
    var th1_2 = document.createElement('th');
    th1_2.innerText = 'President 2016';
    th1_2.setAttribute('colspan', '7');
    hr1.appendChild(th1_2);

    // Pres. 2020
    var th1_3 = document.createElement('th');
    th1_3.innerText = 'President 2020';
    th1_3.setAttribute('colspan', '7');
    hr1.appendChild(th1_3);

    // Pres. 2016/2020 Total
    var th1_4 = document.createElement('th');
    th1_4.innerText = 'Pres. 2016/2020 Total';
    th1_4.setAttribute('colspan', '7');
    hr1.appendChild(th1_4);

    table.appendChild(hr1);

    // 2nd header row for candidates
    var hr2 = document.createElement('tr');

    // Pres. 2016
    var th2_1 = document.createElement('th');
    th2_1.innerText = 'Hillary Clinton (D)';
    th2_1.setAttribute('colspan', '2');
    hr2.appendChild(th2_1);

    var th2_2 = document.createElement('th');
    th2_2.innerText = 'Donald Trump (R)';
    th2_2.setAttribute('colspan', '2');
    hr2.appendChild(th2_2);

    var th2_3 = document.createElement('th');
    th2_3.innerText = 'Other';
    th2_3.setAttribute('colspan', '2');
    hr2.appendChild(th2_3);

    var th2_4 = document.createElement('th');
    th2_4.innerText = 'Total';
    hr2.appendChild(th2_4);

    // Pres. 2020
    var th2_5 = document.createElement('th');
    th2_5.innerText = 'Joe Biden (D)';
    th2_5.setAttribute('colspan', '2');
    hr2.appendChild(th2_5);

    var th2_6 = document.createElement('th');
    th2_6.innerText = 'Donald Trump (R)';
    th2_6.setAttribute('colspan', '2');
    hr2.appendChild(th2_6);

    var th2_7 = document.createElement('th');
    th2_7.innerText = 'Other';
    th2_7.setAttribute('colspan', '2');
    hr2.appendChild(th2_7);

    var th2_8 = document.createElement('th');
    th2_8.innerText = 'Total';
    hr2.appendChild(th2_8);

    // Pres. 2016/2020 Total
    var th2_9 = document.createElement('th');
    th2_9.innerText = 'Democratic';
    th2_9.setAttribute('colspan', '2');
    hr2.appendChild(th2_9);

    var th2_10 = document.createElement('th');
    th2_10.innerText = 'Republican';
    th2_10.setAttribute('colspan', '2');
    hr2.appendChild(th2_10);

    var th2_11 = document.createElement('th');
    th2_11.innerText = 'Other';
    th2_11.setAttribute('colspan', '2');
    hr2.appendChild(th2_11);

    var th2_12 = document.createElement('th');
    th2_12.innerText = 'Total';
    hr2.appendChild(th2_12);

    table.appendChild(hr2);

    // Add a row for each state
    for (let i = 0; i < states.length; i++) {
        let state = states[i];

        // Create the row
        let row = document.createElement('tr');

        // Add the state name cell
        let name = document.createElement('td');
        name.innerText = state['name'];
        row.appendChild(name);

        // Get the election data
        let eData = state['Election Results'];

        // Pres. 2016
        let p16cr = document.createElement('td');
        p16cr.innerText = eData['pres2016']['Clinton'].toLocaleString('en-US');
        row.appendChild(p16cr);

        let p16cp = document.createElement('td');
        p16cp.innerText = `${(eData['pres2016']['Clinton'] / eData['pres2016']['Total'] * 100).toFixed(2)}%`;
        row.appendChild(p16cp);

        let p16tr = document.createElement('td');
        p16tr.innerText = eData['pres2016']['Trump'].toLocaleString('en-US');
        row.appendChild(p16tr);

        let p16tp = document.createElement('td');
        p16tp.innerText = `${(eData['pres2016']['Trump'] / eData['pres2016']['Total'] * 100).toFixed(2)}%`;
        row.appendChild(p16tp);

        let p16or = document.createElement('td');
        p16or.innerText = eData['pres2016']['Other'].toLocaleString('en-US');
        row.appendChild(p16or);

        let p16op = document.createElement('td');
        p16op.innerText = `${(eData['pres2016']['Other'] / eData['pres2016']['Total'] * 100).toFixed(2)}%`;
        row.appendChild(p16op);

        let p16t = document.createElement('td');
        p16t.innerText = eData['pres2016']['Total'].toLocaleString('en-US');
        row.appendChild(p16t);

        // Pres. 2020
        let p20br = document.createElement('td');
        p20br.innerText = eData['pres2020']['Biden'].toLocaleString('en-US');
        row.appendChild(p20br);

        let p20bp = document.createElement('td');
        p20bp.innerText = `${(eData['pres2020']['Biden'] / eData['pres2020']['Total'] * 100).toFixed(2)}%`;
        row.appendChild(p20bp);

        let p20tr = document.createElement('td');
        p20tr.innerText = eData['pres2020']['Trump'].toLocaleString('en-US');
        row.appendChild(p20tr);

        let p20tp = document.createElement('td');
        p20tp.innerText = `${(eData['pres2020']['Trump'] / eData['pres2020']['Total'] * 100).toFixed(2)}%`;
        row.appendChild(p20tp);

        let p20or = document.createElement('td');
        p20or.innerText = eData['pres2020']['Other'].toLocaleString('en-US');
        row.appendChild(p20or);

        let p20op = document.createElement('td');
        p20op.innerText = `${(eData['pres2020']['Other'] / eData['pres2020']['Total'] * 100).toFixed(2)}%`;
        row.appendChild(p20op);

        let p20t = document.createElement('td');
        p20t.innerText = eData['pres2020']['Total'].toLocaleString('en-US');
        row.appendChild(p20t);

        // Pres. 2016/2020 Total
        let total = eData['pres2020']['Total'] + eData['pres2016']['Total'];

        let ptbr = document.createElement('td');
        ptbr.innerText = (eData['pres2020']['Biden'] + eData['pres2016']['Clinton']).toLocaleString('en-US');
        row.appendChild(ptbr);

        let ptbp = document.createElement('td');
        ptbp.innerText = `${((eData['pres2020']['Biden'] + eData['pres2016']['Clinton']) / total * 100).toFixed(2)}%`;
        row.appendChild(ptbp);

        let pttr = document.createElement('td');
        pttr.innerText = (eData['pres2020']['Trump'] + eData['pres2016']['Trump']).toLocaleString('en-US');
        row.appendChild(pttr);

        let pttp = document.createElement('td');
        pttp.innerText = `${((eData['pres2020']['Trump'] + eData['pres2016']['Trump']) / total * 100).toFixed(2)}%`;
        row.appendChild(pttp);

        let ptor = document.createElement('td');
        ptor.innerText = (eData['pres2020']['Other'] + eData['pres2016']['Other']).toLocaleString('en-US');
        row.appendChild(ptor);

        let ptop = document.createElement('td');
        ptop.innerText = `${((eData['pres2020']['Other'] + eData['pres2016']['Other']) / total * 100).toFixed(2)}%`;
        row.appendChild(ptop);

        let ptt = document.createElement('td');
        ptt.innerText = total.toLocaleString('en-US');
        row.appendChild(ptt);

        // Add the row to the table
        table.appendChild(row);
    }

    // Add the table to the page
    tableCntnr.appendChild(table);
    container.appendChild(tableCntnr);
    document.body.appendChild(container);
}

// Deelete a state
function deleteState(e) {
    // Get the ID of the state to delete
    var id = e.target.id.substr(6);

    // Don't delete a locked state
    if (states[id]['locked']) {
        alert('Unlock this state before deleting it!');
        return;
    }

    // Reset the color of all the counties
    for (let i = 0; i < states[id]['counties'].length; i++) {
        let coid = states[id]['counties'][i];
        let county = document.getElementById('county-map').contentDocument.getElementById(coid);
        county.style.fill = defaultColor;
    }

    // Mark it as deleted, but don't remove it from the list, so we don't have to renumber everything
    states[id] = {
        'name': 'DELETED'
    }

    // Remove it from the table
    document.getElementById(`row${id}`).remove();
}

// Lock/unlock a state
function toggleLock(e) {
    // Get the ID of the state to delete
    var id = e.target.id.substr(4);

    // Toggle the lock
    if (states[id]['locked']) {
        states[id]['locked'] = false;
        document.getElementById(`lock${id}`).src = 'lock-open.svg';
    } else {
        states[id]['locked'] = true;
        document.getElementById(`lock${id}`).src = 'lock-closed.svg';
    }
}

// Add a state to the table
function addState(name, id) {
    // Add a new row
    let tr = document.createElement('tr');
    tr.setAttribute('id', `row${id}`);

    // Add the delete cell
    let delCell = document.createElement('td');
    let delBtn = document.createElement('button');
    delBtn.setAttribute('id', `delete${id}`);
    delBtn.setAttribute('class', 'delBtn');
    delBtn.innerText = 'X';
    delBtn.onclick = deleteState;
    delCell.appendChild(delBtn);
    tr.appendChild(delCell);

    // Add the lock cell
    let lockCell = document.createElement('td');
    let lockBtn = document.createElement('img');
    lockBtn.setAttribute('id', `lock${id}`);
    lockBtn.setAttribute('class', 'lockBtn');

    if (states[id]['locked']) {
        lockBtn.setAttribute('src', 'lock-closed.svg');
    } else {
        lockBtn.setAttribute('src', 'lock-open.svg');
    }

    lockBtn.onclick = toggleLock;
    lockCell.appendChild(lockBtn);
    tr.appendChild(lockCell);

    // Create the state name cell
    let nameCell = document.createElement('td');

    // Add the radio input to select the state
    let radio = document.createElement('input');
    radio.setAttribute('type', 'radio');
    radio.setAttribute('id', `state${id}-radio`);
    radio.setAttribute('name', 'state');
    radio.setAttribute('value', id);
    radio.checked = 'true';

    // Add it to the name cell
    nameCell.appendChild(radio);

    // Add the state name label
    let label = document.createElement('label');
    label.setAttribute('for', `state${id}-radio`);
    label.setAttribute('id', `state${id}-label`);
    label.innerText = name;
    nameCell.appendChild(label);

    // Add a button to rename it
    let rename = document.createElement('button');
    rename.innerText = 'Rename';
    rename.setAttribute('id', `rename${id}`);
    rename.classList.add('renameBtn');

    // Add a function to rename it later
    rename.onclick = function() {
        let id = this.id.substring(6);
        renameState(id);
    };

    // Add the button to the cell
    nameCell.appendChild(rename);

    // Add the state name cell to the row
    tr.appendChild(nameCell);

    // Create the color picker cell
    let colorCell = document.createElement('td');
    let color = document.createElement('input')
    color.setAttribute('type', 'color');
    color.setAttribute('id', `state${id}-color`);
    color.setAttribute('name', `state${id}-color`);
    color.setAttribute('value', states[id]['color']);

    // Add an event listener for when the color changes
    color.addEventListener('input', function() {
        let id = this.id.split('-')[0].substring(5);
        changeColor(id, this.value);
    });

    // Add it
    colorCell.appendChild(color);
    tr.appendChild(colorCell);

    // Add a population cell
    let popCell = document.createElement('td');
    popCell.setAttribute('id', `state${id}-pop`);
    tr.appendChild(popCell);

    // Add racial data cells
    let whiteCell = document.createElement('td');
    whiteCell.setAttribute('id', `state${id}-White`);
    tr.appendChild(whiteCell);

    let blackCell = document.createElement('td');
    blackCell.setAttribute('id', `state${id}-Black`);
    tr.appendChild(blackCell);

    let latinoCell = document.createElement('td');
    latinoCell.setAttribute('id', `state${id}-Latino`);
    tr.appendChild(latinoCell);

    let indianCell = document.createElement('td');
    indianCell.setAttribute('id', `state${id}-American_Indian`);
    tr.appendChild(indianCell);

    let asianCell = document.createElement('td');
    asianCell.setAttribute('id', `state${id}-Asian`);
    tr.appendChild(asianCell);

    let pacificCell = document.createElement('td');
    pacificCell.setAttribute('id', `state${id}-Pacific`);
    tr.appendChild(pacificCell);

    // Create a religious data cell
    let relCell = document.createElement('td');
    relCell.setAttribute('id', `state${id}-Religion`);

    // Add the label (this is the text value)
    let relLabel = document.createElement('span');
    relLabel.setAttribute('id', `state${id}-ReligionLabel`);
    relLabel.setAttribute('class', 'religionLabel');
    relCell.appendChild(relLabel);

    // Add a button to see more info
    let relBtn = document.createElement('button');
    relBtn.setAttribute('id', `state${id}-ReligionBtn`);
    relBtn.innerText = 'More';
    relBtn.addEventListener('click', showReligionData);
    relCell.appendChild(relBtn);

    // Add the religious data cell
    tr.appendChild(relCell);

    // Create an ancestry data cell
    let ancCell = document.createElement('td');
    ancCell.setAttribute('id', `state${id}-Ancestry`);

    // Add the label (this is the text value)
    let ancLabel = document.createElement('span');
    ancLabel.setAttribute('id', `state${id}-AncestryLabel`);
    ancLabel.setAttribute('class', 'ancestryLabel');
    ancCell.appendChild(ancLabel);

    // Add a button to see more info
    let ancBtn = document.createElement('button');
    ancBtn.setAttribute('id', `state${id}-AncestryBtn`);
    ancBtn.innerText = 'More';
    ancBtn.addEventListener('click', showAncestryData);
    ancCell.appendChild(ancBtn);

    // Add the ancestry data cell
    tr.appendChild(ancCell);

    // Add election data cells
    let demCell = document.createElement('td');
    demCell.setAttribute('id', `state${id}-Democratic`);
    tr.appendChild(demCell);

    let gopCell = document.createElement('td');
    gopCell.setAttribute('id', `state${id}-Republican`);
    tr.appendChild(gopCell);

    let otherCell = document.createElement('td');
    otherCell.setAttribute('id', `state${id}-Other`);
    tr.appendChild(otherCell);

    // Add the row to the table
    document.getElementById('statesTable').appendChild(tr);

    // Update the labels
    updateLabels(id);
}

// Add a new state
function newState(name=null, color=null, locked=false) {
    // Get the name from the user
    if (name === null) {
        var name = prompt('Name:');
    }

    if (name && name.trim() !== '') {
        name = name.trim();

        //Get the color
        if (color === null) {
            color = prompt('Color (leave blank for random):');

            // Get a random color
            if (color === '') {
                color = randomColor();
            }
        }

        if (color) {
            // Add it to the list
            states.push({
                'name': name,
                'color': color,
                'counties': [],
                'locked': locked,
                'population': 0,
                'White': 0,
                'Black': 0,
                'Latino': 0,
                'American Indian': 0,
                'Asian': 0,
                'Pacific': 0,
                'Baptist': 0,
                'Catholic': 0,
                'Mormon': 0,
                'Lutheran': 0,
                'Methodist': 0,
                'Pentecostal': 0,
                'Presbyterian/Reformed': 0,
                'Restorationist': 0,
                'Anglican': 0,
                'Non-denominational': 0,
                'Other Christian': 0,
                'Non-Christian': 0,
                'Other/Unknown Protestant': 0,
                'Total Protestant': 0,
                'Mainline & Liberal': 0,
                'Evangelical & Conservative': 0,
                'Historically Black': 0,
                'Protestant Group Unknown/Mixed': 0,
                'Religion Total': 0,
                'American': 0,
                'Anglo': 0,
                'Celtic': 0,
                'Finnish or Estonian': 0,
                'French or Cajun': 0,
                'German or Austrian': 0,
                'Italian': 0,
                'Other Germanic': 0,
                'Other/Generic European': 0,
                'Scandinavian': 0,
                'Slavic': 0,
                'Ancestry Total': 0,
                'Election Results': {
                    'pres2016': {
                        'Clinton': 0,
                        'Trump': 0,
                        'Other': 0,
                        'Total': 0
                    },
                    'pres2020': {
                        'Biden': 0,
                        'Trump': 0,
                        'Other': 0,
                        'Total': 0
                    }
                }
            });

            // Add it to the table
            addState(name, states.length - 1);
        }
    }
}

// Get a random hex color
function randomColor() {
    var hexCode = '#';

    // Get six random characters
    for (i = 0; i < 6; i++) {
        hexCode = hexCode.concat(hex[Math.floor(Math.random() * hex.length)]);
    }

    return hexCode;
}

// Show information on the data map
function showData(data) {
    // Show which data is selected in the dropdown
    document.getElementById('dropdownLabel').innerText = dataLabels[data];

    // Hide all of the keys first
    let keys = document.getElementsByClassName('key');

    for (let key of keys) {
        key.style.display = 'none';
    }

    // Hide the complex religion key
    document.getElementById('religionComplexKey').style.display = 'none';

    // Hide the ancestry key
    document.getElementById('ancestryKey').style.display = 'none';

    // Show the right key(s)
    if (data == 'race') {
        for (let r of ['White', 'Black', 'Latino', 'American_Indian', 'Asian', 'Pacific']) {
            document.getElementById(`key-${r}`).style.display = 'block';
        }
    } else if (['White', 'Black', 'Latino', 'American_Indian', 'Asian', 'Pacific'].indexOf(data) >= 0) {
        document.getElementById(`key-${data}`).style.display = 'block';
    } else if (data == 'Religion-complex') {
        document.getElementById('religionComplexKey').style.display = 'block';
    } else if (data == 'Religion-simple') {
        for (let r of ['Catholic', 'Mormon', 'Other_Christian', 'Non-Christian', 'Total_Protestant']) {
            document.getElementById(`key-RS-${r}`).style.display = 'block';
        }
    } else if (data == 'Protestant_Groups') {
        for (let r of ['Mainline', 'Evangelical', 'Historically_Black', 'Unknown_Mixed', 'Tie']) {
            document.getElementById(`key-${r}`).style.display = 'block';
        }
    } else if (['Catholic', 'Mormon', 'Other_Christian', 'Non-Christian', 'Total_Protestant'].indexOf(data) >= 0) {
        document.getElementById(`key-RS-${data}`).style.display = 'block';
    } else if (['Baptist', 'Lutheran', 'Methodist', 'Pentecostal', 'Presbyterian/Reformed', 'Restorationist', 'Anglican', 'Non-denominational', 'Other/Unknown Protestant'].indexOf(data) >= 0) {
        document.getElementById(`key-FR-${data.replace(new RegExp(' ', 'g'), '_').replace(new RegExp('/', 'g'), '_')}`).style.display = 'block';
    } else if (data == 'Ancestry') {
        document.getElementById('ancestryKey').style.display = 'block';
    } else if (['American', 'Anglo', 'Celtic', 'Finnish or Estonian', 'French or Cajun', 'German or Austrian', 'Italian', 'Other Germanic', 'Other/Generic European', 'Scandinavian', 'Slavic'].indexOf(data) >= 0) {
        document.getElementById(`key-FA-${data.replace(new RegExp(' ', 'g'), '_').replace(new RegExp('/', 'g'), '_')}`).style.display = 'block';
    } else if (['presTotal', 'pres2016', 'pres2020'].indexOf(data) >= 0) {
        document.getElementById('key-Democratic').style.display = 'block';
        document.getElementById('key-Republican').style.display = 'block';
    } else if (['demTotal', 'clinton2016', 'biden2020'].indexOf(data) >= 0) {
        document.getElementById('key-Democratic').style.display = 'block';
    } else if (['gopTotal', 'trump2016', 'trump2020'].indexOf(data) >= 0) {
        document.getElementById('key-Republican').style.display = 'block';
    } else if (['otherTotal', 'other2016', 'other2020'].indexOf(data) >= 0) {
        document.getElementById('key-Other').style.display = 'block';
    }

    // Go through each county
    var paths = document.getElementById('data-map').contentDocument.getElementsByTagName('path');
    for (let i = 0; i < paths.length; i++) {
        if (paths[i].id == '_State_borders' || paths[i].id == 'background') {
            // Skip it if it's not a county
            continue;
        } else {
            if (data == 'race') {
                // Get the county's racial data
                let co_data = race[paths[i].id];

                // Get percentages
                let percentages = {};
                for (let [key, value] of Object.entries(co_data)) {
                    if (key == 'Population') {
                        // Skip the population data
                        continue;
                    }

                    // Get the percentage and add it to the dictionary
                    percentages[key] = value / co_data['Population'];
                }

                // Find the largest value
                let largest = 'n/a';
                let largestPerc = 0;
                for (let [key, value] of Object.entries(percentages)) {
                    if (value > largestPerc) {
                        largest = key;
                        largestPerc = value;
                    } else if (value == largestPerc) {
                        largest = 'Tie';
                    }
                }

                // Get the color to display
                if (largest == 'tie') {
                    paths[i].style.fill = colors['tie'][Math.floor(largestPerc * 100 / 5)];
                } else {
                    paths[i].style.fill = colors['race'][largest][Math.floor(largestPerc * 100 / 5)];
                }
            } else if (['White', 'Black', 'Latino', 'American_Indian', 'Asian', 'Pacific'].indexOf(data) >= 0) {
                // Replace underscores with spaces
                let key = data.replace(new RegExp('_', 'g'), ' ');

                // Get the county's racial data
                let co_data = race[paths[i].id][key] / race[paths[i].id]['Population'];

                // Set the color
                paths[i].style.fill = colors['race'][key][Math.floor(co_data * 100 / 5)];
            } else if (data == 'Religion-complex') {
                // Get the county's religious data
                let co_data = religion[paths[i].id];

                // Find the largest value
                let largest = 'n/a';
                let largestNum = 0;
                for (let [key, value] of Object.entries(co_data)) {
                    // Quit going when we get to the total protestant number
                    if (key == 'Total Protestant') {
                        break;
                    }

                    if (Number(value) > largestNum) {
                        largest = key;
                        largestNum = Number(value);
                    } else if (Number(value) == largestNum) {
                        largest = 'Tie';
                    }
                }

                // If the largestNum is 0, there's no data
                if (largestNum == 0) {
                    paths[i].style.fill = colors['No Data'];
                } else {
                    // Fill the color
                    paths[i].style.fill = colors['religion']['complex'][largest];
                }
            } else if (data == 'Religion-simple') {
                // Get the county's religious data
                let co_data = religion[paths[i].id];

                // Get percentages
                let percentages = {};
                for (let [key, value] of Object.entries(co_data)) {
                    if (key == 'Total') {
                        // Skip the total data
                        continue;
                    }

                    // Get the percentage and add it to the dictionary
                    percentages[key] = value / co_data['Total'];
                }

                // Find the largest value
                let largest = 'n/a';
                let largestPerc = 0;
                for (let [key, value] of Object.entries(percentages)) {
                    // Only measure certain groups
                    if (['Catholic', 'Mormon', 'Other Christian', 'Non-Christian', 'Total Protestant'].indexOf(key) >= 0) {
                        if (value > largestPerc) {
                            largest = key;
                            largestPerc = value;
                        } else if (value == largestPerc) {
                            largest = 'Tie';
                        }
                    }
                }

                // If the largestNum is 0, there's no data, so set largest to No Data
                if (largestPerc == 0) {
                    largest = 'No Data';
                }

                // Get the color to display
                if (largest == 'Tie') {
                    paths[i].style.fill = colors['Tie'][Math.floor(largestPerc * 100 / 5)];
                } else if (largest == 'No Data') {
                    paths[i].style.fill = colors['No Data'];
                } else {
                    paths[i].style.fill = colors['religion']['simple'][largest][Math.floor(largestPerc * 100 / 5)];
                }
            } else if (data == 'Protestant_Groups') {
                // Get the county's religious data
                let co_data = religion[paths[i].id];

                // Get percentages
                let percentages = {};
                for (let [key, value] of Object.entries(co_data)) {
                    if (key == 'Total') {
                        // Skip the total data
                        continue;
                    }

                    // Get the percentage and add it to the dictionary
                    percentages[key] = value / co_data['Total'];
                }

                // Find the largest value
                let largest = 'n/a';
                let largestPerc = 0;
                for (let [key, value] of Object.entries(percentages)) {
                    // Only measure certain groups
                    if (['Mainline & Liberal', 'Evangelical & Conservative', 'Historically Black', 'Protestant Group Unknown/Mixed'].indexOf(key) >= 0) {
                        if (value > largestPerc) {
                            largest = key;
                            largestPerc = value;
                        } else if (value == largestPerc) {
                            largest = 'Tie';
                        }
                    }
                }

                // If the largestNum is 0, there's no data, so set largest to No Data
                if (largestPerc == 0) {
                    largest = 'No Data';
                }

                // Fix IDs
                if (largest == 'Mainline & Liberal') {
                    largest = 'Mainline';
                } else if (largest == 'Evangelical & Conservative') {
                    largest = 'Evangelical';
                } else if (largest == 'Protestant Group Unknown/Mixed') {
                    largest = 'Unknown_Mixed';
                }

                // Get the color to display
                if (largest == 'Tie') {
                    paths[i].style.fill = colors['Tie'][Math.floor(largestPerc * 100 / 5)];
                } else if (largest == 'No Data') {
                    paths[i].style.fill = colors['No Data'];
                } else {
                    paths[i].style.fill = colors['religion']['Protestant Groups'][largest][Math.floor(largestPerc * 100 / 5)];
                }
            } else if (['Catholic', 'Mormon', 'Other_Christian', 'Non-Christian', 'Total_Protestant'].indexOf(data) >= 0) {
                // Replace underscores with spaces
                let key = data.replace(new RegExp('_', 'g'), ' ');

                // Get the county's religious data
                let co_data = religion[paths[i].id][key];

                // Set the color
                if (religion[paths[i].id]['Total'] == 0) {
                    paths[i].style.fill = colors['No Data'];
                } else {
                    paths[i].style.fill = colors['religion']['simple'][key][Math.floor(co_data / religion[paths[i].id]['Total'] * 100 / 5)];
                }
            } else if (['Baptist', 'Lutheran', 'Methodist', 'Pentecostal', 'Presbyterian/Reformed', 'Restorationist', 'Anglican', 'Non-denominational', 'Other/Unknown Protestant'].indexOf(data) >= 0) {
                // Get the county's religious data
                let co_data = religion[paths[i].id][data];

                // Set the color
                if (religion[paths[i].id]['Total'] == 0) {
                    paths[i].style.fill = colors['No Data'];
                } else {
                    paths[i].style.fill = colors['religion']['full'][data][Math.floor(co_data / religion[paths[i].id]['Total'] * 100 / 5)];
                }
            } else if (data == 'Ancestry') {
                // Get the county's ancestry data
                let co_data = ancestry[paths[i].id];

                // Find the largest value
                let largest = 'n/a';
                let largestNum = 0;
                for (let [key, value] of Object.entries(co_data)) {
                    // Skip the total number
                    if (key == 'Total') {
                        break;
                    }

                    if (Number(value) > largestNum) {
                        largest = key;
                        largestNum = Number(value);
                    } else if (Number(value) == largestNum) {
                        largest = 'Tie';
                    }
                }

                // If the largestNum is 0, there's no data
                if (largestNum == 0) {
                    paths[i].style.fill = colors['No Data'];
                } else {
                    // Fill the color
                    paths[i].style.fill = colors['Ancestry']['largest'][largest];
                }
            } else if (['American', 'Anglo', 'Celtic', 'Finnish or Estonian', 'French or Cajun', 'German or Austrian', 'Italian', 'Other Germanic', 'Other/Generic European', 'Scandinavian', 'Slavic'].indexOf(data) >= 0) {
                // Get the county's ancestry data
                let co_data = ancestry[paths[i].id][data];

                // Set the color
                if (ancestry[paths[i].id]['Total'] == 0) {
                    paths[i].style.fill = colors['No Data'];
                } else {
                    paths[i].style.fill = colors['Ancestry']['full'][data][Math.floor(co_data / ancestry[paths[i].id]['Total'] * 100 / 5)];
                }
            } else if (['presTotal', 'pres2016', 'pres2020'].indexOf(data) >= 0) {
                // Get the county's election data
                let eData = {
                    'pres2016': pres2016[paths[i].id],
                    'pres2020': pres2020[paths[i].id]
                };

                // Get which data to use
                if (data == 'presTotal') {
                    var eTotal = Number(eData['pres2016']['Total']) + Number(eData['pres2020']['Total']);
                    var demPerc = (Number(eData['pres2016']['Clinton']) + Number(eData['pres2020']['Biden'])) / eTotal * 100;
                    var gopPerc = (Number(eData['pres2016']['Trump']) + Number(eData['pres2020']['Trump'])) / eTotal * 100;
                    var otherPerc = (Number(eData['pres2016']['Other']) + Number(eData['pres2020']['Other'])) / eTotal * 100;
                } else if (data == 'pres2016') {
                    var eTotal = Number(eData['pres2016']['Total'])
                    var demPerc = Number(eData['pres2016']['Clinton']) / eTotal * 100;
                    var gopPerc = Number(eData['pres2016']['Trump']) / eTotal * 100;
                    var otherPerc = Number(eData['pres2016']['Other']) / eTotal * 100;
                } else if (data == 'pres2020') {
                    var eTotal = Number(eData['pres2020']['Total']);
                    var demPerc = Number(eData['pres2020']['Biden']) / eTotal * 100;
                    var gopPerc = Number(eData['pres2020']['Trump']) / eTotal * 100;
                    var otherPerc = Number(eData['pres2020']['Other']) / eTotal * 100;
                }

                // Set the color
                if (demPerc > gopPerc && demPerc > otherPerc) {
                    paths[i].style.fill = colors['elections']['Democratic'][Math.floor(demPerc / 5)];
                } else if (gopPerc > demPerc && gopPerc > otherPerc) {
                    paths[i].style.fill = colors['elections']['Republican'][Math.floor(gopPerc / 5)];
                } else if (otherPerc > demPerc && otherPerc > gopPerc) {
                    paths[i].style.fill = colors['elections']['Other'][Math.floor(otherPerc / 5)];
                } else {
                    paths[i].style.fill = colors['Tie'][Math.floor(Math.max(demPerc, gopPerc, otherPerc) / 5)];
                }
            } else if (['demTotal', 'clinton2016', 'biden2020', 'gopTotal', 'trump2016', 'trump2020', 'otherTotal', 'other2016', 'other2020'].indexOf(data) >= 0) {
                // Get the county's election data
                let eData = {
                    'pres2016': pres2016[paths[i].id],
                    'pres2020': pres2020[paths[i].id]
                };

                // Get the total to use
                if (['demTotal', 'gopTotal', 'otherTotal'].indexOf(data) >= 0) {
                    var eTotal = Number(eData['pres2016']['Total']) + Number(eData['pres2020']['Total']);
                } else if (['clinton2016', 'trump2016', 'other2016'].indexOf(data) >= 0) {
                    var eTotal = Number(eData['pres2016']['Total']);
                } else if (['biden2020', 'trump2020', 'other2020'].indexOf(data) >= 0) {
                    var eTotal = Number(eData['pres2020']['Total']);
                }

                // Set the color
                if (['demTotal', 'clinton2016', 'biden2020'].indexOf(data) >= 0) {
                    if (data == 'demTotal') {
                        var demPerc = (Number(eData['pres2016']['Clinton']) + Number(eData['pres2020']['Biden'])) / eTotal * 100;
                    } else if (data == 'clinton2016') {
                        var demPerc = Number(eData['pres2016']['Clinton']) / eTotal * 100;
                    } else {
                        var demPerc = Number(eData['pres2020']['Biden']) / eTotal * 100;
                    }
                    paths[i].style.fill = colors['elections']['Democratic'][Math.floor(demPerc / 5)];
                } else if (['gopTotal', 'trump2016', 'trump2020'].indexOf(data) >= 0) {
                    if (data == 'gopTotal') {
                        var gopPerc = (Number(eData['pres2016']['Trump']) + Number(eData['pres2020']['Trump'])) / eTotal * 100;
                    } else if (data == 'trump2016') {
                        var gopPerc = Number(eData['pres2016']['Trump']) / eTotal * 100;
                    } else {
                        var gopPerc = Number(eData['pres2020']['Trump']) / eTotal * 100;
                    }
                    paths[i].style.fill = colors['elections']['Republican'][Math.floor(gopPerc / 5)];
                } else if (['otherTotal', 'other2016', 'other2020'].indexOf(data) >= 0) {
                    if (data == 'otherTotal') {
                        var demPerc = (Number(eData['pres2016']['Other']) + Number(eData['pres2020']['Other'])) / eTotal * 100;
                    } else if (data == 'other2016') {
                        var demPerc = Number(eData['pres2016']['Other']) / eTotal * 100;
                    } else {
                        var demPerc = Number(eData['pres2020']['Other']) / eTotal * 100;
                    }
                    paths[i].style.fill = colors['elections']['Other'][Math.floor(demPerc / 5)];
                }
            }
        }
    }
}

// Zoom the map
function zoom(direction) {
    if (direction == 'in') {
        // Zoom in
        scale *= 1.1;
    } else if (direction == 'out') {
        // Zoom out
        scale /= 1.1;
    }

    // Update the transform
    document.getElementById('county-map').style.transform = `scale(${scale}) translate(${tx}px, ${ty}px)`;
    document.getElementById('data-map').style.transform = `scale(${scale}) translate(${tx}px, ${ty}px)`;
}

// Pan the map
function pan(direction) {
    if (direction == 'up') {
        ty += 10;
    } else if (direction == 'down') {
        ty -= 10;
    } else if (direction == 'left') {
        tx += 10;
    } else if (direction == 'right') {
        tx -= 10;
    }

    // Update the transform
    document.getElementById('county-map').style.transform = `scale(${scale}) translate(${tx}px, ${ty}px)`;
    document.getElementById('data-map').style.transform = `scale(${scale}) translate(${tx}px, ${ty}px)`;
}

// Reset the map's zoom and position
function resetMap() {
    scale = 1;
    tx = 0;
    ty = 0;

    // Update the transform
    document.getElementById('county-map').style.transform = `scale(${scale}) translate(${tx}px, ${ty}px)`;
    document.getElementById('data-map').style.transform = `scale(${scale}) translate(${tx}px, ${ty}px)`;
}

// Show county data when hovering
function showCountyData(obj) {
    document.getElementById('coData-name').innerText = obj.id;
    document.getElementById('coData-pop').innerText = Number(race[obj.id]['Population']).toLocaleString('en-US');

    for (let i = 0; i < labels.length; i++) {
        // Get the data
        let d = race[obj.id][labels[i]];

        // Get a percentage
        let percentage = d / race[obj.id]['Population'] * 100;

        // Round it
        let rounded = percentage.toFixed(2);

        // Show it
        let label = document.getElementById(`coData-${labels[i].replace(new RegExp(' ', 'g'), '_')}`);
        if (label) {
            label.innerText = `${rounded}%`;
        }
    }

    // Show the religion label
    // Get percentages
    let rPercentages = {};
    for (let [key, value] of Object.entries(religion[obj.id])) {
        // Get the percentage and add it to the dictionary
        rPercentages[key] = value / religion[obj.id]['Total'] * 100;
    }

    // Find the largest value
    let rLargest = 'n/a';
    let rLargestPerc = 0;
    for (let [key, value] of Object.entries(rPercentages)) {
        if (['Total Protestant', 'Mainline & Liberal', 'Evangelical & Conservative', 'Historically Black', 'Protestant Group Unknown/Mixed', 'Total Christian', 'Total'].indexOf(key) >= 0) {
            continue;
        }

        if (value > rLargestPerc) {
            rLargest = key;
            rLargestPerc = value;
        } else if (value == rLargestPerc) {
            largest = 'Tie';
        }
    }

    // If the largest is 0%, there's no data
    if (rLargestPerc == 0) {
        document.getElementById('coData-ReligionLabel').innerText = 'No Data';
    } else {
        // Show it
        document.getElementById('coData-ReligionLabel').innerText = `${rLargestPerc.toFixed(2)}% ${rLargest}`;
    }

    // Show the ancestry label
    // Get percentages
    let aPercentages = {};
    for (let [key, value] of Object.entries(ancestry[obj.id])) {
        // Get the percentage and add it to the dictionary
        aPercentages[key] = value / ancestry[obj.id]['Total'] * 100;
    }

    // Find the largest value
    let aLargest = 'n/a';
    let aLargestPerc = 0;
    for (let [key, value] of Object.entries(aPercentages)) {
        if (key == 'Total') {
            continue;
        }

        if (value > aLargestPerc) {
            aLargest = key;
            aLargestPerc = value;
        } else if (value == aLargestPerc) {
            largest = 'Tie';
        }
    }

    // If the largest is 0%, there's no data
    if (aLargestPerc == 0) {
        document.getElementById('coData-AncestryLabel').innerText = 'No Data';
    } else {
        // Show it
        document.getElementById('coData-AncestryLabel').innerText = `${aLargestPerc.toFixed(2)}% ${aLargest}`;
    }

    // Get the election results
    let eData = {
        'pres2016': pres2016[obj.id],
        'pres2020': pres2020[obj.id]
    };
    let eTotal = Number(eData['pres2016']['Total']) + Number(eData['pres2020']['Total']);
    let demPerc = (Number(eData['pres2016']['Clinton']) + Number(eData['pres2020']['Biden'])) / eTotal * 100;
    let gopPerc = (Number(eData['pres2016']['Trump']) + Number(eData['pres2020']['Trump'])) / eTotal * 100;
    let otherPerc = (Number(eData['pres2016']['Other']) + Number(eData['pres2020']['Other'])) / eTotal * 100;
    document.getElementById('coData-Democratic').innerText = `${demPerc.toFixed(2)}%`;
    document.getElementById('coData-Republican').innerText = `${gopPerc.toFixed(2)}%`;
    document.getElementById('coData-Other').innerText = `${otherPerc.toFixed(2)}%`;
}

// Show/hide the data dropdown
function toggleDropdown() {
    if (document.getElementById('dropdownContent').classList.contains('show')) {
        // If it's open, close all of the 2nd layer items
        let elems = document.getElementsByClassName('dropdownSection');
        for (let i = 0; i < elems.length; i++) {
            elems[i].classList.remove('show');
        }

        // Close the 2nd layer
        document.getElementById('layer2').classList.remove('show');
    }

    // Toggle the dropdown
    document.getElementById('dropdownContent').classList.toggle('show');

    // Open/close the symbol so it flips upside down
    document.getElementById('dropdownSymbol').classList.toggle('open');
}

// Show/hide layer 2
function toggleL2(section) {
    if (document.getElementById(`dropdown${section}`).classList.contains('show')) {
        // Hide the section
        document.getElementById(`dropdown${section}`).classList.remove('show');
        document.getElementById('layer2').classList.remove('show');
    } else {
        // Hide all the other sections
        let sections = document.getElementsByClassName('dropdownSection');

        for (let i = 0; i < sections.length; i++) {
            sections[i].classList.remove('show');
        }

        // Show the section
        document.getElementById(`dropdown${section}`).classList.add('show');
        document.getElementById('layer2').classList.add('show');
    }
}

// Show/hide the custom House seats input
function hsinput() {
    if (document.getElementById('houseSeats').value == 'Custom') {
        document.getElementById('hsCustom').style.display = 'inline-block';
    } else {
        document.getElementById('hsCustom').style.display = 'none';
    }
}

// Apportion House seats to each state
function apportion() {
    // Don't run it if there's less than 1 state
    if (states.length < 1) {
        return;
    }

    // The total population to apportion (excludes counties not in a state)
    var population = 0;

    // The population of the smallest state
    var smallest = Infinity;

    for (let i = 0; i < states.length; i++) {
        // Skip the state if it's deleted
        if (states[i]['name'] == 'DELETED') {
            continue;
        }

        // Add the population to the total
        population += states[i]['population'];

        // Set smallest
        if (states[i]['population'] < smallest) {
            smallest = states[i]['population'];
        }
    }

    // Don't run if the total population is 0
    if (population == 0) {
        return;
    }

    // Get the total number of House seats
    var houseSeats = document.getElementById('houseSeats').value;

    if (houseSeats == 'Custom') {
        var hs = Number(document.getElementById('hsCustom').value);
    } else if (houseSeats == 'Wyoming') {
        var hs = Math.round(population / smallest);
    } else if (houseSeats == 'Cube_Root') {
        var hs = Math.round(Math.cbrt(population));
    }

    // Get the apportionment method
    var method = document.getElementById('appMethod').value;

    // Get the number of Senate seats per state
    var senate = Number(document.getElementById('senSeats').value);

    // Keeps track of state information
    var stateInfo = [];

    // Used to check if the number of seats apportioned actually equals the desired number of seats
    var seatsApportioned = 0;

    // Apportion the seats
    if (['Huntington-Hill', 'Webster', 'Hamilton'].indexOf(method) >= 0) {
        // Set the initial divisor to the population divided by the total number of seats
        let divisor = population / hs;

        if (['Huntington-Hill', 'Webster'].indexOf(method) >= 0) {
            while (seatsApportioned != hs) {
                // Reset the count of seats apportioned
                seatsApportioned = 0;

                // Go through each state
                for (let i = 0; i < states.length; i++) {
                    let state = states[i];

                    if (state['name'] != 'DELETED') {
                        // Get the quotient
                        let quotient = state['population'] / divisor;

                        // Get the initial allocation of seats
                        let seats = Math.floor(quotient);

                        if (method == 'Webster') {
                            // Give the state an extra seat if the decimal is 0.5 or higher
                            if ((quotient - seats) >= 0.5) {
                                seats++;
                            }
                        } else {
                            // Get the upper quotient
                            let upper = Math.ceil(quotient);

                            // Get the geometric mean
                            let geoMean = Math.sqrt(seats * upper);

                            // Give the state an extra seat if its quotient is higher than its geometric mean
                            if (quotient > geoMean) {
                                seats++;
                            }
                        }

                        // Keep track of the number of seats apportioned
                        seatsApportioned += seats;

                        // Add the state to the info dict
                        stateInfo.push({
                            'seats': seats
                        });
                    } else {
                        stateInfo.push('DELETED');
                    }
                }

                // Change the divisor if the number of seats is incorrect
                if (seatsApportioned > hs) {
                    divisor++;
                } else if (seatsApportioned < hs) {
                    divisor--;
                }
            }
        } else {
            // Hamilton method
            // Go through each state and get the initial allocation of seats
            for (let i = 0; i < states.length; i++) {
                let state = states[i];

                if (state['name'] != 'DELETED') {
                    // Get the quotient
                    let quotient = state['population'] / divisor;

                    // Get the initial allocation of seats
                    let seats = Math.floor(quotient);

                    // Keep track of the number of seats apportioned
                    seatsApportioned += seats;

                    // Add the state to the info dict
                    stateInfo.push({
                        'decimal': quotient - seats,
                        'seats': seats
                    });
                } else {
                    stateInfo.push('DELETED');
                }
            }

            // Allocate the leftover seats in the order of the decimal
            while (seatsApportioned != hs) {
                // Find the state(s) with the largest decimal
                let largest = [];
                let largestDec = -1;

                for (let i = 0; i < stateInfo.length; i++) {
                    let state = stateInfo[i];

                    if (state == 'DELETED') {
                        continue;
                    }

                    if (state['decimal'] > largestDec) {
                        largest = [i];
                        largestDec = state['decimal'];
                    } else if (state['decimal'] == largestDec) {
                        largest.push(i);
                    }
                }

                // Give the largest an extra seat
                for (let i = 0; i < largest.length; i++) {
                    stateInfo[largest[i]]['seats']++;
                    seatsApportioned++;
                }
            }
        }
    } else if (method == 'Jefferson') {
        // Give every state at least 1 seat
        for (let i = 0; i < states.length; i++) {
            let state = states[i];

            if (state['name'] != 'DELETED') {
                // Add the state to the info dict with 1 seat
                stateInfo.push({
                    'seats': 1,
                    'quotient': state['population'] / 2 
                });

                // Keep track of how many seats are apportioned
                seatsApportioned++;
            } else {
                stateInfo.push('DELETED');
            }
        }

        // Allocate the rest
        while (seatsApportioned != seats) {
            // Find the state(s) with the largest quotient
            let largest = [];
            let largestQ = -1;

            for (let i = 0; i < states.length; i++) {
                let state = states[i];

                if (state['name'] == 'DELETED') {
                    continue;
                }

                if (stateInfo[i]['quotient'] > largestQ) {
                    largest = [i];
                    largestQ = stateInfo[i]['quotient'];
                } else if (stateInfo[i]['quotient'] == largestQ) {
                    largest.push(i);
                }
            }

            // Give the state(s) another seat and recalculate their quotient
            for (let i = 0; i < largest.length; i++) {
                let state = stateInfo[largest[i]];

                if (state == 'DELETED') {
                    return;
                }

                state['seats']++;
                seatsApportioned++;
                state['quotient'] = states[largest[i]]['population'] / (state['seats'] + 1);
            }
        }
    }

    // Remove the previous table, if it exists
    if (document.getElementById('appTable') != null) {
        document.getElementById('appTable').remove();
    }

    // Create a table
    var table = document.createElement('table');
    table.setAttribute('id', 'appTable');

    // Add a header row
    var r1 = document.createElement('tr');

    var th1 = document.createElement('th');
    th1.innerText = 'State';
    r1.appendChild(th1);

    var th2 = document.createElement('th');
    th2.innerText = 'House Seats';
    r1.appendChild(th2);

    var th3 = document.createElement('th');
    th3.innerText = 'Electoral Votes';
    r1.appendChild(th3);

    table.appendChild(r1);

    // Count the total number of senate seats
    var totalSenate = 0;

    // Add a row for each state
    for (let i = 0; i < states.length; i++) {
        if (states[i]['name'] == 'DELETED') {
            continue;
        }

        let row = document.createElement('tr');

        let nameCell = document.createElement('td');
        nameCell.innerText = states[i]['name'];
        row.appendChild(nameCell);

        // Total seats
        let seatsCell = document.createElement('td');
        seatsCell.innerText = stateInfo[i]['seats'];
        row.appendChild(seatsCell);

        // Electoral votes
        let evCell = document.createElement('td');
        evCell.innerText = stateInfo[i]['seats'] + senate;
        row.appendChild(evCell);

        table.appendChild(row);

        // Add to the Senate count
        totalSenate += senate;
    }

    // Add a total row
    var totalRow = document.createElement('tr');

    var totalName = document.createElement('td');
    totalName.innerText = 'Total';
    totalRow.appendChild(totalName);

    var totalSeats = document.createElement('td');
    totalSeats.innerText = hs;
    totalRow.appendChild(totalSeats);

    var totalEVs = document.createElement('td');
    totalEVs.innerText = hs + totalSenate;
    totalRow.appendChild(totalEVs);

    table.appendChild(totalRow);

    // Add the table to the page
    document.getElementById('column-left').appendChild(table);
}

// Download a file
function downloadFile(file, filename, isurl=false) {
    // Create a url
    if (isurl) {
        var url = file;
    } else {
        var url = URL.createObjectURL(file);
    }

    // Create an invisible anchor
    var a = document.createElement('a');
    a.setAttribute('id', 'saveLink');
    a.href = url;
    a.download = filename;
    a.style.display = 'none';
    document.body.appendChild(a);

    // Click on the link
    document.getElementById('saveLink').click();

    // Revoke the URL and delete the anchor
    URL.revokeObjectURL(url);
    document.getElementById('saveLink').remove();
}

// Save the map as a json file
function save() {
    // Create a dictionary of states to save
    var mapData = {
        'AZ': azType, // Which AZ map it uses (old or new)
        'version': version,
        'states': {}
    };

    for (let i = 0; i < states.length; i++) {
        if (states[i]['name'] != 'DELETED') {
            mapData['states'][states[i]['name']] = {
                'counties': states[i]['counties'],
                'color': states[i]['color'],
                'locked': states[i]['locked']
            };
        }
    }

    // Convert the data to JSON
    var json = JSON.stringify(mapData);

    // Convert the dictionary to a file
    var file = new Blob([json], {'type': 'application/JSON'});

    // Download the file
    downloadFile(file, 'RSB_save.json');
}

// Save the map as an image
function saveImage() {
    // Get which file to save the image as
    var filetype = document.getElementById('filetype').value;

    // Get the SVG
    var svg = document.getElementById('county-map').contentDocument.querySelector('svg');

    // Convert the SVG to a file
    var str = (new XMLSerializer()).serializeToString(svg);
    var file = new Blob([str], {'type': 'image/svg+xml;charset=utf-8'});

    // Download the file
    if (filetype == 'SVG') {
        downloadFile(file, 'new_states.svg');
    } else if (filetype == 'PNG') {
        // Get the image size
        let size = document.getElementById('imgSize').value.split('x');

        // Create an image from the SVG
        let image = new Image();
        image.width = size[0];
        image.height = size[1];
        image.src = URL.createObjectURL(file);

        image.onload = function() {
            // Get the margin size based on the image size
            let margin = size[0] * 0.02;

            // Make an invisible canvas
            let canvas = document.createElement('canvas');
            canvas.setAttribute('id', 'exportCanvas');
            canvas.style.display = 'none';
            canvas.width = image.width + margin * 2;
            canvas.height = image.height + margin * 2;
            document.body.appendChild(canvas);

            // Get the context
            let ctx = document.getElementById('exportCanvas').getContext('2d');

            // Get the font size, line height, and box height
            let fontSize = Math.round(size[0] * 0.01);
            let lineHeight = Math.round(fontSize * 2);
            let boxSize = Math.round(fontSize * 1.5);

            // Get the number of columns (32 states per column max)
            let deleted = 0;

            for (let i = 0; i < states.length; i++) {
                if (states[i]['name'] == 'DELETED') {
                    deleted++;
                }
            }

            let columns = Math.ceil((states.length - deleted) / 32)

            // Get the column width
            ctx.font = `${fontSize}px Arial`;
            let columnWidth = 0;
            for (let i = 0; i < states.length; i++) {
                let measurement = ctx.measureText(states[i]['name']).width;
                if (measurement > columnWidth) {
                    columnWidth = measurement;
                }
            }
            // Add the box size, font size, and margin
            columnWidth += boxSize + fontSize + margin;

            // Get the size of the key
            let keySize = columnWidth * columns;

            // Add the keySize to the canvas width
            canvas.width += keySize;

            // Fill the background with white
            ctx.fillStyle = 'white';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // Draw the image to the canvas
            ctx.drawImage(image, margin, margin, image.width, image.height);
            URL.revokeObjectURL(image.src);

            // Draw the key
            let dCount = 0;
            for (let i = 0; i < states.length; i++) {
                if (states[i]['name'] == 'DELETED') {
                    dCount++;
                    continue;
                }

                // Find which column we're in
                let column = Math.floor((i - dCount) / 32);

                // Get the x and y
                let x = image.width + margin * 2 + column * columnWidth;
                let y = margin + lineHeight * (i - deleted - column * 32);

                // Draw a square with the state's color and a black border
                ctx.fillStyle = states[i]['color'];
                ctx.fillRect(x, y, boxSize, boxSize);
                ctx.rect(x, y, boxSize, boxSize);
                ctx.strokeStyle = 'black';
                ctx.strokeWidth = 1;
                ctx.stroke();

                // Write the state's name next to the square
                ctx.fillStyle = 'black';
                ctx.font = `${fontSize}px Arial`;
                ctx.textBaseline = 'middle';
                ctx.fillText(states[i]['name'], x + boxSize + fontSize, y + boxSize / 2 + 2);
            }

            // Download the image and destroy the canvas
            downloadFile(document.getElementById('exportCanvas').toDataURL('image/png'), 'new_states.png', true);
            document.getElementById('exportCanvas').remove();
        };
    }
}

// Check for key presses
function keydown(e) {
    e = e || window.event;

    if (e.key == '+' || e.key == '=') {
        // Zoom in with + or = (+ without holding shift)
        zoom('in');
    } else if (e.key == '-') {
        // Zoom out with -
        zoom('out');
    } else if (e.key == 'ArrowRight') {
        // Move right
        pan('right');
    } else if (e.key == 'ArrowLeft') {
        // Move left
        pan('left');
    } else if (e.key == 'ArrowUp') {
        // Move up
        pan('up');
    } else if (e.key == 'ArrowDown') {
        // Move down
        pan('down');
    } else if (e.key == 'n' || e.key == 'N') {
        // Add a new state
        newState();
    } else if (e.key == 'e' || e.key == 'E') {
        // Erase with the E key
        document.getElementById('erase-radio').click();
    }

    // Prevent scrolling with arrow keys
    if (['ArrowRight', 'ArrowLeft', 'ArrowUp', 'ArrowDown'].indexOf(e.key) >= 0) {
        e.preventDefault();
    }
}

window.onscroll = function() {
    if (typeof InstallTrigger == 'undefined') {
        // Check if strbg is touching str1
        var strbg = document.getElementById('strbg');
        var str1 = document.getElementById('str1');

        if (strbg.getBoundingClientRect().top == str1.getBoundingClientRect().top) {
            strbg.style.display = 'block';
        } else {
            strbg.style.display = 'none';
        }
    }
}

window.onload = function() {
    // Check for which AZ map to use
    var params = new URLSearchParams(document.location.search);
    azType = params.get('AZ');
    var azLink = document.getElementById('AZ-link');

    // Update the link
    if (azType == 'old') {
        // Update the link
        azLink.innerText = 'New AZ';
        azLink.href = '?AZ=new';
    } else {
        azLink.innerText = 'Old AZ';
        azLink.href = '?AZ=old';

        // Make sure azType defaults to new
        if (azType != 'new') {
            azType = 'new';
        }
    }

    // Add the map
    var mapObject = document.createElement('object');
    mapObject.setAttribute('type', 'image/svg+xml');
    mapObject.setAttribute('id', 'county-map');

    var dmObject = document.createElement('object');
    dmObject.setAttribute('type', 'image/svg+xml');
    dmObject.setAttribute('id', 'data-map');

    // Set the data based on which AZ to use
    if (azType == 'old') {
        mapObject.setAttribute('data', 'counties-old-AZ.svg');
        dmObject.setAttribute('data', 'counties-old-AZ.svg');
    } else {
        mapObject.setAttribute('data', 'counties.svg');
        dmObject.setAttribute('data', 'counties.svg');
    }

    mapObject.setAttribute('draggable', 'false');
    dmObject.setAttribute('draggable', 'false');

    // Add the maps to the page
    document.getElementById('controlMenu').before(mapObject);
    document.getElementById('dataMapCntnr').appendChild(dmObject);

    mapObject.onload = function() {
        // Remove strbg if on firefox
        if (typeof InstallTrigger !== 'undefined') {
            document.getElementById('strbgCntnr').remove();
        }

        // Listen for key down
        this.contentDocument.addEventListener('keydown', keydown);

        // Add draw functions to each county
        var paths = document.getElementById('county-map').contentDocument.getElementsByTagName('path');
        for (let i = 0; i < paths.length; i++) {
            if (paths[i].id == '_State_borders' || paths[i].id == 'background') {
                paths[i].onmousedown = function(e) {
                    if (e.shiftKey) {
                        e.preventDefault();
                    }
                }

                // Skip it if it's not a county
                continue;
            } else {
                // Draw the county when the mouse button first goes down
                paths[i].onmousedown = function(e) {
                    if (e.ctrlKey) {
                        draw(this, 'ctrl');
                    } else if (e.shiftKey) {
                        draw(this, 'shift');
                        e.preventDefault();
                    } else {
                        draw(this);
                    }
                }

                // Continue to draw as the mouse drags accross the screen, so long as the mouse button is still down
                paths[i].addEventListener('mouseover', function(e){
                    if (e.buttons == 1 || e.buttons == 3) {
                        if (e.ctrlKey) {
                            draw(this, 'ctrl');
                        } else if (e.shiftKey) {
                            draw(this, 'shift');
                            e.preventDefault();
                        } else {
                            draw(this);
                        }
                    }
                })
            }
        }
    };

    dmObject.onload = function() {
        // Listen for key down
        this.contentDocument.addEventListener('keydown', keydown);

        // Add draw and hover functions to the data map
        var dataPaths = document.getElementById('data-map').contentDocument.getElementsByTagName('path');
        for (let i = 0; i < dataPaths.length; i++) {
            if (dataPaths[i].id == '_State_borders' || dataPaths[i].id == 'background') {
                dataPaths[i].onmousedown = function(e) {
                    if (e.shiftKey) {
                        e.preventDefault();
                    }
                }

                // Skip it if it's not a county
                continue;
            } else {
                // Draw the county when the mouse button first goes down
                dataPaths[i].onmousedown = function(e) {
                    let co = document.getElementById('county-map').contentDocument.getElementById(this.id);
                    if (e.ctrlKey) {
                        draw(co, 'ctrl');
                    } else if (e.shiftKey) {
                        draw(co, 'shift');
                        e.preventDefault();
                    } else {
                        draw(co);
                    }
                }

                dataPaths[i].addEventListener('mouseover', function(e){
                    // Continue to draw as the mouse drags accross the screen, so long as the mouse button is still down
                    if (e.buttons == 1 || e.buttons == 3) {
                        let co = document.getElementById('county-map').contentDocument.getElementById(this.id);
                        if (e.ctrlKey) {
                            draw(co, 'ctrl');
                        } else if (e.shiftKey) {
                            draw(co, 'shift');
                            e.preventDefault();
                        } else {
                            draw(co);
                        }
                    }

                    // Show the data on the screen when hovering
                    showCountyData(this);
                });
            }
        }

        // Color in the data map (pres. total by default)
        showData('presTotal');
    }

    // Build the keys

    // Tie
    for (let i = 0; i < colors['Tie'].length; i++) {
        // Skip the last one
        if (i == colors['Tie'].length - 1) {
            break;
        }

        // Add a color block
        let block = document.createElement('div');
        block.setAttribute('class', 'colorBlock');
        block.style.background = colors['Tie'][i];

        // Add a % label
        let label = document.createElement('span');

        if (i == 0) {
            label.innerText = '<5%';
        } else if (i == colors['Tie'].length - 2) {
            label.innerText = '95%+';
        } else {
            label.innerText = `${i * 5}%`;
        }

        // Add the label to the block
        block.appendChild(label);

        // Add the block to the parent
        document.getElementById('key-Tie').appendChild(block);
    }

    // Race
    // Add each one
    for (let [key, value] of Object.entries(colors['race'])) {
        // Get the parent to add it to
        let parent = document.getElementById(`key-${key.replace(new RegExp(' ', 'g'), '_')}`);

        // Go through each color
        for (let i = 0; i < value.length; i++) {
            // Skip the last one
            if (i == value.length - 1) {
                break;
            }

            // Add a color block
            let block = document.createElement('div');
            block.setAttribute('class', 'colorBlock');
            block.style.background = value[i];

            // Add a % label
            let label = document.createElement('span');

            if (i == 0) {
                label.innerText = '<5%';
            } else if (i == value.length - 2) {
                label.innerText = '95%+';
            } else {
                label.innerText = `${i * 5}%`;
            }

            // Add the label to the block
            block.appendChild(label);

            // Add the block to the parent
            parent.appendChild(block);
        }
    }

    // Religion (Simple)
    for (let [key, value] of Object.entries(colors['religion']['simple'])) {
        // Get the parent to add it to
        let parent = document.getElementById(`key-RS-${key.replace(new RegExp(' ', 'g'), '_')}`);

        // Go through each color
        for (let i = 0; i < value.length; i++) {
            // Skip the last one
            if (i == value.length - 1) {
                break;
            }

            // Add a color block
            let block = document.createElement('div');
            block.setAttribute('class', 'colorBlock');
            block.style.background = value[i];

            // Add a % label
            let label = document.createElement('span');

            if (i == 0) {
                label.innerText = '<5%';
            } else if (i == value.length - 2) {
                label.innerText = '95%+';
            } else {
                label.innerText = `${i * 5}%`;
            }

            // Add the label to the block
            block.appendChild(label);

            // Add the block to the parent
            parent.appendChild(block);
        }
    }

    // Protestant Groups
    for (let [key, value] of Object.entries(colors['religion']['Protestant Groups'])) {
        // Get the parent to add it to
        let parent = document.getElementById(`key-${key.replace(new RegExp(' ', 'g'), '_')}`);

        // Go through each color
        for (let i = 0; i < value.length; i++) {
            // Skip the last one
            if (i == value.length - 1) {
                break;
            }

            // Add a color block
            let block = document.createElement('div');
            block.setAttribute('class', 'colorBlock');
            block.style.background = value[i];

            // Add a % label
            let label = document.createElement('span');

            if (i == 0) {
                label.innerText = '<5%';
            } else if (i == value.length - 2) {
                label.innerText = '95%+';
            } else {
                label.innerText = `${i * 5}%`;
            }

            // Add the label to the block
            block.appendChild(label);

            // Add the block to the parent
            parent.appendChild(block);
        }
    }

    // Full religious keys
    for (let [key, value] of Object.entries(colors['religion']['full'])) {
        // Fix the key
        let newkey = key.replace(new RegExp(' ', 'g'), '_').replace('/', '_');

        // Get the parent to add it to
        let parent = document.getElementById(`key-FR-${newkey}`);
        // Go through each color
        for (let i = 0; i < value.length; i++) {
            // Skip the last one
            if (i == value.length - 1) {
                break;
            }

            // Add a color block
            let block = document.createElement('div');
            block.setAttribute('class', 'colorBlock');
            block.style.background = value[i];

            // Add a % label
            let label = document.createElement('span');

            if (i == 0) {
                label.innerText = '<5%';
            } else if (i == value.length - 2) {
                label.innerText = '95%+';
            } else {
                label.innerText = `${i * 5}%`;
            }

            // Add the label to the block
            block.appendChild(label);

            // Add the block to the parent
            parent.appendChild(block);
        }
    }

    // Full ancestry keys
    for (let [key, value] of Object.entries(colors['Ancestry']['full'])) {
        // Fix the key
        let newkey = key.replace(new RegExp(' ', 'g'), '_').replace('/', '_');

        // Get the parent to add it to
        let parent = document.getElementById(`key-FA-${newkey}`);

        // Go through each color
        for (let i = 0; i < value.length; i++) {
            // Skip the last one
            if (i == value.length - 1) {
                break;
            }

            // Add a color block
            let block = document.createElement('div');
            block.setAttribute('class', 'colorBlock');
            block.style.background = value[i];

            // Add a % label
            let label = document.createElement('span');

            if (i == 0) {
                label.innerText = '<5%';
            } else if (i == value.length - 2) {
                label.innerText = '95%+';
            } else {
                label.innerText = `${i * 5}%`;
            }

            // Add the label to the block
            block.appendChild(label);

            // Add the block to the parent
            parent.appendChild(block);
        }
    }

    // Election results key
    for (let [key, value] of Object.entries(colors['elections'])) {
        // Get the parent to add it to
        let parent = document.getElementById(`key-${key}`);

        // Go through each color
        for (let i = 0; i < value.length; i++) {
            // Skip the last one
            if (i == value.length - 1) {
                break;
            }

            // Add a color block
            let block = document.createElement('div');
            block.setAttribute('class', 'colorBlock');
            block.style.background = value[i];

            // Add a % label
            let label = document.createElement('span');

            if (i == 0) {
                label.innerText = '<5%';
            } else if (i == value.length - 2) {
                label.innerText = '95%+';
            } else {
                label.innerText = `${i * 5}%`;
            }

            // Add the label to the block
            block.appendChild(label);

            // Add the block to the parent
            parent.appendChild(block);
        }
    }

    // Listen for key down
    document.addEventListener('keydown', keydown);

    // Load a previous save
    document.getElementById('fileUpload').addEventListener('change', async event => {
        // Get the file from the user
        var file = document.getElementById('fileUpload').files[0];

        if (!file) {
            return;
        }

        // Cover the screen while its loading
        let cover = document.createElement('div');
        cover.setAttribute('id', 'loadingCover');
        cover.innerText = 'Loading...';
        document.body.appendChild(cover);

        // Read the file
        var json = JSON.parse(await file.text());

        // Check if the AZ type is correct
        if (json['AZ'] != azType) {
            if (!confirm(`This save file was created with a different map of Arizona, which cannot be loaded unless you switch to the ${json['AZ']} AZ map. Do you wish to continue?`)) {
                cover.remove();
                return;
            }
        }

        // Go through each state
        for ([key, value] of Object.entries(json['states'])) {
            // Add the state
            newState(key, value['color'], value['locked']);

            // Get the new state's ID
            let id = states.length - 1;

            // Go through each county
            let counties = value['counties'];
            for (let i = 0; i < counties.length; i++) {
                // Find the county object
                let county = document.getElementById('county-map').contentDocument.getElementById(counties[i]);

                // Draw the county
                draw(county, false, id);
            }
        }

        // Remove the cover
        document.getElementById('loadingCover').remove();
    });

    // Disable the image size selection if set to SVG
    document.getElementById('filetype').addEventListener('input', function() {
        if (this.value == 'SVG') {
            document.getElementById('imgSize').disabled = true;
        } else {
            document.getElementById('imgSize').disabled = false;
        }
    });
}