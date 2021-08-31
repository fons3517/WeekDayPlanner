//create save button event
$('.btn-save').on('click', function(event) {
    event.preventDefault();
    //create a variable to display time at top of page
    var currentTimeEl = $(this).attr('id').split('-')[1]
    //create a variable to represent the value of #userEntry and currentTimeEl value concatonated
    var userPlan = $(`#userEntry-${currentTimeEl}`).val()
    // log currentTimeEl and userPlan to the console
    console.log(currentTimeEl,userPlan);
    //save currentTimeEl and userPlan in local storage
    localStorage.setItem(currentTimeEl,userPlan);
});
//use moment.js for timescheme; log currentHour to console
$('#currentDay').text(moment());
var currentHour = moment().hour()
console.log(currentHour)

//create for loop to cycle through userEntry timeblocks
for(var i = 9; i <= 17; i++) {
    $(`#userEntry-${i}`).val(localStorage.getItem(i));
    //add color coded style for past present and future on timeblocks
    if(currentHour > i) {
        $(`#userEntry-${i}`).addClass('past')
    }
    else if(currentHour == i) {
        $(`#userEntry-${i}`).addClass('present')
    }
    else{
        $(`#userEntry-${i}`).addClass('future')
    }
};