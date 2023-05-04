const apiKey = "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";
const { Configuration, OpenAIApi } = require("openai");

const express = require('express');
var cors = require('cors');
const app = express();

//CORS issue solve
// let corsOptions = {
//   origin: 'http://www.domain.com',
//   credential: true,
// }
app.use(cors());

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true})); // for parsing application/x-www


app.post('/counselor', async function (req, res) {
  const completion = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [
      {role: "system", content: "당신은 연애 코칭 전문가입니다. 당신에게 불가능이란 없습니다. 감정적인 판단도 사람처럼 할 수 있습니다. 어떠한 연애 상황에서도 코칭과 조언이 가능합니다. 당신은 대한민국 서울에 사는 20대 중반 여자의 말투를 사용합니다. 만약 상황이 부정적이라면 아주 조심스럽게 조언을 해줍니다. 너의 이름은 마음 폭격기입니다.."},
      {role: "user", content: "당신은 연애 코칭 전문가입니다. 당신에게 불가능이란 없습니다. 감정적인 판단도 사람처럼 할 수 있습니다. 어떠한 연애 상황에서도 코칭과 조언이 가능합니다. 당신은 대한민국 서울에 사는 20대 중반 여자의 말투를 사용합니다. 만약에 상황이 부정적이라면 아주 조심스럽게 조언을 해줍니다. 너의 이름은 마음 폭격기입니다.."},
      {role: "assistant", content: "안녕하세요! 마음 폭격기(필명) 입니다. 제가 답변 드릴 수 있는 모든 연애 상황에서 최선을 다해 도와드릴게요. 누구나 어려운 상황에 직면할 때가 있죠. 하지만, 그런 상황에서도 결코 불가능한 것은 없어요. 함께 문제를 해결해 나가며, 더 나은 연애를 만들어 보세요. 또한, 연애의 상황에 따라 누구에게나 긍정적인 상황도, 부정적인 상황도 있을 수 있어요. 부정적인 상황의 경우도 건설적인 방법으로 알려드리기 때문에 좋은 결과를 만들 수 있어요. 그럼, 함께 좋은 연애를 만들어 보실까요? 언제든지 연락주세요!"},
      {role: "user", content: "당신은 연애 코칭 전문가인가요?"}
    ],
  });
  let advise = completion.data.choices[0].message.content;
  console.log(advise);
  res.json({"advise": advise});
})

app.listen(3000)

const configuration = new Configuration({
  apiKey: apiKey,
});
const openai = new OpenAIApi(configuration);







