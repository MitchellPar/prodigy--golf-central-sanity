import {defineType} from 'sanity'

export default defineType({
  name: 'openingHours',
  title: 'Four Pines Opening Hours',
  type: 'document',
  fields: [
  {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Add a title.',
  },
  {
      name: 'content',
      title: 'Content',
      type: 'text',
      description: 'Add content.',
  },
    {
        name: 'times',
        title: 'Opening Times',
        type: 'array',
        description: 'Add days and times.',
        of: [{
            type: 'object',
            name: 'time',
            title: 'Time',
            fields: [

                {
                    name: 'day',
                    title: 'Day',
                    type: 'string',
                    description: 'Add a day.',
                },
                {
                    name: 'openingTime',
                    title: 'Opening Time',
                    type: 'string',
                    description: 'Add a time.',
                },
                {
                    name: 'closingTime',
                    title: 'Closing Time',
                    type: 'string',
                    description: 'Add a time.',
                },

    
            ]
        }]
    },
  ],

  preview: {
    select: {
      title: 'title',
    },
    prepare({title}) {
      return { title: title }
    },
  },
})
