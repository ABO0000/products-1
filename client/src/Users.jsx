import React, { useEffect, useState } from 'react'
import Header from './Header'
import { FormControl, Row, Table } from 'react-bootstrap';
import Axios from 'axios';
import ReactPaginate from 'react-paginate';
import "/home/user/test-project/client/src/components/Topbar/bootstrap.css"
import { useParams} from 'react-router-dom';

export default function Users() {
  const [users, setUser] = useState([]);
  const [pageNumber, setPageNumber] = useState(0)
  const usersPerPage = 10
  const visitedPages = pageNumber * usersPerPage

  const [input, setInput] = useState("")
  const [output, setOutput] = useState([])
  let { search } = useParams()

  const displayFilteredUsers =output.map((user) => {
    return (
      <tr key={user.id} >
        <td>{user.id}</td>
        <td>{user.name}</td>
        <td>{user.surname}</td>
        <td>{new Date().getFullYear() - new Date(user.age).getFullYear()}</td>
        <td>{user.email}</td>
        <td>{user.isAdmin}</td>
      </tr>)

  })

  const displayUser = users.slice(visitedPages, visitedPages + usersPerPage).map((user) => {
    return (
      <tr key={user.id} >
        <td>{user.id}</td>
        <td>{user.name}</td>
        <td>{user.surname}</td>
        <td>{new Date().getFullYear() - new Date(user.age).getFullYear()}</td>
        <td>{user.email}</td>
        <td>{user.isAdmin}</td>
      </tr>)

  })

  search = input;
  useEffect(() => {
    Axios.get(`/users/input/${search}`)
      .then((res) => {
        setOutput(res.data.data.filteredUser)
      });
  }, [input])
  useEffect(() => {
    Axios.get('/users')
      .then((response) => {
        setUser(response.data.data.users)
      })
      .catch((err) => {
        console.log(err);
      })
  }, [])

  const pageCount = Math.ceil(users.length / usersPerPage)
  const pageChange = ({ selected }) => {
    setPageNumber(selected)
  }
  return (
    <Header title='Users list'>
       <Row>
          <FormControl
            style={{ width: "1000px", marginLeft: "10%", display: "flex"}}
            className="search"
            type="search"
            placeholder="Search"
            aria-label="Search"
            onChange={e => setInput(e.target.value.toLowerCase())}
          />
        </Row>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Surname</th>
            <th>Age</th>
            <th>email</th>
            <th>isAdmin</th>
          </tr>
        </thead>
        <tbody>
          {input.length===0
          ?<>{displayUser}</>
          :<>{displayFilteredUsers}</>}
          
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
        pageCount={pageCount}
        onPageChange={pageChange} />
    </Header>
  )
}