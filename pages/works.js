import React from 'react'
import Link from 'next/link'
import Layout from '../components/views/Layout'
import sanity from '../lib/sanity'
import styles from './styles/movies'
import listStyles from './styles/list'
import sanityClient from '../lib/sanity'
import imageUrlBuilder from '@sanity/image-url'

const imageBuilder = imageUrlBuilder(sanityClient)

function imageUrlFor(source) {
  return imageBuilder.image(source)
}

const query = `*[_type == "works"] {
  _id,
  title,
  publishedAt,
  mainImage,
  categories,
  "poster":   mainImage.asset->url,
  // "posterAspect": poster.asset->.metadata.dimensions.aspectRatio,
  // "director": crewMembers[job == "Director"][0].person->name
}[0...50]
`

export default class Works extends React.Component {

  static async getInitialProps() {
    return {
      works: await sanity.fetch(query)
    }
  }

  render() {
    const {works} = this.props
    console.log(works);
    return (
      <Layout>
        <div className="movies">
          <ul className="list">
            {works.map(work => (

              <li key={work._id} className="list__item">
              <img
                className="poster"
                width="100"
                src={imageUrlFor(work.poster).ignoreImageParams().width(100)} alt={`work poster for ${work.title}`}
              />
                <Link href={{pathname: '/work/', query: {id: work._id}}}>
                  <a>
                  <h3>{work.title}</h3>

                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <style jsx>{styles}</style>
        <style jsx>{listStyles}</style>
      </Layout>
    )
  }
}
