import React, { useEffect, useState } from 'react'
import { Button, Card } from 'react-bootstrap';
import './components/Topbar/bootstrap.css';
import Axios from "axios";
import { useParams } from 'react-router-dom';
import ReactStars from 'react-rating-stars-component';
import { useSelector } from 'react-redux'

const ProductDetails = () => {
  const [product, setProduct] = useState([])
  const [avg, setAvg] = useState(0)
  const { id } = useParams();
  const { user } = useSelector((state) => state.user)
  const user_id = user.id

  useEffect(() => {
    getProduct();
  }, [])


  const [comment, setComment] = useState('')
  const [review, setReview] = useState(0)

  const ratingChanged = (review) => {
    setReview(review)

  };

  const getProduct = () => {
    Axios.get(`/products/${id}`,)
      .then((res) => {
        setProduct(res.data.data.product)
        setAvg(res.data.data.avg)
      })
      .catch(err => { throw err });
  }

  const reviews = () => {
    Axios.post('/set-review', {
      user_id,
      id,
      review,
      comment
    })
      .then(() => {
        getProduct()
        setReview()
        setComment('')

      })
      .catch(err => { throw err });
  };

  return (
    <>
      {Object.keys(product).length
        ? <> <Card style={{ alignItems: 'center', padding: '50px', }}>

          <Card.Title>
            <h1>{product.product} {avg || 0}</h1>

          </Card.Title>

          <Card.Img style={{ width: '500px', height: '500px' }} variant="top" src={'http://localhost:5000/images/' + product.img} />
          <Card.Body>

            <Card.Subtitle>{product.description}</Card.Subtitle>
          </Card.Body>
          {/*REVIEW*/}

          <Card class="col-md-12 text-center" style={{ width: '500px', height: '300px', border: "1px solid", borderRadius: "10px", padding: "20px", alignItems: 'center' }}>

            <ReactStars
              count={5}
              onChange={ratingChanged}
              size={30}
              activeColor="#78c2ad" />

            <Card.Title>
              <>
                <input style={{ width: "450px", height: "100px" }} name='comment' type='text' placeholder='Review' onChange={(e) => setComment(e.target.value)} />

              </>
              <br />
              <Button style={{ width: "200px", margin: "center" }} type='button' variant='outline-secondary' onClick={reviews}>Submit</Button>
            </Card.Title>
          </Card>
        </Card>


        </>
        : <></>}
<Card style={{ alignItems: 'center'}}>
        {Object.keys(product).length ?
          <>{product.reviews.map((review) => {
            return (
              <Card key={review.id} style={{ alignItems: 'center', padding: '20px', width: "500px" }}>
                <Card.Body>
                  <Card.Text>
                    username: {review.name} {review.surname}<br />
                  </Card.Text>
                  <Card.Text>
                    review: {review.review} <br />
                  </Card.Text>
                  <Card.Text>
                    comment: {review.comment} <br />
                  </Card.Text>
                </Card.Body>
              </Card>
            )
          })}
          
          </>
          : <></>}
          </Card>
         </ >
  )
}

export default ProductDetails