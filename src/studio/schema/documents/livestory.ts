import {DocumentTextIcon} from '@sanity/icons'
import {defineField,defineType} from 'sanity'


export default defineType({
  name: 'livestory',
  title: 'Live Story',
  type: 'document',
  icon: DocumentTextIcon,
  fields: [
    defineField({
        name: 'title',
        title: 'Title',
        type: 'string',
        validation: (Rule) => Rule.required(),
    }),
    defineField({
        name: 'id',
        title: 'Content ID',
        type: 'string',
        validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'type',
      title: 'Content Type',
      type: 'string',
      options: {
        list: [
          {title: 'wall', value: 'wall'},
          {title: 'wallgroup', value: 'wallgroup'},
        ],
      },
      validation: (Rule) => Rule.required(),
    })
  ]
});
