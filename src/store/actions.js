export default {
    saveUserName(context, username) {
        context.commit('saveUserName', username);
    },
    saveCartCount(context, number) {
        context.commit('saveCartCount', number);
    }
}