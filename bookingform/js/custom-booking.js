/*****************
Date Picker
*****************/
$( function() {
    $( "#datepicker" ).datepicker();
  } );

/***********
Time Picker
***********/
  $("#booking_timepicker").timepicker({
    'minTime': '9:30am',
    'maxTime': '6:30pm',
    'disableTimeRanges': [
       ['12:00pm', '1:00pm'],
   ],
    'step': "60"
  });
