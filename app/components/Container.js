import React from 'react'

import {make_link} from "../static/links"
import infos from '../static/infos'
import '../static/css/index.less'


export default class Container extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            initDom: false
        }
    }

    componentDidMount() {
        let {web,data} = this.props.match.params
        let info = infos[data]?infos[data]:{}
        let {teacher,bg,color,top} =info
        let url = make_link(web, teacher)

        if (url && bg) {
            this.setState({
                initDom: true,
                color,
                bg,
                url,
                top
            })
        }
        else {
            this.props.history.push('\/')
        }
    }

    render() {
        let {color,bg,url,initDom,top} = this.state
        return initDom ?
            <div className="container" style={{background: color}}>
                <img src={bg} alt=""/>
                <a href={url} style={{top:top}}/>
            </div> :
            <div/>
    }
}