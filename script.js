
const updatedate = () => {
    let now = moment();
    var nowDate = now.format('dddd, DD MMMM, YYYY');
    var nowTime = now.format('hh mm ss');
    document.getElementById('time').innerHTML = nowTime;
    document.getElementById('date').innerHTML = nowDate;
};

setInterval(updatedate, 1000);
