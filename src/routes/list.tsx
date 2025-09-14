import { Link, createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/list')({
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
  return <div>
    <br />
    <br />
    <div className="p-4 relative text-5xl font-bold justify-center ml-6">명예의 전당</div>
    <Link to="/" className="absolute grid place-items-center m-5 border-2 right-[5%] text-[13px] top-10 w-20 h-14 md:top-[6%] md:h-[70px] md:w-[130px] md:text-[16px] rounded-lg">돌아가기</Link>
    <br />
    <br />
    <Yeockman title="최홍제" line=">>작사 2<<" />
    <Yeockman title="안동연" line="왜 잘하세요 진짜 질투나가지고" />
    <Yeockman title="김상윤" line="넣어달라고 해서 넣어줍니다" />
    <Yeockman title="안윤서" line="1002763100397 우리은행 안윤서" />
    <br />
    <br />
    <br /></div>}