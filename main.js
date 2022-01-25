const app = Vue.createApp({
    data() {
        return {
            name : 'Vue Initial',
            url : 'https://www.google.com',
            stoke : true,
            degrees : [ 'PSC', 'JSC', 'SSC', 'HSC', 'Varsity' ],
            courses: [ 'WEB', 'MOBILE', 'iOS' ],
            cart : 0,
            //addToCart : 'HI',
            pSty : { 
                backgroundColor : 'red',
                fontSize : '20px',
                color: 'whi'
             }
        }
    },
    methods: {
        addToCart() {
            this.cart += 1; 
        }
    }
});