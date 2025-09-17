import {defineType} from 'sanity'
import {SplitVerticalIcon} from '@sanity/icons'
export default defineType({
  name: 'contact',
  title: 'Contact',
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
      name: 'content',
      title: 'Content',
      type: 'text',
      description: 'Add content.',
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
      description: 'Add an email.',
    },
    {
      name: 'phone',
      title: 'Phone',
      type: 'string',
      description: 'Add a phone number.',
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({title}) {
      return {
        title: `${title}`,
        subtitle: 'Contact'
      }
    }
  }
})
