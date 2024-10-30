import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Navbar'
import Home from './Home'
import Footer from './Footer'
import About from './About'
import Project from './Project'
import Blog from './Blog'
import Contact from './Contact'
import Error from './Error'
import Cv from './Cv'

export default function App() {
    return (
        <>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/projects' element={<Project />} />
                    <Route path='/blog' element={<Blog />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path='/cv' element={<Cv />} />


                    <Route path='/*' element={<Error />} />

                </Routes>
            </BrowserRouter>
            <Footer />
        </>
    )
}
