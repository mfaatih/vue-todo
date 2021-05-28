Vue.component('Listem', {
    data(){
        return {
            show:false,
            updateItem:''
        }
    },
    props:{
        item: String,
    },
    methods:{
        setItem() {
            this.show = !this.show
            this.updateItem = this.item
            
        },
        editItem() {
            // this.$emit('edititem', this.index, this.item)
            this.show = !this.show
            this.item = this.updateItem
        },
        deleteitem() {
            this.$emit('deleteitem', this.index)
        }
    },
    template: '<div><input v-model="updateItem"  v-if="show" type="text"/><p v-if="!show">{{ item }}</p> <button v-if="show" @click="editItem">Tamamla</button> <button v-if="!show" @click="setItem">Güncelle</button><button v-if="!show" @click="deleteitem" >Sil</button></div>'
});

var vm = new Vue({
    el:"#app",
    data: {
        
        items: ['Elma', 'Armut'],
        itemName: '',
        answer: 'Ekleme Yapmak için yazınız.',
       
    },
    methods: {
        addItem() {
            this.answer = "ekleniyor"
            setTimeout(() => {
                this.items.push(this.itemName)
                this.itemName = ''
                this.answer = "eklendi"
            },1000)
        },
        // editItem(indexNumber, itemNe ) {
        //     this.items[indexNumber] = itemNe
        // },
        deleteItem(deleteIndex) {
            console.log(deleteIndex)
            this.items.splice(deleteIndex, 1)
        },
        yaz(e) {
            if(e.target.value !== '') {
                this.answer = "yaziyor"
            }
        }
    }
})

