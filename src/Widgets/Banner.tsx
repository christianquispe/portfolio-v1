const Banner: React.FC = () => {
  return (
    <>
      <div className="Banner grid md:grid-cols-2">
        <div className="hidden md:block bg-gray-200 flex align-middle justify-center Banner w-full Banner__img"></div>
        <div className="bg-gray-200 md:bg-white flex justify-center align-middle items-center md:justify-start md:pl-4">
					<div className="bg-white p-2 w-80">
						<p className="text-3xl">Hi, I'm Christian</p>
						<p>Front End Developer</p>
					</div>
				</div>
      </div>
      <style jsx>{`
        .Banner {
          height: 300px;
        }
				.Banner__img {
					background-image: url('https://static.vecteezy.com/system/resources/previews/002/127/816/non_2x/flat-lay-minimal-work-space-top-view-office-desk-with-computer-laptop-clipboard-and-coffee-cup-on-white-color-background-with-copy-space-illustration-free-vector.jpg');
					background-size: cover;
					background-position: center;
					position: relative;
				}
				.Banner__img::before {
					content: '';
					display: block;
					position: absolute;
					top: 0;
					bottom: 0;
					width: 100%;
					height: 100%;
				}
        @media screen and (min-width: 768px) {
          .Banner {
            height: 450px;
          }
        }
      `}</style>
    </>
  );
};
export default Banner;
