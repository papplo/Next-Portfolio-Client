import React from 'react'
import Link from 'next/link'
import BlockContent from '@sanity/block-content-to-react'
import Layout from '../components/views/Layout'
import sanity from '../lib/sanity'
import styles from './styles/movie'
import listStyles from './styles/list'
import sanityClient from '../lib/sanity' 
import imageUrlBuilder from '@sanity/image-url'

const imageBuilder = imageUrlBuilder(sanityClient)

function imageUrlFor(source) {
  return imageBuilder.image(source)
}
const query = `*[_type == "works" && _id == $id] {
  _id,
  title,
  body[]{..., "asset": asset->},
  publishedAt,
  "poster":   mainImage.asset->url,
  categories
  }[0]
`

const serializers = {
  types: {
    code: props => (
      <pre data-language={props.node.language}>
        <code>{props.node.code}</code>
      </pre>
    )
  }
}

export default class Work extends React.Component {

  static async getInitialProps(req) {
    return {
      work: await sanity.fetch(query, {id: req.query.id})
    }
  }

  render() {
    const {work} = this.props
    console.log(work)
    const {poster: { crop = { left: 0, top: 0 }, hotspot = { x: 0.5, y: 0.5}}} = work

    return (
      <Layout>
        <div className="work">
          <div
            className="header"
            style={{
              backgroundImage: `url(${imageUrlFor(work.poster)})`,
              backgroundPosition: `${(hotspot.x - crop.left) * 100}% ${(hotspot.y - crop.top) * 100}%`
            }}
          >
            <div className="header-content">
              <h1>{work.title}</h1>
            </div>
          </div>

          <div className="content">
            <div className="sidebar">
              <img
                className="poster"
                src={imageUrlFor(work.poster).ignoreImageParams().width(500)} alt={`work poster for ${work.title}`}
              />
            </div>
            <div className="main-content">
              {/* <h2>{work.releaseDate.substr(0, 4)}</h2> */}
              <div className="overview">
                <BlockContent
                  blocks={work.body}
                  serializers={serializers}
                />
              </div>
              <h2>Cast</h2>

            </div>
          </div>
        </div>
        <style jsx>{styles}</style>
        <style jsx>{listStyles}</style>
      </Layout>
    )
  }
}
