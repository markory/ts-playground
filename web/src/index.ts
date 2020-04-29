import { Collection } from './models/Collection';
import { UserProps, User } from './models/User';
import { UserList } from './views/UserList';

//const user = User.buildUser({ name: 'NAME', age: 20 });
const users = new Collection('http://localhost:3000/users', (json: UserProps) => {
    return User.buildUser(json);
});

users.on('change', () => {
    const root = document.getElementById('root');

    if (root) {
        //edit user: new UserEdit(root, user).render();
        new UserList(root, users).render();
    }
});

users.fetch();
