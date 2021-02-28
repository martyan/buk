import React, { useState, useEffect } from 'react'
import classNames from 'classnames'
import useSound from 'use-sound'
import '../components/common/global.scss'
import owlSFX from '../sounds/sova.wav'
import forestSFX from '../sounds/les.wav'
import batSFX from '../sounds/netopyr.wav'
import sheepSFX from '../sounds/ovce.wav'
import sheep2SFX from '../sounds/ovce2.wav'
import wolfSFX from '../sounds/vlk.mp3'
import wolf2SFX from '../sounds/vlk2.mp3'
import { useSpring, animated } from 'react-spring'

let resizeTimeout = null
const IndexPage = () => {
    const [ playOwl ] = useSound(owlSFX)
    const [ playBat ] = useSound(batSFX, { volume: .3 })
    const [ playSheep ] = useSound(sheepSFX)
    const [ playSheep2 ] = useSound(sheep2SFX)
    const [ playWolf ] = useSound(wolfSFX)
    const [ playWolf2 ] = useSound(wolf2SFX)
    const [ playForest ] = useSound(forestSFX, { volume: .3 })
    const [ isLoading, setIsLoading ] = useState(true)
    const [ isFullMoon, setIsFullMoon ] = useState(true)
    const [ isOnTheHill, setIsOnTheHill ] = useState(false)
    const [ forestPlaying, setForestPlaying ] = useState(false)


    useEffect(() => {
        setTimeout(() => setIsLoading(false), 8000)

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

    const handleMouseEnter = () => {
        if(forestPlaying) return
        playForest()
        setForestPlaying(true)
    }

    const [props, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 10, tension: 550, friction: 140 } }))
    const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2]
    const trans1 = (x, y) => `translate3d(${x / 500}px,${y / 500}px,0)`
    const trans2 = (x, y) => `translate3d(${x / 200}px,${y / 200}0px,0)`
    const trans3 = (x, y) => `translate3d(${x / 100}px,${y / 100}0px,0)`

    return (
        <main className="buk">
            <title>Home Page</title>

            {isLoading && (
                <div className="loading">
                    <h1>Načítám</h1>
                </div>
            )}

            <div className="scene" onMouseEnter={handleMouseEnter} onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}>
                <div className={classNames(['obj bg', isFullMoon && 'uplnek'])}>
                    <img src="/img/pozadi.png" alt=""/>
                </div>
                <animated.div className="anim" style={{ transform: props.xy.interpolate(trans1) }}>
                    <div className="obj kopec2">
                        <img src="/img/kopec2.png" alt=""/>
                    </div>
                </animated.div>
                <animated.div className="anim" style={{ transform: props.xy.interpolate(trans2) }}>
                    <div className="obj hradec">
                        <img src="/img/hrad.png" alt=""/>
                    </div>
                </animated.div>
                <animated.div className="anim" style={{ transform: props.xy.interpolate(trans2) }}>
                    <div className="obj kopec1">
                        <img src="/img/kopec.png" alt=""/>
                    </div>
                </animated.div>
                <animated.div className="anim" style={{ transform: props.xy.interpolate(trans3) }}>
                    <div className="obj fg">
                        <img src="/img/popredi.png" alt=""/>
                    </div>
                </animated.div>

                <div className={classNames(['obj mesic', isFullMoon && 'uplnek'])} onClick={() => setIsFullMoon(!isFullMoon)}></div>

                <animated.div className="anim" onClick={() => setIsOnTheHill(!isOnTheHill)} style={{ transform: props.xy.interpolate(trans2) }}>
                    <div className={classNames(['obj karkulka', isOnTheHill && 'na-kopci'])}>
                        <img src="/img/karkulka.png" alt=""/>
                    </div>
                </animated.div>

                <animated.div className="anim" style={{ transform: props.xy.interpolate(trans3) }}>
                    <div className="obj ovce1" onClick={playSheep}>
                        <img src="/img/ovce.png" alt=""/>
                    </div>
                </animated.div>
                <animated.div className="anim" style={{ transform: props.xy.interpolate(trans3) }}>
                    <div className="obj ovce2" onClick={playSheep2}>
                        <img src="/img/ovce2.png" alt=""/>
                    </div>
                </animated.div>
                <animated.div className="anim" style={{ transform: props.xy.interpolate(trans3) }}>
                    <div className="obj sova" onClick={playOwl}>
                        <img src="/img/sova.png" alt=""/>
                    </div>
                </animated.div>
                <animated.div className="anim" style={{ transform: props.xy.interpolate(trans3) }}>
                    <div className="obj netopyr" onClick={playBat}>
                        <img src="/img/netopyr.png" alt=""/>
                    </div>
                </animated.div>
                <animated.div className="anim" style={{ transform: props.xy.interpolate(trans3) }}>
                    <div className="obj vlk" onClick={playWolf}>
                        <img src="/img/vlk.png" alt=""/>
                    </div>
                </animated.div>
                <animated.div className="anim" style={{ transform: props.xy.interpolate(trans3) }}>
                    <div className="obj vlk2" onClick={playWolf2}>
                        <img src="/img/vlk2.png" alt=""/>
                    </div>
                </animated.div>
                <animated.div className="anim" style={{ transform: props.xy.interpolate(trans3) }}>
                    <div className="obj hrib1">
                        <img src="/img/hrib.png" alt=""/>
                    </div>
                </animated.div>
                <animated.div className="anim" style={{ transform: props.xy.interpolate(trans3) }}>
                    <div className="obj hrib2">
                        <img src="/img/hrib2.png" alt=""/>
                    </div>
                </animated.div>
            </div>
        </main>
    )
}

export default IndexPage
