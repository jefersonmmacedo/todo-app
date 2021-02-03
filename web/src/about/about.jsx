import React from 'react'
import PageHeader from '../template/pageHeader'
const About = function (props) {
    return (
        <div>
             <PageHeader name='Todo App' small='Sobre nós'></PageHeader>
             <hr/>
            <h3><b>Sobre o nosso app</b></h3>
            <h4><i>O To Do possibilita que você tenha mais foco, do trabalho ao lazer.</i></h4>
            <br/>
            <p><b>Um planejador diário inteligente</b></p>
            <p>Prepare-se para o sucesso com o Meu Dia, sugestões inteligentes e personalizadas para atualizar sua lista de tarefas diárias.</p>


        </div>
    )
}

export default About;