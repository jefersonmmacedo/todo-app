import React from 'react'
import Button from '../template/button';
import Grid from '../template/grid';

const todoForm = function (props) {
    const KeyHandler = function (e) {
        if (e.key === 'Enter') {
            e.shiftKey ? props.handleSearch() : props.handleAdd() 
        } else if (e.key === 'Escape'){
            props.handleClear()
        }
    }
    return (
       <div role="form" className="todoForm">
           <Grid cols="12 9 10">
           <input id="description" name="description" type="text" className="form-control" placeholder="Adicionar tarefa"
           value={props.description} onKeyUp={KeyHandler} onChange={props.handleChange}/>
           <small id="emailHelp" className="form-text text-muted"> Atalhos: Enter = Adicionar | Shift + Enter = Pesquisar | Esc = Sair da pesquisa.</small>
           </Grid>
          <Grid cols="12 3 2">
          <Button style="primary" icon="plus" onClick={props.handleAdd}></Button>
          <Button style="info" icon="search" onClick={props.handleSearch}></Button>
          <Button style="default" icon="close" onClick={props.handleClear}></Button>
          </Grid>
            
           
       </div>
    )
}


export default todoForm;


