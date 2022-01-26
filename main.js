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
    computed : {
        nameWithCart() {
            return this.name + ' ' + this.cart;
        }
    },
    methods: {
        addToCart() {
            this.cart += 1; 
        }
    }
});

app.component( 'contact-info', {
    data() {
        return {
            name : 'Contact Info'
        }
    },
    template : `
        <div>
            <h1> {{name}} </h1>
        </div>
    `,
} );