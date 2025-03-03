import React,{ useState,useContext} from 'react';
import { Link } from 'react-router-dom';
import NoteContext from '../Context/NoteContext';

export default function Home() {

    const context = useContext(NoteContext);
    const { state,setState } = context;

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Navbar</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </Link>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to="#">Action</Link></li>
                                    <li><Link className="dropdown-item" to="#">Another action</Link></li>
                                    <li><hr className="dropdown-divider"></hr></li>
                                    <li><Link className="dropdown-item" to="#">Something else here</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link disabled" aria-disabled="true">Disabled</Link>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                                <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
            {
                state.map((note) => {
                    return <div key={note._id}>{note.name}</div>;
                })
            }
        </>
    )
}