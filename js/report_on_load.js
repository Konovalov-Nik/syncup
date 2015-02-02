$(function() {
    // Initialise datepicker on load
    $("#datepicker").datepicker({
        weekStart: 1,
        daysOfWeekDisabled: "0,6",
        todayHighlight: true
    }).on("changeDate", function(e) {
        var date = $("#datepicker").datepicker("getUTCDate");
        if (!!date) {
            date = date.toDateInputValue();
            $("#date_input").val(date);
        }
    });

    // Helper for url parameters
    function getUrlParameter(sParam)
    {
        var sPageURL = window.location.search.substring(1);
        var sURLVariables = sPageURL.split('&');
        for (var i = 0; i < sURLVariables.length; i++)
        {
            var sParameterName = sURLVariables[i].split('=');
            if (sParameterName[0] == sParam)
            {
                return sParameterName[1];
            }
        }
    }

    //Date helper
    Date.prototype.toDateInputValue = (function() {
        var local = new Date(this);
        local.setMinutes(this.getMinutes() - this.getTimezoneOffset());
        return local.toJSON().slice(0,10);
    });


    //Initialise date in datepicker if it is present in url
    $(function() {
        var url_date = getUrlParameter("date");
        if (!!url_date) {
            url_date = decodeURIComponent(url_date);
            var js_date = new Date(url_date);
            $("#datepicker").datepicker("setUTCDate", js_date);
            $("#date_input").val(js_date);
        }
    });

});
