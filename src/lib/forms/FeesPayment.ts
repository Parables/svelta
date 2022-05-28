import {
	Section,
	FormOption,
} from "../form_builder/form_options";

let sections: Section[] = [

	{
		// class: 'inline-block w-40p',
		rows: [
			{
				fields: [
						{
						id: 'date',
						name: 'date',
						type: "date",
						label: 'Payment Date',
						width: 'w-full md:w-25p',
					},
				{
						id: 'type',
						name: 'type',
						type: "text",
						label: 'Fee Type',
						width: 'w-full md:w-25p',
						items: [{ id: 'school fees', value: 'School Fees' }]
					}, 
					{
						id: 'bank',
						name: 'bank',
						type: "text",
						label: 'Bank',
						width: 'w-full md:w-25p',
					},
					{
						id: 'branch',
						name: 'branch',
						type: "text",
						label: 'Brach',
						width: 'w-full md:w-20p',
					},
				]
			},
			{
				fields: [
					{
						id: 'transactionID',
						name: 'transactionID',
						type: "number",
						label: 'Transaction ID',
						width: 'w-full md:w-35p',
					},
					{
						id: 'studentID',
						name: 'studentID',
						label: 'Student ID',
						width: 'w-full md:w-40p',
					},
					{
						id: 'amount',
						name: 'amount',
						label: 'Amount',
						width: 'w-45p md:w-20p',
						type: "number",
						step: 1
					},
				]
			},
		]
	}

]

let formOptions: FormOption = {
	id: 'FeesPayment',
	sections: sections, 
};

export const options = formOptions