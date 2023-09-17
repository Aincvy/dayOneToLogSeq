# 

主要功能： 将 Day One Journal 安卓 的导出日记 转换成 log seq 的markdown 格式

已知缺点
- 只转换日期和文字
- 照片信息无视了
- 地理位置信息无视了，  因为log seq 好像不支持这个


## 使用

1. `git clone https://github.com/Aincvy/dayOneToLogSeq.git`
2. `cd dayOneToLogSeq`
3. `npm install`
4. 修改 `src/index.js` 文件，将路径修改你的 json文件的位置
5. `npm start`
6. 导出的文件将在 `journals` 目录下

## 其他

本工具使用 openai gpt4 模型生成代码。

