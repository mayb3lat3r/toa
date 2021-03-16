export class Selector {
    constructor(select, options = []) {
        this.$el = document.createElement('div')
        this.$el.className = select
        this.options = options
        this.render()
        this.setup()
        this.selectItem()
        this.selectorHandler()
    }

    render() {
        this.$el.innerHTML = this.renderSelector(this.options)
    }

    renderSelector(props) {
        let themeList = []
        props.forEach((theme) => {
            themeList.push(`
        <li id="${theme.id}" class="selector__item">${theme.title}</li>
        `)
        })
        themeList = themeList.join('')

        return `
        <div class="selector__backdrop"></div>
        <div class="selector__head">
            <span class="selector__selected" id="">Выберете тему</span>
            <span class="material-icons">expand_more</span>
        </div>
        <div class="selector__list">
            <ul>
                ${themeList}
            </ul>
        </div>
    `
    }

    setup() {
        this.$arrow = this.$el.querySelector('.material-icons')
        this.$selected = this.$el.querySelector('.selector__selected')
        this.$listItems = this.$el.querySelectorAll('.selector__item')
        this.$el.querySelector('.selector__backdrop').addEventListener('click', () => {
            this.open()
        })
    }

    selectorHandler() {
        this.$el.addEventListener('click', () => {
            console.log('click from constructor to open / close')
            this.$el.classList.contains('expand') ? this.close() : this.open()
            document.body.appendChild(this.$el)
        })
    }

    open() {
        console.log('open')
        this.$el.classList.add('expand')
        this.$arrow.innerText = 'expand_less'
    }

    close() {
        this.$el.classList.remove('expand')
        this.$arrow.innerText = 'expand_more'
    }

    selectItem() {
        this.$listItems.forEach((elem) => {
            elem.addEventListener('click', () => {
                this.$selected.innerText = elem.innerText
                this.$selected.id = elem.id
            })
        })
    }
}