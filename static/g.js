// g.js

document.addEventListener('DOMContentLoaded', () => {
  // 获取 <div id="dirs"></div> 元素
  const dirsDiv = document.getElementById("dirs");

  // 发送HTTP请求获取数据
  fetch('http://127.0.0.1:8000/all')
    .then(response => response.json()) // 解析响应为JSON格式
    .then(data => {
      // 数据获取成功后的处理
      // 创建表格元素
      const table = document.createElement('table');

      // 创建表头行
      const headerRow = document.createElement('tr');
      const idHeader = document.createElement('th');
      idHeader.textContent = '_id';
      const nameHeader = document.createElement('th');
      nameHeader.textContent = 'name';
      const dataHeader = document.createElement('th');
      dataHeader.textContent = 'SIMPLE_MIND_MAP_DATAA';
      headerRow.appendChild(idHeader);
      headerRow.appendChild(nameHeader);
      headerRow.appendChild(dataHeader);
      table.appendChild(headerRow);

      // 遍历数据并创建表格行
      data.forEach(item => {
        const row = document.createElement('tr');
        const idCell = document.createElement('td');
        idCell.textContent = item._id;
        const nameCell = document.createElement('td');
        nameCell.textContent = item.name;
        const dataCell = document.createElement('td');
        dataCell.textContent = item.SIMPLE_MIND_MAP_DATAA;
        row.appendChild(idCell);
        row.appendChild(nameCell);
        row.appendChild(dataCell);
        table.appendChild(row);
      });

      // 将表格添加到 <div id="dirs"></div> 元素中
      dirsDiv.appendChild(table);
    })
    .catch(error => {
      // 发生错误时的处理
      console.error('Error:', error);
    });
});
