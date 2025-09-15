import { Link, createFileRoute, useNavigate } from '@tanstack/react-router'
import { useState } from 'react'

export const Route = createFileRoute('/yeock/yugook')({
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
          <p className="p-4 ml-6 text-5xl font-bold text-white">유국</p>
      <Link to="/yeock" className="absolute grid place-items-center bg-white text-[#cc0000] border-2 right-[5%] md:right-[calc(5%-15px)] m-5 top-10 text-[13px] w-20 h-14 md:top-[6%] md:h-[70px] md:w-[130px] md:text-[16px] rounded-lg">돌아가기</Link>
      <br />
      
      <form onSubmit={onSubmit} 
        className="absolute ml-6 p-4 flex gap-2 items-center">
        <input
          type="search"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
          placeholder="역 검색기"
          className="flex-1 px-3 py-2 bg-white border rounded-lg"
        />
        <button type="submit" className="px-4 py-2 bg-[#000000] text-[#009933] rounded-lg">
          검색
        </button>
      </form>
      <br />
      <br />
      <br />
      <br />
      <br />
    <Yugook title="사깡유국" line="2인 이상이 깡을 4번 친다." />
    <Yugook title="사풍연타" line="모든 플레이어가 첫 턴에 같은 풍패를 버린다." />
    <Yugook title="구종구패" line="첫 시작자의 배패, 혹은 다른 참가자의 첫 쯔모 이후 손패에 요구패가 9종류 이상 있을 경우 패 공개 후 유국할 수 있다. 다만, 패가 좋을 경우 국사무쌍을 노려보자." />
    <Yugook title="황패유국" line="더 이상 패를 뽑을 수 없다. 이때, 패 하나만 더 있으면 화료할 수 있는(=텐파이) 사람은 텐파이 상태를 만들지 못한 사람으로부터 점수를 추가로 얻는다. 단, 모든 인원이 텐파이 상태였을 경우 추가 점수가 없다." />
    <Yugook title="사가리치" line="네 명이 모두 리치한다." />
    <br />
  </div>}