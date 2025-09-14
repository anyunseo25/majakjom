import { Link, createFileRoute, useNavigate } from '@tanstack/react-router'
import { useState } from 'react'

export const Route = createFileRoute('/yeock/2pan')({
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
  return <div>
    <br />
        <br />
        <p className="p-4 ml-6 text-5xl font-bold text-[#000000]">2판</p>
    <Link to="/yeock" className="absolute grid place-items-center border-2 right-[calc(5%-15px)] m-5 text-[10px] w-20 h-14 md:top-[6%] md:h-[70px] md:w-[130px] md:text-[16px] rounded-lg">돌아가기</Link>
    <br />
    
    <form onSubmit={onSubmit} 
      className="absolute p-4 flex gap-2 ml-6 items-center">
      <input
        type="search"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
        placeholder="역 검색기"
        className="flex-1 px-3 py-2 border rounded-lg"
      />
      <button type="submit" className="px-4 py-2 bg-[#000000] text-white rounded-lg">
        검색
      </button>
    </form>
    <br />
    <br />
    <br />
    <br />
    <br />
    <Yugook title="더블리치" line="아무도 패를 주워먹지 않은 상태, 처음턴에서 리치를 선언한다." />
    <Yugook title="삼색동각" line="똑같은 숫자패 3개를 커쯔 또는 깡쯔로 세 가지 색깔 모두 가진다." />
    <Yugook title="산깡쯔" line="깡을 네 번 친다." />
    <Yugook title="산안커" line="안커를 세 개 만든다." />
    <Yugook title="소삼원" line="백, 발, 중 중 두 가지를 3개 이상 가지고 한 가지를 2개 가진다." />
    <Yugook title="혼노두" line="요구패로만 화료한다." />
    <Yugook title="치또이쯔" line="패 7종류를 2개씩만 가진다. 즉, 모든 패가 2개씩 있어야 한다." />
    <Yugook title="찬타" line="몸통과 머리 모두에 요구패가 들어간다. 주워먹으면 1판 감소다." />
    <Yugook title="일기통관" line="숫자패 1종류로 123, 456, 789 몸통을 만든다. 주워먹으면 1판 감소다." />
    <Yugook title="삼색동순" line="똑같은 숫자패 3개를 슌쯔로 세 가지 색깔 모두 가진다. 주워먹으면 1판 감소다." />
  </div>}