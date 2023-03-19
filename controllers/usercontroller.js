import userModel from '../models/userModel.js';
import userSchema from '../validators/userValidator.js';

let userList= [];

export const getUsers =(req,res) =>{  
    res.send(userList);
}

export const createUser = (req,res)=>{

    const { error, value } = userSchema.validate(req.body, { abortEarly: false });

    if (error) {
        const messages = error.details.map((detail) => detail.message);
        return res.status(400).json({ errors: messages });
    }
    const user = new userModel(value.firstName, value.lastName, value.age);
  
    userList.push(user);
    res.send("user added");
}

export const getUser = (req,res) =>{    
    const {id} = req.params;
    const foundUser = userList.find((user) =>user.id === id);
    res.send(foundUser);
}

export const deleteUserById = (req,res)=>{
     const {id} = req.params;
     userList = userList.filter((user)=>user.id !== id);
     res.send("user deleted");
}

export const updateUserById = (req,res)=>{
    const {id} = req.params;
    const foundUser = userList.find((user) =>user.id === id);

    const {firstName,lastName,age} = req.body;

    if(firstName) foundUser.firstName = firstName;
    if(lastName) foundUser.lastName = lastName;
    if(age) foundUser.age = age;
    res.send("user updated");
}