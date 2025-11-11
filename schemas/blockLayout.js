import {defineType} from 'sanity'
export default defineType({
    name: 'blockLayout',
    type: 'object',
    title: 'Layout Overrides',
    fields: [
        {
            type: 'object',
            name: 'marginTop',
            description: 'All viewports over 1500px',
            fields: [
                {
                    name: 'desktop',
                    description: '1500px +',
                    type: 'number'
                },
                {
                    name: 'laptop',
                    type: 'number',
                    description: '1200px +',
                },
                {
                    name: 'tablet',
                    type: 'number'
                },
                {
                    name: 'mobile',
                    type: 'number'
                },
            ]
        },
        {
            type: 'object',
            name: 'marginBottom',
            description: 'All viewports over 1500px',
            fields: [
                {
                    name: 'desktop',
                    type: 'number'
                },
                {
                    name: 'laptop',
                    type: 'number'
                },
                {
                    name: 'tablet',
                    type: 'number'
                },
                {
                    name: 'mobile',
                    type: 'number'
                },
            ]
        },
    ]
})