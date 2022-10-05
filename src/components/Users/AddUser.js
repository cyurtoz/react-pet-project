import React, {useState} from 'react'
import Card from "../ui/Card";
import classes from "./AddUser.module.css"

const AddUser = props => {

    const handleSubmit = (e) => {
        e.preventDefault()
        var obj = {};
        obj['name'] = enteredName;
        obj['age'] = enteredAge;
        props.addItem(obj)
    }

    const [enteredName, setEnteredName] = useState("")
    const [enteredAge, setEnteredAge] = useState(0)

    const onChangeUsername = (e) => {
        setEnteredName(e.target.value)
    }

    const onChangeAge = (e) => {
        setEnteredAge(e.target.value)
    }

    return (
        <Card className={classes.input}>
            <form onSubmit={handleSubmit}>
                <label className={classes.inp_label} htmlFor="username">Username:</label>
                <input name="username" type="text" onChange={onChangeUsername}/>
                <label className={classes.inp_label}>Age (Years):</label>
                <input name="age_years" type="number" onChange={onChangeAge}/>
                <input className={classes.submit} type="submit" value="submit"></input>
            </form>
        </Card>
    )
}

export default AddUser;
