let app = new Vue({
    el:'#app',
    data: {
        listaNomes: [],
        inputNome: '',
        timer:null,
        aviso:'',
        btn_submit:false,
        isSubmit:false,
    },
    methods: {
        handleSubmit: function() {
            if(this.inputNome != '') {
                this.listaNomes.push(this.inputNome)
            }
            this.isSubmit = true
            this.inputNome = ''
            this.aviso = ''
            this.btn_submit= false
        },
        finishInsert: function () {
            this.aviso = ''
            if(this.inputNome.length > 2) this.btn_submit = true 
        }
    },
    watch:{
        inputNome:function () {
            if(!this.isSubmit) {
                this.aviso = 'Digitando...'
                this.btn_submit = false 

                if(this.timer != null) {
                    clearTimeout(this.timer)
                }

                this.timer = setTimeout(this.finishInsert, 1000)
            }
            this.isSubmit = false
        },
    }
})