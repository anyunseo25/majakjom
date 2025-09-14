import { Link, createFileRoute, useNavigate } from '@tanstack/react-router'
import { useState } from 'react';

export const Route = createFileRoute('/yeock/guitar')({
  component: RouteComponent,
})

type GuitarProps = {
  title: string
  line: string
}

function Yugook({ title, line }: GuitarProps) {
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
        <p className="p-4 text-5xl font-bold ml-6 text-[#000000]">6판 / 만관</p>
    <Link to="/yeock" className="absolute grid place-items-center border-2 right-[calc(5%-15px)] md:top-2.5 md:text-[15px] md:w-32 md:h-20 lg:top-[6%] lg:h-[70px] lg:w-[130px] lg:text-[16px] rounded-lg">돌아가기</Link>
    <br />
    
    <form onSubmit={onSubmit} 
      className="absolute p-4 flex ml-6 gap-2 items-center">
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
    <Yugook title="청일색" line="한 종류의 숫자패로만 화료한다. 이때, 패를 주워먹은 채로 화료했으면 5판으로 간주한다." />
    <Yugook title="유국만관" line="유국 상태에서 내 모든 패가 아무도 주워먹지 않은 요구패, 즉 1, 9, 동남서북백발중이었다면 성립한다." />
  </div>}