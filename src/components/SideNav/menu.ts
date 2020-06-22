interface menuList {
	heading: string
	routes: Array<routes>
}

interface routes {
	route: String
	name: String
	title?: String
	subRoutes?: Array<routes>
	data?: any
	params?: any
	query?: any
}

 const MenuList: Array<menuList> = [
	{
		heading: "HOME",
		routes: [
			{
				route: "/",
				name: "Dashboard",
				title: "View statistics of attendance and overview , events, notifications and issues"
			}, {
				route: "/messages",
				name: "Messsages",
				title: "Communicate with student, resolve issues and complain, addess sugggestions"
			}]
	},
	{
		heading: "INVENTORY",
		routes: [
			{
				route: "/books",
				name: "Books",
				title: "View,Add add record stock of books",
				subRoutes: [
					{
						route: "/allBooks",
						name: "All Books",
						title: "View all books"
					},
					{
						route: "/issueBooks",
						name: "Issue Books",
						title: "Record books given to students"
					},
					{
						route: "newStock",
						name: "New Stock",
						title: "Record books recieved"
					}
				]
			}
		]
	},
	{
		heading: "ACADEMICS",
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
		heading: "PEOPLE",
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
		heading: "SCHEDULE",
		routes: [
			{
				route: "/timetable",
				name: "Timetable",
				title: "organise lecturers for the acadaemic year"
			},
			{
				route: "/calendar",
				name: "Calendar",
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
		heading: "FINANCIAL",
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