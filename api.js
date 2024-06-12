
const link = "https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=fb1cf265f1c1edf3c2e5e435893ee19b";
fetch(link).then((response) => {
    if (response.ok){
        console.log(response.status);
        console.log("Hello");
    }
})

//curl -X GET "https://api.openweathermap.org/data/2.5/weather?q=London,uk" -H "Authorization: Bearer fb1cf265f1c1edf3c2e5e435893ee19b"