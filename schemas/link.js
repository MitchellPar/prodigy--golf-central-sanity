import {defineType} from 'sanity'

export default defineType({
  name: 'link',
  title: 'Link',
  type: 'object',
  fields: [
    {
        name: 'type',
        title: 'Type',
        type: 'string',
        options:{
            layout: 'radio',
            list: [
                {
                    title:'External',
                    value: 'external',
                },
                {
                    title:'Internal',
                    value: 'internal',
                },
                {
                    title:'File Download',
                    value: 'file',
                }
            ]
        }
    },
    {
        name: 'internalLink',
        title: 'Internal Link',
        type: 'reference',
        to: [{type: 'page'}],
        hidden: ({parent}) => parent?.type !== 'internal'
    },
    {
        name: 'externalLink',
        title: 'External Link',
        type: 'url',
        validation: Rule => Rule.uri({
            scheme: ['http', 'https', 'mailto', 'tel']
        }),
        hidden: ({parent}) => parent?.type !== 'external'
    },
    {
        name: 'fileLink',
        title: 'File to Download',
        type: 'file',
        hidden: ({parent}) => parent?.type !== 'file'
    }
  ],
})