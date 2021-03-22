module.exports = {
    devServer: {
        proxy: {
            '^/proxyapi': {
                //https://od-api.oxforddictionaries.com/api/v2/search/thesaurus/en?q=hel&prefix=true&limit=10
                // target: 'https://od-api.oxforddictionaries.com/api/v2/entries/en-us/',
                target: 'https://od-api.oxforddictionaries.com/api/v2/search/thesaurus/',
                logLevel: 'debug',
                pathRewrite: {'^/proxyapi/': ''},
                onProxyReq: (proxyReq) => {
                    proxyReq.setHeader('Accept', 'application/json');
                    proxyReq.setHeader('app_id', 'e01e4a95');
                    proxyReq.setHeader('app_key', 'f653c71dec0479f664d141e3e18d52c4');

                }
            },
        }
    },
};
