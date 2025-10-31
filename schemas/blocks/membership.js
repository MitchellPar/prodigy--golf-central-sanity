import {defineType} from 'sanity'
import {BinaryDocumentIcon} from '@sanity/icons'
export default defineType({
  name: 'membership',
  title: 'Membership',
  type: 'object',
  icon: BinaryDocumentIcon,
  groups: [
    { name: 'platinum', title: 'Platinum' },
    { name: 'players', title: 'Players' },
  ],
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Add a title.',
    },
    // Platinum group fields
    {
      name: 'titleOne',
      title: 'Title One',
      type: 'string',
      description: 'Add the first title.',
      group: 'platinum',
    },
    {
      name: 'contentOne',
      title: 'Content One',
      type: 'text',
      description: 'Add the first content.',
      group: 'platinum',
    },
    {
      name: 'imageOne',
      title: 'Image One',
      type: 'image',
      description: 'Add the first image.',
      options: { hotspot: true },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alt text',
          description: 'Describe the image for accessibility.',
          validation: Rule => Rule.required(),
        },
      ],
      group: 'platinum',
    },
    {
      name: 'titleTwo',
      title: 'Title Two',
      type: 'string',
      description: 'Add the second title.',
      group: 'platinum',
    },
    {
      name: 'list',
      title: 'List',
      type: 'array',
      description: 'Add list items (repeater).',
      of: [{ type: 'string' }],
      group: 'platinum',
    },
    {
      name: 'imageTwo',
      title: 'Image Two',
      type: 'image',
      description: 'Add the second image.',
      options: { hotspot: true },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alt text',
          description: 'Describe the image for accessibility.',
          validation: Rule => Rule.required(),
        },
      ],
      group: 'platinum',
    },
    {
      name: 'buttonLink',
      title: 'Button Link',
      type: 'link',
      description: 'Add the button link.',
      group: 'platinum',
    },
    {
      name: 'buttonText',
      title: 'Button Text',
      type: 'string',
      description: 'Add the button text.',
      group: 'platinum',
    },
    {
      name: 'platinumItems',
      title: 'Items',
      type: 'array',
      description: 'Add items with image, title, and content.',
      of: [
        {
          type: 'object',
          name: 'item',
          title: 'Item',
          fields: [
            {
              name: 'image',
              title: 'Image',
              type: 'image',
              options: { hotspot: true },
              fields: [
                {
                  name: 'alt',
                  type: 'string',
                  title: 'Alt text',
                  description: 'Describe the image for accessibility.',
                  validation: Rule => Rule.required(),
                },
              ],
            },
            {
              name: 'title',
              title: 'Title',
              type: 'string',
            },
            {
              name: 'content',
              title: 'Content',
              type: 'text',
            },
          ],
        },
      ],
      group: 'platinum',
    },
    {
      name: 'platinumButtonLink',
      title: 'Platinum Button Link',
      type: 'link',
      description: 'Add the platinum button link.',
      group: 'platinum',
    },
    {
      name: 'platinumButtonText',
      title: 'Platinum Button Text',
      type: 'string',
      description: 'Add the platinum button text.',
      group: 'platinum',
    },





    {
      name: 'titleThree',
      title: 'Title Three',
      type: 'string',
      description: 'Add the third title.',
      group: 'players',
    },
    {
      name: 'contentThree',
      title: 'Content Three',
      type: 'text',
      description: 'Add the third content.',
      group: 'players',
    },
    {
      name: 'imageThree',
      title: 'Image Three',
      type: 'image',
      description: 'Add the third image.',
      options: { hotspot: true },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alt text',
          description: 'Describe the image for accessibility.',
          validation: Rule => Rule.required(),
        },
      ],
      group: 'players',
    },
    {
      name: 'titleFour',
      title: 'Title Four',
      type: 'string',
      description: 'Add the fourth title.',
      group: 'players',
    },
    {
      name: 'contentFour',
      title: 'Content Four',
      type: 'text',
      description: 'Add the fourth content.',
      group: 'players',
    },
    {
      name: 'imageFour',
      title: 'Image Four',
      type: 'image',
      description: 'Add the fourth image.',
      options: { hotspot: true },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alt text',
          description: 'Describe the image for accessibility.',
          validation: Rule => Rule.required(),
        },
      ],
      group: 'players',
    },
    {
      name: 'playersButtonLink',
      title: 'Players Button Link',
      type: 'link',
      description: 'Add the players button link.',
      group: 'players',
    },
    {
      name: 'playersButtonText',
      title: 'Players Button Text',
      type: 'string',
      description: 'Add the players button text.',
      group: 'players',
    },
    {
      name: 'playersItems',
      title: 'Items',
      type: 'array',
      description: 'Add items with image, title, and content.',
      of: [
        {
          type: 'object',
          name: 'item',
          title: 'Item',
          fields: [
            {
              name: 'image',
              title: 'Image',
              type: 'image',
              options: { hotspot: true },
              fields: [
                {
                  name: 'alt',
                  type: 'string',
                  title: 'Alt text',
                  description: 'Describe the image for accessibility.',
                  validation: Rule => Rule.required(),
                },
              ],
            },
            {
              name: 'title',
              title: 'Title',
              type: 'string',
            },
            {
              name: 'content',
              title: 'Content',
              type: 'text',
            },
          ],
        },
      ],
      group: 'players',
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({title}) {
      return {
        title: `${title}`,
        subtitle: 'Membership'
      }
    }
  }
})
