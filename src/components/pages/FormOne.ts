import {
  Section,
  FormOption,
  Row
} from "../form_builder/form_options";

let sections: Section[] = [

  {
    title: 'Academic Information',
    // class: 'inline-block w-40p',
    rows: [
      {
        fields: [
          {
            id: 'appID',
            name: 'appID',
            label: 'Application ID',
            width: 'w-full md:w-45p',
          },
          {
            id: 'examsNo',
            name: 'examsNo',
            label: 'Exams Number',
            width: 'w-full md:w-50p',
          }
        ]
      },
      {
        fields: [
          {
            id: 'programme',
            name: 'programme',
            label: 'Programme',
            width: 'w-full md:w-50p',
          },
          {
            id: 'entryLevel',
            name: 'entryLevel',
            label: 'Entry Level',
            width: 'w-45p md:w-20p',
            type: "number",
            min: 100,
            max: 600,
            step: 100
          },
          {
            id: 'currentLevel',
            name: 'currentLevel',
            label: 'Current Level',
            width: 'w-45p md:w-20p',
            type: "number",
            min: 100,
            max: 600,
            step: 100
          }
        ]
      },
      {
        fields: [
          {
            id: 'booksGiven',
            name: 'booksGiven',
            label: 'Books Given',
            width: 'w-100p',
          }
        ]
      }
    ]
  },
  {
    title: 'Personal Information',
    // class: 'inline-block w-40p',
    rows: [
      {
        fields: [
          {
            id: 'surname',
            name: 'surname',
            label: 'Surname',
            width: 'w-full md:w-45p',
          },
          {
            id: 'othernames',
            name: 'othernames',
            label: 'Other Names',
            width: 'w-full md:w-50p',
          }
        ]
      },
      {
        fields: [
          {
            id: 'dob',
            name: 'dob',
            label: 'Date of birth',
            width: 'w-full md:w-25p',
            type: "date"
          },
          {
            id: 'gender',
            name: 'gender',
            label: 'Gender',
            width: 'w-full md:w-25p',
          }, {
            id: 'qualification',
            name: 'qualification',
            label: 'Qualification',
            width: 'w-full md:w-40p',
          }
        ]
      },

    ]
  },
  {
    title: 'Contact',
    // class: 'inline-block w-40p',
    rows: [
      {
        fields: [
          {
            id: 'phoneNo',
            name: 'phoneNo',
            label: 'Phone Number',
            width: 'w-full md:w-30p',
          },
          {
            id: 'email',
            name: 'email',
            label: 'Email',
            width: 'w-full md:w-30p',
          }, {
            id: 'address',
            name: 'address',
            label: 'Address',
            width: 'w-full md:w-30p',
          }
        ]
      },
    ]
  }

]

let formOptions: FormOption = {
  id: 'Form1',
  sections: sections,
  // class : " flex justify-betwen w-full items-start"
};

export const options = formOptions