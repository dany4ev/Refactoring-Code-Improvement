// 🫤 this code could be cleaner
function processUsers(users: User[]) {
    const result = [];
    for (let i = 0; i < users.length; i++) {
        if (users[i].age >= 18) {
            const formattedUser = {
                name: users[i].name.toUpperCase(),
                age: users[i].age,
                isAdult: true
            };
            result.push(formattedUser);
        }
    }
    return result;
}
