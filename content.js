// 获取当前文件的路径
var filePath = window.location.pathname;

// 提取文件名部分
var fileName = filePath.split('/').pop();

// 解码 URL 编码的字符（如中文）
fileName = decodeURIComponent(fileName);

// 去掉文件扩展名 .html
fileName = fileName.replace('.html', '');

// 修改页面标题
document.title = fileName;
