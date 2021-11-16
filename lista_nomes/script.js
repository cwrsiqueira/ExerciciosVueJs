let app = new Vue({
    el:'#app',
    data: {
        listaNomes: [],
        inputNome: '',
    },
    methods: {
        handleSubmit: function() {
            if(this.inputNome != '') {
                this.listaNomes.push(this.inputNome)
                this.inputNome = ''
            }
        }
    },
})