function loadItems() {
    var date = new Date();
    var year = date.getFullYear();
    var month = ("0" + (1 + date.getMonth())).slice(-2);
    var day = ("0" + date.getDate()).slice(-2);
    console.log(year+month+day)
    return fetch("https://schoolmenukr.ml/api/elementary/J100002504?year="+year+"&month="+month+"&date="+day+"&allergy=hidden")
        .then((response) => response.json())
        .then((json) => json.menu[0].lunch);
}

loadItems().then((lunch) => {
    if (lunch.length===0) {
        document.getElementById("menu"+0).innerHTML="오늘은 급식이 없습니다!"
    } else {
        for (i=0; i<lunch.length; i++) {
            var item = lunch[i]
            var item = item.replace('^', '');
            var item = item.replace('^', '');
            document.getElementById("menu"+i).innerHTML=item
        }
    }
});  