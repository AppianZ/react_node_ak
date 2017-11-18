// server 环境配置
const env = process.env.NODE_ENV;
console.log('~~~~~~~~ env: ' + env + ' ~~~~~~~')

const common = {};

const test = {
    port: '3115',
    baseURL: 'http://appian.me.meckodo.com/',
};

const pro = {
    port: '3116',
    baseURL: 'http://appian.me.meckodo.com/',
};

let config;
switch (env) {
    case "production":
        config = Object.assign(pro, common);
        break;
    case "test":
        config = Object.assign(test, common);
        break;
    default:
        config = Object.assign(pro, common);
        break;
}

export default config;
