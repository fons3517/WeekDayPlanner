$('.btn-save').on('click', function(event) {
    event.preventDefault();
    var currentTimeEl = $(this).attr('id').split('-')[1]
    var userPlan = $(`#userEntry-${currentTimeEl}`).val() // "#userEntry"+currentTimeEl
    console.log(currentTimeEl,userPlan);
    localStorage.setItem(currentTimeEl,userPlan);
});

$('#currentDay').text(moment());
var currentHour = moment().hour()
console.log(currentHour)

for(var i = 9; i <= 17; i++) {
    $(`#userEntry-${i}`).val(localStorage.getItem(i));
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
