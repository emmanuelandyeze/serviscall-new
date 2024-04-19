import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'

const SearchBox = ({ history }) => {
  const [keyword, setKeyword] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    if (keyword.trim()) {
      history.push(`/search/${keyword}`)
    } else {
      history.push('/')
    }
  }

  return (
		<Form onSubmit={submitHandler} inline>
			<Form.Control
				type="text"
				name="q"
				onChange={(e) => setKeyword(e.target.value)}
				placeholder="Search Products..."
        className="mr-sm-2 ml-sm-5"
        style={{borderRadius: '10px', width: '20rem', height: '3.5rem'}}
			></Form.Control>
			<Button
				type="submit"
				style={{ backgroundColor: '#BF2158', borderRadius: '10px', textTransform: 'capitalize', fontSize: '18px', height: '3.5rem' }}
				className="px-4"
			>
				Search
			</Button>
		</Form>
	);
}

export default SearchBox
