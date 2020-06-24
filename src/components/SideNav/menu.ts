import { icon_name } from "src/assets/svgs

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
				name: "Dashboard", icon:"activity",
				title: "View statistics of attendance and overview , events, notifications and issues"
			}, {
				route: "/messages",
				name: "Messsages", icon:"message",
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
				name: "Courses",
				title: "View, create, manage, assign and schedule courses"
			}, {
				route: "/programmes",
				name: "Programmes",
				title: "View, create and manage programmes"
			}]
	},
	{
		group: "PEOPLE",
		routes: [
			{
				route: "/students",
				name: "Students",
				title: "View and manage students data"
			}, {
				route: "/teachers",
				name: "teachers",
				title: "View and manage teachers data"
			}, {
				route: "/yeargroups",
				name: "Year Groups",
				title: "View students by year groups"
			}, {
				route: "/staff",
				name: "Staff",
				title: "View and manage staff data"
			}]
	}, {
		group: "SCHEDULE",
		routes: [
			{
				route: "/timetable",
				name: "Timetable",icon: "clock",
				title: "organise lecturers for the acadaemic year"
			},
			{
				route: "/calendar",
				name: "Calendar",icon: "calendar",
				title: "Overview of scheduled events"
			},
			{
				route: "/events",
				name: "Events",
				title: "Create and management events"
			},
			{
				route: "/todos",
				name: "Todos",
				title: "Create reminders for important things to be done"
			}]
	},

	{
		group: "FINANCIAL",
		routes: [
			{
				route: "/fees",
				name: "Fees Management",
				title: "Record installments of fee payment, search reciepts, generate reports"
			},
			{
				route: "/transactions",
				name: "Transactions",
				title: "Record expenses and revenue and generate reports"
			}

		]
	}
]


export  const Menu = MenuList;