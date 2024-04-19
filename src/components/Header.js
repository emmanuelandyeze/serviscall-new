import React from 'react'
import { Route } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'
import SearchBox from './SearchBox'
import { logout } from '../actions/userActions'

const Header = () => {
  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const logoutHandler = () => {
    dispatch(logout())
  }

  return (
		<header>
			<Navbar
				style={{
					backgroundColor: '#fff',
					padding: 0,
					color: '#000',
				}}
				expand="lg"
				variant="dark"
				collapseOnSelect
			>
				<Container>
					<LinkContainer to="/">
						<Navbar.Brand>
							<img
								src="https://scontent.flos5-1.fna.fbcdn.net/v/t39.30808-6/291900853_461014239360262_4125573640542089163_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGII880pcUGpYvkLtSZ0sBMpWTBvNaeUzWlZMG81p5TNWlKA9_V5u1g9zt8-VhpUtuAZ4MR4YHD8V7PUL0JMxbI&_nc_ohc=sF2Ybkn4__cAb5Lo1Jx&_nc_zt=23&_nc_ht=scontent.flos5-1.fna&oh=00_AfCnEpmNDZnoKFDBly1yJTe72NfaACe_aDXWk0kcuNyc0Q&oe=66280819"
								alt="logo"
								style={{ height: '5rem' }}
							/>
						</Navbar.Brand>
					</LinkContainer>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Route
							render={({ history }) => (
								<SearchBox history={history} />
							)}
						/>
						<Nav className="ml-auto">
							<LinkContainer to="/cart">
								<Nav.Link
									style={{
										display: 'flex',
										flexDirection: 'row',
									}}
								>
									<i
										className="fas fa-shopping-cart"
										style={{
											color: '#000',
											fontSize: '20px',
										}}
									></i>{' '}
								</Nav.Link>
							</LinkContainer>
							{userInfo ? (
								<NavDropdown
									title={userInfo.name}
								  id="username"
								  color='#fff'
								  active
								  style={{
									  color: '#000',
									  backgroundColor: '#000',
									  padding: '5px 10px',
									  borderRadius: '5px',
									  marginLeft: '10px'
								  }}
								>
									<LinkContainer to="/profile">
										<NavDropdown.Item>
											Profile
										</NavDropdown.Item>
									</LinkContainer>
									<NavDropdown.Item onClick={logoutHandler}>
										Logout
									</NavDropdown.Item>
								</NavDropdown>
							) : (
								<LinkContainer to="/login">
									<Nav.Link>
										<i
											className="fas fa-user"
											style={{
												color: '#000',
												fontSize: '20px',
											}}
										></i>{' '}
										Sign In
									</Nav.Link>
								</LinkContainer>
							)}
							{userInfo && userInfo.isAdmin && (
								<NavDropdown title="Admin" id="adminmenu">
									<LinkContainer to="/admin/userlist">
										<NavDropdown.Item>
											Users
										</NavDropdown.Item>
									</LinkContainer>
									<LinkContainer to="/admin/productlist">
										<NavDropdown.Item>
											Products
										</NavDropdown.Item>
									</LinkContainer>
									<LinkContainer to="/admin/orderlist">
										<NavDropdown.Item>
											Orders
										</NavDropdown.Item>
									</LinkContainer>
								</NavDropdown>
							)}
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</header>
	);
}

export default Header
