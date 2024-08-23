import style from "./ToDoBody.module.scss"

function Body() {

    return (
      <>
        <div clasName={style.ToDoBody}>
            <p>Lav Header Component</p>
            <p>Opsæt stylesheet</p>
            <p>Fix npm errors</p>
            <p>Lav footer</p>
        </div>
      </>
    )
  }
  
  export default Body