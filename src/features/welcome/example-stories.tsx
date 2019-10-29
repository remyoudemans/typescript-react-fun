import React from 'react'
import { useSelector } from 'react-redux'

import { Root } from '../../store/modules'

export const ExampleStories: React.FunctionComponent = () => {
    const exampleStories = useSelector((state: Root.State) => state.welcome.exampleStories)

    const isLoading = useSelector((state: Root.State) => state.welcome.isLoading)

    return (
        <>
            {exampleStories &&
                exampleStories.titles.length === 0 &&
                isLoading && <p>Be patient! It's loading.</p>
            }
            {exampleStories &&
                exampleStories.titles.length > 0 &&
                !isLoading &&
                exampleStories.titles.map((title: string, index: number) => (
                    <div key={`example-story-${index}`}>
                        <h3>{title}</h3>
                        <p>{exampleStories.chapters[index]}</p>
                    </div>
                    )
                )

            }
        </>
    )
}
