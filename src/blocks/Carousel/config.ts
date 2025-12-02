import type { Block } from 'payload'

export const Carousel: Block = {
    slug: 'carousel',
    fields: [
        {
            name: 'items',
            type: 'array',
            required: true,
            minRows: 1,
            fields: [
                {
                    name: 'image',
                    type: 'upload',
                    relationTo: 'media',
                    required: true,
                },
            ],
        },
    ],
}