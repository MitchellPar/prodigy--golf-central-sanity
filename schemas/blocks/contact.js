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
    {
      name: 'formEmbedCodeOne',
      title: 'Form Embed Code One',
      type: 'text',
      description: 'Add a form embed code.',
    },
    {
      name: 'formEmbedCodeTwo',
      title: 'Form Embed Code Two',
      type: 'text',
      description: 'Add a form embed code.',
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
