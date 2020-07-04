<script>
    import { get } from "svelte/store";
    import { valuesForm, Field } from "svelte-formly";
  
    const fields = [
      {
        type: "color",
        name: "color",
        id: "color",
        label: "Color Form"
      },
      {
        type: "text",
        name: "firstname",
        value: "",
        id: "firstname",
        class: ["form-control"],
        placeholder: "Tap your first name",
        validation: ["required", "min:6"],
        messages: {
          required: "Firstname field is required!",
          min: "First name field must have more that 6 caracters!"
        }
      },
      {
        prefix: {
          class: ["custom-form-group"]
        },
        type: "text",
        name: "lastname",
        value: "",
        id: "lastname",
        placeholder: "Tap your lastname",
        description: {
          class: ["custom-class-desc"],
          text: "Custom text for description"
        }
      },
      {
        type: "email",
        name: "email",
        value: "",
        id: "email",
        placeholder: "Tap your email",
        validation: ["required", "email"]
      },
      {
        type: "radio",
        name: "gender",
        items: [
          {
            id: "female",
            value: "female",
            title: "Female"
          },
          {
            id: "male",
            value: "male",
            title: "Male"
          }
        ]
      },
      {
        type: "select",
        name: "city",
        id: "city",
        label: "City",
        validation: ["required"],
        options: [
          {
            value: 1,
            title: "Agadir"
          },
          {
            value: 2,
            title: "Casablanca"
          }
        ]
      }
    ];
  
    let message = "";
    let values = {};
    let color = "#ff3e00";
  
    function onSubmit() {
      const data = get(valuesForm);
      if (data.isValidForm) {
        values = data.values;
        color = values.color ? values.color : color;
        message = "Congratulation! now your form is valid";
      } else {
        message = "Your form is not valid!";
      }
    }
  </script>
  <style>
    * {
      color: var(--theme-color);
    }
    .custom-form :global(.form-group) {
      padding: 10px;
      border: solid 1px var(--theme-color);
      margin-bottom: 10px;
    }
    .custom-form :global(.custom-form-group) {
      padding: 10px;
      background: var(--theme-color);
      color: white;
      margin-bottom: 10px;
    }
    .custom-form :global(.class-description) {
      color: var(--theme-color);
    }
  </style>
  <h1 style="--theme-color: {color}">Svelte Formly</h1>
  <h3>{message}</h3>
  <form
    on:submit|preventDefault="{onSubmit}"
    class="custom-form"
    style="--theme-color: {color}"
  >
    <Field {fields} />
    <button class="btn btn-primary" type="submit">Submit</button>
  </form>