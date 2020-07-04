import { icon_name } from "src/assets/svgs"
import PageOne from "../pages/PageOne.svelte";
import PageTwo from '../pages/PageTwo.svelte'

export interface MenuList {
	group: string
	routes: Route[]
}

export interface Param {
	param: string
	name: string
	component: any
}

export interface Route {
	path: string
	name: string
	icon?: icon_name
	title?: string
	component?: any
	subRoutes?: Route[]
	data?: any
	params?: Param[]
	query?: any
}

const MenuList: Array<MenuList> = [
	{
		group: "HOME",
		routes: [
			{
				path: "/",
				name: "Dashboard", icon: "activity", component: PageOne,
				title: "View statistics of attendance and overview , events, notifications and issues"
			}]
	},
	{
		group: "INVENTORY",
		routes: [
			{
				path: "/books",
				name: "Books", icon: "book",
				title: "View, add and record stock of books",
				params: [{ param: '/:id/:new?', name: 'New Book,Edit Book,Book Info', component: PageTwo }],
				subRoutes: [
					{
						path: "/issueBooks",
						name: "Issue Books", icon: "circle",
						title: "Record books given to students"
					},
					{
						path: "/newStock",
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
				path: "/courses",
				name: "Courses", icon: "atom",
				title: "View, create, manage, assign and schedule courses",
				params: [{ param: '/:id/:new?', name: 'New Course,Edit Course,Course Info', component: PageOne }],
			}, {
				path: "/programmes",
				name: "Programmes", icon: "certificate",
				title: "View, create and manage programmes",
				params: [{ param: '/:id/:new?', name: 'New Programme,Edit Programme,Programme Info', component: PageOne }],
			}]
	},
	{
		group: "PEOPLE",
		routes: [{
			path: "/messages",
			name: "Messsages", icon: "message",
			title: "Communicate with people, resolve issues and complains, address sugggestions"
		},
		{
			path: "/students",
			name: "Students", icon: "student",
			title: "View and manage students data",
			params: [{ param: '/:id/:new?', name: 'Register Student,Edit Student,Student Profile', component: PageOne }]
		}, {
			path: "/teachers",
			name: "Lecturers", icon: "teacher",
			title: "View and manage teachers data",
			params: [{ param: '/:id/:new?', name: 'New Lecturer,Edit Lecturer,Lecturer Profile', component: PageOne }],
			subRoutes: [
				{
					path: '/manage-schedule',
					name: 'Manage Schedule',
				}
			]
		}, {
			path: "/staff",
			name: "Staff", icon: "staff",
			title: "View and manage staff data",
			params: [{ param: '/:id/:new?', name: 'New Lecturer,Edit Lecturer,Lecturer Profile', component: PageOne }],
		}]
	}, {
		group: "SCHEDULE",
		routes: [
			{
				path: "/timetable",
				name: "Timetable", icon: "clock",
				title: "organise lecturers for the acadaemic year",
			}, {
				path: "/events",
				name: "Events", icon: "calendar",
				title: "Create and management events",
				params: [{ param: '/:id/:new?', name: 'New Event,Edit Event,Event Details', component: PageOne }],
			},
			{
				path: "/todos",
				name: "Todos", icon: "check_square",
				title: "Create reminders for important things to be done",
				params: [{ param: '/:id/:new?', name: 'New Todo,Edit Todo,View Todos', component: PageOne }]
			}]
	},

	{
		group: "FINANCIAL",
		routes: [
			{
				path: "/fees",
				name: "Fees Records", icon: "circle",
				title: "Record installments of fee payment, search reciepts, generate reports",
			},
			{
				path: "/transactions",
				name: "Transactions", icon: "circle",
				title: "Record expenses and revenue and generate reports",
			}

		]
	}
]


export const Menu = MenuList;