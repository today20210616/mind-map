const getDataFromBackend = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            fetch('http://10.22.0.123:8000/items/1')
                .then(response => response.json())
                .then(data => {
                    resolve(data);
                })
                .catch(error => {
                    reject(error);
                });
        }, 200);
    });
};

const setTakeOverAppMethods = (data) => {
    window.takeOverAppMethods = {}
    // 获取思维导图数据的函数
    window.takeOverAppMethods.getMindMapData = () => {

        return data.SIMPLE_MIND_MAP_DATAA
    }
    // 保存思维导图数据的函数
    window.takeOverAppMethods.saveMindMapData = (data) => {
        console.log('保存函数调用')
        //console.log(JSON.stringify(data))
    }
    // 获取语言的函数
    window.takeOverAppMethods.getLanguage = () => {
        console.log('获取语言的函数')

        return data.lang
    }
    // 保存语言的函数
    window.takeOverAppMethods.saveLanguage = (lang) => {
        console.log('保存语言的函数')

        console.log(lang)
    }
    // 获取本地配置的函数
    window.takeOverAppMethods.getLocalConfig = () => {
        console.log('获取本地配置的函数')

        return data.localConfig
    }
    // 保存本地配置的函数
    window.takeOverAppMethods.saveLocalConfig = (config) => {
        console.log('保存本地配置的函数')

        console.log(config)
    }
}
window.onload = async () => {
    if (!window.takeOverApp) return
    // 请求数据
    const data = await getDataFromBackend()
    // 设置全局的方法
    setTakeOverAppMethods(data)
    // 思维导图实例创建完成事件
    window.$bus.$on('app_inited', (mindMap) => {
        console.log(mindMap)
    })
    // 可以通过window.$bus.$on()来监听应用的一些事件
    // 实例化页面
    window.initApp()
}