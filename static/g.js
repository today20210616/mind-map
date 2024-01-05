// g.js

// 获取 <div id="dirs"></div> 元素
const dirsDiv = document.getElementById("dirs");

// 发送HTTP请求获取数据
fetch('http://10.22.0.123:8000/all')
  .then(response => response.json()) // 解析响应为JSON格式
  .then(data => {
    // 数据获取成功后的处理
    // 创建一个文本节点，并将数据作为文本内容
    console.log(JSON.stringify(data))

    const textNode = document.createTextNode(data);

    // 将文本节点添加到 <div id="dirs"></div> 元素中
    dirsDiv.appendChild(textNode);
  })
  .catch(error => {
    // 发生错误时的处理
    console.error('Error:', error);
  });
