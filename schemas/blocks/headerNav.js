import {RemoveIcon} from '@sanity/icons'
import { defineField } from "sanity"

export default defineField({
    name: 'headerNav',
    title: 'Header Nav',
    type: 'object',
    fields: [
        {
            name: 'navItems',
            title: 'Nav Items',
            type: 'array',
            of: [
                
                {
                    name: 'navItem',
                    type: 'object',
                    fields: [
                        {
                            name: 'title',
                            title: 'Title',
                            type: 'string',
                            description: 'Add a title.',
                        },
                        {
                            name: 'link',
                            title: 'Link',
                            type: 'link',
                        },
                    ]
                }
            ]
        }
    ]
})