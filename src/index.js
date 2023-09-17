const fs = require('fs');
const path = require('path');
const moment = require('moment');

function convertJsonToMarkdown(jsonData) {
    // 根据 creationDate 对 entries 进行排序
    const entries = jsonData.entries.sort((a, b) => new Date(a.creationDate) - new Date(b.creationDate));

    for (const entry of entries) {
        const creationDate = moment(entry.creationDate).format('YYYY_MM_DD');
        const markdownFilePath = path.join('journals', `${creationDate}.md`);

        // 检查文本中的换行符，并在换行符后面追加一个 `- `
        const text = entry.text.replace(/\n/g, '\n- ');

        const markdownContent = `- ${text}\n`;

        fs.appendFileSync(markdownFilePath, markdownContent);
    }
}

// 从指定的文件中读取 JSON 数据
const jsonData = JSON.parse(fs.readFileSync('G:\\Temp\\day one\\Export-All Journals\\AllEntries.json', 'utf-8'));

// 调用函数
convertJsonToMarkdown(jsonData);
