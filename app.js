const fs = require('fs');

// JSON 파일 읽기
fs.readFile('conversations.json', 'utf8', (err, data) => {
  if (err) {
    console.error("파일을 열 수 없습니다: ", err);
    return;
  }
  const jsonData = JSON.parse(data);
  const result = [];
  let totalCount = 0;

  jsonData.forEach(data => {
    if (data.mapping) {
      const values = Object.values(data.mapping);
      values.forEach(value => {
        result.push(value); // 배열에 요소 추가
        // value에 대한 처리
        if (value && value.message && value.message.content && value.message.content.parts &&
          value.message.author && value.message.author.role === "assistant") {
            const parts = value.message.content.parts;
            // console.log(parts); // parts 내용 확인
            let count = 0;
            parts.forEach(part => {
              let index = part.indexOf('코드');
              while (index !== -1) {
                count++;
                index = part.indexOf('코드', index + 1);
              }
            });
            totalCount += count;
          }
        });
      }
    });
    console.log(`전체 객체에서 '코드' 단어의 총 등장 횟수: ${totalCount}`);         
  })
  
  fs.readFile('conversations.json', 'utf8', (err, data) => {
    if (err) {
      console.error("파일을 열 수 없습니다: ", err);
      return;
    }
    const jsonData1 = JSON.parse(data);
    // console.log(jsonData1[1].mapping)
    console.log(jsonData1[10].mapping["aaa2351a-1d5d-49f1-8d1d-80295c092b51"].message)
  })
  // console.log(jsonData1[1].mapping)
  // console.log(jsonData1[10].mapping["aaa2351a-1d5d-49f1-8d1d-80295c092b51"].message.content)
  // console.log(jsonData[10].mapping["aaa2351a-1d5d-49f1-8d1d-80295c092b51"].message.content)
  // console.log(jsonData[10].mapping["aaa2351a-1d5d-49f1-8d1d-80295c092b51"].message.metadata)
  // console.log(jsonData[10].mapping["aaa2351a-1d5d-49f1-8d1d-80295c092b51"])
  // console.log(jsonData[11].mapping)
  // console.log(jsonData[1].mapping['5cfd0ae5-4178-481b-9fae-36789e5cca68'].children)
  // jsonData를 순회하여 각 객체의 mapping 속성을 조회하고 값을 추출하여 result 배열에 저장
  // console.log('Result:', result);
  // console.log( result);
  // console.log( result);
  // console.log(values)
  // console.log(values.message)
  // console.log(jsonData[1].mapping['5cfd0ae5-4178-481b-9fae-36789e5cca68'].message)
  // console.log(values[3].message.author.role)
  // console.log(values[3].message.author)
  // values.forEach(obj => {
  //   // console.log(obj);
  //   console.log(obj.message.message.content.parts);
  // });
  // //! 정답 - 내 생각 gpt - 문제 실제 갯수와 차이가 있음
  // let count = 0
  
  // values.forEach(obj => {
  //   //obj.message.content.parts이거 하나로 안되서 다 확인하면서 들어는 식으로 변경
  //   if (obj && obj.message && obj.message.content && obj.message.content.parts) {
  //     //assistantfmf = gpt답변만 가져오려고 수정 원하면 지우면 내가 물어본 것까지 가져오는 것 가능 아니면 배개변수로 user로 하면 내가 물어본것만
  //     if (obj.message.author.role === "assistant"){
  //       // console.log(obj.message.content.parts);
  //       const parts = obj.message.content.parts;
  //       console.log(parts)
  //       parts.forEach(part => {
  //         if (part.includes("코드")) { // 아 한번 찾으면 rtue니까 하나 
  //           count++;
  //         }
  //       });
        
  //     }
  //   }
  // });
  // console.log('코드라는 단어가 총', count, '번 사용되었습니다.');

// #8
// let totalCount = 0;
// let c = []
// values.forEach(obj => {
//   if (obj && obj.message && obj.message.content && obj.message.content.parts &&
//       obj.message.author && obj.message.author.role === "assistant") {
//     const parts = obj.message.content.parts;
//     console.log(typeof(parts))
//     console.log(parts)
//     console.log(parts.join(" "))
//     // let a = parts.join('s')    
//     // let b = c.push(parts)
//     // console.log(b)

//     // 각 객체의 parts 배열에서 '코드' 단어의 총 등장 횟수를 세는 변수
//     let count = 0;

//     // parts 배열의 각 요소를 순회하며 '코드' 단어의 등장 횟수를 센다
//     parts.forEach(part => {
//       let index = part.indexOf('코드');
//       while (index !== -1) {
//         count++;
//         index = part.indexOf('코드', index + 1);
//       }
//     });

//     totalCount += count;
//   }
// });

// 전체 객체에서 '코드' 단어의 총 등장 횟수 출력
// console.log(`전체 객체에서 '코드' 단어의 총 등장 횟수: ${totalCount}`);





// // #6 - 결국 실패해서 gpt의 히드로 만듬 
// let totalCount = 0;

// values.forEach(obj => {
//   if (obj && obj.message && obj.message.content && obj.message.content.parts &&
//       obj.message.author && obj.message.author.role === "assistant") {
//     const parts = obj.message.content.parts;
//     let count = 0;
//     parts.forEach(part => {
//       let index = part.indexOf('코드');
//       while (index !== -1) {
//         count++;
//         index = part.indexOf('코드', index + 1);
//       }
//     });
//     totalCount += count;

//   }
// });

// console.log(`전체 객체에서 '코드' 단어의 총 등장 횟수: ${totalCount}`);
// })





  // console.log(values.message.content.text)
  // console.log(jsonData[2])
  // console.log(jsonData[3])
  // console.log(jsonData[4])
  // console.log(jsonData[5])
  // console.log(jsonData[6])
  // console.log(jsonData[7])
  // console.log(jsonData[8])
  // console.log(jsonData[9])
  // 특정 단어 카운트