const app = {
    data() {
        return {
            firstname: 'Somchai',
            lastname: 'Chasa',
            image: './images/chai.png',
            career: 'Student IT',
            a:'7',
            f:'7',
            r:'7'
        }
    }
}
mountedApp=Vue.createApp(app).mount('#app')