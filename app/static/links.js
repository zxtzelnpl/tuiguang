/**
 * 邵军杰:shaojunjie
 * 马鑫:maxin
 * 周煜：zhouyu
 * 刘章右:liuzhangyou
 * 吴伟伟:wuweiwei
 * */
export const webs = {
    jynrt:'http://zjw.jyzqsh.com/#/teacher/',
    cjtglm:'http://weixin.cjtglm.com/txsecurities-all/wx/vanalysts/vanalystsInfo/'
}

/**
 * 超级投顾联盟  links.cjtglm
 * 君银牛人堂  links.jynrt
 * */
export const teacher_numbers = {
    shaojunjie:10000046,
    maxin:10000036,
    zhouyu:10000032,
    liuzhangyou:10000045,
    wuweiwei:10000027,
}

function getWebUrl(web){
    switch(web){
        case 'jynrt':
            return webs.jynrt
        case 'cjtglm':
            return webs.cjtglm
        default:
            return null
    }
}

function getTeacherNumber(teacher){
    switch(teacher){
        case '邵军杰':
            return teacher_numbers.shaojunjie
        case '马鑫':
            return teacher_numbers.maxin
        case '周煜':
            return teacher_numbers.zhouyu
        case '刘章右':
            return teacher_numbers.liuzhangyou
        case '吴伟伟':
            return teacher_numbers.wuweiwei
        default:
            return null
    }
}

/**
 * get the webName and teacherId and return the url
 * @param web string
 * @param teacher string
 * @return give the url
 */
export function make_link(web,teacher){
    let link,number;
    link = getWebUrl(web)
    number = getTeacherNumber(teacher)
    if(link&&number){
        return link+number
    }
    else{
        return null
    }
}