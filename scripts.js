members = [
    {
        fname: 'John',
        lname: 'Lennon',
        instrument: 'Violão'
    },
    {
        fname: 'George',
        lname: 'Harrison',
        instrument: 'Guitarra'
    }
]

const handlingForms = {

    data() {
        return {
            members: window.members,
            newMember: {},
        }
    },
    methods:{
        addMember: function(){
            if(this.newMember.fname && this.newMember.lname && this.newMember.fname){
                this.members.push(this.newMember)
                this.newMembers = {}
            }else{
                alert("Preencha todos os campos")
            }
        }
    }

};

Vue.createApp(handlingForms).mount('#app');
