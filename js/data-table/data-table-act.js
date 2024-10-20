(function ($) {
	"use strict";
	
	$(document).ready(function() {
	  $('#data-table-basic').DataTable({
		// Disable the length menu
		lengthMenu: [10, 25, 50, 100], // You can keep this to allow changing the page size if needed
		pageLength: 10, // Default entries to show
		// Hide the information display
		info: false,
		// Hide the entries dropdown
		pagingType: "simple", // Optional: Adjust pagination style if needed
		// To hide the entries showing info
		language: {
		  lengthMenu: '',
		  info: ''
		}
	  });
	});
  })(jQuery);
  