export default {
    data: function () {
        return {
            favItems: []
        }
    },
    watch: {
        favItems: function () { // watch it
            this.saveFavorites()
        }
    },
    methods: {
        findInFavorite(id) {
            return this.favItems.find(item => {
                return item.id === id
            })
        },
        addFavorite: function (item) {
            if (!this.findInFavorite(item.id)) {
                item.isFav =1
                this.favItems.push(item)
            }
        },
        removeFavorite: function (id) {
            const _self = this
            this.favItems.forEach(function (itm, index) {
                if (itm.id === id) {
                    _self.favItems.splice(index, 1)
                    return true
                }
            })
        },
        loadFavorites() {
            this.favItems = localStorage.favorites ? JSON.parse(localStorage.favorites) : []
        },
        saveFavorites() {
            localStorage.favorites = JSON.stringify(this.favItems)
        }
    },
    mounted() {
        this.loadFavorites()
    }
}
