import { defineField } from "sanity"

export default defineField({
    name: 'footerNav',
    title: 'Footer Nav',
    type: 'array',
    of: [

        {
            name: 'navColumn',
            type: 'object',
            fields: [
                {
                    name: 'title',
                    title: 'Title',
                    type: 'string',
                    description: 'Add a title.',
                },
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
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
})