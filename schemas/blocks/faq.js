import {defineType} from 'sanity'
import {SplitVerticalIcon} from '@sanity/icons'
export default defineType({
  name: 'faq',
  title: 'FAQ',
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
        name: 'faqs',
        title: 'FAQs',
        type: 'array',
        description: 'Add FAQs to the FAQs',
        of: [{
            type: 'object',
            name: 'faq',
            title: 'FAQ',
            fields: [
                {
                    name: 'question',
                    title: 'Question',
                    type: 'string',
                    description: 'Add a question.',
                },
                {
                    name: 'answer',
                    title: 'Answer',
                    type: 'text',
                    description: 'Add an answer.',
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
        subtitle: 'FAQ'
      }
    }
  }
})
