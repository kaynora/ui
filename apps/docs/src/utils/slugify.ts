const slugify = (input: string) => {
  return input
    .toLowerCase()
    .trim()
    .replace(/^\d+\.\s*/, '')
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-+/g, '-')
}

export default slugify
