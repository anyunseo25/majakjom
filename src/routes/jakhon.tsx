import { Link, createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/jakhon')({
  component: RouteComponent,
})

type YeockmanProps = {
  title: string
  line: string
}

function Yeockman({ title, line }: YeockmanProps) {
    return <div className='border-2 px-6 bg-white m-10 rounded-lg'>
    <p className='font-bold text-3xl pt-6'>{title}</p>
    <br />
    <p className='mt-2 text-xl pb-6 '>{line}</p>
  </div>
}

function RouteComponent() {
  return <div className='bg-[#006633]'>
    <br />
    <br />
    <div className="p-4 relative text-5xl font-bold justify-center text-white ml-6">작혼이란?</div>
    <Link to="/" className="absolute grid place-items-center bg-white text-[#cc0000] border-2 top-10 right-[5%] md:right-[calc(5%-15px)] m-5 text-[13px] w-20 h-14 md:top-[6%] md:h-[70px] md:w-[130px] md:text-[16px] rounded-lg">돌아가기</Link>
    <br />
    <br />
    <Yeockman title="작혼이란?" line="홍콩의 게임 개발사 캣푸드 스튜디오 제작, 요스타 배급의 리치 마작 게임입니다. 홍콩 제작이지만, 특이하게도 일본의 리치 마작 룰을 따릅니다!" />
    <Yeockman title="작혼은 왜 청소년 이용 불가인가요?" line="마작의 경우 사행성 오락의 일종으로, 포커나 맞고처럼 그 사행성이 특히 짙어 청소년에게 유해하다는 판정이 내려졌습니다. 물론 마작작작해라에서는 건전한 놀이성 문화의 일종으로 취급합니다! (돈 거는 순간. 어느 분께 잡힙니다.)" />
    <Yeockman title="작혼이 실제 마작과 다른 점이 무엇인가요?" line="실제 마작의 경우 작탁의 가격이 굉장히 비싸며, 스스로 역을 선언해야 합니다. 이 때문에 종종 역을 잘못 구분해 리치나 화료 선언을 실수할 때도 있습니다. 그러나 작혼에서는 자체 판정 시스템을 통해 리치나 화료의 실수 없이 쉽게 마작에 입문할 수 있습니다!" />
     <Yeockman title="작혼은 어떻게 다운로드 받을 수 있나요?" line="스팀, 구글 플레이, 앱 스토어 등을 통해 작혼을 다운로드 받을 수 있습니다. (성인 인증이 요구됩니다.) 요스타 계정을 연동할 경우 언제 어디서나 마작을 즐길 수 있습니다!"/>
    <br />
    <br /></div>}