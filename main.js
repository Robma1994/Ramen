const app = new Vue({
    el: '#root',
    data: {
        images: ['ciao','ciop','flip','ciao','ciop','flip','ciao','ciop','flip',],
        count: 0,
        off: 'none'
    },
    methods: {
        chooise(index){
            this.count = index
            this.off = 'block'
        }
    }
})

