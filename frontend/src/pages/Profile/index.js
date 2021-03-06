import React, {useState, useEffect} from "react";
import logoImg from "../../assets/logo.svg";
import { Link, useHistory } from 'react-router-dom';
import api from "../../services/api";
import {FiPower, FiTrash2} from "react-icons/fi"

import "./styles.css";

export default function Profile(){
    const [incidents, setIncidents] = useState([]);
    
    const ongName = localStorage.getItem("ongName")
    const ongId = localStorage.getItem("ongId")

    const history = useHistory();

    useEffect(() => {
        api.get('profile_incidents', {
            headers: {
                authorization: ongId,
            }
        }).then(response => {
            setIncidents(response.data);
        })
    },[ongId])

    async function handleLogout(){
        try{
            // limpa os headers
            localStorage.clear();

            history.push('/');

        }catch (err){
            alert("Erro ao deslogar");
        }
    }

    async function handleDeleteIncident(id){
        try{
            await api.delete("incidents/"+id, {
                headers: {
                    authorization: ongId
                }
            })

            setIncidents(incidents.filter(incident => incident.id !== id));
        }catch (err){
            alert("erro ao tentar deletar caso")
        }
    }

    return (
        <div className="profile-container">
            <header>
                <img src={logoImg} alt="Be the hero"/>
                
                <span>Bem-vinda, {ongName}</span>

                <Link className="button" to="/incidents/new">Cadastrar novo caso</Link>

                <button onClick={handleLogout} type="button">
                    <FiPower size={18} color="#e02041" />
                </button>
            </header>

            <h1>Casos cadastrados</h1>
            <ul>
                {incidents.map(incident => (
                    <li key={incident.id}>
                        <strong>CASO: </strong>
                        <p>{incident.title}</p>
                        <strong>DESCRIÇÃO: </strong>
                        <p>{incident.description}</p>
                        <strong>VALOR: </strong>
                        <p>{Intl.NumberFormat("pt-BR",{ 
                            style:"currency",
                            currency: "BRL"
                        }).format(incident.value)}</p> 

                        <button onClick={() => handleDeleteIncident(incident.id)} type="button">
                            <FiTrash2 size={20} color="#a8a8b3"/>
                        </button>
                    </li>
                ))}
                
            </ul>
        </div>
    )
}