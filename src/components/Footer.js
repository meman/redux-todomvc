import React,{Component} from 'react';

class Footer extends Component {
  _renderTodoCount(){
    const { activeCount } = this.props;
    const itemWord = activeCount === 1 ? 'item' : 'items';
   return (
     <span className="todo-count">
       <strong>{activeCount || 0}</strong> {itemWord} left
     </span>
   );
  }
  _renderClearCompletedBtn(){
    const {completedCount,removeCompleted} = this.props;
    if(completedCount > 0){
      return <button onClick={removeCompleted}>Clear Completed!</button>;
    }
  }
  render(){
    const filterOptions = ['ALL','ACTIVE','COMPLETED'];
    const {changeFilter} = this.props;
    return <div>
    {this._renderTodoCount()}
    <div className='todo-footer'>
      {filterOptions.map((option,index)=>{
        return <button key={index} onClick={(e)=>changeFilter(option)}>{option}</button>;
      })}
    </div>
    {this._renderClearCompletedBtn()}
    </div>;
  }
}

export default Footer;
