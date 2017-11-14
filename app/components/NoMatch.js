import React from 'react'
import '../static/css/nomatch.less'

export default class NoMatch extends React.Component{
    render(){
        return(
            <div className="no-match">
                <p>亲，页面不存在哦</p>
                <p>可以关注我们的公众<span>《超级投顾联盟服务号》</span>获取最新消息</p>
                <p>或者</p>
                <a href="http://weixin.cjtglm.com/txsecurities-all/wx/vanalysts/vanalysts">直接登录我们的网站</a>
                <p>有惊喜哦</p>
            </div>

        )
    }
}