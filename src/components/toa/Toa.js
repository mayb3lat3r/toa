export class Toa {
    constructor(selector, components = []) {
        this.$el = document.querySelector(selector)
        this.components = components || []
        this.render()
    }

    getRoot() {
        const $root = document.createElement('div')
        $root.classList.add('toa')

        this.components.forEach(Component => {
            const $el = document.createElement('div')
            $el.classList.add(Component.className)
            const component = new Component($el)
            $el.innerHTML = component.toHTML()
            $root.append($el)
        })
        return $root
    }

    render() {
        this.$el.append(this.getRoot())
    }
}