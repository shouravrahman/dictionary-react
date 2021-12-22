import { MenuItem, TextField } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { debounce } from 'lodash'
import React from 'react'
import languages from '../data/languages'
const Header = ({ language, setLanguage, word, setWord, LightTheme }) => {
	const handleChange = (language) => {
		setLanguage(language)
		setWord('')
	}

	const darkTheme = createTheme({
		palette: {
			primary: {
				main: LightTheme ? '#000' : '#fff',
			},
			secondary: {
				main: LightTheme ? '#fff' : '#000',
			},
			type: LightTheme ? 'light' : 'dark',
		},
	})
	const handleText = debounce((text) => {
		setWord(text)
	}, 100)
	return (
		<div className='header'>
			<span className='header_title'>{word ? word : 'Dictionary'}</span>
			<div className='inputs'>
				<ThemeProvider theme={darkTheme}>
					<TextField
						className='search'
						label='type a word'
						variant='standard'
						value={word}
						onChange={(e) => handleText(e.target.value)}
					/>
					<TextField
						className='select'
						value={language}
						onChange={(e) => handleChange(e.target.value)}
						select
						label='Language'>
						{languages.map((option) => {
							return (
								<MenuItem key={option.label} value={option.label}>
									{option.value}
								</MenuItem>
							)
						})}
						))
					</TextField>
				</ThemeProvider>
			</div>
		</div>
	)
}

export default Header
