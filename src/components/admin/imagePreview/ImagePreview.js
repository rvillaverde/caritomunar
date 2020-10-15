import React from 'react'

class ImagePreview extends React.Component {
  get image () {
    const {
      preview,
      url
    } = this.props

    return preview ?
      preview :
      url
  }

  render () {
    return (
      <div
        className='admin-project_thumbnail'
        style={{
          backgroundImage: `url(${ this.image })`
        }}
      >
      </div>
    )
  }
}

export default ImagePreview
