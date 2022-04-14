import React, { useEffect, useState } from 'react'
import Header from './Header'
import { Table } from 'react-bootstrap';
import Axios from 'axios';
import ReactPaginate from 'react-paginate';
import '/home/user/test-project/client/src/components/Topbar/bootstrap.css'
export default function Reviews() {
  const [reviews, setReview] = useState([]);
  const [pageNumber, setPageNumber] = useState(0)
  const reviewsPerPage = 10
  const visitedPages = pageNumber * reviewsPerPage

  const displayReview = reviews.slice(visitedPages, visitedPages + reviewsPerPage).map((review) => {
    return (
      <tr key={review.id} >
        <td>{review.id}</td>
        <td>{review.user_id}</td>
        <td>{review.product_id}</td>
        <td>{review.review}</td>
        <td>{review.comment}</td>
      </tr>)
  })
  const pageCount = Math.ceil(reviews.length / reviewsPerPage)
  const pageChange = ({ selected }) => {
    setPageNumber(selected)
  }
  useEffect(() => {
    Axios.get('/reviews')
      .then((response) => {
        setReview(response.data.data.reviews)
      });
  }, [])

  return (
    <Header title='Reviews'>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>User id</th>
            <th>Product id</th>
            <th>review</th>
            <th>comment</th>
          </tr>
        </thead>
        <tbody>
          {displayReview}
        </tbody>
      </Table>
      <ReactPaginate breakClassName={'page-item'}
        breakLinkClassName={'page-link'}
        containerClassName={'pagination'}
        pageClassName={'page-item'}
        pageLinkClassName={'page-link'}
        previousClassName={'page-item'}
        previousLinkClassName={'page-link'}
        nextClassName={'page-item'}
        nextLinkClassName={'page-link'}
        activeClassName={'active'}
        style={{justifyContent:"space between"}}
        pageCount={pageCount}
        onPageChange={pageChange} />
    </Header>
  )
}