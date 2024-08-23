import style from "./ToDoBody.module.scss"

function Body() {

    return (
      <>
        <div clasName={style.ToDoBody}>
            <img src="\src\assets\images\right.png" alt="rightArrow" />
            <div>
            <h1>To Do</h1>
            <p>Lav Header Component</p>
            <p>Opsæt stylesheet</p>
            <p>Fix npm errors</p>
            <p>Lav footer</p>
            </div>   
            <script>
                
            </script>
        </div>
      </>
    )
  }
  
  export default Body