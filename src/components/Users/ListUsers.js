import React from 'react'
import Card from "../ui/Card";
import classes from "./AddUser.module.css"

const ListUsers = props => {



    return <Card>
        {props.items && props.items.map((item, index) => {
            return <div key={"vid" + index} className={classes.roww}>
                <p key={index}> {index} - {item.name} - {item.age}
                <button key={"delete" + index} value="delete" className={classes.deleteButton} onClick={() => props.onDeleteItem(index)}> delete </button>
                </p>
            </div>
        })
        }
    </Card>


}

export default ListUsers;