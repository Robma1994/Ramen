const app = new Vue({
    el: '#root',
    data: {
        images: [
            {
                link: '_mountains',
                name: 'Neve',
                icon: 'fas fa-snowflake'
            },
            {
                link: '_rain',
                name: 'Pioggia',
                icon: 'fas fa-cloud-rain'
            },
            {
                link: '_sun',
                name: 'Sole',
                icon: 'fas fa-sun'
            },
        ],
        count: 0,
        off: 'none',
        on:'block',
    },
    methods: {
        chooise(index){
            this.count = index
            this.off = 'block'
        }
    }
})

