import Link from "next/link";

const Header = () => {
  return (
    <header className="border-b border-white">
      <div className="content flex h-18 items-center justify-between">
        <div className="flex gap-7">
          <Link href="/" className="">
            {/* <img src="" alt="로고" /> */}
            로고
          </Link>

          <nav>
            <ul className="flex gap-10 font-semibold">
              <li>
                <Link href="/" className="">
                  아동·청소년
                </Link>
              </li>
              <li>
                <Link href="/" className="">
                  동물
                </Link>
              </li>
              <li>
                <Link href="/" className="">
                  환경
                </Link>
              </li>
              <li>
                <Link href="/" className="">
                  장애인
                </Link>
              </li>
              <li>
                <Link href="/" className="">
                  지구촌
                </Link>
              </li>
              <li>
                <Link href="/" className="">
                  어르신
                </Link>
              </li>
              <li>
                <Link href="/" className="">
                  사회
                </Link>
              </li>
              <li>
                <Link href="/" className="">
                  전체
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div>
          <ul className="flex gap-7">
            <li>
              <Link href="/">로그인</Link>
            </li>
            <li>
              <Link href="/">검색</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
