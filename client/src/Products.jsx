import ReactPaginate from 'react-paginate'
import React, { useEffect, useState } from 'react'
import { CardGroup, Row, FormControl, Col, Card, Button } from 'react-bootstrap';
import Header from './Header';
import './components/Topbar/bootstrap.css';
import Axios from "axios";
import Product from "./Product";
import { useParams, Link } from 'react-router-dom';

export default function Products() {

  const [products, setProducts] = useState([])
  const [pageNumber, setPageNumber] = useState(0)
  const productsPerPage = 8
  const visitedPages = pageNumber * productsPerPage

  const [input, setInput] = useState("")
  const [output, setOutput] = useState([])
  let { search } = useParams()

  const displayProducts = products.slice(visitedPages, visitedPages + productsPerPage).map((product) => {
    return (<Product
      key={product.prodid}
      product={product}
    />)
  })
  const displayFilteredProducts = output.map((filteredProducts) => {
    return (
      <Col style={{ padding: '20px' }} key={filteredProducts.prodid}>
        <Card style={{ width: '18rem' }}>
          <Card.Img style={{ width: '18rem', height: '18rem' }} variant="top" src={'http://localhost:5000/images/' + filteredProducts.img} />
          <Card.Body>
            <Card.Title>{filteredProducts.product}</Card.Title>
            <Link to={`/products/${filteredProducts.prodid}`}>
              <Button variant="primary" >View</Button>
            </Link  >
          </Card.Body>
        </Card>
      </Col>)
  })

  useEffect(() => {
    Axios.get('/products')
      .then((res) => {
        setProducts(res.data.data.products)
      });
  }, [])

  const pageCount = Math.ceil(products.length / productsPerPage)
  const pageChange = ({ selected }) => {
    setPageNumber(selected)
  }
  search = input;
  useEffect(() => {
    Axios.get(`/products/input/${search}`)
      .then((res) => {
        setOutput(res.data.data.filteredProducts)
      });
  }, [input])

  return (
    <>

      <Header title=''>
        <Row>
          <FormControl
            style={{ width: "1000px", marginLeft: "10%", display: "flex" }}
            className="search"
            type="search"
            placeholder="Search"
            aria-label="Search"
            onChange={e => setInput(e.target.value.toLowerCase())}
          />
        </Row>
        <CardGroup style={{ display: 'flex', flexDirection: 'row' }}>
          <Row >
            {input.length === 0
              ? <>{displayProducts}</>
              : <>{console.log(output)}
                {displayFilteredProducts}
              </>}
          </Row>
        </CardGroup>
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
          pageCount={pageCount}
          onPageChange={pageChange} />
      </Header>
    </>);
}

