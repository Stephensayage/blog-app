import React, { Component } from 'react'
import './ProductCreate.css'
import Layout from '../../components/shared/Layout/Layout'
import { Redirect } from 'react-router-dom'
import { createProduct } from '../../services/products'

class ProductCreate extends Component {
  constructor() {
    super()
    this.state = {
      product: {
        name: '',
        description: '',
        imgURL: '',
        price: ''
      },
      created: false
    }
  }

  handleChange = (event) => {
    const { name, value } = event.target
    this.setState({
      product: {
        ...this.state.product,
        [name]: value
      }
    })
  }

  handleSubmit = async (event) => {
    event.preventDefault()
    const created = await createProduct(this.state.product)
    this.setState({ created })
  }

  render() {
    const { product, created } = this.state

    if (created) {
      return <Redirect to={`/products`} />
    }
    return (
      <Layout>
        <form className="create-form" onSubmit={this.handleSubmit}>
          <input
            className="input-name"
            placeholder='Title'
            value={post.title}
            name='title'
            required
            autoFocus
            onChange={this.handleChange}
          />
          <input
            className="input-price"
            placeholder='Author'
            value={post.author}
            name='author'
            required
            onChange={this.handleChange}
          />
          <textarea
            className="textarea-description"
            rows={10}
            placeholder='Description'
            value={product.description}
            name='description'
            required
            onChange={this.handleChange}
          />
          <input
            className="input-image-link"
            placeholder='Image Link'
            value={product.imgURL}
            name='imgURL'
            required
            onChange={this.handleChange}
          />
          <button type='submit' className="submit-button">Submit</button>
        </form>
      </Layout>
    )
  }
}

export default ProductCreate