

function bringWetherData(wetherData) {
    try {
        const transformdData = wetherData.data.map(forcast => {
            return {
                forcast: forcast.weather.description,
                time: forcast.valid_date
            };
        });
        return transformdData;
    } catch (e) {
        return [{}];
    }
}

function bringLocationData(locationData) {
    try {
        const transformdData = locationData.map(loca => {
            return {
                formatted_query: loca.display_name,
                latitude: loca.lat,
                longitude: loca.lon
            };
        });
        return transformdData;
    } catch (e) {
        return [{}];
    }
}


module.exports = {
    bringWetherData,
    bringLocationData };