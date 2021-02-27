import React, { useState, useEffect } from 'react'
import '../components/common/global.scss'

const IndexPage = () => {
    const [ isLoading, setIsLoading ] = useState(true)

    useEffect(() => {
        // setTimeout(() => setIsLoading(false), 3000)
    }, [])

    return (
        <main>
            <title>Home Page</title>

            {isLoading && (
                <div className="loading">
                    <h1>Načítám</h1>
                </div>
            )}
        </main>
    )
}

export default IndexPage
