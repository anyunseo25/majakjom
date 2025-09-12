import { Outlet, createRootRoute, Link, useRouterState } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'

export const Route = createRootRoute({
  component: RootLayout,
})

type RootProps = {
  title : string;
  link : string;
}


  const Root: React.FC<RootProps> = ({ title, link }) => {
  return (
    <div>
    <Link to={link} className="flex px-3 py-5  mx-10 mt-10 w-[1000px] border-2 border-[#000000] bg-white rounded-lg text-[rgb(0,0,0)] font-bold text-base sm:text-sm lg:text-2xl xl:text-3xl">
        {title}
      </Link>
    </div>
  )
};

function RootLayout() {
  const { location } = useRouterState()

  const isHallOfFame = location.pathname.startsWith('/basic') || location.pathname.startsWith('/yeock') || location.pathname.startsWith('/list') || location.pathname.startsWith('/jakhon');


  return (
    <>
      <Outlet />
      {!isHallOfFame && (
        <>
        <br />
        <br />
        <div>
          <p className="p-4 text-5xl font-bold ml-6 text-[#000000]">마작작작해라</p>
          <br />
          <br />
          <Root title="마작이란?" link="/basic" />
          <Root title="역" link="/yeock" />
          <Root title="작혼 - 리치마작" link="/jakhon" />
          <Root title="명예의 전당 (마작작작해라 회원 목록)" link="/list" />
          <TanStackRouterDevtools />
        </div>
        </>
      )}
    </>
  )
}