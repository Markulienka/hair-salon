import { Block } from 'payload'

export const Services: Block = {
  slug: 'services',
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'subtitle',
      type: 'text',
      required: true,
    },
    {
      name: 'whatsIncluded',
      type: 'array',
      required: true,
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'services',
          type: 'array',
          required: true,
          fields: [
            {
              name: 'title',
              type: 'text',
              required: true,
            },
            {
              name: 'price',
              type: 'text',
              required: true,
            }
          ],
        },
      ],
    },
    {
      name: 'button',
      type: 'group',
      required: true,
      fields: [
        {
          name: 'label',
          type: 'text',
          required: true,
        },
        {
          name: 'link',
          type: 'text',
          required: true,
        },
      ],
    }
  ],
}