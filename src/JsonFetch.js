export const fetchQuestionsByIdUrl = (id) => {
    let url = 'https://api.stackexchange.com/2.2/questions/'+id+'?site=stackoverflow';
    return url;
}
export const fetchQuestionsByTagUrl = (tag) => {
    //with answers
    let url = 'https://api.stackexchange.com/2.2/questions?pagesize=10&order=asc&sort=activity&tagged='+tag+'&site=stackoverflow&filter=!-*f(6rc.(Jba';
    //only question
    //let url = 'https://api.stackexchange.com//2.2/questions?pagesize=10&order=asc&sort=votes&tagged='+tag+'&site=stackoverflow';
    return url;
}