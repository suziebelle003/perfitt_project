// AI 질문 예시
export const dummyList = [
  'Hello there',
  '어떻게 좋은 첫인상을 줄 수 있을까?',
  '요즘 유행하는 신발 알려줘',
  '장마철에 신기 좋은 레인부츠 브랜드 알려줘',
  '아식스에서 제일 유명한 신발 알려줘',
  '20대 초반 여성이 좋아하는 신발 추천해줘',
  '요즘 등산할 때 신기 좋은 가벼운 등산화 추천해줘',
  '장마철에 신기 좋은 운동화 추천해 줘',
];

// dummyList에 알맞는 AI 응답 생성
export const textResponse = (text: string): string => {
  if (dummyList.includes(text)) {
    return '곧 업데이트 될 예정입니다.';
  }

  const questionList = dummyList.map((item, index) => `${index + 1}. ${item}`).join('\n');

  return `저는 신발을 추천해드리는 AI 도우미입니다. 죄송하지만 좋은 첫인상에 관해서는 아는 내용이 부족하네요. \n\n이런 질문들은 어떠세요? \n\n${questionList}`;
};
