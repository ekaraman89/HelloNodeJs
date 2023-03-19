import { v4 as uuidv4 } from 'uuid';

class userModel {
  constructor(firstName, lastName, age) {
    this.id = uuidv4();
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
}

export default userModel;