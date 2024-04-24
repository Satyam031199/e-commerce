import imageUrlBuilder from '@sanity/image-url'
import {createClient} from 'next-sanity'

export const client = createClient({
    projectId: '0aizt3q6',
    dataset: 'production',
    apiVersion: '2021-10-21',
    useCdn: true
})
const builder = imageUrlBuilder(client)

export function urlFor(source: any){
    return builder.image(source)
}