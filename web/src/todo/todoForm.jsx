import React from 'react'
import Button from '../template/button';
import Grid from '../template/grid';

const todoForm = function (props) {
    return (
       <div role="form" className="todoForm">
           <Grid cols="12 9 10">
           <input id="description" name="description" type="text" className="form-control" placeholder="Adicionar tarefa"
           value={props.description} onChange={props.handleChange}/>
           </Grid>
          <Grid cols="12 3 2">
          <Button style="info" icon="plus" onClick={props.handleAdd}></Button>
          </Grid>
            
           
       </div>
    )
}


export default todoForm;


