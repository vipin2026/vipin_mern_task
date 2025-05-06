import React from 'react'
import { Routes, Route } from 'react-router-dom'
import routes from './routes'

function Routing() {
    return (
        <Routes>
            {routes.map(({ path, Component }) => (
                <Route path={path} key={path} element={<Component />} />
            ))}
        </Routes>
    )
}

export default Routing