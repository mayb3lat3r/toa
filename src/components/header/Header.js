import {Component} from "../Component";
import {Selector} from "../selector/Selector";

const themes = [
    {
        title: 'First theme',
        id: 1
    },
    {
        title: 'Second theme',
        id: 2
    },
    {
        title: 'Third theme',
        id: 3
    },
    {
        title: 'Fourth theme',
        id: 4
    },
    {
        title: 'Fifth theme',
        id: 5
    },
    {
        title: 'Sixth theme',
        id: 6
    },
    {
        title: 'Seventh theme',
        id: 7
    }
]
const selector = new Selector('selector', themes).$el.outerHTML

export class Header extends Component {
    static className = 'header'

    constructor() {
        super();

    }

    toHTML() {
        return `
            
            ${selector}
            <div class="user">
                <div class="user__settings">
                    <span class="material-icons md-18">settings</span>
                </div>
                <div class="user__name">Имя Фамилия</div>
                <div class="user__avatar">
                    <span class="material-icons md-24">account_circle</span>
                </div>
            </div>
            
    `
    }
}