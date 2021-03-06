const path = require('path'); // 노드에서 쉽게 경로 조작
const webpack = require('webpack')
const RefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
 
module.exports = {
    mode: 'development', // 실서비스에선 production
    devtool: 'eval',
    resolve: {
        extensions: ['.js', '.jsx'] //확장자를 entry에 입력하기 싫을 때 
    },
 
    entry:{ // 입력
        app: ['./client'],
    },
    
    module: {
        rules:[
            {
            test: /\.jsx?$/,  //jsx파일에 rule을 적용하겠다 
            loader: 'babel-loader',  //어떤 룰은 babel-loader(최신문법을 옛날에 돌아가도록)
            options: {
                presets: [
                    ['@babel/preset-env', {
                    targets: {
                        browsers: [' > 1% in KR', 'last 2 chrome versions'],
                    },
                    debug: true,
                }],
                    '@babel/preset-react',
            ],
                plugins: [
                    '@babel/plugin-proposal-class-properties',
                    'react-refresh/babel', 
                ],
            },
        },
        {
            test: /\.(sa|sc|c)ss$/,
            use: [
                'style-loader',
                'css-loader',
                'sass-loader',
                ],
        }
    ],
    },
    plugins: [
        new RefreshWebpackPlugin()
        // new webpack.LoaderOptionsPlugin({debug: true}), // 디버그 처리
    ], // 확장프로그램
 
    output:{ // 출력
        path: path.join(__dirname, 'dist'),
        filename: 'app.js',
        publicPath: '/dist/',
        
    },
    devServer: {
        publicPath: '/dist/',
        hot: true,
    }, //프론트엔드 개발 편의를 위한 서버
};