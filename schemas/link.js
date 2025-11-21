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
        to: [{type: 'page'}, {type: 'fpPage'}, {type: 'lpPage'}],
        options: {
            filter: ({document}) => {
                // Filter pages based on the root document type
                if (document?._type === 'fpSettings') {
                    return {
                        filter: '_type == "fpPage"'
                    }
                }
                if (document?._type === 'lpSettings') {
                    return {
                        filter: '_type == "lpPage"'
                    }
                }
                if (document?._type === 'settings') {
                    return {
                        filter: '_type == "page"'
                    }
                }
                // Default: show all pages if we can't determine context
                return {
                    filter: '_type in ["page", "fpPage", "lpPage"]'
                }
            }
        },
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