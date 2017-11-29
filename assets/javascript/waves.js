function main() {
	
	let elements = {
		'parallax__layer--fore': document.getElementsByClassName(
			'parallax__layer--fore')[0], 
		'parallax__layer--back': document.getElementsByClassName(
			'parallax__layer--back')[0]
	};

	for (var plane in elements) {
		console.log(plane);
		let i = -1;
		while (++i < 100) {
			let parent = document.getElementsByClassName(plane)[0];
			let child = document.createElement('div');
			parent.appendChild(child);
		}
	}

}


window.addEventListener('DOMContentLoaded', main, false);