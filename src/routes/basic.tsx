import { Link, createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/basic')({
  component: RouteComponent,
})

type YeockmanProps = {
  title: string
  line: string
}

function Yeockman({ title, line }: YeockmanProps) {
    return <div className='border-2 border-black  px-6 m-10 rounded-lg bg-white'>
    <p className='font-bold text-3xl pt-6'>{title}</p>
    <br />
    <p className='mt-2 text-xl pb-6 '>{line}</p>
  </div>
}

function RouteComponent() {
  return <div className='bg-[#006633]'>
    <br />
    <br />
    <div className="p-4 relative text-5xl text-white font-bold justify-center ml-6">마작이란?</div>
    <Link to="/" className="absolute grid bg-white text-[#cc0000] place-items-center border-2 right-[5%] md:right-[calc(5%-15px)] m-5 top-10 text-[13px] w-20 h-14 md:top-[6%] md:h-[70px] md:w-[130px] md:text-[16px] rounded-lg">돌아가기</Link>
    <br />
    <br />
    <br />
    <Yeockman title="마작이란 무엇인가요?" line="중국에서 시작된 테이블 게임으로, 마작패를 이용해 용을 만들어 나는 것을 목표로 합니다. 루미큐브와 흡사한 형태를 가지고 있으며, 우리가 플레이할 것은 일본에서 변형된 리치 마작입니다!"/>
    <Yeockman title="마작의 패는 무엇이 있나요?" line="마작의 패는 1~9까지의 수패(통수패, 삭수패, 만수패)와 동, 서, 남, 북, 백, 발, 중의 역패가 총 3개씩 존재합니다."/>
    <Yeockman title="어떻게 해야 마작에서 이길 수 있나요?" line="마작에서는 용을 예쁘게 만들면 만들수록 높은 점수를 뺏어옵니다. 이때, 모든 사람의 차례가 끝난 후 가장 점수가 높은 사람이 승리합니다!" />
    <Yeockman title="마작에서 꼭 알아야 할 용어로는 무엇이 있나요?" line="용을 만들어 나는 화료, 내가 패를 뽑았을 때 화료할 수 있는 쯔모, 남의 패로 화료할 수 있는 론, 같은 패 네 개로 만드는 깡, 남의 패를 가져와 같은 패 세 개를 만드는 퐁, 전 사람의 패를 가져와 순서대로 패를 세 개 만드는 치 정도만 기억합시다!" />
    <Yeockman title="그것 말고는요? 몸통은 어떻게 만들어요?" line="같은 패 두 개 모이는 또이쯔, 같은 패 세 개 모이는 커쯔, 숫자패가 연속으로 세 개 모이는 슌쯔, 남의 거 주워다 같은 거 네 개 만드는 창깡, 내 거 모아 같은 거 네 개 만드는 안깡 등이 있습니다!" />
    <Yeockman title="용을 만들기만 하면 날아갈 수 있나요?" line="아닙니다! 역이라고 하는, 예쁜 용의 규칙을 따라야 합니다. 그렇지 않으면 역 없음 판정으로, 내 뚱쭝용이 바닥에 떨어지고 맙니다……." />
    <a href="https://www.youtube.com/playlist?list=PLvefidUskLYXc8F9qkQ4wOf9J35X7lwc7"><Yeockman title="마작 입문에 좋은 영상이 있나요?" line="홍제 선배의 추천입니다!"/></ a>
    <Yeockman title="마작 관련 작품으로는 무엇이 있나요?" line="아카기, 도박묵시록 카이지 등이 있습니다!" />
    <Yeockman title="마작을 몰라도 마작작작해라에 들어갈 수 있나요?" line="당연합니다. 그냥 한번 경험해 보고 싶으셔도 편하게 부르시면 함께 쳐 드립니다. 모르는 것은 DM으로 물어보시면 뭐든지 답해드립니다!" />
    <Yeockman title="님은 마작에 왜 이렇게 진심이에요?" line="타고난 도박꾼의 피가 흐릅니다. 솔리테어랑 포커랑 스파이더랑 고스톱 다 할 줄 압니다……. 나머지도 배우고 싶으시면 언제든지 연락 주세요!" /></div>}