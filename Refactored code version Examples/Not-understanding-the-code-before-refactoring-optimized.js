// ✅ cleaner code preserving the existing behavior
async function fetchUserData(userId: string) {
    const cachedData = await cacheManager.get(`user_${userId}`);
    if (cachedData) {
        return cachedData;
    }

    const userData = await api.fetchUser(userId);
    await cacheManager.set(`user_${userId}`, userData, { expiresIn: '1h' });
    return userData;
}
