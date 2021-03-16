import {Component} from "../Component";


export class Content extends Component{
    static className = 'content'

    toHTML() {
        return `  
            <h1>Добро пожаловать!</h1>
            <h4>Это тестовая версия сайта.</h4>
            Возможно, скоро здесь будет главная страница, но не сегодня
        `
    }
}