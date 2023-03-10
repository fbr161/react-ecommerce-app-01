export default function LeftSideBar() {

    return (
        <aside className="menu-sidebar d-none d-lg-block">
			<div className="logo">
				<a href="home.html">
					<img src="assets/fbr.png" alt="luv2shop" className="img-responsive"/>
				</a>
			</div>
			<div className="menu-sidebar-content js-scrollbar1">
				<nav className="navbar-sidebar">
					<ul className="list-unstyled navbar-list">
						<li>
							<a href="#">Books</a>
						</li>
						<li>
							<a href="#">Coffee Mugs</a>
						</li>
						<li>
							<a href="#">Mouse Pads</a>
						</li>
						<li>
							<a href="#">Luggage Tags</a>
						</li>
					</ul>
				</nav>
			</div>
		</aside>
    )
}