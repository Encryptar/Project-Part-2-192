const COURSES = [
	{
		id: "1",
		course_title: "Japanese Internship",
		course_subtitle: "2 Month Internship",
		course_description: "A two month introduction to software development in various Japanese cities, teaching you a selection of javascript and html.",
		image: "images/japanese programming.jpg",
		image_title: "Learning the fundamentals of programming"
	},
	{
		id: "2",
		course_title: "American Exchange Program",
		course_subtitle: "One semester exchange",
		course_description: "An intense one semester exchange learning the difference between the way we teach and how american universities teach.",
		image: "images/american_college.jpg",
		image_title: "One of the colleges you can visit using this course"
	},
	{
		id: "3",
		course_title: "Virtual Courses",
		course_subtitle: "Learn from others across the globe without leaving",
		course_description: "Take your pick from a large selection of across-the-globe-universities to learn new and exciting things without the expense of travel.",
		image: "images/virtual_courses.jpg",
		image_title: "Virtual Courses"
	},
	{
		id: "4",
		course_title: "European Exchange",
		course_subtitle: "Spend a year over in Europe learning physics",
		course_description: "Learn physics from masters at a selection of european universities",
		image: "images/European Studying.jpg",
		image_title: "European Exchange"
	},
	
];

function createCourseHTML(course) {
	let courseHTML = $("<article>");
	let figure = $("<figure>");
	let image = $("<img>", {src: course.image, alt: course.image_title});
	let caption = $("<figcaption>" + course.image_title + "</figcaption>");
	figure.append(image);
	figure.append(caption);
	figure.append(figure);
	courseHTML.append(figure);
	let title = $("<h2>" + course.course_title + "</h2>");
	courseHTML.append(title);
	let subtitle = $("<h3>" + course.course_subtitle + "</h3>");
	courseHTML.append(subtitle);
	let descpara = $("<p>" + course.course_description + "</p>")
	courseHTML.append(descpara)
	return courseHTML;
}

function displayCourses(courses) {
	let coursesList = $("#coursesList");
	coursesList.empty();
	for(let course of courses) {
		let courseHTML = createCourseHTML(course);
		coursesList.append(courseHTML);
	}
}

$(document).ready(function(){
	let mainCourses = [COURSES[0], COURSES[1]];
	displayCourses(mainCourses);
	$("#search").on("click", search);
	$("#searchText").on("keyup", search)
});
 
function search() {
		let query = $("#searchText").val();
		query = query.toLowerCase().trim();
		let matches = [];
		for (var course of COURSES){
			let courseTitle = course.course_title.toLowerCase();
			if(courseTitle.includes(query)){
				matches.push(course)
			}
		}
		displayCourses(matches);
}