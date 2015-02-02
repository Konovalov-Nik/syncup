$(function(){
    // Initiailize datepicker on load
    $("#datepicker").datepicker({
        weekStart: 1,
        daysOfWeekDisabled: "0,6",
        todayHighlight: true
    });
});