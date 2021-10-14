export function getWeatherData() {
    return fetch('https://opendata-download-metfcst.smhi.se/api/category/pmp3g/version/2/geotype/point/lon/18.1489/lat/57.3081/data.json')
    .then(function (response){
        return response.json();
    })
    .then(function (data){
        let year = new Date().getFullYear();
        let month = new Date().getMonth() + 1;
        let day = new Date().getDate();
        let hour = new Date().getHours();

        if(month<10){month = "0"+month};
        if(day<10){day = "0"+day};
        if(hour<10){hour = "0"+hour};
        
        let currentTime = "" + year + "-" + month + "-" + day + "T" + hour + ":00:00Z" 
        let temperature;
        data.timeSeries.forEach(time => {
            if(time.validTime == currentTime){
                time.parameters.forEach(parameter =>{
                    if(parameter.name == "t"){
                        temperature = parameter.values[0];
                    }
                });     
            }
        });
        return temperature;
    })
}