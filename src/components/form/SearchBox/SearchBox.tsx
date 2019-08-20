import React, { PureComponent } from 'react'
import style from './style/SearchBox.module.scss'


export default class SearchBox extends PureComponent {
    render() {
        return (
            <div className={style.searchBox}>
                {this.props.children}
            </div>
        )
    }
}
