import React, { useState, useEffect } from 'react'
import classNames from 'classnames'
import '../components/common/global.scss'

let resizeTimeout = null
const IndexPage = () => {
    const [ isLoading, setIsLoading ] = useState(true)
    const [ isFullMoon, setIsFullMoon ] = useState(true)

    useEffect(() => {
        setTimeout(() => setIsLoading(false), 5000)

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
                <div className={classNames(['obj bg', isFullMoon && 'uplnek'])}>
                    <img src="/img/pozadi.png" alt=""/>
                </div>
                <div className="obj hradec">
                    <img src="/img/hrad.png" alt=""/>
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

                <div className={classNames(['obj mesic', isFullMoon && 'uplnek'])} onClick={() => setIsFullMoon(!isFullMoon)}></div>
                <div className="obj karkulka">
                    <img src="/img/karkulka.png" alt=""/>
                </div>
                <div className="obj ovce1">
                    <img src="/img/ovce.png" alt=""/>
                </div>
                <div className="obj ovce2">
                    <img src="/img/ovce2.png" alt=""/>
                </div>
                <div className="obj sova">
                    <img src="/img/sova.png" alt=""/>
                </div>
                <div className="obj netopyr">
                    <img src="/img/netopyr.png" alt=""/>
                </div>
                <div className="obj vlk">
                    <img src="/img/vlk.png" alt=""/>
                </div>
                <div className="obj vlk2">
                    <img src="/img/vlk2.png" alt=""/>
                </div>
                <div className="obj hrib1">
                    <img src="/img/hrib.png" alt=""/>
                </div>
                <div className="obj hrib2">
                    <img src="/img/hrib2.png" alt=""/>
                </div>
            </div>
        </main>
    )
}

export default IndexPage
