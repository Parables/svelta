import { icon_name } from "src/assets/svgs"

interface menuList {
	group: string
	routes: Array<routes>
}

interface routes {
	route: string
	name: string
	icon?: icon_name
	title?: string
	subRoutes?: Array<routes>
	data?: any
	params?: any
	query?: any
}

const MenuList: Array<menuList> = [
	{
		group: "HOME",
		routes: [
			{
				route: "/",
				name: "Dashboard", icon: "activity",
				title: "View statistics of attendance and overview , events, notifications and issues"
			}, {
				route: "/messages",
				name: "Messsages", icon: "message",
				title: "Communicate with student, resolve issues and complain, addess sugggestions"
			}]
	},
	{
		group: "INVENTORY",
		routes: [
			{
				route: "/books",
				name: "Books", icon: "book",
				title: "View,Add add record stock of books",
				subRoutes: [
					{
						route: "/allBooks",
						name: "All Books", icon: "circle",
						title: "View all books"
					},
					{
						route: "/issueBooks",
						name: "Issue Books", icon: "circle",
						title: "Record books given to students"
					},
					{
						route: "newStock",
						name: "New Stock", icon: "circle",
						title: "Record books recieved"
					}
				]
			}
		]
	},
	{
		group: "ACADEMICS",
		routes: [
			{
				route: "/courses",
				name: "Courses", icon: "atom",
				title: "View, create, manage, assign and schedule courses"
			}, {
				route: "/programmes",
				name: "Programmes", icon: "certificate",
				title: "View, create and manage programmes",
				subRoutes: [
					{
						route: "/allBooks",
						name: "All Books", icon: "circle",
						title: "View all books"
					},
					{
						route: "/issueBooks",
						name: "Issue Books", icon: "circle",
						title: "Record books given to students"
					},
					{
						route: "newStock",
						name: "New Stock", icon: "circle",
						title: "Record books recieved"
					}
				]
			}]
	},
	{
		group: "PEOPLE",
		routes: [
			{
				route: "/students",
				name: "Students", icon: "student",
				title: "View and manage students data",
				subRoutes: [{
					route: "/view",
					name: "View Students", icon: "circle",
					title: "View all student records"
				}, {
					route: "/register",
					name: "Register Student", icon: "circle",
					title: "Create a new student record"
				}, {
					route: "/yeargroups",
					name: "Year Groups", icon: "circle",
					title: "View students by year groups"
				},]
			}, {
				route: "/teachers",
				name: "teachers", icon: "teacher",
				title: "View and manage teachers data"
			}, {
				route: "/staff",
				name: "Staff", icon: "staff",
				title: "View and manage staff data"
			}]
	}, {
		group: "SCHEDULE",
		routes: [
			{
				route: "/timetable",
				name: "Timetable", icon: "clock",
				title: "organise lecturers for the acadaemic year"
			},			{
				route: "/events",
				name: "Events", icon: "calendar",
				title: "Create and management events"
			},
			{
				route: "/todos",
				name: "Todos", icon: "check_square",
				title: "Create reminders for important things to be done"
			}]
	},

	{
		group: "FINANCIAL",
		routes: [
			{
				route: "/fees",
				name: "Fees Management", icon: "circle",
				title: "Record installments of fee payment, search reciepts, generate reports"
			},
			{
				route: "/transactions",
				name: "Transactions", icon: "circle",
				title: "Record expenses and revenue and generate reports"
			}

		]
	}
]


export const Menu = MenuList;