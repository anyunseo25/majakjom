import { Link, createFileRoute, useNavigate } from '@tanstack/react-router'
import { useState } from 'react'

export const Route = createFileRoute('/yeock/1pan')({
  component: RouteComponent,
})

type YugookProps = {
  title: string
  line: string
}

function Yugook({ title, line }: YugookProps) {
  return <div className='border-2  border-black m-10 p-4 rounded-lg bg-white'>
    <p className='font-bold text-xl'>{title}</p>
    <p className='mt-2'>{line}</p>
  </div>
}

function RouteComponent() {
  const [term, setTerm] = useState('')
  const navigate = useNavigate()

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const q = term.trim().toLowerCase()

    // 검색어 → 라우트 매핑
    
  const groupYugook = ['사깡유국', '황패유국', '사가리치', '구종구패', '사풍연타', '사깡']

  
  const groupYeockman = ['국사무쌍', '대삼원', '대사희', '청노두', '스안커', '스깡쯔', '천화', '지화', '녹일색', '구련보등', '자일색', '헤아림 역만', '국사무쌍 13면 대기', '13면', '13면 대기', '소사희', '스안커 단기', '순정구련보등', '9면 대기', '더블', '더블 역만', '더블역만']
  
  const group1pan = ['장풍', '자풍', '삼원', '도라', '적도라', '북도라', '리치', '탕야오', '멘젠쯔모', '역패 자풍패', '역패 장풍패', '역패 삼원패', '핑후', '이페코', '창깡', '영상개화', '해저로월', '하저로어', '일발', '자풍패', '장풍패', '삼원패', '역패']
  
  const group2pan = ['혼일색', '또이또이', '더블리치', '더블 리치', '삼색동각', '산깡쯔', '산안커', '소삼원', '혼노두', '치또이쯔', '찬타', '일기통관', '삼색동순']
    
  const group3pan = ['량페코', '준찬타', '혼일색']

    const groupguitar = ['청일색', '유국만관']

    if (groupYugook.includes(q)) {
  navigate({ to: '/yeock/yugook' })
} else if (groupYeockman.includes(q)) {
  navigate({ to: '/yeock/yeockman' })
} else if (group1pan.includes(q)) {
    navigate({ to : '/yeock/1pan'})}
    else if (group2pan.includes(q)) {
    navigate({ to : '/yeock/2pan'})}
    else if (group3pan.includes(q)) {
    navigate({ to : '/yeock/3pan'})}
    else if (groupguitar.includes(q)) {
    navigate({ to : '/yeock/guitar'})}
    else {
      alert('역 없음…….')
    }
  }
  return <div className='bg-[#006633] min-h-screen'>
    <br />
        <br />
        <p className="p-4 text-5xl font-bold ml-6 text-[#ffffff]">1판</p>
    <Link to="/yeock" className="absolute bg-white text-[#009933] grid place-items-center top-10 right-[5%] border-2 md:right-[calc(5%-15px)] m-5 text-[13px] w-20 h-14 md:top-[6%] md:h-[70px] md:w-[130px] md:text-[16px] rounded-lg">돌아가기</Link>
    <br />

    <form onSubmit={onSubmit} 
      className="absolute p-4 flex ml-6 gap-2 items-center">
      <input
        type="search"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
        placeholder="역 검색기"
        className="flex-1 px-3 py-2 border bg-white text-black rounded-lg"
      />
      <button type="submit" className="px-4 py-2 bg-[#000000] text-[#cc0000] rounded-lg">
        검색
      </button>
    </form>
    <br />
    <br />
    <br />
    <br />
    <br />
    <Yugook title="리치" line="아무것도 안 주워먹은 상태에서 텐파이, 즉 화료할 수 있게 되면 리치를 선언할 수 있다." />
    <Yugook title="탕야오" line="2~8의 숫자패만 쓴다." />
    <Yugook title="멘젠쯔모" line="멘젠 상태에서 쯔모한다." />
    <Yugook title="역패 : 자풍패" line="내 위치의 풍패로 몸통을 만든다." />
    <Yugook title="역패 : 장풍패" line="현재 장의 풍패로 몸통을 만든다. 동풍전에서는 무조건 동." />
    <Yugook title="역패 : 삼원패" line="백, 발, 중 중 1가지로 몸통을 만든다." />
    <Yugook title="핑후" line="슌쯔 4개, 숫자패 혹은 풍패인 머리, 양면대기인 마지막 슌쯔를 가진다." />
    <Yugook title="이페코" line="똑같은 슌쯔를 2개 가진다." />
    <Yugook title="창깡" line="다른 사람이 주워먹은 깡으로 내가 화료할 수 있으면 성립한다. 국사무쌍의 경우 다른 사람이 깡만 선언하면 성립한다." />
    <Yugook title="영상개화" line="영상패로 화료한다." />
    <Yugook title="해저로월" line="내가 마지막 패를 뽑는 사람일 때, 그 패로 쯔모한다. 하이디라오의 어원이기도 하다." />
    <Yugook title="하저로어" line="마지막 차례에서 다른 사람이 버린 패로 론을 친다." />
    <Yugook title="일발" line="리치 후 아무도 주워먹지 않고 1턴이 끝나기 전에 화료한다." />
    <Yugook title="도라" line="왼쪽 위에 표시되는 도라패 다음 패. 1개 가질 때마다 1판 추가되며, 그 자체로는 역이 성립하지 않는다. 반짝거려서 예쁘다." />
    <Yugook title="적도라" line="빨간색 도라패. 숫자 5로 존재한다." />
    <Yugook title="북도라" line="3인 마작에서 북빼기를 치면 북도라 1판이 추가된다." />
    <br />
  </div>}