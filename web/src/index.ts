import { User } from './models/User';
const user = new User({ name: 'myname', age: 11234 });

user.set({ name: 'newname' });

console.log(user.get('name'));
console.log(user.get('age'));
