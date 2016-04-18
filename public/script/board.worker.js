var jewel = {};

importScripts("board.js");

addEventListener("message", function(event) {
	var board = jewel.board,
		message = event.data;

	switch (message.command) {
		case "initialize":
			jewel.settings = message.data.settings;
			board.initialize(
					message.data.startJewels, callback
				);
			break;
		case "swap":
			board.swap(
				message.data.x1,
				message.data.y1,
				message.data.x2,
				message.data.y2,
				callback
			);
			break;
	} // end of switch message command

	function callback(data) {
		postMessage({
			id: message.id,
			data: data,
			jewels: board.getBoard()
		}); // end of function callback
	}


}, false); /* end of fucntion e Event Listener */