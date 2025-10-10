import {defineField} from 'sanity'

export default defineField({
  type: 'object',
  title: 'Live Story',
  name: 'livestoryBlock',
  fields: [
    {
      name: 'reference',
      type: 'reference',
      to: [{ type: 'livestory' }],
      title: 'Select Live Story',
    },
  ],
  preview: {
    select: {
      title: 'reference.title',
    },
    prepare(selection) {
      return {
        title: selection.title ? `Live Story: ${selection.title}` : 'Live Story',
      }
    },
  },
})
