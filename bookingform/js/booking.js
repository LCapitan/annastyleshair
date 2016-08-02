(function($){

	$(document).ready(function() {

		/* ---------------------------------------------- /*
		 * Booking form ajax
		/* ---------------------------------------------- */

		$('#booking-form').find('input,textarea').jqBootstrapValidation({
			preventSubmit: true,
			submitError: function($form, event, errors) {
				// additional error messages or events
			},
			submitSuccess: function($form, event) {
				event.preventDefault();

				var submit          = $('#booking-form submit');
				var ajaxResponse    = $('#booking-response');

				var name            = $("input#booking_name").val();
				var email           = $("input#booking_email").val();
				var datepicker			= $("input#datepicker").val();
				var timepicker			= $("input#booking_timepicker").val();
				var message         = $("textarea#booking_message").val();

				$.ajax({
					type: 'POST',
					url: 'php/booking.php',
					dataType: 'json',
					data: {
						name: name,
						email: email,
						date: datepicker,
						time: timepicker,
						message: message,
					},
					cache: false,
					beforeSend: function(result) {
						submit.empty();
						submit.append('<i class="fa fa-cog fa-spin"></i> Wait...');
					},
					success: function(result) {
						if(result.sendstatus == 1) {
							ajaxResponse.html(result.message);
							$form.fadeOut(500);
						} else {
							ajaxResponse.html(result.message);
						}
					}
				});
			}
		});

	});

})(jQuery);
