import {defineType} from 'sanity'
import {ImageIcon} from '@sanity/icons'
export default defineType({
  name: 'golf',
  title: 'Golf',
  type: 'object',
  icon: ImageIcon,
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
      name: 'titleThree',
      title: 'Title Three',
      type: 'string',
      description: 'Add a title three.',
    },
    {
      name: 'titleFour',
      title: 'Title Four',
      type: 'string',
      description: 'Add a title four.',
    },
    {
      name: 'contentOne',
      title: 'Content One',
      type: 'text',
      description: 'Add a content one.',
    },
    {
      name: 'contentTwo',
      title: 'Content Two',
      type: 'text',
      description: 'Add a content two.',
    },
    {
      name: 'contentThree',
      title: 'Content Three',
      type: 'text',
      description: 'Add a content three.',
    },
    {
      name: 'contentFour',
      title: 'Content Four',
      type: 'text',
      description: 'Add a content four.',
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({title}) {
      return {
        title: `${title}`,
        subtitle: 'Golf Animated Block'
      }
    }
  }
})
