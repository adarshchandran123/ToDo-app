import "./App.css";
import { useState,useEffect } from "react";

function App() {
  const initialState = JSON.parse(localStorage.getItem("toDos")) || [];
  const [toDos, setToDos] = useState(initialState);
  const [toDo, setToDo] = useState("");
  const [newStatus,setNewStatus] = useState('All');
  return (
    <div className="App">
      <div className="container">
        {/* Task Area  */}
        <div className="sider">

          {
            // To save in the local storage
  useEffect(() => {
    localStorage.setItem("toDos", JSON.stringify(toDos));
    console.log("Local : ",localStorage.getItem(toDos))
  }, [toDos])
          }
          


          <div className="my-name">
            <h2 style={{marginLeft:'30%',fontSize:40}}>To Do </h2>
          </div>

          <div className="">


            <select value={newStatus} onChange={(e)=>{
              setNewStatus(e.target.value)
             
            }} className="select_option" name="Todo_status" >
              <option value="All">All</option>
              <option value="completed">Completed</option>
              <option value="not_completed">Not-Completed</option>
              
            </select>

          </div>

         

          <div className="uppertaskarea">
            <div className="taskarea">
              <div className="tasks">
                <input
                  maxLength="25"
                  value={toDo}
                  required
                  onChange={(e) => {
                    setToDo(e.target.value);
                    
                  }}
                  style={{
                    width: 230,
                    borderRadius: 10,
                    fontSize: 25,
                    fontWeight: "bolder",
                  }}
                ></input>
                <span style={{ color: "white" }}>
                  <i
                    onClick={() => {
                      
                      setToDos([
                        ...toDos,
                        { id: Date.now(), text: toDo, status: false },
                      ]);
                    }}
                    style={{ fontSize: 30, marginTop: 10, marginRight: 20 }}
                    class="fas fa-plus"
                  ></i>
                </span>
              </div>

              <div className="Area">
                {toDos.map((obj) => {
                  const condition = obj.status

                  

                 
                  if(newStatus === 'All'){

                    return (
                    
                      <div style={{backgroundColor:condition ? '#0d2947':''}} className="tasks">
                        
                        <input 
                          onChange={(e) => {
                           
                            setToDos(
                              toDos.filter((obj2) => {
                                if (obj2.id === obj.id) {
                                 
                                  obj2.status = e.target.checked;
                                }
                                return obj2;
                              })
                            );
                          }}
                          className="check_box"
                          style={{ marginTop: 15 }}
                          value={obj.status}
                          type="checkbox"
                        ></input>


  
                        <p style={{textDecorationLine:condition ?'line-through':''}}>{obj.text}</p>
                        <div className="task-update-delete">
                          
                          <div className="delete">
                            
                              <i onClick={()=>{
                                setToDos(toDos.filter(obj2=>{
                                  if(obj2.id !== obj.id){
                                    
                                    return obj2
                                    
                                  }else{
                                    
                                    return null
                                  }
                                }))
                              }} className="fas fa-times-circle"></i>
                            
                          </div>
                        </div>
                      </div>
                    );


                  }else if(newStatus === 'completed'){

                    if(condition){


                      return (
                    
                        <div style={{backgroundColor:condition ? '#0d2947':''}} className="tasks">
                          <input
                            onChange={(e) => {
                             
                              setToDos(
                                toDos.filter((obj2) => {
                                  if (obj2.id === obj.id) {
                                    
                                    obj2.status = e.target.checked;
                                  }
                                  return obj2;
                                })
                              );
                            }}
                            className="check_box"
                            style={{ marginTop: 15 }}
                            value={obj.status}
                            type="checkbox"
                          ></input>
    
                          <p style={{textDecorationLine:condition ?'line-through':''}}>{obj.text}</p>
                          <div className="task-update-delete">
                            
                            <div className="delete">
                              
                                <i onClick={()=>{
                                  setToDos(toDos.filter(obj2=>{
                                    if(obj2.id !== obj.id){
                                     
                                      return obj2
                                      
                                    }else{
                                      
                                      return null
                                    }
                                  }))
                                }} className="fas fa-times-circle"></i>
                              
                            </div>
                          </div>
                        </div>
                      );


                    }


                  }else if(newStatus === 'not_completed'){
                    if(condition === false){

                      return (
                    
                        <div style={{backgroundColor:condition ? '#0d2947':''}} className="tasks">
                          <input
                            onChange={(e) => {
                             
                              setToDos(
                                toDos.filter((obj2) => {
                                  if (obj2.id === obj.id) {
                                    
                                    obj2.status = e.target.checked;
                                  }
                                  return obj2;
                                })
                              );
                            }}
                            className="check_box"
                            style={{ marginTop: 15 }}
                            value={obj.status}
                            type="checkbox"
                          ></input>
    
                          <p style={{textDecorationLine:condition ?'line-through':''}}>{obj.text}</p>
                          <div className="task-update-delete">
                           
                            <div className="delete">
                              
                                <i onClick={()=>{
                                  setToDos(toDos.filter(obj2=>{
                                    if(obj2.id !== obj.id){
                                     
                                      return obj2
                                      
                                    }else{
                                      
                                      return null
                                    }
                                  }))
                                }} className="fas fa-times-circle"></i>
                              
                            </div>
                          </div>
                        </div>
                      );

                    }
                  }
                  return null

                })}
              </div> 

  


            </div>
          </div>


        </div>
      </div>
    </div>
  );
}

export default App;
