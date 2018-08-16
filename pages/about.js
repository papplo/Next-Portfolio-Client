import React from 'react'
import Link from 'next/link'
import { Layout, AuthorBio, LinksList} from '../components'

import styles from './styles/people'
import listStyles from './styles/list'
import splitStyles from './styles/split'

import sanity from '../lib/sanity'
import imageUrlBuilder from '@sanity/image-url'
import sanityClient from '../lib/sanity'

const imageBuilder = imageUrlBuilder(sanityClient)
const blocksToHtml = require('@sanity/block-content-to-html')
const h = blocksToHtml.h

function imageUrlFor(source) {
  return imageBuilder.image(source)
}

const query = `*[_type == "author"] {
  _id,
  name,
  bio,
  tagline,
  feeds,
  biolinks[]->{title, url, category, _id},
  image,
  "imageUrl": image.asset->url,
  "imageAspect": image.asset->.metadata.dimensions.aspectRatio,
}[0...1]
`

export default class People extends React.Component {
  static async getInitialProps() {
    return {
      people: await sanity.fetch(query)
    }
  }

  render() {
    const { people } = this.props
    return (
      <AuthorBio>
        <div id="fullsingle" className="page-template-page-fullsingle-split">
          <div className="fs-split">
          <div className="split-image"
            style={{backgroundImage: `url(${people[0].imageUrl})`}}>
          </div>
          	<div className="split-content">

          		<div className="split-content-vertically-center">
          			<div className="split-intro">
          				<h1>{people[0].name}</h1>
          				<span className="tagline">{people[0].tagline}</span>
          			</div>

          			<div className="split-bio">
          				<p>{people[0].bio}</p>
          			</div>

                <LinksList links={people[0].feeds} />
          		</div>
          	</div>

          </div>
        </div>
        <style jsx>{splitStyles}</style>
        <style jsx>{styles}</style>
        <style jsx>{listStyles}</style>
      </AuthorBio>
    )
  }
}
