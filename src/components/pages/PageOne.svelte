<script lang="typescript">
  import { createEventDispatcher } from 'svelte';
  let dispatch = createEventDispatcher();
  import { APPBAR_POSITION } from '../../main_store';
  import TextField from '../input_field/TextField.svelte';
  import Chip from '../chip_input/Chip.svelte';
  import FormBuilder from '../form_builder/FormBuilder.svelte';
  import { FormOption, Section } from '../form_builder/form_options';
  let position;
  $: {
    APPBAR_POSITION.set(position);
  }
  let sections: Section[] = [
    {
      title: 'Personal Details',
      fields: [
        {
          id: 'surname',
          name: 'surname',
          label: 'Surname',
          type: 'text',
          colors:
            'bg-white text-gray-500 focus:text-primary border-gray-500 focus:border-primary',
          width: 'w-60p'
        },
        {
          id: 'firstname',
          name: 'firstname',
          label: 'First name',
          type: 'text',
          colors:
            'bg-white text-gray-500 focus:text-primary border-gray-500 focus:border-primary',
          width: 'w-35p'
        }
      ]
    }
  ];
  let options: FormOption = { id: 'Form1', sections: sections };
</script>

<slot>
  <!-- Some content start -->
  <div class="w-full my-2 text-black bg-white rounded-md h-205">
    <FormBuilder {options} />
  </div>
  <!-- Some content end -->
</slot>
