import { v4 as uuidv4 } from 'uuid';
let userList= [];

export const getUsers =(req,res) =>{  
    res.send(userList);
}

export const createUser = (req,res)=>{
    const user = req.body;
    userList.push({...user, id:uuidv4()});
    res.send("user added");    
}

export const getUserById = (req,res) =>{    
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