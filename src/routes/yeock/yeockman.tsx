import { Link, createFileRoute, useNavigate } from '@tanstack/react-router'
import { useState } from 'react'

export const Route = createFileRoute('/yeock/yeockman')({
  component: RouteComponent,
})

type YeockmanProps = {
  title: string
  line: string
}

function Yeockman({ title, line }: YeockmanProps) {
  return <div className='border-2 border-black m-10 p-4 rounded-lg bg-white'>
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
        <p className="p-4 text-5xl font-bold ml-6 text-[#000000]">역만</p>
    <Link to="/yeock" className="absolute grid place-items-center border-2 right-[calc(5%-15px)] m-5 text-[13px] w-20 h-14 md:top-[6%] md:h-[70px] md:w-[130px] md:text-[16px] rounded-lg">돌아가기</Link>
    <br />
    
    <form onSubmit={onSubmit} 
      className="absolute ml-6 p-4 flex gap-2 items-center">
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
    <Yeockman title="천하무쌍" line="4인 마작에서 4명이 모두 국사무쌍을 달성한다." /> 
    <Yeockman title="헤아림 역만" line="13판 이상을 달성한다." />
    <Yeockman title="국사무쌍" line="모든 요구패를 하나씩 가지고, 요구패 하나를 추가로 더 가진 용을 만들어 화료한다. 즉, 1, 9, 동, 남, 서, 북, 백, 발, 중 중 하나를 2개 가지고 하나를 안 가진 상태에서 남은 하나를 구해 화료한다." />
    <Yeockman title="국사무쌍 13면 대기" line="모든 요구패를 하나씩 가진 상태에서 화료한다. 더블 역만."/>
    <Yeockman title="대삼원" line="백, 발, 중을 모두 커쯔 혹은 깡쯔로 가진다. 즉, 백, 발, 중을 모두 3개 이상 가진다." />
    <Yeockman title="대사희" line="동, 남, 서, 북을 모두 커쯔나 깡쯔로 가진다. 즉, 네 풍패를 모두 3개 이상 가진다. 더블 역만." />
    <Yeockman title="소사희" line="세 풍패를 3개씩 가지고 한 풍패를 2개 가진다." />
    <Yeockman title="스깡쯔" line="4개의 깡을 한다." />
    <Yeockman title="스안커" line="안커 4개를 만든다. 즉, 3, 3, 2, 2 상태에서 쯔모를 친다." />
    <Yeockman title="스안커 단기" line="3, 3, 3, 1 상태에서 화료한다. 더블 역만." />
    <Yeockman title="청노두" line="오직 1과 9로만 용을 만든다." />
    <Yeockman title="녹일색" line="오직 초록색으로만 용을 만든다. 즉, 2삭, 3삭, 4삭, 6삭, 8삭, 발만 사용해 용을 만든다." />
    <Yeockman title="천화" line="오야, 즉 첫 시작자가 시작하자마자 바로 화료한다." />
    <Yeockman title="지화" line="처음에 텐파이가 나오고, 아무도 주워먹지 않은 상태에서 쯔모가 처음 뜨자마자 쯔모를 친다." />
    <Yeockman title="자일색" line="동, 남, 서, 북, 백, 발, 중만으로 화료한다." />
    <Yeockman title="구련보등" line="숫자패 한 종류로 1112345678999와 같은 종류의 숫자패를 하나 더 가진 용을 만든다." />
    <Yeockman title="순정구련보등" line="1112345678999 상태에서 구련보등을 만든다. 더블 역만." />
  </div>}