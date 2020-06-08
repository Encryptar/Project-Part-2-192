const Applicables [
	{
		id: "1",
		course_title: "Japanese Internship",
		course_subtitle: "2 Month Internship",
		course_description: "A two month introduction to software development in various Japanese cities, teaching you a selection of javascript and html.",
		image: "images/bok-choi.jpg",
		image_title: ""
	},
	{
		id: "2",
		course_title: "American Exchange Program",
		course_subtitle: "One semester exchange",
		course_description: "An intense one semester exchange learning the difference between the way we teach and how american universities teach.",
		image: "",
		image_title: ""
	},
	{
		id: "3",
		course_title: "Virtual Courses",
		course_subtitle: "Learn from others across the globe without leaving",
		course_description: "Take your pic from a large selection of across-the-globe-universities to learn new and exciting things without the expense of travel.",
		image: "",
		image_title: ""
	},


];

function divHider() {
    var div = document.getElementById('myDIV');
    if (div.style.display === 'none') {
        div.style.display = 'block';
    } else {
        div.style.display = 'none';
    }
};

