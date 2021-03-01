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
    const [ playForest ] = useSound(forestSFX, { volume: .3, loop: true })
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
                    <img src="/img/pozadi.png" />
                </div>
                <div className={classNames(['obj mesic', isFullMoon && 'uplnek'])} onClick={() => setIsFullMoon(!isFullMoon)}></div>

                <animated.div className="anim" style={{ transform: props.xy.interpolate(trans1) }}>
                    <div className="obj kopec2">
                        <img src="/img/kopec2.png" />
                    </div>
                    <div className="obj m1">
                        <img src="/img/m1.png" />
                    </div>
                    <div className="obj m2">
                        <img src="/img/m2.png" />
                    </div>
                    <div className="obj m3">
                        <img src="/img/m3.png" />
                    </div>
                    <div className="obj m4">
                        <img src="/img/m4.png" />
                    </div>
                    <div className="obj m5">
                        <img src="/img/m5.png" />
                    </div>
                    <div className="obj m6">
                        <img src="/img/m6.png" />
                    </div>
                    <div className="obj m7">
                        <img src="/img/m7.png" />
                    </div>
                    <div className="obj m8">
                        <img src="/img/m8.png" />
                    </div>
                    <div className="obj m9">
                        <img src="/img/m9.png" />
                    </div>
                    <div className="obj m10">
                        <img src="/img/m10.png" />
                    </div>
                    <div className="obj m11">
                        <img src="/img/m11.png" />
                    </div>
                </animated.div>

                <animated.div className="anim" style={{ transform: props.xy.interpolate(trans2) }}>
                    <div className="obj hradec">
                        <img src="/img/hrad.png" />
                    </div>
                    <div className="obj kopec1">
                        <img src="/img/kopec.png" />
                    </div>
                    <div className={classNames(['obj karkulka', isOnTheHill && 'na-kopci'])} onClick={() => setIsOnTheHill(!isOnTheHill)}>
                        <img src="/img/karkulka.png" />
                    </div>
                    <div className="obj o1">
                        <img src="/img/o1.png" />
                    </div>
                    <div className="obj o2">
                        <img src="/img/o2.png" />
                    </div>
                    <div className="obj o3">
                        <img src="/img/o3.png" />
                    </div>
                    <div className="obj o4">
                        <img src="/img/o4.png" />
                    </div>
                    <div className="obj o5">
                        <img src="/img/o5.png" />
                    </div>
                    <div className="obj o6">
                        <img src="/img/o6.png" />
                    </div>
                    <div className="obj o7">
                        <img src="/img/o7.png" />
                    </div>
                    <div className="obj o8">
                        <img src="/img/o8.png" />
                    </div>
                    <div className="obj o9">
                        <img src="/img/o9.png" />
                    </div>
                    <div className="obj o10">
                        <img src="/img/o10.png" />
                    </div>
                    <div className="obj o11">
                        <img src="/img/o11.png" />
                    </div>
                    <div className="obj o12">
                        <img src="/img/o12.png" />
                    </div>
                </animated.div>

                <animated.div className="anim" style={{ transform: props.xy.interpolate(trans3) }}>
                    <div className="obj fg">
                        <img src="/img/popredi.png" />
                    </div>
                    <div className="obj ovce1" onClick={playSheep}>
                        <img src="/img/ovce.png" />
                    </div>
                    <div className="obj ovce2" onClick={playSheep2}>
                        <img src="/img/ovce2.png" />
                    </div>
                    <div className="obj sova" onClick={playOwl}>
                        <img src="/img/sova.png" />
                    </div>
                    <div className="obj netopyr" onClick={playBat}>
                        <img src="/img/netopyr.png" />
                    </div>
                    <div className="obj vlk" onClick={playWolf}>
                        <img src="/img/vlk.png" />
                    </div>
                    <div className="obj vlk2" onClick={playWolf2}>
                        <img src="/img/vlk2.png" />
                    </div>
                    <div className="obj hrib1">
                        <img src="/img/hrib.png" />
                    </div>
                    <div className="obj hrib2">
                        <img src="/img/hrib2.png" />
                    </div>
                </animated.div>
            </div>
        </main>
    )
}

export default IndexPage
