var app = new Vue({
    el: '#app',
    data: {
        x: 0,
        y: 0,
        operand: "+",
    },
    computed: {
        suma(){
            return eval(this.x + this.operand + this.y);
        }
    }
})