import fetch from 'isomorphic-fetch'

export function getPosts () {
  return fetch('https://simple-blog-api.crew.red/posts')
}

export function getPost (slug) {
  return fetch(`https://simple-blog-api.crew.red/posts?title=${slug}`)
}
