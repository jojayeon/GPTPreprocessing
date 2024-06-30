const fs = require('fs');

// JSON 파일 읽기 - GPT 사용함
fs.readFile('conversations.json', 'utf8', (err, data) => {
  if (err) {
    console.error("파일을 열 수 없습니다: ", err);
    return;
  }
  const jsonData = JSON.parse(data);
  const result = [];
  let totalCount = 0;

  jsonData.forEach(data => {
    if (data.mapping) { //if문들은 거의 없는 경우를 위한 경우다 그냥 value.message.content.parts ,value.message.author.role 사용하면 안 먹는다.
      const values = Object.values(data.mapping);
      values.forEach(value => {
        result.push(value); // 배열에 요소 추가// id 갑이 다 달라서 그냥 값으로 접근함 
        if (value && value.message && value.message.content && value.message.content.parts &&
          value.message.author && value.message.author.role === "assistant") { // GPT 답변만 찾기 위해 assistant로 찾음
            const parts = value.message.content.parts; //경로
            let count = 0;
            parts.forEach(part => { //와일 안에 왜저러지
              let index = part.indexOf('코드');
              while (index !== -1) {// 하나 발견해도 계속하게 만든 것인것같아보임
                count++;
                index = part.indexOf('코드', index + 1);
              }
            });
            totalCount += count; //개별 갯수에서 모든 갯수로
          }
        });
      }
    });
    console.log(`전체 객체에서 '코드' 단어의 총 등장 횟수: ${totalCount}`);         
  })