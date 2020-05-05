import React, { useState, useEffect } from 'react'
import './styles.css'
import { AiFillDelete } from "react-icons/ai";
import { MdEdit } from 'react-icons/md'
import { GrView, GrFormAdd } from "react-icons/gr";
import { Link } from 'react-router-dom';
import api from '../../services/api';

export default function Dashboard() {
    const [apartamentos, setApartamentos] = useState([])
    useEffect(() => {
        api.get('apartmant', {

        }).then(response => {
            setApartamentos(response.data)
        })
    }, [])

    return (
        <div>
            <div className="header">
                <h4 className="text-center">Lista de <b>Apartamentos</b> cadastrados</h4>
                <Link to="/new">
                    <button type="button" className="btn btn-info add-new"><GrFormAdd /> Add New</button>
                </Link>
            </div>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>Numero <i className="fa fa-sort"></i></th>
                        <th>Bloco</th>
                        <th>Residentes</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                {
                    apartamentos.map(a => (
                        <tbody>
                            <tr>
                                <td>{a.number}</td>
                                <td>{a.blc}</td>
                                <td>Name</td>
                                <td>
                                    <a href="#" className="view" title="View" data-toggle="tooltip"><GrView /></a>
                                    <a href="#" className="edit" title="Edit" data-toggle="tooltip"><MdEdit /></a>
                                    <a href="#" className="delete" title="Delete" data-toggle="tooltip"><AiFillDelete /></a>
                                </td>
                            </tr>
                        </tbody>
                    ))
                }
            </table>
        </div >
    )
}