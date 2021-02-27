import React, { useState, useEffect } from 'react'
import '../components/common/global.scss'

let resizeTimeout = null
const IndexPage = () => {
    const [ isLoading, setIsLoading ] = useState(true)

    useEffect(() => {
        // setTimeout(() => setIsLoading(false), 3000)

        calculateVH()
        window.addEventListener('resize', calculateVH)
    }, [])

    const calculateVH = () => {
        if(resizeTimeout) clearTimeout(resizeTimeout)
        resizeTimeout = setTimeout(() => {
            console.log('resize')
            let vh = window.innerHeight * 0.01
            document.documentElement.style.setProperty('--vh', `${vh}px`)
        }, 200)
    }

    return (
        <main className="buk">
            <title>Home Page</title>

            {false && isLoading && (
                <div className="loading">
                    <h1>Načítám</h1>
                </div>
            )}

            <div className="scene">
                <div className="obj bg">
                    <img src="/img/pozadi.png" alt=""/>
                </div>
                <div className="obj kopec2">
                    <img src="/img/kopec2.png" alt=""/>
                </div>
                <div className="obj kopec1">
                    <img src="/img/kopec.png" alt=""/>
                </div>
                <div className="obj fg">
                    <img src="/img/popredi.png" alt=""/>
                </div>
            </div>
        </main>
    )
}

export default IndexPage
