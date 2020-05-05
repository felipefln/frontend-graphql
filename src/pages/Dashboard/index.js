import React from 'react'
import './styles.css'
import { AiFillDelete } from "react-icons/ai";
import { MdEdit } from 'react-icons/md'
import { GrView, GrFormAdd } from "react-icons/gr";
import { Link } from 'react-router-dom';

export default function Dashboard() {
    return (
        <div>
            <div class="header">
                <h4 class="text-center">Lista de <b>Apartamentos</b> cadastrados</h4>
                <Link to="/new">
                    <button type="button" class="btn btn-info add-new"><GrFormAdd /> Add New</button>
                </Link>
            </div>
            <table class="table table-bordered">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Numero <i class="fa fa-sort"></i></th>
                        <th>Bloco</th>
                        <th>Residentes</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Thomas Hardy</td>
                        <td>89 Chiaroscuro Rd.</td>
                        <td>Portland</td>
                        <td>
                            <a href="#" class="view" title="View" data-toggle="tooltip"><GrView /></a>
                            <a href="#" class="edit" title="Edit" data-toggle="tooltip"><MdEdit /></a>
                            <a href="#" class="delete" title="Delete" data-toggle="tooltip"><AiFillDelete /></a>
                        </td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Maria Anders</td>
                        <td>Obere Str. 57</td>
                        <td>Berlin</td>
                        <td>
                            <a href="#" class="view" title="View" data-toggle="tooltip"><GrView /></a>
                            <a href="#" class="edit" title="Edit" data-toggle="tooltip"><MdEdit /></a>
                            <a href="#" class="delete" title="Delete" data-toggle="tooltip"><AiFillDelete /></a>
                        </td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Fran Wilson</td>
                        <td>C/ Araquil, 67</td>
                        <td>Madrid</td>
                        <td>
                            <a href="#" class="view" title="View" data-toggle="tooltip"><GrView /></a>
                            <a href="#" class="edit" title="Edit" data-toggle="tooltip"><MdEdit /></a>
                            <a href="#" class="delete" title="Delete" data-toggle="tooltip"><AiFillDelete /></a>
                        </td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>Dominique Perrier</td>
                        <td>25, rue Lauriston</td>
                        <td>Paris</td>
                        <td>
                            <a href="#" class="view" title="View" data-toggle="tooltip"><GrView /></a>
                            <a href="#" class="edit" title="Edit" data-toggle="tooltip"><MdEdit /></a>
                            <a href="#" class="delete" title="Delete" data-toggle="tooltip"><AiFillDelete /></a>
                        </td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>Martin Blank</td>
                        <td>Via Monte Bianco 34</td>
                        <td>Turin</td>
                        <td>
                            <a href="#" class="view" title="View" data-toggle="tooltip"><GrView /></a>
                            <a href="#" class="edit" title="Edit" data-toggle="tooltip"><MdEdit /></a>
                            <a href="#" class="delete" title="Delete" data-toggle="tooltip"><AiFillDelete /></a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}