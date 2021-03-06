import 'modules/bootstrap/dist/css/bootstrap.min.css'
import 'modules/font-awesome/css/font-awesome.min.css'

import React from 'react'
import About from '../about/about'
import Menu from '../template/menu'
import Todo from '../todo/todo'

export default props => (
    <div className='container'>
        <Menu />
        <Todo />
        <About />
    </div>
)