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
}
// I am using a daily planner to create a schedule

// When I open the planner, the current day is displayed at the top of the calendar

// When I scroll, I am presented with timeblocks for standard business hours

// When I view timeblocks for that day, each block is color coded to indicate whether it's in past, present, or future

// When I click into a timeblock, then I can enter an event

// When I click Save button for timeblock, then the text for that event is saved in local storage

// When I refresh page, then saved events persist
