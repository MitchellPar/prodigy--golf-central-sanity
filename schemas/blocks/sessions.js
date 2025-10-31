import {defineType} from 'sanity'
import {SplitVerticalIcon} from '@sanity/icons'
export default defineType({
  name: 'sessions',
  title: 'Sessions',
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
      name: 'titleOne',
      title: 'Title One',
      type: 'string',
      description: 'Add a title one.',
    },
    {
      name: 'titleTwo',
      title: 'Title Two',
      type: 'string',
      description: 'Add a title two.',
    },
    {
      name: 'priceOne',
      title: 'Price One',
      type: 'string',
      description: 'Add a price one.',
    },
    {
      name: 'priceTwo',
      title: 'Price Two',
      type: 'string',
      description: 'Add a price two.',
    },
    {
      name: 'minutesOne',
      title: 'Minutes One',
      type: 'string',
      description: 'Add a minutes.',
    },
    {
      name: 'minutesTwo',
      title: 'Minutes Two',
      type: 'string',
      description: 'Add a minutes.',
    },
    {
      name: 'descriptionOne',
      title: 'Description One',
      type: 'string',
      description: 'Add a description one.',
    },
    {
      name: 'descriptionTwo',
      title: 'Description Two',
      type: 'string',
      description: 'Add a description two.',
    },
    {
      name: 'linkText',
      title: 'LinkText',
      type: 'string',
      description: 'Add link text.',
  },
  {
      name: 'buttonLink',
      title: 'Button Link',
      type: 'link',
  },
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({title}) {
      return {
        title: `${title}`,
        subtitle: 'Sessions'
      }
    }
  }
})
