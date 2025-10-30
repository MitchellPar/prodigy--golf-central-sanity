import {defineType} from 'sanity'

export default defineType({
  name: 'event',
  title: 'Golf Central Events',
  type: 'document',
  groups: [
    {name: 'content', title: 'Content'},
    {name: 'seo', title: 'SEO'},
  ],
  fields: [
    {
      name: 'link',
      title: 'Link',
      type: 'string',
      description: 'Add a link.',
  },
  {
      name: 'month',
      title: 'Month',
      type: 'string',
      description: 'Add a month.',
  },
  {
      name: 'day',
      title: 'Day',
      type: 'string',
      description: 'Add a day.',
  },
  {
      name: 'time',
      title: 'Time',
      type: 'string',
      description: 'Add a time.',
  },
  {
      name: 'name',
      title: 'Name',
      type: 'string',
      description: 'Add a name.',
  },
  {
      name: 'category',
      title: 'Category',
      type: 'string',
      description: 'Add a category.',
  },
  {
      name: 'cost',
      title: 'Cost',
      type: 'string',
      description: 'Add a cost.',
  },
  {
      name: 'image',
      title: 'Image', 
      type: 'image',
      description: 'Add an image.',
      options: {
        hotspot: true
      },
      fields: [
        {
          name: 'alt',
          type: 'string', 
          description: 'Add an alt-tag.',
          validation: Rule => Rule.required()
        }
      ]
  },
  ],

  preview: {
    select: {
      name: 'name',
      media: 'image',
    },
    prepare({name, media}) {
      return { title: name, media }
    },
  },
})
