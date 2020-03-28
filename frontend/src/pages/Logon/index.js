import React, {useState} from 'react';
import heroesImg from "../../assets/heroes.png";
import logoImg from "../../assets/logo.svg";
import api from "../../services/api";
import { Link, useHistory } from 'react-router-dom'

import {FiLogIn} from "react-icons/fi"


import "./styles.css";

export default function Logon() {
    const [id, setId] = useState("");

    const history = useHistory();

    async function handleLogon(e){
        e.preventDefault();

        try {
            const response = await api.post("sessions", {id});

            // salvar nos dados do navegador do usuario
            localStorage.setItem("ongId", id);
            localStorage.setItem("ongName", response.data.name);

            history.push("/profile")
        }catch (err) {
            alert ("Falha no logon");
        }

    }

    return (
        <div className="logon-container">
            <section className="form">
                <img src={logoImg} alt="Be the Hero"/>

                <form onSubmit={handleLogon}>
                    <h1>Faça seu Logon</h1>
                    <input 
                        type="text" 
                        placeholder="Sua ID"
                        value={id}    
                        onChange={e => setId(e.target.value)}
                    />
                    <button className="button" type="submit">Entrar</button>
                    <Link className="back-link" to="/register">
                        <FiLogIn size={16} color="#e02041" />
                        Não tenho cadastro
                    </Link>
                </form>
            </section>
            <img src={heroesImg} alt="Heroes"/> 
        </div>

        

    )    
}