import React, {useState} from "react";
import logoImg from "../../assets/logo.svg";
import {FiArrowLeft} from "react-icons/fi"
import { Link, useHistory } from 'react-router-dom'

import api from "../../services/api";


import "./styles.css"

export default function Register(){
    /* variaveis do formulario como estados */
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [whats, setWhats] = useState('');
    const [city, setCity] = useState('');
    const [uf, setUf] = useState('');

    const history = useHistory();

    async function handleRegister(e){
        e.preventDefault();

        const data = {
            name,
            email,
            whats,
            city,
            uf
        };
        
        try {
            const response = await api.post("ongs", data);

            alert(`Seu ID: ${response.data.id}`)
            // enviar o usuario para a pagina inicial atraves do history
            history.push("/");
        }catch (err) {
            alert("ERRO no cadastro")
        }

        

    }

    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be the Hero"/>
                    <h1>Cadastro</h1>
                    <p>
                        Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.
                    </p>
                    <Link className="back-link" to="/">
                        <FiArrowLeft size={16} color="#e02041" />
                        Voltar
                    </Link>
                </section>
                <form onSubmit={handleRegister}>
                    <input 
                        placeholder="Nome da ONG"
                        value={name}    
                        onChange={e => setName(e.target.value)}
                    />

                    <input 
                        type="email" 
                        placeholder="E-mail"
                        value={email}    
                        onChange={e => setEmail(e.target.value)}
                    />

                    <input 
                        placeholder="WhatsApp"
                        value={whats}    
                        onChange={e => setWhats(e.target.value)}
                    />

                    <div className="input-group">
                        <input 
                            placeholder="Cidade"
                            value={city}    
                            onChange={e => setCity(e.target.value)}
                        />

                        <input 
                            placeholder="UF" 
                            style={{width: 80}}
                            value={uf}    
                            onChange={e => setUf(e.target.value)}
                        />
                    </div>

                    <button className="button" type="submit">

                    </button>
                    

                </form>
            </div>
        </div>
    )
}