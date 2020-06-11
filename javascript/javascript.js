const COURSES = [
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

function createCourseHTML(course) {
	// Create an article element to hold all course's content
	let courseHTML = $("<article>");

	// Create a figure element for displaying the course's image
	let figure = $("<figure>");
	let image = $("<img>", {src: course.image, alt: course.image_title});
	let caption = $("<figcaption>" + course.image_title + "</figcaption>");
	figure.append(image);
	figure.append(caption);
	figure.append(figure);
	courseHTML.append(figure);
	// Create a heading element for displaying the course's title
	let title = $("<h2>" + course.course_title + "</h2>");
	courseHTML.append(title);
	// Create a heading element for displaying the course's subtitle
	let subtitle = $("<h3>" + course.course_subtitle + "</h3>");
	courseHTML.append(subtitle);
	// Create a paragraph element for displaying the course's description
	let descpara = $("<p>" + course.course_description + "</p>")
	courseHTML.append(descpara)
	return courseHTML;
}

function displayCourses(courses) {
	let coursesList = $("#coursesList");

	// Empty previous courses
	coursesList.empty();
	for(let course of courses) {
		let courseHTML = createCourseHTML(course);
		coursesList.append(courseHTML);
	}
}

// Display a subset of courses when the page loads
$(document).ready(function(){
	let mainCourses = [COURSES[0], COURSES[1]];

	displayCourses(mainCourses);
	$("#search").on("click", search);
	$("#searchText").on("keyup", search)
});
 
function search() {
		// Get the query string
		let query = $("#searchText").val();

		// Standardize the query (you must do the same when comparing this value against the course_title string)
		query = query.toLowerCase().trim();

		// Hold the matched queries
		let matches = [];
	
		// Search for courses matching the query string using the course_title property
		for (var course of COURSES){
			let courseTitle = course.course_title.toLowerCase();
			if(courseTitle.includes(query)){
				matches.push(course)
			}
		}
		
		
		// Add each matched course to the matches array
		
		// Display all matched courses
		displayCourses(matches);
}