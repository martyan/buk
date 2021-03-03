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
    const [ hasStarted, setHasStarted ] = useState(false)
    const [ isStarting, setIsStarting ] = useState(false)
    const [ isLoading, setIsLoading ] = useState(true)
    const [ isFullMoon, setIsFullMoon ] = useState(true)
    const [ isOnTheHill, setIsOnTheHill ] = useState(false)


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

    const start = () => {
        setIsStarting(true)
        playForest()
        setTimeout(() => {
            // setIsStarting(false)
            setHasStarted(true)
        }, 4000)
    }

    const [props, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 10, tension: 550, friction: 140 } }))
    const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2]
    const trans1 = (x, y) => hasStarted ? `translate3d(${x / 500 * -1}px,${y / 500 * -1}px,0)` : 'none'
    const trans2 = (x, y) => hasStarted ? `translate3d(${x / 250 * -1}px,${y / 250 * -1}0px,0)` : 'none'
    const trans3 = (x, y) => hasStarted ? `translate3d(${x / 125 * -1}px,${y / 125 * -1}0px,0)` : 'none'
    const trans4 = (x, y) => hasStarted ? `translate3d(${x / 40 * -1}px,${y / 40 * -1}0px,0)` : 'none'
    const trans5 = (x, y) => hasStarted ? `translate3d(${x / 20 * -1}px,${y / 20 * -1}0px,0)` : 'none'

    return (
        <main className="buk">
            <title>Home Page</title>

            {!hasStarted && (
                <div className={classNames(['splash', isStarting && 'starting'])}>
                    <div className="inner">
                        <h1 className={classNames([isLoading && 'visible'])}>Načítám</h1>
                        <button className={classNames([!isLoading && !isStarting && 'visible'])} onClick={start}>Spustit</button>
                    </div>
                </div>
            )}

            <div className={classNames(['scene', (isStarting || hasStarted) && 'with-anim'])} onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}>
                <div className={classNames(['obj bg', isFullMoon && 'uplnek'])}>
                    <img src="/img/pozadi2.png" />
                </div>

                <div className="obj ss ss1 sssm"></div>
                <div className="obj ss ss2 sssm"></div>
                <div className="obj ss ss3 sssm"></div>
                <div className="obj ss ss4 sssm"></div>
                <div className="obj ss ss5 sssm"></div>
                <div className="obj ss ss6 sssm"></div>
                <div className="obj ss ss7 sssm"></div>
                <div className="obj ss ss8 sssm"></div>
                <div className="obj ss ss9 sssm"></div>
                <div className="obj ss ss10 sssm"></div>
                <div className="obj ss ss11 sssm"></div>
                <div className="obj ss ss12 sssm"></div>
                <div className="obj ss ss13 sssm"></div>
                <div className="obj ss ss14 sssm"></div>
                <div className="obj ss ss15 sssm"></div>
                <div className="obj ss ss16 sssm"></div>
                <div className="obj ss ss17 sssm"></div>
                <div className="obj ss ss18 sssm"></div>
                <div className="obj ss ss19 sssm"></div>
                <div className="obj ss ss20 sssm"></div>
                <div className="obj ss ss21 sssm"></div>
                <div className="obj ss ss22 sssm"></div>
                <div className="obj ss ss23 sssm"></div>
                <div className="obj ss ss24 sssm"></div>
                <div className="obj ss ss25 sssm"></div>
                <div className="obj ss ss26 sssm"></div>
                <div className="obj ss ss27 sssm"></div>
                <div className="obj ss ss28 sssm"></div>
                <div className="obj ss ss29 sssm"></div>
                <div className="obj ss ss30 sssm"></div>
                <div className="obj ss ss31 sssm"></div>
                <div className="obj ss ss32 sssm"></div>
                <div className="obj ss ss33 sssm"></div>
                <div className="obj ss ss34 sssm"></div>
                <div className="obj ss ss35 sssm"></div>
                <div className="obj ss ss36 sssm"></div>
                <div className="obj ss ss37 sssm"></div>
                <div className="obj ss ss38 sssm"></div>
                <div className="obj ss ss39 sssm"></div>
                <div className="obj ss ss40 sssm"></div>
                <div className="obj ss ss41 sssm"></div>
                <div className="obj ss ss42 sssm"></div>
                <div className="obj ss ss43 sssm"></div>
                <div className="obj ss ss44 sssm"></div>
                <div className="obj ss ss45 sssm"></div>
                <div className="obj ss ss46 sssm"></div>
                <div className="obj ss ss47 sssm"></div>
                <div className="obj ss ss48 sssm"></div>
                <div className="obj ss ss49 sssm"></div>
                <div className="obj ss ss50 sssm"></div>
                <div className="obj ss ss51 sssm"></div>
                <div className="obj ss ss52 sssm"></div>
                <div className="obj ss ss53 sssm"></div>
                <div className="obj ss ss54 sssm"></div>
                <div className="obj ss ss55 sssm"></div>
                <div className="obj ss ss56 sssm"></div>
                <div className="obj ss ss57 sssm"></div>
                <div className="obj ss ss58 sssm"></div>
                <div className="obj ss ss59 sssm"></div>
                <div className="obj ss ss60 sssm"></div>
                <div className="obj ss ss61 sssm"></div>
                <div className="obj ss ss62 sssm"></div>
                <div className="obj ss ss63 sssm"></div>
                <div className="obj ss ss64 sssm"></div>
                <div className="obj ss ss65 sssm"></div>
                <div className="obj ss ss66 sssm"></div>
                <div className="obj ss ss67 sssm"></div>
                <div className="obj ss ss68 sssm"></div>
                <div className="obj ss ss69 sssm"></div>
                <div className="obj ss ss70 sssm"></div>
                <div className="obj ss ss71 sssm"></div>
                <div className="obj ss ss72 sssm"></div>
                <div className="obj ss ss73 sssm"></div>
                <div className="obj ss ss74 sssm"></div>
                <div className="obj ss ss75 sssm"></div>
                <div className="obj ss ss76 sssm"></div>
                <div className="obj ss ss77 sssm"></div>
                <div className="obj ss ss78 sssm"></div>
                <div className="obj ss ss79 sssm"></div>
                <div className="obj ss ss80 sssm"></div>
                <div className="obj ss ss81 sssm"></div>
                <div className="obj ss ss82 sssm"></div>
                <div className="obj ss ss83 sssm"></div>
                <div className="obj ss ss84 sssm"></div>
                <div className="obj ss ss85 sssm"></div>
                <div className="obj ss ss86 sssm"></div>
                <div className="obj ss ss87 sssm"></div>
                <div className="obj ss ss88 sssm"></div>
                <div className="obj ss ss89 sssm"></div>
                <div className="obj ss ss90 sssm"></div>
                <div className="obj ss ss91 sssm"></div>
                <div className="obj ss ss92 sssm"></div>
                <div className="obj ss ss93 sssm"></div>
                <div className="obj ss ss94 sssm"></div>
                <div className="obj ss ss95 sssm"></div>
                <div className="obj ss ss96 sssm"></div>
                <div className="obj ss ss97 sssm"></div>
                <div className="obj ss ss98 sssm"></div>
                <div className="obj ss ss99 sssm"></div>
                <div className="obj ss ss100 sssm"></div>
                <div className="obj ss ss101 sssm"></div>
                <div className="obj ss ss102 sssm"></div>
                <div className="obj ss ss103 sssm"></div>
                <div className="obj ss ss104 sssm"></div>
                <div className="obj ss ss105 sssm"></div>
                <div className="obj ss ss106 sssm"></div>
                <div className="obj ss ss107 sssm"></div>
                <div className="obj ss ss108 sssm"></div>
                <div className="obj ss ss109 sssm"></div>
                <div className="obj ss ss110 sssm"></div>
                <div className="obj ss ss111 sssm"></div>
                <div className="obj ss ss112 sssm"></div>
                <div className="obj ss ss113 sssm"></div>
                <div className="obj ss ss114 sssm"></div>
                <div className="obj ss ss115 sssm"></div>
                <div className="obj ss ss116 sssm"></div>
                <div className="obj ss ss117 sssm"></div>
                <div className="obj ss ss118 sssm"></div>
                <div className="obj ss ss119 sssm"></div>
                <div className="obj ss ss120 sssm"></div>
                <div className="obj ss ss121 sssm"></div>
                <div className="obj ss ss122 sssm"></div>
                <div className="obj ss ss123 sssm"></div>
                <div className="obj ss ss124 sssm"></div>
                <div className="obj ss ss125 sssm"></div>
                <div className="obj ss ss126 sssm"></div>
                <div className="obj ss ss127 sssm"></div>
                <div className="obj ss ss128 sssm"></div>
                <div className="obj ss ss129 sssm"></div>
                <div className="obj ss ss130 sssm"></div>
                <div className="obj ss ss131 sssm"></div>
                <div className="obj ss ss132 sssm"></div>
                <div className="obj ss ss133 sssm"></div>
                <div className="obj ss ss134 sssm"></div>
                <div className="obj ss ss135 sssm"></div>
                <div className="obj ss ss136 sssm"></div>
                <div className="obj ss ss137 sssm"></div>
                <div className="obj ss ss138 sssm"></div>
                <div className="obj ss ss139 sssm"></div>
                <div className="obj ss ss140 sssm"></div>
                <div className="obj ss ss141 sssm"></div>
                <div className="obj ss ss142 sssm"></div>
                <div className="obj ss ss143 sssm"></div>
                <div className="obj ss ss144 sssm"></div>
                <div className="obj ss ss145 sssm"></div>
                <div className="obj ss ss146 sssm"></div>
                <div className="obj ss ss147 sssm"></div>
                <div className="obj ss ss148 sssm"></div>
                <div className="obj ss ss149 sssm"></div>
                <div className="obj ss ss150 sssm"></div>
                <div className="obj ss ss151 sssm"></div>
                <div className="obj ss ss152 sssm"></div>
                <div className="obj ss ss153 sssm"></div>
                <div className="obj ss ss154 sssm"></div>
                <div className="obj ss ss155 sssm"></div>
                <div className="obj ss ss156 sssm"></div>
                <div className="obj ss ss157 sssm"></div>
                <div className="obj ss ss158 sssm"></div>
                <div className="obj ss ss159 sssm"></div>
                <div className="obj ss ss160 sssm"></div>
                <div className="obj ss ss161 sssm"></div>
                <div className="obj ss ss162 sssm"></div>
                <div className="obj ss ss163 sssm"></div>
                <div className="obj ss ss164 sssm"></div>
                <div className="obj ss ss165 sssm"></div>
                <div className="obj ss ss166 sssm"></div>
                <div className="obj ss ss167 sssm"></div>
                <div className="obj ss ss168 sssm"></div>
                <div className="obj ss ss169 sssm"></div>
                <div className="obj ss ss170 sssm"></div>
                <div className="obj ss ss171 sssm"></div>
                <div className="obj ss ss172 sssm"></div>
                <div className="obj ss ss173 sssm"></div>
                <div className="obj ss ss174 sssm"></div>
                <div className="obj ss ss175 sssm"></div>
                <div className="obj ss ss176 sssm"></div>
                <div className="obj ss ss177 sssm"></div>
                <div className="obj ss ss178 sssm"></div>
                <div className="obj ss ss179 sssm"></div>
                <div className="obj ss ss180 sssm"></div>
                <div className="obj ss ss181 sssm"></div>
                <div className="obj ss ss182 sssm"></div>
                <div className="obj ss ss183 sssm"></div>
                <div className="obj ss ss184 sssm"></div>
                <div className="obj ss ss185 sssm"></div>
                <div className="obj ss ss186 sssm"></div>
                <div className="obj ss ss187 sssm"></div>
                <div className="obj ss ss188 sssm"></div>
                <div className="obj ss ss189 sssm"></div>
                <div className="obj ss ss190 sssm"></div>
                <div className="obj ss ss191 sssm"></div>
                <div className="obj ss ss192 sssm"></div>
                <div className="obj ss ss193 sssm"></div>
                <div className="obj ss ss194 sssm"></div>
                <div className="obj ss ss195 sssm"></div>
                <div className="obj ss ss196 sssm"></div>
                <div className="obj ss ss197 sssm"></div>
                <div className="obj ss ss198 sssm"></div>
                <div className="obj ss ss199 sssm"></div>
                <div className="obj ss ss200 sssm"></div>
                <div className="obj ss ss201 ssm"></div>
                <div className="obj ss ss202 ssm"></div>
                <div className="obj ss ss203 ssm"></div>
                <div className="obj ss ss204 ssm"></div>
                <div className="obj ss ss205 ssm"></div>
                <div className="obj ss ss206 ssf"></div>
                <div className="obj ss ss207 ssf"></div>
                <div className="obj ss ss208 ssf"></div>
                <div className="obj ss ss209 ssf"></div>
                <div className="obj ss ss210 ssf"></div>
                <div className="obj ss ss211 ssm"></div>
                <div className="obj ss ss212 ssm"></div>
                <div className="obj ss ss213 ssl"></div>
                <div className="obj ss ss214 ssl"></div>
                <div className="obj ss ss215 ssl"></div>
                <div className="obj ss ss216 ssl"></div>
                <div className="obj ss ss217 ssl"></div>
                <div className="obj ss ss218 ssl"></div>
                <div className="obj ss ss219 ssl"></div>
                <div className="obj ss ss220 ssl"></div>


                <div className={classNames(['obj mesic', isFullMoon && 'uplnek'])} onClick={() => setIsFullMoon(!isFullMoon)}>
                    <img src="/img/mesic.png" />
                </div>

                <animated.div className="anim" style={{ transform: props.xy.interpolate(trans1) }}>
                    <div className="obj kopec2">
                        <img src="/img/kopec2.png" />
                    </div>
                    <div className="obj m m1">
                        <img src="/img/m1.png" />
                    </div>
                    <div className="obj m m2">
                        <img src="/img/m2.png" />
                    </div>
                    <div className="obj m m3">
                        <img src="/img/m3.png" />
                    </div>
                    <div className="obj m m4">
                        <img src="/img/m4.png" />
                    </div>
                    <div className="obj m m5">
                        <img src="/img/m5.png" />
                    </div>
                    <div className="obj m m6">
                        <img src="/img/m6.png" />
                    </div>
                    <div className="obj m m7">
                        <img src="/img/m7.png" />
                    </div>
                    <div className="obj m m8">
                        <img src="/img/m8.png" />
                    </div>
                    <div className="obj m m9">
                        <img src="/img/m9.png" />
                    </div>
                    <div className="obj m m10">
                        <img src="/img/m10.png" />
                    </div>
                    <div className="obj m m11">
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
                    <div className="obj o o1">
                        <img src="/img/o1.png" />
                    </div>
                    <div className="obj o o2">
                        <img src="/img/o2.png" />
                    </div>
                    <div className="obj o o3">
                        <img src="/img/o3.png" />
                    </div>
                    <div className="obj o o4">
                        <img src="/img/o4.png" />
                    </div>
                    <div className="obj o o5">
                        <img src="/img/o5.png" />
                    </div>
                    <div className="obj o o6">
                        <img src="/img/o6.png" />
                    </div>
                    <div className="obj o o7">
                        <img src="/img/o7.png" />
                    </div>
                    <div className="obj o o8">
                        <img src="/img/o8.png" />
                    </div>
                    <div className="obj o o9">
                        <img src="/img/o9.png" />
                    </div>
                    <div className="obj o o10">
                        <img src="/img/o10.png" />
                    </div>
                    <div className="obj o o11">
                        <img src="/img/o11.png" />
                    </div>
                    <div className="obj o o12">
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

                <animated.div className="anim anim-s" style={{ transform: props.xy.interpolate(trans1) }}>
                    <div className="obj s s5 sm"></div>
                    <div className="obj s s7 sm"></div>
                </animated.div>

                <animated.div className="anim anim-s" style={{ transform: props.xy.interpolate(trans4) }}>
                    <div className="obj s s1 m"></div>
                    <div className="obj s s2 m"></div>
                    <div className="obj s s3 m"></div>
                    <div className="obj s s4 m"></div>
                    <div className="obj s s11 m"></div>
                </animated.div>

                <animated.div className="anim anim-s" style={{ transform: props.xy.interpolate(trans5) }}>
                    <div className="obj s s6 l"></div>
                    <div className="obj s s8 l"></div>
                    <div className="obj s s9 l"></div>
                    <div className="obj s s10 l"></div>
                </animated.div>
            </div>
        </main>
    )
}

export default IndexPage
