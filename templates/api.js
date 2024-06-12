
const link = "https://api.openweathermap.org/data/3.0/onecall?lat=33.44&lon=-94.04&appid=fb1cf265f1c1edf3c2e5e435893ee19b";
fetch(link).then((response) => {
    console.log(response);
})
