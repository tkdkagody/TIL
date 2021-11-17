# 새로고침 없이 소스코드 수정

hot reloading 기술
(cra로 프로젝트 생성시 이미 설치되어있음)

- 설치하기
  `npm i -D @pmmmwh/react-refresh-webpack-plugin`
  `npm i -D react-refresh`

- import 방법
  `import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';`

- plugin에 넣어주기
  ` plugins: [ new ReactRefreshWebpackPlugin(), new webpack.HotModuleReplacementPlugin() ],`
