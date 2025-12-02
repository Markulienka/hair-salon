import type { Block } from 'payload';

export const Contact: Block = {
    slug: 'contact',
    fields: [
        {
            name: 'title',
            type: 'text',
            required: true,
        },
        {
            name: 'subtitle',
            type: 'text',
            required: false,
        },
        {
            name: 'email',
            type: 'email',
            required: true,
        },
        {
            name: 'place',
            type: 'text',
            required: true,
            label: 'Office Location Name',
        },
        {
            name: 'address',
            type: 'textarea',
            required: true,
        },
        {
            name: 'image',
            type: 'upload',
            relationTo: 'media',
            required: true,
        },
    ],
};