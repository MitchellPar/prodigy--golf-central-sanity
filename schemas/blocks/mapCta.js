import {defineType} from 'sanity'
import {SplitVerticalIcon} from '@sanity/icons'
export default defineType({
  name: 'mapCta',
  title: 'Map CTA',
  type: 'object',
  icon: SplitVerticalIcon,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Add a title.',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string',
      description: 'Add a description.',
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
      return {
        title: `${title}`,
        subtitle: 'Map CTA'
      }
    }
  }
})
