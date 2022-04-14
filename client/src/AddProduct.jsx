import React, { useState } from 'react'
import { Button, Card, Col } from 'react-bootstrap';
import Header from './Header';
import './components/Topbar/bootstrap.css';
import Axios from "axios";
import { useNavigate } from 'react-router-dom';

const AddProduct = () => {

    const navigate = useNavigate();
    const [file, setFile] = useState("");
    const [product, setProduct] = useState('');
    const [description, setDescription] = useState('')

    const saveFile = (e) => {
        setFile(e.target.files[0]);
    };

    const products = () => {
        const formData = new FormData();

        formData.append("product", product);
        formData.append("description", description);
        formData.append("img", file);

        const config = {
            headers: { 'content-type': 'multipart/form-data' }
        }

        Axios.post('/add-product', formData, config)
            .then(() => {
                navigate('/products');

            })
            .catch(err => { throw err });
    };

    return (
        <Header Header title='Add new product' >

            <Card className="text-center" style={{ diplay: "flex", flexDirection: "col" }} >
                <Card.Body>
                    <Card.Text >
                        <input
                            name='product'
                            className='input0'
                            type='text'
                            placeholder='Products name'
                            required onChange={(e) => setProduct(e.target.value)} /><br /><br />
                        <textarea
                            name='description'
                            className='input'
                            type='text'
                            placeholder='Description'
                            required onChange={(e) => setDescription(e.target.value)} /><br /><br />
                        <input
                            name='img'
                            type="file"
                            onChange={saveFile} /><br /><br />
                    </Card.Text>
                    <Button type="button" onClick={products}>Add</Button>
                </Card.Body>
            </Card>
        </Header >
    )
}
export default AddProduct