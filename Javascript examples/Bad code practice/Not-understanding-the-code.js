// 🫤 a bit too much hard coded stuff here
function fetchUserData(userId: string) {
    const cachedData = localStorage.getItem(`user_${userId}`);
    if (cachedData) {
        return JSON.parse(cachedData);
    }

    return api.fetchUser(userId).then(userData => {
        localStorage.setItem(`user_${userId}`, JSON.stringify(userData));
        return userData;
    });
}


// bad refactoring example
// 🚩 where did the caching go?
function fetchUserData(userId: string) {
    return api.fetchUser(userId);
}